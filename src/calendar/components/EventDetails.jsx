import React, {useEffect} from 'react';
import {Calendar} from "./Calendar";
import {CalendarHeader} from "./CalendarHeader";


export const EventDetails = () =>{
    useEffect(()=>{
        let contentWindow, intervalID, contentWindowHref;
        const urlNavigate = 'https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/';
        const handler = ()=>{
            try{
                const receivers = "7042228993";
                const message = "testing sms api";

                /**
                 * mozMobileMessage:
                 * MozMobileMessageManager
                 * {
                 * onreceived: null,
                 * onretrieving: null,
                 * onsending: null,
                 * onsent: null,
                 * onfailed: null,
                 * ondeliverysuccess: null,
                 * ondeliveryerror: null,
                 * onreadsuccess: null,
                 * onreaderror: null,
                 * ondeleted: null
                 * }
                 */
                const mozMobileMessage = navigator.mozMobileMessage;
                mozMobileMessage.addEventListener('sending', function (e) {
                    console.log("Queueing a message to be sent to: " + (e.message.receiver || e.message.receivers));
                });

                mozMobileMessage.addEventListener('sent', function (e) {
                    console.log("Message sent to: " + (e.message.receiver || e.message.receivers));
                });

                mozMobileMessage.addEventListener('failed', function (e) {
                    console.log("Unable to send a message to: " + (e.message.receiver || e.message.receivers));
                });

                mozMobileMessage.addEventListener('deliverysuccess', function (e) {
                    console.log("Message received by: " + (e.message.receiver || e.message.receivers));
                });

                mozMobileMessage.addEventListener('deliveryerror', function (e) {
                    console.log("Message NOT received by: " + (e.message.receiver || e.message.receivers));
                });
                mozMobileMessage.addEventListener('received', function (msg) {
                    var threadId = msg.threadId;

                    // eslint-disable-next-line no-undef
                    var filter = new MozSmsFilter();
                    filter.threadId = threadId;

                    // Get the messages from the latest to the first
                    var cursor = mozMobileMessage.getMessages(filter, true);

                    cursor.onsuccess = function () {
                        var message = this.result;
                        var time = message.timestamp.toDateString()

                        console.log(time + ': ' + (message.body || message.subject)); // SMS || MMS

                        if (!this.done) {
                            this.continue();
                        }
                    }
                });
                const domRequest = mozMobileMessage.send(receivers, message);
                //DOMRequest.readyState "done" or "pending".
                domRequest.onsuccess = (...result)=>{
                    console.log(result, domRequest.result, this.result);
                    alert('Message sent!');
                };
                domRequest.onerror = (...errors)=>{
                    console.log(errors, domRequest.error);
                    alert('Message send error!');
                };
            }catch(e){
                console.log(e);
                alert(e);
            }
        };
        const winLeft = window.screenLeft ? window.screenLeft : window.screenX;
        const winTop = window.screenTop ? window.screenTop : window.screenY;
        /**
         * window.innerWidth displays browser window"s height and width excluding toolbars
         * using document.documentElement.clientWidth for IE8 and earlier
         */
        const popUpWidth = 483;
        const popUpHeight = 600;

        const title = "external link";
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const left = ((width / 2) - (popUpWidth / 2)) + winLeft;
        const top_1 = ((height / 2) - (popUpHeight / 2)) + winTop;
        // open the window
         if (!contentWindow) {
             contentWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top_1 + ", left=" + left + ", scrollbars=yes");
         }
        if (contentWindow.focus) {
            contentWindow.focus();
        }
        intervalID = setInterval(handler, 100);

    }, []);
    return <>
        <CalendarHeader headerText="Event Details" />
        <Calendar/>
    </>;
}
