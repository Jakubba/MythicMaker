import fireball from '../assets/image/spells/wizards1.png';
import iceShield from '../assets/image/spells/wizard2.png';
import stealArm from '../assets/image/spells/wizard3.png';
import lifeTuner from '../assets/image/spells/wizard4.png';
import fingerFire from '../assets/image/spells/wizard5.png';
import magicBalls from '../assets/image/spells/wizard6.png';
import timeMagic from '../assets/image/spells/wizard7.png';
import healthAmulet from '../assets/image/spells/wizard8.png';

export const wizardsItems = [
  {
    id: 1,
    name: 'Fireball',
    image: fireball,
    stats: { strength: 0, power: 5 },
  },
  {
    id: 2,
    name: 'Ice Shield',
    image: iceShield,
    stats: { strength: 2, power: 2 },
  },
  {
    id: 3,
    name: 'Steal Arm',
    image: stealArm,
    stats: { strength: 4, power: 5 },
  },
  {
    id: 4,
    name: 'Life Tuner',
    image: lifeTuner,
    stats: { strength: 2, power: 2 },
  },
  {
    id: 5,
    name: 'Finger Fire',
    image: fingerFire,
    stats: { strength: 4, power: 5 },
  },
  {
    id: 6,
    name: 'Magic Balls',
    image: magicBalls,
    stats: { strength: 3, power: 5 },
  },
  {
    id: 7,
    name: 'Time Magic',
    image: timeMagic,
    stats: { strength: 4, power: 4 },
  },
  {
    id: 8,
    name: 'Health Amulet',
    image: healthAmulet,
    stats: { strength: 1, power: 3 },
  },
];
