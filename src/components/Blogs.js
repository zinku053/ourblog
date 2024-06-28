import React from "react";


export const Blogs = ({ data, isLoading, remove, onEdit }) => {
  <div>hello</div>
  return (
    <div>
    {
      data.map((row, index) => {
        return (
            <div className="card m-3" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
                <h5 className="card-title">{row.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{row.author}</h6>
                <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>
                {row.body.length > 200 ? `${row.body.substring(0, 200)}...` : row.body}
                </p>
                <button className="btn m-2 p-2 text-white btn-success" onClick={() => onEdit(row)}>Edit</button>
                <button className="btn m-2 p-2 text-white btn-danger" onClick={() => remove(row._id)}>Delete</button>
            </div>
            </div>

          
        )


      })

    }
    </div>


  );
};
