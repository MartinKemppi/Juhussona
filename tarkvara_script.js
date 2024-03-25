let Index = -1;
const synad = [
    'teostus',
    'algoritm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihaldus töörist',
    'kavandamine',
    'iteratsioon',
    'parandus',
    'parandamine',
    'koskmudel',
    'agiilne mudel',
    'spiraalne mudel',
    'inkrementaalne mudel',
    'nõudmised',
    'realiseerimine',
    'testimine',
    'integreeerimine',
    'kasutamine',
    'hooldus',
    'eelised',
    'puudused',
    'elutsükkel',
    'arendamine',
    'valideerimine'
];

const synadetahendus = [
    'реализация',
    'алгоритм',
    'план',
    'интерфейс пользователя',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектом',
    'планирование',
    'итерация',
    'исправление',
    'исправление',
    'каскадная модель',
    'гибкая модель',
    'спиральная модель',
    'инкрементальная модель',
    'требования',
    'реализация',
    'тестирование',
    'интегрирование',
    'использование',
    'обслуживание',
    'преймущества',
    'недостатки',
    'жизненный цикл',
    'разработка',
    'валидирование'
];

function randomSyna() {
    Index = Math.floor(Math.random() * synad.length);
    document.getElementById("random-syna").innerText = synad[Index];
    document.getElementById("oigevale").innerText = "";
    document.getElementById("vastus").innerText = "";
}

function nextWord() {
    document.getElementById("kontroll").value = "";
    randomSyna();
}

function kontrollimine() {
    let sisvatus = document.getElementById("kontroll").value.trim().toLowerCase();

    if (Index !== -1 && sisvatus === synadetahendus[Index]) {
        document.getElementById("oigevale").innerText = 'Tähendus on õige';
    } else {
        document.getElementById("oigevale").innerText = 'Tähendus on vale';
    }
}