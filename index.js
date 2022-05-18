const inquirer = require("inquirer");

async function main() {
  try {
    const simpleAnswer = await simpleQuestion();
    const selectedChoice = await listTypeQuestion();
    const selectedCheckboxes = await checkBoxQuestion();
    console.log("Selected Checkboxes: ", selectedCheckboxes);
    console.log("Simple Answer: ", simpleAnswer);
    console.log("Selected Choice: ", selectedChoice);
  } catch (err) {
    console.error("Error", err);
  }
}

function simpleQuestion() {
  return inquirer.prompt([
    {
      name: "What",
      message: "What is this prompt?",
    },
  ]);
}

function listTypeQuestion() {
  return inquirer.prompt([
    {
      type: "list",
      name: "Select",
      message: "Choosing one from choices?",
      choices: ["Jumbo", "Large", "Standard", "Medium", "Small", "Micro"],
    },
  ]);
}

function checkBoxQuestion() {
  return inquirer.prompt([
    {
      type: "checkbox",
      name: "Check",
      message: "Check your choices?",
      choices: ["Jumbo", "Large", "Standard", "Medium", "Small", "Micro"],
    },
  ]);
}

module.exports = main;
