// ============================================
// НАСТРОЙКИ — ВСТАВЬ СЮДА СВОЙ URL FORMSPREE
// ============================================
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

// ============================================
// ДАННЫЕ ТЕСТА
// ============================================
const questions = [
    {
        text: "1. Какая идеальная температура взбитого молока для классического капучино?",
        options: [
            "А) 45–50 °C",
            "Б) 55–65 °C",
            "В) 70–75 °C",
            "Г) 80–85 °C"
        ],
        correct: 1,
        explanation: "Оптимально 60°C. При такой температуре лактоза максимально сладкая, а белки не разрушены."
    },
    {
        text: "2. Какая температура эспрессо в чашке сразу после приготовления считается нормой?",
        options: [
            "А) 60–65 °C",
            "Б) 70–75 °C",
            "В) 85–90 °C",
            "Г) 95–100 °C"
        ],
        correct: 1,
        explanation: "Эспрессо варится при 90–96 °C, но проходя через группу и попадая в чашку, он остывает до 70–75 °C."
    },
    {
        text: "3. Что произойдет с молоком, если его нагреть выше 70 °C при взбивании?",
        options: [
            "А) Оно станет слаще за счет карамелизации лактозы.",
            "Б) Белки денатурируют (свернутся), лактоза распадется, молоко начнет горчить и потеряет сладость.",
            "В) Оно станет более густым и будет лучше держать форму для латте-арта.",
            "Г) Ничего не изменится, просто будет горячее."
        ],
        correct: 1,
        explanation: "Выше 70 °C молоко «сгорает», становится водянистым, сладость пропадает, появляется вкус кипяченого молока."
    },
    {
        text: "4. Вопрос с подвохом: Бариста забыл взвесить дозу кофе в портафильтре, но прессует и включает экстракцию. Эспрессо вытекает за 15 секунд, бледный и водянистый. В чем главная причина?",
        options: [
            "А) Температура воды в кофемашине слишком высокая.",
            "Б) Давление помпы упало ниже 9 бар.",
            "В) Кофе в холдере слишком мало (недозасып).",
            "Г) Кофе смололи слишком крупно."
        ],
        correct: 2,
        explanation: "Подвох: если забыть взвесить кофе, доза будет нестабильной. Быстрый пролив и водянистость в первую очередь указывают на ошибку в дозировке (хотя крупный помол тоже может быть причиной, недозасып — прямое следствие невзвешивания)."
    },
    {
        text: "5. Вопрос с подвохом: Клиент просит сделать ему эспрессо «совсем без горечи, чтобы был сладкий». Какой из вариантов лучший?",
        options: [
            "А) Уменьшить дозу кофе на 2 грамма.",
            "Б) Снять пенку (крема) с готового эспрессо.",
            "В) Остановить экстракцию на 20 секундах, не дожидаясь 25-30.",
            "Г) Посоветовать ему другой напиток, так как эспрессо без горечи не существует."
        ],
        correct: 3,
        explanation: "Эспрессо — это баланс. Без горечи (которая дает экстракция в конце) эспрессо будет невыносимо кислым. Лучше предложить фильтр-кофе или напиток с молоком."
    },
    {
        text: "6. Каков классический вес выхода (yield) двойного эспрессо при закладке 18 грамм кофе?",
        options: [
            "А) 18 грамм",
            "Б) 25 грамм",
            "В) 36 грамм",
            "Г) 50 грамм"
        ],
        correct: 2,
        explanation: "Стандартное соотношение 1:2. 18г кофе = 36г напитка в чашке за 25-30 секунд."
    },
    {
        text: "7. Вопрос с подвохом: Что главное в правильной темперовке (утрамбовке) кофейной таблетки?",
        options: [
            "А) Приложить усилие ровно 15 кг.",
            "Б) Приложить усилие ровно 30 кг.",
            "В) Обеспечить абсолютно ровную и горизонтальную поверхность таблетки.",
            "Г) Сделать темперовку в два подхода: сначала легко, потом сильно."
        ],
        correct: 2,
        explanation: "Усилие не имеет значения после 2-3 кг. Главное — ровность, иначе вода под давлением в 9 бар пробьет кривую таблетку сбоку (channeling)."
    },
    {
        text: "8. Сколько кофеина в стандартной чашке (200 мл) фильтр-кофе по сравнению с двойным эспрессо (60 мл)?",
        options: [
            "А) В фильтр-кофе кофеина меньше, так как он менее крепкий на вкус.",
            "Б) Кофеина примерно одинаково.",
            "В) В фильтр-кофе кофеина значительно больше.",
            "Г) В эспрессо кофеина больше, так как это концентрированный напиток."
        ],
        correct: 2,
        explanation: "Из-за длительного контакта воды с кофе (3-5 минут) в фильтр экстрагируется гораздо больше кофеина (150-200 мг), чем в эспрессо (80-100 мг)."
    },
    {
        text: "9. Почему свежеобжаренный кофе (1-2 дня после обжарки) может дать рваную струйку при экстракции?",
        options: [
            "А) В зерне еще много углекислого газа (СО2), который мешает воде равномерно проходить через таблетку.",
            "Б) Зерно еще слишком влажное.",
            "В) Масло еще не вышло на поверхность зерна.",
            "Г) Кофемолка не настроена на такой помол."
        ],
        correct: 0,
        explanation: "Свежеобжаренному кофе нужно «дегазироваться» 7-14 дней. Иначе СО2 выталкивает воду, создавая каналы прожига."
    },
    {
        text: "10. Чем отличается флэт уайт (Flat White) от капучино?",
        options: [
            "А) Во флэт уайт добавляют сироп, а в капучино — нет.",
            "Б) Во флэт уайте двойной ристретто/эспрессо и меньше густой пены (около 0.5 см).",
            "В) Во флэт уайте используется только овсяное молоко.",
            "Г) Капучино подается в стеклянном стакане, а флэт уайт в керамике."
        ],
        correct: 1,
        explanation: "Во флэт уайте акцент на кофейном вкусе, пены минимум. В капучино пены 1.5-2 см."
    },
    {
        text: "11. Вопрос с подвохом: Эспрессо начал литься тонкой, очень темной струйкой с самого начала. Что это значит?",
        options: [
            "А) Экстракция идет идеально.",
            "Б) Кофейная таблетка имеет канал прожига (channeling) — вода нашла дырку.",
            "В) Помол слишком крупный.",
            "Г) Кофемашина перегрелась."
        ],
        correct: 1,
        explanation: "Если струйка темная с самого начала, вода не проходит через весь кофе равномерно, а пробивает путь наименьшего сопротивления."
    },
    {
        text: "12. В чем разница между арабикой и робустой?",
        options: [
            "А) Арабика более горькая и содержит в 2 раза больше кофеина.",
            "Б) Робуста более горькая, землистая, содержит больше кофеина и дает больше крема.",
            "В) Разницы нет, это один и тот же вид растения.",
            "Г) Робуста всегда сладкая с ягодными нотами."
        ],
        correct: 1,
        explanation: "Арабика — сладкая, кислая, сложная. Робуста — горькая, в ней в 2 раза больше кофеина, дает густую пенку."
    },
    {
        text: "13. Что нужно сделать в первую очередь, если эспрессо водянистый, бледный и течет 15 секунд?",
        options: [
            "А) Изменить помол в сторону «мельче».",
            "Б) Изменить помол в сторону «крупнее».",
            "В) Увеличить давление темперовки.",
            "Г) Добавить больше кофе в холдер."
        ],
        correct: 0,
        explanation: "Быстрое течение = недоэкстракция. Делаем помол мельче, чтобы создать сопротивление воде."
    },
    {
        text: "14. Вопрос с подвохом: Клиент жалуется, что американо «мутный» и с пенкой, хотя просил «просто черный кофе». Почему?",
        options: [
            "А) Бариста налил кипяток из чайника с накипью.",
            "Б) Это натуральные кофейные масла и крема, которые поднимаются при добавлении воды.",
            "В) Зерно было слишком темной обжарки.",
            "Г) Фильтр в кофемашине порвался."
        ],
        correct: 1,
        explanation: "«Мутность» — это эфирные масла и СО2. Клиент, привыкший к растворимому кофе, может этого не знать."
    },
    {
        text: "15. Как часто нужно чистить группу (холдер) от кофейных масел с помощью слепого сита?",
        options: [
            "А) Раз в неделю.",
            "Б) В конце каждой рабочей смены.",
            "В) Раз в месяц.",
            "Г) Только когда кофе начинает горчить."
        ],
        correct: 1,
        explanation: "Кофейные масла прогоркают очень быстро. Чистка бэкофлешем обязательна каждый день в конце смены."
    }
];

// ============================================
// СОСТОЯНИЕ
// ============================================
let studentName = "";
let studentEmail = "";
let sent = false;

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-btn").addEventListener("click", startQuiz);
    document.getElementById("submit-btn").addEventListener("click", checkAnswers);
});

function startQuiz() {
    const nameInput = document.getElementById("student-name");
    const emailInput = document.getElementById("student-email");

    let valid = true;

    if (!nameInput.value.trim()) {
        nameInput.classList.add("error");
        valid = false;
    } else {
        nameInput.classList.remove("error");
    }

    if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
        emailInput.classList.add("error");
        valid = false;
    } else {
        emailInput.classList.remove("error");
    }

    if (!valid) return;

    studentName = nameInput.value.trim();
    studentEmail = emailInput.value.trim();

    document.getElementById("student-form").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";

    renderQuestions();
}

function renderQuestions() {
    const form = document.getElementById("quiz-form");

    questions.forEach(function (q, qIndex) {
        var block = '<div class="question-block">';
        block += '<div class="question-text">' + q.text + '</div>';

        q.options.forEach(function (option, oIndex) {
            block += '<label class="option">';
            block += '<input type="radio" name="q' + qIndex + '" value="' + oIndex + '"> ' + option;
            block += '</label>';
        });

        block += '<div class="explanation" id="explanation-' + qIndex + '"><strong>Объяснение:</strong> ' + q.explanation + '</div>';
        block += '</div>';

        form.innerHTML += block;
    });
}

// ============================================
// ПРОВЕРКА ОТВЕТОВ
// ============================================
function checkAnswers() {
    var score = 0;
    var wrongAnswers = [];

    questions.forEach(function (q, qIndex) {
        var options = document.querySelectorAll('input[name="q' + qIndex + '"]');
        var explanationDiv = document.getElementById("explanation-" + qIndex);

        var answered = false;

        options.forEach(function (option, oIndex) {
            var label = option.parentElement;
            label.classList.add("disabled");
            label.classList.remove("correct", "incorrect");

            if (option.checked) {
                answered = true;
                if (oIndex === q.correct) {
                    label.classList.add("correct");
                    score++;
                } else {
                    label.classList.add("incorrect");
                    options[q.correct].parentElement.classList.add("correct");
                    wrongAnswers.push(qIndex + 1);
                }
            }
        });

        if (!answered) {
            wrongAnswers.push(qIndex + 1);
        }

        explanationDiv.style.display = "block";
    });

    showResult(score, wrongAnswers);
}

// ============================================
// ПОКАЗ РЕЗУЛЬТАТА И ОТПРАВКА
// ============================================
function showResult(score, wrongAnswers) {
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";

    var percentage = Math.round((score / questions.length) * 100);
    var passed = percentage >= 70;
    var status = passed ? "СДАН" : "НЕ СДАН";
    var message = "";

    if (percentage === 100) message = "Идеально! Вы гуру кофемании!";
    else if (percentage >= 70) message = "Отличный результат! Вы знаете свое дело.";
    else if (percentage >= 50) message = "Неплохо, но есть куда расти.";
    else message = "Нужно подучить теорию.";

    resultDiv.innerHTML =
        "Ваш результат: <span style='color: #6f4e37;'>" + score + "</span> из <span style='color: #6f4e37;'>" + questions.length + "</span> (" + percentage + "%)<br><br>" +
        "<strong>Статус: " + status + "</strong><br><br>" +
        message;

    resultDiv.scrollIntoView({ behavior: "smooth", block: "center" });

    sendResult(score, percentage, status, wrongAnswers);
}

// ============================================
// ОТПРАВКА НА FORMSPREE
// ============================================
function sendResult(score, percentage, status, wrongAnswers) {
    var statusDiv = document.getElementById("send-status");
    var submitBtn = document.getElementById("submit-btn");

    if (sent) {
        statusDiv.className = "error";
        statusDiv.textContent = "Результат уже был отправлен ранее.";
        statusDiv.style.display = "block";
        return;
    }

    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.5";
    statusDiv.className = "sending";
    statusDiv.textContent = "Отправка результата...";
    statusDiv.style.display = "block";

    var now = new Date();
    var dateStr = now.toLocaleDateString("ru-RU") + " " + now.toLocaleTimeString("ru-RU");

    var wrongStr = wrongAnswers.length > 0 ? wrongAnswers.join(", ") : "нет";

    var payload = {
        "Имя": studentName,
        "Email": studentEmail,
        "Правильных ответов": score + " из " + questions.length,
        "Процент": percentage + "%",
        "Статус": status,
        "Ошибки (вопросы)": wrongStr,
        "Дата": dateStr,
        "_subject": "Результат экзамена: " + studentName,
        "_replyto": studentEmail
    };

    fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(function (response) {
        if (response.ok) {
            sent = true;
            statusDiv.className = "success";
            statusDiv.textContent = "Результат отправлен! Проверьте почту.";
        } else {
            throw new Error("Server returned " + response.status);
        }
    })
    .catch(function () {
        statusDiv.className = "error";
        statusDiv.textContent = "Не удалось отправить результат. Попробуйте обновить страницу и пройти тест снова.";
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
    });
}
