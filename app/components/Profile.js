var React = require('react');
var Router = require('react-router');

var UserProfile = require('./github/UserProfile');
var Repos = require('./github/Repos');
var Notes = require('./notes/Notes');

var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');


var Profile = React.createClass({

    mixins: [
        Router.State, // needed for querying route params
        ReactFireMixin
    ],

    getInitialState: function() {
        return {
            notes: [ 'my note 1' ],
            bio: { name: 'thomas' },
            repos: [ 'react', 'webpack' ]
        };
    },

    componentDidMount: function() {
        this.ref = new Firebase('https://react-webpack-test.firebaseio.com');
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, 'notes');
        console.log('this.getParams(): ', this.getParams(), childRef);
    },

    componentWillUnmount: function() {
        this.unbind('notes');
    },

    handleAddNote: function(newNote) {
        var concatedArr = this.state.notes.concat([newNote]);
        this.ref.child(this.getParams().username).set(concatedArr);
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
                <Notes username={username}
                       notes={this.state.notes}
                       addNote={this.handleAddNote}
                />
              </div>
            </div>
        );
    }

});

module.exports = Profile;