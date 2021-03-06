/**
 * OriginStamp Documentation
 * The following documentation describes the API v3 for OriginStamp. OriginStamp is a trusted timestamping service that uses the decentralized blockchain to store anonymous, tamper-proof timestamps for any digital content. OriginStamp allows users to timestamp files, emails, or plain text, and subsequently store the created hashes in the blockchain as well as retrieve and verify timetamps that have been committed to the blockchain.The trusted timestamping service of OriginStamp allows you to generate a hash fingerprint and prove that it was created at a specific point in time. If you are interested in integrating trusted timestamping into your own project, feel free to use our provided API. The following interactive documentation describes the interfaces and supports your integration. With this documentation you are able to try out the different requests and see the responses. For the authorization, add your API key to the Authorization header of your request.<br/><h2>Pricing</h2><p>The invoice is based on your individual usage. The following table illustrates the request types, that are billed in credits.</p><table><tr><th>Request Type</th><th>Condition</th><th>Credits</th><tr><td style='border-bottom-style:solid; border-color: #c0c0c0;'></td><td style='border-bottom-style:solid; border-color: #c0c0c0;'></td><td style='border-bottom-style:solid; border-color: #c0c0c0;'></td><tr><th>Submission</th><th>create timestamp</th><th>1 Credit</th><tr><th>Submission</th><th>timestamp already exists</th><th>0.3 Credits</th><tr><th>Status</th><th>no timestamp information available</th><th>0.1 Credit</th><tr><th>Status</th><th>timestamp information</th><th>0.3 Credits</th><tr><th>Proof</th><th>no proof available</th><th>0.1 Credits</th><tr><th>Proof</th><th>merkle tree as proof</th><th>3 Credits</th><tr><th>Proof</th><th>seed as proof</th><th>3 Credits</th><tr><th>Proof</th><th>PDF Certificate</th><th>5 Credits</th><tr><th>Notification</th><th>webhook notification</th><th>1.5 Credits</th><tr><th>Notification</th><th>mail notification</th><th>5 Credits</th><tr><th>Notification</th><th>trigger webhook</th><th>0.3 Credits</th></table><br/><h2>Timestamping Steps</h2><ol><li><strong>Determine Hash: </strong> Calculate the SHA-256 of your record using a cryptographic library.</li><li><strong>Create Timestamp: </strong>Create a timestamp and add meta information to index it, e.g. a comment. You can also request a notification (email or webhook) once the tamper-proof timestamp has been created.</li><li><strong>Archive original file: </strong>Since we have no access to your original data, you should archive it because the timestamp is only valid in combination with the original file.</li><li><strong>Check Timestamp Status: </strong>Since the timestamps are always transmitted to the blockchain network at certain times, i.e. there is a delay, you can check the status of a hash and thus get the timestamp information.</li><li><strong>Get Timestamp Proof: </strong>As soon as the tamper-proof timestamp has been generated, you should archive the proof (Merkle Tree), which we created in our open procedure, together with the original file. With this proof, the existence of the file can be verified independently of OriginStamp. Here you can choose if the raw proof (xml) is sufficient proof or if you want to have a certificate (pdf).</li></ol><br/><h2>Installation Notes</h2><ul><li>Make sure you set the Authorization header correctly using your API key.</li><li>If a Cloudflare error occurs, please set a custom UserAgent header.</li><li>Please have a look at the models below to find out what each field means.</li></ul>
 *
 * OpenAPI spec version: 3.0
 * Contact: mail@originstamp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TimestampData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TimestampData'));
  } else {
    // Browser globals (root is window)
    if (!root.OriginStampDocumentation) {
      root.OriginStampDocumentation = {};
    }
    root.OriginStampDocumentation.TimestampResponse = factory(root.OriginStampDocumentation.ApiClient, root.OriginStampDocumentation.TimestampData);
  }
}(this, function(ApiClient, TimestampData) {
  'use strict';




  /**
   * The TimestampResponse model module.
   * @module model/TimestampResponse
   * @version 3.0
   */

  /**
   * Constructs a new <code>TimestampResponse</code>.
   * Response object for the timestamp response. Create, Status and Webhookshare the same object. This saves customers additional implementation work, as the requests or data only have to be understood once.The difference is that the webhook is only triggered as soon as a tamper-proof timestamp exists.
   * @alias module:model/TimestampResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TimestampResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimestampResponse} obj Optional instance to populate.
   * @return {module:model/TimestampResponse} The populated <code>TimestampResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Boolean');
      }
      if (data.hasOwnProperty('date_created')) {
        obj['date_created'] = ApiClient.convertToType(data['date_created'], 'Number');
      }
      if (data.hasOwnProperty('hash_string')) {
        obj['hash_string'] = ApiClient.convertToType(data['hash_string'], 'String');
      }
      if (data.hasOwnProperty('timestamps')) {
        obj['timestamps'] = ApiClient.convertToType(data['timestamps'], [TimestampData]);
      }
    }
    return obj;
  }

  /**
   * The comment which was added in the submission of the hash.
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * Field is set to true if it is a novel hash.If the flag is false, the hash was already submitted before.
   * @member {Boolean} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The time when your hash was submitted to OriginStamp. The date is returned in the following format: [ms] since 1.1.1970 (unix epoch), timezone: UTC. This is not considered as a true timestamp.
   * @member {Number} date_created
   */
  exports.prototype['date_created'] = undefined;
  /**
   * The submitted hash in hex representation.
   * @member {String} hash_string
   */
  exports.prototype['hash_string'] = undefined;
  /**
   * Contains all the timestamp data of your hash until now.
   * @member {Array.<module:model/TimestampData>} timestamps
   */
  exports.prototype['timestamps'] = undefined;



  return exports;
}));


