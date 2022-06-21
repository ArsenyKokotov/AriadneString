class Maze_Drawer{
    constructor(width,height, treasure_color='#FEC576') {
        this.CANVAS_HEIGHT = width;
        this.CANVAS_WIDTH = height;

        this.BLACK = 0;
        this.WHITE = 1;

        this.COLORS = {
                [this.BLACK]: 'black',
                [this.WHITE]: 'white'
        };
        this.PIXEL_RATIO = 20;

        this.treasure_x=0;
        this.treasure_y=0;
        this.draw_treasure=false;
        this.TREASURE_COLOR=treasure_color;
    }
    
    binary_maze() {
        var random_number=0 //1
        let rows=this.CANVAS_HEIGHT/this.PIXEL_RATIO;
        let columns=this.CANVAS_WIDTH/this.PIXEL_RATIO;
        let matrix = Array(rows).fill().map(() => Array(columns).fill(0));


        for (let i=0; i<rows-1; i++) {
            for (let j=0; j<columns-1; j++) {
                random_number=Math.round(Math.random());
                (random_number==0) ? matrix[i+1][j]=1 : matrix[i][j+1]=1;
            }
        }

        return matrix;
    }


    draw(ctx, arr_matrix) {
        const terrain_matrix=arr_matrix;
		ctx.beginPath();
		terrain_matrix.forEach((pixelsRow, rowIndex) => {
			const y = rowIndex * this.PIXEL_RATIO;
			pixelsRow.forEach((pixel, pixelIndex) => {
				const x = pixelIndex * this.PIXEL_RATIO;
				ctx.fillStyle = this.COLORS[pixel];
				ctx.fillRect(x, y, this.PIXEL_RATIO, this.PIXEL_RATIO);
			});
		});
		ctx.closePath();

        if (this.draw_treasure==false) {
            while (ctx.getImageData(this.treasure_x, this.treasure_y, 10, 10).data[0]==0) {
                this.treasure_x= Math.floor(Math.random() * WIDTH);
                this.treasure_y= Math.floor(Math.random() * HEIGHT);
            }
            this.draw_treasure=true;
        }

        if (this.draw_treasure){
            ctx.beginPath();
            ctx.fillStyle=this.TREASURE_COLOR;
            ctx.fillRect(this.treasure_x, this.treasure_y, 10, 10);
            //ctx.stroke();
            ctx.closePath();
        }
    }

}