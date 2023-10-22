import React from "react";
import Modal from "@mui/material/Modal";
import "./Modal.scss";

const CustomModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} className="modal">
      <div className="modal-body">
        <h2>Congrats here is your code!</h2>
        <p>12312312</p>
        <div className="modal-buttons">
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleClose}>Continue</button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
