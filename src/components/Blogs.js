import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Blogs = ({ data, isLoading, remove, onEdit }) => {
  <div>hello</div>
  return (
    <div className="row d-flex">
      {data.map((row, index) => (
        <div key={index} className="card m-3 col-12 col-md-6 col-lg-3" style={{ width: "18rem", textDecoration: 'none', backgroundColor: "rgba(114, 163, 232,.3)" }}>
          <div className="card-body">
            <p>{row.type}</p>
            <h5 className="card-title">{row.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{row.author}</h6>
            <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>
              {row.body.length > 200 ? `${row.body.substring(0, 200)}...` : row.body}
            </p>
            <div>
              {row.body.length > 200 && (  
                <Link to={`/blog/${row.id}`} className="read-more-link" style={{color:"black", textDecoration: 'none'}}>
                  Read More
                </Link>
              )}
            </div>
            <div>
              <button className="Button m-2 p-2" onClick={() => onEdit(row)}>Edit</button>
              <button className="Button m-2 p-2" onClick={() => remove(row.id)}>Delete</button>
            </div>


          </div>
        </div>
      ))}
    </div>


  );
};
