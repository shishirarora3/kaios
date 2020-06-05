import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Demo from './demo';
import KaiUI from './kai-ui/src/App';
import HomePage from './demo/HomeScreenC/components/HomePage'

const bootstrap = () => {
    // Render the app
    if(process.env.REACT_APP_KAI_UI){
        //https://kai-ui.onrender.com
        ReactDOM.render(<KaiUI/>, document.getElementById('root'));
    }else if(process.env.REACT_APP_DEMO){
        //https://kaios.onrender.com
        ReactDOM.render(<Demo/>, document.getElementById('root'));
    }else{
        //https://integrated-app.onrender.com
        ReactDOM.render(<HomePage/>, document.getElementById('root'));
    }
};


bootstrap();

