import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './HomeScreen'
const bootstrap = () => {
    // Render the app
    ReactDOM.render(<HomeScreen />, document.getElementById('root'));
};
bootstrap();

