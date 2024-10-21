import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    // backgroundColor: "rgba(0, 0, 0, 0.5)", //
    backdropFilter: "blur(5px)",
  },
};

Modal.setAppElement("#root");

function ImageModal({ modalIsOpen, closeModal, onConfirm, name }) {
  if (!modalIsOpen) return;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Confirm Modal"
        ariaHideApp={false}
      >
        <h2 style={{ textAlign: "center" }}>Confirmation</h2>
        <p>
          <span style={{ fontWeight: "bold", marginBottom: "5px" }}>
            Are you sure you want to delete contact{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "green",
                padding: "5px",
                border: "1px solid green",
                margin: "2px",
                borderRadius: "4px",
              }}
            >
              {name}
            </span>{" "}
            ?{" "}
          </span>
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{ border: "1px solid grey", marginRight: "20px" }}
            onClick={onConfirm}
          >
            Confirm delete?
          </button>
          <button style={{ border: "1px solid grey" }} onClick={closeModal}>
            Keep it
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ImageModal;
