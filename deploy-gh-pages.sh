#!/bin/bash
# Build and deploy Vite app to gh-pages branch for GitHub Pages
set -e

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: This script must be run from within a git repository."
    exit 1
fi

# Get the remote URL
REPO_URL=$(git config --get remote.origin.url)
if [ -z "$REPO_URL" ]; then
    echo "Error: No remote origin URL found."
    exit 1
fi

echo "Building the project..."
npm install --legacy-peer-deps
npm run build

echo "Deploying to gh-pages..."
cd dist

# Create a new git repository
git init
git add .
git commit -m "Deploy to gh-pages - $(date)"

# Add the remote and push
git remote add origin "$REPO_URL"
git push -f origin main:gh-pages

# Cleanup
cd ..
rm -rf dist/.git

echo "Successfully deployed to gh-pages branch!"
echo "Your site should be available at: https://your-username.github.io/gilded-grace/"
