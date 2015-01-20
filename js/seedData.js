$(document).ready(function() {
  var user = { 
    "_id": "54b97993ecee20abfe48166d", 
    "name": "Kerri Hess", 
    "picture": "http://placehold.it/32x32", 
    "gender": "female", 
    "age": 28, 
    "greeting": "Hello, Kerri Hess! You have 8 unread messages.", 
    "email": "kerrihess@cosmosis.com", 
    "eyeColor": "green", 
    "phone": "+1 (999) 556-3308", 
    "favoriteFruit": "apple", 
    "balance": "$1,109.73", 
    "guid": "ee9a82c0-df07-439e-8a83-6bec20e1536d", 
    "friends": [
      {
        "id": 0, 
        "name": "Serena Mccray"
      }, 
      {
        "id": 1, 
        "name": "Peters Galloway"
      }, 
      {
        "id": 2, 
        "name": "Pope Flynn"
      }
    ], 
    "company": "COSMOSIS", 
    "isActive": false
  };

  $.post("/users", {user: user}, function(data) { console.log(data); });
}); 