const kue = require("kue");
const queue = kue.createQueue();

// Create Job Queue
queue
  .create("email", {
    title: "welcome email for example"
  })
  .save();

// Process Job Queue
queue.process("email", function(job, done) {
  // In case of success job
  done(null, job.data);

  // In case of fail job
  // done(error);
});

// Event Job Queue
job
  .on("complete", function(result) {
    console.log("Job completed with data ", result);
  })
  .on("failed attempt", function(errorMessage, doneAttempts) {
    console.log("Job failed");
  })
  .on("failed", function(errorMessage) {
    console.log("Job failed");
  });
