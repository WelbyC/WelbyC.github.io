class Timemachine{
    constructor(img){
        this.r = 90
        this.x = 0 - this.r
        this.y = random(w) 
        this.img = img
    }
    display(){
        
        image(this.img, this.x, this.y,this.img.width/2, this.img.height/2)
    }
    move(){
        this.x = this.x + 0.5
    }
}