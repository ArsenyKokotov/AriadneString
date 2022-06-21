class ariadneString{
    constructor(bot) {
        this.x=bot.x;
        this.y=bot.y;
    }

    draw(ctx, x, y) {
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.fillRect(x,y,5,5);
        ctx.closePath();
    }

    update(ctx, bot) {
        this.draw(ctx, bot.x+bot.radius+2, bot.y);
    }
}