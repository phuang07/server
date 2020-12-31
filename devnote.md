# Development note

## Run server

To run server locally, create env.local, add the following:

```
# By putting dummy values, GitHub sign in will not work locally
GITHUB_CLIENT_ID = dummy
GITHUB_CLIENT_SECRET = dummy

# By putting dummy values, extracting visualizing commands will not work locally (except for JavaScript).
AWS_ACCESS_KEY_ID = dummy
AWS_SECRET_ACCESS_KEY = dummy
```


The package (dotenv-flow) takes care handling the .env.* files for your environment

See: [Server Contributing Note](https://github.com/algorithm-visualizer/server/blob/master/CONTRIBUTING.md)
https://github.com/algorithm-visualizer/server/blob/master/CONTRIBUTING.md


### Issue

#### Python version

It seems `npm run watch` need to run python v2. If you are using pyenv, check your global python version 
```
pyenv global // show current python version
pyenv env // show all python installed
pyenv global 2.7.16 // switch python to 2.7.16 globally

npm watch 

```

#### Node version

The project currently support node v12. If running on v15, you may experience error.

Also, when first start the project, make sure to run

```
npm install  // dont use yarn. It will fail for some reason.

```

When run `npm install`, it automatically clone 2 repos `algorithm` and `front-end` into the public directory.
