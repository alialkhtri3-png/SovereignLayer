# Sovereign Identity API Demo

## Identity Verification Endpoint

Example:

POST /api/verify


Request:

{
 "wallet":
 "0x..."
}


Response:

{
 "identityScore":85,
 "network":"Base",
 "status":"Verified",
 "reputation":"High"
}


## Credential Verification

Checks:

- Hash validation
- ECDSA signature validation
- Issuer verification


## Version

V13.1.0

Status:
Production Prototype
