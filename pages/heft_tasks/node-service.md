---
layout: page
title: '"node-service" task (experimental)'
navigation_source: docs_nav
---

This task supports development of Node.js services using Heft.  It enables `heft start` to launch your service on a **localhost** port.  The service will automatically restart whenever you save a change to your source code.

This functionality is similar to standalone launchers such as [nodemon](https://nodemon.io/) or [node-dev](https://www.npmjs.com/package/node-dev).  They can also be used with Heft, however the `node-service` task has the benefit of being [riggable]({% link pages/heft/rig_packages.md %}) and better integrated with Heft's workflow.


## When to use it

Use this plugin if your project is a Node.js service.  It has been tested with the following popular frameworks:

- [Express](http://expressjs.com/) - the classic "unopinionated" Node.js framework with minimal structure and a very large ecosystem of community plugins
- [Fastify](https://www.fastify.io/) - similar in character to Express, but with improved validation and a larger set of core components
- [HapiJS](https://hapi.dev/) - a good "batteries included" framework built on a comprehensive foundation of officially maintained components
- [NestJS](https://nestjs.com/) - a popular framework offering paid enterprise support and a heavyweight system of abstractions using [emitDecoratorMetadata](https://www.typescriptlang.org/tsconfig#emitDecoratorMetadata)

> **Security Note:**  Unlike a web browser application, a Node.js service typically runs in a trusted data center
> with access to production databases and internal company services.  And unlike a developer tool, a Node.js service
> will accept inputs from potentially malicious clients on the public internet.  It's a good idea to carefully review
> each library that your service will load.  Who maintains the NPM package?  Is it being actively developed?  Does
> the code follow engineering best practices?  These questions may be more important than "How many times was
> it downloaded?"


## package.json dependencies

None - this feature is implemented internally by Heft.


## Configuration

1. The `node-service` plugin is enabled by adding a
  [node-service.json]({% link pages/heft_configs/node-service_json.md %}) config file
   to your project or rig.  The defaults work for most cases, so the file may be mostly empty.

2. Add a script to your **package.json** file containing the command to launch the service.  The default name
   for this command is `"serve"`.  For example:

   **&lt;project folder&gt;/package.json**
   ```js
     . . .
     "scripts": {
       "build": "heft build --clean",
       "start": "heft start --clean",
       "serve": "node ./lib/start.js"
     },
   ```

If your framework uses a wrapper such as [fastify-cli](https://github.com/fastify/fastify-cli), then
your `"serve"` command might be `"fastify start ./lib/start.js"` instead.


## Starting the service

To start the localhost dev server, use the `heft start` command.  Whenever you save a change to a source file, Heft's watch mode will recompile your project, then automatically stop the service process and restart it.

