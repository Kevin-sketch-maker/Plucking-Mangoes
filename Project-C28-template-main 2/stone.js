class Stone
{
constructor(a,b,c)
    {
var options = {
    isStatic : false,
    friction: 0.23576543,
    restitution: 0,
    density: 1
    
}
this.x = a
this.y = b
this.r = c
this.body = Bodies.circle(a, b, c, options)
//this.image = loadImage("images/stone.png")
World.add(world,this.body)
    }










display()
    {
        //Pos is used to store the position of the body
        var Stonepos = this.body.position
        ellipseMode(RADIUS)
        fill ("brown")
        ellipse(Stonepos.x, Stonepos.y, this.r, this.r)
        //image(this.image, Stonepos.x, Stonepos.y, this.w, this.h)

    }
}