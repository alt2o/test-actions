const core = require('@actions/core');
const github = require('@actions/github');

try {
  const jobId = core.getInput('job-id');
  const staticPort = core.getInput('static-port');
  const containerPort = core.getInput('container-port');
  const image = core.getInput('image');
  const log = `Hello!
  Job id: ${jobId}
  Static port: ${staticPort}
  Container port: ${containerPort}
  Image: ${image}
  Env: ${process.env.token}
  `;
  console.log(log);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("log", log)
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}