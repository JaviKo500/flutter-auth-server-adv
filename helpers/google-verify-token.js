const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '1017747123528-32kl0688fp7nvbbabls8mpsaq06qkcpf.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validateGoogleIdToken = async ( token ) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '1017747123528-4502ku28v7ehcoo2h1amtaqvchitvgfj.apps.googleusercontent.com'
            ] 
        });
        const payload = ticket.getPayload();
        console.log('==============> PAYLOAD');
        console.log(payload);
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        };
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = { validateGoogleIdToken };
