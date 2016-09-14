# _m0ck_cl13nt_ap1
npm install 
```js
var client = require('_m0ck_cl13nt_ap1');
```
All callbacks has the same arguement error, body, & statusCode

## Login

```js
client.auth.postLogin(requestBody, function(error, body, statusCode) {
    // do logic here  
    if(err) {
      // Unauthorized
    } else {
      // Authrorized
    }
});
```

## Users
### Get all
```js
client.users.getUsers(function(error, body, statusCode) {
    if(error) {
        // No Record Found
    } else {
        // display Users
    }
});
```

### Add
```js
client.users.postCreateUser({formData}, function(error, body, statusCode) {
    if(error) {
        // No Record Found
    } else {
        // display Users
    }
});
```
### Update By Id
```js
client.users.putUpdateUser({formData}, function(error, body, statusCode) {
    if(error) {
        // No Record Found
    } else {
        // display Users
    }
});
```
### Get one
```js
client.users.getUserById({userId}, function(error, body, statusCode) {
    if(error) {
        // No Record Found
    } else {
        /// Display User
    }
});
```
