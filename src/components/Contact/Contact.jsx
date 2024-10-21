import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import ImageModal from "../Modal/Modal";
import toast from "react-hot-toast";
import UpdateContactForm from "../UpdateContactForm/UpdateContactForm";
import { selectModal } from "../../redux/filters/selectors";
import { setModal } from "../../redux/filters/filtersSlice";
import { useState } from "react";

function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const [isEditing, setIsEditing] = useState(false);

  // Open modal when delete button is clicked
  const handleDeleteClick = () => {
    dispatch(setModal(true));
    // setModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    dispatch(setModal(false));
    // setModalOpen(false);
  };

  // Confirm deletion and dispatch Redux action
  const confirmDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("You successfully delete a contact!");
      })
      .catch(() => {
        toast.error("Error! Youe contact wasn`t deleted!");
      });
    closeModal(); // Close modal after deletion
  };

  return (
    <div className={css.contact}>
      {isEditing ? (
        <UpdateContactForm
          id={id}
          name={name}
          number={number}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <div className={css.npWrapper}>
            <p>
              <IoPersonSharp className={css.icon} />
              {name}
            </p>
            <p>
              <FaPhone className={css.icon} />
              {number}
            </p>
          </div>
          <button
            className={css.contactBtn}
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
          <button className={css.contactBtn} onClick={handleDeleteClick}>
            Delete
          </button>
        </>
      )}

      <ImageModal
        modalIsOpen={modal}
        closeModal={closeModal}
        onConfirm={confirmDelete}
        name={name}
      >
        Are you sure you want to delete {name}?
      </ImageModal>
    </div>
  );
}

export default Contact;
