import { test, expect } from '@playwright/test';

test.describe('Steam', () => {
    // Partie du code qui sera executée au début de chaque test
    test.beforeEach( async({page}) => {
        await page.goto('https://store.steampowered.com/') 
        await page.pause()
        // On vérifie que la page a le titre 'Welcome to Steam'
        await expect(page).toHaveTitle('Welcome to Steam')
    })

    test('Redirect to "Free to play games" page from home page on click on button', async({page}) => {
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
})