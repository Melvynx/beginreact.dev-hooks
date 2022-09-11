# useEffect

useEffect est le hooks le plus compliqué.

Il va gérer le life cycle de ton application.

Mais c'est quoi le life-cycle ?

Voici un graph pour le comprendre :

<img src="../../../public/assets/react-hooks-flow.png" alt="react hooks flow" />

Dans la vidéo Intro, je t'explique en détail ce graphique.

`useEffect` permet de savoir :

- quand un state change
- quand le composant est monté (`onMount`)
- quand le composant est démonté (`onUnmount`)
- quand le composant change (`onChange`)

⚠️ Commet son nom l'indique, il permet de gérer les `side effect`.

Mais c'est quoi un `side effect` ?

Il permet de garder ton composant synchroniser avec des système externe.
(browser APIs ex: localStorage, third-party libraries, network, etc...)

Pour update des states basée sur un autre state tu n'as pas besoin d'avoir de useEffect.

## Exercise 1

Dans le composant `Hello`, on veut que le `name` soit garder dans le `localStorage`
afin de ne pas le perdre quand on recharge la page.

Pour ça écoute Lienx 🦁 dans le fichier Exercise.

💌 Tu comprends l'utilisation basique du `useEffect`.

## Exercise 2 - Optimisation

Notre client a des problèmes, notre application récupère tout le temps la valeur
dans le localStorage.

Essai de remplacer la valeur par défaut par une arrow function. (`useState(() => ...)`)

Effectivement `useState` peut prendre une fonction en paramètre pour initialiser
la valeur par défaut.

En plus il s'est rendu compte que quand on clique sur le Counter, le `useEffect`
est appelé. Il faut que tu ajoutes des dépendances à notre `useEffect`.

💌 Tu comprends comment fonctionne l'initial value du `useState`.

## Exercise 3 - Refactor

Déplace toute la logique qui concerne le state et le localStorage dans un custom hooks.

Pour ça, il te suffit de créer une fonction qui se nomme `useStickyState` et de
déplacer la logique.

`useStickyState` va retourné : `[state, setState]` pour garder la même API que `useState`.

💌 Tu comprends comment fonctionne les custom hooks.

## Exercise 4 - Remplacer le useEffect

Le `useEffect` est devenue inutile, car il permet de tracker un side effect.

Hors ici ce n'est plus un side effect car on sait exactement quand notre state est
modifié.

Pour gérer le localStorage on va créer une fonction `setValue` dans laquelle on va
changer le state, mais aussi update le localStorage.

`setValue` est une fonction à l'intérieur de `useStickyState`. Dans la valeur de retours
tu peux remplacer `setState` par `setValue` pour garder la même API. (attention `setState`
peut prendre une fonction en paramètre, il faut gérer ce cas dans `setValue`)

⚠️ Le `useEffect` à sa place ici, je fais cette exercise pour te rendre
compte des possibilités et de comprendre comment tu peux remplacer le `useEffect`

💌 Tu comprends que l'usage du `useEffect` peut parfois être remplacé.

## Exercise 5 - Nouvelle feature !

Le client souhaite que le Counter s'incrémente quand la taille de la fenêtre change.

Pour ça il va falloir ajouter un `useEffect` dans le composant `App`.

💡 Pour débuter

```js
useEffect(() => {
  const handleResize = () => {
    // ...
  };
  window.addEventListener("resize", handleResize);
  return () => {
    // clean up function
  };
});
```

⚠️ Cette exercise est un défi. Si tu le réussis facilement tant mieux, sinon regarde
la vidéo de solution.

💌 Tu apprends l'utilisation de la clean up function.

## Exercise 6 - Refactor

Maintenant notre composant App rerender quand la fenêtre change. C'est une très
mauvaise pratique, car ça ralenti notre navigateur.

La solution et de déplacer la logique du Counter et du listener qui écoute les changements
de la taille de la fenêtre dans un composant.

Car uniquement le bouton a besoin de savoir quand la taille de la fenêtre change.

💌 Tu apprends à correctement séparer ton code pour éviter de ralentir ta page.

## Solution 6 - EXPLICATION DU HOOKS FLOW

⚠️ Ceci n'est pas un exercise. Tu peux directement regarder la vidéo solution.
