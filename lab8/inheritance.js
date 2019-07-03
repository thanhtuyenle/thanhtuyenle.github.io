(function(){
    "use strict";
    function createBicyclePrototye() {
        let speed = 0; 
        return {
            speed: function(){
                return speed;
            },
            applyBrake: function(x){
                speed -= x;
                if(speed < 0){
                    speed = 0;
                }
            },
            speedup: function(y){
                speed += y;
            }
        }
    }
    function createMountainBikeProtoype(prototype){
        let obj = Object.create(prototype);
        obj.gear = 1;
        obj.setGear = function(x){
            this.gear = x;
        }
        return obj;
    }
    function start(){
        let bicyclePrototype = createBicyclePrototye();
        let mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);
        let bike = Object.create(bicyclePrototype);
        let mountainBike = Object.create(mountainBikePrototype);
        console.log("Bicycle has speed: " + bike.speed());
        bike.speedup(5);
        console.log("Bicycle has increased bike.speedup(5) : " + bike.speed());
        bike.applyBrake(2);
        console.log("Bicycle has decreased the current speed bike.applyBrake(2): " + bike.speed());
        bike.applyBrake(4);
        console.log("Bicycle has decreased the current speed bike.applyBrake(4): " + bike.speed());

        console.log("Mountain bike has gear: " + mountainBike.gear);
        mountainBike.setGear(10);
        console.log("Mountain bike just set gear to setGear(10): " + mountainBike.gear);
        console.log("Mountain bike has the current speed 0: " + mountainBike.speed());
        mountainBike.speedup(20);
        console.log("Mountain bike has increased speed speedup(20): " + mountainBike.speed());
        mountainBike.applyBrake(15);
        console.log("Mountain bike has decreased speed to applyBrake(15): " + mountainBike.speed());
    }
    start();
})();