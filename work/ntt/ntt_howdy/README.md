# ntt_howdy


## Built With:
+ Sass
+ Gulp Inline CSS: https://www.npmjs.com/package/gulp-inline-css
+ NPM, Gulp

Do not edit inside the build folder. Edit the index.html in root and the sass within the /scss folder

Ensure that Sass is ported to style.css in root when building, that will be the css that is inlined.

## Build Instructions
In the command line, navigate to the folder containing this project.

Install Node Dependencies
---
    npm install --save-dev gulp-inline-css
---

Run Gulp
---
    gulp
---

 This will build the index.html with inlined css. The file will be output to /build