import { expect, test } from "@playwright/test";

test("Steam", async ({ page }) => {
  // On définit quelle page est le point d'entrée du test
  await page.goto("https://store.steampowered.com");
  // On vérifie que la page a le titre 'Welcome to Steam'
  await expect(page).toHaveTitle("Welcome to Steam");
});
