# OriginStampDocumentation.ProofRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **Number** | 0: Bitcoin | 
**hashString** | **String** | Hash in HEX representation for which the proof should be created. We allow the use of SHA-256. Note: We handle the hashes in lower-case. | 
**proofType** | **Number** | Specifies which type of file should be returned. Possible value(s):  0: proof with a seed file (txt) or proof with a merkle tree (xml) 1: proof with a PDF file   Other formats will follow. | 


