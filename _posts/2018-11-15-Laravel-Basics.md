---
layout: post
title: Basics of Laravel
description: Learning frameworks built on specific programming language can be an effective way to learn any PLs. With the basics of php, I hope learning Laravel; a php framework, can help me understand the language along with real web development works.  
categories: [Frameworks]
comments: true
image: laravel.png
---
Laravel is open-source php  web framework, based on Symfony that follows Model-View-Controller(MVC) architectural pattern and intended for development of web applications.

<span class="toggle-01 underline cursor-pointer text-blue-700">1. Installation</span>

<div markdown="1"  class="hidden-text-01">

<!--continue-->

### Installation
Using Composer<br>
   <pre>composer create-project laravel/laravel <i>projectname</i> --prefer-dist
#laravel installer can be installed using composer
composer global require "laravel/installer=~1.1"</pre>

Using Larvel <br>
   <pre> laravel new projectname </pre>


### Laravel App Skeleton
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

storage/	* caches, logs and compiled system files
tests/		* unit and integration tests
                For tests, create file ending with test.php in tests dir. & run ./vendor/bin/phpunit
vendor/		* composer installed dependencies for remote servers
   
.env		* file to dictate the environment variables.
.env.example    * template file that env. duplicates to create .env file
.gitattributes  * git config. file
.gitignore  	* git config. file
artisan/ 	    * file that allows to run artisan commands
composer.json	* user-editable composer's config. file
composer.lock   * not-editable composer's config. file
gulpfile.js		* optional config file for Elixir and Gulp(for compiling & processing frontend assets
package.json	* similar to composer.json for frontend assets
phpunit.xml		* config. file for PHPUnit(tool for testing out of the box)
readme.md	 	* markdown file for Intro. of Laravel
server.php		* backup server for laravel app  to light-weight server 
</pre>



### Using command line Companion: Artisan
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

</div>

<span class="toggle-02 underline cursor-pointer text-blue-700">2. Routing</span>

<div markdown="1"  class="hidden-text-02">
  
### Understanding Routing
<ul>  
    Simple way:  match Path with Closure.<br>
             Example:
    <pre>
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


Route using Controller name and method as a string
   <pre>Route::get('/','GreetingController@index');</pre>  



Route Parameters(variable segment of URL) can be defined in route and passed to closure. 
<br> Example: <br>  
   <pre>Route::get('users/{id}/booklists', function($id){});</pre>   
    	<br>->Order is left to right:    <pre>Route::get('users/{userId}/comments/{commentId}', function($userId,$commentId){});</pre> 
                        <br>->Optional Route parameter with ?
                		    <pre>Route::get('users/{id?}',function($id='fallbackId'){} );</pre>  
	          	<br>->Regular expression route constraints   
			     <pre>Route::get('users/{id}',function($id){ })->where('id','[0-9]+');
Route::get('users/{username}',function($username) { })->where('username','[A-Za-z]+');
Route::get('posts/{id}/{slug}',function($id,$slug){ })->where(['id'=>'[0-9]+', 'slug'=>'[A-Za-z]+']);</pre> 
 

 Route Names 

<br> 
<br>Using URL helper to refer routes: 
<br>

Example:
   <pre> 
&lt; a href="&lt;?php echo url('/'); ?>"> 

</pre> 
		<br>
			//defining route with name in routes/web.php   <br>
		          <pre>Route::get('members/{id}', 'MembersController@show')->name('members.show');</pre>    
  			
			//link the route in a view using route() helper
			<br>   <pre> &lt;a href="&lt;?php echo route('members.show',['id'=>13]); ?>"> </pre>
                <br> To Pass Route Parameters to the route() helper, 
			define the route parameters while using route() helper.<br><br>
				Examples:<br>
					//http://himaliworld.com/users/1/comments/2 
				   <pre>route('users.comments.show',[1,2])
 route('users.comments.show',['userId'=>1,'commentId'=>2]
</pre> 
				//http://himaliworld.com/users/1/comments/2?opt=a
			          <pre>route('users.comments.show',['userId'=>1, 'commentId'=>2, 'opt'=>'a'])</pre> 
        <br>
   </ul> 

</div>





<span class="toggle-03 underline cursor-pointer text-blue-700">3. Authentication</span>

<div markdown="1"  class="hidden-text-03">



#####  Every install of Laravel comes with:a RegisterController, a LoginController, a ForgotPasswordController, and a ResetPasswordController 
   <pre>php artisan make:auth //This auth scaffold seeds 
authentication-related views and routes
 //following files are created
  app/Http/Controllers/HomeController.php
  resources/views/auth/login.blade.php 
  resources/views/auth/register.blade.php
  resources/views/auth/passwords/email.blade.php
  resources/views/auth/passwords/reset.blade.php
  resources/views/layouts/app.blade.php
  resources/views/home.blade.php

php artisan migrate //to run migrations that are by default
</pre>

<h4>User Model and Migration</h4>
Laravel fresh installation contains app/user model and, create_users_table and create_password_resets_table , migrations
   <pre>
//default user migration contains
 Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
//default password reset migration contains
Schema::create('password_resets', function (Blueprint $table) {
            $table->string('email')->index();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });
</pre>
   <pre>
/*defalut user model app/User.php which extends
Illuminate\Foundation\Auth\User class*/

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    protected $fillable = [
        'name', 'email', 'password',
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];
  }

//Illuminate\Foundation\Auth\User look like
namespace Illuminate\Foundation\Auth;

use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as 
AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as 
AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as 
CanResetPasswordContract;

class User extends Model implements
    AuthenticatableContract,
    AuthorizableContract,
    CanResetPasswordContract
{
    use Authenticatable, Authorizable, CanResetPassword, 
MustVerifyEmail;
}
</pre>
#####  Authenticatable Contracts requires methods like 
getAuthIdentifier()<br>
Authorizable Contract requires methods like can()<br>
CanResetPassword Contract requires method 
getEmailForPasswordReset()

Using auth() global helper and the auth Facade<br>
   <pre>
public function dashboard(){
	if(auth()->guest()){ return redirect('sign-up'); }
        return view('dashboard')->with('user',auth()->user());
}
//other ways to check user is: auth()->check(), auth()->user(), 
//auth()->id() return false or null when user is not logged in
</pre>
The Auth Controllers
   <pre>//RegisterController //
  -->$redirectTo property //where to redirect user after registration
  -->validator() method //how to validate registrations
  -->create() method //how to create a new user
  -->RegisterUsers trait 
	->shows user form with showRegistrationForm() mehtod
        ->handles POST of the form with register() method which passes
           the input to validator()method, and then on to the create() method.

//LoginController//
-->AuthentiateUsers trait
   ->shows user login form, validating their logins, throttling failed 
login, handling logouts, and redirecting users after a successful login
  ->showLoginForm() method, login(), validateLogin(), authenticated(), 
username() methods are used
-->ThrottlesLogins trait
   ->an interface to Laravel's Illuminate\Cache\RateLimiter class

//ResetPasswordController//
-->ResetsPasswords trait
	->showResetForm(),reset(), resetPassword(),broker(),guard()

//ForgotPasswordController
-->SendsPasswordResetEmails trait
   ->shows auth.passwords.email form with showLinkRequestForm() method
   ->handles the POST with sendResetLinkEmail() method
</pre>

Auth::routes()
   <pre>//   routes/web.php
	Auth::routes(); //brings in a bundle of predefined routes
</pre>

Remember Me
   <pre>//The users table in the default migration has a remember_token 
column
//without remember me implementation
if(auth()->attempt([
	'email'=>request()->input('email'),
	'password'=>request()->input('password')
	])){
	//successfull login
}

//with remember me checkbox
if(auth()->attempt([
	'email'=>request()->input('email'),
	'password'=>request()->input('password')
	]),request()->has('remember')){
	//the successful login handler
}

//method auth()->viaRemember() can be used to check if a remember token 
was used.
</pre>

Manual Authentication
   <pre>
#auth()->attempt() is used to check the credentials from the user.
#However, in cases like switching users by admin,following methods are used:
#1.passing user ID
auth()->loginUsingId(5);
#2.passing user or other objects that implements Authenticatable contract
auth()->login($user);
</pre>

Auth Middleware
   <pre>#Route middleware are used to restrict certain routes to guests or to authenticated users.
#Route Middleware is defined in app\Http\Kernel as following:
protected $routeMiddleware = [
        'auth' => \Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \Vidhyalaya\Http\Middleware\RedirectIfAuthenticated::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
    ];
#example of routes protected by auth middleware
Route::group(['middleware' => 'auth'], function () {
	Route::get('account', 'AccountController@dashboard');
});
Route::get('login','Auth\LoginController@getLogin')->middleware('guest');
</pre>

Understanding Guards
   <pre># Authentication system is routed through guard, which is 
combination of, a driver that defines how it persists and retrieves the 
auth state like session, and a provider that allows to get a certain 
area like users.
#Laravel has two guards: web and api
#web is basic auth. sytle, uses session driver and the basic user 
provider
#api uses the same basic user provider but the token driver
</pre>

Changing the Default Guard
   <pre>#guards are defined in config/auth.php
#default guard is used any time auth featueres are used.
#to change the default guard change auth.defaults.guard in 
config/auth.php to 
'defaults' => [
	'guard' => 'web', // Change the default here
	'passwords' => 'users',
],
</pre>

Using Other guards without changing the default
   <pre>#start auth calls with guard():
$apiUser = auth()->guard('api')->user();
</pre>

Adding a new Guard
   <pre>#add a new guard auth.guard settings in config/auth.php
 'guards'=>[
	'students'=>[
		'registered' => 'session',
		'provider' => 'students',
	],
  ],
#in an app where  users are students, they have their own users, 
students who can log in to their subdomains.So a separate guard.
</pre>

Creating a Custom User Provider
   <pre>#auth.providers section in config/auth.php defines availabe 
providers.
#creating a new provider look like:
'providers' => [
	'users' => [
	'driver' => 'eloquent',
	'model' => App\User::class,
        ],
 'students' => [
	'driver' => 'eloquent',
	'model' => App\Students::class,
	],
 ],
#in the app, there are users and students, & theny need to be 
authenticated separately as
#auth()->guard(users) and auth()->guard(students)
#auth route middleware can take a guard name as a parameter as:
Route::group(['middleware'=>'auth:students'],function(){
	//students only route here
});
</pre>

Custom User Provider for non-relational Databases
   <pre># a new class needs to be created that implements 
Illuminate\Contracts\Auth\UserProvider interface
#bind it in AuthServiceProvider@boot
auth()->provider('mongo',function($app, array $config){
     //return an instance of UserProvider
	return new MongoUserProvider($app['mongo.connection']);
});
</pre>

Auth Events
   <pre>#Laravel's event system has: system and user generated events.
#auth. events generated by framework look like:
protected $listen = [
	'Illuminate\Auth\Events\Attempting' => [],
	'Illuminate\Auth\Events\Login' => [],
	'Illuminate\Auth\Events\Logout' => [],
	'Illuminate\Auth\Events\Lockout' => [],
];
#listeners for "user attempting login", "successful 
login","logout","lockout"
</pre>



</div>




<span class="toggle-04 underline cursor-pointer text-blue-700">4. Database and Eloquent</span>

<div markdown="1"  class="hidden-text-04">





### Database and Eloquent
Eloquent is a Laravel's ActiveRecord ORM(object-relational mapper).
There is one class per table, which is responsible for retrieving, representing and persisting data in that table.<br>
Configuration File: config/database.php<br>
Database connections: multiple drivers are supported, multiple connections within the same application is also possible.
Other db connections:Asking for specific connection can be done as:   <pre> $users =DB::connection('secondary')->select('select * from users');</pre>

<b>Migrations</b><br>
A migration is a single file that has:<br>
up() method to do its migration and down() method to undo whatever changes the up migration made.

Creating migration   <pre>php artisan make:migration create_users_table
php artisan make:migration add_names_to_users_table --table=users
php artisan make:migration create_users_table --create=users
</pre> 

Creating tables:   <pre>//Everything we do in migration rely on the methods of Schema. Use the create() method to create new table.
Schema::create('tablename', function(Blueprint $table){
	// Create columns here
});</pre>
Creating columns:   <pre>//Bluprint instances can be used for creating columns
Schema::create('users', function(Blueprint $table){
	$table->string('name');
});</pre>


##### Following are some of Blueprint methods:

<pre>integer(colName), tinyInteger(colName), smallInteger(colName), mediumInteger(colName), bigInteger(colName)
string(colName, OPTIONAL length) // adds a varchar type column
binary(colName)	//adds a BLOB type column
boolean(colName)
char(colName,length)
datetime(colName)
decimal(colName, precision, scale)
double(colName, total digits, digits after decimal)
enum(colName,[choice1, choice2])
float(colName)
json(colName) and jsonb(colName)
text(colName), mediumText(colName), longText(colName)
time(colName)
timestamp(colName)
uuid(colName)  //char(36) in MySQL</pre>


##### Other combined blueprint methods:   <pre>softdeletes() //adds a deleted_at timestamp  
morphs(colName) //eg. morphs('tag') adds integer tag_id and string tag_type   
		// used in polymorphic relationships
rememberToken() //adds a remember_token column(Varchar(100)) for user "remember me" tokens
timestamps() and nullableTimestamps()</pre>

##### Adding extra properties   <pre>Schema::table('user',function(Blueprint $table){
$table->string('email')->nullable()->after('last_name');
});</pre>
##### More of the addtional properties are:   <pre>nullable()
default('default content')
unsigned()
first() //places the column first in the column order
$table->index('amount','optional_index_name');</pre>
unique() //adds a unique index
primary()
index()</pre>

Dropping tables:   <pre>Schema::drop('table_name');</pre>
Modifying columns:##### Before,add the doctrine/dbal package in composer.json and update composer
   <pre>//changing string length to 100
Schema::table('users', function($table){
	$table->string('name', 100)->change();
});
//adjusting properties in the method name, eg. making nullable
Schema::table('contacts', function($table){
	$table->string('deleted_at')->nullable()->change();
});
//rename a column
  $table->renameColumn('advancing', 'advanced');
//drop a column
  $table->dropColumn('nickname');
</pre>

Indexes and Foreign keys<br>
   <pre> Adding column indexes in migrations
$table->primary('primary_id'); //unnecessary if present increments()
$table->primary(['first_name','last_name']); //composite keys
$table->unique('email');  //unique index
$table->unique('email', 'optional_index_name');
$table->index('amount'); //basic index
$table->index('amount','optional_index_name');</pre>
##### Removing indexes   <pre>$table->dropPrimary('contacts_id_primary');
$table->dropUnique('contacts_email_unique);
$table->dropIndex('optional_index_name');
$table->dropIndex(['email','amount']);</pre>

##### Adding and Removing Foreign keys   <pre> $table->foreign('user_id')->refernces('id')->on('users');
//specifying foreign key contraints with onDelete() or onUpdate()
$table->foreign('user_id')
	->references('id')
	->on('users')
	->onDelete('cascade');
//dropping an index by referencing its index name(combination of column name and table being referenced)  
$table->dropForeign('contacts_user_id_foreign');
//dropping an index by passing it an array of the fields that it's referencing on the local table
$table->dropForeign(['user_id']);</pre>

Running Migrations   <pre>php artisan migrate
php artisan migrate --seed //runs migration and then seeds
php artisan migrate:install //creates table that tracks migrations status
php artisan migrate:reset  //rolls back all the migrations made by install
php artisan migrate:refresh  //resets and installs
php artisan migrate:rollback --step=1 // rolls back number of migrations specified
php artisan migrate:status</pre>

<b>Seeding</b><br>
dabatase/seeds folder comes with DatabaseSeeder class, which has run() method.
   <pre>//seeding along with migration 
php artisan migrate --seed
php artisan migrate:refresh --seed
//seeding independently
php artisan db:seed
php artisan db:seed --class=ContactsTableSeeder</pre>

##### Creating a Seeder   <pre>php artisan make:seeder ContactsTableSeeder
//creates ContactsTableSeeder in database/seeds directory

//edit database/seeds/DatabaseSeeder.php to run when we run our seeders
	public function run(){
		$this->call(ContactsTableSeeder::class);
	}
//edit the seeder itself in ContactsTableSeeder using DB facade which creates only one record manually
     DB::table('contacts')->insert([
			'name'=> 'abcdef'
			'email' => 'ghi@jkl.mno',
		]);
</pre>
Model Factories: define one or more patterns for creating fake entries for datbase tables   <pre>
$factory->define(User::class, function(Faker\Generator $fake){
	return[	'name' => $faker->name, ];
});
$factory->define('users', function(Faker\Generator $faker){
	return[ 'name' => $faker->name, ];
});</pre>

Creating a Model Factory<br>
Defined in database/factories/ModelFactory.php
   <pre>//simplest factory
$factory->define(Contact::class, function(Faker\Generator $faker){
      return['name' => 'abc def','email'=>'ghi@jkl.mno', ];  
});
//with this we can use factory() global helper to create an instance of Contact in seeding & testing
//create one
$contact = factory(Contact::class)->create();
//create many
factory(Contact::class, 20)->create();

//because the above instances becom repetitive, Fakeer helps randomize the creation of structured fake data
$factory->define(Contact::class, function(Faker\Generator $faker){
	return[  'name' => $faker->name, 'email' => $faker->email, ];  }); 
</pre>

Using a Model Factory
<br>   <pre>//for seeding
//create() saves the instance into database instantly
//make() creates the instance but doesn't yet save it to db
factory(Post::class)->create([
         'title' => 'This is my post'
]);
factory(User::class, 20)->create()->each(function($u) use($post){
	$post->comments()->save(factory(Comment::class)->make(['user_id'=>$u->id]));
});
//using an array to make() or create() overrides specific keys, above sets user_id on the comment and manually set the title of post
//second parameter in factory()helper indicates the creation of more than one instance ...above each()method is used to add a comment from each newly created user
</pre>
##### Accessing multiple model factory types
   <pre>
$factory->define(Contact::class, function(Faker\Generator $faker){
	return [ 'name' => $faker->name, 'email' => $faker->email, ]);
});

//defining model for vip contacts in above factory model
 $factory->defineAs(Contact::class, 'vip', function(Faker\Generator $faker){
   return[
	'name' => $faker->name,
	'email' => $faker->email,
	'vip'  => true,
	];
});
//because there is duplication of data, above can be extended by using $factory->raw()
$factory->defineAs(Contact::class, 'vip',
 function(Faker\Generator $faker) use ($factory) {
	$contact = $factory->raw(Contact::class);
	return array_merge($contact, ['vip' => true]);
  });
//make a specific type
  $vip = factory(Contact::class, 'vip')->create();
  $vip = factory(Contact::class, 'vip', 3)->create();
</pre> 

<b>Query Builder</b><br>
Laravel's db architecture can connect to MySQL, Postgres, SQLite and SQL Server through a single interface.
Fluent Interface is available in Laravel that uses method chaining to provides a simpler API.
   <pre> //non-fluent 
$users = DB::select(['table' => 'users', 'where' => ['type'=> 'tall']]);
//fluent
$users = DB::table('users')->where('type','tall')->get();
</pre>
##### Basic DB Facade usage examples
   <pre>//basic DB facade and statement()
DB::statement('drop table users')
//using raw calls like select(),insert(),update(),delete(), and parameter binding
DB::select('select * from contacts where validated=?',[true]);
//select using fluent builder
$users = DB::table('users')->get();
//joins and other complex calls
DB::table('users')
    ->join('contacts',function($join){
		 $join->on('users.id','=','contacts.user_id')
			->where('contacts.type','tall');
    })
   ->get();
</pre>
##### RAW SQL
   <pre>
//raw select
$users = DB::select('select * from users');
//parameter bindings and named bindings, allows use of PDO parameter
$booksOfCategory = DB::select(
	'select * from books where category = ?',
	[$category]
   );
   //parameters can be named for clarity
 $booksOfCategory = DB::select(
	'select * from books where category = :category',
		['category' => $bookCategory]
	);
//raw insert
    DB::insert(
	'insert into contacts(name,email) values(?,?)',['abc', 'zyx@wvu.tsr']
	);
//raw updates
   $countUpdated = DB::update(
	'update contacts set status= ? where id = ?',
	['tall', $id]
	);
//raw deletes
	$countDeleted = DB::delete(
		'delete from contacts where archived = ?',
		[ture]
	);
</pre>
##### chaining with query builder
   <pre>//methods can be chained together to build a query 
    //at the end of chain get() method to trigger execution of query
    $usersOfType = DB::table('user')
		->where('type', $type)
		->get();
//contraining methods
select(), select() addSelect()
where(), orWhere()
whereBetween(colName,[low,high]) , whereNotBetween(colName,[low,high])
whereIn(colName,[1,2,3]), whereNotIn(colname,[1,2,3])
whereNull(colName), whereNotNull(colName)
whereRaw()    //queries should be carefull used as they are unescaped
	$usageOfRaw = DB::table('contacts')->whereRaw('id = 28346a')->get() 
whereExists()
distinct()
</pre>

</div>


