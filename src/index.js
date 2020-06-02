import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import HomePageA from './homeScreenA/homePageA/HomePageA';


const bootstrap = () => {
    // Render the Home Page
    ReactDOM.render(<HomePageA/>, document.getElementById('root'));
};


bootstrap();