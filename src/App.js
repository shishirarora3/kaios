import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {getUserDetails} from './GraphService';
import {CalendarBox} from './calendar/components/CalendarBox';

let history;
let location;
let childWindow;

class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            isAuthenticated: (true),
            user: null,
            error: null,
            accessToken: null
        };


    }
    componentDidMount() {
        let childWindowHref;
        if (!childWindow) {
            childWindow = window.open("https://outlook.office.com/calendar");
            if (childWindow.focus) {
                childWindow.focus();
            }
        }
        const int = setInterval(async () => {
            try {
                childWindowHref = childWindow.location.href;
            } catch (e) {
                console.log("not matched", childWindow.location);
            }
            try{
                if (!childWindowHref || childWindowHref === "about:blank") {
                    /**
                     * this will be general error scenario
                     */
                    return;
                }
                if (childWindowHref) {
                    clearInterval(int);
                    console.log("matched...", childWindowHref);
                    const accessToken = decodeURIComponent(childWindowHref?.split("token=")?.[1]);
                    console.log("got accessToken", accessToken);
                    const _state = await this.getUserProfile(accessToken);
                    _state && this.setState(_state);
                    console.log("_state, ", _state, this.setState);
                    childWindow.close();
                }
            }catch(e){
                console.log(e);
                throw e;
            }

        }, 100);
    }

    render() {
        let error = null;
        const {user, isAuthenticated, accessToken} = this.state;
        /**
         * {"displayName":"shishir","email":"shishir@kaiosorg.onmicrosoft.com"}
         */
        console.log("user in render", user, accessToken);
        if(!user || !accessToken){
            return <pre>
                {isAuthenticated}
                {accessToken}
                    </pre>
        }
        /**
         * location:
         * {
         * "href":"app://bdd52d40-a07c-4647-8e88-4680b4260752/index.html",
         * "origin":"app://bdd52d40-a07c-4647-8e88-4680b4260752",
         * "protocol":"app:",
         * "username":"",
         * "password":"",
         * "host":"bdd52d40-a07c-4647-8e88-4680b4260752",
         * "hostname":"bdd52d40-a07c-4647-8e88-4680b4260752",
         * "port":"",
         * "pathname":"/index.html",
         * "search":"","hash":""}
         */

        return (
            <>
                <Router>
                    <pre>
                            {JSON.stringify(user)}
                        {JSON.stringify(location)}
                        {isAuthenticated}
                        {accessToken}
                    </pre>
                    <Switch>
                        <Route path="/event-details/:etag"
                               render={(props, params) =>
                                   <CalendarBox {...props} params={params}
                                                headerText="Calendar Details"
                                                accessToken={accessToken}
                                                user={user}
                                                showError={this.setErrorMessage.bind(this)}
                                                select={false}
                                                userAgentApplication={this.userAgentApplication}
                                   />
                               }/>
                        <Route exact path=""
                               render={(props) => {
                                   history = props.history;
                                   location = props.location;
                                   //   /index.html
                                   if (isAuthenticated) {
                                       return <CalendarBox {...props}
                                                           accessToken={accessToken}
                                                           headerText={`Calendar - ${user.displayName}`}
                                                           user={user}
                                                           showError={this.setErrorMessage.bind(this)}
                                                           select="id,subject,start,end,location,body"
                                       />
                                   }
                                   return null;
                               }}/>

                    </Switch>
                </Router></>
        );
    }

    setErrorMessage(message, debug) {
        this.setState({
            error: {message: message, debug: debug}
        });
    }


    logout() {
        this.userAgentApplication.logout();
    }

    async getUserProfile(accessToken) {
        try {

            /**
             * Array [ "Calendars.Read", "openid", "profile", "User.Read", "email" ]
             * { uniqueId: "98e50d11-9e73-44e3-baf7-682c838db2ca",
             * tenantId: "d4f08ae6-b571-462b-a459-b56a8c0b2c14",
             * tokenType: "access_token",
             * idToken: Object,
             * idTokenClaims: Object,
             * accessToken: "eyJ0eXAiOiJKV1QiLCJub25jZSI6InNHcGV…",
             * scopes: [ "Calendars.Read", "openid", "profile", "User.Read", "email" ],
             * expiresOn: Date 2020-04-25T23:26:02.000Z,
             * account: Object,
             * accountState: "22e88e26-d1ab-4581-95f8-ef55310e53b1",
             * 1 more… }
             */
            if (accessToken) {
                let user;
                // Get the user's profile from Graph
                try {
                    user = await getUserDetails({accessToken});
                } catch (e) {
                    console.log(e);
                    console.error(e);
                }
                console.log("got acquireTokenSilent, getUserDetails", user, location, location?.pathname);
                /* eslint no-restricted-globals: "off"*/
                document.head.getElementsByTagName("title")[0].text = `Calendar - ${user?.displayName} - Outlook`;

                return {
                    isAuthenticated: true,
                    user: {
                        email: user?.mail || user?.userPrincipalName,
                        ...user
                    },
                    error: null,
                    accessToken
                };
            }
        } catch (err) {
            console.log(err);
            var error = {};
            if (typeof (err) === 'string') {
                var errParts = err.split('|');
                error = errParts.length > 1 ?
                    {message: errParts[1], debug: errParts[0]} :
                    {message: err};
            } else {
                error = {
                    message: err.message,
                    debug: JSON.stringify(err)
                };
                console.log(error);
            }

            this.setState({
                isAuthenticated: false,
                user: {},
                error: error
            });
        }
    }
};

export default App;
