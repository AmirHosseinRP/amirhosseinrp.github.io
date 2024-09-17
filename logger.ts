// import winston from "winston";
// import env from "~/shared/config/env";

// const { combine, timestamp, json, metadata } = winston.format;
// const LOG_DIR = process.env.HAMSAYE_LOG_DIR;
// const LOG_FILE = process.env.HAMSAYE_LOG_FILENAME;

// console.log("first");

// const logger = winston.createLogger({
//   transports: [
//     new winston.transports.File({
//       level: "error",
//       filename: env.mode === "development" ? `./${LOG_DIR}/${LOG_FILE}` : `/${LOG_DIR}/${LOG_FILE}`,
//       format: combine(timestamp(), json(), metadata()),
//     }),
//     new winston.transports.File({
//       level: "info",
//       filename: env.mode === "development" ? `./${LOG_DIR}/${LOG_FILE}` : `/${LOG_DIR}/${LOG_FILE}`,
//       format: combine(timestamp(), json(), metadata()),
//     }),
//   ],
//   exitOnError: false,
// });

// export default logger;
