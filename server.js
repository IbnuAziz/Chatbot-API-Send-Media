const { Client, MessageMedia } = require('whatsapp-web.js');
const express = require('express');
const http = require ('http');
const qrcode = require('qrcode');
const fs = require('fs');
const socketio = require('socket.io');
const { url } = require('inspector');

const reply = require('./helpers/chatReply')

//manggil server
const app = express();
const server = http.createServer(app);
const io = socketio (server);

// function getimageAll() {
//     const dirnameExportImg = './images';
    
//     fs.readdir(dirnameExportImg, function (err, files) {
//       if (err) {
//         console.log(err)
//       }
//       files.map(
//         (file) => { console.log(file) }
//       )
//     })
// }

// getimageAll()


app.get('/', function (req,res) {
    res.sendFile('index.html', {root:__dirname });
    // res.status(200).json ({
    //     status:true,
    //     message:'not just hallo'
    // });
});

//session (fs)

const SESSION_FILE_PATH = './session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}

const client = new Client({
    restartOnAuthFail: true, 
    puppeteer: { 
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process', // <- this one doesn't works in Windows
            '--disable-gpu'
        ],
    }, session: sessionCfg });


//menangkap session

//isi chat
const media = MessageMedia.fromFilePath('./cancer.png');
const media1 = MessageMedia.fromFilePath('./images/Image1.jpeg');
const media2 = MessageMedia.fromFilePath('./images/Image2.jpeg');
const media3 = MessageMedia.fromFilePath('./images/Image3.jpeg');
const media4 = MessageMedia.fromFilePath('./images/Image4.jpeg');
const media5 = MessageMedia.fromFilePath('./images/Image5.jpeg');
const media6 = MessageMedia.fromFilePath('./images/Image6.jpeg');
const media7 = MessageMedia.fromFilePath('./images/Image7.jpeg');
const media8 = MessageMedia.fromFilePath('./images/Image8.jpeg');
const media9 = MessageMedia.fromFilePath('./images/Image9.jpeg');


const db = require('./helpers/chatReply')

client.on('message', async msg => {
    const keyword = msg.body;
    const replydata = await db.getData(keyword)
    const showallData = await db.getallData(keyword)
    const imageReply = await reply.replyImage(keyword)
    const yesReply = await reply.replyYes(keyword)

    if(showallData !== false){
        msg.reply(showallData)
    }else if(replydata !== false){
        msg.reply(replydata)
    }else if(keyword == 'G'){
        msg.reply(imageReply)
            setTimeout(() => {
                client.sendMessage(msg.from, media1)
                client.sendMessage(msg.from, media2)
                client.sendMessage(msg.from, media3)
                client.sendMessage(msg.from, media4)
                client.sendMessage(msg.from, media5)
                client.sendMessage(msg.from, media6)
                client.sendMessage(msg.from, media7)
                client.sendMessage(msg.from, media8)
                client.sendMessage(msg.from, media9)
            }, 500);
    }else if(keyword == 'Y' || keyword == 'Yes'){
        msg.reply(yesReply);
    }
    
});

client.initialize();


//socket io 
io.on ('connection', function(socket){
    socket.emit ('message','conneecccting...');

    //qr code
client.on('qr', (qr) => {
    qrcode.toDataURL(qr, (err,url)=>{
        socket.emit ('qr', url);
        socket.emit ('message','QR Diterima, Silahkan Scan...');
    });

    client.on('ready', () => {
        socket.emit ('message','WA Ready...');
    });

    client.on('authenticated', (session) => {
        socket.emit('authenticated', 'Whatsapp is authenticated!');
        socket.emit('message', 'Whatsapp is authenticated!');
        console.log('AUTHENTICATED', session);
        sessionCfg = session;
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function(err) {
          if (err) {
            console.error(err);
          }
        });
      });
    
});


});



//server
server.listen(2000, function(){
    console.log("app running");
});