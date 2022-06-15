class Bot{
    constructor(x,y,radius,color="red"){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;

        this.speedX = 0;
        this.speedY = 0;
        this.speed = 10;
        this.acceleration=0.2;
        this.maxSpeed=3;
        //this.friction=0.05;


        this.controls=new Controls();
    }

    update(canvas_borders) {
        this.#move(canvas_borders);
    }

    #move(canvas_borders) {
        if(this.controls.forward && this.y-this.radius>0){
            this.speedY=this.speed;
        }
        if(this.controls.reverse && this.y+this.radius<canvas_borders[1]){
            this.speedY=-this.speed;
        }
        if(this.controls.right && this.x+this.radius<canvas_borders[0]){
            this.speedX=-this.speed;
        }
        if(this.controls.left && this.x-this.radius>0){
            this.speedX=this.speed;
        }

        this.x-=this.speedX;
        this.y-=this.speedY;

        this.speedX=0;
        this.speedY=0;
    }



    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle=this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

    }
}