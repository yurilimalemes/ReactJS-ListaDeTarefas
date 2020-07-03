import React from "react";
import "./Form.css";
import { FaPlus } from "react-icons/fa";

export default (props) => (
  <form action="#" onSubmit={props.handleSubmit} className="form">
    <input type="text" onChange={props.handleChange} value={props.novaTarefa} />
    <button type="submit">
      <FaPlus />
    </button>
  </form>
);
