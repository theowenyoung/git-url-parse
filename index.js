const core = require('@actions/core');
const GitUrlParse = require("git-url-parse");


// most @actions toolkit packages have async methods
async function run() {
  try { 
    const url = core.getInput('url');
    core.debug(`input url: ${url}`)
    const urlObj = GitUrlParse(url);
    core.setOutput('result', JSON.stringify(urlObj));
    const keys = Object.keys(urlObj);
    keys.forEach(key=>{
      if(typeof urlObj[key] === 'string' || urlObj[key]===null){
        core.setOutput(key, urlObj[key]);
      }
    })
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
