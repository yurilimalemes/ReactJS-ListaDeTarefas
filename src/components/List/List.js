import React from "react";
import "./List.css";

import { FaEdit, FaWindowClose } from "react-icons/fa";

export default (props) => (
  <ul className="tarefas">
    {props.tarefas.map((tarefa, index) => (
      <li key={tarefa}>
        {tarefa}
        <span>
          <FaEdit
            onClick={(e) => props.handleEdit(e, index)}
            className="edit"
          />
          <FaWindowClose
            onClick={(e) => props.handleDelete(e, index)}
            className="delete"
          />
        </span>
      </li>
    ))}
  </ul>
);
