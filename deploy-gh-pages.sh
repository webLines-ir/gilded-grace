#!/bin/bash
# Build and deploy Vite app to gh-pages branch for GitHub Pages
set -e
npm run build
cd dist
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy to gh-pages"
git remote add origin $(git config --get remote.origin.url)
git push -f origin gh-pages:gh-pages
cd ..
rm -rf dist/.git

echo "Deployed to gh-pages branch."
