---
layout: page
title: Getting started
navigation_source: docs_nav
---

The Rush Stack projects are all developed in the **rushstack** monorepo on GitHub:

&nbsp;&nbsp;&nbsp;&nbsp; [https://github.com/microsoft/rushstack](https://github.com/microsoft/rushstack)

For documentation fixes, each website has its own GitHub repo:

- Rush Stack website: [https://github.com/microsoft/rushstack.io-website](https://github.com/microsoft/rushstack.io-website)
- [Rush](https://rushjs.io/) website: [https://github.com/microsoft/rushjs.io-website](https://github.com/microsoft/rushjs.io-website)
- [API Extractor](https://api-extractor.com/) website: [https://github.com/microsoft/api-extractor.com-website](https://github.com/microsoft/api-extractor.com-website)


## Setting up your machine

- **Node.js 12**: We recommend to use [nvm](https://github.com/creationix/nvm) (for Mac/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (for Windows) so that you can easily switch between different Node.js engine verisons.  When installing Node.js, make sure to first uninstall any previous versions and clean up their files.  See [FAQ: After installing Rush, why am I stilling see the old version?](https://github.com/Microsoft/rushstack/wiki/Rush-~-FAQ#after-installing-rush-why-am-i-stilling-see-the-old-version) for more about this.

- **Visual Studio Code** (recommended):  You can use any editor, but we suggest [VS Code](https://code.visualstudio.com).  It's great!


## Building the projects

We use the [Rush](http://rushjs.io) tool for building projects in the **rushstack** monorepo.

1. Make sure you have the latest release of Rush:
```
C:\>npm install -g @microsoft/rush
```

2. Clone the repo:
```
C:\Repos>git clone https://github.com/microsoft/rushstack
```

3. Use rush to install the package dependencies:
```
C:\Repos>cd rushstack
C:\Repos\rushstack>rush install
```

4. Rebuild all the projects in the repo:
```
C:\Repos\rushstack>rush rebuild
```

5. If you want to build just one project:
```
C:\Repos\rushstack>cd libraries\rush-core-library
C:\Repos\rushstack\libraries\rush-core-library>rushx build
```

**Important**: You generally should **not** use commands like `npm install` in a Rush repo.  See the
[Rush documentation](https://rushjs.io/pages/developer/new_developer/) for more information about this tool.

## Submitting a Pull Request

We welcome contributions!  To submit a feature for one of the **rushstack** projects:

1. Fork the repo.
2. Create a Git branch and commit your changes.
3. If you modified any package.json files, run `rush update` to make sure your **package-lock.json** file is up to date.
   Commit any changes made to that file.
4. Before creating your PR, run `rush change`; if prompted, [enter a change log message](https://rushjs.io/pages/best_practices/change_logs/), and commit the files that get created.
5. Create a [pull request](https://help.github.com/articles/creating-a-pull-request/)
6. If your PR primarily affects a single project, add the project name as a prefix to your PR title.  For example: "**[api-extractor] Added a new API feature**" or "**[node-core-libary] Fixed a bug in the library**".

Someone should review your PR within a few days.  Be aware that the Rush Stack maintainers manage large
corporate monorepos, which can be very distracting work.  If nobody's responding to PR comments, try asking in the
[#contributor-helpline](https://rushstack.zulipchat.com/#narrow/stream/279883-contributor-helpline)
chat room.  We greatly appreciate community contributions and do want to get your PR reviewed!
