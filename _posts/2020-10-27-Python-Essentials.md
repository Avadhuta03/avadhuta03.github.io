---
layout: post 
title:  Python Basics  
categories: Programming
comments: true
image: python.png
---


Python is a widely-used, interpreted, object-oriented, and high-level programming language with dynamic semantics, used for general-purpose programming.


<!--continue-->

<span class="toggle-01 underline cursor-pointer text-blue-700">Introduction </span>

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



<span class="toggle-02 underline cursor-pointer text-blue-700">Data types, variables, basic input-output operations, basic operators </span>

<div markdown="1"  class="hidden-text-02">


### Function



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


</div>