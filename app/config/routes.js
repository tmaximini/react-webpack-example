import React from 'react';

import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

import { Router, DefaultRoute, Route } from 'react-router';


// weirdness ¯\_(ツ)_/¯
export default (
    <Route name="app" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>
);