import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({
    ENV: {
      HELLO: process.env.HELLO,
    },
  });
}

export default function Index() {
  const data = useLoaderData()

  return (
    <h1>Hello {data.ENV.HELLO}</h1>
  );
}
