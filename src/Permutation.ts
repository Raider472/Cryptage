const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const clé =      ["l", "r", "m", "b", "q", "y", "t", "s", "o", "h", "a", "j", "z", "v", "k", "e", "u", "c", "g", "d", "w", "i", "n", "x", "f", "p"]
//console.log(alphabet)
//console.log(clé)

function cryptagePermutation(alphabet: Array<string>, clé: Array<string>, message: string, récurence: number = 1): string {
    if(alphabet.length != clé.length) {
        throw new Error("la taille de l'alphabet et la clé ne sont pas la même !")
    }
    let motEncrypter = ""
    for(let i = 0, j = 0; récurence > 0 ; j++) {
        if(message[i].toLocaleUpperCase() === alphabet[j].toLocaleUpperCase()) {
            motEncrypter += clé[j].toLocaleUpperCase()
            i++
            j = -1
        }
        if (i === message.length) {
            i = 0
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
        if(code[i] === clé[j].toLocaleUpperCase()) {
            motDecrypter += alphabet[j].toLocaleUpperCase()
            i++
            j = -1
        }
        if (i === code.length) {
            i = 0
            récurence--
            code = motDecrypter
            if(récurence > 0) {
                motDecrypter = ""
            }
        }
    }
    return motDecrypter
}

let test = cryptagePermutation(alphabet, clé, "jesuisjeanvaljeangaming", 3)
console.log("voici ton message encrypter:", test)
console.log("voici le message décrypter:", decryptagePermutation(alphabet, clé, test, 3))
//TODO ajouter les espaces