import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

let result
try {
  require('dotenv-vault-core').config()
} catch (e) {
  console.log(e)
}

export async function loader() {
  return json({
    env: {
      HELLO: process.env.HELLO,
    },
  });
}

export default function Index() {
  const data = useLoaderData()

  return (
    <h1>Hello {data.env.HELLO}</h1>
  );
}
