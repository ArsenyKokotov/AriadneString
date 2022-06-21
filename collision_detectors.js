class CollisionBox{
    constructor(bot, collision_detection_color) {
        this.detections=[];
        this.color=collision_detection_color;
        this.angles=[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
                     1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9];
    }

    getX(center_x, radius, angle) {
        if (angle>0.5 && angle<1.5) {
            return Math.floor(center_x+Math.cos(Math.PI*angle)*radius)-1;
        } else if (angle!=0.5 && angle!=1.5) {
            return Math.floor(center_x+Math.cos(Math.PI*angle)*radius)+1;
        }

        return Math.floor(center_x+Math.cos(Math.PI*angle)*radius);
    }

    getY(center_y, radius, angle) {
        if (angle>0 && angle<1) {
            return Math.floor(center_y-Math.sin(Math.PI*angle)*radius)-1;
        }
        else if (angle!=0 && angle!=1) {
            return Math.floor(center_y-Math.sin(Math.PI*angle)*radius)+1;
        }

        return Math.floor(center_y-Math.sin(Math.PI*angle)*radius);
    }

    update(ctx, bot){

        
        var stop=[false,false,false,false];

        var coord_x=this.angles.map((element, index) => {
            return this.getX(bot.x, bot.radius, element);
        });

        var coord_y=this.angles.map((element, index) => {
            return this.getY(bot.y, bot.radius, element);
        });

        for (let i=0; i<this.angles.length; i++) {
            var imageData = ctx.getImageData(
                coord_x[i],
                coord_y[i],
                1,
                1
            );

            // console.log("------------------");
            // console.log(imageData.data[0]);
            // console.log(imageData.data[1]);
            // console.log(imageData.data[2]);
            // console.log("------------------");

            if (imageData.data[0]==this.color[0] &&
                imageData.data[1]==this.color[1] &&
                imageData.data[2]==this.color[2]) {
                if (this.angles[i]==0) {
                    stop[2]=true;
                } 
                if (this.angles[i]==0.5) {
                    stop[0]=true;
                }
                if (this.angles[i]==1) {
                    stop[1]=true;
                }
                if (this.angles[i]==1.5) {
                    stop[3]=true;
                }
                if (this.angles[i]>0 && this.angles[i]<0.5) {
                    stop[2]=true;
                    stop[0]=true;
                }
                else if (this.angles[i]>0.5 && this.angles[i]<1) {
                    stop[1]=true;
                    stop[0]=true;
                }
                else if (this.angles[i]>1 && this.angles[i]<1.5) {
                    stop[1]=true;
                    stop[3]=true;
                }
                else if (this.angles[i]>1.5) {
                    stop[2]=true;
                    stop[3]=true;
                }
            }
        }


        return stop;
    }
}