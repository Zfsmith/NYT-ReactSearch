// Include React
var React = require("react");

//sub componets
var Form = require("./children/Form");
var Results = require("./children/Results");
var Articals = require("./children/Articals");

// Helper Function
var helpers = require("./utils/helpers.js");

var Main = React.createClass({

	getInitialState: function() {
    return { searchTerm: "", results: "" };
  },

  componentDidUpdate: function(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then(function(data) {
        if (data !== this.state.results) {
          console.log("HERE");
          console.log(data);

          this.setState({ results: data });
        }

        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));
    }
  },

  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },

	render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2 className="text-center">New York Times Search</h2>
            <p className="text-center">
              <em>Search for an artical</em>
            </p>
          </div>

          <div className="col-md-6">

            <Form setTerm={this.setTerm} />

          </div>

          <div className="col-md-6">

            <Results artical={this.state.results} />

          </div>

        </div>
        <div className="row">
          <div className="col-md-12">

            <Articals artical={this.state.artical} />

          </div>
        </div>

      </div>
    );
  }

});

module.exports = Main;