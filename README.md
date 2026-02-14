# repro-deno-yaml-ast-parser

It's a minimal reproducible example for the original issue https://github.com/denoland/deno/issues/31347.

```bash
% deno --version
deno 2.6.6 (stable, release, aarch64-apple-darwin)
v8 14.2.231.17-rusty
typescript 5.9.2

% deno run -R repro_yaml_ast_parser.ts
yamlAst.Kind: undefined
yamlAst.default?.Kind: {
  "0": "SCALAR",
  "1": "MAPPING",
  "2": "MAP",
  "3": "SEQ",
  SCALAR: 0,
  MAPPING: 1,
  MAP: 2,
  SEQ: 3
}
```
