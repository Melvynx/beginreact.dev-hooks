# useContext

Ohhhhhhhh ! J'ai décidé de te faire un exercise **un peu complexe** et **complet** ici !
Tu vas faire du refactor, j'ai déjà tout préparé et il va falloir refactor tout ce bordel
en utilisant `useContext`.

Mais déjà, c'est quoi `useContext`. Il permet de partager de la logique (valeur, function)
entre plusieurs composants sans avoir à passer des props.

Enfaite ce hooks répond à cette question :

> Comment passer une props à un enfant qui est très loins dans le DOM ?

[📖 useContext - Récupérer des données du contexte](https://beta.reactjs.org/apis/usecontext#passing-data-deeply-into-the-tree)

On va jeter un coup d'œil à la doc ensemble, mais le meilleur moyen de comprendre reste la pratique.

## Exercise 1 - Refactor

J'ai fait une petite page très simple, avec `currentUser` stocké dans le contexte. Si tu vas voir
l'application pour l'instant elle utilise des props.

Ton but est **de supprimer toutes les props** et les remplacés par le context.

Les instructions sont dans l'exercise.

💌Tu apprends à utiliser les contexts pour éviter le "props drilling"

## Exercise 2 - Split

Maintenant dans le fichier `App` on a toute la logique métier (le `user`).

Mais je souhaite séparer mon `App` et mon `UserContext`.

Pour ça crée un composant `UserContextProvider` et déplace le `currentUser`, le `logout` et
le `onSubmit` dans ce composant.

Tu risques d'avoir des problèmes, car on utilise `currentUser` dans l'app.
Essai de trouver la solution et si tu n'y arrives pas il y à le corriger.

💌Tu apprends à séparer ton code afin de séparer la Vue et la Logique.

## Exercise 3 - Création d'un nouveau context

Notre client, c'est rendu compte que le composant du `Logout` était rerender
quand le user change alors qu'il **n'a pas besoin du user** pour fonctionner.

Tu vas donc créer un deuxième context `UserManagerContext` que tu vas utiliser
dans le composant `UserContextProvider`.

`UserManagerContext` va posséder `logout` et `submit`.
`UserContext` va posséder `currentUser` uniquement.

💌 Tu comprends qu'on peut optimiser `useContext` pour éviter des rerender inutile.

## Exercise 4 - Utilisation de `context-selector`

Dans cette formation, tu as un average déloyale : tu apprends et
comprends l'utilisation de certaine library. Cette fois c'est [use-context-selector](https://www.npmjs.com/package/use-context-selector).

Pourquoi je choisis cette library ? Car c'est la plus proche du hooks
`useContext`. Cette formation est niveau débutant donc il n'y a pas besoin
d'apprendre `Redux` ou `Zustand` maintenant.

💌 Tu apprends à utiliser la librairie `context-selector` qui te fais gagner
en performance et en temps de dev.
