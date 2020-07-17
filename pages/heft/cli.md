---
layout: page
title: Heft Command Line
navigation_source: docs_nav
---

## heft

```
usage: heft [-h] [-d] [--plugin PATH] <command> ...

Heft is a pluggable build system designed for web projects.

Positional arguments:
  <command>
    clean        Clean the project
    build        Build the project.
    dev-deploy   Deploy the current project, and optionally the whole repo,
                 to a testing CDN.
    start        Run the local server for the current project
    test         Build the project and run tests.

Optional arguments:
  -h, --help     Show this help message and exit.
  -d, --debug    Show the full call stack if an error occurs while executing
                 the tool
  --plugin PATH  Used to specify Heft plugins.

For detailed help about a specific command, use: heft <command> -h
```

## heft clean

```
usage: heft clean [-h] [-v] [--clear-cache]

Optional arguments:
  -h, --help     Show this help message and exit.
  -v, --verbose  If specified, log information useful for debugging.
  --clear-cache  If this flag is provided, the compiler cache will also be
                 cleared. This isn't dangerous, but may lead to longer
                 compile times
```

## heft build

```
usage: heft build [-h] [-v] [--production] [--locale LOCALE] [-l] [--clean]
                  [--notest] [--max-old-space-size SIZE] [--watch]
                  [--typescript-max-write-parallelism PARALLEILSM]


Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --verbose         If specified, log information useful for debugging.
  --production          If specified, build ship/production output
  --locale LOCALE       Only build the specified locale, if applicable.
  -l, --lite            Perform a minimal build, skipping optional steps like
                        linting.
  --clean               If specified, clean the package before rebuilding.
  --notest              If specified, run the build without testing.
  --max-old-space-size SIZE
                        Used to specify the max old space size.
  --watch               If provided, run tests in watch mode.
  --typescript-max-write-parallelism PARALLEILSM
                        Set this to change the maximum write parallelism.
                        This parameter overrides what is set in typescript.
                        json. The default is 50.
```

## heft dev-deploy

```
usage: heft build [-h] [-v] [--production] [--locale LOCALE] [-l] [--clean]
                  [--notest] [--max-old-space-size SIZE] [--watch]
                  [--typescript-max-write-parallelism PARALLEILSM]


Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --verbose         If specified, log information useful for debugging.
  --production          If specified, build ship/production output
  --locale LOCALE       Only build the specified locale, if applicable.
  -l, --lite            Perform a minimal build, skipping optional steps like
                        linting.
  --clean               If specified, clean the package before rebuilding.
  --notest              If specified, run the build without testing.
  --max-old-space-size SIZE
                        Used to specify the max old space size.
  --watch               If provided, run tests in watch mode.
  --typescript-max-write-parallelism PARALLEILSM
                        Set this to change the maximum write parallelism.
                        This parameter overrides what is set in typescript.
                        json. The default is 50.

C:\Git\rushstack\apps\heft>node lib\start dev-deploy --help
usage: heft dev-deploy [-h] [-v]

Optional arguments:
  -h, --help     Show this help message and exit.
  -v, --verbose  If specified, log information useful for debugging.
```

## heft start

```
usage: heft dev-deploy [-h] [-v]

Optional arguments:
  -h, --help     Show this help message and exit.
  -v, --verbose  If specified, log information useful for debugging.

C:\Git\rushstack\apps\heft>node lib\start start --help
usage: heft start [-h] [-v]

Optional arguments:
  -h, --help     Show this help message and exit.
  -v, --verbose  If specified, log information useful for debugging.
```

## heft test

```
usage: heft test [-h] [-v] [--production] [--locale LOCALE] [-l] [--clean]
                 [--notest] [--max-old-space-size SIZE] [--watch]
                 [--typescript-max-write-parallelism PARALLEILSM] [--no-build]


Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --verbose         If specified, log information useful for debugging.
  --production          If specified, build ship/production output
  --locale LOCALE       Only build the specified locale, if applicable.
  -l, --lite            Perform a minimal build, skipping optional steps like
                        linting.
  --clean               If specified, clean the package before rebuilding.
  --notest              If specified, run the build without testing.
  --max-old-space-size SIZE
                        Used to specify the max old space size.
  --watch               If provided, run tests in watch mode.
  --typescript-max-write-parallelism PARALLEILSM
                        Set this to change the maximum write parallelism.
                        This parameter overrides what is set in typescript.
                        json. The default is 50.
  --no-build            If provided, only run tests. Do not build first.
```
