#! /usr/bin/env node
"use strict";
// This line is called a shebang, it tells the OS to run it with nodejs 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        messgae: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
// print the array of the words to console
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
