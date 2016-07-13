# Prerequisites

Yasoon / JIRA for Outlook has some technical dependencies, that need to be satisfied to run.
These dependencies will also be checked automatically and installed by the setup file.

## Outlook Versions

Yasoon supports the following versions of Outlook
- Outlook 2010
- Outlook 2013
- Outlook 2016

It is recommended to use the latest updates for the Office suite.

## .Net Framework

The .Net Framework is required to run yasoon / JIRA for Outlook.
The minimum supported version is the [.NET Framework 4.0 Client Profile](http://download.microsoft.com/download/5/6/2/562A10F9-C9F4-4313-A044-9C94E0A8FAC8/dotNetFx40_Client_x86_x64.exe), 
with the patch [KB2468871](http://go.microsoft.com/fwlink/?linkid=220286) installed. 


In addition, the [VSTO 2010 Runtime](http://download.microsoft.com/download/9/4/9/949B0B7C-6385-4664-8EA8-3F6038172322/vstor_redist.exe) is required.

## Permissions

The yasoon / JIRA for Outlook installer comes in two flavours:
- Default installer for single users
- Terminal Server installer for virtualized environments

The default installer (for more info see [Setup](#setup)) will run with normal user rights, if all prerequisites are already installed.
The terminal server installer will install to the %ProgramFiles% folder of Windows, therefore requiring administrative rights. 
