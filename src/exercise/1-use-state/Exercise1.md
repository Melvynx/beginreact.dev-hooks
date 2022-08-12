# useState

`useState` est le hooks **le plus utilisé** dans React (et le plus simple).

Il a un seul but :

> Garder un état dans un composant synchroniser avec l'interface.

Pour faire en sorte que ton composant soit toujours à jour, il faut que React
connaissement le moment ou tu update le state. C'est pour cette raison que la création
d'un state ce fait avec :

```js
const [state, setState] = useState(initialState);
```

`useState` retourne un tableau de deux éléments :

- Le `current state` de cette variable, que l'`initial state` définit par défaut
- La `set function` qui va changer le state avec n'importe quel autre valeur.

Donc pour update le state il faut utiliser `setState(newState)`.

[📖 useState](https://beta.reactjs.org/apis/usestate)

## Exercise 1

Ajoute un state pour que l'application te dise bonjour avec ton nom en temps réel.

Instructions dans le fichier.

## Exercise 2 - Ajout d'un nouveau state

Ajoute un checkbox qui quand elle est activé va afficher le prénom **inversé**.

- Melvyn -> nyvylM
- Jean -> naeJ

Attention, il te faut rajouter un nouveau state.
Et a aucun moment il faut inversé la valeur du state `name`.

💌 Tu apprends ici à gérer un affichage d'état en fonction d'autre état.
💌 Tu apprends aussi à gérer un boolean en fonction de sa valeur précédente.

## Exercise 3 - Stocker chaque changement de notre state

Notre state change, il faut stocker cette changement dans un autre state et les
afficher sous forme de liste

```jsx
<ul>
  {nameHistory.map((name, i) => (
    <li key={i}>{name}</li>
  ))}
</ul>
```

💡 Je met `key={i}` et pas `key={name}` car notre liste ne change jamais d'ordre
et qu'un nom peut revenir deux fois.

💡 Il ne faut pas utiliser `nameHistory.push`. [📖 blog post](https://bobbyhadz.com/blog/react-push-to-state-array)

- 💌 Tu apprends ici à ajouté dans une liste.
- 💌 Tu comprendras le lifecycle des hooks avec un bug expliqué.

## Exercise 4 - Supprimer des name history

Quand tu clique sur un historique, tu va supprimé celui ci de la liste.

```jsx
<ul>
  {historyOfNames.map((name, i) => (
    <li key={i} onClick={() => deleteHistory(i)}>
      {name}
    </li>
  ))}
</ul>
```

Il te faut rajouter la fonction `deleteHistory`.
