# JIRA Specifics

The JIRA app is responsible to communicate with the JIRA Server and provide the the necessary functions: Ribbons, Dialogs, Feed Sync, etc.

## OAuth 1.0a

The app connects to the JIRA server directly using [oAuth 1.0a](http://oauth.net/core/1.0a/). This way username and password are not stored on the local client. Instead it is using an oAuth access token for authentication.
It has **READ** and **WRITE** access in the name of the user. 
Validity is unlimted, but can be revoked by the user at any time.

For more information about the oAuth flow in JIRA, please see [this example](https://developer.atlassian.com/jiradev/jira-apis/jira-rest-apis/jira-rest-api-tutorials/jira-rest-api-example-oauth-authentication)

## REST Access

JIRA for Outlook uses the official [JIRA REST API](https://docs.atlassian.com/jira/REST/latest/) only. 
API Version JIRA 6.0 or higher is necessary.

## Local Data

JIRA for Outlook stores some data locally, so views can be rendered faster or even in offline mode.

* All icons (Status, Avatars, Issue Types, Project types, etc)
* All projects the user can access
* View definitions of the recent issue types
* Issues that the user is responsible for
* Own User data
* Current System Information (URL, version, etc)

## Server Addon

The server addon is purely an administration page and is not necessary for the Outlook addon to work.
It helps to administrate the JIRA for Outlook settings but it does ot provide any functionality for the Outlook clients.

**Note** Please keep in mind that we match the license based on the JIRA Addon. Removing the addon will disable the Outlook Addons in some cases.