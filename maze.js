class Maze_Drawer{
    constructor(width,height) {
        this.CANVAS_HEIGHT = width;
        this.CANVAS_WIDTH = height;

        this.BLACK = 0;
        this.WHITE = 1;

        this.COLORS = {
                [this.BLACK]: 'black',
                [this.WHITE]: 'white'
        };
        this.PIXEL_RATIO = 10;
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
	}

}