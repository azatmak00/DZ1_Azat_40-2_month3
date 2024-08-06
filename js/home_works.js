document.addEventListener('DOMContentLoaded', () => {
    const gmailButton = document.getElementById('gmail_button');
    const gmailInput = document.getElementById('gmail_input');
    const gmailResult = document.getElementById('gmail_result');

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    gmailButton.addEventListener('click', () => {
        const email = gmailInput.value.trim();

        if (gmailRegex.test(email)) {
            gmailResult.textContent = 'Valid Gmail address';
            gmailResult.style.color = 'green';
        } else {
            gmailResult.textContent = 'Invalid Gmail address';
            gmailResult.style.color = 'red';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const childBlock = document.querySelector('.child_block');
    const parentBlock = document.querySelector('.parent_block');
    const step = 5;
    let positionX = 0;
    let positionY = 0;
    let direction = 'right';

    function moveBlock() {
        const parentWidth = parentBlock.clientWidth;
        const parentHeight = parentBlock.clientHeight;
        const childWidth = childBlock.clientWidth;
        const childHeight = childBlock.clientHeight;

        switch (direction) {
            case 'right':
                if (positionX + childWidth < parentWidth) {
                    positionX += step;
                } else {
                    direction = 'down';
                }
                break;
            case 'down':
                if (positionY + childHeight < parentHeight) {
                    positionY += step;
                } else {
                    direction = 'left';
                }
                break;
            case 'left':
                if (positionX > 0) {
                    positionX -= step;
                } else {
                    direction = 'up';
                }
                break;
            case 'up':
                if (positionY > 0) {
                    positionY -= step;
                } else {
                    direction = 'right';
                }
                break;
        }

        childBlock.style.left = `${positionX}px`;
        childBlock.style.top = `${positionY}px`;

        requestAnimationFrame(moveBlock);
    }

    moveBlock();
});


document.addEventListener('DOMContentLoaded', () => {
    const secondsElement = document.getElementById('seconds');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let timer;
    let elapsedTime = 0;

    function updateTimer() {
        elapsedTime++;
        secondsElement.textContent = elapsedTime;
    }

    function startTimer() {
        if (!timer) {
            timer = setInterval(updateTimer, 1000);
        }
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    function resetTimer() {
        stopTimer();
        elapsedTime = 0;
        secondsElement.textContent = elapsedTime;
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});
