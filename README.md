# demo-playwright

Retrouvez le code de la réalisation d'une vidéo de veille dans le cadre du MS2D de l'ENI.

## Utilisation

Vous pouvez récupérer ce repo pour lancer vous-même et jouer avec les tests présentés dans la vidéo.
Si vous souhaitez lancer un seul test, ajouter ```.only``` avant de le lancer.

**Exemple :**
```
 test.only('Look for "The last of us" game', async ({ page }) => {
```

Si vous souhaitez lancer les tests sur un ou des navigateurs particuliers, vous pouvez le spécifier en modifiant le fichier de configuration du projet.

## Commandes de base (node)

#### Installer playwright : 
```npm init playwright@latest```
- [Guide d'installation en ligne de commande](https://playwright.dev/docs/intro#installing-playwright)
- [Guide d'installation grâce à l'extension VSCode](https://playwright.dev/docs/getting-started-vscode#installation)

#### Lancer les tests : 
```npx playwright test [--headed]```

#### Lancer les tests uniquement sur Desktop Chrome :
```npx playwright test --project=chromium```

#### Lancer les tests d'un fichier spécifique :
```npx playwright test example```

#### Lancer les tests en mode debug :
```npx playwright test --debug```

#### Auto-générer les tests avec Codegen :
```npx playwright codegen```

## Liens utiles
- [Documentation Playwright](https://playwright.dev) 
- [Playwright sur Github](https://github.com/microsoft/playwright) 
- [Vidéo de présentation de Playwright au DevFest Nantes 2022](https://www.youtube.com/watch?v=meiA4TPltoI)
- [Extension VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
