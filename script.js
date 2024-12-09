const items = [
    { name: "Яблоко 1", x: 90, y: 300 },
    { name: "Яблоко 2", x: 140, y: 310 },
    { name: "Яблоко 3", x: 250, y: 310 }
];

const itemX = [
    { name: "Червяк", x: 200, y: 300 }
];

const gameContainer = document.getElementById('game-container');
const itemList = document.getElementById('itemList');

// Create item list
items.forEach(item => {
    // Create target area
    const target = document.createElement('div');
    target.className = 'target';
    target.style.left = item.x + 'px';
    target.style.top = item.y + 'px';
    gameContainer.appendChild(target);
    
    // Create list item
    const listItem = document.createElement('div');
    listItem.textContent = item.name;
    listItem.id = 'item-' + item.name.replace(/\s+/g, '-').toLowerCase();
    itemList.appendChild(listItem);
    
    target.addEventListener('click', () => {
        target.style.display = 'none';
        document.getElementById('item-' + item.name.replace(/\s+/g, '-').toLowerCase()).classList.add('found');
        
        // Check if all items found
        const foundItems = document.querySelectorAll('.found').length;
        if (foundItems === items.length) {
            document.querySelectorAll('.target-x').forEach(targetX => {
                targetX.style.display = 'none';
                const victory = document.getElementById('victory');
                victory.style.display = 'block';
                const gameButton = document.getElementById('game-button');
                gameButton.style.display = 'block';
            });
            setTimeout("alert('Поздравляем! Вы нашли все яблочки =)')", 1000); 

        }
    });
});

    // Create item listX
    itemX.forEach(itemX => {
    // Create targetX area
    const targetX = document.createElement('div');
    targetX.className = 'target-x';
    targetX.style.left = itemX.x + 'px';
    targetX.style.top = itemX.y + 'px';
    gameContainer.appendChild(targetX);
    
    // ItemX found
    targetX.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach(target => {
            target.style.display = 'none';
        });
        targetX.style.display = 'none';
        const worm = document.getElementById('worm');
        worm.style.display = 'block';
        const gameButton = document.getElementById('game-button');
        gameButton.style.display = 'block';
        setTimeout("alert('Вы нашли яблоко с червяком :O Попробуйте ещё раз!')", 1000); 
    });
});

function restartGame () {
    window.location.reload();
}