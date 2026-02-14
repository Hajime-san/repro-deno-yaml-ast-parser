// Minimal repro for CJS -> ESM namespace export behavior in Deno.
// Run with:
//   deno run -R repro_yaml_ast_parser.ts
// Uses the mock CommonJS package entry (index).

import * as yamlAst from "mock-yaml-ast-parser";

console.log("yamlAst.Kind:", (yamlAst as { Kind?: unknown }).Kind);
console.log(
  "yamlAst.default?.Kind:",
  (yamlAst as { default?: { Kind?: unknown } }).default?.Kind,
);
