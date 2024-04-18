#language: fr
@visual
Fonctionnalité: Validation Visuelle

  # Exemple de test visuel avec un blackout sur selecteur css ".hotel-room-info h3"
  Plan du Scénario: Validation Visuelle - page d'accueil sur <device>
    Etant donné que j'utilise un navigateur web sur "<device>"
    Quand je navigue sur la page d'accueil
    Alors la copie d'écran "home" sans ".hotel-room-info h3" correspond à la page actuelle sur "<device>"

    Exemples:
      | device           |
      | mobile           |
      | tablet portrait  |
      | tablet landscape |
      | desktop          |
