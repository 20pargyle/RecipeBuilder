const titleInput = document.getElementById("recipe-title-input");
const addIngredientButton = document.getElementById("add-ingredient");
const ingredientTextInput = document.getElementById("ingredient-input");
const ingredientList = document.getElementById("ingredient-list");
const addItemButtons = document.getElementsByClassName("add-item-button");
const inputs = document.getElementsByTagName("input");

const deleteButton = document.getElementById("reset-button");
const exportButton = document.getElementById("export-button");

for (var i=0; i < addItemButtons.length; i++) {

    addItemButtons[i].addEventListener("click", function () {
        const newElement = document.createElement("li");
        newElement.addEventListener("click", () => { newElement.remove(); });
        
        let inputField = this.parentElement.firstElementChild; // grabs the value of the text input
        newElement.textContent = inputField.value;

        let itemList = this.parentElement.parentElement.lastElementChild;
        itemList.insertBefore(newElement, null);

        inputField.value = "";

    });
}

deleteButton.addEventListener("click", () => {

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