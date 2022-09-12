---
slideOptions:
  theme: Night
  progress: true
  transition: 'fade'
  spotlight:
    enabled: false
---

# BeginReact.dev - Les hooks

###### tags: `beginreact-dev`

---

## 2019

Création des hooks

![](https://i.imgur.com/6KsxS9Q.png)

---

### Résumé

Les composants deviennent complexe.

On va donc divisé nos composants en "lifecycle function" à la place d'avoir des méthodes dans notre composants (class).

Effectivement avant TOUTE la logique était dans le composant.

Les `hooks` permettent de séparer cette logique.

Il faut utiliser leur pleins potentielles.

---

## Comparaison avec les classes

---

### Avant

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
  }
  clearTitle() {
    this.setState({ title: '' });
  }
  componentDidMount() {
    console.log('Component mount');
  }
  componentDidUpdate() {
    console.log('Component update');
  }
  render() {
    return <header onClick={() => clearTitle()}>{this.state.title}</header>;
  }
}
```

---

### Ce qu'on voit

- lifecycle method
- state

---

### Après

```jsx
const useLifeCycle = () => {
  useEffect(() => {
    console.log('Component mount');
  }, []);

  useEffect(() => {
    console.log('Component update');
  });
};

const useTitle = () => {
  const [title, setTitle] = useState('');

  const clearTitle = () => {
    setTitle('');
  };

  return { title, setTitle, clearTitle };
};

const Header = () => {
  const { title, setTitle, clearTitle } = useTitle();
  useLifeCycle();

  return <header onClick={() => clearTitle()}>{title}</header>;
};
```

---

### Exemple de la conf

![](https://i.imgur.com/OGL5Lkm.png)

---

### Avant

![](https://i.imgur.com/DdugmoS.png)

---

### Après

![](https://i.imgur.com/zcG9Kjj.png)

---

## C'est quoi les hooks

> Les hooks sont des fonctions qui vous donnent les features React comme les states et le lifecycle methods sans avoir besoin des classes.

---

### List des hooks

Voici les 5 hooks qu'on va voir dans cette formation.

- useState
- useContext
- useEffect
- useReducer
- useRef

**En tout il y en a 16 !**

---

### Infinité de hooks ?

Comme tu l'as vue dans cette exemple

```jsx
const useTitle = () => {
  const [title, setTitle] = useState('');

  const clearTitle = () => {
    setTitle('');
  };

  return { title, setTitle, clearTitle };
};
```

**useTitle** est un hooks.

---

### Pourquoi

Tout ce qui commence par `use` est un hook.

Un `hook` est une fonction qui appel d'autre `hook` (`useState`, `useEffect`, etc...)

---

## Quand faire des custom hooks ?

---

### Aussi souvent que possible

---

### Oublie pas

> Les `hooks` permettent de séparer cette logique.
> Il faut utiliser leur pleins potentielles.

---

### Sépare ton code

- Séparation des components ✅
- Séparation des hooks ✅

---

### Mieux vaut ==trop== séparer que pas asser
