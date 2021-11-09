# Jitterbit X Microsoft Face Detect API

This NodeJS app, allows you to interact with a jitterbit project and API's configured to utilise the Microsoft Azure Face Detect API.

## Pre-requisites

You will need an active licence account with jitterbit and need to have established 4 x API routes for all demos to work:

1. POST /facedetect - Returns face detection data based on supplied image url
1. POST /faceaddnewface - Returns results of adding a new face to the Microsoft Azure face detection API based on supplied personname and image url
1. POST /faceverify - Returns results of face verification based on person name and image url
1. GET /getsalesforceusers - Returns a list of Salesforce users

## Installation

Firstly, ensure you have [nodejs](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

Once downloaded, open the project folder and run:

1. Install project dependencies:
```bash
npm install
```

2. Configure your jitterbit API urls in app.js, create.ejs, detect.js, verify.js

3. To run the project:
```bash
npm run watch
```

## Usage

Browse to the output url http://localhost:3000 to interact with the demo.

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)