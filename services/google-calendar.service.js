const { google } = require('googleapis');

module.exports.listEvents = function (auth, cb) {
  const calendar = google.calendar({ version: 'v3', auth });
  calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const events = res.data.items;
    if (events.length) {
      cb(events)
    } else {
      console.log('No upcoming events found.');
      cb()
    }
  });
}

module.exports.createEvent = function (auth, title, description, attendees, cb) {
  const calendar = google.calendar({ version: 'v3', auth });

  const startTime = new Date();
  startTime.setDate(startTime.getDate() + 2);

  const endTime = new Date();
  endTime.setDate(endTime.getDate() + 2);
  endTime.setMinutes(endTime.getMinutes() + 30);
  var event = {
    'summary': title,
    'location': 'New Delhi, India',
    'description': description,
    'start': {
      'dateTime': startTime,
      'timeZone': 'Asia/Kolkata',
    },
    'end': {
      'dateTime': endTime,
      'timeZone': 'Asia/Kolkata',
    },
    'attendees': attendees,
    'reminders': {
      'useDefault': false,
      'overrides': [
        { 'method': 'email', 'minutes': 24 * 60 },
      ],
    },
    ColorId: 2
  };

  calendar.events.insert({
    auth: auth,
    calendarId: 'primary',
    resource: event
  }, (err, event) => {
    if (err) return console.log('Error contacting the calendar service')
    cb(event.htmlLink);
  })
}