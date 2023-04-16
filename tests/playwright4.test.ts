import { expect, test } from "@playwright/test";

// On peut regrouper plusieurs tests et leur donner des instructions communes afin d'éviter les déplications
// de code (dans cet exemple, nos 2 tests ont pour point d'entrée la page d'accueil de Steam, cette partie du
// code a donc été refactorisée)

test.describe("Steam", () => {
  // Partie du code qui sera executée au début de chaque test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://store.steampowered.com/");
    // On vérifie que la page a le titre 'Welcome to Steam'
    await expect(page).toHaveTitle("Welcome to Steam");
  });

  test('Redirect to "Free to play games" page from home page on click on button', async ({
    page,
  }) => {
    // On attend que le bloc d'informations sur les cookies s'affiche
    const expectCookieDiv = await expect(
      page.locator("#cookiePrefPopup")
    ).toBeVisible();
    // On récupère le bouton qui nous permet de les refuser...
    const confirmCookiesButton = await page.getByText("Reject All");
    // ...et on clique dessus
    await confirmCookiesButton.click();

    // On récupère le premier élément de la page qui contient le texte "free to play".
    // L'utilisation d'une expression régulière nous permet d'effectuer la recherche sans tenir compte de la casse.
    const freeToPlayLink = await page.getByText(/free to play/i).first();
    // On clique sur l'élément que l'on a récupéré
    await freeToPlayLink.click();
    // On s'assure que l'on a bien changé de page en vérifiant le titre.
    await expect(page).toHaveTitle(/Free to play games/i);
  });

  // Code écrit à la main, à l'aide de la documentation et du pick locator
  test('Look for "The last of us" game', async ({ page }) => {
    // 1. Sur la page d’accueil de Steam, rechercher “The last of us” (valider la saisie avec “Entrée”)
    const searchBar = page.getByPlaceholder("search");
    await searchBar.click();
    await searchBar.fill("the last of us");
    await searchBar.press("Enter");

    // 2. Sélectionner le jeu dans la liste
    await page
      .getByRole("link", { name: "The Last of Us™ Part I 28 Mar, 2023 59,99€" })
      .click();
  });
});
