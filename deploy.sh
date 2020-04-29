#!/usr/bin/env sh

# abort on errors
set -e

# build
#echo Linting..
#npm run lint
#echo Building. this may take a minute...
#npm run build

if [ ! -d "dist" ]  
then
    echo "dist folder not found. run build manually."
    exit 1
fi
# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'example.com' > CNAME

echo Deploying..
git init
git add -A
git commit -m 'deploy'

# deploy
git push -f https://github.com/KarmaKast/MindMap-WebApp.git master:gh-pages

cd ..