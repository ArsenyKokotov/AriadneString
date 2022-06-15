
const WIDTH=800;
const HEIGHT=800;

const BOT_X=400;
const BOT_Y=400;
const BOT_R=20;

var botCanvas=document.getElementById("myCanvas");

var ctx = botCanvas.getContext("2d");
botCanvas.width = WIDTH;
botCanvas.height=HEIGHT;

var bot = new Bot(BOT_X,BOT_Y,BOT_R, "blue");
//animate();  <===================UNCOMMENT FOR BOT

function animate(){
    bot.update([HEIGHT,WIDTH]);
    botCanvas.width = WIDTH;
    botCanvas.height=HEIGHT;
    bot.draw(ctx);
    requestAnimationFrame(animate);
}