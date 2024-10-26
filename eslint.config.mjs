import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  {
    files: ["src/**/*.js"],
    rules: {
        semi: "error"
    }
},
  pluginJs.configs.recommended,
];