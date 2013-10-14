mailingproxy
============

nodejs proxy service to send emails

Gets the email data from redis pub/sub and send it.

# install
```
npm install mailingproxy
```
# usage:
## copy config.json.example to config.json and update the configurations
## run "node app.js" or start it using forever
## redis publishes the correct json email data
## email should be sent 
