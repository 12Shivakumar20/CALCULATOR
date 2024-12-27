function display_reset(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    output.value = '0';
}

function display_del(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    let updated_value = output.value.slice(0, -1);
    output.value = updated_value;
}

function display_answer(): void {
    let equation = document.querySelector('.output-child') as HTMLInputElement;
    let stringg = '';
    for (let i = 0; i < equation.value.length; i++) {
        if (equation.value[i] === '*') {
            stringg += '*';
        } else {
            stringg += equation.value[i];
        }
    }
    let result = eval(stringg);
    equation.value = result.toString();
}

function display_7(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value.length === 1 && output.value === '0') {
        output.value = '7';
        return;
    }
    output.value += '7';
}

function display_8(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value.length === 1 && output.value === '0') {
        output.value = '8';
        return;
    }
    output.value += '8';
}

function display_9(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value.length === 1 && output.value === '0') {
        output.value = '9';
        return;
    }
    output.value += '9';
}

function display_4(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value.length === 1 && output.value === '0') {
        output.value = '4';
        return;
    }
    output.value += '4';
}

function display_5(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value.length === 1 && output.value === '0') {
        output.value = '5';
        return;
    }
    output.value += '5';
}

function display_6(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value.length === 1 && output.value === '0') {
        output.value = '6';
        return;
    }
    output.value += '6';
}

function display_plus(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    let last_value = output.value[output.value.length - 1];

    if (last_value === '/' || last_value === '-' || last_value === '*' || last_value === '.') {
        let updated_value = output.value.slice(0, -1);
        updated_value += '+';
        output.value = updated_value;
        return;
    }
    if (output.value[output.value.length - 1] === '+') {
        return;
    }
    output.value += '+';
}

function display_1(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value.length === 1 && output.value === '0') {
        output.value = '1';
        return;
    }
    output.value += '1';
}

function display_2(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value.length === 1 && output.value === '0') {
        output.value = '2';
        return;
    }
    output.value += '2';
}

function display_3(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value.length === 1 && output.value === '0') {
        output.value = '3';
        return;
    }
    output.value += '3';
}

function display_minus(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    let last_value = output.value[output.value.length - 1];

    if (last_value === '+' || last_value === '/' || last_value === '*' || last_value === '.') {
        let updated_value = output.value.slice(0, -1);
        updated_value += '-';
        output.value = updated_value;
        return;
    }
    if (output.value[output.value.length - 1] === '-') {
        return;
    }
    output.value += '-';
}

function display_dot(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    if (output.value[output.value.length - 1] === '.') {
        return;
    }
    output.value += '.';
}

function display_0(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    output.value += '0';
}

function display_divide(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    let last_value = output.value[output.value.length - 1];

    if (last_value === '+' || last_value === '-' || last_value === '*' || last_value === '.') {
        let updated_value = output.value.slice(0, -1);
        updated_value += '/';
        output.value = updated_value;
        return;
    }

    if (last_value === '/') {
        return;
    }

    output.value += '/';
}

function display_multiply(): void {
    let output = document.querySelector('.output-child') as HTMLInputElement;
    let last_value = output.value[output.value.length - 1];

    if (last_value === '+' || last_value === '-' || last_value === '/' || last_value === '.') {
        let updated_value = output.value.slice(0, -1);
        updated_value += '*';
        output.value = updated_value;
        return;
    }
    if (last_value === '*') {
        return;
    }
    output.value += '*';
}
export{};