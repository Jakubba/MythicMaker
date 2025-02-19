export interface TabType {
  id: TabEnum;
  label: string;
}

export enum TabEnum {
  DESCRIPTION = 'description',
  STATS = 'stats',
  WEAPONS = 'weapons',
  WIZARDS = 'wizards',
  EQUIPMENT = 'equipment',
  NOTES = 'notes',
  CHARACTERISTICS = 'characteristics',
}

export const tabs: TabType[] = [
  { id: TabEnum.DESCRIPTION, label: 'Opis' },
  { id: TabEnum.STATS, label: 'Statystyki' },
  { id: TabEnum.WEAPONS, label: 'Bronie' },
  { id: TabEnum.WIZARDS, label: 'Zaklęcia' },
  { id: TabEnum.EQUIPMENT, label: 'Ekwipunek' },
  { id: TabEnum.NOTES, label: 'Notatki' },
  { id: TabEnum.CHARACTERISTICS, label: 'Cechy postaci' },
];

export const stats = [
  { name: 'health', label: 'Punkty życia' },
  { name: 'strength', label: 'Siła' },
  { name: 'dexterity', label: 'Zręczność' },
  { name: 'endurance', label: 'Kondycja' },
  { name: 'intelligence', label: 'Inteligencja' },
  { name: 'wisdom', label: 'Mądrość' },
  { name: 'charisma', label: 'Charyzma' },
];
