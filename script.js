console.log('Hello');


// Задача 1. 
let provii = +prompt('100 && 1 сандар!!!')
let index = 100;

while(index >= 1){
  console.log(`${index}`);
  index--
}

// Задача 2.

let ivo = prompt('Каалаган сан жазыныз баарын сумманын чыгарып койот.');
let sum = 0;
let y = 1;

while(y <= ivo){
  sum += y;
  y++
}

console.log(sum);

// Задача 3.
let number = +prompt('Сандардын жадыбалын чыгарат. ');
let i = 1;

while(i <= 10){

  console.log(`${number} * ${i} = ${number * i}`);
  i++
}

// Задача 4.

let lll = +prompt('Сан жазыныз меним Менторум анан жыйынтыгын коросуз');
let o = 0;
let is = 1;

while (o < 1){
  o++
  console.log('**********', o);
  while (is < 5){
    is++
    console.log('*--------*', is);
  }
  console.log('**********', o);
}
console.log(lll);

// Задача 5. 
let result = +prompt('Бул жакка дагы дал ошондой саандарды жазыныз.')
let provii1 = '';
while (provii1.length < 5){
  provii1 += '#';
  console.log(provii1);
}

