class Mango
{
constructor(a,b,c,d)
    {
var options = {
    isStatic : true, restitution: 0, friction: 1
    
}
this.x = a
this.y = b
this.w = c
this.h = d 
this.body = Bodies.rectangle(a, b, c, d, options)
this.image = loadImage("images/mango.png")
World.add(world,this.body)
    }










display()
    {
        //Pos is used to store the position of the body
        var Mangopos = this.body.position
        imageMode(CENTER)
        fill ("yellow")
        image(this.image, Mangopos.x, Mangopos.y, this.w, this.h)
    }
}