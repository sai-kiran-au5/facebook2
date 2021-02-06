var database = [
    {
        username: "harry",
        password: "potter"
    },
    {
        username: "clark kent",
        password: "superman"
    },
    {
        username: "wanda",
        password: "vision"
    }
];

var newsfeed = [
    {
        username: "flash",
        timeline: "so tired running"
    },
    {
        username: "tony",
        timeline: "iam ironman"
    }, 
    {
        username: "steve",
        timeline: "i can do this all day"
    }
];

function isUserValid(username, password){
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password){
           return true;
             }
        }  
        return false;
    }
   


function signIn(username, password) {
   if (isUserValid(username, password)){
       console.log(newsfeed);
   } else {
       alert("Sorry, wrong credintials");
   }
}


var userNamePrompt = prompt("username?");
var passwordPrompt = prompt("password?");

signIn(userNamePrompt , passwordPrompt); 