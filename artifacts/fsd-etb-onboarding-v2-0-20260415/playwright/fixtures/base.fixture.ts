import { test as base } from "@playwright/test";

export const test = base.extend<{ baseUrl: string }>({
  baseUrl: [process.env.BASE_URL ?? "/", { option: true }]
});

export { expect } from "@playwright/test";