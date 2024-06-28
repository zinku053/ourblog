import React, { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  
  return (
    <form className="row g-3" onSubmit={(e) => {
      e.preventDefault();
      onSubmit(formData);
    }}>
      <div className="col">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={onChange}
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={onChange}
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control"
          name="body"
          placeholder="Body"
          value={formData.body}
          onChange={onChange}
        />
      </div>

      <div className="col-auto">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      
    </form>
    

  );
};
