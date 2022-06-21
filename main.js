
const WIDTH=800;
const HEIGHT=800;

const BOT_X=400;
const BOT_Y=400;
const BOT_R=3;

var botCanvas=document.getElementById("myCanvas");

var ctx = botCanvas.getContext("2d");
botCanvas.width = WIDTH;
botCanvas.height=HEIGHT;

var bot = new Bot(BOT_X,BOT_Y,BOT_R);
var maze = new Maze_Drawer(WIDTH, HEIGHT);
const matrix=maze.binary_maze();

animate();  //<===================UNCOMMENT FOR BOT


function animate(){
    bot.update([HEIGHT,WIDTH],ctx);
    botCanvas.width = WIDTH;
    botCanvas.height = HEIGHT;
    ctx.save();

    maze.draw(ctx, matrix);
    
    bot.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}