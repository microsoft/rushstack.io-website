---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [FileSystem](./node-core-library.filesystem.md) &gt; [readFile](./node-core-library.filesystem.readfile.md)

## FileSystem.readFile() method

Reads the contents of a file into a string. Behind the scenes it uses `fs.readFileSync()`<!-- -->.

<b>Signature:</b>

```typescript
static readFile(filePath: string, options?: IFileSystemReadFileOptions): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  filePath | string | The relative or absolute path to the file whose contents should be read. |
|  options | [IFileSystemReadFileOptions](./node-core-library.ifilesystemreadfileoptions.md) | Optional settings that can change the behavior. Type: <code>IReadFileOptions</code> |

<b>Returns:</b>

string
