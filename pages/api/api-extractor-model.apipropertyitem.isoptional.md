---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor-model](./api-extractor-model.md) &gt; [ApiPropertyItem](./api-extractor-model.apipropertyitem.md) &gt; [isOptional](./api-extractor-model.apipropertyitem.isoptional.md)

## ApiPropertyItem.isOptional property

True if this is an optional property.

<b>Signature:</b>

```typescript
readonly isOptional: boolean;
```

## Remarks

For example:

```ts
interface X {
  y: string;   // not optional
  z?: string;  // optional
}

```
