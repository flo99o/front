import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
//components
import Button from "./Button";


Modal.setAppElement("#root");

const DeleteAccount = () => {
  let history = useHistory();

  //get the user's id form localstorage
  const getUserID = JSON.parse(localStorage.getItem("dataKey"));
  const userID = getUserID.userID;

  //handle modal opening
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  //handle modal opening
  const handleModale = () => {
    setmodalIsOpen(true);
  };

  //delete the account of the user
  const deleteAccount = async () => {
    setmodalIsOpen(false);
    const url = `http://localhost:5000/allpeople/deleteUserAccount/${userID}`;
    await axios.delete(url).then((res) => console.log("data: ", res));
    alert("Votre compte a été supprimé");
    localStorage.clear();
    history.push("/home");
  };

  return (
    <>
      <div className="othersOptions">
        <Button
          action={() => handleModale()}
          className={"btn btn--round btn--grey"}
          value={"supprimer mon compte"}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        shouldCloseOnOverLayClick={false}
      >
        <div>
          <h2>confirmer la suppression ?</h2>
          <button onClick={() => deleteAccount()}>Oui</button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteAccount;
