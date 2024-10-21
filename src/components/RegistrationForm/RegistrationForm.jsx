import { ErrorMessage, Field, Formik, Form } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const FormValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Must be a valid email")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const RegistrationForm = ({ submit }) => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
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
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />
        <br />
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
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
