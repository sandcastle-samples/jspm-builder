SystemJS.config({
  baseURL: ".",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "undefined": [
      "app/index.ts",
      "npm:typescript@1.8.10/lib/lib.es6.d.ts!github:frankwallis/plugin-typescript@4.0.10/plugin.js",
      "npm:typescript@1.8.10.json",
      "github:frankwallis/plugin-typescript@4.0.10.json",
      "app/car.ts",
      "typings/tsd.d.ts!github:frankwallis/plugin-typescript@4.0.10/plugin.js",
      "typings/lodash/lodash.d.ts!github:frankwallis/plugin-typescript@4.0.10/plugin.js",
      "typings/jquery/jquery.d.ts!github:frankwallis/plugin-typescript@4.0.10/plugin.js",
      "npm:jquery@2.2.3/dist/jquery.js",
      "npm:jquery@2.2.3.json"
    ]
  }
});
