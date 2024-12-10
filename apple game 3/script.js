// Предметы
const items = [
    { id: 1, name: "Яблоко", x: 90, y: 300 },
    { id: 2, name: "Яблоко", x: 140, y: 310 },
    { id: 3, name: "Яблоко", x: 200, y: 300 },
    { id: 4, name: "Яблоко", x: 250, y: 310 }
];

const gameContainer = document.getElementById('game-container');
const itemList = document.getElementById('itemList');

const min = 1;
const max = items.length;
const itemX = Math.floor(Math.random() * (max - min + 1)) + min;
let itemNumber = 1;

// Создаём предмет
items.forEach(item => {
    const target = document.createElement('div');

    if (item.id == itemX) {
        target.className = 'target-x';
    }
    else {
        target.className = 'target';

        // Создаём список предметов
        const listItem = document.createElement('div');
        listItem.textContent = item.name + " " + itemNumber;
        itemNumber ++;
        listItem.id = 'item-' + item.id;
        itemList.appendChild(listItem);
    }
    
    target.style.left = item.x + 'px';
    target.style.top = item.y + 'px';
    gameContainer.appendChild(target);
    
    // Проверяем предметы
    target.addEventListener('click', () => {
        target.style.display = 'none';
        //Нашли предмет Х
        if (target.className == 'target-x') {
            document.querySelectorAll('.target').forEach(target => {
                target.style.display = 'none';
             });
            const worm = document.getElementById('worm');
            worm.style.display = 'block';
            const gameButton = document.getElementById('game-button');
            gameButton.style.display = 'block';
            setTimeout("alert('Вы нашли яблоко с червяком :O Попробуйте ещё раз!')", 1000); 
            return
        }
        
        document.getElementById('item-' + item.id).classList.add('found');

        // Нашли все предметы без предмета Х
        const foundItems = document.querySelectorAll('.found').length;
        if (foundItems === (items.length - 1)) {
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

// Перезагружаем игру
function restartGame () {
    window.location.reload();
}