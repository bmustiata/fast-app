#!/usr/bin/env node

var fastApp = require("fast-app"),
    command = process.argv[2],
    program = require("commander");



if (command === "application") {
    fastApp.application.execute();
} else if (command === "module") {
    fastApp.module.execute();
} else if (command === "serve") {
    fastApp.serve.execute();
} else {
    fastApp.help.execute();
}
