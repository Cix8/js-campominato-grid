const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer);

const startBtn = document.getElementById('start-btn');
console.log(startBtn);

const instructions = document.querySelector('.instructions');
console.log(instructions);

const easyModeSize = 100;
const hardModeSize = 81;
const crazyModeSize = 49;

startBtn.addEventListener('click',
    function() {
        instructions.classList.add('d-none');
        gridContainer.innerHTML = '';
        gridContainer.classList.remove('d-none');
        let gameMode = document.getElementById('difficulty-select').value;
        console.log(gameMode);
        if (gameMode === 'easy') {

            for (let i = 1; i <= easyModeSize; i++) {
                const newElement = document.createElement('div');
                newElement.classList.add('box','easy-mode');
                console.log(newElement);
    
                const newItem = `<span>${i}</span>`;
                newElement.innerHTML = newItem;
    
                newElement.addEventListener('click',
                    function() {
                        this.classList.add('active')
                        console.log(this);
                    }
                )
    
                gridContainer.append(newElement);
            }

        } else if (gameMode === 'hard') {

            for (let i = 1; i <= hardModeSize; i++) {
                const newElement = document.createElement('div');
                newElement.classList.add('box','hard-mode');
                console.log(newElement);
    
                const newItem = `<span>${i}</span>`;
                newElement.innerHTML = newItem;
    
                newElement.addEventListener('click',
                    function() {
                        this.classList.add('active')
                        console.log(this);
                    }
                )
    
                gridContainer.append(newElement);
            }

        } else {

            for (let i = 1; i <= crazyModeSize; i++) {
                const newElement = document.createElement('div');
                newElement.classList.add('box','crazy-mode');
                console.log(newElement);
    
                const newItem = `<span>${i}</span>`;
                newElement.innerHTML = newItem;
    
                newElement.addEventListener('click',
                    function() {
                        this.classList.add('active')
                        console.log(this);
                    }
                )
    
                gridContainer.append(newElement);
            }

        }

        console.log(gridContainer);
    }
)