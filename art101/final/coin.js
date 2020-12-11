class Coin{
    constructor(img){
        this.r = 50
        this.x = random(w)
        this.y = 0 - this.r
        this.img = img
    }
    display(){
        
        image(this.img, this.x, this.y,this.img.width/2, this.img.height/2)
    }
    move(){
        this.y = this.y + 0.5
    }
}