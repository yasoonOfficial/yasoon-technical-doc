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

Autogrow.js ([License Agreement](https://github.com/ultimatedelman/autogrow/blob/master/autogrow.min.js))

Bluebird 2.9.2 ([License Agreement](https://github.com/petkaantonov/bluebird/blob/master/LICENSE))

Bootbox 4.2.0 ([License Agreement](http://bootboxjs.com/license.txt))

Bootstrap 3.3.2 ([License Agreement](https://github.com/twbs/bootstrap/blob/master/LICENSE))

Bootstrap3-wysihtml5-bower ([License Agreement](https://github.com/Waxolunist/bootstrap3-wysihtml5-bower/blob/master/LICENCE))

Bootstrap-Modal 2.2.0 ([License Agreement](http://www.apache.org/licenses/LICENSE-2.0))

Bootstrap-Modalmanager 2.2.0 ([License Agreement](http://www.apache.org/licenses/LICENSE-2.0))

Bootstrap-Switch 3.0.0 ([License Agreement](http://www.apache.org/licenses/LICENSE-2.0))

Bootstrap-Wizard ([License Agreement](https://github.com/amoffat/bootstrap-application-wizard/blob/master/LICENSE))

Handlebars 1.3.0 ([License Agreement](https://github.com/wycats/handlebars.js/blob/master/LICENSE))

i18next ([License Agreement](https://github.com/i18next/i18next/blob/master/LICENSE))

jQuery 3.0.0 ([License Agreement](https://github.com/jquery/jquery/blob/master/LICENSE.txt))

jQuery Autogrow Textarea ([License Agreement](https://spdx.org/licenses/Beerware.html))

jQuery Color ([License Agreement](https://jquery.org/license/))

jQuery Datetimepicker ([License Agreement](https://github.com/xdan/datetimepicker/blob/master/MIT-LICENSE.txt))

jQuery jCrop 0.9.12 ([License Agreement](https://github.com/tapmodo/Jcrop/blob/master/MIT-LICENSE.txt))

jQuery mentionsInput 1.0.2 ([License Agreement](http://www.opensource.org/licenses/mit-license.php))

jQuery Multi-Select 0.9.11 ([License Agreement](http://sam.zoy.org/wtfpl/COPYING))

jQuery Raty 2.5.2 ([License Agreement](https://opensource.org/licenses/MIT))

jQuery UI 1.10.0 ([License Agreement](https://jquery.org/license/))

knockout.js 3.4.0 ([License Agreement](http://www.opensource.org/licenses/mit-license.php))

moment.js 2.12.0 ([License Agreement](http://www.opensource.org/licenses/mit-license.php))

select2 3.5.1 ([License Agreement](http://www.apache.org/licenses/LICENSE-2.0))

underscore.js 1.5.0 ([License Agreement](http://www.opensource.org/licenses/mit-license.php))

## Chromium

The yasoon runtime uses an embedded version of the chromium project by Google to run the Javascript apps and display HTML5 views.
It's currently based on CEF1 and includes the following libraries:
- d3dcompiler_43.dll
- d3dx9_43.dll
- devtools_resources.pak
- ffmpegsumo.dll
- icudt.dll
- libcef.dll
- libEGL.dll
- libGLESv2.dll
- locales/*.pak

Please note, that Chromium is not installed globally but only bundled with yasoon.
That means, no Chrome browser is being installed and nothing is sent to Google in any way, it just uses the HTML & Javascript runtime.

## Libraries

In addition to the before mentioned open source libraries, there is also one propriatary library: 
- [Outlook Redemption 5.11](http://www.dimastr.com/redemption/home.htm)

This library is used to access Outlook objects like tasks, e-mails & calendar items in a secure and stable manner. The library files include:
- Redemption.dll
- Redemption64.dll