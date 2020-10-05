import React from "react";

function ResultBox(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col">
              <h4>Results</h4>
            </div>
          </div>
          {props.books.map(function (book, index) {
            return (
              <div className="card" key={index}>
                <div className="row">
                  <div className="col s12 m10 l10">
                    <h5>{book.bookName}</h5>
                  </div>
                  <div className="col s12 m2 l2">
                    <button className="btn" type="button" onClick={props.view}>
                      View
                    </button>
                    <button className="btn" type="button" onClick={props.save}>
                      Save
                    </button>
                  </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        Written by {book.author}    
                    </div>
                </div>
                <div className="row">
                  <div className="col s12 m3 l3">
                    <img src={book.image} alt={book.title}/>
                  </div>
                  <div className="col s12 m9 l9">
                    {book.discription}
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

export default ResultBox;
