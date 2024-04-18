#language: fr
@adminLogin
Fonctionnalité: Connexion au site d'administration
  # En tant qu'administrateur,
  # je veux m'authentifier
  # afin d'accéder au site d'administration

  # Exemple en entrant les données directement dans le scénario
  Scénario: Connexion au site d'administration (avec données hardcodées)
    Etant donné que je navigue sur la page de connexion administrateur
    Quand j'entre le nom d'utilisateur "admin"
    Et j'entre le mot de passe "password"
    Et je clique sur le bouton de connexion
    Alors je suis redirigé vers la page de gestion des chambres

  # Exemple en utilisant des exemples
  Plan du Scénario: Connexion au site d'administration (avec exemple)
    Etant donné que je navigue sur la page de connexion administrateur
    Quand j'entre le nom d'utilisateur "<username>"
    Et j'entre le mot de passe "<password>"
    Et je clique sur le bouton de connexion
    Alors je suis redirigé vers la page de gestion des chambres

    Exemples:
      | username | password |
      | admin    | password |

  # Exemple en utilisant les fixtures
  Scénario: Connexion au site d'administration (avec fixture)
    Etant donné que je navigue sur la page de connexion administrateur
    Et que j'utilise un utilisateur "administrateur"
    Quand j'entre mon nom d'utilisateur
    Et j'entre mon mot de passe
    Et je clique sur le bouton de connexion
    Alors je suis redirigé vers la page de gestion des chambres
