SystemJS.config({
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "target": "es5",
    "module": "system",
    "typeCheck": "strict",
    "tsconfig": true,
    "sourceMap": true,
    "supportHtmlImports": true
  },
  packages: {
    "app": {
      "main": "index",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript",
          "format": "es6",
          "typings": true
        },
        "*.css": {
          "loader": "css"
        },
        "*.html": {
          "loader": "text"
        }
      },
      "shim": {
        "deps": [
          "jquery",
          "lodash"
        ]
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "browser-sync": "npm:browser-sync@2.12.8",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
    "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "fsevents": "npm:fsevents@1.0.12",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jquery": "npm:jquery@2.2.3",
    "jsbn": "npm:jsbn@0.1.0",
    "jspm": "npm:jspm@0.17.0-beta.14",
    "lodash": "npm:lodash@4.12.0",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.10",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "readline": "github:jspm/nodelibs-readline@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "tweetnacl": "npm:tweetnacl@0.13.3",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:frankwallis/plugin-typescript@4.0.10": {
      "map": {
        "typescript": "npm:typescript@1.8.10"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:accepts@1.2.13": {
      "map": {
        "mime-types": "npm:mime-types@2.1.11",
        "negotiator": "npm:negotiator@0.5.3"
      }
    },
    "npm:accepts@1.3.1": {
      "map": {
        "mime-types": "npm:mime-types@2.1.11",
        "negotiator": "npm:negotiator@0.6.0"
      }
    },
    "npm:align-text@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.0.3",
        "longest": "npm:longest@1.0.1",
        "repeat-string": "npm:repeat-string@1.5.4"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "arrify": "npm:arrify@1.0.1",
        "micromatch": "npm:micromatch@2.3.7"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "delegates": "npm:delegates@1.0.0",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.1"
      }
    },
    "npm:asn1.js@4.6.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:babel-code-frame@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-core@6.8.0": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.8.0",
        "babel-generator": "npm:babel-generator@6.8.0",
        "babel-helpers": "npm:babel-helpers@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-register": "npm:babel-register@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-template": "npm:babel-template@6.8.0",
        "babel-traverse": "npm:babel-traverse@6.8.0",
        "babel-types": "npm:babel-types@6.8.1",
        "babylon": "npm:babylon@6.8.0",
        "convert-source-map": "npm:convert-source-map@1.2.0",
        "debug": "npm:debug@2.2.0",
        "json5": "npm:json5@0.4.0",
        "lodash": "npm:lodash@3.10.1",
        "minimatch": "npm:minimatch@2.0.10",
        "path-exists": "npm:path-exists@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "private": "npm:private@0.1.6",
        "shebang-regex": "npm:shebang-regex@1.0.0",
        "slash": "npm:slash@1.0.0",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:babel-generator@6.8.0": {
      "map": {
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-types": "npm:babel-types@6.8.1",
        "detect-indent": "npm:detect-indent@3.0.1",
        "is-integer": "npm:is-integer@1.0.6",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3",
        "source-map": "npm:source-map@0.5.6",
        "trim-right": "npm:trim-right@1.0.1"
      }
    },
    "npm:babel-helper-hoist-variables@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-types": "npm:babel-types@6.8.1"
      }
    },
    "npm:babel-helpers@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-template": "npm:babel-template@6.8.0"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.8.0": {
      "map": {
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0",
        "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-template": "npm:babel-template@6.8.0"
      }
    },
    "npm:babel-plugin-transform-strict-mode@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-types": "npm:babel-types@6.8.1"
      }
    },
    "npm:babel-register@6.8.0": {
      "map": {
        "babel-core": "npm:babel-core@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "core-js": "npm:core-js@2.4.0",
        "home-or-tmp": "npm:home-or-tmp@1.0.0",
        "lodash": "npm:lodash@3.10.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "path-exists": "npm:path-exists@1.0.0",
        "source-map-support": "npm:source-map-support@0.2.10"
      }
    },
    "npm:babel-runtime@6.6.1": {
      "map": {
        "core-js": "npm:core-js@2.4.0"
      }
    },
    "npm:babel-template@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-traverse": "npm:babel-traverse@6.8.0",
        "babel-types": "npm:babel-types@6.8.1",
        "babylon": "npm:babylon@6.8.0",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-traverse@6.8.0": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-types": "npm:babel-types@6.8.1",
        "babylon": "npm:babylon@6.8.0",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.8.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-traverse": "npm:babel-traverse@6.8.0",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babylon@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1"
      }
    },
    "npm:better-assert@1.0.2": {
      "map": {
        "callsite": "npm:callsite@1.0.0"
      }
    },
    "npm:bl@0.9.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:bl@1.0.3": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:bl@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:brace-expansion@1.1.4": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.1",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:braces@1.8.4": {
      "map": {
        "expand-range": "npm:expand-range@1.8.2",
        "preserve": "npm:preserve@0.2.0",
        "repeat-element": "npm:repeat-element@1.1.2"
      }
    },
    "npm:browser-sync-client@2.4.2": {
      "map": {
        "etag": "npm:etag@1.7.0",
        "fresh": "npm:fresh@0.3.0"
      }
    },
    "npm:browser-sync-ui@0.5.19": {
      "map": {
        "async-each-series": "npm:async-each-series@0.1.1",
        "connect-history-api-fallback": "npm:connect-history-api-fallback@1.2.0",
        "immutable": "npm:immutable@3.7.6",
        "stream-throttle": "npm:stream-throttle@0.1.3",
        "weinre": "npm:weinre@2.0.0-pre-I0Z7U9OV"
      }
    },
    "npm:browser-sync@2.12.8": {
      "map": {
        "browser-sync-client": "npm:browser-sync-client@2.4.2",
        "browser-sync-ui": "npm:browser-sync-ui@0.5.19",
        "bs-recipes": "npm:bs-recipes@1.2.2",
        "chokidar": "npm:chokidar@1.4.3",
        "connect": "npm:connect@3.4.1",
        "dev-ip": "npm:dev-ip@1.0.1",
        "easy-extender": "npm:easy-extender@2.3.2",
        "eazy-logger": "npm:eazy-logger@2.1.3",
        "emitter-steward": "npm:emitter-steward@1.0.0",
        "fs-extra": "npm:fs-extra@0.26.7",
        "http-proxy": "npm:http-proxy@1.13.2",
        "immutable": "npm:immutable@3.7.6",
        "localtunnel": "npm:localtunnel@1.8.1",
        "lodash": "npm:lodash@4.10.0",
        "micromatch": "npm:micromatch@2.3.7",
        "opn": "npm:opn@3.0.3",
        "portscanner": "npm:portscanner@1.0.0",
        "qs": "npm:qs@6.1.0",
        "resp-modifier": "npm:resp-modifier@6.0.1",
        "serve-index": "npm:serve-index@1.7.3",
        "serve-static": "npm:serve-static@1.10.2",
        "socket.io": "npm:socket.io@1.4.5",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "ucfirst": "npm:ucfirst@1.0.0",
        "yargs": "npm:yargs@4.4.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.2.3",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.2"
      }
    },
    "npm:bser@1.0.2": {
      "map": {
        "node-int64": "npm:node-int64@0.4.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:bufferutil@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.3.3"
      }
    },
    "npm:center-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4",
        "lazy-cache": "npm:lazy-cache@1.0.4"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:chokidar@1.4.3": {
      "map": {
        "anymatch": "npm:anymatch@1.3.0",
        "async-each": "npm:async-each@1.0.0",
        "glob-parent": "npm:glob-parent@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "is-glob": "npm:is-glob@2.0.1",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "readdirp": "npm:readdirp@2.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "center-align": "npm:center-align@0.1.3",
        "right-align": "npm:right-align@0.1.3",
        "wordwrap": "npm:wordwrap@0.0.2"
      }
    },
    "npm:cliui@3.2.0": {
      "map": {
        "string-width": "npm:string-width@1.0.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "wrap-ansi": "npm:wrap-ansi@2.0.0"
      }
    },
    "npm:code-point-at@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:combined-stream@0.0.7": {
      "map": {
        "delayed-stream": "npm:delayed-stream@0.0.5"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:connect@1.9.2": {
      "map": {
        "formidable": "npm:formidable@1.0.17",
        "mime": "npm:mime@1.3.4",
        "qs": "npm:qs@6.1.0"
      }
    },
    "npm:connect@3.4.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "finalhandler": "npm:finalhandler@0.4.1",
        "parseurl": "npm:parseurl@1.3.1",
        "utils-merge": "npm:utils-merge@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "elliptic": "npm:elliptic@6.2.3"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.1",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:d@0.1.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.11"
      }
    },
    "npm:dashdash@1.13.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:detect-indent@3.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "minimist": "npm:minimist@1.2.0",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:easy-extender@2.3.2": {
      "map": {
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:eazy-logger@2.1.3": {
      "map": {
        "lodash.clonedeep": "npm:lodash.clonedeep@4.3.1",
        "opt-merger": "npm:opt-merger@1.1.1",
        "tfunk": "npm:tfunk@3.0.2"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:elliptic@6.2.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:engine.io-client@1.6.8": {
      "map": {
        "component-emitter": "npm:component-emitter@1.1.2",
        "component-inherit": "npm:component-inherit@0.0.3",
        "debug": "npm:debug@2.2.0",
        "engine.io-parser": "npm:engine.io-parser@1.2.4",
        "has-cors": "npm:has-cors@1.1.0",
        "indexof": "npm:indexof@0.0.1",
        "node-ws": "npm:ws@1.0.1",
        "node-xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
        "parsejson": "npm:parsejson@0.0.1",
        "parseqs": "npm:parseqs@0.0.2",
        "parseuri": "npm:parseuri@0.0.4",
        "ws": "npm:ws@1.0.1",
        "xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
        "yeast": "npm:yeast@0.1.2"
      }
    },
    "npm:engine.io-parser@1.2.4": {
      "map": {
        "after": "npm:after@0.8.1",
        "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
        "blob": "npm:blob@0.0.4",
        "has-binary": "npm:has-binary@0.1.6",
        "utf8": "npm:utf8@2.1.0"
      }
    },
    "npm:engine.io@1.6.8": {
      "map": {
        "accepts": "npm:accepts@1.3.1",
        "base64id": "npm:base64id@0.1.0",
        "debug": "npm:debug@2.2.0",
        "engine.io-parser": "npm:engine.io-parser@1.2.4",
        "ws": "npm:ws@1.0.1"
      }
    },
    "npm:error-ex@1.3.0": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:es5-ext@0.10.11": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es6-symbol": "npm:es6-symbol@3.0.2"
      }
    },
    "npm:es6-iterator@2.0.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.11",
        "es6-symbol": "npm:es6-symbol@3.0.2"
      }
    },
    "npm:es6-symbol@3.0.2": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.11"
      }
    },
    "npm:es6-template-strings@2.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.11",
        "esniff": "npm:esniff@1.0.0"
      }
    },
    "npm:esniff@1.0.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.11"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:exec-sh@0.2.0": {
      "map": {
        "merge": "npm:merge@1.2.0"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:expand-tilde@1.2.1": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.1"
      }
    },
    "npm:express@2.5.11": {
      "map": {
        "connect": "npm:connect@1.9.2",
        "mime": "npm:mime@1.2.4",
        "mkdirp": "npm:mkdirp@0.3.0",
        "qs": "npm:qs@0.4.2"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:fb-watchman@1.9.0": {
      "map": {
        "bser": "npm:bser@1.0.2"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "is-number": "npm:is-number@2.1.0",
        "isobject": "npm:isobject@2.1.0",
        "randomatic": "npm:randomatic@1.1.5",
        "repeat-element": "npm:repeat-element@1.1.2",
        "repeat-string": "npm:repeat-string@1.5.4"
      }
    },
    "npm:finalhandler@0.4.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "escape-html": "npm:escape-html@1.0.3",
        "on-finished": "npm:on-finished@2.3.0",
        "unpipe": "npm:unpipe@1.0.0"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "path-exists": "npm:path-exists@2.1.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:findup-sync@0.3.0": {
      "map": {
        "glob": "npm:glob@5.0.15"
      }
    },
    "npm:for-own@0.1.4": {
      "map": {
        "for-in": "npm:for-in@0.1.5"
      }
    },
    "npm:form-data@0.2.0": {
      "map": {
        "async": "npm:async@0.9.2",
        "combined-stream": "npm:combined-stream@0.0.7",
        "mime-types": "npm:mime-types@2.0.14"
      }
    },
    "npm:form-data@1.0.0-rc4": {
      "map": {
        "async": "npm:async@1.5.2",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.11"
      }
    },
    "npm:fs-extra@0.26.7": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "jsonfile": "npm:jsonfile@2.3.1",
        "klaw": "npm:klaw@1.2.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "rimraf": "npm:rimraf@2.5.2"
      }
    },
    "npm:fsevents@1.0.12": {
      "map": {
        "nan": "npm:nan@2.3.3",
        "node-pre-gyp": "npm:node-pre-gyp@0.6.28"
      }
    },
    "npm:fstream-ignore@1.0.4": {
      "map": {
        "fstream": "npm:fstream@1.0.9",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0"
      }
    },
    "npm:fstream@1.0.9": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "inherits": "npm:inherits@2.0.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.5.2"
      }
    },
    "npm:gauge@1.2.7": {
      "map": {
        "ansi": "npm:ansi@0.3.1",
        "has-unicode": "npm:has-unicode@2.0.0",
        "lodash.pad": "npm:lodash.pad@4.4.0",
        "lodash.padend": "npm:lodash.padend@4.5.0",
        "lodash.padstart": "npm:lodash.padstart@4.5.0"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "glob-parent": "npm:glob-parent@2.0.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:glob@4.5.3": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@2.0.10",
        "once": "npm:once@1.3.3"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:glob@6.0.4": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:glob@7.0.3": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:har-validator@1.8.0": {
      "map": {
        "bluebird": "npm:bluebird@2.10.2",
        "chalk": "npm:chalk@1.1.3",
        "commander": "npm:commander@2.9.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.13.1"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "commander": "npm:commander@2.9.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:has-binary@0.1.6": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:has-binary@0.1.7": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:hawk@2.3.1": {
      "map": {
        "boom": "npm:boom@2.10.1",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "boom": "npm:boom@2.10.1",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9"
      }
    },
    "npm:home-or-tmp@1.0.0": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.1",
        "user-home": "npm:user-home@1.1.1"
      }
    },
    "npm:http-errors@1.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "statuses": "npm:statuses@1.2.1"
      }
    },
    "npm:http-proxy@1.13.2": {
      "map": {
        "eventemitter3": "npm:eventemitter3@1.2.0",
        "requires-port": "npm:requires-port@1.0.0"
      }
    },
    "npm:http-signature@0.10.1": {
      "map": {
        "asn1": "npm:asn1@0.1.11",
        "assert-plus": "npm:assert-plus@0.1.5",
        "ctype": "npm:ctype@0.5.3"
      }
    },
    "npm:http-signature@0.11.0": {
      "map": {
        "asn1": "npm:asn1@0.1.11",
        "assert-plus": "npm:assert-plus@0.1.5",
        "ctype": "npm:ctype@0.5.3"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.2.2",
        "sshpk": "npm:sshpk@1.8.3"
      }
    },
    "npm:inflight@1.0.4": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:is-absolute@0.1.7": {
      "map": {
        "is-relative": "npm:is-relative@0.1.3"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.4.0"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:is-integer@1.0.6": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:is-my-json-valid@2.13.1": {
      "map": {
        "generate-function": "npm:generate-function@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "jsonpointer": "npm:jsonpointer@2.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.0.3"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jspm-github@0.14.6": {
      "map": {
        "bluebird": "npm:bluebird@3.3.5",
        "expand-tilde": "npm:expand-tilde@1.2.1",
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "mkdirp": "npm:mkdirp@0.5.1",
        "netrc": "npm:netrc@0.1.4",
        "request": "npm:request@2.53.0",
        "rimraf": "npm:rimraf@2.3.4",
        "semver": "npm:semver@5.1.0",
        "tar": "npm:tar@2.2.1",
        "which": "npm:which@1.2.8"
      }
    },
    "npm:jspm-npm@0.28.10": {
      "map": {
        "bluebird": "npm:bluebird@3.3.5",
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "mkdirp": "npm:mkdirp@0.5.1",
        "readdirp": "npm:readdirp@2.0.0",
        "request": "npm:request@2.58.0",
        "rmdir": "npm:rmdir@1.1.0",
        "semver": "npm:semver@5.1.0",
        "systemjs-builder": "npm:systemjs-builder@0.15.16",
        "tar": "npm:tar@1.0.3",
        "traceur": "npm:traceur@0.0.105",
        "which": "npm:which@1.2.8"
      }
    },
    "npm:jspm-registry@0.4.1": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "rimraf": "npm:rimraf@2.5.2",
        "rsvp": "npm:rsvp@3.2.1",
        "semver": "npm:semver@4.3.6"
      }
    },
    "npm:jspm@0.17.0-beta.14": {
      "map": {
        "bluebird": "npm:bluebird@3.3.5",
        "chalk": "npm:chalk@1.1.3",
        "core-js": "npm:core-js@1.2.6",
        "glob": "npm:glob@6.0.4",
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "jspm-github": "npm:jspm-github@0.14.6",
        "jspm-npm": "npm:jspm-npm@0.28.10",
        "jspm-registry": "npm:jspm-registry@0.4.1",
        "liftoff": "npm:liftoff@2.2.1",
        "minimatch": "npm:minimatch@3.0.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "ncp": "npm:ncp@2.0.0",
        "proper-lockfile": "npm:proper-lockfile@1.1.2",
        "request": "npm:request@2.72.0",
        "rimraf": "npm:rimraf@2.5.2",
        "sane": "npm:sane@1.3.4",
        "semver": "npm:semver@5.1.0",
        "systemjs": "npm:systemjs@0.19.27",
        "systemjs-builder": "npm:systemjs-builder@0.15.16",
        "traceur": "npm:traceur@0.0.105",
        "uglify-js": "npm:uglify-js@2.6.2"
      }
    },
    "npm:jsprim@1.2.2": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2",
        "json-schema": "npm:json-schema@0.2.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:kind-of@3.0.3": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.3"
      }
    },
    "npm:lcid@1.0.0": {
      "map": {
        "invert-kv": "npm:invert-kv@1.0.0"
      }
    },
    "npm:liftoff@2.2.1": {
      "map": {
        "extend": "npm:extend@2.0.1",
        "findup-sync": "npm:findup-sync@0.3.0",
        "flagged-respawn": "npm:flagged-respawn@0.3.2",
        "rechoir": "npm:rechoir@0.6.2",
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "parse-json": "npm:parse-json@2.2.0",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "strip-bom": "npm:strip-bom@2.0.0"
      }
    },
    "npm:localtunnel@1.8.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "openurl": "npm:openurl@1.1.0",
        "request": "npm:request@2.65.0",
        "yargs": "npm:yargs@3.29.0"
      }
    },
    "npm:lodash.assign@4.0.9": {
      "map": {
        "lodash.keys": "npm:lodash.keys@4.0.7",
        "lodash.rest": "npm:lodash.rest@4.0.3"
      }
    },
    "npm:lodash.clonedeep@4.3.1": {
      "map": {
        "lodash._baseclone": "npm:lodash._baseclone@4.5.7"
      }
    },
    "npm:lodash.pad@4.4.0": {
      "map": {
        "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
        "lodash._basetostring": "npm:lodash._basetostring@4.12.0",
        "lodash.tostring": "npm:lodash.tostring@4.1.3"
      }
    },
    "npm:lodash.padend@4.5.0": {
      "map": {
        "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
        "lodash._basetostring": "npm:lodash._basetostring@4.12.0",
        "lodash.tostring": "npm:lodash.tostring@4.1.3"
      }
    },
    "npm:lodash.padstart@4.5.0": {
      "map": {
        "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
        "lodash._basetostring": "npm:lodash._basetostring@4.12.0",
        "lodash.tostring": "npm:lodash.tostring@4.1.3"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:makeerror@1.0.11": {
      "map": {
        "tmpl": "npm:tmpl@1.0.4"
      }
    },
    "npm:micromatch@2.3.7": {
      "map": {
        "arr-diff": "npm:arr-diff@2.0.0",
        "array-unique": "npm:array-unique@0.2.1",
        "braces": "npm:braces@1.8.4",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "extglob": "npm:extglob@0.3.2",
        "filename-regex": "npm:filename-regex@2.0.0",
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "kind-of": "npm:kind-of@3.0.3",
        "normalize-path": "npm:normalize-path@2.0.1",
        "object.omit": "npm:object.omit@2.0.0",
        "parse-glob": "npm:parse-glob@3.0.4",
        "regex-cache": "npm:regex-cache@0.4.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:mime-types@2.0.14": {
      "map": {
        "mime-db": "npm:mime-db@1.12.0"
      }
    },
    "npm:mime-types@2.1.11": {
      "map": {
        "mime-db": "npm:mime-db@1.23.0"
      }
    },
    "npm:minimatch@0.2.14": {
      "map": {
        "lru-cache": "npm:lru-cache@2.7.3",
        "sigmund": "npm:sigmund@1.0.1"
      }
    },
    "npm:minimatch@2.0.10": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.4"
      }
    },
    "npm:minimatch@3.0.0": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.4"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:node-pre-gyp@0.6.28": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "nopt": "npm:nopt@3.0.6",
        "npmlog": "npm:npmlog@2.0.3",
        "rc": "npm:rc@1.1.6",
        "request": "npm:request@2.72.0",
        "rimraf": "npm:rimraf@2.5.2",
        "semver": "npm:semver@5.1.0",
        "tar": "npm:tar@2.2.1",
        "tar-pack": "npm:tar-pack@3.1.3"
      }
    },
    "npm:node.extend@1.0.8": {
      "map": {
        "is": "npm:is@0.2.7",
        "object-keys": "npm:object-keys@0.4.0"
      }
    },
    "npm:node.flow@1.2.3": {
      "map": {
        "node.extend": "npm:node.extend@1.0.8"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.7"
      }
    },
    "npm:normalize-package-data@2.3.5": {
      "map": {
        "hosted-git-info": "npm:hosted-git-info@2.1.4",
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "semver": "npm:semver@5.1.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
      }
    },
    "npm:npmlog@2.0.3": {
      "map": {
        "ansi": "npm:ansi@0.3.1",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "gauge": "npm:gauge@1.2.7"
      }
    },
    "npm:object.omit@2.0.0": {
      "map": {
        "for-own": "npm:for-own@0.1.4",
        "is-extendable": "npm:is-extendable@0.1.1"
      }
    },
    "npm:on-finished@2.3.0": {
      "map": {
        "ee-first": "npm:ee-first@1.1.1"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:opn@3.0.3": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:opt-merger@1.1.1": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "minimist": "npm:minimist@1.2.0"
      }
    },
    "npm:os-locale@1.4.0": {
      "map": {
        "lcid": "npm:lcid@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.6.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "glob-base": "npm:glob-base@0.3.0",
        "is-dotfile": "npm:is-dotfile@1.0.2",
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.0"
      }
    },
    "npm:parsejson@0.0.1": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parseqs@0.0.2": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parseuri@0.0.4": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:pkg-conf@1.1.2": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "load-json-file": "npm:load-json-file@1.1.0",
        "object-assign": "npm:object-assign@4.1.0",
        "symbol": "npm:symbol@0.2.2"
      }
    },
    "npm:portscanner@1.0.0": {
      "map": {
        "async": "npm:async@0.1.15"
      }
    },
    "npm:proper-lockfile@1.1.2": {
      "map": {
        "err-code": "npm:err-code@1.1.1",
        "extend": "npm:extend@3.0.0",
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "retry": "npm:retry@0.9.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:randomatic@1.1.5": {
      "map": {
        "is-number": "npm:is-number@2.1.0",
        "kind-of": "npm:kind-of@3.0.3"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "deep-extend": "npm:deep-extend@0.4.1",
        "ini": "npm:ini@1.3.4",
        "minimist": "npm:minimist@1.2.0",
        "strip-json-comments": "npm:strip-json-comments@1.0.4"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "load-json-file": "npm:load-json-file@1.1.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "path-type": "npm:path-type@1.1.0"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:readable-stream@2.1.2": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:readdirp@2.0.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.4",
        "minimatch": "npm:minimatch@2.0.10",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:request@2.53.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.5.0",
        "bl": "npm:bl@0.9.5",
        "caseless": "npm:caseless@0.9.0",
        "combined-stream": "npm:combined-stream@0.0.7",
        "forever-agent": "npm:forever-agent@0.5.2",
        "form-data": "npm:form-data@0.2.0",
        "hawk": "npm:hawk@2.3.1",
        "http-signature": "npm:http-signature@0.10.1",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.0.14",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.6.0",
        "qs": "npm:qs@2.3.3",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.2.2",
        "tunnel-agent": "npm:tunnel-agent@0.4.3"
      }
    },
    "npm:request@2.58.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.5.0",
        "bl": "npm:bl@0.9.5",
        "caseless": "npm:caseless@0.10.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@2.0.1",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@1.0.0-rc4",
        "har-validator": "npm:har-validator@1.8.0",
        "hawk": "npm:hawk@2.3.1",
        "http-signature": "npm:http-signature@0.11.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.0.14",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "qs": "npm:qs@3.1.0",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.2.2",
        "tunnel-agent": "npm:tunnel-agent@0.4.3"
      }
    },
    "npm:request@2.65.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "bl": "npm:bl@1.0.3",
        "caseless": "npm:caseless@0.11.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@3.0.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@1.0.0-rc4",
        "har-validator": "npm:har-validator@2.0.6",
        "hawk": "npm:hawk@3.1.3",
        "http-signature": "npm:http-signature@0.11.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.11",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "qs": "npm:qs@5.2.0",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.2.2",
        "tunnel-agent": "npm:tunnel-agent@0.4.3"
      }
    },
    "npm:request@2.72.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "aws4": "npm:aws4@1.4.1",
        "bl": "npm:bl@1.1.2",
        "caseless": "npm:caseless@0.11.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@3.0.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@1.0.0-rc4",
        "har-validator": "npm:har-validator@2.0.6",
        "hawk": "npm:hawk@3.1.3",
        "http-signature": "npm:http-signature@1.1.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.11",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "qs": "npm:qs@6.1.0",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.2.2",
        "tunnel-agent": "npm:tunnel-agent@0.4.3"
      }
    },
    "npm:resp-modifier@6.0.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "minimatch": "npm:minimatch@2.0.10"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:rimraf@2.3.4": {
      "map": {
        "glob": "npm:glob@4.5.3"
      }
    },
    "npm:rimraf@2.5.2": {
      "map": {
        "glob": "npm:glob@7.0.3"
      }
    },
    "npm:rmdir@1.1.0": {
      "map": {
        "node.flow": "npm:node.flow@1.2.3"
      }
    },
    "npm:rollup@0.25.8": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "minimist": "npm:minimist@1.2.0",
        "source-map-support": "npm:source-map-support@0.3.3"
      }
    },
    "npm:sane@1.3.4": {
      "map": {
        "exec-sh": "npm:exec-sh@0.2.0",
        "fb-watchman": "npm:fb-watchman@1.9.0",
        "minimatch": "npm:minimatch@0.2.14",
        "minimist": "npm:minimist@1.2.0",
        "walker": "npm:walker@1.0.7",
        "watch": "npm:watch@0.10.0"
      }
    },
    "npm:send@0.13.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "depd": "npm:depd@1.1.0",
        "destroy": "npm:destroy@1.0.4",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.7.0",
        "fresh": "npm:fresh@0.3.0",
        "http-errors": "npm:http-errors@1.3.1",
        "mime": "npm:mime@1.3.4",
        "ms": "npm:ms@0.7.1",
        "on-finished": "npm:on-finished@2.3.0",
        "range-parser": "npm:range-parser@1.0.3",
        "statuses": "npm:statuses@1.2.1"
      }
    },
    "npm:serve-index@1.7.3": {
      "map": {
        "accepts": "npm:accepts@1.2.13",
        "batch": "npm:batch@0.5.3",
        "debug": "npm:debug@2.2.0",
        "escape-html": "npm:escape-html@1.0.3",
        "http-errors": "npm:http-errors@1.3.1",
        "mime-types": "npm:mime-types@2.1.11",
        "parseurl": "npm:parseurl@1.3.1"
      }
    },
    "npm:serve-static@1.10.2": {
      "map": {
        "escape-html": "npm:escape-html@1.0.3",
        "parseurl": "npm:parseurl@1.3.1",
        "send": "npm:send@0.13.1"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:socket.io-adapter@0.4.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "socket.io-parser": "npm:socket.io-parser@2.2.2"
      }
    },
    "npm:socket.io-client@1.4.5": {
      "map": {
        "backo2": "npm:backo2@1.0.2",
        "component-bind": "npm:component-bind@1.0.0",
        "component-emitter": "npm:component-emitter@1.2.0",
        "debug": "npm:debug@2.2.0",
        "engine.io-client": "npm:engine.io-client@1.6.8",
        "has-binary": "npm:has-binary@0.1.7",
        "indexof": "npm:indexof@0.0.1",
        "object-component": "npm:object-component@0.0.3",
        "parseuri": "npm:parseuri@0.0.4",
        "socket.io-parser": "npm:socket.io-parser@2.2.6",
        "to-array": "npm:to-array@0.1.4"
      }
    },
    "npm:socket.io-parser@2.2.2": {
      "map": {
        "benchmark": "npm:benchmark@1.0.0",
        "component-emitter": "npm:component-emitter@1.1.2",
        "debug": "npm:debug@0.7.4",
        "isarray": "npm:isarray@0.0.1",
        "json3": "npm:json3@3.2.6"
      }
    },
    "npm:socket.io-parser@2.2.6": {
      "map": {
        "benchmark": "npm:benchmark@1.0.0",
        "component-emitter": "npm:component-emitter@1.1.2",
        "debug": "npm:debug@2.2.0",
        "isarray": "npm:isarray@0.0.1",
        "json3": "npm:json3@3.3.2"
      }
    },
    "npm:socket.io@1.4.5": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "engine.io": "npm:engine.io@1.6.8",
        "has-binary": "npm:has-binary@0.1.7",
        "socket.io-adapter": "npm:socket.io-adapter@0.4.0",
        "socket.io-client": "npm:socket.io-client@1.4.5",
        "socket.io-parser": "npm:socket.io-parser@2.2.6"
      }
    },
    "npm:source-map-support@0.2.10": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:source-map-support@0.3.3": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.1"
      }
    },
    "npm:spdx-expression-parse@1.0.2": {
      "map": {
        "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
        "spdx-license-ids": "npm:spdx-license-ids@1.2.1"
      }
    },
    "npm:sshpk@1.8.3": {
      "map": {
        "asn1": "npm:asn1@0.2.3",
        "assert-plus": "npm:assert-plus@1.0.0",
        "dashdash": "npm:dashdash@1.13.1",
        "getpass": "npm:getpass@0.1.6"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.2",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:stream-throttle@0.1.3": {
      "map": {
        "commander": "npm:commander@2.9.0",
        "limiter": "npm:limiter@1.1.0"
      }
    },
    "npm:string-width@1.0.1": {
      "map": {
        "code-point-at": "npm:code-point-at@1.0.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:systemjs-builder@0.15.16": {
      "map": {
        "babel-core": "npm:babel-core@6.8.0",
        "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.8.0",
        "bluebird": "npm:bluebird@3.3.5",
        "es6-template-strings": "npm:es6-template-strings@2.0.0",
        "glob": "npm:glob@7.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rollup": "npm:rollup@0.25.8",
        "source-map": "npm:source-map@0.5.6",
        "systemjs": "npm:systemjs@0.19.27",
        "traceur": "npm:traceur@0.0.105",
        "uglify-js": "npm:uglify-js@2.6.2"
      }
    },
    "npm:systemjs@0.19.27": {
      "map": {
        "when": "npm:when@3.7.7"
      }
    },
    "npm:tar-pack@3.1.3": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "fstream": "npm:fstream@1.0.9",
        "fstream-ignore": "npm:fstream-ignore@1.0.4",
        "once": "npm:once@1.3.3",
        "readable-stream": "npm:readable-stream@2.0.6",
        "rimraf": "npm:rimraf@2.5.2",
        "tar": "npm:tar@2.2.1",
        "uid-number": "npm:uid-number@0.0.6"
      }
    },
    "npm:tar@1.0.3": {
      "map": {
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.9",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.9",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:tfunk@3.0.2": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "object-path": "npm:object-path@0.9.2"
      }
    },
    "npm:traceur@0.0.105": {
      "map": {
        "commander": "npm:commander@2.9.0",
        "glob": "npm:glob@5.0.15",
        "rsvp": "npm:rsvp@3.2.1",
        "semver": "npm:semver@4.3.6",
        "source-map-support": "npm:source-map-support@0.2.10"
      }
    },
    "npm:uglify-js@2.6.2": {
      "map": {
        "async": "npm:async@0.2.10",
        "source-map": "npm:source-map@0.5.6",
        "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
        "yargs": "npm:yargs@3.10.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:utf-8-validate@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.3.3"
      }
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-correct": "npm:spdx-correct@1.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:walker@1.0.7": {
      "map": {
        "makeerror": "npm:makeerror@1.0.11"
      }
    },
    "npm:weinre@2.0.0-pre-I0Z7U9OV": {
      "map": {
        "express": "npm:express@2.5.11",
        "nopt": "npm:nopt@3.0.6",
        "underscore": "npm:underscore@1.7.0"
      }
    },
    "npm:which@1.2.8": {
      "map": {
        "is-absolute": "npm:is-absolute@0.1.7",
        "isexe": "npm:isexe@1.1.2"
      }
    },
    "npm:wrap-ansi@2.0.0": {
      "map": {
        "string-width": "npm:string-width@1.0.1"
      }
    },
    "npm:ws@1.0.1": {
      "map": {
        "bufferutil": "npm:bufferutil@1.2.1",
        "options": "npm:options@0.0.6",
        "ultron": "npm:ultron@1.0.2",
        "utf-8-validate": "npm:utf-8-validate@1.2.1"
      }
    },
    "npm:yargs-parser@2.4.0": {
      "map": {
        "camelcase": "npm:camelcase@2.1.1",
        "lodash.assign": "npm:lodash.assign@4.0.9"
      }
    },
    "npm:yargs@3.10.0": {
      "map": {
        "camelcase": "npm:camelcase@1.2.1",
        "cliui": "npm:cliui@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "window-size": "npm:window-size@0.1.0"
      }
    },
    "npm:yargs@3.29.0": {
      "map": {
        "camelcase": "npm:camelcase@1.2.1",
        "cliui": "npm:cliui@3.2.0",
        "decamelize": "npm:decamelize@1.2.0",
        "os-locale": "npm:os-locale@1.4.0",
        "window-size": "npm:window-size@0.1.4",
        "y18n": "npm:y18n@3.2.1"
      }
    },
    "npm:yargs@4.4.0": {
      "map": {
        "camelcase": "npm:camelcase@2.1.1",
        "cliui": "npm:cliui@3.2.0",
        "decamelize": "npm:decamelize@1.2.0",
        "lodash.assign": "npm:lodash.assign@4.0.9",
        "os-locale": "npm:os-locale@1.4.0",
        "pkg-conf": "npm:pkg-conf@1.1.2",
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "require-main-filename": "npm:require-main-filename@1.0.1",
        "string-width": "npm:string-width@1.0.1",
        "window-size": "npm:window-size@0.2.0",
        "y18n": "npm:y18n@3.2.1",
        "yargs-parser": "npm:yargs-parser@2.4.0"
      }
    }
  }
});
