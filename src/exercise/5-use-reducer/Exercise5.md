# use reducer

Voici un hooks totalement sous-coté.

Dans cet exercice, on va utiliser **toute la puissance**. Il faut savoir que quand
j'ai appris React c'est celui qui m'a pausé le plus problème. Je vais essayer
de rendre son concept le plus simple possible.

[📖 Doc de useReducer](https://beta.reactjs.org/apis/usereducer)

![use reduce flow](../../../public/assets/use-reduce-flow.png)

_J'explique ce flow dans la vidéo d'intro._

> C'est quoi la différence avec useState ?

`useState` est une version limitée de `useReducer`, regarde :

(En acceptant que `initialValue` ne soit pas une fonction)

```js
const reducer = (prevValue, newValue) => {
  // On peut aussi passé une fonction dans le `setState`
  if (typeof newValue === 'function') {
    return newValue(prevValue);
  }
  return newValue;
};

const useState = (initialValue) => {
  const [state, setState] = React.useReducer(reducer, initialValue);
  return [state, setState];
};
```

Finalement ce reduce est une sorte de `super useState` pour
réaliser tous tes rêves et tes désirs.

À vrai dire, `useState` est simplement une configuration par défaut de `useReducer`.

[📖 React hooks system](https://the-guild.dev/blog/react-hooks-system)

## Exercice 1

Nous avons un counter qui ne fonctionne pas pour l'instant, fait
le fonctionner.
Quand tu cliques sur le compteur, il doit s'incrémenter de 1.

💌 Tu apprends l'usage le plus basique du `useReducer`.

## Extra 2 - Bouton moins !

Maintenant ajoute un deuxième button : le button moins !

Quand tu cliques dessus, il doit décrémenter de 1.

🦁 Tu vas devoir modifier la fonction `reducer` pour qu'elle
s'adapte à l'action qui est passée en paramètre.

💡 Tips de code :

```js
switch (action) {
  case 'increment':
  // ...
  case 'decrement':
  // ...
  default:
  // ...
}
```

- 💌 Tu apprends à gérer un reducer en fonction d'une action !

## Extra 3 - Refactor et reset

Pour cette exercise 3 choses :

1. Ajoute un button `reset` avec une nouvelle action : `reset` qui reset le compteur à 0.
2. Crée une constante qui contient chaque Action (`increment`, `decrement`, `reset`)
   et utilise ces constantes au lieu de string

💡 Tips de code :

```js
const REDUCER_ACTIONS = {
  INCREMENT: 'increment',
  // ...
};
```

- 💌 Tu apprends à ajouter des actions qui ne se basent pas sur la valeur du state.
- 💌 Tu apprends à refactor ton code pour éviter des problèmes.

PS : TypeScript résout bien mieux ce problème qu'avec une constante.

## Extra 4 - De 5 en 5 !

Ajoute deux nouveaux boutons :

- `+5` qui increment de **5**
- `-5` qui decrement de **5**

Pour ça ne rajoute pas de nouvelles actions, mais plutôt ajouté
un paramètre à notre action.

💡 Tips de code :

```js
const reducer = (value, { action, value }) => {
  /*...*/
};
```

💡 Il faut que tu refactor chaque appel à notre dispatch !

💌 Tu apprends à ajouter 1 paramètre dans l'action.

## Bonus

Tu veux aller encore plus loin ?

Tu peux rajouter un input pour `set` la value, avec une action set.

Pas de vidéo correction pour ça, tu peux partager sur le Discord !
