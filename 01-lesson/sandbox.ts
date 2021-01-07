// Files
const fileRead = './readfile.txt';
const fileWrite = './writeFile.txt';

// First part: Reading files

const decoder = new TextDecoder('utf-8');
const data = await Deno.readFile(fileRead);
console.log(decoder.decode(data));
console.log("\n");
    // cp readfile.txt.dist readfile.txt && deno run --allow-read sandbox.ts

// Second part: Writing to files
const encoder = new TextEncoder();
const textToWrite = 'Writing to the file ' + Date.now();
await Deno.writeFile(fileWrite, encoder.encode(textToWrite));
    // deno run --allow-write sandbox.ts
    console.log('Now reading without decoder what we have written');
    console.log(await Deno.readTextFile(fileWrite));
    console.log("\n");

// Third Part: Renaming and removing files
const newName = './deleteme.txt'
await Deno.rename(fileWrite, newName);
await Deno.remove(newName);
console.log("File %s was renamed to %s and deleted if you haven't see any error until here!\n",
    fileWrite,
    newName);

console.log("\nUseful information\n");
console.log("We can allow read or write to certain paths");
console.log("deno run --allow-read=$(pwd) --allow-write=$(pwd) ./sandbox.ts")