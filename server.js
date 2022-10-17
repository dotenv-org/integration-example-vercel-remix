import { createRequestHandler } from "@remix-run/vercel";
import * as build from "@remix-run/dev/server-build";

require('dotenv-vault').config({ path: 'env' })
console.log(process.env)

export default createRequestHandler({ build, mode: process.env.NODE_ENV });
