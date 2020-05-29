import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const bootstrap = () => {
    // Render the app
    if(process.env.DEMO){
        ReactDOM.render(<div>true</div>, document.getElementById('root'));
    }else{
        ReactDOM.render(<App />, document.getElementById('root'));
    }
};


bootstrap();

