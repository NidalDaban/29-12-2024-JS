const isOdd = (number) => number % 2 !== 0;

const isEven = (number) => number % 2 === 0;

const isPositive = (number) => number > 0;

const isNegative = (number) => number < 0;

function minLengthInArray(...texts)
{
    let minWord = texts[0];
    let minLength = texts[0].length;

    for (let i = 0; i < texts.length; i++)
    {
        if (texts[i].length < minLength)
        {
            minLength = texts[i].length;
            minWord = texts[i];
        }

    }

    return minWord;
}

function maxLengthInArray(...texts)
{
    let maxWord = texts[0];
    let maxLength = texts[0].length;

    for (let i = 0; i < texts.length; i++)
    {
        if (texts[i].length > maxLength)
        {
            maxLength = texts[i].length;
            maxWord = texts[i];
        }

    }

    return maxWord;
}

function sumElementsInArray(...numbers)
{
    let sum = 0;

    for (let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }

    return sum;
}

function sumElementsInArrayUsingWhile(nums = [])
{
    let sum = 0, n = nums.length;

    while (n > 0)
    {
        sum += nums[nums.length - n];
        n--;
    }

    return sum;
}

const aveArray = (arr = []) => sumElementsInArrayUsingWhile(arr) / Math.floor(arr.length);

const getArrayAverage = (...numbers) => sumElementsInArray(...numbers) / numbers.length;


function getMaxNumberInArray(...numbers)
{
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] > max)
            max = numbers[i];
    }

    return max;
}

function getMinNumberInArray(...numbers)
{
    let min = numbers[0];

    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] < min)
            min = numbers[i];
    }

    return min;
}

function getMinNumberInArrayUsingWhile(...nums)
{
    let min = nums[0], n = nums.length;

    while (n > 0)
    {
        let current = nums[nums.length - n];
        min = current < min ? current : min;
        n--;
    }

    return min;
}

const power = (num, pow) => Math.pow(num, pow);

function getMedianInArray(...numbers)
{
    let midIndex = Math.trunc(numbers.length / 2);

    return isOdd(numbers.length) 
    ? numbers[midIndex]
    : getArrayAverage(numbers[midIndex - 1], numbers[midIndex]);
}

function swapNumbers(num1, num2)
{
    let temp = 0;

    temp = num1;
    num1 = num2;
    num2 = temp;

    return [num1, num2];
}

function swapArrayElements(arr, element1, element2)
{
    [arr[element1], arr[element2]] = [arr[element2], arr[element1]];
}

function randomBetweenNumbers(from, to)
{
    let randNum = (Math.trunc(Math.random() * 1e4) % to - from + 1) + from; 

    return randNum;
}

function fillArrayWithRandomNumbers(arrLength, from, to)
{
    let arr = [];

    for (let i = 0; i < arrLength; i++)
    {
        arr[i] = randomBetweenNumbers(from, to);
    }

    return arr;
}