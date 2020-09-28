/**
  *
  * @param {object} params
  * @param {string} params.iam_apikey
  * @param {string} params.url
  * @param {string} params.username
  * @param {string} params.password
  * @param {string} params.environment_id
  * @param {string} params.collection_id
  * @param {string} params.configuration_id
  * @param {string} params.input
  *
  * @return {object}
  *
  */
 var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
 var fs = require('fs');
 const { resolve } = require('path');
/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */

/**
* Processing Json result of Watson Natural Language Understanding process
* @param {JSON} resultNL - respuesta del watson NL en JSON
*/

function stt(params, input){
  return new Promise(function (resolve, reject) {

var speechToText = new SpeechToTextV1({
  iam_apikey: params.iam_apikey,
  url: params.url
});
  
speechToText.recognize({
  'audio':fs.createReadStream(input),
  'content_type': params.content_type,
  'model': params.model
}, function(err, res) {
  if (err){
    return resolve(err);

  }
  res=JSON.stringify(res,null,2)
  console.log(res)
    return resolve(res)
});
});

}
module.exports=stt;