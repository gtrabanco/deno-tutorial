// UUID Module
import { v4 } from "https://deno.land/std@0.83.0/uuid/mod.ts";

const uuid = v4.generate();

console.log("Your uuid is %s", uuid);

// -FileSystem Module-
// Jsons

const ninjasFile = 'ninjas.json';
const booksFile = 'books.json';

const books = [
    {
      "title": "the way of kings",
      "author": "brandon sanderson"
    },
    {
      "title": "name of the wind",
      "author": "patrick rothfuss"
    }
  ];
/* // Old way
import { readJson, writeJson } from "https://deno.land/std@0.68.0/fs/mod.ts";
const jsonObject = await readJson(ninjasFile);
console.log(jsonObject)

await writeJson(booksFile, books);
*/

// New way
import { exists, ensureFile } from "https://deno.land/std@0.83.0/fs/mod.ts";

const jsonObject = JSON.parse(await Deno.readTextFile(ninjasFile));
console.log(jsonObject.length);

if ( exists(booksFile) ) {
    Deno.remove(booksFile);
}
ensureFile(booksFile); // If file does not exists it create it, it's stupid, it's just for learning

const booksContent = (new TextEncoder()).encode(JSON.stringify(books, null, 2));
await Deno.writeFile(booksFile, booksContent);