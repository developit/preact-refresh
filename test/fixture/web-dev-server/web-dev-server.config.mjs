import { esbuildPlugin } from "@web/dev-server-esbuild";
import { hmrPlugin } from '@web/dev-server-hmr';
import prefresh from "@prefresh/web-dev-server";

export default {
  nodeResolve: true,
  port: 3005,
  plugins: [
    esbuildPlugin({ jsx: true, jsxFactory: "h", jsxFragment: "Fragment" }),
    prefresh(),
    hmrPlugin(),
  ],
};
