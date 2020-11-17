document.getElementById("mots").addEventListener('submit', function(e) {
    e.preventDefault();
    var error;
    var Big = document.getElementById("Big");
    var Tall = document.getElementById("Tall");
    var Expensive = document.getElementById("Expensive");
    var Thick = document.getElementById("Thick");
    var Wide = document.getElementById("Wide");
    var Good = document.getElementById("Good");
    var Far = document.getElementById("Far");
    var Clean = document.getElementById("Clean");
    var Wet = document.getElementById("Wet");
    var Delicious = document.getElementById("Delicious");
    var Sunny = document.getElementById("Sunny");
    var Interesting = document.getElementById("Interesting");
    var Lazy = document.getElementById("Lazy");
    var Generous = document.getElementById("Generous");
    var Friendly = document.getElementById("Friendly");
    var Possible = document.getElementById("Possible");
    var Regular = document.getElementById("Regular");
    var Legal = document.getElementById("Legal");
    var High = document.getElementById("High");
    var Thick = document.getElementById("Thick");
    var Convenient = document.getElementById("Convenient");
    var Deep = document.getElementById("Deep");
    var Ugly = document.getElementById("Ugly");
    var Stupid = document.getElementById("Stupid");
    var Hot = document.getElementById("Hot");
    var Warm = document.getElementById("Warm");
    var Late = document.getElementById("Late");
    var Long = document.getElementById("Long");
    var Optimistic = document.getElementById("Optimistic");
    var Openminded = document.getElementById("minded");
    var Bright = document.getElementById("Bright");
    var Open = document.getElementById("Open");
    var Spicy = document.getElementById("Spicy");
    var Strong = document.getElementById("Strong");
    var Modern = document.getElementById("Modern");
    var Fat = document.getElementById("Fatoverweight");
    var Great = document.getElementById("Thatgreat");
    var Old = document.getElementById("Old");
    var Hard = document.getElementById("Hard");
    var Empty = document.getElementById("Empty");
    var Right = document.getElementById("Right");
    var Noisy = document.getElementById("Noisy");
    var Awake = document.getElementById("Awake");
    var Real = document.getElementById("Real");
    var Hungry = document.getElementById("Hungry");
    var Light = document.getElementById("Light");


    if (Big.value == "small" && 
    Tall.value == "short" && 
    Expensive.value == "cheap" && 
    Thick.value == "thin" && 
    Wide.value == "narrow" && 
    Good.value == "bad" && 
    Far.value == "near" && 
    Clean.value == "durty" && 
    Wet.value == "dry" && 
    Delicious.value == "disgusty" &&
    Sunny.value == "cloudy" &&
    Interesting.value == "boring" &&
    Lazy.value == "hard working" &&
    Generous.value == "stinguy" && 
    Friendly.value == "unfriendly" && 
    Possible.value == "impossible" && 
    Regular.value == "iregular" && 
    Legal.value == "illegal" && 
    High.value == "low" && 
    Convenient.value == "inconvenient" && 
    Deep.value == "shallow" && 
    Ugly.value == "beautiful" && 
    Stupid.value == "clever" && 
    Hot.value == "cold" && 
    Warm.value == "cool" && 
    Late.value == "early" && 
    Long.value == "short" && 
    Optimistic.value == "pessimistic" && 
    Openminded.value == "narrow minded" && 
    Open.value == "close" &&
    Bright.value == "dark" && 
    Spicy.value == "mild" && 
    Strong.value == "weak" && 
    Modern.value == "old" && 
    Fat.value == "slim" && 
    Great.value == "terrible new" && 
    Old.value == "young" && 
    Hard.value == "soft" && 
    Empty.value == "full" && 
    Right.value == "left" && 
    Noisy.value == "quiet" && 
    Awake.value == "asleep" && 
    Real.value == "fake" && 
    Hungry.value == "full" && 
    Light.value == "heavy") {
    
    error = "Tout est bon :)";
    } else {
    error = "rr" ;
   }

   if (error) {
    document.getElementById("error").innerHTML = error; 
   }
  
});
