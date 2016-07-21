# Network

This chapter provides an overview of all communication made by the Outlook addon.
All calls are made to our host [https://store.yasoon.com](https://store.yasoon.com), if not stated otherwise.

## Installation

During installation process the following calls are made to retrieve the configuration data for the company stored in our server.

* **GET:** */api/bundle/global/\<bundleId\>* 

    Determines which apps are necessary for this setup

* **GET:** */api/app/\<appId\>/generateManifestFile*

    Determines the configuration data of each app. (e.g. JIRA instance data)

* **GET:** *https://yasoonstore.s3.amazonaws.com/*

    Downloads Files for the app

## First Start & Initial Configuration

The initial launch wizard is mandatory to complete the installation.
It introduces the soltion to the user, prepares Outlook to have all settings made correctly, but also creates the user on our server. 

* **GET:** */api/company/\<companyId\>/public*

    Get Company Settings (Intro Text, Admin for questions, etc.) to show the first launch wizard.

* **POST:** */api/user/isCompanyUser*

    Check if user is already registered. If user is registered it will be preselected during registration flow.

* **POST** */api/user/registerSimple*

    Final Step in the Wizard. Register / Update User on our server.
    Data sent (and stored) with this form:
    * Email Address
    * Firstname
    * Lastname
    * Locale
    * Windows Hostname
    * Current Yasoon Version
    * Installed Apps
    * Company Id

## Normal Start

Every start checks for a hostname/ version change and active license data

*  **POST:** */api/user/login*

    Updates the user data on server. Only called if hostname or core version has changed to have a accurate list of installations on the server.

* **GET:** */api/user/activeproducts/\<appNamespace\>*

    If yasoon is not already licensed, it will check for a new license at every startup.

## Updates
Updates are splitted into two parts. It first will check for new core versions and afterwards check if there are updates for apps.

* **GET:** */api/yasoonversion/latest*

    Get current core version

* **GET:** *https://yasoonstore.s3.amazonaws.com/*

    Download updated app or core files. 

* **GET:** */api/user/apps/latest*

    Get the latest app versions for current core version.

* **GET:** */api/app/\<appId\>/generateManifestFile*

    Determines the configuration data of each app. (e.g. JIRA instance data)

* **PUT:** */api/user/apps*

    Notify Server about successfull App update.

## Analytics
Yasoon sends some analytics data so we can track the usage of our product. 
Analytics are splitted into Usage Data or Lifecycle events.

* **PUT:** /api/user/\<userId\>/log

    Send Lifecycle events to our server. 
    
    **Config:** These Server Events can be turned off with the Configuration Parameter: *serverLoggingEnabled*

    These events can be associated with the user directly. These events are:
    * Install
    * First Launch
    * Open Wizard
    * Success of Proxy Checks
    * Daily Ping
    * Exceptions during startup that prevent yasoon from starting.

* **POST** */api/user/analytics*

    This sends anonymized usage data to our server. No assignment to user. 

    **Config:** These Server Events can be turned off with the Configuration Parameter: *serverLoggingEnabled*

    Examples are:
    * Number of created issues
    * How often has the feed been used

## Support
* **POST:**  */api/support/createTicket*

    Users can send a support ticket directly to us using the help form at the bottom of the feed.

## Error Logging
To improve our quality we log errors. This can be turned off by the user or admin.
While we try to have anonymized errors - due to the nature of bugs and errors, we cannot garuantee that no sensitive data will be send with the error message.

* **POST:** *sentry2.yasoon.com/*

    Call to send an error log to our server.

    **Config:** These Server Events can be turned off with the Configuration Parameter: *remoteErrorLoggingEnabled*

* **POST** *https://yasoonlog.s3.amazonaws.com/*

    If user press manually the "upload logfiles" button.
    This will also send the windows application error log in case of any Outlook errors.
