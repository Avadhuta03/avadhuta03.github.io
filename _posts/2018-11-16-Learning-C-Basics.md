---
layout: page
title:  C Basics  
---
<h4><i>The only way to learn any programming languages is by writing program in it.</i></h4>
<h3>Getting Started</h3>
<p>Get the gcc compiler, write files with .c extension, compile them & run the compiled program.</p>


<pre><code>
#include&lt;stdio.h>  //compiler gets information form standard input/output lib. 
int main()		//define main function with no argument values  
{
 printf("Hello, World!\n");   //main calls lib. function printf, 
		              //	\n is newline character
}
</code></pre>

<h3>Variables and Arithmetic Expressions</h3>  
<li>Program displaying Fahrenheit-Celsius table</li>
<pre><code>
#include&lt;stdio.h>     
int main(){

      /*variables usually declared before executable statements */ 
     	int fahr, celsius;		//int variable types
	int lower, upper, step; 

      /* assignment statements to assign initial values to variables */
	lower=0; upper=300; step=20; fahr=lower;

      /* while loop that repeats loop once per output line,
        each line of table is computed the same way*/

	while(fahr<=upper){
		celsius = 5*(fahr-32)/9;

		//%d specifies the integer argument
		printf("%d\t%d\n",fahr,celsius);

		fahr = fahr + step;
        }
}
</code></pre>
<li>More precise and clear version of above program can be:</li>
<pre>
#include&lt;stdio.h>     
int main(){
     	float fahr, celsius;		//float variable types
	int lower, upper, step;        //int variable types 

	lower=0; upper=300; step=20; fahr=lower;

      /* while loop that repeats loop once per output line,
       because each line of table is computed the same way*/

	while(fahr<=upper){
	//number after decimal is not truncated.
		celsius = (5.0/9.0)*(fahr-32.0)/9;
 
	//3.0f prints fahr 3 chars. wide and no decimal or fraction digits
		printf("%3.0f %6.1f \n",fahr,celsius);

		fahr = fahr + step;
	}
}
</pre>


