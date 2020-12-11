class Player{
    constructor(img){
        this.r = 100
        this.x = w/2
        this.y = h - this.r
        this.speed = 2
        this.direction = "still"
        this.img = img
    }
    display(x,y){
        this.x=x-50
        this.y=y-100
        image(this.img, this.x-20, this.y,this.img.width/2, this.img.height/2)

    }
    move(){

        switch(this.direction){
            case "still":
            //dont move anything
            break
            case "up":
            //decrease y pos
            this.y-=this.speed
            break
            case "down":
            //increase y pos
            this.y+=this.speed
            break
            case "right":
            //increasing x pos
            this.x+=this.speed
            break
            case "left":
            //decreasing x pos
            this.x-=this.speed
            break
            default:
            break
                }
        

    }
}