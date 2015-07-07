var React = require('react');
var Router = require('react-router');

var UserProfile = require('./github/UserProfile');
var Repos = require('./github/Repos');
var Notes = require('./notes/Notes');


var Profile = React.createClass({

    mixins: [Router.State], // needed for querying route params

    getInitialState: function() {
        return {
            notes: [ 'my note 1' ],
            bio: { name: 'thomas' },
            repos: [ 'react', 'webpack' ]
        };
    },

    render: function() {

        var username = this.getParams().username;

        return (
             <div className="row">
              <div className="col-md-4">
                <UserProfile username={username} bio={this.state.bio} />
              </div>
              <div className="col-md-4">
                <Repos username={username} repos={this.state.repos} />
              </div>
              <div className="col-md-4">
                <Notes username={username} notes={this.state.notes} />
              </div>
            </div>
        );
    }

});

module.exports = Profile;