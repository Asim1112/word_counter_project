#! /usr/bin/env node

// This line is called a shebang, it tells the OS to run it with nodejs 


import inquirer from "inquirer"

const answers: {
    Sentence: string
} = await inquirer.prompt([

    {
        name: "Sentence",
        type: "input",
        messgae: "Enter your sentence to count the word: "



    }
])

const words = answers.Sentence.trim().split(" ")

// print the array of the words to console
console.log(words)

console.log(`Your sentence word count is ${words.length}`)