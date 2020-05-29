import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import KaiUI from './kai-ui/src/App';

const bootstrap = () => {
    // Render the app
    console.log(process.env.REACT_APP_DEMO);
    if(process.env.REACT_APP_KAI_UI){
        ReactDOM.render(<KaiUI/>, document.getElementById('root'));
    }else if(process.env.REACT_APP_DEMO){
        ReactDOM.render(<App />, document.getElementById('root'));
    }
};


bootstrap();

