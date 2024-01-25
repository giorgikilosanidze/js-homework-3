// task1

let array1 = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 80];

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        };
    };
    return sum;
};

console.log(findSum(array1));

// task2

let array2 = [10, 50, 6, 7, 8, 11, 6, 3, 9];

function findSum2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    };
    return sum;
};

console.log(findSum2(array2));

// task3

let user = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
};

function findUser(user) {
    if (user.isloggedin === true) {
        return user.firstname + " " + user.lastname;
    };
    return false;
};

console.log(findUser(user));

// task4

let array3 = [4, 52, 5, 235, 53, 25, 23523, 43];

function findMax(arr) {
    let minimum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (minimum < arr[i]) {
            minimum = arr[i]
        }
    }
    return minimum;
};

console.log(findMax(array3));


// task5

let number = 27;

function findNumber(num) {
    if (num % 2 === 0) {
        return "this number is even";
    }
    return "this number is odd";
}

console.log(findNumber(number));

// task6


// task7

let user1 = {
    name: "giorgi",
    age: 21,
    status: "student",
};

function findAge(user) {
    if (user.age > 18) {
        return "სრულწლოვანი";
    }
    return "არასრულწლოვანი";
}

console.log(findAge(user1));


// task8

let num1 = 8;

let num2 = 29;

function numbers(num1, num2) {
    if (num1 > num2) {
        return "num1 is the largest";
    } else if (num1 < num2) {
        return "num2 is the largest";
    }
    return "error";
};

console.log(numbers(num1, num2));





