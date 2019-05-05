# OriginStampDocumentation.SchedulerApi

All URIs are relative to *https://api.originstamp.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNextSchedulingTime**](SchedulerApi.md#getNextSchedulingTime) | **POST** /v3/submission/times | Next schedule


<a name="getNextSchedulingTime"></a>
# **getNextSchedulingTime**
> DefaultSchedulerResponse getNextSchedulingTime(authorization, schedulerRequest)

Next schedule

Get the next scheduling time for hash submissions to the blockchain.

### Example
```javascript
var OriginStampDocumentation = require('origin_stamp_documentation');

var apiInstance = new OriginStampDocumentation.SchedulerApi();

var authorization = "authorization_example"; // String | A valid API key is essential for authorization to handle the request.

var schedulerRequest = new OriginStampDocumentation.SchedulerRequest(); // SchedulerRequest | Request DTO for next schedules.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNextSchedulingTime(authorization, schedulerRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| A valid API key is essential for authorization to handle the request. | 
 **schedulerRequest** | [**SchedulerRequest**](SchedulerRequest.md)| Request DTO for next schedules. | 

### Return type

[**DefaultSchedulerResponse**](DefaultSchedulerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

