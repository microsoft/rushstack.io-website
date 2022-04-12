---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [IPackageNameParserOptions](./node-core-library.ipackagenameparseroptions.md)

## IPackageNameParserOptions interface

Options that configure the validation rules used by a [PackageNameParser](./node-core-library.packagenameparser.md) instance.

<b>Signature:</b>

```typescript
export interface IPackageNameParserOptions 
```

## Remarks

The default validation is based on the npmjs.com registry's policy for published packages, and includes these restrictions:

- The package name cannot be longer than 214 characters.

- The package name must not be empty.

- Other than the `@` and `/` delimiters used for scopes, the only allowed characters are letters, numbers, `-`<!-- -->, `_`<!-- -->, and `.`<!-- -->.

- The name must not start with a `.` or `_`<!-- -->.

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [allowUpperCase?](./node-core-library.ipackagenameparseroptions.allowuppercase.md) | boolean | <i>(Optional)</i> If true, allows upper-case letters in package names. This improves compatibility with some legacy private registries that still allow that. |
