# useEffect

useEffect est le hooks le plus compliqué.

Il va gérer le life cycle de ton application.

Mais c'est quoi le life-cycle ?

Voici un graph pour le comprendre :

![react hooks flow](../../assets/react-hooks-flow.png)

Dans la vidéo Intro, je t'explique en détail ce graphique.

`useEffect` permet de savoir :

- quand un state change
- quand le composant est monté (`onMount`)
- quand le composant est démonté (`onUnmount`)
- quand le composant change (`onChange`)

⚠️ Commet son nom l'indique, il permet de gérer les `side effect`.

Mais c'est quoi un `side effect` ?

Il permet de garder ton composant synchroniser avec des système externe. (browser APIs, third-party libraries, network, etc...)

Pour update des states basée sur un autre state tu n'as pas besoin d'avoir de useEffect.

## Exercise 1

Dans le composant `Hello`, on veut que le `name` soit garder dans le `localStorage`
afin de ne pas le perdre quand on recharge la page.

Pour ça écoute 🦁.

## Exercise 2 - Optimisation

Notre client a des problèmes, notre application récupère tout le temps la valeur
dans le localStorage.

Essai de remplacer la valeur par défaut par une arrow function.

Effectivement `useState` peut prendre une fonction en paramètre pour initialiser
la valeur par défaut.

En plus il c'est rendu compte que quand on clique sur le Counter, le `useEffect`
est appelé. Il faut que tu ajoute des dépendances à notre `useEffect`.

## Exercise 3 - Refactor

Déplace toute la logique qui concerne le state et le localStorage dans un custom hooks.

Pour ça, il te suffit de créer une fonction qui se nomme `useStickyState` et de
déplacer la logique.

`useStickyState` va retourné : `[state, setState]` pour garder la même API que `useState`.

## Exercise 4 - Remplacer le useEffect

Le `useEffect` est devenue inutile, car il permet de tracker un side effect.

Hors ici ce n'est plus un side effect car on sait exactement quand notre state est
modifié.

Pour gérer le localStorage on va crée une fonction `setValue` dans laquelle on va
changé le state mais aussi update le localStorage.

`setValue` est une fonction à l'intérieur de `useStickyState`. Dans la valeur de retours
tu peux remplacer `setState` par `setValue` pour garder la même API.

⚠️ Le `useEffect` n'était pas une mauvaise pratique. Cette exercise est à but pédagogique
pour mieux comprendre le `useEffect`.

## Exercise 5 - Nouvelle feature !

Le client souhaite que le Counter s'incrémente quand la taille de la fenêtre change.

Pour ça il va falloir ajouté un `useEffect` dans le composant `App`.

💡 Pour débuter

```js
useEffect(() => {
  const handleResize = () => {
    // ...
  };
  window.addEventListener('resize', handleResize);
  return () => {
    // clean up function
  };
});
```

⚠️ Cette exercise est un défi. Si tu le réussi facilement tant mieux, sinon regarde
la vidéo de solution.

## Solution 6 - EXPLICATION DU HOOKS FLOW

⚠️ Ceci n'est pas un exercise. Tu peux directement regarder la vidéo solution.
