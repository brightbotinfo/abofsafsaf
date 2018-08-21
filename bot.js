const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"

console.log("Welcome Again !");
 

 client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
    let pages = [' اهلا وسهلا بك يا عزيزي','اوامر العامة','اوامر المشرفين','اوامر الميوزك','اوامر القران','إضافة البوت','مراسلة صاحب البوت','شكرً جزيلا لكم']
    let page = 1;
	
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription([page-1])
	.addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
    .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'| 🇦  لقائمة الأكواد إختر  |')
    .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'| 🇧 لقائمة الأوامر العامة  |')
    .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'| 🇨 لقائمة اوامر الإدارة والسبورت |')
	.addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╚[❖═════════════════════❖]╝')
    .setFooter(`By Abo Khalil`)
    .setTimestamp()

    message.channel.sendEmbed(embed).then(msg => {

		        msg.react('🇦').then( r => {
            msg.react('🇧')
			msg.react('🇨')
//			msg.react('🇩')
//			msg.react('🇪')
//			msg.react('🇫')


        var codekwardsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
        var adminwardsFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
		var genkwardsFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
		var bekwardsFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
		var brkwardsFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
		var bnkwardsFilter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;


        var codekwards = msg.createReactionCollector(codekwardsFilter, { time: 20000});
        var adminwards = msg.createReactionCollector(adminwardsFilter, { time: 20000});
		var genkwards = msg.createReactionCollector(genkwardsFilter, { time: 20000});
		var bekwards = msg.createReactionCollector(bekwardsFilter, { time: 20000});
		var brkwards = msg.createReactionCollector(brkwardsFilter, { time: 20000});
		var bnkwards = msg.createReactionCollector(brkwardsFilter, { time: 20000});
		
		
		
        bnkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
** _ التواصل _
╔[❖══════════════════════❖]╗
|  لمراسلة صاحب البوت قم بكتابة الأمر
  | !.info-report | 
  | سيقوم البوت بإعطائك امر وطريقة ارسالها | 
╚[❖══════════════════════❖]╝
** _ التواصل _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    	
		
        brkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**_ الرابط _
╔[❖══════════════════════❖]╗
|  تفضل أخي الغالي رابط البوت
  | https://goo.gl/XPU7pV | 
╚[❖══════════════════════❖]╝
** _ الرابط _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        bekwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
** _ أوامر القران الكريم _
╔[❖══════════════════════❖]╗
|  قريباً جداً بإذن الله تعالى   |
╚[❖══════════════════════❖]╝
** _ اوامر القرآن الكريم _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        adminwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(`
         
            **لست من المشرفين لن يتم ارسال الرسالة إليك**
            `);
           
            message.channel.send('**لقد تم ارسال رسالة المساعدة في الرسائل الخاصة**');

            let embed = new Discord.RichEmbed()
            .addField("- ban", "**To ban A mentioned user**, **__Example: #ban @mention__**")
            .addField("- unban", "**Unban by id**, **__Example: #unban id__**")
            .addField("- kick", "**Kick A mentioned user**, **__Example: #kick @mention__**")
            .addField("- mute", "**Mute A mentioned user**, **__Example: #mute @mention__**")
            .addField("- unmute", "**Unmute A mentioned user**, **__Example: #unmute @mention__**")
            .addField("- muteall", "**Close A current text channel**, **__Example: #muteall__**")
            .addField("- unmuteall", "**Open A current text channel**, **__Example: #unmuteall__**")
            .addField("- mutevoice", "**Give A mentioned user server mute**, **__Example: #mutevoice @mention__**")
            .addField("- unmutevoice", "**Unmute A mentioned user**, **__Example: #unmutevoice @mention__**")
            .addField("- defean", "**Give A mentioned user server defean**, **__Example: #defean @mention__**")
            .addField("- undefean", "**Undefean A mentioned user**, **__Example: #undefean @mention__**")
            .addField("- voicekick", "**Kick A mentioned user from the current voice channel**, **__Example: #voicekick @mention__**")
            .addField("- move", "**Move A mentioned user to ur voice channel**, **__Example: #move @mention__**")
            .addField("- moveall", "**Move All users to ur voice channel.**")
            .addField("- clear", "**Clear A current chat**, **__Example: #clear 22__**")
            .addField("- ct", "**Creat A text channel**, **__Example: #ct chat__**")
            .addField("- cv", "**Creat A voice channel**, **__Example: #ct Publicvoice__**")
            .addField("- v", "**Creat A temporary voice channel**, **__Example: #v temporary__**")
            .addField("- delete", "**Remove A text or voice channel**, **__Example: #delete Publicvoice__**")
            .addField("- cc", "**Creat A category**, **__Example: #cc AlphaAdmins__**")
            .addField("- role", "**Give A mentioned user role**, **__Example: #role @mention Admin__**")
            .addField("- role all", "**Give All server members role**, **__Example: #role all Members__**")   
            .setColor('RANDOM')
            .setFooter(`By Abo Khalil`)
            .setTimestamp()
        
        
            message.author.sendEmbed(embed)

		genkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لمعرفة معلوماتك بالسيـرفر |
| ---    -info    ---- |
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
╔[❖══════════════════════❖]╗
| لمعرفة ايموجيات السيرفر |
| ---    -emoji   ---- |
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
| لمعرفة سرعة اتصال البــوت |
| ---    -ping   ---- |
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
	
        codekwards.on('collect', r => {
            if (page === pages.length) return;
            page++;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
	.addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
    .addField('- A لقائمة أكواد الجافا سكربت ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('- B لقائمة أكواد البايثون ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('- C لقائمة اكواد الإرس ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
	.addField('- D لقائمة أكواد الآي او ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('- E لقائمة أكواد لوا' ,'**=-=-=-=-=-=-=-=-=-=-=**')
	.addField('شكرا لك على استعمالك البوت ' ,'╚[❖═════════════════════❖]╝')
    .setFooter(`By Abo Khalil`)
    .setTimestamp()

    message.channel.sendEmbed(embed).then(msg => {
		
		        msg.react('🇦').then( r => {
            msg.react('🇧')
			msg.react('🇨')
			msg.react('🇩')
			msg.react('🇪')


 //       let jskwardsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
        let pywardsFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
		let eriswardsFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
		let iowardsFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
		let luawardsFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;



        let jskwards = msg.createReactionCollector(jskwardsFilter, { time: 20000});
        let pywards = msg.createReactionCollector(pywardsFilter, { time: 20000});
		let eriswards = msg.createReactionCollector(eriswardsFilter, { time: 20000});
		let iowards = msg.createReactionCollector(iowardsFilter, { time: 20000});
		let luawards = msg.createReactionCollector(luawardsFilter, { time: 20000});
        
		
				})
        		        jskwards.on('collect', r => {
            if (page === pages.length) return;
            page++;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
	.addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
    .addField('**- A لقائمة السورس الأساسي**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('**- B لقائمة الأكواد الإدارية**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('**- C لقائمة الأكـواد العامة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
	.addField('**- D لقائمة أكواد الترحيب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('**- E لقائمة أكواد الهيــب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('**- F لقائمة أكواد البرودكاست **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('**- G لقائمة أكواد الألعاب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('**- H لقائمة الأكواد المنوعه **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('**- I للعودة القائمة السابقة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
	.addField('شكرا لك على استعمالك البوت ' ,'╚[❖═════════════════════❖]╝')
    .setFooter(`By Abo Khalil`)
    .setTimestamp()


    message.channel.sendEmbed(embed).then(msg => {
		
        msg.react('🇦').then( r => {
    msg.react('🇧')
    msg.react('🇨')
    msg.react('🇩')
    msg.react('🇪')
    msg.react('🇬')
    msg.react('🇭')
    msg.react('🇮')


    // 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳

let kickFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
let banFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
let warnFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
let muteFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
let rollFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;



let kick = msg.createReactionCollector(kickFilter, { time: 20000});
let ban = msg.createReactionCollector(banFilter, { time: 20000});
let warn = msg.createReactionCollector(warnFilter, { time: 20000});
let mute = msg.createReactionCollector(muteFilter, { time: 20000});
let roll = msg.createReactionCollector(rollFilter, { time: 20000});

        })	
				})
						})
    }) 
    })
    })
})
})

    }
;})


client.login(process.env.BOT_TOKEN);
