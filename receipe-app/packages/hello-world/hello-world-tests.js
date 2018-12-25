// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by hello-world.js.
import { name as packageName } from "meteor/bachi:hello-world";

// Write your tests here!
// Here is an example.
Tinytest.add('hello-world - example', function (test) {
  test.equal(packageName, "hello-world");
});
