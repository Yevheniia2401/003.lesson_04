let action = prompt('what action do you want to perform? (add, sub, mult or div)')
let num1 = Number(prompt('Your first number'))
let num2 = Number(prompt('Your second number'))
if (action === 'add') {
     alert(num1 + '+' + num2 + '=' + (num1+num2))
}
if (action === 'sub') {
     alert(num1 + '-' + num2 + '=' + (num1-num2))
}
if (action === 'mult') {
     alert(num1 + '*' + num2 + '=' + (num1*num2))
}
if (action === 'div') {
     alert(num1 + '/' + num2 + '=' + (num1/num2))
}



