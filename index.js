const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === 'ping') {
		message.reply('pong');
        

	}else{
        var msg = message.body;
        message.sendMessage(msg);
        console.log('Replied the recived message to the user ');
    }
});

client.on('message', message => {
	if(message.body === 'hi') {
		message.reply('hey there');
        console.log('Replied "hey there" to ');
	}
});

client.initialize();