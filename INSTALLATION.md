# Création du framework de test à partir de zéro

Ce document présente les grandes étapes pour mettre au point le framework Cypress pour les tests BDD.

# Etape 1: Installation de Cucumber Preprocessor pour Cypress

```
yarn add cypress --dev
yarn add typescript --dev
yarn add @badeball/cypress-cucumber-preprocessor --dev 
yarn add @bahmutov/cypress-esbuild-preprocessor --dev
yarn add esbuild --dev
```

Installation de preprocesseur Cucumber/Esbuild basé sur:
- https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
- https://docs.cypress.io/guides/getting-started/installing-cypress
- https://docs.cypress.io/guides/tooling/typescript-support

Ajouter .cypress-cucumber-preprocessorrc.json
```
{
  "filterSpecs": true,
  "omitFiltered": true,
  "stepDefinitions": [
    "cypress/support/steps/*/*.ts"
  ],
  "json": {
    "enabled": true,
    "output": "cypress/reports/cucumber/cucumber-report.json"
  }
}
```

Ajouter tsconfig.json
```
{
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "Node16",
    "module": "Node16",
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```

# Etape 2: Dépendences linting / prettier

```
yarn add eslint@^8.0.0 --dev
yarn add prettier --dev
yarn add @typescript-eslint/eslint-plugin --dev
yarn add @typescript-eslint/parser --dev
yarn add eslint-config-prettier --dev
yarn add eslint-plugin-cypress --dev
yarn add eslint-plugin-import --dev
yarn add eslint-plugin-prettier --dev
yarn add eslint-plugin-simple-import-sort --dev
yarn add eslint-plugin-sort-destructure-keys --dev
yarn add eslint-plugin-sort-keys-fix --dev
yarn add eslint-plugin-typescript-sort-keys --dev
```

# Etape 3: Installation du plugin API

- Github:Github: https://github.com/filiphric/cypress-plugin-api

```
yarn add cypress-plugin-api --dev
```

# Etape 4: Installation du plugin d'accessibilité

- Github: https://github.com/component-driven/cypress-axe

```
yarn add cypress-axe --dev
yarn add axe-core --dev
```

# Etape 5: Installation du plugin pour les tests visuels

- Github: https://github.com/simonsmith/cypress-image-snapshot

```
yarn add @simonsmith/cypress-image-snapshot --dev
```

# Etape 6: Installation du Reporting

- Github: https://github.com/WasiqB/multiple-cucumber-html-reporter

```
yarn add multiple-cucumber-html-reporter --dev
yarn add ts-node --dev
yarn add @types/node@^18 --dev
```
