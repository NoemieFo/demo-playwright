import { test, expect } from '@playwright/test';

// On peut regrouper plusieurs tests et leur donner des instructions communes afin d'éviter les déplications
// de code (dans cet exemple, nos 2 tests ont pour point d'entrée la page d'accueil de Steam, cette partie du 
// code a donc été refactorisée)

test.describe('Steam', () => {
    // Partie du code qui sera executée au début de chaque test
    test.beforeEach( async({page}) => {
        await page.goto('https://store.steampowered.com/') 
        // On vérifie que la page a le titre 'Welcome to Steam'
        await expect(page).toHaveTitle('Welcome to Steam')
    })

    test('Go to "Free to play games" page from home page', async({page}) => {
        // On attend que le bloc d'informations sur les cookies s'affiche
        const expectCookieDiv = await expect(page.locator('#cookiePrefPopup')).toBeVisible()
        // On récupère le bouton qui nous permet de les refuser...
        const confirmCookiesButton = await page.getByText('Reject All')
        // ...et on clique dessus
        await confirmCookiesButton.click()
    
        // On récupère le premier élément de la page qui contient le texte "free to play".
        // L'utilisation d'une expression régulière nous permet d'effectuer la recherche sans tenir compte de la casse.
        const freeToPlayLink = await page.getByText(/free to play/i).first()
        // On clique sur l'élément que l'on a récupéré
        await freeToPlayLink.click()
        // On s'assure que l'on a bien changé de page en vérifiant le titre.
        await expect(page).toHaveTitle(/Free to play games/i)
    })

    test.only('Look for "The last of us" game', async ({ page }) => {
        const searchBar = page.getByPlaceholder('search')
        await searchBar.click()
        await searchBar.fill('The last of us')
        await searchBar.press('Enter')
        await page.getByRole('link', { name: 'The Last of Us™ Part I 28 Mar, 2023 59,99€' }).click()
        await page.locator('#ageDay').selectOption('4');
        await page.locator('#ageMonth').selectOption('June');
        await page.locator('#ageYear').selectOption('2000');
        await page.getByRole('link', { name: 'View page' }).click();
        await expect(page).toHaveTitle(/the last of us/i);
    })
})