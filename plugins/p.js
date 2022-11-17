let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let sound = fs.readFileSync('./mp3/p.opus') 
conn.sendFile(m.chat, sound, '', '', m, true)
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
