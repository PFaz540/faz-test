// https://mochajs.org/api/mocha

// Use Environment Variables in our .env file
require("dotenv").config();

module.exports = {
   ui: "bdd", // Interface name
   timeout: "60000", // Kill the tests if they take over 60 Seconds
   exit: true, // Exit Mocha once all the tests have ran
   failZero: true, // Fail the test run if 0 tests are ran
   color: true, // Display coloured text in Terminal
   diff: true, // Show diff on failure?
   parallel: process.env.PARALLEL_TEST_RUNS, // Run tests in parallel. Set via .env file
   // jobs: 0, // Max number of worker processes for parallel runs. 
   reporter: "spec" // Reporter name
}