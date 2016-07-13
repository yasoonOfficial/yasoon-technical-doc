# Setup

The setup file is created & signed with Advanced Installer.
You can verify the license by checking the properties of the setup-file.
It should be signed by `yasoon GmbH` and have a valid digital signature.

The setup file contains a bootstrapper, which will make sure all prerequisites are installed.
Afterwards, the bundled .msi will be installed.

## Installer

The installer is always branded to a specific app, e.g. JIRA for Outlook.
That means, during the setup process, the JIRA app will be installed as well as the yasoon runtime.

Besides that, the installer itself comes in different flavours.

### Standard Setup

This is the default setup, which can be installed by any user individually on their computer. 
This is most often used in non-managed environments, where there is no central rollout of software.

The installer will be executed by each user and will install without administrative rights. It will installed all files & data to `%LOCALAPPDATA%\yasoon`.

### Terminal Server Setup

This setup should be used for managed/virtualized environments. It will be installed centrally by an administrator or deployed automatically by a third-party software like Windows InTune.

Administrative rights are required to use this installer, as it installs the core files to `%ProgramFiles%`.
Data files & settings will still be located in the `%LOCALAPPDATA%\yasoon` folder.

Please note, that the installer needs to know the following options in advance (in contrast to the standard setup):
- If the roaming profile folder (`%APPDATA%`) should be used for storing data, in case the local application data folder is cleared on logout of the user.
- Which bitness of Outlook (x86, x64) is installed

Please contact us with your exact requirements, so that we can provide you with a custom installer which will be suited for your environment.

## Files & Folders

The installer will create files & folders in different locations. In general, there is a core files folder and a data folder.
For the standard setup, this folder is the same and always located at `%LOCALAPPDATA%\yasoon`.

The file-folders include:
- apps (Contains installed apps, e.g. for JIRA for Outlook)
  - yasoon (core app, always required)
  - com.yasoon.jira (JIRA app, contains all JIRA logic & views)
- locales, de-DE, en-US, ... (Contains localization files)
- view (Contains all HTML view related files)
- x64 (Contains bitness specific libraries - Only for standard setup)
- x86 (Contains bitness specific libraries - Only for standard setup)

The data-folders are:
- data (Contains database files & Chromium cache)
- log (Contains log files)

## Registry

The installer also creates a few registry entries that are necessary to register the addon.
These includes the following entries. Please note that in the terminal server setup, some of the keys might be written to the HKLM hive instead.

Also, if you are using an 32bit version of Outlook on an 64bit Windows OS, you might need to look for these keys in the Wow3264-node of the registry.

This key whitelists the signing certificate used to sign the VSTO file:
- HKEY_CURRENT_USER\Software\Microsoft\VSTO\Security\Inclusion\039d2610-f2f1-4a06-b489-6991c31d9bf2
  - Url="file:///%localappdata%/yasoon/yasoonBase.vsto"
  - PublicKey="<RSAKeyValue>...."

This key registers the addon with Outlook:
- HKEY_CURRENT_USER\Software\Microsoft\Office\Outlook\Addins\yasoonBase
  - Description="yasoonBase"
  - FriendlyName="yasoon"
  - LoadBehavior=dword:00000003
  - Manifest="file:///%localappdata%/yasoonBase.vsto|vstolocal"

This key puts JIRA for Outlook to the no-disable list of Outlook, since it might take slighty more than 1 second to load in some cases.
Please find some more information on the issue right [here](https://social.technet.microsoft.com/Forums/sharepoint/en-US/2ff7ff3e-c13b-4ef0-bb64-ee84dc6a4866/change-outlook-2013-slow-and-disabled-addins-settings?forum=officeitpro). In short: Managed Addons are penalized if they are the first addon to load the .net Runtime, even though it's a perfectly acceptable solution for developing Outlook addons.
- HKEY_CURRENT_USER\Software\Microsoft\Office\15.0\Outlook\Resiliency\DoNotDisableAddinList
  - yasoonBase=dword:00000001

