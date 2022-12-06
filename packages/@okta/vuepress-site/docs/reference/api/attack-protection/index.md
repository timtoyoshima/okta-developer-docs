---
title: Attack Protection
category: management
---

# Attack Protection API

<ApiLifecycle access="ie" />

> **Note:** This feature is only available as a part of Okta Identity Engine. [Contact support](mailto:dev-inquiries@okta.com) for further information.

The Attack Protection API provides operations to configure the User Lockout Settings in your org to prevent brute-force attacks.

## Attack Protection Operations
The Attack Protection API has the following CRUD operations:

* [Get User Lockout Settings](#get-user-lockout-settings)
* [Update User Lockout Settings](#update-user-lockout-settings)

### Get User Lockout Settings

<ApiOperation method="get" url="/attack-protection/api/v1/user-lockout-settings" />

Retrieves the org's [User Lockout Settings](/docs/reference/api/attack-protection/#user-lockout-settings-object).

#### Response body

The User Lockout Settings object

#### Request example

This request fetches the org's User Lockout Settings:

```bash
curl -X GET \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: SSWS ${api_token}" \
"https://${yourOktaDomain}/attack-protection/api/v1/user-lockout-settings"
```

#### Response example

```json
{
    "preventBruteForceLockoutFromUnknownDevices": true
}
```

### Update User Lockout Settings

<ApiOperation method="put" url="/attack-protection/api/v1/user-lockout-settings" />

Updates the org's [User Lockout Settings](/docs/reference/api/attack-protection/#user-lockout-settings-object).


#### Request body

The new User Lockout Settings object

#### Response body

The updated User Lockout Settings

#### Request example

This request updates the User Lockout Settings

```bash
curl -X PUT \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: SSWS ${api_token}" \
-d '{
    "preventBruteForceLockoutFromUnknownDevices": true
}' "https://${yourOktaDomain}/attack-protection/api/v1/user-lockout-settings"
```

#### Response example

```json
{
    "preventBruteForceLockoutFromUnknownDevices": true
}
```

## User Lockout Settings object

| Property    | Type           | Description   |
| ----------- | -------------- | ------------- |
| `preventBruteForceLockoutFromUnknownDevices` | Boolean | When set to `true`, Okta will prevent brute-force lockout from unknown devices for the password authenticator. This means that if failed password attempts from unknown devices exceeded the configured account lockout threshold in the password policy, Okta will deny password verification attempts from unknown devices, while allow password verification requests to succeed from known devices. Note that too many failed password attempts from known devices still causes lockout on all devices. |
