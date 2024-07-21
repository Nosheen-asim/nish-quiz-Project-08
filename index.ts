#! /usr/bin/env node
import inquirer from "inquirer"

const quiz :{
    question_1: String;
    question_2 :String;
    question_3 :String;
    question_4 :String
    question_5 : String;
} = await inquirer.prompt([
    {
        name :"question_1",
        type :"list",
        message :"Q1.What is the correct way to check if two values are not equel in Typescript?",
        choices :["a == b","a === b","a = b","a !== b"]
    },
    {
        name :"question_2",
        type :"list",
        message :"Q2.Which of the common characters is commenly allowed in variables name in typescrip?",
        choices :["$","@","#","&"]
    },
    {
        name : "question_3",
        type :"list",
        message :" Q3. Which operator is commenly used for string concatenation in typescript?",
        choices :["+","-","*","/"]
    },
    {
        name : "question_4",
        type :"list",
        message :"Q4. In typescript,which symbol is used to terminate the statement?",
        choices :[".",":",";",","]
    },
    {
        name :"question_5",
        type :"list",
        message:"Q5,Which method of Inquirer.js is used to start the prompt in typescript?",
        choices :["start()","init()","prompt()","run()"]
    },

    
]);
let score:number = 0;
switch(quiz.question_1){
    case"a !== b":
    console.log("1.Correct!");
    ++score;
    break;
    default:
    console.log("1.Incorrect!");
    
    
}
switch(quiz.question_2){
    case"$":
    console.log("2.Correct!");
    ++score;
    break;
    default:
    console.log("2.Incorrect!");
}
switch(quiz.question_3){
    case"+":
    console.log("3.Correct!");
    ++score;
    break;
    default:
    console.log("3.Incorrect!");
}
switch(quiz.question_4){
    case";":
    console.log("4.Correct!");
    ++score;
    break;
    default:
    console.log("4.Incorrect!");
}
switch(quiz.question_5){
    case"prompt()":
    console.log("5.Correct!");
    ++score;
    break;
    default:
    console.log("5.Incorrect!");
} 
console.log(`score: ${score}`);
            



