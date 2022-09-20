# Render

Un des plus gros problèmes des élèves sont les `render`s en React.
Dans ce chapitre, on va voir **très brièvement** le hooks `useMemo` et `useCallback`
ainsi que la méthode `memo`.

On va aussi découvrir le `Profiler` qui est un outil sous-cotés de React.
Les render ne sont pas si compliqués à comprendre. J'ai imaginé
des exercises pour te faire comprendre les renders.

Déjà, c'est quoi qui va lancer un `render` ?

Tout simplement un state, comme `useState` ou `useReducer`.
Quand tu appelles la fonction `setState` ou `dispatch` tu lances un render.
S'il y a un changement de state (valeur différente) React va lancer
le render de ton composant.

Dans le cas d'un `useContext`, **tous les "consumers"** vont rerender
quand le composant qui contient le `Provider` render.

Dans quel cas un composant rerender ?

1. Quand son parent rerender, **tous les enfants sont rerender**.
2. Quand un état change, le composant lui-même rerender.
3. Quand ton composant consomme un context qui change

Je précise qu'un state qui change, qu'il soit dans un hooks qui est dans un hooks
qui est dans un hooks que ton composant utilise fonctionne aussi.

[📖 Blog post pour comprendre les render](https://www.developerway.com/posts/react-re-renders-guide)

Les props n'ont aucun rôle dans le render. Quel change ou pas
les enfants vont rerender.

Sauf en utilisant `memo` qui permet de créer des `Pure Component`
ce qui empêche le rerender.

Mais attention, dans les exercises on l'utilise pour apprendre, **mais
il ne faut surtout pas l'utiliser pour chaque composant qui rerender
avant qu'il y ai des bugs.**

`memo` est là pour résoudre des problèmes, pas pour préparer la
résolution de problèmes.

Il y a des dizaines de solutions pour éviter des rerender juste dans
l'architecture de nos composants.

Pour pouvoir en voir un maximum, cette exercise est composé d'exercise
différent, tu trouveras dans ce dossier 5 exercises.

## Exercise 1 - Séparer, composer, splitter

Il faut séparer un maximum ses composants ! Le but d'un framework comme
React est de séparer la logique tout le temps. Ici l'app possède un state,
c'est une erreur, car seul 1 des enfants la consommes. Il faut donc séparer
le state dans un nouveau composant `Counter`.

💡Pour t'aider j'ai "highlight" les composants qui sont rerender
en vert !

Comme tu le vois chaque fois que tu cliques sur le counter,
le `Header` et le `Footer` rerender.

## Exercise 2 - Memo

Cette formation est pour les débutants, `Memo` commence à devenir complexe
mais je te partage quand même son usage.

Dans l'application a deux input, un pour l'age et l'autre pour le username
gérer dans le même `useState`.

Deux composants distincts affiche ses composants : `Age` et `Username`.

Quand je modifie l'age, le `Username` rerender aussi et je ne veux pas
que ceci se produise.

Ta mission est de transformer le composant `Age` et `Username` en un
`PureComponent` en utilisant [memo](https://fr.reactjs.org/docs/react-api.html#reactmemo)

## Exercise 3 - Composant dans un composant !

Voici un anti-pattern très gênant !

Il **ne faut jamais mettre un composant dans un autre composant** en
utilisant la syntaxe que j'ai utilisé dans l'exercise.

Regarde : change la valeur de l'input puis clique sur le bouton !

Boom 💥 la valeur est redevenus ce quel était.

Il faut donc mettre le composant `HeaderInput` en dehors du composant
`Header`.

## Exericse 4 - Children

On l'a déjà vue dans l'exercise du `useEffect` mais j'ai envie de le
souligner.

Encors une fois il faut **abuser** de la création de composant.

Ici chaque fois que la page change de taille toute notre app est rerender
alors que uniquement le bouton change.

Pour que tu vois le lag j'ai crée un composant qui génère 10'000 nombre
aléatoire. Tu verras que React aime pas trop ce rerender.

Tu peux crée un composant `ScrollComponent` qui contient deux props :

- `topChildren`
- `children`

Et tu peux donc remplacer notre app avec ses composant et mettre `SmallComponentTop`
ainsi que `ExpensiveComponent` dans les props.

## Exercise 5 - Profiler
