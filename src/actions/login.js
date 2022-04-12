// changer la valeur de l'un des champs du formulaire de login
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';

export const changeLoginField = (name, newValue) => ({
  type: CHANGE_LOGIN_FIELD,
  name: name,
  value: newValue,
});
