import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UserAgentApplication} from 'msal';
import config from './Config';
import {getUserDetails} from './GraphService';
import {Box} from './calendar/components/Box';

let history;
let location;

class App extends Component {
    constructor(props) {
        super(props);
        navigator.spatialNavigationEnabled = true;
        const userAgentApplication = this.userAgentApplication = new UserAgentApplication({
            auth: {
                clientId: config.appId,
                navigateToLoginRequestUrl: false,
                redirectUri: config.redirectUri
            },
            cache: {
                cacheLocation: "localStorage"
            }
        });
        userAgentApplication.handleRedirectCallback((error, response) => {
            console.log(error, response.accessToken, response);
        });

        const user = this.userAgentApplication.getAccount();
        console.log("got account", user);//null
        this.state = {
            isAuthenticated: (user !== null),
            user: null,
            error: null
        };

        if (user) {
            // Enhance user object with data from Graph
            this.getUserProfile();
        } else {
            this.login();
        }
    }

    render() {
        let error = null;
        const {user, isAuthenticated} = this.state;
        /**
         * {"displayName":"shishir","email":"shishir@kaiosorg.onmicrosoft.com"}
         */
        console.log("user in render", user);
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
                    {/*<pre>
                            {JSON.stringify(user)}
                        {JSON.stringify(location)}
                        {isAuthenticated}
                    </pre>*/}
                    <Switch>
                        <Route path="/event-details/:etag"
                               render={(props, params) =>
                                   <Box {...props} params={params}
                                        headerText="Calendar Details"
                                        user={user}
                                        showError={this.setErrorMessage.bind(this)}
                                        select={false}
                                   />
                               }/>
                        <Route exact path=""
                               render={(props) => {
                                   history = props.history;
                                   location = props.location;
                                   //   /index.html
                                   console.log("matched", props.match.url, isAuthenticated, location);
                                   if (isAuthenticated) {
                                       return <Box {...props}
                                                   headerText="Calendar"
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

    async login() {
        try {
            const s = await this.userAgentApplication.loginPopup(
                {
                    scopes: config.scopes,
                    prompt: "select_account"
                });
            console.log("login popup closed idToken, idTokenClaims", s.idToken, s.idTokenClaims);
            /**
             * { uniqueId: "98e50d11-9e73-44e3-baf7-682c838db2ca",
             * tenantId: "d4f08ae6-b571-462b-a459-b56a8c0b2c14",
             * tokenType: "id_token",
             * idToken: Object,
             * idTokenClaims: Object,
             * accessToken: null,
             * scopes: Array[0], expiresOn: Date 2020-04-25T23:26:02.000Z, account: Object,
             * accountState: "156aeb73-9c3c-4649-905e-80ba1cca4f93", 1 more… }
             */
            const g = await this.getUserProfile();
            console.log("got User Profile", g);//undefined if not logged in
        } catch (err) {
            console.log("got error", err);
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
            }

            this.setState({
                isAuthenticated: false,
                user: null,
                error: error
            });
        }
    }

    logout() {
        this.userAgentApplication.logout();
    }

    async getUserProfile() {
        try {
            // Get the access token silently
            // If the cache contains a non-expired token, this function
            // will just return the cached token. Otherwise, it will
            // make a request to the Azure OAuth endpoint to get a token

            var accessToken = await this.userAgentApplication.acquireTokenSilent({
                scopes: config.scopes
            });
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
                    user = await getUserDetails(accessToken);
                } catch (e) {
                    console.log(e);
                    console.error(e);
                }
                console.log("got acquireTokenSilent, getUserDetails", user, location, location?.pathname);
                /* eslint no-restricted-globals: "off"*/

                this.setState({
                    isAuthenticated: true,
                    user: {
                        email: user?.mail || user?.userPrincipalName,
                        ...user
                    },
                    error: null
                });
                document.head.getElementsByTagName("title")[0].text = `Calendar - ${user?.displayName} - Outlook`;

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
