#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Remove optionalDependencies for CI builds
if (packageJson.optionalDependencies) {
  delete packageJson.optionalDependencies;
  
  // Write back without optionalDependencies
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('Removed optionalDependencies from package.json for CI build');
}