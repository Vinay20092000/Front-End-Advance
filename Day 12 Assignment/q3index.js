let usersArray = [{uname : "jatin jobs", email : "STevE@gmail.com", cardId  : ""},
                  {uname : "sangam nadela", email : "sang@Gmail.com", cardId : ""},
                  {uname : "Vinay m b", email: "ViNmB@gmail.com", cardId : ""},
                  {uname : "steve kumar", email : "Steve@Gmail.com", cardId : ""},
                  {uname : "deloitte", email : "deloitte@deloitte.com", cardId : ""}];

const { v4: uuidv4 } = require('uuid');
const jsConvert = require('js-convert-case');

for (items of usersArray)
{
    items.cardId=uuidv4();
}

for (items of usersArray)
{
    var str = "User Id = "+jsConvert.toHeaderCase(items.uname)+","+ " Email = "+jsConvert.toLowerCase(items.email)+","+ " cardId = "+jsConvert.toUpperCase(items.cardId)+".";
    console.log(str);
}
