#!/bin/bash
set -e
git checkout main
npm install
npm run build
git branch -D gh-pages || true
git checkout --orphan gh-pages
# Remove all tracked files
git rm -rf .
# Restore .gitignore so we don't accidentally commit node_modules
git checkout main -- .gitignore || true
# Copy built files
cp -a dist/. .
# Add to git and commit
git add .
git commit -m "Deploy pristine build"
# Force push to GitHub
git push -f origin gh-pages
# Clean up and return to main
git checkout main
git clean -fd
