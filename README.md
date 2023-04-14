# demo-playwright

Retrouvez le code produit suite à la réalisation d'une vidéo de veille dans le cadre du MS2D de l'ENI.

## Utilisation

Vous pouvez récupérer ce repo pour lancer vous-même et jouer avec les tests présentés dans la vidéo.
Si vous souhaitez lancer un seul test, ajouter ```.only``` avant de le lancer.

**Exemple :**
```
 test.only('Look for "The last of us" game', async ({ page }) => {
```

Vous pouvez également modifier le fichier de configuration pour spécifier sur quels navigateurs exécuter vos tests (entre autres).

## Commandes de base (node)

Installer playwright : 
```npm init playwright@latest```

Lancer les tests : 
```npx playwright test [--headed]```

Lancer les tests uniquement sur Desktop Chrome :
```npx playwright test --project=chromium```

Lancer les tests d'un fichier spécifique :
```npx playwright test example```

Lancer les tests en mode debug :
```npx playwright test --debug```

Auto-générer les tests avec Codegen :
```npx playwright codegen```

## Liens utiles
- Documentation Playwright : playwright.dev
- Playwright sur Github : microsoft/playwright
- Vidéo de présentation de Playwright au DevFest Nantes 2022 : t.ly/86Q3
- Extension VSCode : t.ly/9UGv
