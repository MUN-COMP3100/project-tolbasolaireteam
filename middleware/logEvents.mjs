import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { existsSync } from 'fs';
import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';

export const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        if (!existsSync(fileURLToPath(new URL("../logs", import.meta.url)))) {
            await fsPromises.mkdir(fileURLToPath(new URL("../logs", import.meta.url)));
        }

        await fsPromises.appendFile(fileURLToPath(new URL("../logs/" + logName, import.meta.url)), logItem);
    } catch (err) {
        console.log(err);
    }
}

export const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'requestsLog.txt');
    console.log(`${req.method} ${req.url}`);
    next();
}
