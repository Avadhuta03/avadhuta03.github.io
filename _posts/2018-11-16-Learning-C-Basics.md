---
layout: post 
title:  C Basics  
categories: Programming
image: c.png
---
<h4><i>"The only way to learn any programming languages is by writing program in it."</i></h4>
C is a low-level language closer to the assembly language and powerful for doing heavy lifting jobs.

<!--continue-->
This post derives codes and other works available on second edition of the book "The C Programming Language". Check out the codes available in <a href="https://github.com/avadhuta03/C-Basics">github</a>

<h4>Getting Started</h4>
<p>Get the gcc compiler, write files with .c extension, compile them & run the compiled program to get output.</p>
<pre>
#vi file_name.c                       //creates file with vi editor
#gcc file_name -o compiled_filename   //compile .c file with gcc compiler
#./compiled_filename		     //running the compiled file
</pre>

Hello World Program <a href="https://github.com/Avadhuta03/C-Basics/blob/master/hello.c">hello.c</a>

<pre><code>#include&lt;stdio.h>  //compiler gets information form standard input/output lib. 
int main()		//define main function with no argument values  
{
 printf("Hello, World!\n");   //main calls lib. function printf, \n is newline character
}
</code></pre>


<h3>Variables and Arithmetic Expressions</h3>  
<li>Program displaying Fahrenheit-Celsius table</li>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/tempTable_01.c">Temperature Table 01</a>

<li>More precise and clear version of above program can be:</li>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/tempTable_02.c">Temperature Table 02</a>

<li> Temperature conversion in reverse order  using for statement:</li>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/tempTable_03.c">Temprature Table 03</a>

<h4>Using Symbolic Constants to deal with magic numbers</h4>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/copy_char_02.c">Symbolic Constant</a>


<h3>Character Input and Output</h3>
<li>Text Stream is Sequence of characters divided into lines [0 or more characters followed by newline character<br>
</li>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/copy_char_01.c ">Copy Char 01</a><br>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/copy_char_02.c ">Copy Char 02</a>

<li>Value of EOF</li>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/EOF_value.c">EOF value</a>

<a href="https://github.com/Avadhuta03/C-Basics/blob/master/char_count.c">Character Count</a>

<a href="https://github.com/Avadhuta03/C-Basics/blob/master/line_count.c">Line Count</a>

<a href="https://github.com/Avadhuta03/C-Basics/blob/master/word_count.c "> Word Count</a>

<h3>Array</h3>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/array_01.c">Array to count digits and characters</a>

<h3>Function</h3>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/function_01.c">Function to calculate power of a number</a>
