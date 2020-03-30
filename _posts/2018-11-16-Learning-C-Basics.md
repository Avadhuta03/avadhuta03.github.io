---
layout: post 
title:  C Basics  
categories: Programming
comments: true
image: c.png
---
<h3><center><i>"The only way to learn any programming languages is by writing program in it."</i></center></h3>

<!--continue-->
C is a low-level language closer to the assembly language and powerful for doing heavy lifting jobs.This post derives codes and other works available on second edition of the book "The C Programming Language". Check out the codes available in <a href="https://github.com/avadhuta03/C-Basics">github</a>



<h3>Getting Started</h3>
<p>Get the gcc compiler, write files with .c extension, compile them & run the compiled program to get output.</p>
<pre>
#vi file_name.c                       //creates file with vi editor
#gcc file_name -o compiled_filename   //compile .c file with gcc compiler
#./compiled_filename		     //running the compiled file
</pre>

Hello World Program <a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.1-hello.c">hello.c</a>

<pre><code>#include&lt;stdio.h>  //compiler gets information form standard input/output lib. 
int main()		//define main function with no argument values  
{
 printf("Hello, World!\n");   //main calls lib. function printf, \n is newspanne character
}
</code></pre>

<button>Chapter 1</button>

<h3>Variables and Arithmetic Expressions</h3>  
<span>Program displaying Fahrenheit-Celsius table</span>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.2-tempTable_01.c" >Temperature Table 01</a>

<span>More precise and clear version of above program can be : </span>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.2-tempTable_02.c">Temperature Table 02</a>

<span> Temperature conversion in reverse order  using for statement : </span>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.3-tempTable_03.c">Temprature Table 03</a>

<h3>Symbolic Constants</h3>
<span>Using symbolic constants to deal with the magic numbers that appears on program : </span><a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.4-symbolic_constant.c">Symbolic Constant</a>


<h3>Character Input and Output</h3>
<p>Text Stream is Sequence of characters divided into lines [0 or more characters followed by newline character</p>

<span>Copying the input character : </span><a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.5.1-copy_char_01.c" target="__blank" >Copy Char 01</a>

<span>Copying the input character second version : </span><a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.5.1-copy_char_02.c">Copy Char 02</a>


<span>count the total input characters : </span><a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.5.2-char_count.c">Character Count</a>

<span>count the total input lines : </span><a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.5.3-line_count.c">Line Count</a>

<span>count the number of input words : </span><a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.5.4-word_count.c"> Word Count</a>

<span>Value of End Of File(EOF) : </span>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/Ex-1-6-EOF_value.c"> EOF value</a>

<h3>Array</h3>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.6-array_01.c" target="__blank">Array to count digits and characters</a>

<h3>Function</h3>
<a href="https://github.com/Avadhuta03/C-Basics/blob/master/chapter_01/1.7-function_01.c" target="__blank">Function to calculate power of a number</a>
