import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ clearUsers, showClear, setAlert, searchUsers }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "" || text === " ") {
      setAlert("Please enter something", "danger");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          className="form-control"
          type="text"
          name="text"
          placeholder="Search Users..."
          onChange={onChange}
          value={text}
        />
        <input type="submit" value="Seach" className="btn btn-dark btn-block" />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
