setInterval(createSnowFlake, 100)

function createSnowFlake(){

    const snow_flake = document.createElement('i');
    snow_flake.classList.add('snowflake');
    snow_flake.style.left = Math.random() * window.innerWidth + "px";
    snow_flake.style.animationDuration = Math.random() * 2 + 4 + 's'; //between 4 - 8 seconds
    snow_flake.style.opacity = Math.random;

    //select random number between 20 and 60
    var size = Math.random() * 3 + 20;

   //set width and height
   snow_flake.style.width = size + "px";
   snow_flake.style.height = size + "px";

    document.body.appendChild(snow_flake);

    
    //removes snowflakes after 10 seconds to prevent lag
   setTimeout(() => {
      snow_flake.remove();
   }, 10000)

}


