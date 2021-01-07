// Fetch API
const apiUrl = 'https://swapi.dev/api/films/';
const res = await fetch(apiUrl);
const data = await res.json();

console.log(data);

// We should run this script with --allow-net flag
// We can allow only any (or some comma separated) domain(s) after "="
//   $ deno run --allow-net=swapi.dev,example.com ./sandbox-fetch.ts
//  More permissions: https://deno.land/manual/getting_started/permissions