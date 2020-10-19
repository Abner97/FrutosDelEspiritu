import React, { useContext, useEffect } from "react";

import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import * as Yup from "yup";
import { AuthContext } from "../context/auth/AuthContext";
import { useHistory } from "react-router-dom";

interface LoginValues {
  name: string;
  email: string;
}

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Muy Largo!")
    .max(50, "Muy Corto!")
    .required("Porfavor introduzca su nombre"),
  email: Yup.string().email().required("Porfavor introduzca su email"),
});

const LoginForm = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const { saveCredentials, email, name } = authContext;

  const sendCredentials = (name: string, email: string) => {
    saveCredentials(name, email);
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
      <Card.Body>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(
            values: LoginValues,
            { setSubmitting }: FormikHelpers<LoginValues>
          ) => {
            setSubmitting(false);
            sendCredentials(values.name, values.email);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="name">
                {({ field, ...props }: FieldProps) => (
                  <FormGroup controlId="name">
                    <FormLabel>Tú Nombre</FormLabel>
                    <FormControl
                      type={"text"}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormGroup>
                )}
              </Field>
              {errors.name && touched.name ? (
                <div style={{ color: "red" }}>{errors.name}</div>
              ) : null}
              <Field name="email">
                {({ field, ...props }: FieldProps) => (
                  <FormGroup controlId="email">
                    <FormLabel>Tú Email</FormLabel>
                    <FormControl
                      type={"email"}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormGroup>
                )}
              </Field>
              {errors.name && touched.name ? (
                <div style={{ color: "red" }}>{errors.email}</div>
              ) : null}
              <Button variant="primary" type="submit" className="mt-2">
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