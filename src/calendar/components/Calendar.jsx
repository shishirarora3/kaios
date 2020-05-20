import React from 'react';
import {CalendarListItemHeader} from "./CalendarListItemHeader";
import {CalendarListItem} from "./CalendarListItem";
import config from "../../Config";
import {getEvents, getAllDriveItems} from "../../GraphService";
import "../styles/Calender.css";
import {EventDetails} from "./EventDetails";
import {observer} from 'mobx-react';
import {updateCalendarItemsMap} from '../actions/calendarActions';
import {getActiveEventDetailsByEtag, getParsedEventsMap} from "../selectors/getCalendarEvents";

export const Calendar = observer(class Calendar extends React.Component {
    async componentDidMount() {
        try {

            // Get the user's access token
            const accessToken = this.props.accessToken;
            console.log("Calendar: "+ accessToken);
            if(!accessToken){
                return;
            }
            // Get the user's events
            const events = await getAllDriveItems(accessToken, this.props.select);
            // Update the array of events in state
            events && updateCalendarItemsMap(events);
        } catch (err) {
            console.error('ERROR in getting events', err);
        }
    }

    render() {
        const eventsMap= getParsedEventsMap();
        const eventKeys = Object.keys(eventsMap).sort();
        const activeEtag = this?.props?.match?.params?.etag;
        if(activeEtag){
            const eventDetails = getActiveEventDetailsByEtag(activeEtag);
            return <EventDetails {...this?.props}
                                 className="mailListContainer"
                                 dangerouslySetInnerHTML={{__html: eventDetails?.body?.content}}/>;
        }
        return <div className="mailListContainer">{
            eventKeys.map((eventKey, k) => <React.Fragment key={k}>
                <CalendarListItemHeader start={eventsMap[eventKey][0]?.start}/>
                {eventsMap[eventKey].map((e, k)=><CalendarListItem key={k} tabIndex={k+1} {...e} />)}
            </React.Fragment>)
        }
        </div>;
    }
});