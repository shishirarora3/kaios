import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import HomePageA from './demo/HomePageA/HomePageA';

const bootstrap = () => {
    // Render the Home Page
    ReactDOM.render(<HomePageA/>, document.getElementById('root'));
};

bootstrap();