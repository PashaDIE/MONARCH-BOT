const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['628983784623'] //ur owner number
global.ownernomer = "628983784623" //ur owner number2
global.ownername = "Ibra Jacquille" //ur owner name
global.ytname = "YT: -" //ur yt chanel name
global.socialm = "GitHub : PashaDIE" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = " - MD"
global.ownernumber = '628983784623'
global.ownername = 'Ibra Jacquille'
global.ownerNumber = ["628983784623@s.whatsapp.net"]
global.ownerweb = "https://github.com/PashaDIE"
global.websitex = "https://github.com/PashaDIE"
global.wagc = "https://chat.whatsapp.com/KCYr0YwODJTEEFUlPxuNXQ"
global.themeemoji = '🥀'
global.wm = " - MD"
global.botscript = 'Silahkan Datang Ke Channel FallXD425' //script link
global.packname = "Sticker By"
global.author = " - MD\n\n\nA Whatsapp Bot Created by\nIJacquille\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +628983784623"
global.creator = "628983784623@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Succesfully, here you go.  ',
    admin: ',       ',
    botAdmin: '       .',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: ',       .*',
    group: ',        ',
    private: ',         ',
    bot: ',         -.',
    wait: 'Wait For a Minute, In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})