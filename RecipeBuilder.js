const titleInput = document.getElementById("recipe-title-input");
const addIngredientButton = document.getElementById("add-ingredient");
const addInstructionButton = document.getElementById("add-instruction");
const ingredientTextInput = document.getElementById("ingredient-input");
const instructionTextInput = document.getElementById("instruction-input")
const ingredientList = document.getElementById("ingredient-list");
const instructionList = document.getElementById("instruction-list");
const inputs = document.getElementsByTagName("input");

const deleteButton = document.getElementById("reset-button");
const exportButton = document.getElementById("export-button");

function addListItem(inputElement, locationElement){
    const newElement = document.createElement("li");
    newElement.addEventListener("click", () => { newElement.remove(); });
    locationElement.appendChild(newElement);
    newElement.setAttribute("aria-live", "assertive");
    newElement.innerText = inputElement.value;   

    inputElement.value = "";
}

addIngredientButton.addEventListener("click", () => {
    if (ingredientTextInput.value !== ""){
        addListItem(ingredientTextInput, ingredientList);
    }
});
ingredientTextInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter"){
        if (ingredientTextInput.value !== ""){
            addListItem(ingredientTextInput, ingredientList);
        }
    }
});
addInstructionButton.addEventListener("click", () => {
    if (instructionTextInput.value !== ""){
        addListItem(instructionTextInput, instructionList);
    }
});
instructionTextInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter"){
        if (instructionTextInput.value !== ""){
            addListItem(instructionTextInput, instructionList);
        }
    }
});

deleteButton.addEventListener("click", () => {
    for (let i=0; i < inputs.length; i++){
        inputs[i].value = "";
    }
    ingredientList.innerHTML = "";
    instructionList.innerHTML = "";
});

exportButton.addEventListener("click", () => {
    let listOfIngredients = document.getElementById("ingredient-list").getElementsByTagName("li");
    let listOfInstructions = document.getElementById("instruction-list").getElementsByTagName("li");
    let ingredientTextArray = [];
    let instructionTextArray = [];

    for (let i=0; i < listOfIngredients.length; i++){
        ingredientTextArray[i] = listOfIngredients[i].textContent;
    }
    for (let i=0; i < listOfInstructions.length; i++){
        instructionTextArray[i] = listOfInstructions[i].textContent;
    }

    const recipe = { title: titleInput.value, ingredients: ingredientTextArray, instructions: instructionTextArray };
    writeRecipeToFile(recipe);
});