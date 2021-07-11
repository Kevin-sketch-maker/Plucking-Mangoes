
class Tree
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
this.image = loadImage("images/tree.png")
World.add(world,this.body)
    }










display()
    {
        //Pos is used to store the position of the body
        var Treepos = this.body.position
        imageMode(CENTER)
        fill ("brown")
        image(this.image, Treepos.x, Treepos.y, this.w, this.h)
    }
}