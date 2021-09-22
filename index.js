//Dependencies
const D_Forest = require("d-forest")

//Variables
const Self_Args = process.argv.slice(2)

const Data = require("./data.json")

var result = ""

//Main
if(Self_Args.length == 0){
    console.log(`node index.js <word> <encrypt/decrypt>
Example: node index.js encryptme encrypt`)
    process.exit()
}

if(Self_Args[0] == ""){
    console.log("Invalid word.")
    process.exit()
}

if(Self_Args[1] == "encrypt"){
    for( i in Self_Args[0] ){
        const letter_data = D_Forest(Data).findLeaf((leaf) => leaf.letter === Self_Args[0][i])
    
        if(result.length == 0){
            result = letter_data.encrypted_letter
        }else{
            result += `${Data.seperator}${letter_data.encrypted_letter}`
        }
    }
    
    console.log(`Result: ${result}`)
}else if(Self_Args[1] == "decrypt"){
    const seperator_splitted = Self_Args[0].split("_")

    for( i in seperator_splitted ){
        const letter_data = D_Forest(Data).findLeaf((leaf) => leaf.encrypted_letter === seperator_splitted[i])
    
        result += letter_data.letter
    }
    
    console.log(`Result: ${result}`)
}else{
    console.log("Invalid encrypt/decrypt option.")
    process.exit()
}
