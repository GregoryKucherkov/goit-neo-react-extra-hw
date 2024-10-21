import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./UpdateContactForm.module.css";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const FormValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    // .matches(/^[\d-]+$/, "Must be a number")
    .matches(/^([-+()]?\d+)*$/, "Must be a number")

    .required("Required"),
});

function UpdateContactForm({ id, name, number, setIsEditing }) {
  const dispatch = useDispatch();

  const handleEdit = (values, actions) => {
    dispatch(editContact({ contactId: id, updatedData: values }))
      .unwrap()
      .then(() => {
        toast.success("You successfully edit a contact!");
      })
      .catch(() => {
        toast.error("Error! Youe contact wasn`t edited!");
      });

    actions.resetForm();
    setIsEditing(false);
  };
  const nameId = useId();
  const telId = useId();
  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={handleEdit}
      validationSchema={FormValidSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameId} />

        <ErrorMessage name="name" component="span" />
        <label htmlFor={telId}>Number</label>
        <Field className={css.field} type="tel" name="number" id={telId} />

        <ErrorMessage name="number" component="span" />
        <div className={css.buttons}>
          <button className={css.btn} type="submit">
            Confirm changes
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default UpdateContactForm;
