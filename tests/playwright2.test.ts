import { expect, test } from "@playwright/test";

test("Steam", async ({ page }) => {
  // On définit quelle page est le point d'entrée du test
  await page.goto("https://store.steampowered.com/");
  // On vérifie que la page a le titre 'Welcome to Steam'
  await expect(page).toHaveTitle("Welcome to Steam");

  // On récupère le premier élément de la page qui contient le texte "free to play".
  // L'utilisation d'une expression régulière nous permet d'effectuer la recherche sans tenir compte de la casse.
  const freeToPlayLink = await page.getByText(/free to play/i).first();
  // On clique sur l'élément que l'on a récupéré
  await freeToPlayLink.click();
  // On s'assure que l'on a bien changé de page en vérifiant le titre.
  await expect(page).toHaveTitle(/Free to play games/i);
});
