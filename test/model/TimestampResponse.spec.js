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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OriginStampDocumentation);
  }
}(this, function(expect, OriginStampDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OriginStampDocumentation.TimestampResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TimestampResponse', function() {
    it('should create an instance of TimestampResponse', function() {
      // uncomment below and update the code to test TimestampResponse
      //var instance = new OriginStampDocumentation.TimestampResponse();
      //expect(instance).to.be.a(OriginStampDocumentation.TimestampResponse);
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new OriginStampDocumentation.TimestampResponse();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new OriginStampDocumentation.TimestampResponse();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "date_created")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instance = new OriginStampDocumentation.TimestampResponse();
      //expect(instance).to.be();
    });

    it('should have the property hashString (base name: "hash_string")', function() {
      // uncomment below and update the code to test the property hashString
      //var instance = new OriginStampDocumentation.TimestampResponse();
      //expect(instance).to.be();
    });

    it('should have the property timestamps (base name: "timestamps")', function() {
      // uncomment below and update the code to test the property timestamps
      //var instance = new OriginStampDocumentation.TimestampResponse();
      //expect(instance).to.be();
    });

  });

}));