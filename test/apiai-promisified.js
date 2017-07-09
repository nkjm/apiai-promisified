'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const apiai = require('../index');
const nlp = new apiai(process.env.APIAI_CLIENT_ACCESS_TOKEN, {language: "ja"});

describe('apiai-promisified', function(){
    describe('ピザを注文したいのですが', function(){
        it('will be resolved as handle-pizza-order intent.', function() {
            return nlp.textRequest('ピザを注文したいのですが', 'test_session_1').then(
                function(response){
                    response.result.action.should.equal("handle-pizza-order");
                }
            );
        });
    });
    describe('ほげほげほげ', function(){
        it('will be resolved as handle-pizza-order intent.', function() {
            return nlp.textRequest('ほげほげほげ', 'test_session_2').then(
                function(response){
                    response.result.action.should.equal("input.unknown");
                }
            );
        });
    });
});
