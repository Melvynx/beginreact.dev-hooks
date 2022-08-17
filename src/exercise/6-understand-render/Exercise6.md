# Render

Un des plus gros problèmes des élèves sont les `render`s en React.
Dans ce chapitre on va voir **très brièvement** le hooks `useMemo` et `useCallback`
ainsi que la méthode `memo`.

On va aussi découvrir le `Profiler` qui est un outils sous cotés de React.
Les render ne sont pas si compliqués à comprendre. J'ai imaginer
des exercises pour te faire comprendre les renders.

Déjà c'est quoi qui va lancé un `render` ?

Tout simplement un state, comme `useState` ou `useReducer`.
Quand tu appel la fonction `setState` ou `dispatch` tu lance un render.
Si il y a un changement de state (valeur différente) React va lancer
le render de ton composant.

Dans le cas d'un `useContext`, **tous les "consumers"** vont rerender
quand le composant du qui contient le `Provider` render.

Dans quel cas un composant rerender ?

1. Quand son parent rerender, **tous les enfants sont rerender**.
2. Quand un état change, le composant lui même rerender.
3. Quand ton composant consomme un context qui change

Je précise qu'un state qui change, qu'il soit dans un hooks qui est dans un hooks
qui est dans un hooks que ton composant utilises fonctionne aussi.

[📖 un Guide super cool est dispo](https://www.developerway.com/posts/react-re-renders-guide)

Les props n'ont aucun rôle dans le render. Quel change ou pas
les enfants vont rerender.

Sauf en utilisant `memo` qui permet de créer des `Pure Component`
ce qui empêche le rerender.

Mais attention, dans les exercises on l'utilise pour apprendre **mais
il ne faut surtout pas l'utiliser pour chaque composant qui rerender
avant qu'il y ai des bugs.**

`memo` est la pour résoudre des problèmes, pas pour préparer la
résolution de problèmes.

Il y a des dixènes de solutions pour éviter des rerender juste dans
l'architecture de nos composants.

Pour pouvoir en voir un maximume, cette exercise est composé d'exercise
différent, tu trouveras dans ce dossier 3 exercises.

## Exercise 1 - Sépararer, composer, spliter

Il faut séparer un maximume ses composants ! Le but d'un framework comme
React est de séparer la logique tout le temps. Ici l'app possède un state,
c'est une erreur, car seul 1 des enfants la consommes. Il faut donc séparer
le state dans un nouveau composant `Counter`.

💡Pour t'aider j'ai "highlight" les composants qui sont rerender
en vert !
