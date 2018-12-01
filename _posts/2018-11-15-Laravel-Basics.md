---
layout: post
title: Learning Laravel
categories: Framework
---
<ol>
<h3><li>Laravel App Skeleton</li></h3>
<pre>
app/		*bulk of app(models,controllers,route definitions, commands, PHP domain code)  
config/		*config. files for db conn.,queue, mail settings etc. 
		each file returns an array,each value of array can be accessed using config key; 
		format example: filename.key1.key2
database/	*db migrations and seeds
public/		*public facing files like img.,stylesheets,scripts,downloads.
		*index.php which kicks off bootstrapping process and routes all requests. 
resources/      *non-PHP files like views, language files, src. JS files, Sass/LESS 
routes/		*HTTP routes, console routes or Artisan commands 
   -->web.php   *web routes
   -->api.php   *API routes            

storage/	*caches, logs and compiled system files
tests/		*unit and integration tests
                For tests, create file ending with test.php in tests dir. & run ./vendor/bin/phpunit
vendor/		*composer installed dependencies for remote servers
   
.env		*file to dictate the environment variables.
.env.example    *template file that env. duplicates to create .env file
.gitattributes  *git config. file
.gitignore	*git config. file
artisan/ 	*file that allows to run artisan commands
composer.json	*user-editable composer's config. file
composer.lock   *not-editable composer's config. file
gulpfile.js	*optional config file for Elixir and Gulp(for compiling & processing frontend assets
package.json	*similar to composer.json for frontend assets
phpunit.xml	*config. file for PHPUnit(tool for testing out of the box)
readme.md	*markdown file for Intro. of Laravel
server.php	*backup server for laravel app  to light-weight server 
</pre>
   
  
<h3><li>Understanding Routing</li></h3>
<ul>  
    Simple way:  match Path with Closure.<br>
             Example:<pre>
//routes/web.php
Route::get('/',function(){ return 'Hello, World!'; } );
</pre>
     
         Route verbs: <br>
        <pre>
	 Route::post('/',function(){});
         Route::put('/',function(){});
	 Route::delete('/',function(){});
	 Route::any('/',function(){});
         Route::match(['get','post'],'/',function(){}); 
</pre>

<li>
Route using Controller name and method as a string
<pre>Route::get('/','GreetingController@index');</pre>  
</li>

<li>
Route Parameters(variable segment of URL) can be defined in route and passed to closure. 
<br> Example: <br>  
<pre>Route::get('users/{id}/booklists', function($id){});</pre>   
    	<br>->Order is left to right: <pre>Route::get('users/{userId}/comments/{commentId}', function($userId,$commentId){});</pre> 
                        <br>->Optional Route parameter with ?
                		 <pre>Route::get('users/{id?}',function($id='fallbackId'){} );</pre>  
	          	<br>->Regular expression route constraints   
			  <pre>Route::get('users/{id}',function($id){ })->where('id','[0-9]+');
Route::get('users/{username}',function($username) { })->where('username','[A-Za-z]+');
Route::get('posts/{id}/{slug}',function($id,$slug){ })->where(['id'=>'[0-9]+', 'slug'=>'[A-Za-z]+']);</pre> 
</li> 

	<li> Route Names <br> 
            <br>Using URL helper to refer routes:<br>
		Example:<pre> &lt; a href="&lt;?php echo url('/'); ?>"> </pre> 
		<br>
			//defining route with name in routes/web.php   <br>
		       <pre>Route::get('members/{id}', 'MembersController@show')->name('members.show');</pre>    
  			
			//link the route in a view using route() helper
			<br><pre> &lt;a href="&lt;?php echo route('members.show',['id'=>13]); ?>"> </pre>
                <br> To Pass Route Parameters to the route() helper, 
			define the route parameters while using route() helper.<br><br>
				Examples:<br>
					//http://himaliworld.com/users/1/comments/2 
				<pre>route('users.comments.show',[1,2])
 route('users.comments.show',['userId'=>1,'commentId'=>2]
</pre> 
				//http://himaliworld.com/users/1/comments/2?opt=a
			       <pre>route('users.comments.show',['userId'=>1, 'commentId'=>2, 'opt'=>'a'])</pre> 
        <br></li>
   </ul> 

<h3><li>Using command line Companion: Artisan</li></h3>
<pre>
php artisan changes  
php artisan --version
php artisan route::list //display table with all routes
php artisan tinker     //starts REPL(an interactive shell) to enter php commands
			in the context of the application and seed output)
php artisan down    //bring application into maintainence mode
php artisan up      //exit maintainence mode
php artisan optimize //trim & merge common classes in one file: storage/framework/compiled.php  
        		//if app.debug is set to true, classes will not be compiled
 			// --force flag to override
php artisan route:cache  //cache the routes of application
php artisan list: gives follwoing entries under make namespace
        make:command
        make:console
        make:controller
        make:event
        make:middleware
        make:migration
        make:model
        make:provider
        make:request
Usage Examples:
        php artisan make:model library --no-migration
        //creates Eloquent Model class called library at app/library.php
        // without makting migration tables.
php artisan make:command --help
</pre>






</ol>




