// Add your Circle class here
class Circle{
constructor(radius){
    this.radius=radius;
}
get diameter(){
    return this.radius * 2;
}

get circumference(){
    return Math.PI*this.diameter;
}
get area(){
    return Math.PI*this.radius*this.radius ;
}

set diameter(newDiameter){ 
    return this.radius=newDiameter/2;
    }

set circumference(newCircumfurence){
    return this.radius= (newCircumfurence/Math.PI)/2
}
}



