---
layout: post
title: Laravel's Authentication System 
categories: Framework
image: login.png
---

<h4>User Authentication System basically includes: registration, login, sessions, password resets, and access permissions.</h4>
<!--continue-->

<h5> Every install of Laravel comes with:a RegisterController, a LoginController, a ForgotPasswordController, and a ResetPasswordController </h5>
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
<h5> Authenticatable Contracts requires methods like 
getAuthIdentifier()<br>
Authorizable Contract requires methods like can()<br>
CanResetPassword Contract requires method 
getEmailForPasswordReset()</h5>

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
