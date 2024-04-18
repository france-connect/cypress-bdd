#language: fr
@api @apiLogin
Fonctionnalité: API - login

  Scénario: API login - Cas nominal
    Etant donné que je prépare une requête "login"
    Quand je lance la requête
    Alors le statut de la réponse est 200
    Et l'entête de la réponse a une propriété "set-cookie"
    Et l'entête de la réponse n'a pas de propriété "content-type"
    Et l'entête de la réponse a une propriété "content-length" égale à "0"
    Et le corps de la réponse est vide

  Scénario: API login - Erreur login en mode formulaire
    Etant donné que je prépare une requête "login"
    Et je prépare la requête en mode "formulaire"
    Quand je lance la requête
    Alors le statut de la réponse est 415
    Et l'entête de la réponse n'a pas de propriété "set-cookie"
    Et l'entête de la réponse a une propriété "content-type" égale à "application/json"
    Et le corps de la réponse a 4 propriétés
    Et le corps de la réponse a une propriété "timestamp"
    Et le corps de la réponse a une propriété "status" égale à 415
    Et le corps de la réponse a une propriété "error" égale à "Unsupported Media Type"
    Et le corps de la réponse a une propriété "path" égale à "/auth/login"

  Scénario: API login - Erreur mot de passe manquant
    Etant donné que je prépare une requête "login"
    Et je retire "password" du corps de la requête
    Quand je lance la requête
    Alors le statut de la réponse est 403
    Et l'entête de la réponse n'a pas de propriété "set-cookie"
    Et l'entête de la réponse n'a pas de propriété "content-type"
    Et l'entête de la réponse a une propriété "content-length" égale à "0"
    Et le corps de la réponse est vide

  Scénario: API login - Erreur mauvais nom d'utilisateur
    Etant donné que je prépare une requête "login"
    Et je mets "administrateur" dans la propriété "username" du corps de la requête
    Quand je lance la requête
    Alors le statut de la réponse est 403
    Et l'entête de la réponse n'a pas de propriété "set-cookie"
    Et l'entête de la réponse n'a pas de propriété "content-type"
    Et l'entête de la réponse a une propriété "content-length" égale à "0"
    Et le corps de la réponse est vide

  Scénario: API login - Erreur mauvais mot de passe
    Etant donné que je prépare une requête "login"
    Et je mets "wrong-password" dans la propriété "password" du corps de la requête
    Quand je lance la requête
    Alors le statut de la réponse est 403
    Et l'entête de la réponse n'a pas de propriété "set-cookie"
    Et l'entête de la réponse n'a pas de propriété "content-type"
    Et l'entête de la réponse a une propriété "content-length" égale à "0"
    Et le corps de la réponse est vide
