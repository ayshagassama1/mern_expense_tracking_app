import React, { useEffect } from "react";

import { Link, useHistory, useNavigate } from "react-router-dom";
//import ReactMarkdown from "react-markdown";


import { useDispatch, useSelector } from "react-redux";
//import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { listUser, login } from "../actions/userAction";

function Test() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  /*const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;*/

  // const filteredNotes = notes.filter((note) =>
  //   note.title.toLowerCase().includes(search.toLowerCase())
  // );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  

  /*const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;*/

  useEffect(() => {
    dispatch(login(listUser()));
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    navigate,
    userInfo,
//successDelete,
   // successCreate,
   // successUpdate,
  ]);

  /*const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };*/

  return (
    <h1> Reussie</h1>
  );
}

export default Test;