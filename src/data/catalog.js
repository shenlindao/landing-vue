import _ from 'lodash';

import FUJIMO_QI from '@/assets/pics/fujimo-qi.jpg';
import FUJIMO_TON from '@/assets/pics/fujimo-ton.jpg';
import FUJIMO_KEN from '@/assets/pics/fujimo-ken.jpg';
import FUJIMO_PRIME from '@/assets/pics/fujimo-prime.jpg';
import FUJIMO_KENKO from '@/assets/pics/fujimo-kenko.jpg';
import FUJIMO_OKI from '@/assets/pics/fujimo-oki.jpg';
import FUJIMO_LOTUS from '@/assets/pics/fujimo-lotus.jpg';
import massage from './massage';
import categories from './categories';

export const massageChairFull = massage.massages.slice(0, -1);
export const massageNotFull = _
  .filter(massage.massages, (item) => item.id === 1
    || item.id === 3
    || item.id === 4);
export const massageCapesFull = _
  .filter(massage.massages, (item) => item.id === 1
    || item.id === 3);
export const massageCapesNotFull = _
  .filter(massage.massages, (item) => item.id === 1);

export const categoryChair = _.filter(categories.categories,
  ((category) => category.id === 1));
export const categoryCapes = _.filter(categories.categories,
  ((category) => category.id === 2));

const CATALOG = {
  cards: [
    {
      id: 1,
      router: 'fujimo-ton',
      picture: FUJIMO_TON,
      raiting: 5,
      type: 'Массажное кресло',
      model: 'FUJIMO TON',
      price: 250000,
      count: 9,
      massage: massageChairFull,
      category: categoryChair,
    },
    {
      id: 2,
      router: '',
      picture: FUJIMO_QI,
      raiting: 4.5,
      type: 'Массажное кресло',
      model: 'FUJIMO QI',
      price: 215000,
      count: 12,
      massage: massageNotFull,
      category: categoryChair,
    },
    {
      id: 3,
      router: '',
      picture: FUJIMO_KEN,
      raiting: 4,
      type: 'Массажное кресло',
      model: 'FUJIMO KEN',
      price: 199000,
      count: 5,
      massage: massageChairFull,
      category: categoryChair,
    },
    {
      id: 4,
      router: '',
      picture: FUJIMO_PRIME,
      raiting: 5,
      type: 'Массажная накидка',
      model: 'FUJIMO PRIME',
      price: 27900,
      count: 10,
      massage: massageCapesFull,
      category: categoryCapes,
    },
    {
      id: 5,
      router: '',
      picture: FUJIMO_KENKO,
      raiting: 4.5,
      type: 'Массажное кресло',
      model: 'FUJIMO KENKO',
      price: 189000,
      count: 14,
      massage: massageNotFull,
      category: categoryChair,
    },
    {
      id: 6,
      router: '',
      picture: FUJIMO_OKI,
      raiting: 4,
      type: 'Массажное кресло',
      model: 'FUJIMO OKI',
      price: 219000,
      count: 5,
      massage: massageNotFull,
      category: categoryChair,
    },
    {
      id: 7,
      router: '',
      picture: FUJIMO_LOTUS,
      raiting: 5,
      type: 'Массажная накидка',
      model: 'FUJIMO LOTUS',
      price: 18900,
      count: 4,
      massage: massageCapesNotFull,
      category: categoryCapes,
    },
  ],
};

export default CATALOG;
