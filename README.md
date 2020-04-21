# G-Calendar Manager

[![GitHub issues](https://img.shields.io/github/issues/JigyasuPrakash/g-calendar-manager)](https://github.com/JigyasuPrakash/g-calendar-manager/issues) [![GitHub forks](https://img.shields.io/github/forks/JigyasuPrakash/g-calendar-manager)](https://github.com/JigyasuPrakash/g-calendar-manager/network) [![GitHub stars](https://img.shields.io/github/stars/JigyasuPrakash/g-calendar-manager)](https://github.com/JigyasuPrakash/g-calendar-manager/stargazers) [![GitHub license](https://img.shields.io/github/license/JigyasuPrakash/g-calendar-manager)](https://github.com/JigyasuPrakash/g-calendar-manager/blob/master/LICENCE) 
![Server](https://img.shields.io/badge/Backend-Node_JS-brightgreen) ![Server](https://img.shields.io/badge/Server-Express_JS-brightgreen) ![API](https://img.shields.io/badge/API-Google_API-brightgreen)

A simple to use google calendar manager built using Google Calendar API.

### Aim
To integrate google calendar using NodeJS as backend and following feature should be implemented.

- User should be able to authenticate with the system with the users gmail account.
- Build a web server to read users upcoming events and give the events in a json.
- Build a web service to send an event.
  - It should accept email id's as input
  - Body of the meeting.
  - Title of the meeting.

### Approach
- Create a [express] web application which handles users request and responses.
- [Google API] for getting access of users google calendar.

### Features
- Very simple and light weight UI.
- Easy to create google calendar events and share with friends and colleages (at max 5).

### How to use
1. Click on "Login with Google" to authenticate your google account with the application
<img src="./public/assets/img/pre1.png" style="width: 60%">

2. Enter your google credentials and continue
<img src="./public/assets/img/pre2.png" style="width: 60%">

3. Allow permissions to let G-Calendar Manager access your google calendar
<img src="./public/assets/img/pre3.png" style="width: 60%">

4. There you go, you reached to dashboard
<img src="./public/assets/img/pre4.png" style="width: 60%">

5. Now lets create an event and share with 2 friends, complete the details and click "Create"
<img src="./public/assets/img/pre5.png" style="width: 60%">

6. An alert is shows which shows the event is successfully created.
<img src="./public/assets/img/pre6.png" style="width: 60%">

7. The updated events is fetched again and the newly created event is visible on the dashboard
<img src="./public/assets/img/pre7.png" style="width: 60%">


### Teach Stack
- Frontend
  - HTML
  - Bootstrap
  - JQuery
- Backend
  - Javascript
  - Express JS
  - Node JS
- External API
  - Google Calendar API v3

### Version
| Tag    | Date           | Description   |
|--------|----------------|---------------|
| [v1.0] | 21 April, 2020 | First Release |

### Developer
- [Jigyasu Prakash]

[v1.0]: <https://github.com/JigyasuPrakash/g-calendar-manager/tree/1379f6374e27e09336c483018f903a6ae599d843>
[express]: <https://expressjs.com/>
[Google Api]: <https://developers.google.com/apis-explorer>
[Jigyasu Prakash]: <https://itsjigyasu.me/>
