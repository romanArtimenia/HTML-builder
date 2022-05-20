const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;



stdout.write('Введите текст в консоль\n');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        console.log('Всего доброго!!!');
        process.exit();
    }
    fs.appendFile(
        path.resolve(__dirname, 'text.txt'),
        data,
        'utf8',
        (err) => {
            if (err) throw err;
        }
    );

});


process.on('SIGINT', () => console.log('Всего доброго!!!'));
process.on('SIGINT', () => process.exit());


