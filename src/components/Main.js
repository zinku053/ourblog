import React, { useEffect, useState } from "react";
import  {Form}  from "./Form";
import { Table } from "./Table";
import { getPersons } from "../api";

export const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = (filter) => {
    setIsLoading(true);
    getPersons(filter)
      .then((response) => {
        setData(response);
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
    <div id="main">
      <Form onSubmit={onSubmit} />
      <Table data={data} isLoading={isLoading} remove={onRemove} onEdit={onEdit} />
    </div>
  );
};
