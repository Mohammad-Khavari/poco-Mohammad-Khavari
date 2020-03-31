var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for(var i = 0; i< officeItems.length; i++){
    console.log(officeItems)
}


for( var i = 0; i <101; i++){
    
    if ( i % 2 === 0){
        
        console.log( "this number is even " + i )
        
    }
    
    if ( i % 2 != 0 ){
        
        console.log("This number is odd " + i)
    }
    
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
       name: "Mike",
       age: 12,
       gender: "male"
     },{
       name: "Madeline",
       age: 80,
       gender: "female"
     },{
       name: "Cheryl",
       age: 22,
       gender: "female"
     },{
       name: "Sam",
       age: 30,
       gender: "male"
     },{
       name: "Suzy",
       age: 4,
       gender: "female"
     }
   ]
   
   for( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
       
       if ( peopleWhoWantToSeeMadMaxFuryRoad[i] > 18 ){
           console.log("not old enough!")
       }
   }