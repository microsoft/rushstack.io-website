---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/terminal](./terminal.md) &gt; [StdioSummarizer](./terminal.stdiosummarizer.md)

## StdioSummarizer class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Summarizes the results of a failed build task by returning a subset of `stderr` output not to exceed a specified maximum number of lines.

<b>Signature:</b>

```typescript
export declare class StdioSummarizer extends TerminalWritable 
```
<b>Extends:</b> [TerminalWritable](./terminal.terminalwritable.md)

## Remarks

IMPORTANT: This transform assumes that its input was prepared by [StderrLineTransform](./terminal.stderrlinetransform.md)<!-- -->, so that each [ITerminalChunk.text](./terminal.iterminalchunk.text.md) item is a single line terminated by a `"\n"` character.

The [IStdioSummarizerOptions.leadingLines](./terminal.istdiosummarizeroptions.leadinglines.md) and [IStdioSummarizerOptions.trailingLines](./terminal.istdiosummarizeroptions.trailinglines.md) counts specify the maximum number of lines to be returned. Any additional lines will be omitted. For example, if `leadingLines` and `trailingLines` were set to `3`<!-- -->, then the summary of 16 `stderr` lines might look like this:

```
Line 1
Line 2
Line 3
  ...10 lines omitted...
Line 14
Line 15
Line 16

```
If the `stderr` output is completely empty, then the `stdout` output will be summarized instead.

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(options)](./terminal.stdiosummarizer._constructor_.md) |  | <b><i>(BETA)</i></b> Constructs a new instance of the <code>StdioSummarizer</code> class |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [getReport()](./terminal.stdiosummarizer.getreport.md) |  | <b><i>(BETA)</i></b> Returns the summary report. |
|  [onWriteChunk(chunk)](./terminal.stdiosummarizer.onwritechunk.md) |  | <b><i>(BETA)</i></b> |
