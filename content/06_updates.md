# Automatic Updates

yasoon / JIRA for Outlook includes an automatic updater, which will update 
the software to the newest version, when released by yasoon. This updater
is only active in the default installation and disabled in the terminal server
build. This has the following reasons:
- Admin rights would be required for the updater to write to %ProgramFiles%
- Automatic updates are most often unwanted in a managed software environment.

For non-managed environments, however, automatic updates provide a good way to
keep software up-to-date. There are two kinds of updates that yasoon applies:
- Updates to the yasoon core runtime (yasoonBase.dll and others)
- Updates to the installed app (e.g. JIRA, Javascript, CSS, HTML files)

The reason this is splitted is the non-disruptive nature of the latter updates.
In case only the app needs to be updates (e.g. for introducing a new setting or
adjusting to a new JIRA release), Outlook does not need to be restarted. 
The app updates will be downloaded, installed and activated immediately.

The core updates are necessary for all core related functions,
like Outlook access, database access or the JIRA feed. An Outlookk restart is
necessary to switch out files that are being actively accessed while Outlook is 
running.

