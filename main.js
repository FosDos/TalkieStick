const Discord = require('discord.js');

const client = new Discord.Client();
const config = require('./config.json');
const prefix = '-';
const stickrole = '745906589835460709';
const campfire = '745828092450439240';
const staging_area = '745931453535354890';
var first_time;
var second_time;
var session = false;
var held = false;

client.once('ready', () => {console.log('Talkie bot online');});

client.on('message', message => 
	{
		if(!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();
		if(session === true)
		{
			console.log("session is still true");
		}
		if(command === 'testing')
		{
			session = true;
		}
		if(command === 'marco')
		{
			message.channel.send('polo!');
		}
		if (command === 'ddod')
		{
			message.channel.send('https://www.youtube.com/watch?v=LDU_Txk06tM');
		}
		if(command === 'stick' && !message.member.roles.cache.has(stickrole))
		{
			if(held === false)
			{
				message.member.roles.add(stickrole);
				message.member.voice.setChannel(client.channels.cache.get(staging_area));
				setTimeout(function(){message.member.voice.setChannel(client.channels.cache.get(campfire));}, 100);
				setTimeout(function(){message.member.roles.remove(stickrole)}, 6000);

			}
			else
			{
				message.channel.send('Held by someone else, please wait your turn');

			}
		} 
		if(command === 'pass' && message.member.roles.cache.has(stickrole))
		{
			//pass from person who has it to someone who does not

		}
		else if(command === 'pass')
		{
			//you don't have the stick right now
		}
		if(command === 'tester')
		{   
			if(message.member.roles.cache.has(stickrole))
			{
				console.log('working');
			
			var today = new Date();
			channel = client.channels;
			console.log(channel);
			console.log(today);
			//message.member.voice.setChannel(client.channels.cache.get(staging_area));
			message.member.voice.setMute(true);
			client.channels.cache.get(staging_area).join();
		    }
		    else
		    {
		    	message.channel.send("You aren't holding the stick rn >_<");
		    }

		}
		if(command === 'join')
		{
			var target = message.mentions.members.first();
			target.setMute(true,'dick');
		}

	}

	);

client.login(config.token);