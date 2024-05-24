// logger.ts
class Logger {
    private static instance: Logger;
    private logs: string[] = [];
  
    private constructor() {
      // Constructor privado para el patrón Singleton
    }
  
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    public info(message: string): void {
      this.log('INFO', message);
    }
  
    public warn(message: string): void {
      this.log('WARN', message);
    }
  
    public error(message: string, err: any): void {
      this.log('ERROR', message);
    }
  
    private log(level: string, message: string): void {
      const timestamp = new Date().toISOString();
      const logMessage = `${timestamp} [${level}]: ${message}`;
      console.log(logMessage);
      this.logs.push(logMessage);
    }
  
    public getLogs(): string[] {
      return this.logs;
    }
  }
  
  export default Logger;
  