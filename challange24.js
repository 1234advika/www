let inventory = [];

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (itemName && quantity) {
        const newItem = {
            name: itemName,
            quantity: quantity
        };
        inventory.push(newItem);
        displayInventory();
        clearInputs();
    } else {
        alert('Please enter both item name and quantity.');
    }
}

function displayInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';

    inventory.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>Name:</span> ${item.name} | <span>Quantity:</span> ${item.quantity} 
                        <button onclick="deleteItem('${item.name}')">Delete</button>`;
        inventoryList.appendChild(li);
    });
}

function deleteItem(name) {
    inventory = inventory.filter(item => item.name !== name);
    displayInventory();
}

function clearInputs() {
    document.getElementById('itemName').value = '';
    document.getElementById('quantity').value = '';
}