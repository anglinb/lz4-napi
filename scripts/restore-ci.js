#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Restore optionalDependencies
packageJson.optionalDependencies = {
  "@anglinb/lz4-napi-linux-x64-gnu": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-darwin-x64": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-win32-x64-msvc": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-linux-x64-musl": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-linux-arm64-gnu": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-win32-ia32-msvc": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-linux-arm-gnueabihf": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-darwin-arm64": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-android-arm64": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-android-arm-eabi": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-freebsd-x64": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-linux-arm64-musl": "2.8.1-frame-sync",
  "@anglinb/lz4-napi-win32-arm64-msvc": "2.8.1-frame-sync"
};

// Write back with optionalDependencies
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
console.log('Restored optionalDependencies to package.json');