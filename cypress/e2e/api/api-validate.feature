#language: fr
@api @apiValidate
Fonctionnalité: API - validate

  Scénario: API validate - Cas nominal
    Etant donné que je prépare une requête "login"
    Et que je lance la requête
    Et que le statut de la réponse est 200
    Et que l'entête de la réponse a une propriété "set-cookie"
    Et que je prépare une requête "validate"
    Et que je mets le token dans la propriété "token" du corps de la requête
    Quand je lance la requête
    Alors le statut de la réponse est 200
    Et l'entête de la réponse n'a pas de propriété "content-type"
    Et l'entête de la réponse a une propriété "content-length" égale à "0"
    Et le corps de la réponse est vide

  Scénario: API validate - Erreur token objet vide
    Etant donné que je prépare une requête "validate"
    Et que je mets un objet vide dans la propriété "token" du corps de la requête
    Quand je lance la requête
    Alors le statut de la réponse est 400
    Et l'entête de la réponse n'a pas de propriété "set-cookie"
    Et l'entête de la réponse a une propriété "content-type" égale à "application/json"
    Et le corps de la réponse a 4 propriétés
    Et le corps de la réponse a une propriété "timestamp"
    Et le corps de la réponse a une propriété "status" égale à 400
    Et le corps de la réponse a une propriété "error" égale à "Bad Request"
    Et le corps de la réponse a une propriété "path" égale à "/auth/validate"

  Scénario: API validate - Erreur validate en mode formulaire
    Etant donné que je prépare une requête "validate"
    Et que je prépare la requête en mode "formulaire"
    Quand je lance la requête
    Alors le statut de la réponse est 415
    Et l'entête de la réponse n'a pas de propriété "set-cookie"
    Et l'entête de la réponse a une propriété "content-type" égale à "application/json"
    Et le corps de la réponse a 4 propriétés
    Et le corps de la réponse a une propriété "timestamp"
    Et le corps de la réponse a une propriété "status" égale à 415
    Et le corps de la réponse a une propriété "error" égale à "Unsupported Media Type"
    Et le corps de la réponse a une propriété "path" égale à "/auth/validate"

  Scénario: API validate - Erreur token manquant
    Etant donné que je prépare une requête "validate"
    Et que je retire "token" du corps de la requête
    Quand je lance la requête
    Alors le statut de la réponse est 403
    Et l'entête de la réponse n'a pas de propriété "set-cookie"
    Et l'entête de la réponse n'a pas de propriété "content-type"
    Et l'entête de la réponse a une propriété "content-length" égale à "0"
    Et le corps de la réponse est vide

  Scénario: API validate - Erreur mauvais token
    Etant donné que je prépare une requête "validate"
    Et que je mets "bad-token" dans la propriété "token" du corps de la requête
    Quand je lance la requête
    Alors le statut de la réponse est 403
    Et l'entête de la réponse n'a pas de propriété "set-cookie"
    Et l'entête de la réponse n'a pas de propriété "content-type"
    Et l'entête de la réponse a une propriété "content-length" égale à "0"
    Et le corps de la réponse est vide

  Scénario: API validate - Erreur token vide
    Etant donné que je prépare une requête "validate"
    Et que je mets "" dans la propriété "token" du corps de la requête
    Quand je lance la requête
    Alors le statut de la réponse est 403
    Et l'entête de la réponse n'a pas de propriété "set-cookie"
    Et l'entête de la réponse n'a pas de propriété "content-type"
    Et l'entête de la réponse a une propriété "content-length" égale à "0"
    Et le corps de la réponse est vide
