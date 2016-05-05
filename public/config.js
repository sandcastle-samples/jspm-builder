System.config({
  baseURL: "/",
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  package: {
     'app': {
      'main': 'index',
      'defaultExtension': 'ts',
      'meta': {
        '*.ts': {
          'loader': 'typescript',
          'format': 'es6'
        }
      }
    },
  },

  map: {
    "typescript": "npm:typescript@1.8.10",
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    }
  }
});
