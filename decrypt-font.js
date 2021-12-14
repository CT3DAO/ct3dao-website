const fs = require("fs")
const secretBlob = require("secret-blob")

const secret = process.env.FONT_SECRET_KEY
const key = Buffer.from(secret, "hex")

const file = fs.readFileSync("./src/fonts/CARBONRegular-encrypted.txt")
const decrypted = secretBlob.decrypt(Buffer.from(file.toString(), "hex"), key)

fs.writeFileSync("./src/fonts/CARBONRegular.woff", decrypted)
