---
layout: post 
title:  C Basics  
categories: Programming
---
<h4><i>The only way to learn any programming languages is by writing program in it.</i></h4>
<h3>Getting Started</h3>
<p>Get the gcc compiler, write files with .c extension, compile them & run the compiled program to get output.</p>


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
<li> Temperature conversion in reverse order  using for statement:</li>
<pre>
    #include&lt;stdio.h>
   /* Fahrenheit ---> Ceslius Table */

 int main(){
       int fahr;

       for(fahr=300; fahr >= 0; fahr=fahr-20)

           printf("%3d %6.1f\n", fahr,(5.0/9.0) * (fahr-32)); 
}    
</pre>

<h3>Using Symbolic Constants to deal with magic numbers that appears in program.</h3>
<pre>
#define LOWER 0		 //lowerlimit
#define UPPER 300	 //upperlimit
#define STEP 20		//step size

int main(){
  int fahr;
  printf("Fahrenheit-Celsius table\n");

  for(fahr=LOWER; fahr<=UPPER; fahr=fahr+STEP)
	printf("%3d %6.1f\n",fahr,(5.0/9.0)*(fahr-32));
}
</pre>

<h3>Character Input and Output</h3>
<li>Text Stream:Sequence of characters divided into lines [0 or more characters followed by newline character]</i><br>
   Functions:<br>
		getchar() : reads the next input character from a text stream and return that as its value. <br> 
		putchar() : prints a character each time it is called<br>
</li>
<pre>
 /* File Copying first version */
  	#include&lt;stdio.h>
	int main(){
		int c;      // int data type because of its size
		c=getchar();
		while(c != EOF)      //EOF is special char whose value is distinct from that of real chars
		{                    // != is "not equal to"
		  putchar(c);
		  c=getchar(); 
		}
	}
</pre>


<pre>
 /* File Copying--second  version */
  	#include&lt;stdio.h>
	int main(){
		int c;      
		while((c=getchar()) != EOF) //an assignment can be a part of larger expression 
		 { putchar(c);}
	}
</pre>

<li>Value of EOF = ?</li>
<li>Verify getchar() != EOF expression has value 0 or 1</li>
<pre>
    #include&lt;stdio.h>
	int main(){
		int a,b;
		printf("Value of EOF : %3d\n",a=EOF);  
		printf(" Expression: getchar() != EOF , has value :%3d\n", b=(getchar() !=EOF );
	} 
</pre>
