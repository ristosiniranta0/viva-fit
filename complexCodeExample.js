/*
    Filename: complexCodeExample.js
    Description: This code demonstrates a sophisticated and complex example showcasing various JavaScript concepts and functionality.
*/

// Custom Class for creating complex objects
class ComplexObject {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        if (this.gender === 'male') {
            console.log(`Hello Mr. ${this.name}, nice to meet you!`);
        } else if (this.gender === 'female') {
            console.log(`Hello Ms. ${this.name}, nice to meet you!`);
        } else {
            console.log(`Hello ${this.name}, nice to meet you!`);
        }
    }
}

// Function to calculate factorial using recursion
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to generate a Fibonacci sequence
function fibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

// Function to validate if a number is prime
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Main function to execute the complex code
function executeComplexCode() {
    // Create a ComplexObject instance
    const person = new ComplexObject("John", 25, "male");

    // Greet the person
    person.greet();

    // Calculate factorial of a number
    const num = 5;
    const result = factorial(num);
    console.log(`Factorial of ${num} is: ${result}`);

    // Generate and display the Fibonacci sequence
    const fibonacciSequence = fibonacci(10);
    console.log("Fibonacci Sequence:", fibonacciSequence.join(", "));

    // Check if a number is prime
    const primeNumber = 17;
    const isPrimeNumber = isPrime(primeNumber);
    console.log(`${primeNumber} is prime: ${isPrimeNumber}`);
}

// Execute the complex code
executeComplexCode();