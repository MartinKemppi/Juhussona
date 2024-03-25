//loome indeksi numbri
let Index = -1;
//loome massiivid sonad ja sonade tahendus
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
    //saame juhuslik number sonast
    Index = Math.floor(Math.random() * synad.length);
    //määrame sõna massiivist indkes numbriga
    document.getElementById("random-syna").innerText = synad[Index];

    //teeb sõnade lünkad tühjaks
    document.getElementById("oigevale").innerText = "";
    document.getElementById("vastus").innerText = "";
}

//teeb järgmist sõna ja tühistab väli sõnade sisestamiseks
function nextWord() {
    document.getElementById("kontroll").value = "";
    randomSyna();
}

function kontrollimine() {
    //saame sisestatud vastus
    let sisvatus = document.getElementById("kontroll").value.trim().toLowerCase();

    //kontrollime kas on sisestatud tekst on korrektne või vale
    if (Index !== -1 && sisvatus === synadetahendus[Index]) {
        document.getElementById("oigevale").innerText = 'Tähendus on õige';
    } else {
        document.getElementById("oigevale").innerText = 'Tähendus on vale';
    }
}

function randomSynaVene() {
    //saame juhuslik number sonast
    Index = Math.floor(Math.random() * synad.length);
    //määrame sõna massiivist indkes numbriga
    document.getElementById("random-syna1").innerText = synadetahendus[Index];

    //teeb sõnade lünkad tühjaks
    document.getElementById("oigevale").innerText = "";
    document.getElementById("vastus").innerText = "";
}

function kontrollimineVene() {
    //saame sisestatud vastus
    let sisvatus = document.getElementById("kontroll1").value.trim().toLowerCase();

    //kontrollime kas on sisestatud tekst on korrektne või vale
    if (Index !== -1 && sisvatus === synad[Index]) {
        document.getElementById("oigevale1").innerText = 'Tähendus on õige';
    } else {
        document.getElementById("oigevale1").innerText = 'Tähendus on vale';
    }
}