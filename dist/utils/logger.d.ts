declare class Logger {
    private static instance;
    private logs;
    private constructor();
    static getInstance(): Logger;
    info(message: string): void;
    warn(message: string): void;
    error(message: string, err: any): void;
    private log;
    getLogs(): string[];
}
export default Logger;
