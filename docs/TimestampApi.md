# OriginStampDocumentation.TimestampApi

All URIs are relative to *https://api.originstamp.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTimestamp**](TimestampApi.md#createTimestamp) | **POST** /v3/timestamp/create | Submission
[**getApiKeyUsage**](TimestampApi.md#getApiKeyUsage) | **GET** /v3/api_key/usage | Usage
[**getHashStatus**](TimestampApi.md#getHashStatus) | **GET** /v3/timestamp/{hash_string} | Status


<a name="createTimestamp"></a>
# **createTimestamp**
> DefaultTimestampResponse createTimestamp(authorization, timestampRequest)

Submission

You can submit your hash with this function. If your api key is valid, your hash is added to batch and is scheduled for timestamping. If the hash already exists, the created flag in the response is set to false and the notification(s) of the current request will be totally ignored. You are also able to submit additional information, such as comment or notification credentials. Once a hash is successfully created for a certain crypto-currency, we can notify your desired target with the timestamp information (POST Request). The webhook is triggered as soon as the tamper-proof timestamp with the selected crypto currency has been created. Additionally, it is possible to include a preprint URL in the hash submission. Before the generation of the timestamp hash you can create a random UUID Version 4 and include https://originstamp.com/u/UUID where UUID is your UUID e.g. in a document you want to timestamp. In the preprint URL field you include your UUID and then it is possible to verify the timestamp within the document (or whatever). 

### Example
```javascript
var OriginStampDocumentation = require('origin_stamp_documentation');

var apiInstance = new OriginStampDocumentation.TimestampApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var timestampRequest = new OriginStampDocumentation.TimestampRequest(); // TimestampRequest | DTO for the hash submission. Add all relevant information concerning your hash submission.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTimestamp(authorization, timestampRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **timestampRequest** | [**TimestampRequest**](TimestampRequest.md)| DTO for the hash submission. Add all relevant information concerning your hash submission. | 

### Return type

[**DefaultTimestampResponse**](DefaultTimestampResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApiKeyUsage"></a>
# **getApiKeyUsage**
> DefaultUsageResponse getApiKeyUsage(authorization)

Usage

With this interface you can receive the current api usage.

### Example
```javascript
var OriginStampDocumentation = require('origin_stamp_documentation');

var apiInstance = new OriginStampDocumentation.TimestampApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApiKeyUsage(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 

### Return type

[**DefaultUsageResponse**](DefaultUsageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getHashStatus"></a>
# **getHashStatus**
> DefaultTimestampResponse getHashStatus(authorization, hashString)

Status

The request returns information of a certain hash read from the URL parameter. The input parameter is a hash in hex representation. Field \&quot;created\&quot; always set to false.

### Example
```javascript
var OriginStampDocumentation = require('origin_stamp_documentation');

var apiInstance = new OriginStampDocumentation.TimestampApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var hashString = "hashString_example"; // String | The hash in string representation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHashStatus(authorization, hashString, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **hashString** | **String**| The hash in string representation. | 

### Return type

[**DefaultTimestampResponse**](DefaultTimestampResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

