const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer);

const startBtn = document.getElementById('start-btn');
console.log(startBtn);

const instructions = document.querySelector('.instructions');
console.log(instructions);

startBtn.addEventListener('click',
    function() {
        instructions.classList.add('d-none');
        gridContainer.innerHTML = '';
        gridContainer.classList.remove('d-none');
        for (let i = 1; i <= 100; i++) {
            const newElement = document.createElement('div');
            newElement.classList.add('box-easy');
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

        console.log(gridContainer);
    }
)