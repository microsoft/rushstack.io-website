---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [PackageJsonLookup](./node-core-library.packagejsonlookup.md) &gt; [loadNodePackageJson](./node-core-library.packagejsonlookup.loadnodepackagejson.md)

## PackageJsonLookup.loadNodePackageJson() method

This function is similar to [PackageJsonLookup.loadPackageJson()](./node-core-library.packagejsonlookup.loadpackagejson.md)<!-- -->, except that it does not report an error if the `version` field is missing from the package.json file.

<b>Signature:</b>

```typescript
loadNodePackageJson(jsonFilename: string): INodePackageJson;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  jsonFilename | string |  |

<b>Returns:</b>

[INodePackageJson](./node-core-library.inodepackagejson.md)
