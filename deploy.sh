#!/usr/bin/env sh

# Do not forget to change "base: " in vite.config.js

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
echo 'nav'
cd dist

# Init
echo 'init'
git init
git add -A

# Commit
echo 'commit'
git commit -m 'deploy'

# Push to gh-pages
echo 'push'
git push -f git@github.com:BCollignonEcv/festival-icvp.git master:gh-pages

cd -