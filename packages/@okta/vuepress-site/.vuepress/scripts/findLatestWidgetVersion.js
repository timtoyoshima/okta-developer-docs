// Per https://oktainc.atlassian.net/browse/OKTA-257391
// Finds latest version of specified major version
// see .vuepress/scripts/build-replacement-vars.js to see usage

const execSync = require('child_process').execSync;
const semverCompare = require('semver/functions/compare');

const findLatestWidgetVersion = (majorVersion) => { 
  const cleanVersion = `${majorVersion}`.replace(/\D+/g, '');
  if(cleanVersion !== `${majorVersion}`) { 
    // Preventing command execution via shell command insertion attacks
    throw new Error(`only digits for a major version of the widget permitted! saw: "${majorVersion}"`);
  }

  const jsonOutput = execSync(`npm view --json @okta/okta-signin-widget@${cleanVersion} version`);
  console.warn('JSON: ', jsonOutput.toString());
  const publishedVersions = JSON.parse(jsonOutput);
  console.warn('Published: ', publishedVersions);
  const latestWidgetVersion = Array.isArray(publishedVersions) ? publishedVersions.sort(semverCompare).slice(-1)[0] : publishedVersions;

  return latestWidgetVersion;
};

module.exports = findLatestWidgetVersion;

