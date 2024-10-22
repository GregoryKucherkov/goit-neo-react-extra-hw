import { ErrorMessage, Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const FormValidSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Must be a valid email")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const LoginForm = ({ submit }) => {
  const passwordId = useId();
  const emailId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values, actions);
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormValidSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={emailId}>
          Email
        </label>
        <Field className={css.field} type="text" name="email" id={emailId} />
        <ErrorMessage name="email" component="span" />
        <br />
        <label className={css.label} htmlFor={passwordId}>
          Password
        </label>
        <Field
          className={css.field}
          type="text"
          name="password"
          id={passwordId}
        />
        <ErrorMessage name="password" component="span" />
        <br />

        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
