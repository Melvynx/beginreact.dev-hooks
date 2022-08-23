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

---

## Exercise 5 - Ou mettre les states ?

(Tu dois aller dans le fichier `Exercise1-2.jsx`, ce n'est pas la suite
de ce qu'on a fait jusqu'ici.)

En React un des skill le plus important, c'est de savoir ou mettre les
states, et c'est une énorme source d'erreur.

Je t'explique le context, je viens de crée l'application la plus
mal foutu possible.

Ton but : la réparer.

1 er problème : Dans la section "Animal" quand on change le "Favorite
animal" rien ne change dans le text en dessous. Met le state
au bonne endroit pour réparer ça et crée un composant pour la partie
animal.

## Exercise 6 - Refactor... Again

Deux concepts à comprendre :

- Les données vont de en haut à en bas !
- Les states doivent être le plus proche possible de leur utilisation

Quand tu vois la todo list, c'est vraiment pas optimal. Elle rerender
toute notre app à chaque nouvelle todo.

Ton objectif est de crée un nouveau composant "Todo" avec le state `todos`
à l'intérieur ainsi que tout les composant qui sont lié aux `Todos`.

Pourquoi ?

Car ce state n'est ni utiliser par notre "UserAnimalForm" ni par
notre "Counter".

Donc il n'a pas ça plaçe ici.

## Exercise 7 - Refactor... Again

Même chose pour Counter.

Tu peux simplement déplacer le state `count` dans le composant "Counter".

Voici à quoi devrait ressembler le composant App :

```jsx
const App = () => {
  return (
    <div>
      <Todo />
      <h2>Counter</h2>
      <Counter />
      <UserAnimalForm />
    </div>
  );
};
```
