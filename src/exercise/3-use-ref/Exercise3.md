# useRef

Nous avons déjà vue les useRef dans le cas des formulaires. C'était pour récupérer 
la valeur d'un input afin de pouvoir le submit.
```jsx
const Component = () => {
  const inputRef = useRef();
  
  return <input ref={inputRef} id="example" />;
}
```

Quand tu fais ça, tu viens simplement récupérer la référence **dans le DOM** de l'élément.
Ici la valeur d'`input.current` c'est comme si tu faisais `document.querySelector("#example")`.

[📖 useRef - Récupérer un élément du DOM](https://beta.reactjs.org/apis/useref#manipulating-the-dom-with-a-ref)

Mais `useRef` a une deuxième utilité : pour [référencer des valeurs](https://beta.reactjs.org/apis/useref#referencing-a-value-with-a-ref) 
qui sont mémoriser entre les renders.

C'est ce cas qu'on va voir dans cette exercise.

## Exercise

Nous avons une petite application qui quand tu rentre ton prénom, te dit "l'âge de ton prénom".

Pour ce faire on va utiliser une API qui se nomme [agify](https://agify.io/).
Je te laisse check la documentation. Notre application à une input, et on veut
que notre application affiche l'âge du prénom mis dans l'input. Comme si c'était
une search bar -> pas de button submit.

Tu écris -> on fetch -> on affiche la réponse. 

Le problème c'est qu'on ne veut pas fetch 10000x l'api. On veut le faire **quand tu as finis d'écrire**.
Mais comment savoir quand tu as finis d'écrire ?

On va dire qu'à partir du moment ou tu n'écris plus depuis **500ms**, c'est que
tu as terminer d'écrire. A ce moment, on va fetch la nouvelle données.

Donc le hook `useDebouce` va prendre deux paramètres, la `callback` function 
ainsi que `time` en milisecondes.

Il va retourne une fonction qu’on va nommé `onDebouce`. Les consignes sont dans l'exercise.

💌Tu comprends comment stoquer des valeurs qui n'influe pas le render dans des useRef

## Exercise 2

Dans un but pédagogique, ajoute une `ref` nommé `inputRef` afin de récupérer
la valeur de l'input.

Remplace la logique de `value` dans notre fonction `onSearch` en utilisant
la valeur stoqué dans la `ref` `inputRef`. 

💌Tu comprends que la ref permet aussi de référencer une DOM.

## Exercise 3

En utilisant ce qu'on a appris avec les render dans l'exercise sur les `useEffect`,
crée un hooks `useRenderCount` pour calculé le nombre de render qu'on fait subir
à notre composant.

💡`useRef` doit être utilisé pour compter le nombre de render. Tu peux ensuite
afficher `ref.current` dans la vue pour voir le nombre de render.

💡Google est ton amis.

💌Tu comprends l'aventage qu'à une référence dans les render.