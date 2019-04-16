//Задание 1
function btnOne() {
    document.getElementById('txt');
    txt.innerText = 'Привет';
}
// Задание 2
function btnTwo() {
    document.getElementById('txt-two');
    txt_two.innerHTML = '<h3>Привет</h3>';
}
// Задание 4
function add() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = +num1 + +num2;
    document.getElementById('sign').innerHTML = '+';
    document.getElementById('res').innerHTML = result;
}

function sub() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = +num1 - +num2;
    document.getElementById('sign').innerHTML = '-';
    document.getElementById('res').innerHTML = result;
}

function div() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = Math.floor(+num1 / +num2);

    document.getElementById('sign').innerHTML = '/';
    document.getElementById('res').innerHTML = result;
}

function mult() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = +num1 * +num2;
    document.getElementById('sign').innerHTML = '*';
    document.getElementById('res').innerHTML = result;
}

// задание 3
function changeList() {
    let children = document.getElementById('list').children;
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        element.innerHTML = 'list ' + i;
    }
}



// задание 5
function addNewListItem() {
    let ul = document.getElementById('list__two');
    let newItem = document.createElement('li');
    newItem.innerHTML = "Первый элемент списка";
    ul.insertBefore(newItem, ul.children[0]);
}

