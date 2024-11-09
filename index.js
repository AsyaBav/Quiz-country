const questions = [
    {
        question: "Где это место?",
        image: "img/singapur.jpg",
        answers: ["Сингапур", "Турция", "Дубай", "Россия"],
        correctAnswer: 0
    },
    {
        question: "Какая страна в Азии известна своим сложным искусством складывания бумаги, известным как «оригами»? ",
        image: "img/origami.jpg",
        answers: ["Китай", "Индия", "Япония", "Южная Корея"],
        correctAnswer: 2
    },
    {
        question: "Столица Франции?",
        image: "img/paris.jpeg",
        answers: ["Берлин", "Мадрид", "Париж", "Лондон"],
        correctAnswer: 2
    },
    {
        question: "В какой стране будет самая высокая численность населения в мире до 2023 года?",
        image: "img/people.jpeg",
        answers: ["Китай", "Индия", "Индонезия", "Япония"],
        correctAnswer: 1
    },
    {
        question: "В какой стране располагается остров Тайвань?",
        image: "img/taivan.jpeg",
        answers: ["Корея", "Таиланд", "Китай", "Япония"],
        correctAnswer: 2
    },
    {
        question: "В какой стране Европы никогда не было войн?",
        image: "img/mir.jpeg",
        answers: ["Чехия", "Швейцария", "Австрия", "Бельгия"],
        correctAnswer: 1
    },
    {
        question: "Какую страну еще называют Суоми?",
        image: "img/suomi.jpg",
        answers: ["Китай", "Бельгия", "Норвегия", "Финляндия"],
        correctAnswer: 3
    },
    {
        question: "Какую европейскую страну еще называют Голландией?",
        image: "img/niderland.jpeg",
        answers: ["Италия", "Испания", "Нидерланды", "Великобритания"],
        correctAnswer: 2
    },
    {
        question: 'Девизом какой страны является сочетание "Свобода, Равенство, Братство"?',
        image: "img/freedom.jpeg",
        answers: ["Россия", "США", "Франция", "Великобритания"],
        correctAnswer: 2
    },
    {
        question: "Какая страна является самой многонациональной страной в мире?",
        image: "img/nation.jpeg",
        answers: ["Индия", "США", "Россия", "Франция"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

//Функция для показа вопроса
function showQuestion() {
    const questionElement = document.getElementById('question-text');
    const questionImage = document.getElementById('question-image');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const questionNumber = document.getElementById('question-number');

    //Обновляем номер вопроса
    questionNumber.textContent = `${currentQuestionIndex + 1}`;

    // Отображаем вопрос
    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = questionData.question;

    // Отображаем изображение, если оно есть
    if (questionData.image) {
        questionImage.src = questionData.image;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }

    // Отображаем ответы
    answerButtons.forEach((button, index) => {
        button.textContent = questionData.answers[index];
    });
}

//Функция для проверки ответов
function selectAnswer(answerIndex) {
    const questionData = questions[currentQuestionIndex];

    // Проверяем правильный ответ
    if (answerIndex === questionData.correctAnswer) {
        correctAnswers++;
        alert("Правильный ответ!");
    } else {
        alert("Неправильный ответ.");
    }

    // Переход к следующему вопросу или завершение викторины
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Викторина завершена! Правильных ответов: ${correctAnswers} из ${questions.length}`;

    // Скрываем кнопки после завершения викторины
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('question-number').style.display = 'none';
}

// Начальная загрузка вопроса
showQuestion();
