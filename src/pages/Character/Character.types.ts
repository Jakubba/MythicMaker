import { TabEnum } from '../../constans/descCharakter';

export interface CharacterData {
  name: string;
  race: string;
  age: string;
  class: string;
  level: string;
  imageURL?: string;
}

export interface CharacterProfileProps {
  characterData: CharacterData;
  setCharacterData: (data: CharacterData) => void;
}

export interface CharacterStatsProps {
  activeTab: TabEnum;
  setActiveTab: (tab: TabEnum) => void;
  characterTabs: { id: string; label: string }[];
  characterData: { description: string };
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  handleStatChange: (stat: string, value: number) => void;
  displayInputValue: (stat: string) => string | number;
}
