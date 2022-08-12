---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [ExperimentsConfiguration](./rush-lib.experimentsconfiguration.md)

## ExperimentsConfiguration class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Use this class to load the "common/config/rush/experiments.json" config file. This file allows repo maintainers to enable and disable experimental Rush features.

<b>Signature:</b>

```typescript
export declare class ExperimentsConfiguration 
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ExperimentsConfiguration` class.

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [configuration](./rush-lib.experimentsconfiguration.configuration.md) |  | Readonly&lt;[IExperimentsJson](./rush-lib.iexperimentsjson.md)<!-- -->&gt; | <b><i>(BETA)</i></b> Get the experiments configuration. |
