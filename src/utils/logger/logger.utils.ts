import { createLogger, format, transports } from 'winston';
const { timestamp, combine, printf, errors, json } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

export const buildDevLogger = () => {
  return createLogger({
    format: combine(format.colorize(), timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), format.errors({ stack: true }), logFormat),
    transports: [new transports.Console()],
  });
};

export const buildProdLogger = () => {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: 'metadata-test' },
    transports: [new transports.Console()],
  });
};
