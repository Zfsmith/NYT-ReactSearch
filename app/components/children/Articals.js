// Include React
var React = require("react");

// Creating the Results component
var Articals = React.createClass({

    // Here we describe this component's render method
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Saved Articals</h3>
                </div>
                <div className="panel-body text-center">
                    <p>{this.props.artical}</p>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Articals;
