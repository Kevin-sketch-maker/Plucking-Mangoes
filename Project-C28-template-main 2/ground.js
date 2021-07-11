class Ground
{
constructor(a,b,c,d)
    {
var options = {
    isStatic : true
    
}
this.x = a
this.y = b
this.w = c
this.h = d 
this.body = Bodies.rectangle(a, b, c, d, options)
World.add(world,this.body)
    }










display()
    {
        //Pos is used to store the position of the body
        var Groundpos = this.body.position
        rectMode(CENTER)
        fill ("brown")
        rect(Groundpos.x, Groundpos.y, this.w, this.h)
    }
}