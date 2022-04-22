const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer);

const startBtn = document.getElementById('start-btn');
console.log(startBtn);

startBtn.addEventListener('click',
    function() {
        gridContainer.innerHTML = '';
        for (let i = 1; i <= 100; i++) {
            const newElement = document.createElement('div');
            newElement.classList.add('box-easy');
            console.log(newElement);
        
            gridContainer.append(newElement);
        }

        console.log(gridContainer);
    }
)