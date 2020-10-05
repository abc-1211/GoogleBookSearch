import React, { useEffect, useState } from "react";
import services from "../services";

function SavedBox() {
  const [savedBooks, setSavedBooks] = useState([]);

  const click = async (_id) => {
    try {
        const res = await services.deleteSaved(_id);
        console.log(_id);
        console.log(res.msgBody);
        if (res.reload) {
            window.location.reload();
        }
    } catch (err) {
        return err;
    }

  };

  useEffect(() => {
    const getSavedBooks = async () => {
      try {
        const data = await services.getSaved();
        setSavedBooks(data);
      } catch (err) {
        return err;
      }
    };
    getSavedBooks();
  }, []);
  console.log(savedBooks);

  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col">Saved Books</div>
          </div>
          {savedBooks.map(function (book, index) {
            return (
              <div className="card" key={index}>
                <div className="row">
                  <div className="col s12 m10 l10">
                    <h5>{book.title}</h5>
                  </div>
                  <div className="col s12 m2 l2">
                    <button className="btn" type="button">
                      <a href={book.infoLink} className="white-text">
                        View
                      </a>
                    </button>
                    <button
                      className="btn"
                      type="button"
                      onClick={() => click(book._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">Written by {book.authors}</div>
                </div>
                <div className="row">
                  <div className="col s12 m3 l3">
                    <img
                      src={book.imageLinks.smallThumbnail}
                      alt={book.title}
                    />
                  </div>
                  <div className="col s12 m9 l9">
                    <p>{book.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SavedBox;
