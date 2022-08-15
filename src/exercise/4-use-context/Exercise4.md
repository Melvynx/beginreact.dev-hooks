# Formulaire

Les applications web sont majoritairement construites à partir de formulaires.

Il y a plusieurs moyen de gérer les formulaires en React.

Nous allons en voir 4.

## Exercise 1 - Basic

Nous allons récupérer les données de notre formulaire en utilisant l'API basique du
browser avec `onSubmit`.

On récupère l'event puis on va chercher les données qui nous intéressent dans l'event.

💡 Rajoutent des IDs à vos inputs pour que tu puisses les récupérer plus simplement
ainsi que le `htmlFor` des labels.

## Exercise 2 - useRef

Nous allons utiliser `useRef` pour récupérer les données de notre formulaire.

Oui nous n'avons pas encore vue `useRef`, mais c'est une intro sur le terrain.

Pour comprendre tu peux lire [la doc de React](https://beta.reactjs.org/apis/useref#manipulating-the-dom-with-a-ref).

💡 Tu peux nommer `usernameRef` et `passwordRef` les refs.
💡 Tu peux récupérer les données de `usernameRef` et `passwordRef` dans la fonction `handleSubmit`.

## Exercise 3 - Validate

Si tu as un champs que tu souhaite faire validé, tu peux utiliser un `state` pour le faire.

Tu rajoute un state `passwordError` (📖 [useState](https://beta.reactjs.org/apis/usestate#usage)).

Dans le onSubmit, tu vérifie que la longueur du password est de minimum 8 characters,
si c'est pas le cas tu peux changer `passwordError` en `"Password must be at least 8 characters long"`.

Ensuite afficher en rouge le message d'erreur sous le champs password.

En plus, lors que l'user écrit dans le champs password, tu supprime le message d'erreur. (📖 [React event](https://reactjs.org/docs/handling-events.html))

## Exercise 4 - Controlled Input

Voici le dernier moyen de gérer les formulaires en React, c'est un `controlled input`.

C'est quand tu définie une `value` à ton input. Dans ce cas tu dois gérer entièrement la valuer
de l'input. Donc quand il change, tu dois écouter le `onChange` event et update
la valeur de l'input en fonction.

```jsx
const Input = () => {
  const [value, setValue] = useState(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={onChange} />;
};
```

**Remplace le useRef par un state et change les inputs en `controlled input``**
Attention il ne faut pas oublié de réinitialisé l'erreur dans le onChange du password.
Et il faut laissé la gestion de l'erreur dans le onSubmit.

## Exercise 5 - react-use-form-hook

Maintenant on va **tout** remplacer par un `useForm` hook.

Utilise [react-hooks-form](https://react-hook-form.com/get-started) pour refaire
le formulaire ci-dessus. (avec la validation du password)

Les form sont tellement présent sur le web qu'il est souvent conseillé d'utilisé
une library pour gérer leur states et leur erreurs.

Je t'en explique plus dans la vidéo solution.

⚠️ Si c'est compliqué, ne reste pas bloquer et vas regarder les vidéos de réponse ou
les fichiers solutions.
