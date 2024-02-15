# ECharts and TypeScript 5

## Try it

- Clone the repo
- Use a Node.js 20 environment

In the repository root, run

```sh
$ npm i
$ npm run build
$ npm start

> example@1.0.0 start
> node dist/index.js

Generating SVG to example.svg...
Done
```

To check the contents of `example.svg`, copy its SVG content and paste it into for example
[SVGViewer](https://www.svgviewer.dev).

## Notes

- The dependency toward `reflect-metadata` is only there to make sure it does not mess up anything.  
  There were some initial suspicions that it would cause problems, but that does not seem to be the case.
