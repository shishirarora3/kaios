import React from 'react';
import {CalendarListItem} from "./CalendarListItem";
import config from "../../Config";
import {getAllDriveItems} from "../../GraphService";
import "../styles/Calender.css";

import ListView from "../../kai-ui/src/views/ListView/ListView";
import ArrowListItem from "../../kai-ui/src/components/ArrowListItem/ArrowListItem";
import {observer} from 'mobx-react';
import {updateCalendarItemsMap} from '../actions/calendarActions';
import {getActiveEventDetailsByEtag, getParsedEventsMap} from "../selectors/getCalendarEvents";

export const CalendarContainer = (props) => {
    const {eventKeys, eventsMap, eventDetails} = props;
    if (eventDetails) {
        return <div className="mailListContainer" dangerouslySetInnerHTML={{__html: eventDetails?.body?.content}}/>;
    }
    return <div className="mailListContainer">
        {
            eventKeys.length > 0 && <ListView>
                {
                    eventKeys.map((eventKey, k) => {
                        const start = eventsMap[eventKey][0]?.start;
                        const ref = React.createRef();
                        return <ArrowListItem
                            ref={ref}
                            primary={`${start[0]} ${start[2]}`}
                            index={k}
                            key={k}
                        >
                            {eventsMap[eventKey].map((e, k) => <div>
                                <CalendarListItem key={k} tabIndex={k + 1} {...e} />
                            </div>)}
                        </ArrowListItem>
                    })
                }
            </ListView>
        }
    </div>;
}

export const Calendar = observer(class Calendar extends React.Component {
    async componentDidMount() {
        try {
            // Get the user's access token
            const accessToken = await window.msal.acquireTokenSilent({
                scopes: config.scopes
            });
            // Get the user's events
            const _events = await getAllDriveItems(accessToken);
            const events = _events[0];
            // Update the array of events in state
            events && updateCalendarItemsMap(events);
            navigator.spatialNavigationEnabled = false;
        } catch (err) {
            console.error('ERROR', err);
        }
    }

    render() {
        const eventsMap = getParsedEventsMap();
        const eventKeys = Object.keys(eventsMap).sort();
        const activeEtag = this.props?.match?.params?.etag;
        const eventDetails = activeEtag && getActiveEventDetailsByEtag(activeEtag);
        return <CalendarContainer {...{...this.props, eventKeys, eventsMap, eventDetails}}/>;
    }
});