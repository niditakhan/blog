#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd blog/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'Deploying to Github Pages'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:niditakhan/niditakhan.github.io.git main

cd -
