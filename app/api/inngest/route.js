import { serve } from "inngest/next";
import { Inngest } from "inngest";
import { helloWorld } from "../../../inngest/functions";

const inngest = new Inngest({ id: "my-app" });

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld]
});
