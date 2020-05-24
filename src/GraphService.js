var graph = require('@microsoft/microsoft-graph-client');

function getAuthenticatedClient(accessToken) {
  // Initialize Graph client
  const client = graph.Client.init({
    // Use the provided access token to authenticate
    // requests
    authProvider: (done) => {
      done(null, accessToken.accessToken);
    }
  });

  return client;
}

export async function getUserDetails(accessToken) {

    console.log("getUserDetails");
  const client = getAuthenticatedClient(accessToken);
  const user = await client.api('/me').get();
    console.log("getUserDetails: user", user );
  return user;
}

export async function getEvents(accessToken, select) {
    const client = getAuthenticatedClient(accessToken);
    if(select === false){
        return;
    }
    const events = await client
        .api('/me/events')
        .orderby('createdDateTime DESC')
        .select(select)
        .get();

    return events;
}
export async function getAllDriveItems(accessToken) {
    const client = getAuthenticatedClient(accessToken);
    const fn = async (endPoint)=>{
        let events;
        try{
            events = await client.api(endPoint)
                //.version('beta')
                .get();
            console.log(events);
        }catch(e){
            console.log("error ", endPoint, e);
            return e;
        }
        console.log("success ", endPoint, events);
        return events;
    }


    const urls = [
        "/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location",
        "/me/calendars",
        "me/calendarview?startdatetime=2020-05-20T11:06:34.856Z&enddatetime=2020-05-27T11:06:34.856Z",
        "/me/messages",
        "/me/drive/root/children","/me/drive/recent", "/me/drive/sharedWithMe" //drive
    ]

    const $batch = {requests: urls.map((url, id)=>{
        return ({
            url,
            method: "GET",
            id: id+1
        });
    })};
    const responses= await client.api('/$batch').version("v1.0").post($batch).then(({responses})=>
        responses.sort(({id: a}, {id: b})=>a-b).map(({body})=>body)
    ).catch(console.log);
    return responses;

}