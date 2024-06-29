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
    <div className="col-auto">
        <div className="input-group">
            <span className="input-group-text border-dark"><i className="fa-solid fa-magnifying-glass "></i></span>
            <input
                type="text"
                className="form-control border-dark"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={onChange}
                
            />
        </div>
    </div>
    <div className="col-auto">
        <input
            type="text"
            className="form-control border-dark"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={onChange}
        />
    </div>
    <div className="col-auto">
        <input
            type="text"
            className="form-control border-dark"
            name="body"
            placeholder="Body"
            value={formData.body}
            onChange={onChange}
        />
    </div>
    <div className="col-auto">
        <button type="submit" className="btn text-white" style={{backgroundColor:"rgb(40, 76, 121)",borderRadius:"17px"}}>Search</button>
    </div>
</form>
    

  );
};
