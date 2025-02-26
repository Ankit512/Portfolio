#!/bin/sh

# Build the application
npm run build

# Deploy to GitHub Pages
npx gh-pages -d dist/public
