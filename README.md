# meanjs-map
This module is intended for those who wish to embed Google Maps into their MEAN.js app.
We will be using [Angular Google Maps](http://angular-ui.github.io/angular-google-maps/#!/)
## Setup
Download this repo as a .zip file and add the files to `modules\map`. Then execute:
```
bower install angular-google-maps
```
In `config\assets\default.js` add these 3 references to the `module.exports.client.js` array like so:
```
module.exports = {
    client: {
        ...
        js: [
        ...
            'public/lib/lodash/lodash.js',
            'public/lib/angular-google-maps/dist/angular-google-maps.js',
            'public/lib/angular-simple-logger/dist/angular-simple-logger.js'
        ],
        ...
    }
};
```
Add to `bower.json`:
```
  "dependencies": {
    ...
    "angular-google-maps": "^2.3.2"
  },
  ...
```
