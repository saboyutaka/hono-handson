import { Hono } from "hono";
import { graphqlServer } from "@hono/graphql-server";
import { buildSchema } from "graphql";

const schema = buildSchema(`
type Query {
  hello: String
}
`);

const rootResolver = () => {
  return {
    hello: () => "Hello Hono!",
  };
};

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.use("/graphql", graphqlServer({
  schema, rootResolver
}));

export default app;
