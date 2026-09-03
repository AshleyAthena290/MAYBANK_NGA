import { spawn } from "node:child_process";

const url = process.argv[2] || "https://48.193.17.110/dashboard/v1/menu";
const host = process.argv[3] || "dep-api-dev.nga.com";
const userContext = process.argv[4] || JSON.stringify({ gcif: "100000001", region: "ID", app: "NGA" });
const curlBinary = process.platform === "win32" ? "curl.exe" : "curl";

const args = [
  "-k",
  "-sS",
  "-i",
  "-w",
  "\n__HTTP_STATUS__:%{http_code}\n",
  "-H",
  `Host:${host}`,
  url,
  "-H",
  `UserContext: ${userContext}`
];

console.log(`[PROBE] ${curlBinary} ${args.join(" ")}`);

const child = spawn(curlBinary, args, {
  stdio: ["ignore", "pipe", "pipe"],
  windowsHide: true
});

let stdout = "";
let stderr = "";

child.stdout.setEncoding("utf8");
child.stderr.setEncoding("utf8");
child.stdout.on("data", (chunk) => {
  stdout += chunk;
});
child.stderr.on("data", (chunk) => {
  stderr += chunk;
});

child.on("error", (error) => {
  console.error(`[PROBE] Failed to start ${curlBinary}: ${error.message}`);
  process.exitCode = 1;
});

child.on("close", (code) => {
  if (stderr.trim()) {
    console.error(stderr.trim());
  }

  const statusMatch = stdout.match(/\n__HTTP_STATUS__:(\d{3})\s*$/);
  const httpStatus = statusMatch?.[1] ?? "000";
  const output = statusMatch ? stdout.slice(0, statusMatch.index).trim() : stdout.trim();

  console.log(output || "<empty response>");
  console.log(`\n[PROBE] curl exit code: ${code}`);
  console.log(`[PROBE] HTTP status: ${httpStatus}`);

  if (code !== 0 || httpStatus !== "200") {
    process.exitCode = 1;
  }
});