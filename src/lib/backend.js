import { createDirectus, rest } from "@directus/sdk";

const backend = createDirectus(process.env.BACKEND_URL).with(rest());


export default backend;