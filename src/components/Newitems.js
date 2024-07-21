import React from "react";

const Newitems =(props)=> {
    let { title, description, imgurl, newsurl, author, date, source } =
      props;
    return (
      <div>
        <div className="my-3">
          <div className="card">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>
             {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <img
              src={
                !imgurl
                  ? "https://upload.wikimedia.org/wikipedia/commons/4/48/Logo_New_18_Summer_2021.png"
                  : imgurl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}....</h5>
              <p className="card-text">{description}.....</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated By {!author ? "unkhown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a href={newsurl} className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Newitems;
