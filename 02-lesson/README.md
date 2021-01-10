# Std Library

Standard libraries are maintained officially by Deno Team which means that always will be soported by them.

We'll speak about the 3rd party libraries in next lesson.
 
# Importing libraries

One important thing when you include a Deno library is import the library with the version because some functions/methods or libraries can be deleted. So we must do:

```bash
import { v4 } from "https://deno.land/std@0.83.0/uuid/mod.ts";
```

Instead of:

```bash
import { v4 } from "https://deno.land/std/uuid/mod.ts";
```

We can also use imports_map.json file but it is a unstable feature by now, probably not, when you read this... Who knows?!

## Links
- https://deno.land/manual@v1.6.3/standard_library
- https://deno.land/manual/linking_to_external_code/import_maps