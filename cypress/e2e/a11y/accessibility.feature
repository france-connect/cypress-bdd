#language: fr
@accessibilite
Fonctionnalité: Accessibilité

  Plan du Scénario: Accessibilité - page d'accueil sur <device>
    Etant donné que j'utilise un navigateur web sur "<device>"
    Et que je navigue sur la page d'accueil
    Quand je vérifie l'accessibilité sur cette page
    Alors aucune erreur d'accessibilité n'est présente

    Exemples:
      | device           |
      | mobile           |
      | tablet portrait  |
      | tablet landscape |
      | desktop          |

  Plan du Scénario: Accessibilité - page de connexion administrateur sur <device>
    Etant donné que j'utilise un navigateur web sur "<device>"
    Et que je navigue sur la page de connexion administrateur
    Quand je vérifie l'accessibilité sur cette page
    Alors aucune erreur d'accessibilité n'est présente

    Exemples:
      | device           |
      | mobile           |
      | tablet portrait  |
      | tablet landscape |
      | desktop          |

  Plan du Scénario: Accessibilité - page de gestion des chambres sur <device>
    Etant donné que je navigue sur la page de connexion administrateur
    Et que j'utilise un utilisateur "administrateur"
    Et que j'entre mon nom d'utilisateur
    Et que j'entre mon mot de passe
    Et que je clique sur le bouton de connexion
    Et que je suis redirigé vers la page de gestion des chambres
    Quand je vérifie l'accessibilité sur cette page
    Alors aucune erreur d'accessibilité n'est présente

    Exemples:
      | device           |
      | mobile           |
      | tablet portrait  |
      | tablet landscape |
      | desktop          |
