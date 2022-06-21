class ariadneString{
    constructor(bot) {
        this.x=bot.x;
        this.y=bot.y;
    }

    draw(ctx, x, y) {
        //ctx.save();
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.fillRect(x,y,5,5);
        ctx.stroke();
        //ctx.restore();
    }

    update(ctx, bot) {
        this.draw(ctx, bot.x, bot.y);
        //console.log("draw");
    }
}