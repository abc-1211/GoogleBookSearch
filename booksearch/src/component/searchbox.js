import React from "react";

function SearchBox(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <div className="card-title">Book Search</div>
          <br />
          <form onSubmit={props.onSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Harry Potter"
                  id="first_name"
                  type="text"
                  className="validate"
                  name="searchWord"
                  ref={props.register}
                />
                <label htmlFor="first_name">Book</label>
              </div>
            </div>
            <div className="row center">
              <div className="col s12">
                <button className="btn" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchBox;
