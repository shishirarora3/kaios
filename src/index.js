import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const bootstrap = () => {
    // Render the app
    console.log(process.env.REACT_APP_DEMO);
    if(process.env.REACT_APP_DEMO){
        ReactDOM.render(<div>Test</div>, document.getElementById('root'));
    }else{
        ReactDOM.render(<App />, document.getElementById('root'));
    }
};


bootstrap();

