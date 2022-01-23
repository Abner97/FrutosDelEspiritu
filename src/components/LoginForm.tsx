import React, { useContext, useEffect } from "react";

//Components
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormLabel,
  Form as Frm,
  Col,
  InputGroup,
} from "react-bootstrap";
import { CountryDropdown } from "react-country-region-selector";

//Helpers
import * as Yup from "yup";
import { getUser } from "../services/auth/auth";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import { SignUp } from "../services/auth/interfaces";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Interfaces

const LoginSchema = Yup.object().shape({
  name: Yup.string()

    .min(3, "Muy Largo!")
    .max(50, "Muy Corto!")
    .required("Porfavor introduzca su nombre"),
  email: Yup.string().email().required("Porfavor introduzca su email"),
  birthDay: Yup.string()
    .test("test-name", "Ingrese una fecha realista", function (value) {
      const { path, createError } = this;
      let years = 0;

      if (value) {
        years = new Date().getFullYear() - new Date(value).getFullYear();
      }
      console.log(
        (value && years > 5) ||
          createError({ path, message: "Ingrese una fecha realista." })
      );
      return (
        (value && years > 5) ||
        createError({ path, message: "Ingrese una fecha realista." })
      );
    })
    .required("Por favor elija su fecha de nacimiento"),
  country: Yup.string().required("Por favor elija un país"),
});

const LoginForm: React.FC = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { saveCredentials, email, name } = authContext;

  const sendCredentials = (
    name: string,
    email: string,
    country: string,
    birthDay: string
  ) => {
    saveCredentials(name, email);
    const userInfo: SignUp = {
      name: name,
      email: email,
      country: country,
      birthDay: birthDay,
    };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    history.push("/home");
  };

  useEffect(() => {
    if (name !== "" && name !== null && email !== "" && email !== null) {
      history.push("/home");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Card>
      <Card.Body
        style={{ background: "#118a13" }}
        className={"border rounded-lg"}
      >
        <h3
          className={
            "d-flex justify-content-center  align-items-center font-weight-bold text-white "
          }
        >
          REGISTRA TUS DATOS
        </h3>
        <Formik
          initialValues={{
            name: "",
            email: "",
            country: "United States",
            birthDay: "09/02/2022",
          }}
          validationSchema={LoginSchema}
          onSubmit={(
            values: SignUp,
            { setSubmitting }: FormikHelpers<SignUp>
          ) => {
            setSubmitting(true);
            getUser(values).then((users) => {
              if (users) {
                localStorage.setItem("newUser", "no");
              } else {
                localStorage.setItem("newUser", "yes");
              }
              sendCredentials(
                values.name,
                values.email,
                values.country,
                values.birthDay
              );
            });
          }}
        >
          {({ touched, errors, setFieldValue, values }) => (
            <Form className={" text-black text-lg p-30"}>
              <Frm.Row>
                <Field name='name'>
                  {({ field, ...props }: FieldProps) => (
                    <FormGroup controlId='name' as={Col}>
                      <FormLabel>Tu Nombre</FormLabel>
                      <InputGroup>
                        <FormControl
                          type={"text"}
                          value={field.value}
                          onChange={field.onChange}
                          isInvalid={!!errors.name}
                        />
                        <Frm.Control.Feedback type='invalid'>
                          {errors.name}
                        </Frm.Control.Feedback>
                      </InputGroup>
                    </FormGroup>
                  )}
                </Field>

                <Field name='email'>
                  {({ field, ...props }: FieldProps) => (
                    <FormGroup controlId='email' as={Col}>
                      <FormLabel>Correo</FormLabel>
                      <InputGroup>
                        <FormControl
                          type={"email"}
                          value={field.value}
                          onChange={field.onChange}
                          isInvalid={!!errors.email}
                        />
                        <Frm.Control.Feedback type='invalid'>
                          {errors.email}
                        </Frm.Control.Feedback>
                      </InputGroup>
                    </FormGroup>
                  )}
                </Field>
              </Frm.Row>
              <Frm.Row>
                <Field name='birthDay'>
                  {({ field, ...props }: FieldProps) => (
                    <FormGroup controlId='birthDay' as={Col}>
                      <FormLabel>Fecha de Nacimiento</FormLabel>
                      <InputGroup>
                        <FormControl
                          as={DatePicker}
                          type={"date"}
                          name='birthDay'
                          selected={new Date(values.birthDay)}
                          isInvalid={!!errors.birthDay}
                          onChange={(date) => {
                            if (date) {
                              setFieldValue(
                                "birthDay",
                                new Date(date.toString()).toLocaleDateString()
                              );
                            }
                          }}
                        />
                        {errors.birthDay ? (
                          <div style={{ color: "#dc3545", fontSize: "80%" }}>
                            {errors.birthDay}
                          </div>
                        ) : null}
                      </InputGroup>
                    </FormGroup>
                  )}
                </Field>
                <Field name='country'>
                  {({ field, ...props }: FieldProps) => (
                    <FormGroup controlId='country' as={Col}>
                      <FormLabel>País</FormLabel>
                      <InputGroup>
                        <CountryDropdown
                          classes='form-control'
                          name='country'
                          value={field.value}
                          onChange={(_, val) => field.onChange(val)}
                        ></CountryDropdown>
                        <Frm.Control.Feedback type='invalid'>
                          {errors.country}
                        </Frm.Control.Feedback>
                      </InputGroup>
                    </FormGroup>
                  )}
                </Field>
                {/* {errors.country && touched.country ? (
                  <div style={{ color: "red" }}>{errors.country}</div>
                ) : null} */}
              </Frm.Row>

              <Button variant='info' type='submit' className='mt-2'>
                Comenzar test
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
