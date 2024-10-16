const x_neg1 = document.getElementById('button_x_neg1');
const y_x = document.getElementById('button_y_x');
const square_x = document.getElementById('button_square_x');
const left_arrow = document.getElementById('button_left_arrow');
const right_arrow = document.getElementById('button_right_arrow');

const log = document.getElementById('button_log');
const ln = document.getElementById('button_ln');
const sqrt_x2 = document.getElementById('button_sqrt_x2');
const cbrt_x2 = document.getElementById('button_cbrt_x2');
const abs_x2 = document.getElementById('button_abs_x2');

const open_parenthesis = document.getElementById('button_open_parenthesis');
const close_parenthesis = document.getElementById('button_close_parenthesis');
const sin = document.getElementById('button_sin');
const cos = document.getElementById('button_cos');
const tan = document.getElementById('button_tan');

const button7 = document.getElementById('button_7');
const button8 = document.getElementById('button_8');
const button9 = document.getElementById('button_9');
const ac = document.getElementById('button_ac');
const del = document.getElementById('button_del');

const button4 = document.getElementById('button_4');
const button5 = document.getElementById('button_5');
const button6 = document.getElementById('button_6');
const multiply = document.getElementById('button_multiply');
const divide = document.getElementById('button_divide');

const button1 = document.getElementById('button_1');
const button2 = document.getElementById('button_2');
const button3 = document.getElementById('button_3');
const add = document.getElementById('button_add');
const subtract = document.getElementById('button_subtract');

const button0 = document.getElementById('button_0');
const decimal = document.getElementById('button_decimal');
const pi = document.getElementById('button_pi');
const x = document.getElementById('button_x');
const equals = document.getElementById('button_equals');

const ekran = document.querySelector('#ekran');
const imlec = document.querySelector('#imlec');

// ! Daha sonra bakacagim.
// * let icerikUzunluk = ekran.textContent.length();
// * imlec.style.marginLeft = `${icerikUzunluk*5}px`

// ! Burada ekrana sayı yazacak.
const ekranaEkle = (sayi) => {
    ekran.textContent += sayi;
    islem += sayi;
} 

// ! Burada ise ekrana matematiksel oparatör yazılacak.
const oparatorEkle = (oparator) =>{
    ekran.textContent += oparator;
    islem += oparator;
}

let  islem = '';

// ! Burada ekrana yazdığı işlemleri gerçekleştirecek.
const backGround = () => { 
    ekran.textContent = '';

    const cevap = eval(islem); // ! Eval komutu ile matematiksel islemleri yapmasini sagladim.

    ekran.textContent = cevap;
}

function isLastCharacterOperator() {
    const lastChar = ekran.textContent.slice(-1); 
    return ['+', '-', '*', '/'].includes(lastChar);
}

function isLastCharacterDecimal() {
    const lastChar = ekran.textContent.slice(-1); 
    return ['+', '-', '*', '/', '.', '', '(', ')'].includes(lastChar);
}

button1.addEventListener('click', () => {
    ekranaEkle('1'); 
    mathIslem('1');  
})

button2.addEventListener('click', () => {
    ekranaEkle('2');   
})

button3.addEventListener('click', () => {
    ekranaEkle('3');   
})

button4.addEventListener('click', () => {
    ekranaEkle('4');   
})

button5.addEventListener('click', () => {
    ekranaEkle('5');   
})

button6.addEventListener('click', () => {
    ekranaEkle('6');   
})

button7.addEventListener('click', () => {
    ekranaEkle('7');   
})

button8.addEventListener('click', () => {
    ekranaEkle('8');   
})

button9.addEventListener('click', () => {
    ekranaEkle('9');   
})

button0.addEventListener('click', () => {
    ekranaEkle('0');   
    mathIslem('0');  
})

del.addEventListener('click', () => {
    ekran.textContent = ekran.textContent.slice(0, -1);
    islem = islem.slice(0, -1);
})

ac.addEventListener('click', () => {
    ekran.textContent = '';
    islem = '';
})

add.addEventListener('click', function() {
    if(!isLastCharacterOperator()){
        oparatorEkle('+');
    }else{
        alert('Bu işlemi yapamazsınız!');
    }
})

subtract.addEventListener('click', function() {
    if(!isLastCharacterOperator()){
        oparatorEkle('-');
    }else{
        alert('Bu işlemi yapamazsınız!');
    }
})

multiply.addEventListener('click', function() {
    if(!isLastCharacterOperator()){
        oparatorEkle('*');
    }else{
        alert('Bu işlemi yapamazsınız!');
    }
})

divide.addEventListener('click', function() {
    if(!isLastCharacterOperator()){
        oparatorEkle('/');
    }else{
        alert('Bu işlemi yapamazsınız!');
    }
})

decimal.addEventListener('click', function() {
    if (!isLastCharacterDecimal()){
        oparatorEkle('.');
    }else{
        alert('Bu işlemi yapamazsınız!');
    }
})

equals.addEventListener('click', () => {
    backGround();
})

open_parenthesis.addEventListener('click', () => {
    oparatorEkle('(');
})

close_parenthesis.addEventListener('click', () => {
    oparatorEkle(')');
})

x_neg1.addEventListener('click', () => {
    ekranaEkle('**-1');
})

y_x.addEventListener('click', () => {
    ekranaEkle('**');
})

square_x.addEventListener('click', () => {
    ekranaEkle('**2');
})
