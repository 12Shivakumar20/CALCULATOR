function display_reset() {
    var output = document.querySelector('.output-child');
    output.value = '0';
}
function display_del() {
    var output = document.querySelector('.output-child');
    var updated_value = output.value.slice(0, -1);
    output.value = updated_value;
}
function display_answer() {
    var equation = document.querySelector('.output-child');
    var stringg = '';
    for (var i = 0; i < equation.value.length; i++) {
        if (equation.value[i] === '*') {
            stringg += '*';
        }
        else {
            stringg += equation.value[i];
        }
    }
    var result = eval(stringg);
    equation.value = result.toString();
}
function display_7() {
    var output = document.querySelector('.output-child');
    if (output.value.length === 1 && output.value === '0') {
        output.value = '7';
        return;
    }
    output.value += '7';
}
function display_8() {
    var output = document.querySelector('.output-child');
    if (output.value.length === 1 && output.value === '0') {
        output.value = '8';
        return;
    }
    output.value += '8';
}
function display_9() {
    var output = document.querySelector('.output-child');
    if (output.value.length === 1 && output.value === '0') {
        output.value = '9';
        return;
    }
    output.value += '9';
}
function display_4() {
    var output = document.querySelector('.output-child');
    if (output.value.length === 1 && output.value === '0') {
        output.value = '4';
        return;
    }
    output.value += '4';
}
function display_5() {
    var output = document.querySelector('.output-child');
    if (output.value.length === 1 && output.value === '0') {
        output.value = '5';
        return;
    }
    output.value += '5';
}
function display_6() {
    var output = document.querySelector('.output-child');
    if (output.value.length === 1 && output.value === '0') {
        output.value = '6';
        return;
    }
    output.value += '6';
}
function display_plus() {
    var output = document.querySelector('.output-child');
    var last_value = output.value[output.value.length - 1];
    if (last_value === '/' || last_value === '-' || last_value === '*' || last_value === '.') {
        var updated_value = output.value.slice(0, -1);
        updated_value += '+';
        output.value = updated_value;
        return;
    }
    if (output.value[output.value.length - 1] === '+') {
        return;
    }
    output.value += '+';
}
function display_1() {
    var output = document.querySelector('.output-child');
    if (output.value.length === 1 && output.value === '0') {
        output.value = '1';
        return;
    }
    output.value += '1';
}
function display_2() {
    var output = document.querySelector('.output-child');
    if (output.value.length === 1 && output.value === '0') {
        output.value = '2';
        return;
    }
    output.value += '2';
}
function display_3() {
    var output = document.querySelector('.output-child');
    if (output.value.length === 1 && output.value === '0') {
        output.value = '3';
        return;
    }
    output.value += '3';
}
function display_minus() {
    var output = document.querySelector('.output-child');
    var last_value = output.value[output.value.length - 1];
    if (last_value === '+' || last_value === '/' || last_value === '*' || last_value === '.') {
        var updated_value = output.value.slice(0, -1);
        updated_value += '-';
        output.value = updated_value;
        return;
    }
    if (output.value[output.value.length - 1] === '-') {
        return;
    }
    output.value += '-';
}
function display_dot() {
    var output = document.querySelector('.output-child');
    if (output.value[output.value.length - 1] === '.') {
        return;
    }
    output.value += '.';
}
function display_0() {
    var output = document.querySelector('.output-child');
    output.value += '0';
}
function display_divide() {
    var output = document.querySelector('.output-child');
    var last_value = output.value[output.value.length - 1];
    if (last_value === '+' || last_value === '-' || last_value === '*' || last_value === '.') {
        var updated_value = output.value.slice(0, -1);
        updated_value += '/';
        output.value = updated_value;
        return;
    }
    if (last_value === '/') {
        return;
    }
    output.value += '/';
}
function display_multiply() {
    var output = document.querySelector('.output-child');
    var last_value = output.value[output.value.length - 1];
    if (last_value === '+' || last_value === '-' || last_value === '/' || last_value === '.') {
        var updated_value = output.value.slice(0, -1);
        updated_value += '*';
        output.value = updated_value;
        return;
    }
    if (last_value === '*') {
        return;
    }
    output.value += '*';
}
