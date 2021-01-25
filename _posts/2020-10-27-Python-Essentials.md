---
layout: post 
title:  Python Basics  
categories: Programming
comments: true
image: python.png
---


Python is a widely-used, interpreted, object-oriented, and high-level programming language with dynamic semantics, used for general-purpose programming.


<!--continue-->

<span class="toggle-01 underline cursor-pointer text-blue-700">Module 1 : Introduction </span>

<div markdown="1"  class="hidden-text-01">

#### Why Python?
	
1. It is easy to learn - the time needed to learn Python is shorter than for many other languages; this means that it's possible to start the actual programming faster
2. It is easy to use for writing new software - it's often possible to write code faster when using Python;
3. It is easy to obtain, install and deploy - Python is free, open and multiplatform; not all languages can boast that.


#### Python goals

In 1999, Guido van Rossum defined his goals for Python:

1. an easy and intuitive language just as powerful as those of the major competitors;
2. open source, so anyone can contribute to its development;
3. code that is as understandable as plain English;
4. suitable for everyday tasks, allowing for short development times.


#### What is Python used for?

Most major webistes and services : Dropbox? UBER? Spotify? Pintrest? BuzzFeed?

1. Internet Applications (BitTorrent, Jogger Publishing Assistant, TheCircle, TwistedMatrix)
2. 3D CAD/CAM (FreeCAD, Fandango, Blender, Vintech RCAM)
3. Enterprise Applications (Odoo, Tryton, Picalo, LinOTP 2, RESTx)
4. Image Applications (Gnofract 4D, Gogh, imgSeek, MayaVi, VPython)
5. Mobile Applications (Aarlogic C05/3, AppBackup, Pyroute)
6. Office Applications (calibre, faces, Notalon, pyspread)
7. Personal Information Managers (BitPim, Narval, Prioritise, Task Coach, WikidPad) [Source: https://wiki.python.org/moin/PythonProjects]

Generally, Python is a great choice for:

1.	Web and Internet development (e.g., Django and Pyramid frameworks, Flask and Bottle micro-frameworks)
2.	Scientific and numeric computing (e.g., SciPy - a collection of packages for the purposes of mathematics, science, and engineering; Ipython - an interactive shell that features editing and recording of work sessions)
3.	Education (it's a brilliant language for teaching programming! And that's why we're offering this course to you!)
4.	Desktop GUIs (e.g., wxWidgets, Kivy, Qt)
5.	Software Development (build control, management, and testing - Scons, Buildbot, Apache Gump, Roundup, Trac)
6.	Business applications (ERP and e-commerce systems - Odoo, Tryton) [Source: https://www.python.org/about/apps]



#### Types of Python

1. Python 2 : older version of original python

2. Python 3 : current version of the language

There is more than one version of each python.

1. CPython : All pythons coming from the Python Software Foundation(PSF) are written in the "C" language. It is the default implementation of the Python Programming Language.

2. Cython : Another Python family member that is intended to do - to automatically translate the Python code into "C" code. This makes python efficient for tasks that needs large and complex mathematical calculations. However the resulting code's execution may be extremely time-consuming.

3. Jython : Implements Python 2 standards and can ommunicate with existing Java Infrastructure.

4. PyPy and RPython : PyPy - a Python within a Python. Restricted Python(RPython) is a subset of Python.



## COMPILATION vs. INTERPRETATION


### COMPILATION

#### Advantages

1. the execution of the translated code is usually faster;
2. only the user has to have the compiler - the end-user may use the code without it;
3. the translated code is stored using machine language - as it is very hard to understand it, your own inventions and programming tricks are likely to remain your secret.



#### Disadvantages


1. the compilation itself may be a very time-consuming process - you may not be able to run your code immediately after any amendment;
2. you have to have as many compilers as hardware platforms you want your code to be run on.




### INTERPRETATION

#### Advantages


1. you can run the code as soon as you complete it - there are no additional phases of translation;
2. the code is stored using programming language, not the machine one - this means that it can be run on computers using different machine languages; you don't compile your code separately for each different architecture.


#### Disadvantages


1. don't expect that interpretation will ramp your code to high speed - your code will share the computer's power with the interpreter, so it can't be really fast;
2. both you and the end user have to have the interpreter to run your code.



## Tools

The Python 3 standard installation contains a very simple but extremely useful application named IDLE.

IDLE is an acronym: Integrated Development and Learning Environment.

</div>



<span class="toggle-02 underline cursor-pointer text-blue-700">Module 2 : Data types, variables, basic input-output operations, basic operators </span>

<div markdown="1"  class="hidden-text-02">


# Function



#### Definition

A function is a separate part of the computer code able to:

1. cause some effect (e.g., send text to the terminal, create a file, draw an image, play a sound, etc.); this is something completely unheard of in the world of mathematics;
2. evaluate a value or some values (e.g., the square root of a value or the length of a given text); this is what makes Python's functions the relatives of mathematical concepts.

### Example : print("Hello!") 


The above line of code prints the content inside double quotation mark.


Here, print is the "function name" and print() is a python built-in function.


Other functions can be derived from modules and we can write one ourself. The name of the function should be significant (the name of the print function is self-evident).



### Structure

Along with an effect and a result, function can have an argument or arguments. 

In above example "Hello!" is string argument delivered to print() function. The string is delimited with the quotes and the content of string is taken as "data" rather than code.



Note: to distinguish ordinary words from function names, place a pair of empty parentheses - opening and closing ones, respectively.



#### Function Invocation
The function name along with parenthesis and argument(s) form the function invocation.

function_name(argument)

The process includes following:


1. First, Python checks if the name specified is legal (it browses its internal data in order to find an existing function of the name; if this search fails, Python aborts the code);
2. second, Python checks if the function's requirements for the number of arguments allows you to invoke the function in this way (e.g., if a specific function demands exactly two arguments, any invocation delivering only one argument will be considered erroneous, and will abort the code's execution);
3. third, Python leaves your code for a moment and jumps into the function you want to invoke; of course, it takes your argument(s) too and passes it/them to the function;
4. fourth, the function executes its code, causes the desired effect (if any), evaluates the desired result(s) (if any) and finishes its task;
5. finally, Python returns to your code (to the place just after the invocation) and resumes its execution.



## Summary

1. The print() function is a built-in function. It prints/outputs a specified message to the screen/console window.

2. Built-in functions, contrary to user-defined functions, are always available and don't have to be imported. Python 3.7.1 comes with 69 built-in functions. You can find their full list provided in alphabetical order in the Python Standard Library.

3. To call a function (function invocation), you need to use the function name followed by parentheses. You can pass arguments into a function by placing them inside the parentheses. You must separate arguments with a comma, e.g., print("Hello,", "world!"). An "empty" print() function outputs an empty line to the screen.

4. Python strings are delimited with quotes, e.g., "I am a string", or 'I am a string, too'.

5. Computer programs are collections of instructions. An instruction is a command to perform a specific task when executed, e.g., to print a certain message to the screen.

6. In Python strings the backslash (\) is a special character which announces that the next character has a different meaning, e.g., \n (the newline character) starts a new output line.

7. Positional arguments are the ones whose meaning is dictated by their position, e.g., the second argument is outputted after the first, the third is outputted after the second, etc.

8. Keyword arguments are the ones whose meaning is not dictated by their location, but by a special word (keyword) used to identify them.

9. The end and sep parameters can be used for formatting the output of the print() function. The sep parameter specifies the separator between the outputted arguments (e.g., print("H", "E", "L", "L", "O", sep="-"), whereas the end parameter specifies what to print at the end of the print statement.




# Literals


### Definiton

A literal is data whose values are determined by the literal itself.

For example : "369" is a numerical literal while "I am a literal" is a string literal



The numbers handled by modern computers are of two types:

1. Integer  : number devoid of fractional part

2. Floating-point numbers (floats) :  able to contain the fractional part



**Type : The characteristic of the numeric value which determines its kind, range, and application, is called the type.**




### Integer

*Python 3.6 has introduced underscores in numeric literals, allowing for placing single underscores between digits and after base specifiers for improved readability.*



Example : 

for positive integers plus(+) sign is permissible but not necessary : 11111111 or 11_111_111

for negative integer just use minus : -11111111 or -11_111_111


### Integer : Octal and hexadecimal numbers

If an integer number is preceded by an 0O or 0o prefix (zero-o), it will be treated as an octal value. 

Example : print(0o123)


If an integer number is preceded by an 0X or 0x prefix (zero-x), it will be treated as an hexadecimal value. 

Example : print(0x123)







### Floats


Floats are designed to represent and to store the numbers that (as a mathematician would say) have a non-empty decimal fraction.

Example: 0.3 , 6.0  ,  these can also be written as .3  and 6.   and neither type or value is changed.


For very large or small numbers, we also can use e. For example : 300000000 can be written as 3e8 or 3E8.


*Note:
1. the exponent (the value after the E) has to be an integer;
2. the base (the value in front of the E) may be an integer.

So the float has point(.) or the letter from exponent(e)



#### Coding Floats


To write the physical constant called Planck's constant which has the value of : 6.62607 x 10^-34, we need to write as : 6.62607E-34

When you run this literal through Python: print(0.0000000000000000000001), the result is 1e-22.

Python always chooses the more economical form of the number's presentation.




### Strings

Strings are used when you need to process text (like names of all kinds, addresses, novels, etc.), not numbers.

String needs quotes. But to print quotes on string like, I am "String".    we can do :

1. print("I am \"String\".")
or
2. print('I am "String".')


A string can be empty - it may contain no characters at all. An empty string still remains a string.



### Boolean values

The name comes from George Boole (1815-1864), the author of the fundamental work, The Laws of Thought, which contains the definition of Boolean algebra - a part of algebra which makes use of only two distinct values: True and False, denoted as 1 and 0.


Python is a binary reptile. These two Boolean values have strict denotations in Python: True and False, including case insensitivity.





## Key Topics


1. Literals are notations for representing some fixed values in code. Python has various types of literals - for example, a literal can be a number (numeric literals, e.g., 123), or a string (string literals, e.g., "I am a literal.").

2. The binary system is a system of numbers that employs 2 as the base. Therefore, a binary number is made up of 0s and 1s only, e.g., 1010 is 10 in decimal.
Octal and hexadecimal numeration systems, similarly, employ 8 and 16 as their bases respectively. The hexadecimal system uses the decimal numbers and six extra letters.

3. Integers (or simply ints) are one of the numerical types supported by Python. They are numbers written without a fractional component, e.g., 256, or -1 (negative integers).

4. Floating-point numbers (or simply floats) are another one of the numerical types supported by Python. They are numbers that contain (or are able to contain) a fractional component, e.g., 1.27.

5. To encode an apostrophe or a quote inside a string you can either use the escape character, e.g., 'I\\'m happy.', or open and close the string using an opposite set of symbols to the ones you wish to encode, e.g., "I'm happy." to encode an apostrophe, and 'He said "Python", not "typhoon"' to encode a (double) quote.

6. Boolean values are the two constant objects True and False used to represent truth values (in numeric contexts 1 is True, while 0 is False.

**EXTRA**
There is one more, special literal that is used in Python: the None literal. This literal is a so-called NoneType object, and it is used to represent the absence of a value.


</div>



<span class="toggle-03 underline cursor-pointer text-blue-700">Module 3 :  </span>

<div markdown="1"  class="hidden-text-03">


</div>




<span class="toggle-04 underline cursor-pointer text-blue-700">Module 4 :  </span>

<div markdown="1"  class="hidden-text-04">


</div>


<span class="toggle-04 underline cursor-pointer text-blue-700">Module 4 :  </span>

<div markdown="1"  class="hidden-text-04">


</div>