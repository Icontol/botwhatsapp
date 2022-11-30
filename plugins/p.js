let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let cok = fs.readFileSync('./mp3/p.opus') 
conn.sendFile(m.chat, cok, '', '', m, true)
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp

export default handler
