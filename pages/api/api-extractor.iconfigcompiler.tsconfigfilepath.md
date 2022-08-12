---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [IConfigCompiler](./api-extractor.iconfigcompiler.md) &gt; [tsconfigFilePath](./api-extractor.iconfigcompiler.tsconfigfilepath.md)

## IConfigCompiler.tsconfigFilePath property

Specifies the path to the tsconfig.json file to be used by API Extractor when analyzing the project.

<b>Signature:</b>

```typescript
tsconfigFilePath?: string;
```

## Remarks

The path is resolved relative to the folder of the config file that contains the setting; to change this, prepend a folder token such as `<projectFolder>`<!-- -->.

Note: This setting will be ignored if `overrideTsconfig` is used.
