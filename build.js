({
    baseUrl: "./app",
    paths: {
        mustache: 'libs/mustache',
        bootstrap: 'libs/bootstrap.min',
        config:  'empty:'
    },
    "packages": [
        {
            "name": "accounting",
            "location": "packages/accounting",
            "main": "accounting.js"
        },
        {
            "name": "async",
            "location": "packages/async",
            "main": "lib/async.js"
        },
        {
            "name": "events",
            "location": "packages/events",
            "main": "events.js"
        },
        {
            "name": "jquery",
            "location": "packages/jquery",
            "main": "jquery.js"
        },
        {
            "name": "jquery-ui",
            "location": "packages/jquery-ui",
            "main": "dist/jquery-ui.min.js"
        },
        {
            "name": "json",
            "location": "packages/json",
            "main": "json.js"
        },
        {
            "name": "text",
            "location": "packages/text",
            "main": "text.js"
        }
    ],

    name: "app",
    out: "./app/app-built.js"
})