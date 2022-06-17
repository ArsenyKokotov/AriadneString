class CollisionBox{
    constructor(bot) {
        // this.x=bot.x-bot.radius;
        // this.y=bot.y-bot.radius;
        
        // this.xx = this.width*Math.cos(angle);
        // this.yy = this.width*Math.sin(angle);
        this.lines=[];
        this.detections=[];
    }

    update(ctx){
        this.#newCoord();

        const imageDataUpperLine = ctx.getImageData(this.lines[0][0].x, this.lines[0][0].y, 1, 2*bot.radius);
        const imageDataLeftLine = ctx.getImageData(this.lines[1][0].x, this.lines[1][0].y, 1, 2*bot.radius);
        const imageDataRightLine = ctx.getImageData(this.lines[2][0].x, this.lines[2][0].y, 1, 2*bot.radius);
        const imageDataBottomLine = ctx.getImageData(this.lines[3][0].x, this.lines[3][0].y, 1, 2*bot.radius);
        
        var stop=[false,false,false,false];
        
        if (imageDataUpperLine.data[0]==0 && imageDataUpperLine.data[1]==0) {
            stop[0]=true;
            console.log("a");
        }
        if (imageDataLeftLine.data[0]==0 && imageDataLeftLine.data[1]==0) {
            stop[1]=true;
            console.log("b");
        }
        if (imageDataRightLine.data[0]==0 && imageDataRightLine.data[1]==0) {
            stop[2]=true;
            console.log("c");
        }
        if (imageDataBottomLine.data[0]==0 && imageDataBottomLine.data[1]==0) {
            stop[3]=true;
            console.log("d");
        }

        return stop;
    }

    #newCoord() {
        this.lines=[];

        //Upper horizontal line
        const start_1 = {x: bot.x-bot.radius, y:bot.y-bot.radius};
        const end_1 =  {x: bot.x+bot.radius, y:bot.y-bot.radius};
        const line_1 = [start_1, end_1];

        //left vertical line
        const start_2 = {x: bot.x-bot.radius, y:bot.y-bot.radius};
        const end_2 =  {x: bot.x-bot.radius, y:bot.y+bot.radius};
        const line_2 = [start_2, end_2];

        //right vertical line
        const start_3 = {x: bot.x+bot.radius, y:bot.y-bot.radius};
        const end_3 =  {x: bot.x+bot.radius, y:bot.y+bot.radius};
        const line_3 = [start_3, end_3];

        //bottom horizontal line
        const start_4 = {x: bot.x-bot.radius, y:bot.y+bot.radius};
        const end_4 =  {x: bot.x+bot.radius, y:bot.y+bot.radius};
        const line_4 = [start_4, end_4];

        this.lines.push(line_1, line_2, line_3, line_4);

    }

    draw(ctx) {
        ctx.save();
        for (let i=0; i<this.lines.length; i++) {
            ctx.beginPath();
            ctx.moveTo(this.lines[i][0].x, this.lines[i][0].y);
            ctx.lineTo(this.lines[i][1].x, this.lines[i][1].y);
            ctx.stroke();
        }
    }
}