export const AIRTABLE_API_KEY = 'keyIveHQ90JLZtwtw';
export const routes = ['Welcome', 'Resources', 'Glossary', 'Quiz'];
export const entryQuestion = 'recbUJj5ay5guHEg9';
export const searchOptions = {
  includeScore: true,
  includeMatches: true,
  distance: 100,
  threshold: 0.1,
  ignoreLocation: true,
};
export const tables = [
  'questions',
  'resources',
  'glossary',
  'answers',
  'options',
  'glossary_highlighted_terms',
];
export const theme = {
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    max: 1280,
  },
  colors: {
    primaryPurple: '#593ebf',
    charcoal: '#181818',
    darkGray: '#4F4F4F',
    scrollGradient: 'linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 25%)',
    primaryGradient: 'linear-gradient(135deg, #FFDD94 0%, #D1C6F3 100%)',
    hoverGradient: 'linear-gradient(135deg, #FFF4DC 0%, #D4C7FF 100%)',
    gradientBorder:
      'linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #FFDD94 0%, #D1C6F3 100%) border-box;',
    gradientBorderHover:
      'linear-gradient(135deg, #FFF4DC 0%, #D4C7FF 100%) padding-box, linear-gradient(135deg, #FFF4DC 0%, #D4C7FF 100%) border-box;',
  },
};
export const g = [
  ['tangerines', 'url(#sunnytangerine)', 0.3],
  ['ghosts', '#F9F8FF', 0.4],
  ['lavenders', '#F0ECFF', 0.3],
];
export const tangerines = [
  [45, 4.5, 270, 70],
  [45, 2.5, 170, -140],
  [20, 3.25, -220, -40],
  [-20, 5, -200, 300],
  [35, 3, 300, 600],
  [50, 2.5, 80, 800],
  [-20, 2, 330, 950],
  [15, 5.5, -200, 1100],
  [40, 3, 400, 1150],
  [0, 4, 200, 1550],
  [-15, 4, -200, 1800],
  [15, 6, 200, 2000],
];
export const ghosts = [
  [20, 3.5, 250, -50],
  [-20, 3, -50, 100],
  [50, 2.5, 300, 330],
  [10, 1.5, 100, 530],
  [-5, 3, -100, 730],
  [-15, 4, 200, 1050],
  [5, 3, -80, 1250],
  [30, 2, 400, 1450],
  [0, 5, 100, 1750],
];

export const lavenders = [
  [5, 4, -100, -300],
  [20, 2, 100, 200],
  [-5, 1, 300, 500],
  [15, 2.5, 360, 750],
  [0, 3, -100, 950],
  [-15, 3.5, 100, 1250],
  [5, 5, 300, 1550],
  [15, 4, -100, 2050],
];
