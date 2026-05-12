const text = ['изюм', 'изюмка', 'данилка', 'неи', 'иуш', 'мезим'];
let line = 0;
let count = 0;
let result = 'неизюм или ';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function typeLine() {
  // Проверяем, не закончились ли строки
  if (line >= text.length) {
    line=0;
  }

  // Добавляем символ
  result += text[line][count];
  document.querySelector('h1').innerHTML = result + '|';
  count++;

  // Если строка закончилась
  if (count >= text[line].length) {
    remL(count)
    count = 0;
    line++;
    result = 'неизюм или ';
    
    // Вместо sleep используем задержку перед переходом к следующей строке
    setTimeout(() => {
      document.querySelector('h1').innerHTML = '|';
      typeLine();
    }, 2000); // Пауза 2 секунды между словами
  } else {
    // Продолжаем печатать текущую строку
    setTimeout(typeLine, getRandomInt(250));
  }
}

// ОБЯЗАТЕЛЬНО запускаем функцию
typeLine();


function remL(count){
    result = 'неизюм или ' + text[line].slice(0, count + 9);
    document.querySelector('h1').innerHTML = result + '|';
    count--;
    if (count == 0){
        return
    }
    
}

var slideIndex = 1;
showSlides(slideIndex);

// Далее/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 