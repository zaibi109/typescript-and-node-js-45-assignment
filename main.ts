"use strict";
//2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, 
//“Hello Eric, would you like to learn some Python today?”
let firstName = "Eric";
console.log('“Hello $ {firstName} would you like to learn some python today?”');

//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var fName = 'Moattar Ansari';
console.log("LowerCase: " + fName.toLowerCase());
console.log("UpperCase: " + fName.toUpperCase());
console.log("TitleCase: " + fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase());

//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks : Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var Author = "Zaibunisa Ashfaq,";
console.log("".concat(Author, " \"Happy are those who find fault with themselves instead of finding fault with others\""));

//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein,";
var message = "Imagination is more important than knowledge.For knowledge is limited to all we know and understand,while imagination embraces the entire world,and all there ever will be to know and understand";
console.log("".concat(famous_person, " \"").concat(message, "\""));

"use strict";
//6.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);

//7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);

//8.You should create four lines that look like this:
// console.log(5 + 3)each line
//Your output should simply be four lines with the number 8 appearing once  .
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var fav_num = 6;
console.log("My favorite Number : ".concat(fav_num, " because it's my Lucky Number"));

//10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Program: Number Eight
// Author: [Moattar]
// Date: []
// Description ; [This program demonstrates basic arithmetic operations (`+`, `-`, `*`, `/`) in TypeScript, each resulting in the number 8. The operations are enclosed in `console.log` statements to display the results.]
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);

//11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var Names = ["Alishba", "Komal", "Madiha"];
console.log(Names[0]);
console.log(Names[1]);
console.log(Names[2]);

//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Names = ["Alishba", "Komal", "Madiha"];
console.log("Hello, ".concat(Names[0], "!"));
console.log("Hello, ".concat(Names[1], "!"));
console.log("Hello, ".concat(Names[2], "!"));

//13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["Honda Bike", "Prado Car", "BMW-Car", "Yamaha YZ-R1"];
console.log("I would like to own a", transportation[0]);
console.log("I would like to own a", transportation[1]);
console.log("I would like to own a", transportation[2]);
console.log("I would like to own a", transportation[3]);

//14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Madiha", "Komal", "Tasbiha"];
console.log("Dear ".concat(guestList[0], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are cordially invited to dinner."));

//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ["Madiha", "Komal", "Tasbiha"];
console.log("Dear ".concat(guestList[0], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are invited to dinner."));
// Someone can't make it
var unableToAttend = guestList[1];
console.log("".concat(unableToAttend, " can't make it to the dinner."));
// Replace with a new guest
guestList[1] = "Khazina";
console.log("Dear ".concat(guestList[0], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are invited to dinner."));

//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Madiha", "Komal", "Tasbiha"];
console.log("Dear ".concat(guestList[0], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are cordially invited to dinner."));
// Someone can't make it.
var unableToAttend = guestList[1];
console.log("".concat(unableToAttend, " can't make it to the dinner."));
// Replace with a new guest
guestList[1] = "Fatima";
console.log("Dear ".concat(guestList[0], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are cordially invited to dinner."));
// Found a bigger dinner table
console.log("We found a bigger dinner table!");
// Add more guests
guestList.unshift("Khazina"); // Add to the beginning
guestList.splice(2, 0, "Manal"); // Add to the middle
guestList.push("Jiya"); // Add to the end
// Print a new set of invitation messages
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner."));
});

//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ["Albert Einstein", "Mahatma Gandhi", "Nelson Mandela", "Mother Teresa", "Abdul Sattar Edhi", "Rosa Parks"];
console.log("Dear ".concat(guestList[0], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[3], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[4], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guestList[5], ", you are cordially invited to dinner."));
console.log("We just found out that the new dinner table won't arrive in time for the dinner, and we can only invite two guests.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guestList.pop();
guestList.pop();
console.log("Final guest list:", guestList);

//18.  Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar)
                    ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 18• Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var placesToVisit = ["Paris", "Tokyo", "New York", "Bali", "Rome"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Restored original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);

"use strict";
//19.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Lhotse",
    "Makalu"
];
console.log("List of mountains:", mountains);

//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries = [
    "United States",
    "Canada",
    "Brazil",
    "India",
    "Australia"
];
console.log("List of countries:", countries);

//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var person1 = {
    name: "John",
    age: 25,
    city: "New York"
};
var person2 = {
    name: "Alice",
    age: 30,
    city: "London"
};
var person3 = {
    name: "Bob",
    age: 22,
    city: "Paris"
};
console.log(person1);
console.log(person2);
console.log(person3);

//22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var array = [1, 2, 3];
console.log(array[3]);

//23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var number = 5;
// Test 1: Is number == 5?
console.log("Is number == 5? I predict true.");
console.log(number == 5);
// Test 2: Is number != 3?
console.log("Is number != 3? I predict true.");
console.log(number != 3);
// Test 3: Is number > 3?
console.log("Is number > 3? I predict true.");
console.log(number > 3);
// Test 4: Is number < 10?
console.log("Is number < 10? I predict true.");
console.log(number < 10);
// Test 5: Is number >= 5?
console.log("Is number >= 5? I predict true.");
console.log(number >= 5);
// Test 6: Is number <= 5?
console.log("Is number <= 5? I predict true.");
console.log(number <= 5);
// Test 7: Is number == 3?
console.log("Is number == 3? I predict false.");
console.log(number == 3);
// Test 8: Is number != 5?
console.log("Is number != 5? I predict false.");
console.log(number != 5);
// Test 9: Is number > 10?
console.log("Is number > 10? I predict false.");
console.log(number > 10);
// Test 10: Is number < 3?
console.log("Is number < 3? I predict false.");
console.log(number < 3);

//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var string1 = "hello";
var string2 = "HELLO";
var number1 = 10;
var number2 = 5;
var array = [1, 2, 3];
console.log("Is string1 == 'hello'? I predict true.");
console.log(string1 == "hello");
console.log("Is string1 != string2? I predict true.");
console.log(string1 != string2);
console.log("Is string1.toLowerCase() == 'hello'? I predict true.");
console.log(string1.toLowerCase() == "hello");
console.log("Is number1 == 10? I predict true.");
console.log(number1 == 10);
console.log("Is number1 != number2? I predict true.");
console.log(number1 != number2);
console.log("Is number1 > number2? I predict true.");
console.log(number1 > number2);
console.log("Is number1 < number2? I predict false.");
console.log(number1 < number2);
console.log("Is number1 >= number2? I predict true.");
console.log(number1 >= number2);
console.log("Is number1 <= number2? I predict false.");
console.log(number1 <= number2);
console.log("Is number1 > 5 and number2 < 10? I predict true.");
console.log(number1 > 5 && number2 < 10);
console.log("Is number1 > 5 or number2 > 10? I predict true.");
console.log(number1 > 5 || number2 > 10);
console.log("Is 2 in array? I predict true.");
console.log(array.includes(2));
console.log("Is 4 not in array? I predict true.");
console.log(!array.includes(4));

//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color1 = 'green';
if (alien_color1 === 'green') {
    console.log("Player just earned 5 points!");
}
var alien_color2 = 'red';
if (alien_color2 === 'green') {
    console.log("Player just earned 5 points!");
}

//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
var alien_color1 = 'green';
// If-else chain
if (alien_color1 === 'green') {
    console.log("Player just earned 5 points for shooting the alien!");
}
else {
    console.log("Player just earned 10 points!");
}
var alien_color2 = 'red';
// If-else chain
if (alien_color2 === 'green') {
    console.log("Player just earned 5 points for shooting the alien!");
}
else {
    console.log("Player just earned 10 points!");
}

//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player earned 5 points!");
}
else if (alien_color === 'yellow') {
    console.log("Player earned 10 points!");
}
else if (alien_color === 'red') {
    console.log("Player earned 15 points!");
}
var alien_color2 = 'yellow';
if (alien_color2 === 'green') {
    console.log("Player earned 5 points!");
}
else if (alien_color === 'yellow') {
    console.log("Player earned 10 points!");
}
else if (alien_color === 'red') {
    console.log("Player earned 15 points!");
}
var alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log("Player earned 5 points!");
}
else if (alien_color === 'yellow') {
    console.log("Player earned 10 points!");
}
else if (alien_color === 'red') {
    console.log("Player earned 15 points!");
}

//28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}

// 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

// // 30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var usernames = ["Moattar Ansari", "Fatima", "Madiha", "Komal", "Tasbiha"];
// Loop through the array of usernames
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "Moattar Ansari") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}

// 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Usernames array
var usernames = []; // Empty array
// // Check if the list of users is not empty
if (usernames.length > 0) {
    //     // Loop through the array and print greetings
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (username === "admin") {
            console.log("Hello ".concat(username, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}

//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
// let current_users: string[] = ["john", "alice", "bob", "eve", "charlie"];
// let new_users: string[] = ["sam", "Alice", "JOHN", "MIKE", "bob"];
// // Convert current_users to lowercase for case-insensitive comparison
// let current_users_lower: string[] = current_users.map(user => user.toLowerCase());
// // Loop through the new_users list to check for unique usernames
// for (let user of new_users) {
//     if (current_users_lower.includes(user.toLowerCase())) {
//         console.log(`The username '${user}' is not available. Please enter a new username.`);
//     } else {
//         console.log(`The username '${user}' is available.`);
//     }
// }
var currentUsers = ["Alice", "Bob", "Charlie", "David", "Eve"];
var newUsers = ["Bob", "Frank", "John", "Mallory", "Alice"];
function isUsernameTaken(username) {
    return currentUsers.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (isUsernameTaken(newUser)) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
    }
}

// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinal = "";
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(number).concat(ordinal));
}

//34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza
var pizzas = ["Hawaiian", "Margherita", "BBQ Chicken"];
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");

//35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["Dog", "Cat", "Rabbit"];
console.log("Animal Names:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\nStatements about Animals:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " is a great pet."));
}
console.log("\nAny of these animals would make a great pet!");

//36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and the message on it is: ").concat(message));
}
make_shirt("Large", "Hello, World!");

//37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) {
        size = "Large";
    }
    if (message === void 0) {
        message = "I love TypeScript";
    }
    console.log("The shirt size is ".concat(size, " and the message on it is: ").concat(message));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Hello, World!");

//38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) {
        country = "Pakistan";
    }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

// 39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("London", "UK"));
console.log(city_country("Tokyo", "Japan"));

//40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums
var album1 = make_album("Artist1", "Album1", 10);
var album2 = make_album("Artist2", "Album2");
var album3 = make_album("Artist3", "Album3", 15);
// Print the albums
console.log(album1);
console.log(album2);
console.log(album3);

// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call the function to show magicians
show_magicians(magicians);

//42.  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
magicians = make_great(magicians);
show_magicians(magicians);

//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var modifiedMagicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);

"use strict";
//44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("  - No items selected.");
    }
    else {
        items.forEach(function (item, index) {
            console.log("  - Item ".concat(index + 1, ": ").concat(item));
        });
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Chicken", "Mayonnaise");
makeSandwich();

// // //45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// // function createCar(manufacturer: string, model: string, ...details: [string, any][]): object {
// //     let car: {[key: string]: any} = {
// //         manufacturer: manufacturer,
// //         model: model
// //     };
// //     details.forEach(([key, value]) => {
// //         car[key] = value;
// //     });
// //     return car;
// // }
// // // Call the function with required information and additional details
// // let carInfo = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2022]);
// // // Print the Object to check the information
// // console.log(carInfo);
function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        Object.assign(car, option);
    }
    return car;
}
var carInfo = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });
console.log(carInfo);












