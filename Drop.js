class Drops{
    constructor(x,y,r){
        this.rain=Bodies.circle(x,y,5,options)
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
    
            }
            this.x=x
            this.y=y
            this.r=r
            this.body=Bodies.circle(this.x,this.y,this.r/2,options)
            World .add(world,this.body)
            
    }
    update(){
        if(this.rain.position.y>height){
    
            Matter .body.setPosition(this.rain,{x:random (0,400), y:random(0,400)})
    
        }
    }

}