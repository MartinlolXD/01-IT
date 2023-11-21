const items = []; 
let isEditing = false; 

function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemList = document.getElementById("itemList");

    const newItemText = itemInput.value.trim();


    if (newItemText !== "") {
   
        if (!items.some(item => item.text === newItemText)) {
            const newItem = {
                text: newItemText,
                count: 1
            };
            items.push(newItem);

            const listItem = document.createElement("li");
            listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        
            
            const deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-danger";
            deleteButton.innerText = "Smazat";
            deleteButton.onclick = function () { 
                deleteItem(listItem, newItem);
            };

            
            const doneButton = document.createElement("button");    
            doneButton.className = "btn btn-success"; 
            doneButton.innerText = "Hotovo"; 
            doneButton.onclick = function () {
                markDone(listItem);
            };

            
            listItem.innerHTML = `<span>${newItem.text} (Počet: ${newItem.count})</span>`;
            

    
            listItem.appendChild(doneButton);
            listItem.appendChild(deleteButton);

            itemList.appendChild(listItem);

            itemInput.value = "";
        } else {

            const existingItem = items.find(item => item.text === newItemText);
            alert("Tato položka již existuje")
        }
    } else alert("PRÁZDNÝ!")
}

function updateItemCount(item) {
    const itemList = document.getElementById("itemList");
    const itemsElements = itemList.getElementsByTagName("li");
    for (let i = 0; i < itemsElements.length; i++) {
        const listItem = itemsElements[i];
        if (listItem.textContent.includes(item.text)) {
            listItem.innerHTML = `<span>${item.text} (Počet: ${item.count})</span>`;
        }
    }
}

function toggleEdit() {
    const editButton = document.getElementById("editButton");

    if (isEditing) {
        isEditing = false;
        editButton.innerText = "Upravit položky";

       
        const itemList = document.getElementById("itemList");
        const items = itemList.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
            const listItem = items[i];
            listItem.contentEditable = false;
            listItem.style.border = "none";
        }
    } else {

        isEditing = true;
        editButton.innerText = "Skončit úpravu";

    
        const itemList = document.getElementById("itemList");
        const items = itemList.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
            const listItem = items[i];
            listItem.contentEditable = true;
            listItem.style.border = "1px solid #ccc";
        }
    }
}

function deleteItem(item, itemObject) {
    const itemList = document.getElementById("itemList");

    
    const index = items.indexOf(itemObject);
    if (index !== -1) {
        items.splice(index, 1);
    }

    itemList.removeChild(item);
}

function markDone(item) {
    
    item.style.backgroundColor = "lightgreen";
}

function deleteItems() {
    const itemList = document.getElementById("itemList");


    itemList.innerHTML = "";
    items.length = 0;
}