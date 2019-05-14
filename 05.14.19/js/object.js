class Car{
    constructor(marka,model,color,tank,consumption){
        this.marka = marka;
        this.model = model;
        this.color = color;
        this.tank = tank;
        this.consumption = consumption;
        this.initialFuelLevel =40;
      
    }
    endFuelLevel(km) {
        var endFuel = this.initialFuelLevel - this.consumption * km / 100;
if(endFuel>=0){
    return endFuel;
}else{
    return "bakda kifayet qeder benzin yoxdu";
}
    
}
Servis(yanacaq){
    if(this.initialFuelLevel < this.tank){
        this.tank=this.initialFuelLevel+yanacaq;
         
        return yanacaq;
    }else{
        return "bak doludur"

    }
}

}
var mercedec = new Car("mercedec", "190", "red", 70,10);
 
// mercedec.initialFuelLevel=40
console.log(mercedec.Servis(60))