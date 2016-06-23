// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by dwindle.js.
import { name as packageName } from "meteor/dwindle";

// Write your tests here!
// Here is an example.
Tinytest.add('dwindle - example', function (test) {
  test.equal(packageName, "dwindle");
});
