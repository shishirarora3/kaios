
// This the date to schedule the alarm\
// @ts-ignore
// eslint-disable-next-line no-undef
const person = new mozContact();
person.givenName  = ["John"];
person.familyName = ["Doe"];
person.nickname   = ["No kidding"];

// second way: using a value object
const contactData = {
    givenName: ["John"],
    familyName: ["Doe"],
    nickname: ["No kidding"]
};

if ("init" in person) {
    // Firefox OS 1.2 and below uses a "init" method to initialize the object
    person.init(contactData);
}

// save the new contact
// @ts-ignore
const saving = navigator.mozContacts.save(person);

saving.onsuccess = function() {
    alert('new contact saved');
    // tslint:disable-next-line:no-console
    console.log('new contact saved');
    // This update the person as it is stored
    // It includes its internal unique ID
    // Note that saving.result is null here
};

saving.onerror = function(err) {
    alert(JSON.stringify(err));
    // tslint:disable-next-line:no-console
    console.error(err);
};

const options = {
    filterValue : "John",
    filterBy    : ["givenName","name","nickName"],
    filterOp    : "contains",
    filterLimit : 1,
    sortBy      : "familyName",
    sortOrder   : "ascending"
}
// @ts-ignore
const search = navigator.mozContacts.find(options);

search.onsuccess = function() {
    if (search.result.length === 1) {
        const person = search.result[0];
        // tslint:disable-next-line:no-console
        alert("Found:" + person.givenName[0] + " " + person.familyName[0]);
    } else {
        // tslint:disable-next-line:no-console
        alert("Sorry, there is no such contact.")
    }
};

search.onerror = function(err) {
    alert(JSON.stringify(err));
    alert("Uh! Something goes wrong, no result found!");
};
// @ts-ignore
const allContacts = navigator.mozContacts.getAll({sortBy: "familyName", sortOrder: "descending"});

allContacts.onsuccess = function(event) {
    const cursor = event.target;
    if (cursor.result) {
        // tslint:disable-next-line:no-console
        alert("Found: " + cursor.result.givenName[0] + " " + cursor.result.familyName[0]);
        cursor.continue();
    } else {
        // tslint:disable-next-line:no-console
        alert("No more contacts");
    }
};

allContacts.onerror = function(err) {
    alert(JSON.stringify(err));
    alert("Something went terribly wrong! :(");
};