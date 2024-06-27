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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <input type="text" name="name" placeholder="name" value={formData.name} onChange={onChange} />
      <input type="text" name="author" placeholder="author" value={formData.author} onChange={onChange} />
      <input type="text" name="body" placeholder="body" value={formData.body} onChange={onChange} />
      <input type="text" name="type" placeholder="type" value={formData.type} onChange={onChange} />
      <input type="submit" />
      <button>Reset</button>
    </form>
  );
};
