import {AuthProviderCallback, Client} from "@microsoft/microsoft-graph-client";


type AccessCode= {accessToken: string};
type Select= string | string[];

function getAuthenticatedClient(accessToken: AccessCode) {
  // Initialize Graph client
  const client = Client.init({
    // Use the provided access token to authenticate
    // requests
      baseUrl: "https://outlook.office.com/api/",
      defaultVersion: "v2.0",
      authProvider: (done: AuthProviderCallback) => {
        done(null, accessToken.accessToken);
      }
  });
  return client;
}

export async function getUserDetails(accessToken: AccessCode) {
    console.log("getUserDetails");
  const client = getAuthenticatedClient(accessToken );
  const user = await client.api('/me').get();
    console.log("getUserDetails: user", user );
  return user;
}

export async function getEvents(accessToken: string, select: Select) {
    const client = getAuthenticatedClient({accessToken});
    if(!select){
        return;
    }
    const events = await client
        .api('/me/events')
        .orderby('createdDateTime DESC')
        .select(select)
        .get();

    return events;
}
export async function getAllDriveItems(accessToken: string) {
    const client = getAuthenticatedClient({accessToken});
    const fn = async (endPoint: string)=>{
        let events;
        try{
            events = await client.api(endPoint)
                .version('beta')
                .get();
            console.log(events);
        }catch(e){
            console.log("error ", endPoint, e);
            return e;
        }
        console.log("success ", endPoint, events);
        return events;
    }
    const endPoints = [
        "/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location",
        "/me/calendars", "me/calendarview?startdatetime=2020-05-20T11:06:34.856Z&enddatetime=2020-05-27T11:06:34.856Z",
        "/me/messages","/me/outlook/masterCategories",
        "/me/drive/root/children","/me/drive/recent", "/me/drive/sharedWithMe" //drive
    ]

    return Promise.all(endPoints.map(fn)).catch(e=>{
        console.log(e);
    });
}