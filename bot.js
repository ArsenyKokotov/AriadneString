class Bot{
    constructor(x,y,radius,color='red'){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;

        this.speedX = 0;
        this.speedY = 0;
        this.speed = 1;

        this.COLLISION_COLOR=[0,0,0];

        this.controls=new Controls();

        this.box=new CollisionBox(this, this.COLLISION_COLOR);
        this.aString=new ariadneString(this);
    }

    update(canvas_borders,ctx) {
        var stop = this.box.update(ctx, this);
        this.aString.update(ctx, this);
        this.#move(canvas_borders, stop);
    }

    #move(canvas_borders, stop) {
        if(this.controls.forward && this.y-this.radius>0 && stop[0]==false){
            this.speedY=this.speed;
        }
        if(this.controls.reverse && this.y+this.radius<canvas_borders[1] && stop[3]==false){
            this.speedY=-this.speed;
        }
        if(this.controls.right && this.x+this.radius<canvas_borders[0] && stop[2]==false){
            this.speedX=-this.speed;
        }
        if(this.controls.left && this.x-this.radius>0 && stop[1]==false){
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
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle=this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
}