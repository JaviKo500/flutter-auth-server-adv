const { response } = require("express");
const { validateGoogleIdToken } = require("../helpers/google-verify-token");

const googleAuth = async (req, res = response ) => {
    // TODO: get Token
    const token = req.body.token;
    if ( !token ) {
        return res.json({
            ok: false,
            msg: 'not token'
        });
    }
    
    const googleUser = await validateGoogleIdToken( token ).catch(console.error);
    if ( !googleUser ) {
        return res.status(400).json({
            ok:false
        });
    }
    res.json({
        ok: true,
        googleUser
    });
};

module.exports = { googleAuth };