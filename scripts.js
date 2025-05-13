
const fs = require('fs');
const path = require('path');

// Read the package.json file
const packageJsonPath = path.resolve(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Update the scripts section
packageJson.scripts = {
  ...packageJson.scripts,
  "prebuild": "node copy-assets.js",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
};

// Write the updated package.json file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Updated package.json scripts');
