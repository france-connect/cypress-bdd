#language: fr
@login
Fonctionnalité: Connexion au site Swag lab
  # En tant qu'usager,
  # je veux m'authentifier
  # afin d'accéder au site Swag lab

  # Exemple en entrant les données directement dans le scénario
  Scénario: Connexion au site Swag lab (avec données hardcodées)
    Etant donné que je navigue sur la page de connexion
    Quand j'entre le nom d'utilisateur "standard_user"
    Et j'entre le mot de passe "secret_sauce"
    Et je clique sur le bouton de connexion
    Alors je suis redirigé vers la page d'inventaire

  # Exemple en utilisant des exemples
  Plan du Scénario: Connexion au site Swag lab (avec exemple)
    Etant donné que je navigue sur la page de connexion
    Quand j'entre le nom d'utilisateur "<username>"
    Et j'entre le mot de passe "<password>"
    Et je clique sur le bouton de connexion
    Alors je suis redirigé vers la page d'inventaire

    Exemples:
      | username      | password     |
      | standard_user | secret_sauce |

  # Exemple en utilisant les fixtures
  Scénario: Connexion au site Swag lab (avec fixture)
    Etant donné que je navigue sur la page de connexion
    Et que j'utilise un utilisateur "standard"
    Quand j'entre mon nom d'utilisateur
    Et j'entre mon mot de passe
    Et je clique sur le bouton de connexion
    Alors je suis redirigé vers la page d'inventaire
