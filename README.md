mailingproxy
============

nodejs proxy service to send emails

It now gets the email data from redis pub/sub
* install
````
npm install mailingproxy
````
* usage:
** copy config.json.example to config.json and update the configurations
** run "node app.js" or start it using forever
** redis publishes the correct json email data
** email should be sent 
