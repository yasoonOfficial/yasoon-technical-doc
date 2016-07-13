# Components

This chapter provides a short overview over the components & libraries used in yasoon / JIRA for Outlook.
JIRA for Outlook basically consists of two major parts:
- The yasoon runtime
- The JIRA app

In general, the yasoon runtime is able to run one or more apps. When we talk about JIRA for Outlook, it's really just the yasoon runtime, pre-installed with the JIRA app. Apps are in this case just lightweight Javascript files, which are loaded by the yasoon runtime.

## Local Database

To store content, the yasoon runtime uses a local SQLite database. This database is located at `%LOCALAPPDATA%\yasoon\data` in most cases (more details see [Files & Folders](#files--folders)).

In this folder, you'll find two files, one called `yasoonData.db3` and one called `yasoonMessageData.db3`. 

The `yasoonData` database is used for the following purposes:
- Storing configuration & user settings
- Storing the feed data (JIRA issues), to increase performance and reduce load on the server

The `yasoonMessageData` database is used for the following:
- Storing JIRA issue to email assignments
- Storing information about synchronized Outlook tasks (if enabled)

Please note that these database files might contain sensitive information from your JIRA system, so please make sure they are not accessible by a third party.

## Open Source

The yasoon runtime uses the following open source components. 

### C# Components

CefGlue 0.5.0.2 ([License Agreement](https://github.com/yasoonOfficial/cefglue/blob/master/LICENSE.txt))

ChinhDo.Transactions 1.3.0.32 ([License Agreement](http://transactionalfilemgr.codeplex.com/license))

Chromium Embedded Framework 1.1453.1507 ([License Agreement](https://bitbucket.org/chromiumembedded/cef/src/1ee311fa45ce9c1e4abe3ee1ea25117fbe09257e/LICENSE.txt?fileviewer=file-view-default))

DotNetOpenAuth 4.2.3.13251 ([License Agreement](https://github.com/tobiasviehweger/DotNetOpenAuth/blob/master/LICENSE.txt))

ExCSS 2.0.5.0 ([License Agreement](https://github.com/TylerBrinks/ExCSS/blob/master/license.txt))

Ionic.Zip.Reduced 1.9.1.8 ([License Agreement](https://dotnetzip.codeplex.com/license))

KellermanSoftware.Compare-NET-Objects 1.7.3.0 ([License Agreement](https://comparenetobjects.codeplex.com/license))

Lucene.Net 2.9.4.1 ([License Agreement](http://www.apache.org/licenses/LICENSE-2.0))

Ninject 3.0.1.10 ([License Agreement](https://github.com/ninject/ninject/blob/master/LICENSE.txt))

NPoco 2.8.0.0 ([License Agreement](http://www.apache.org/licenses/LICENSE-2.0))

nrtftree 0.4.0.0 ([License Agreement](https://github.com/sgolivernet/nrtftree/blob/master/LICENSE-LESSER))

SimpleLucene 1.0.0.1 ([License Agreement](https://simplelucene.codeplex.com/license))

SQLite 1.0.97.0 ([License Agreement](https://www.sqlite.org/copyright.html))

ReactiveExtensions 2.2.5.40722 ([License Agreement](https://rx.codeplex.com/license))

### Javascript Components

Autogrow.js

Bluebird

Bootbox

Bootstrap

Bootstrap-Modal

Bootstrap-Modalmanager

Bootstrap-Switch

Bootstrap-Wizard

Handlebars

i18next

jQuery

jQuery Autogrow Textarea

jQuery Color

jQuery 

## Chromium

## Libraries