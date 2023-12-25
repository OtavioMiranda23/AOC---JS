const fs = require('node:fs/promises');
const { stringify } = require('node:querystring');

async function run(){
    try {
        const data = await fs.readFile("./data.txt", "utf-8")
        let totalSum = 0;
        console.log("---->>", data.split("\n"))
        data.split("\n").map(word => {
            const matchs = word.match(/[0-9]/g)
            console.log("->", word)
            actualSum = matchs[0] + matchs[matchs.length - 1]
            totalSum += parseInt(actualSum)
            console.log("totalSum", totalSum)
        })    
    }
    catch(error) {
        console.error("Erro ao ler o arquivo:", error);
    }
}
run()