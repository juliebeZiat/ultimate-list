export const LOADER_ON = 'LOADER_ON';
export const LOADER_OFF = 'LOADER_OFF';

// Action to active loader
export const loaderOn = () => ({
  type: LOADER_ON,
});

// Action to disable loader
export const loaderOff = () => ({
  type: LOADER_OFF,
});
