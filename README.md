# Login SignUp Page NodeJS
In this project, I have made a login sign-up page using Node and express JS. I have written all controllers and taken pug as a view engine. I used the MYSQL and knex query builder to store user info in database. I have also used password hashing to encrypt the user password before storing it into database. I have also used `JWT Authentication` while Login and store the JWT key in cookey, so that the user don't need to Login next time.


## Requirements
If you're using Linux-based OS, install the latest version of Nodejs and npm, by typing the following commands on your terminal.
```
sudo apt update
sudo apt install build-essential apt-transport-https lsb-release ca-certificates curl
```
Then, for the Latest release (version 13), add this PPA, by typing the following command on your terminal
```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt install nodejs
```
Then type `npm install` to install all node modules. You can start server by typing `npm start`
