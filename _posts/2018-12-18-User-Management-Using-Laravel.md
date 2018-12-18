---
layout: post
title: Basic User Authentication System with Laravel
categories: Framework
---

<h4>User Authentication System basically includes: registration, login, sessions, password resets, and access permissions.</h4>

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


