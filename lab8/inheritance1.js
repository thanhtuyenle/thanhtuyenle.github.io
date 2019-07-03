"use strict";
(function (){ 
    function Bicycle()
    {
        this.speed = 0;
    }

    Bicycle.prototype.applyBrake = function(x){
        this.speed -= x;
        if (this.speed < 0){
            this.speed = 0;
        }
    }

    Bicycle.prototype.speedup = function(y){
        this.speed += y;
    }

    function MountainBike(){
        Bicycle.call(this);
        this.gear = 1;
    }

    MountainBike.prototype = Object.create(Bicycle.prototype);

    MountainBike.prototype.setGear = function(z) {
        this.gear = z;
    }

    const bike = new Bicycle();
    const mountainBike = new MountainBike();
    
    console.log("Bicycle has speed: " + bike.speed);
    bike.speedup(5);
    console.log("Bicycle has increased bike.speedup(5) : " + bike.speed);
    bike.applyBrake(2);
    console.log("Bicycle has decreased the current speed bike.applyBrake(2): " + bike.speed);
    bike.applyBrake(4);
    console.log("Bicycle has decreased the current speed bike.applyBrake(4): " + bike.speed);

    console.log("Mountain bike has gear: " + mountainBike.gear);
    mountainBike.setGear(10);
    console.log("Mountain bike just set gear to setGear(10): " + mountainBike.gear);
    console.log("Mountain bike has the current speed 0: " + mountainBike.speed);
    mountainBike.speedup(20);
    console.log("Mountain bike has increased speed speedup(20): " + mountainBike.speed);
    mountainBike.applyBrake(15);
    console.log("Mountain bike has decreased speed to applyBrake(15): " + mountainBike.speed);
})();

