import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodosAsync, editTodosAsync } from "../redux/todoSlice"; //toggleComplete

const TodoItem = ({ id, title, completed }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [edit, setEdit] = useState(title);
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleCompleteAsync({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodosAsync({ id }));
  };

  const handleEditClick = () => {
    setOnEdit(true);
  };
  const handleSaveClick = () =>{
    dispatch(editTodosAsync({ id, title: edit  }));
    setOnEdit(false);
  }
  if (onEdit) {
    return (
      <li
        className={`list-group-item ${completed && "list-group-item-success"}`}
      >
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center">
            <input
              type="checkbox"
              className="mr-3"
              checked={completed}
              onClick={handleCheckboxClick}
            ></input>
            <input
            type="text"
            value={edit}
            onChange={(event) => setEdit(event.target.value)}
            maxLength={80}
            />
          </span>
          <div>
            <button className="btn btn-danger" onClick={handleSaveClick}>
              Save
            </button>
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li
        className={`list-group-item ${completed && "list-group-item-success"}`}
      >
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center">
            <input
              type="checkbox"
              className="mr-3"
              checked={completed}
              onClick={handleCheckboxClick}
              maxLength = {3}
            ></input>
            {title}
          </span>
          <div>
            <button className="btn btn-danger" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="btn btn-danger" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        </div>
      </li>
    );
  }
};

export default TodoItem;
