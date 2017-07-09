"use strict";

const apiai = require('apiai');
const Promise = require('bluebird');

module.exports = class ApiaiPromisified {

    constructor(client_access_token, option){
        this.i = apiai(client_access_token, option);
    }

    textRequest(sentence, session_id){
        let req = this.i.textRequest(sentence, {sessionId: session_id});
        return new Promise((resolve, reject) => {
            req.on("response", (response) => {
                return resolve(response);
            });
            req.on("error", (error) => {
                return reject(error);
            });
            req.end();
        });
    }
};
