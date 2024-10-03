const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Remove log files and the directory

fs.readdir(logsDir, (err, files) => {
    if (err) {
        return console.log("Logs directory does not exist.");
    }

    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`Deleting file: ${file}`);
        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logsDir);
    console.log("Logs directory removed.");
});
