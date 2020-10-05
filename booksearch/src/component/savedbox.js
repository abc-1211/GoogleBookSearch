import React, { useEffect, useState } from "react";
import services from "../services";

function SavedBox() {
  const defaultData = [
    {
      authors: ["OECD"],
      imageLinks: [
        {
          smallThumbnail:
            "http://books.google.com/books/content?id=YHI9W0M242gC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=YHI9W0M242gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
      ],
      title:
        "OECD Guidelines for the Testing of Chemicals, Section 4 Test No. 405: Acute Eye Irritation/Corrosion",
      infoLink:
        "https://play.google.com/store/books/details?id=YHI9W0M242gC&source=gbs_api",
      description:
        "This method provides information on health hazard likely to arise from exposure to test substance (liquids, solids and aerosols) by application on the eye. This Test Guideline is intended preferably for use with albino rabbit. The test substance is ...",
      __v: 0,
    },
    {
      authors: ["OECD"],
      imageLinks: [
        {
          smallThumbnail:
            "http://books.google.com/books/content?id=YHI9W0M242gC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=YHI9W0M242gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
      ],
      title:
        "OECD Guidelines for the Testing of Chemicals, Section 4 Test No. 405: Acute Eye Irritation/Corrosion",
      infoLink:
        "https://play.google.com/store/books/details?id=YHI9W0M242gC&source=gbs_api",
      description:
        "This method provides information on health hazard likely to arise from exposure to test substance (liquids, solids and aerosols) by application on the eye. This Test Guideline is intended preferably for use with albino rabbit. The test substance is ...",
      __v: 0,
    },
  ];

  const [savedBooks, setSavedBooks] = useState(defaultData);

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
