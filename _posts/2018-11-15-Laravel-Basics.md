---
layout: post
title: Learning Laravel
---
<ol>
<h3><li>Laravel App Skeleton</li></h3>
<code> <ul>
  <li>app/ <br>*bulk of app(models,controllers,route definitions, commands, PHP domain code)  </li>
   <li>config/ <br>*config. files for db conn.,queue, mail settings etc. <br>each file returns an array,each value of array can be accessed using config key; format example: filename.key1.key2</li>
    <li>database/ <br>*db migrations and seeds</li>
    <li>public/ <br>*public facing files like img.,stylesheets,scripts,downloads.
		<br>*index.php which kicks off bootstrapping process and routes all requests. 
    </li> 
    <li>resources/ 
	<br> *non-PHP files like views, languag files, src. JS files, Sass/LESS
   </li>
   <li>routes/ <br>*HTTP routes, console routes or Artisan commands <br> 
                 -->web.php   *web routes<br>
     		 -->api.php   *API routes<br>            
   </li>
   <li>storage/ <br>*caches, logs and compiled system files</li>
   <li>tests/ <br>*unit and integration tests
             <br>To create tests, create file ending with test.php in tests dir. & run ./vendor/bin/phpunit
   </li>
   <li>vendor/ <br> *composer installed dependencies for remote servers</li>
   <li>.env <br>*file to dictate the environment variables.</li>
   <li>.env.example <br>* template file that env. duplicates to create .env file</li>
   <li>.gitattributes <br>*git config. file</li>
   <li>.gitignore <br>*git config. file</li>
   <li>artisan <br> *file that allows to run artisan commands</li>
   <li>composer.json <br>*user-editable composer's config. file</li>
   <li>composer.lock <br> *not-editable composer's config. file</li>
   <li>gulpfile.js <br> *optional config file for Elixir and Gulp(for compiling & processing frontend assets</li>
   <li>package.json <br>*similar to composer.json for frontend assets</li>
   <li>phpunit.xml <br> *config. file for PHPUnit(tool for testing out of the box)</li>
   <li>readme.md <br>*markdown file for Intro. of Laravel</li>
   <li>server.php <br>*backup server for laravel app  to light-weight server </li>
</ul>
</code>
   
  
<h3><li>Understanding Routing</li></h3>
   <ul>  
    <li>Simple way:  match Path with Closure.<br>
             Example:<pre>
//routes/web.php
Route::get('/',function(){ return 'Hello, World!'; } );
</pre></li>
      <li>
         Route verbs: <br>
        <pre>Route::post('/',function(){});
         Route::put('/',function(){});
	 Route::delete('/',function(){});
	 Route::any('/',function(){});
         Route::match(['get','post'],'/',function(){}); 
</pre></li>
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
</ol>




