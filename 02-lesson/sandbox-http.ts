import { serve } from "https://deno.land/std@0.83.0/http/server.ts";
const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of server) {
    req.respond({
        status: 418,
        body: `<h1>I am a teapot</h1> <p>You have visited ${req.url} </p>`
    })
}