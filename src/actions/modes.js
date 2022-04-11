export const GET_MODE_FROM_API = 'GET_MODE_FROM_API';
export const SHOW_MODE = 'SHOW_MODE';

export const getModeFromApi = () => ({
  type: GET_MODE_FROM_API,
});

export const showMode = (modes) => ({
  type: SHOW_MODE,
  modes: modes,
});
