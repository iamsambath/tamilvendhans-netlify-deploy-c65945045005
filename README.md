**Firebase, express with Netlify deploy**

---

## Steps to follow to run the code in local

1. Run the **npm start** command on CMD

---

## Steps to Start

1. Run **npm init** command

2. Install required node modules,

**npm install --save body-parser express http-proxy-middleware netlify-lambda npm-run-all serverless-http cors**

3. Add below scripts in package.json file

    "scripts": {

        "start": "run-p start:**",

        "start:lambda": "netlify-lambda serve ./",

        "build": "run-p build:**",
        
        "build:lambda": "netlify-lambda build ./",
        
        "deploy:draft": "netlify deploy --dir=build --functions=functions",
        
        "deploy:prod": "netlify deploy --dir=build --functions=functions --prod"
    
    }

4. Add **netlify.toml** file on base folder with below content

    [build]

        Functions = "functions"

    [[redirects]]

        from = "/*"

        to = "/index"

        status = 200
    
5. Add **.env** file on base folder with below content

    SKIP_PREFLIGHT_CHECK=true

6. index.js:

    const express = require('express');

    const serverless = require('serverless-http');

    const bodyParser = require('body-parser');

    const cors = require('cors');

    const app = express();

    const router = express.Router();

    router.use(cors());

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true }));

    **Write your APIs here**

    app.use('/.netlify/functions/index', router); // path must route to lambda

    module.exports = app;

    module.exports.handler = serverless(app);

## Enjoy your coding !!!