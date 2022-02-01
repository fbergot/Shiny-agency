# Shiny-agency

Ce repo contient le code de l'API dont vous aurez besoin pour shiny-agency


## Lancer l'API 

2. Installez les `node_modules` avec `yarn`
3. Faites tourner l'API avec `yarn start`


## Consommer l 'API

- La route pour récupérer les profils des freelances :
`GET /freelances`

- La route pour avoir le détail d'un profil de freelance :
`GET /profile/?id={id}`

- La route pour avoir le questionnaire :
`GET /survey/`

- La route pour obtenir le résultat du questionnaire :
`GET /results/?a1=0&a2=1&a3=0...`

