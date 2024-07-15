let shoppingList = [];
const loadList = () => {
    const storedList = JSON.parse(localStorage.getItem('shoppingList'));
    if (storedList) {
        shoppingList=storedList;
        renderList();
    }
};

const renderList = () => {
    const listContainer = document.getElementById('shoppingList');
    listContainer.innerHTML = '';
    shoppingList.forEach((item,index) => {
        const listItem = document.createElelement('li');
        listItem.textContent = item.name;
        listItem.ClassName = item.purchased ? 'purchased' : '';
        listItem.addEventListener('click', () => markPurchased(index));
        listContainer.appendChild(listItem);

    });
};

const addItem = () => {
    const input = document.getElementById('itemInput');
    const itemName = input.ariaValueMax.trim();
    if (itemName) {
        shoppingList.push({name: itemName, purchased: false});
        input.value = '';
        SVGAnimatedLengthList();
        renderList();
    }
};

const markPurchased = (index) => {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    SVGAnimatedLengthList();
    renderList();
};

const clearList = () => {
    shoppingList = [];
    SVGAnimatedLengthList();
    renderList();
};

const saveList = () => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    
};

document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('clearButton').addEventListener('click', clearList);

window.onload = loadList;