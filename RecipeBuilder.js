const addIngredientButton = document.getElementById("add-ingredient");
const ingredientTextInput = document.getElementById("ingredient-input");
const ingredientList = document.getElementById("ingredient-list");
const addItemButtons = document.getElementsByClassName("add-item-button");

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