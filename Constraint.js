class Constraint_class {
    constructor(bodyA,pointB){

var options={

    bodyA: bodyA,
    pointB: pointB,
    stiffness:0.004,
    length:20
}

this.constraint = Constraint.create(options);
World.add(world,this.constraint);
    }
    display(){
        if(this.constraint.bodyA){
        var pointA=this.constraint.bodyA.position;
        var pointB=this.constraint.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
    fly(){
        this.constraint.bodyA=null;
    }

    attach(bodyA){
        this.constraint.bodyA=body;
    }
}
