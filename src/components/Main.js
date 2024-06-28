import React, { useEffect, useState } from "react";
import  {Form}  from "./Form";
import { Blogs } from "./Blogs";
import { getPersons } from "../api";
export let dataFromMain = [];
export const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = (filter) => {
    setIsLoading(true);
    getPersons(filter)
      .then((response) => {
        setData(response);
        dataFromMain = response; 
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSubmit = (formData) => {
    loadData(formData);
  };

  const onRemove = (id) => {};
  const onEdit = (rowData) => {};
  
  return (
    <div id="main" className="container">
      <div style={{height:"20px"}}></div>
      <Form onSubmit={onSubmit} />
      <Blogs data={data} isLoading={isLoading} remove={onRemove} onEdit={onEdit} />
    </div>
  );
};

