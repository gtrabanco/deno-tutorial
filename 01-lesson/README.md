# Permissions
We can allow read or write to certain paths. For example to allow your current working directory:
```bash
deno run --allow-read=$(pwd) --allow-write=$(pwd) ./sandbox.ts
```

We can also provide comma separated paths or comma separated domains when using `--allow-net`, for example:

```bash
deno run --allow-net=swapi.dev,example.com sandbox-fetch.ts
```