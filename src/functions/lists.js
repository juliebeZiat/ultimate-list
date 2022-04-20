/* eslint-disable import/prefer-default-export */
// function to dynamise progress bar in Lists components depending on actual mod (slug)
let cssProgressHeader = {};
export function cssProgressHeaderBySlug(currentSlug) {
  switch (currentSlug) {
    case 'jeuxvideo':
      cssProgressHeader = {
        backgroundColor: '#7068F4',
      };
      return cssProgressHeader;

    case 'podcasts':
      cssProgressHeader = {
        backgroundColor: '#FFA47A',
      };
      return cssProgressHeader;

    case 'films':
      cssProgressHeader = {
        backgroundColor: '#EF5870',
      };
      return cssProgressHeader;

    default:
      cssProgressHeader = {
        backgroundColor: '#FFA47A',
      };
      return cssProgressHeader;
  }
}

// Variables to convert item_status ids to a string according to the slug
export function statusName(status, slug) {
  switch (status) {
    case 0:
    {
      switch (slug) {
        case 'jeuxvideo':
          return 'À jouer';
        case 'podcasts':
          return 'À écouter';
        case 'films':
          return 'À voir';
        default: return '';
      }
    }
    case 1: return 'En cours';
    case 2:
    {
      switch (slug) {
        case 'jeuxvideo':
          return 'Fini';
        case 'podcasts':
          return 'Écouté';
        case 'films':
          return 'Vu';
        default: return '';
      }
    }
    default: return '';
  }
}
