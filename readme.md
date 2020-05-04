![](project.gif)


# Application Manager

An interface for the employees of a company to fill in the data into the database and then download it in CSV format.  



# Software Requirements
1. Node.js 8+
2. MongoDB 3.6+ (Recommended 4+)



# dependencies used

1. "bcrypt"
2. "csv-writer"
3. "body-parser"
4. "nodemon"
5. "connect-flash"
6. "connect-mongo"
7. "cookie-parser"
8. "ejs"
9. "express"
10. "express-ejs-layouts"
11. "express-flash-messages"
12. "express-recaptcha"
13. "express-session"
14. "flash"
15. "mongoose"
16. "passport"
17. "passport-local"
18. "request"



# Routes

Routes | Request Body | Method | Description | Response
|---|---|---|---|---|
| [/] | No | POST | User Sign up  | No
| [/users/sign-in/] | (email, password) | POST | User Login | No
| [/users/sign-out/] | No | GET | Logout User | No
| [/users/sign-up/] | (email, password, name, confirm_password) | POST | User Sign Up | No
| [/users/profile/] | No | GET | Get user's details | No
| [/students/create-form/] | No | GET | Get interview home page | No
| [/students/create/] | POST | GET | Get user's details | No


# setup

>         git clone https://github.com/1709abhishek/Interview-Manager
>         cd Interview-Manager
>         run nodemon index.js

# application flow

---- SignUp
---- click on click me a form will appear
---- SignIn
---- click on click me a form will appear
---- click on check students link, the interview registration homepage will appear
---- now under application manager students form click the button to register a student.
---- under interview form click the bottom button to register a company.
---- to the right side of the company (like amazon) a button will appear, click on it to register a student for interview
---- click on the company to get the list of students taking the interview.
---- update the result and submit to change the interview status.
---- Now on interview homepage click download button to download the csv



# Project structure
.

    ├── index.js
    ├── package.json
    ├── assets
    |    ├── css
    |        ├── signUp.css    
    ├── config
        ├── mongoose.js
        ├── middleware.js   
        ├── nodemailer.js   
        ├── passport-local-strategy.js    
    ├── controllers
    |    ├── api
    |        ├── v1
    |            ├── home_controller.js  
    |            ├── users_controller.js          
    ├── mailers
    │   ├── random_mailer.js
    ├── models
    │   ├── user.js
    ├── views
    │   ├── _footer.ejs
        ├── _header.ejs
        ├── home.ejs
        ├── layout.ejs
        ├── reset_password.ejs
        ├── user_profile.ejs
        ├── user_sign_in.ejs
        ├── user_sign_up.ejs
    ├── routes
    |    ├── api
    |        ├── v1
    |            ├── index.js  
    |            ├── users.js
    ├── .gitignore


# Features
Implemented the following for a user with respective html pages:
1. Sign up with email
2. Sign in (you can redirect to a blank home page with a sign out and reset password button after sign in)
3. Forgot password (you can either generate a random password and send on email, or send a reset password link which expires in some time [preferred])
4. Sign out 
5. Reset password after sign in
6. The password stored in the db should be encrypted
7. Taken care of the following
Display notifications for 
--unmatching passwords during sign up
--incorrect password during sign in
8. enable re-captcha on both sign up and log in
9. enable nodemailer for mailing



# Bugs or improvements
Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

