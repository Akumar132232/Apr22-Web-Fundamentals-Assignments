There are four ways a function can be created in JavaScript. They are as follows:

1) A function as a statement:- A function statement starts with the function keyword. It can return a primitive type value, object, or another function. For example, a function statement can return an object as shown in the following code example:
 
 function getProduct(){
    let product = {
        Id:1,
        Title:'Book',
        Price: 30
    };x
    return product; 
}

let p1 = getProduct();
console.log(p1); // prints product object 

2)A function as an expression :- In a function expression, you assign a function to a variable. A function expression can also be created as anonymous without a name, as shown in the following code example:

	let add = function (num1,num2){
	    let sum = num1+ num2; 
	    return sum;
	}

	let res = add(8,9);
	console.log(res);// 17


__________________________________________________________________________________________________________________________________________________________
The main differences between a function statement and a function expression are:										                                                      |
																				                                                                                                                  |
--A function expression can be created without a name, whereas a function statement must have a name							                                        |
--A function expression is not hoisted on the top of the execution context, whereas a function statement is hoisted at the top of the execution context	  |
__________________________________________________________________________________________________________________________________________________________|

3)A function as an arrow function :- The arrow functions were introduced in ECMA 2015 with the main purpose of giving a shorter syntax to a function expression. Besides providing shorter syntax, which increases the readability of the code, it does not have its own value of the this object. The value of this object inside an arrow function is inherited from the enclosing scope.

ex:-   var add = (num1, num2)=> num1+num2; 
       let res = add(5,2);
       console.log(res); // 7 

____________________________________________________________________________________________________________
Some syntax rules for an arrow function are:								                                              	|
														                                                                                | 
Parameters should be passed in a small bracket								                                              |
If there is only one parameter, then the bracket is optional							                                  |
If there is no parameter, then it must have a small empty bracket						                                |
If there is only a single expression in the function body, then using parentheses is optional		            |
If there is only a single expression in the function body, then using the return statement is optional	    |								                                          
____________________________________________________________________________________________________________|

4)A function created using the Function constructor:- A function can be dynamically created using the Function constructor, but it suffers from security and performance issues and is not advisable to use.

We can create a function using the Function constructor as shown in the following example.
ex:-
	var add = Function('num1','num2','return num1+num2');
	let res = add (7,8);
	console.log(res); // 15

























