//Week7 - Activity 1
const fs = require('fs');
const util = require('util')
const writePromise = util.promisify(fs.writeFile);
const readPromise = util.promisify(fs.readFile);

writePromise("message.txt", "hello week7!")
    .then(() => readPromise("message.txt", 'utf-8'))
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

async function writeReadAsync() {
    try {
        await writePromise("message.txt", "hello week7");
        const data = await readPromise("message.txt", 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

writeReadAsync();

//or:
//writeReadAsync().catch((err)=>console.log(err));
