import { z } from "zod";

const AppConfigSchema = z.object({
  logLevel: z.string().default("info")
});

export type AppConfig = z.infer<typeof AppConfigSchema>;

export function getAppConfig(): AppConfig {
  return AppConfigSchema.parse({
    logLevel: process.env.LOG_LEVEL
  });
}
