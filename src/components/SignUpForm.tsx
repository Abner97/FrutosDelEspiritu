import React, { useState } from "react";

//Components
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import {
  Button,
  Dropdown,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from "react-bootstrap";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

//Helpers
import * as Yup from "yup";

//Interfaces

interface FormValues {
  signUpname: string;
  signUpemail: string;
  password: string;
  country: string;
  birthDay: number;
  church: string;
}
const LoginSchema = Yup.object().shape({
  signUpname: Yup.string()
    .min(3, "Muy Largo!")
    .max(50, "Muy Corto!")
    .required("Porfavor introduzca su nombre"),
  signUpemail: Yup.string().email().required("Porfavor introduzca su email"),
  password: Yup.string()
    .min(8, "Por favor escriba una contraseña de mínimo 8 caracteres")
    .max(20, "Muy Largo!")
    .required("Porfavor ingrese una contraseña"),
  birthDay: Yup.date().required(),
  country: Yup.string().required(),
  church: Yup.string().optional(),
});

interface SignUpFormProps extends React.HTMLAttributes<Modal> {
  showModal: boolean;
  stateHandler: Function;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  showModal = false,
  stateHandler,
}: SignUpFormProps) => {
  const handleClose = () => stateHandler(false);

  const sendUserData = (name: string, email: string) => {
    //saveCredentials(name, email);
  };

  const [country, setcountry] = useState("");
  function changeCountry(val: string) {
    setcountry(val);
  }
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Ingresa tus datos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            signUpname: "",
            signUpemail: "",
            password: "",
            country: "",
            birthDay: 0,
            church: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(
            values: FormValues,
            { setSubmitting }: FormikHelpers<FormValues>
          ) => {
            setSubmitting(true);
            handleClose();
            console.log(values);
            // submitSignUpForm({ name: values.name, email: values.email });
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form className={" text-black text-lg p-30"}>
              <Field name="name">
                {({ field, ...props }: FieldProps) => (
                  <FormGroup controlId="signUpname">
                    <FormLabel>Tú Nombre</FormLabel>
                    <FormControl
                      type={"text"}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormGroup>
                )}
              </Field>
              {errors.signUpname && touched.signUpname ? (
                <div style={{ color: "red" }}>{errors.signUpname}</div>
              ) : null}
              <Field name="email">
                {({ field, ...props }: FieldProps) => (
                  <FormGroup controlId="signUpemail">
                    <FormLabel>Correo</FormLabel>
                    <FormControl
                      type={"email"}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormGroup>
                )}
              </Field>
              {errors.signUpemail && touched.signUpemail ? (
                <div style={{ color: "red" }}>{errors.signUpemail}</div>
              ) : null}
              <Field name="password">
                {({ field, ...props }: FieldProps) => (
                  <FormGroup controlId="password">
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl
                      type={"password"}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormGroup>
                )}
              </Field>
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}
              <Field name="birthDay">
                {({ field, ...props }: FieldProps) => (
                  <FormGroup controlId="birthDay">
                    <FormLabel>Fecha de Nacimiento</FormLabel>
                    <FormControl
                      type={"text"}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormGroup>
                )}
              </Field>
              {errors.birthDay && touched.birthDay ? (
                <div style={{ color: "red" }}>{errors.birthDay}</div>
              ) : null}
              <Field name="country">
                {({ field, ...props }: FieldProps) => (
                  <FormGroup controlId="country">
                    <FormLabel>País</FormLabel>
                    <CountryDropdown
                      classes="form-control"
                      name="country"
                      value={field.value}
                      onChange={(_, val) => field.onChange(val)}
                    ></CountryDropdown>
                  </FormGroup>
                )}
              </Field>
              {errors.country && touched.country ? (
                <div style={{ color: "red" }}>{errors.country}</div>
              ) : null}
              <Field name="church">
                {({ field, ...props }: FieldProps) => (
                  <FormGroup controlId="church">
                    <FormLabel>Iglesia</FormLabel>
                    <FormControl
                      type={"text"}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormGroup>
                )}
              </Field>
              {errors.church && touched.church ? (
                <div style={{ color: "red" }}>{errors.church}</div>
              ) : null}
              <Modal.Footer>
                <Button variant="info" type="submit" className="mt-2">
                  Registrarse
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpForm;
