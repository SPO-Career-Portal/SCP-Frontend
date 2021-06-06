correct changes as mentioned in src/store.js : 
    comment added below part and uncomment the part above 

    utils : https://github.com/pclubiitk/Campus-Discuss-Frontend/blob/master/src/utils/requests.js

    login  https://github.com/pclubiitk/Campus-Discuss-Frontend/blob/master/src/screens/login/index.js

    remove : 
        "server": "json-server --watch login.json --port 5000"
    from scripts in package.json

    remove:
        "json-server": "^0.16.3",
    from dependencies in package.json

    remove : login.json

