typescript-annotate-bug
=======================

A reproduction for: https://github.com/Kagami/gulp-ng-annotate/issues/9

To reproduce:

* npm install
* gulp

You can see that the bug reproduces for .ts files *that are nested inside a directory*, in the reproduction there are 3 files:

* app\greeter3.ts
* app\controllers\greeter.ts
* app\controllers2\greeter2.ts

For the first one the source map, in **deploy** folder is created correctly, for **greeter3.ts**, for the other 2, however, it is as I wrote above - The sourcemap seems to be referring to the .js file, for some reason, e.g: `{"version":3,"sources":["controllers2/greeter2.js"]...`

I've also added a task `gulp concat`. That puts everything in a single file, the results are the same, however, greeter3.js is correct, the others are not.
