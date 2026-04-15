export interface Theme {
  id: string;
  name: string;
  icon: string;
  colors: {
    bg: string;
    bgSecondary: string;
    text: string;
    textSecondary: string;
    accent: string;
    accentSecondary: string;
    border: string;
  };
  effects: {
    smoke?: boolean;
    leather?: boolean;
    sepia?: boolean;
    frost?: boolean;
  };
}

export const themes: Theme[] = [
  {
    id: 'midnight-birmingham',
    name: 'Midnight Birmingham',
    icon: '🌙',
    colors: {
      bg: '#030202',
      bgSecondary: '#141C26',
      text: '#E9E9E9',
      textSecondary: '#818081',
      accent: '#F2A679',
      accentSecondary: '#5E3115',
      border: '#3B4B59',
    },
    effects: { smoke: true },
  },
  {
    id: 'small-heath-dawn',
    name: 'Small Heath Dawn',
    icon: '🌅',
    colors: {
      bg: '#2C1810',
      bgSecondary: '#8B4513',
      text: '#E9D5B5',
      textSecondary: '#D4A574',
      accent: '#E9D5B5',
      accentSecondary: '#8B4513',
      border: '#5D3A1A',
    },
    effects: { smoke: true },
  },
  {
    id: 'whiskey-hour',
    name: 'Whiskey Hour',
    icon: '🥃',
    colors: {
      bg: '#1A0F0A',
      bgSecondary: '#2D1810',
      text: '#E9E9E9',
      textSecondary: '#B09080',
      accent: '#5E3115',
      accentSecondary: '#F2A679',
      border: '#5E3115',
    },
    effects: { leather: true, smoke: true },
  },
  {
    id: 'industrial-winter',
    name: 'Industrial Winter',
    icon: '❄️',
    colors: {
      bg: '#0F1419',
      bgSecondary: '#1C2833',
      text: '#C0C0C0',
      textSecondary: '#808080',
      accent: '#4A90A4',
      accentSecondary: '#7AB8C7',
      border: '#3B4B59',
    },
    effects: { frost: true },
  },
  {
    id: 'archive-mode',
    name: 'Archive Mode',
    icon: '🕯️',
    colors: {
      bg: '#0A0603',
      bgSecondary: '#1A1209',
      text: '#D4AF37',
      textSecondary: '#8B7355',
      accent: '#D4AF37',
      accentSecondary: '#B8860B',
      border: '#3E2723',
    },
    effects: { sepia: true, smoke: true },
  },
];

export const getTheme = (id: string): Theme => {
  return themes.find((t) => t.id === id) || themes[0];
};

export const applyTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  root.style.setProperty('--bg', theme.colors.bg);
  root.style.setProperty('--bg-secondary', theme.colors.bgSecondary);
  root.style.setProperty('--text', theme.colors.text);
  root.style.setProperty('--text-secondary', theme.colors.textSecondary);
  root.style.setProperty('--accent', theme.colors.accent);
  root.style.setProperty('--accent-secondary', theme.colors.accentSecondary);
  root.style.setProperty('--border', theme.colors.border);
  
  document.body.className = '';
  if (theme.effects.sepia) document.body.classList.add('sepia-filter');
  if (theme.effects.leather) document.body.classList.add('leather-texture');
  if (theme.effects.frost) document.body.classList.add('frost-effect');
};
