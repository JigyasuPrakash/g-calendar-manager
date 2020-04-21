const { google } = require('googleapis');

// google app config
const googleConfig = {
    clientId: process.env.clientID,
    clientSecret: process.env.clientSecret,
    redirect: 'https://g-calendar-manager.herokuapp.com/auth/success'
}

// scopes use for the application
const defaultScope = [
    'https://www.googleapis.com/auth/calendar.events',
    'profile',
    'email'
]

// oauth2 client
function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}

// generate authentication url
function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
}


// get auth url
module.exports.urlGoogle = function () {
    const auth = createConnection();
    const url = getConnectionUrl(auth);
    return url;
}

// get oauth2 api
function getOAuth2(auth) {
    return google.oauth2({
        auth: auth,
        version: 'v2'
    });
}

module.exports.getGoogleAccountFromCode = async function (code, cb) {
    const auth = createConnection();
    const { tokens } = await auth.getToken(code);
    auth.setCredentials(tokens);
    const user = await getOAuth2(auth);
    user.userinfo.get((err, res) => {
        if (err) {
            cb(err);
        } else {
            const userProfile = {
                id: res.data.id,
                accessToken: tokens.access_token,
                name: res.data.name,
                displayPicture: res.data.picture,
                email: res.data.email
            }
            cb(null, userProfile);
        }
    })

}
