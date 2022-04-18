export const GET_MODE_FROM_API = 'GET_MODE_FROM_API';
export const SHOW_MODE = 'SHOW_MODE';

// Fetch modes from API
export const getModeFromApi = () => ({
  type: GET_MODE_FROM_API,
});

// Display the modes to front
export const showMode = (modes) => ({
  type: SHOW_MODE,
  modes: modes,
});
