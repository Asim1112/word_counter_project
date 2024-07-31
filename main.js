#! /usr/bin/env node

import inquirer from "inquirer";
const answers = await inquirer.prompt([
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
