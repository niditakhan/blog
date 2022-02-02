#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd blog/.vuepress/dist

# if you are deploying to a custom domain
# echo 'niditakhan.github.io' > CNAME

git add -A
git commit -m 'Deploying to Github Pages'

# if you are deploying to https://<USERNAME>.github.io
git push

cd -
