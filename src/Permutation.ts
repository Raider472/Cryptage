const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", "$"]
const clé =      ["l", "r", "m", "b", "q", "y", "t", "s", "o", "h", "a", "j", "$", "z", "v", "k", "e", "u", "c", "g", "d", "w", ".", "i", "n", "x", "f", "p"]
//console.log(alphabet)
//console.log(clé)

function cryptagePermutation(alphabet: Array<string>, clé: Array<string>, message: string, récurence: number = 1): string {
    if(alphabet.length != clé.length) {
        throw new Error("la taille de l'alphabet et la clé ne sont pas la même !")
    }
    let motEncrypter = ""
    for(let i = 0, j = 0; récurence > 0 ; j++) {
        if (message[i] === " " || !isNaN(Number(message[i]))) {
            let chiffreRandom = Math.floor(Math.random()*10)
            if (chiffreRandom >= 10) {
                chiffreRandom--
            }
            motEncrypter += String(chiffreRandom)
            i++
            j = -1
        }
        else if(message[i].toLocaleUpperCase() === alphabet[j].toLocaleUpperCase()) {
            motEncrypter += clé[j].toLocaleUpperCase()
            i++
            j = -1
        }
        if (i === message.length) {
            i = 0
            j = -1
            récurence--
            message = motEncrypter
            if(récurence > 0) {
                motEncrypter = ""
            }
        }
    }
    return motEncrypter
}

function decryptagePermutation(alphabet: Array<string>, clé: Array<string>, code: string, récurence: number = 1): string {
    let motDecrypter = ""
    for(let i = 0, j = 0; récurence > 0 ; j++) {
        if (!isNaN(Number(code[i])) || code[i] === " ") {
            motDecrypter += " "
            i++
            j = -1
        }
        else if(code[i] === clé[j].toLocaleUpperCase()) {
            motDecrypter += alphabet[j].toLocaleUpperCase()
            i++
            j = -1
        }
        if (i === code.length) {
            i = 0
            j = -1
            récurence--
            code = motDecrypter
            if(récurence > 0) {
                motDecrypter = ""
            }
        }
    }
    let messageDecrypter = ""
    for (let i = 0; i < motDecrypter.length; i++) {
        if (i === 0) {
            messageDecrypter += motDecrypter[i]
        }
        else {
            messageDecrypter += motDecrypter[i].toLocaleLowerCase() 
        }
    }
    return messageDecrypter
}



let test = cryptagePermutation(alphabet, clé, "je suis jean valjean. gaming$", 3)
console.log("voici ton message encrypter:", test)
console.log("voici le message décrypter:", decryptagePermutation(alphabet, clé, test, 3))