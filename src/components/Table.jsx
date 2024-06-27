import React from "react";


export const Table = ({ data, isLoading, remove, onEdit }) => {
  <div>hello</div>
  return (
    <div>
    {
      data.map((row, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{row.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{row.author}</h6>
              <p className="card-text">{row.body}</p>
              <button onClick={() => onEdit(row)}>Edit</button>
              <button onClick={() => remove(row._id)}>Delete</button>
            </div>
          </div>
        )


      })

    }
    </div>

    // <table>
    //   <thead>
    //     <tr>
    //       <th>Name</th>
    //       <th>Age</th>
    //       <th>Gender</th>
    //       <th>Nationality</th>
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((row, index) => {
    //       return (
    //         <tr key={index}>
    //           <td>{row.name}</td>
    //           <td>{row.age}</td>
    //           <td>{row.gender}</td>
    //           <td>{row.nationality}</td>
    //           <td>
    //             <button onClick={() => onEdit(row)}>Edit</button>
    //             <button onClick={() => remove(row._id)}>Delete</button>
    //           </td>
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
  );
};
