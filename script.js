

// Exercise#4




/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/



// code:




// const firstOfArray = (...arr) => arr[0];

// window.alert(`The first element = ${firstOfArray(...readIntNumbers(3))}`);











// Exercise#5



/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/



// code:




// const lastOfArray = (...arr) => arr[arr.length - 1];

// window.alert(`The first element = ${lastOfArray(...readIntNumbers(3))}`);












// Exercise#6



/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/


// code:


// var array = [0,5,7,9];

// console.log(`The original array: ${array}`);


// array.shift();

// console.log(`Array after using shift to get the first element: ${array}`);

// array.unshift(1, 2, 3, 4);

// console.log(`After unshift 1, 2, 3, 4 to array: ${array}`);

// array.push(10, 11);

// console.log(`After push 10, 11 to array: ${array}`);

// array.pop();

// console.log(`Array after pop: ${array}`);












// Exercise#7


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


// code:


// The push, pop these methods to insert, and remove the element in the end of array.
// The unshift, shift these methods to insert, and remove the element in the begining of array.


// var array = [0,5,7,9];

// console.log(`The original array: ${array}`);


// array.shift();

// console.log(`Array after using shift to get the first element: ${array}`);

// array.unshift(1, 2, 3, 4);

// console.log(`After unshift 1, 2, 3, 4 to array: ${array}`);

// array.push(10, 11);

// console.log(`After push 10, 11 to array: ${array}`);

// array.pop();

// console.log(`Array after pop: ${array}`);











// Exercise#8






/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/


// code:


// const middleOfArray = (...arr) => isEven(arr.length)
// ? [arr[arr.length /2 - 1], arr[arr.length / 2]]
// : [arr[Math.floor(arr.length / 2)]];

// window.alert(`The middle of array: ${middleOfArray(...readIntNumbers(4))}`);












// Exercise#9



/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/



// code:


// var animals = ['cat', 'ele', 'bird'];

// window.alert(`The animals array before mofdifing the elements: '${animals}'`);

// animals[0] = 'zebra';
// animals[1] = 'elephant';
// animals.length = 2;

// window.alert(`The animal array after modified its elements: '${animals}'`);

// var nums= [1,2,3,8,9];

// window.alert(`The nums array before mofdifing the elements: '${nums}'`);

// nums[0] = 5;
// nums[1] = -22;
// nums[2] = 3.5;
// nums[3] = 44;
// nums[4] = 98;
// nums[5] = 44;

// window.alert(`The nums array after modified its elements: '${nums}'`);












// Exercise#10

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/


// code:



// const indexOfArray = (arr = [], index = 0) => arr[index];

// let number = readIntNumber("Enter the number of array's elements?");

// window.alert(`Element = ${indexOfArray(readIntNumbers(number),
//      readNumberBetween(0, number - 1, "Enter a number between 0 to " + (number - 1)))}`);














// Exercise#11


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/



// code:




//   ------------------- Resizing the array manually -----------------


// function arrayExceptLast(arr = [])
// {
//     var arrCopy = [];
//     arrCopy.length = arr.length - 1;

//     for (let i = 0; i < arr.length - 1; i++)
//     {
//         arrCopy[i] = arr[i];
//     }

//     return arrCopy;
// }

// var nums= [1,2,3,8,9];

// window.alert(`Original Array: ${nums}`);

// window.alert(`Entire array except the last element = '${arrayExceptLast(nums)}'`);




//  --------------- using slice method --------------



// var nums= [1,2,3,8,9];

// window.alert(`Original Array: ${nums}`);

// window.alert(`Entire array except the last element using slice method = '${nums.slice(0, nums.length - 1)}'`);
















// Execute#12


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/


// code:



// ------- manually ---------


// function addToEnd(arr = [], value)
// {
//     var arrCopy = [];
//     arrCopy.length = arr.length + 1;

//     let i = 0;
//     for (i = 0; i < arr.length; i++)
//     {
//         arrCopy[i] = arr[i];
//     }

//     arrCopy[i] = value;

//     return arrCopy;
// }

// var nums= [1,2,3,8,9];

// window.alert(`Original array: ${nums}`);
// window.alert(`Array after insert at the end = ${addToEnd(nums, readIntNumber())}`);



// ----------------------- using push method --------------------

// var nums= [1,2,3,8,9];

// window.alert(`Original array: ${nums}`);
// nums.push(10);
// window.alert(`Array after insert at the end = ${nums}`);














// Exercise#13



// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



// code:

// var nums= [1,2,3,8,9];

// window.alert(`The sum of array using while loop: ${sumElementsInArrayUsingWhile(...nums)}`);
// window.alert(`The sum of array using for loop: ${sumElementsInArray(...nums)}`);











// Exercise#14


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



// code:


// var nums= [1,2,3,8,9];

// window.alert(`The min number in array using while loop: ${getMinNumberInArrayUsingWhile(...nums)}`);
// window.alert(`The min number in array using foor loop: ${getMinNumberInArray(...nums)}`);














// Exercise#15


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



// code:



// using while Loop:


// function removeFromArrayUsingWhileLoop(nums = [], elementToRemove)
// {
//     var n = nums.length;
//     var arrCopy = [];
//     arrCopy.length = nums.length - 1;
//     let currentIndex = 0;
//     let copyIndex = 0;

//     while (n > 0)
//     {
//         currentIndex = nums.length - n;
//         n--;
//         if (nums[currentIndex] !== elementToRemove)
//         {
//             arrCopy[copyIndex] = nums[currentIndex];
//             copyIndex++;
//         }
//         else
//             continue;
//     }

//     return arrCopy;
// }

// function removeFromArrayUsingForLoop(nums = [], elementToRemove)
// {
//     var arrCopy = [];
//     arrCopy.length = nums.length - 1;
//     let j = 0;

//     for (let i = 0; i < nums.length; i++)
//     {
//         if (nums[i] !== elementToRemove)
//         {
//             arrCopy[j] = nums[i];
//             j++;
//         }
//         else
//             continue;
//     }

//     return arrCopy;
// }

// var nums= [1,2,3];

// window.alert(`Original array: ${nums}`);

// let elementToRemove = readIntNumber("Enter the element you want to remove?");

// window.alert(`Array after remove using while loop ${elementToRemove} : ${removeFromArrayUsingWhileLoop(nums, elementToRemove)}`);
// window.alert(`Array after remove using for loop ${elementToRemove} : ${removeFromArrayUsingForLoop(nums, elementToRemove)}`);















// Exercise#16



/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// code:


// function oddArrayUsingWhileLoop(arr = [])
// {
//     var n = arr.length;
//     var arrCopy = [];
//     let currentIndex = 0, copyIndex = 0;    

//     while (n > 0)
//     {
//         currentIndex = arr.length - n;
//         n--;

//         if (isOdd(arr[currentIndex]))
//         {
//             arrCopy[copyIndex] = arr[currentIndex];
//             copyIndex++;
//         }
//     }

//     arrCopy.length = copyIndex;

//     return arrCopy;
// }

// function oddArrayUsingFoorLoop(arr = [])
// {
//     var arrCopy = [];
//     let j = 0;

//     for (let i = 0; i < arr.length; i++)
//     {
//         if (isOdd(arr[i]))
//         {
//             arrCopy[j] = arr[i];
//             j++;
//         }
//     }

//     arrCopy.length = j;

//     return arrCopy;
// }

// var nums= [1,2,3,8,9];

// window.alert(`Original array: ${nums}`);
// window.alert(`Array after filter the elements to the odd numbers using While loop = ${oddArrayUsingWhileLoop(nums)}`);
// window.alert(`Array after filter the elements to the odd numbers using Foor loop = ${oddArrayUsingFoorLoop(nums)}`);














// Exercise#17


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// Code:




// var nums= [1,2,3,8,9];

// window.alert(`The average of array using foor loop: ${getArrayAverage(...nums)}`);
// window.alert(`The average of array using While loop: ${aveArray(nums)}`);
















// Exercise#18

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/




// Code:


// function shorterInArrayUsingWhileLoop(arr = [])
// {
//     var n = arr.length;
//     var minWord = arr[0];

//     while (n > 0)
//     {
//         minWord = arr[arr.length - n].length < minWord
//         ? arr[arr.length - n] : minWord;

//         n--;
//     }

//     return minWord;
// }


// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
// window.alert(`The shorter text in array using foor '${minLengthInArray(...strings)}'`);
// window.alert(`The shorter text in array using while '${shorterInArrayUsingWhileLoop(strings)}'`);














// Exercise#19


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/





// code:


// function repeatCharUsingWhileLoop(text, chr)
// {
//     var n = text.length;
//     var sum = 0;

//     while (n > 0)
//     {
//         sum += text[text.length - n] === chr ? 1 : 0;
//         n--;
//     }

//     return sum;
// }

// function repeatCharUsingFoorLoop(text, chr)
// {
//     var sum = 0;

//     for (let i = 0; i < text.length; i++)
//     {
//         sum += text[i] === chr ? 1 : 0;
//     }
//     return sum;
// }

// var string = "alex mercer madrasa rashed2 emad hala";

// window.alert(`The text: ${string}`);

// window.alert(`The character you entered is repeated ${repeatCharUsingWhileLoop(string, readChar("Enter the character you want to check using While?"))} time(s).`);
// window.alert(`The character you entered is repeated ${repeatCharUsingFoorLoop(string, readChar("Enter the character you want to check using foor?"))} time(s).`);
















// Exercise#20


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// code:



// function evenIndexOddLengthUsingWhileLoop(arr = [])
// {
//     var arrCopy = [];
//     let j = 0;
//     var n = arr.length;
//     let currentIndex = 0;

//     while (n > 0)
//     {
//         currentIndex = arr.length - n;

//         if (isEven(currentIndex))
//         {
//             if (isOdd(arr[currentIndex].length))
//             {
//                 arrCopy[j] = arr[currentIndex];
//                 j++;
//             }
//         }
//         n--;
//     }

//     arrCopy.length = j;

//     return arrCopy;
// }


// function evenIndexOddLengthUsingFoorLoop(arr = [])
// {
//     var arrCopy = [];
//     let j = 0;

//     for (let i = 0; i < arr.length; i++)
//     {
//         if (isEven(arr[i]))
//         {
//             if (isOdd(arr[i].length))
//             {
//                 arrCopy[j] = arr[i];
//                 j++;
//             }
//         }
//     }

//     arrCopy.length = j;

//     return arrCopy;
// }

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];

// window.alert(`Original Array:\n ${strings}`);

// window.alert(`odd length in even index only using while loop\n: ${evenIndexOddLengthUsingWhileLoop(strings)}`);
// window.alert(`odd length in even index only using foor loop\n: ${evenIndexOddLengthUsingWhileLoop(strings)}`);

















// Exercise#21


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// Code:


// function powerElementIndexUsingWhileLoop(nums = [])
// {
//     var arrCopy = [];
//     arrCopy.length = nums.length;
//     var n = nums.length;
//     let currentIndex = 0;

//     while (n > 0)
//     {
//         currentIndex = nums.length - n;

//         arrCopy[currentIndex] = power(nums[currentIndex], currentIndex);
//         n--;
//     }

//     return arrCopy;
// }

// function powerElementIndexUsingForLoop(nums = [])
// {
//     var arrCopy = [];
//     arrCopy.length = nums.length;

//     for (let i = 0; i < nums.length; i++)
//     {
//         arrCopy[i] = power(nums[i], i);
//     }

//     return arrCopy;
// }

// var nums= [44, 5, 4, 3, 2, 10]

// window.alert(`Original array: ${nums}`);
// window.alert(`Transformed Array: Each element raised to the power of its index\nResult using while loop: ${powerElementIndexUsingWhileLoop(nums)}`);
// window.alert(`Transformed Array: Each element raised to the power of its index\nResult using foor loop: ${powerElementIndexUsingForLoop(nums)}`);















// Exercise#22

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// code:


// function evenNumberEvenIndexUsingWhileLoop(nums = [])
// {
//     var arrCopy = [];
//     let j = 0, currentIndex = 0;
//     var n = nums.length;

//     while (n > 0)
//     {
//         currentIndex = nums.length - n;

//         if (isEven(currentIndex))
//         {
//             if (isEven(nums[currentIndex]))
//             {
//                 arrCopy[j] = nums[currentIndex];
//                 j++;
//             }
//         }

//         n--;
//     }

//     arrCopy.length = j;

//     return arrCopy;
// }

// function evenNumberEvenIndexUsingWhileLoop(nums = [])
// {
//     var arrCopy = [];
//     let j = 0;

//     for (let i = 0; i < nums.length; i++)
//     {
//         if (isEven(i))
//         {
//             if (isEven(nums[i]))
//             {
//                 arrCopy[j] = nums[i];
//                 j++;
//             }
//         }
//     }

//     arrCopy.length = j;

//     return arrCopy;
// }

// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]

// window.alert(`Original array: ${nums}`);
// window.alert(`Array after filter its elements to the even indicies, and numbers\nResult using While loop: ${evenNumberEvenIndexUsingWhileLoop(nums)}`);
// window.alert(`Array after filter its elements to the even indicies, and numbers\nResult using For loop: ${evenNumberEvenIndexUsingWhileLoop(nums)}`);