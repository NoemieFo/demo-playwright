import { test, expect } from '@playwright/test';

test('Steam - Test "Free to play" button', async({page}) => {
    await page.goto('https://store.steampowered.com/') 
    // On vérifie que la page a le titre 'Welcome to Steam'
    await expect(page).toHaveTitle('Welcome to Steam')

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

test('Steam - Test a game research', async({page}) => {
    // Scénario : 
    // - aller dans la barre de recherche de la home page
    // - taper au clavier "The last of us"
    // - valider la saisie
    // - vérifier que l'on arrive bien sur la page du jeu

    await page.goto('https://store.steampowered.com/') 
    // On vérifie que la page a le titre 'Welcome to Steam'
    await expect(page).toHaveTitle('Welcome to Steam')
})