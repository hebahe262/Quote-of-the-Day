
var person = [
    {
        personsaid:" ' Live as if you were to die tomorrow. Learn as if you were to live forever.' ",
        saidBY:'-- Mahatma Gandhi'
    },
  
    {
        personsaid:'“ Without music, life would be a mistake.” ',
        saidBY: '-- Friedrich Nietzsch'
    },
  
    {
        personsaid: "“Be yourself; everyone else is already taken.”",
        saidBY:      "-- Oscar Wilde"
    },
  
    {
        personsaid:  "“So many books, so little time.”",
        saidBY:      ' -- Frank Zappa'
    },

    {
        personsaid: "“You only live once, but if you do it right, once is enough.”",
        saidBY: "--Mae West"
    },

] 


function addText() {    
    var oo =    Math.floor( Math.random() * person.length);
    
    document.getElementById("demo").innerHTML = person[oo].personsaid;
    document.getElementById("sayhi").innerHTML =person[oo].saidBY;
    }






