import pino from "pino";
import { getAppConfig } from "../config/appConfig.js";

export type AppLogger = ReturnType<typeof pino>;

export function createLogger(): AppLogger {
  const config = getAppConfig();
  const options: Parameters<typeof pino>[0] = {
    level: config.logLevel
  };

  if (process.env.NODE_ENV !== "production") {
    options.transport = {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard"
      }
    };
  }

  return pino(options);
}
