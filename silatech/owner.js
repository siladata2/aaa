const { cmd, footer, logo, config, mainSite, botName, caption } = require('../sila/silafunctions');

module.exports = cmd({
    pattern: "owner",
    alias: ["creator", "dev", "botinfo"],
    react: "👑",
    desc: "Show bot owner info with VCard",
    category: "system",
    filename: __filename
}, async (sock, m, sender, args, prefix, number) => {
    
    // ===== VCARD =====
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${botName}
ORG:𝚂𝙸𝙻𝙰 𝚃𝚎𝚌𝚑;
TEL;type=CELL;type=VOICE;waid=${config.OWNER_NUMBER}:${config.OWNER_NUMBER}
EMAIL:silatech@gmail.com
URL:${mainSite}
ADR:;;Tanzania;;;;
NOTE:⚡ WhatsApp Bot Developer | AI Automation Expert
X-SOCIALPROFILE;type=instagram:https://instagram.com/sila_tech
X-SOCIALPROFILE;type=github:https://github.com/Sila-Md
X-SOCIALPROFILE;type=youtube:https://youtube.com/@silatech
END:VCARD`;

    // ===== CONTEXT INFO (Inategemea variables kutoka silafunctions) =====
    const contextInfo = {
        mentionedJid: [sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363402325089913@newsletter',
            newsletterName: botName,
            serverMessageId: 143
        },
        externalAdReply: {
            title: `⚡ ${botName} ⚡`,
            body: '💬 WhatsApp Bot Automation',
            thumbnailUrl: logo,
            sourceUrl: mainSite,
            mediaType: 1,
            renderLargerThumbnail: true,
            showAdAttribution: true
        }
    };

    // ===== INFO MESSAGE (Format uliyotaka) =====
    const infoMessage = `${botName} 𝙾𝚆𝙽𝙴𝚁 𝙸𝙽𝙵𝙾
◈━◈━◈━◈━◈━◈━◈━◈━◈━
◈ 𝙽𝚊𝚖𝚎: 𝚂𝙸𝙻𝙰
◈ 𝙽𝚞𝚖𝚋𝚎𝚛: ${config.OWNER_NUMBER}
◈ 𝙱𝚘𝚝: ${botName}
◈ 𝚅𝚎𝚛𝚜𝚒𝚘𝚗: 𝟸.𝟶.𝟶
◈━◈━◈━◈━◈━◈━◈━◈━◈━
© Powered by Sila AI`;

    // ===== TUMIA VCARD KWANZA =====
    await sock.sendMessage(sender, {
        contacts: {
            displayName: botName,
            contacts: [{ vcard }]
        },
        contextInfo: contextInfo
    });

    // ===== BAADA YA SEKUNDE 10 NDIO INFO ITUME =====
    setTimeout(async () => {
        await sock.sendMessage(sender, {
            text: infoMessage,
            contextInfo: contextInfo
        });
    }, 10000);
});