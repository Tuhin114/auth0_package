# auth0_package

The **auth0_package** is a npm package designed to simplify the setup of authentication routes (login, signup, and logout) in your project. After installation, it creates a separate folder in your project root directory and makes necessary changes to index.js, allowing you to test these routes directly without additional coding.

# Process

## Important Notes : 
- This npm package is only designed to use with **react.js + javascript**. 
- In future versions it will be available for all popular tech stack.

## Quick Installation : 

- `npm i auth0_package`
- `npx auth0_package`
- `npm install express mongoose jsonwebtoken bcryptjs dotenv cors cookie-parser`
- Go to `.env` file in your project(which is generated from the auth-package) and here you have to give `MONGO_URI` and `JWT_SECRET`.
- All done 👍. Now run your server.

## Docs :

## Installation in details
- It is advised not to create any files for your project initially after `npm init -y`. This npm package automatically creates an index.js file to run the auth routes, so installing the package first is recommended.
- installation cmd :
```bash
  npm i auth0_package
  npx auth0_package
```

- Now after successful installation of the package you have to install some packages to run your project.
```bash
  npm install express mongoose jsonwebtoken bcryptjs dotenv cors cookie-parser nodemon
```


- Why these packages are necessary?

**`express`** : Express is used to create the web server and handle routing. It provides a simple way to define routes for login, signup, and logout, which are core features of your authentication package.

**`mongoose`** : Mongoose is used to interact with MongoDB. It allows for defining schemas and models for users, managing data relationships, and performing database operations, which are crucial for storing and retrieving user information securely.

**`jsonwebtoken`** : JSON Web Token (JWT) is used for token-based authentication. It helps in securely transmitting information between parties as a JSON object. This is essential for managing user sessions and ensuring that only authenticated users can access certain routes. 

**`bcryptjs`** : bcrypt.js is used for hashing and comparing passwords. It ensures that user passwords are stored securely in the database, protecting against potential breaches. 

**`dotenv`** : dotenv is used to manage environment variables. It allows you to keep sensitive data such as JWT secrets and database URLs out of your codebase, enhancing security and flexibility.

**`cors`** :  CORS (Cross-Origin Resource Sharing) middleware is used to enable requests from different origins. This is important for your project if you want to allow your frontend application (hosted on a different domain) to communicate with your backend server. 

**`cookie-parser`**: cookie-parser is used to parse cookies attached to client requests. This is useful for handling session cookies and other cookie-based authentication mechanisms.

**`nodemon`** : nodemon is used during development to automatically restart the server when file changes are detected. This enhances productivity by eliminating the need to manually restart the server after every change.

- Althogh `nodemon` is not required to run this package but it makes your experiance better.

- Change the `package.json` file to use the nodemon.

```bash
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
  },
  "type": "module",
```

![img1](https://github.com/Tuhin114/auth0_package/blob/main/assets/img1.png?raw=true)

## After completing the all installation
- Your folder structure will look like this.

![img2](https://github.com/Tuhin114/auth0_package/blob/main/assets/img2.png?raw=true)

**`config`** : It is basically for connecting mongoDB database.

**`controllers`** : It has one file named authController.js which handles all the Login,Logout and Signup process.

| **Function**     | **Parameter**                                                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| `SignUp`       | **`Required`**`fullName`,`username`,`email`,`password`. |
| `Login`      | **`Required`** `username`, `password`|
| `Logout`      | Nothing Required|

- You can modify all the functions as all the code is available. Add variables or parameters as needed, and update the user model and function code accordingly.

- **In updated versions of this package, we will try to give customizations of this parameters.**


**`middleware`** :The protectRoute middleware function verifies the JWT token from cookies, retrieves the corresponding user from the database, and attaches the user object to the request for protected routes. 

**`models`** : user models.
| **Fields**     | **Data types**                                                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| `username`      | **`Required`** String|
| `fullName`      | **`Required`** String|
| `password`      | **`Required`** String **min length 6**|
| `email`         | **`Required`** String|


**`routes`** :The code sets up an Express router with routes for user authentication (/signup, /login, /logout) and a protected route (/me) using the protectRoute middleware to retrieve the authenticated user's details(This /me is in development mode..so you will not get it in your package..but you can add it my yourself..protectRoute middleware is available for your use.).

| **Routes**     | **Method**                                                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| `/signup`      | Post|
| `/login`       | Post|
| `/logout`      | Post|


**`utils`** :  The generateTokenAndSetCookie function creates a JWT for a given user ID, sets it as an HTTP-only, same-site cookie with a 15-day expiration on the response, enhancing security against XSS and CSRF attacks. 

- You will also get a .env file (**You should use the the .env file which is generated from the auth-package not you previous .env file**).

| **env**     | **Description**                                                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| `MONGO_URI`       | **`Required`** URI for connecting to your MongoDB database. |
| `JWT_SECRET`      | **`Required`** contains the secret key used to sign and verify JSON Web Tokens (JWT).|
| `NODE_ENV`      | By default Development|
| `PORT`      | You can change you server port or by default 3000|

Now all is set you can run your server by `npm run dev` and test your server by Postman or other applications.

## For demo you can see this Video

[![Watch the video](https://drive.google.com/file/d/1jaJ-6yBY-SlTsnyYdHlSym_wXqRiCfHt/view?usp=sharing)](https://drive.google.com/file/d/1jVDjMoHkkbLzPYuKxIyVnbZTUQLuX9Bs/view?usp=sharing)

## Created by :

### Tuhin Poddar
