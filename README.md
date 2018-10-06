# drawing-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* npm install -g ember-cli : [Ember CLI](https://ember-cli.com/) 
* npm install -g bower
* npm install -g phantomjs-prebuilt : [PhantomJS](http://phantomjs.org/) : 

## Installation

* `git clone <repository-url>` this repository
* `cd dc-canvas-master`
* `npm install`
* `bower install`
* `node setup.js`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
  
  
## Problem :
*** The Problem ***

__Description__

You're given the task of writing a simple console version of a drawing program. 
At this time, the functionality of the program is quire limited but this might change in the future. 
In a nutshell, the program should work as follows:
 1. Create a new canvas
 2. Start drawing on the canvas by issuing various commands
 3. Quit


Command and Description
* C w h 
 Should create a new canvas of width w and height h.

* L x1 y1 x2 y2
 Should create a new line from (x1,y1) to (x2,y2). Currently only horizontal or vertical lines are supported. Horizontal and vertical  lines will be drawn using the 'x' character.

* R x1 y1 x2 y2   
 Should create a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2). Horizontal and vertical lines will be drawn using the 'x' character.

* B x y c         
Should fill the entire area connected to (x,y) with "colour" c. The behaviour of this is the same as that of the "bucket fill" tool in paint programs.

* Q               
 Should quit the program.



