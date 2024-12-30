function readIntNumber(message = "Enter a number?")
{
    let number = 0;

    do
    {
        let input = prompt(message);
        number = parseInt(input);

        if (isNaN(number))
            alert("That's not a valid number. Please try again!");

    }while(isNaN(number));

    return number;
}
function readIntNumbers(numberOfNumbers)
{
    let numbers = [];

    for (let i = 1; i <= numberOfNumbers; i++)
    {
        numbers[i - 1] = readIntNumber(`Enter number ${i} :`);
    }

    return numbers;
}

function readNumberBetween(from, to, message)
{
    let number = 0;

    number = readIntNumber(message);

    while (number < from || number > to)
    {
        window.alert(`Invalid number ${number} the number you entered should be between ${from} and ${to}`);
        number = readIntNumber(message);
    }
    
    return number;
}

function readFloatNumber(message = "Enter a number?")
{
    let number = 0;

    do
    {
        let input = prompt(message);
        number = parseFloat(input);

        if (isNaN(number))
            alert("That's not a valid number. Please try again!");

    }while(isNaN(number));

    return number;
}

function readFloatNumbers(numberOfNumbers)
{
    let numbers = [];

    for (let i = 1; i <= numberOfNumbers; i++)
    {
        numbers[i - 1] = readFloatNumber(`Enter number ${i} :`);
    }

    return numbers;   
}

function readString(message)
{
    let input = "";
    do
    {
        input = window.prompt(message);

        if (input.length === 0)
            window.alert("Your input is empty.");

    }while(input.length === 0);

    return input;
}

function readChar(message) {
    let input = ' ';
    do 
    {
        input = window.prompt(message);

        if (input === null) {
            
            alert("Operation canceled by the user.");
            return null;
        }

        if (input.length !== 1) {
            alert("Please enter exactly one character.");
        }
    }while (input.length !== 1);

    return input;
}

function readStrings(numberOfTexts)
{
    let strings = [];

    for (let i = 1; i <= numberOfTexts; i++)
    {
        strings[i - 1] = readString(`Enter text ${i}`);
    }

    return strings;
}