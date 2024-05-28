"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// logger.ts
class Logger {
    constructor() {
        this.logs = [];
        // Constructor privado para el patrón Singleton
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    info(message) {
        this.log('INFO', message);
    }
    warn(message) {
        this.log('WARN', message);
    }
    error(message, err) {
        this.log('ERROR', message);
    }
    log(level, message) {
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp} [${level}]: ${message}`;
        console.log(logMessage);
        this.logs.push(logMessage);
    }
    getLogs() {
        return this.logs;
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map