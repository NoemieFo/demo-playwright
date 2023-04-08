import { test, expect } from '@playwright/test';

test('Steam', async({page}) => {
    await page.goto('https://store.steampowered.com/')
    // On vérifie que la page a le titre 'Welcome to Steam'
    await expect(page).toHaveTitle('Welcome to Steam')
})