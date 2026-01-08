const fs = require("node:fs/promises");
const path = require("node:path");

const folder = process.argv[2] || ".";

async function listFiles(dir) {
    let files;
    try {
        files = await fs.readdir(dir);
    } catch (error) {
        console.log(`Error al leer el directorio: ${dir}`);
        process.exit(1);
    }

    const filesPromises = files.map(async (file) => {
        const filePath = path.join(dir, file);
        let stats;
        try {
            stats = await fs.stat(filePath);
        } catch (error) {
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const filetype = isDirectory ? "carpeta" : "archivo";
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        return `${file} - ${filetype} - ${fileSize.toString()} bytes - modificado: ${fileModified}`;
    });

    const detailedFiles = await Promise.all(filesPromises);

    detailedFiles.forEach((fileDetail) => {
        console.log(fileDetail);
    });
}

listFiles(folder);
