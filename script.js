let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        
        if (minValue === maxValue){

            let phraseRandom = Math.round( Math.random() * 4);

            switch (phraseRandom){
                case 0:
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                break;
            case 1:
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                break;
            case 2:
                answerPhrase = `Не могу угадать..\n\u{1F633}`;
                break;
            case 3:
                answerPhrase = `Это оказалось труднее, чем я думал\n\u{1F615}`;
                break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        }

        else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){

        if (minValue === maxValue){

            let phraseRandom = Math.round( Math.random() * 4);

            switch (phraseRandom){
                case 0:
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                break;
            case 1:
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                break;
            case 2:
                answerPhrase = `Не могу угадать..\n\u{1F633}`;
                break;
            case 3:
                answerPhrase = `Это оказалось труднее, чем я думал\n\u{1F615}`;
                break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } 
        
        else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        let phraseRandom = Math.round(Math.random() * 4);

        switch (phraseRandom) {

            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F60F}`;
                break;
            case 1:
                answerPhrase = `Давай что-то сложнее\n\u{1F609}`;
                break;
            case 2:
                answerPhrase = `Я даже не напрягался\n\u{1F60C}`;
                break;
            case 3:
                answerPhrase = `И всего то?\n\u{1F607}`;
                break;
        }

        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

