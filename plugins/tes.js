let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let tesbot = fs.readFileSync('./mp3/tes.opus') 
conn.sendFile(m.chat, tesbot, '', '', m, true)
}

handler.customPrefix = /^(tes)$/i
handler.command = new RegExp

export default handler
