#!/bin/sh

# Build the application with explicit base URL for GitHub Pages
VITE_BASE_URL=/ankitkumar-portfolio/ npm run build

# Ensure images directory exists in the dist/public folder
mkdir -p dist/public/images

# Copy images to the dist/public directory
cp -r attached_assets/* dist/public/images/

# Deploy to GitHub Pages
npx gh-pages -d dist/public