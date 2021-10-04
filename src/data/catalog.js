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

console.log(categories);

export const massageFull = massage.massages.slice(0, -1);
export const massageFujimoQi = _
  .filter(massage.massages, (item) => item.id === 1
    || item.id === 2);

export const categoryChair = _.filter(categories.categories,
  ((category) => category.id === 1));
export const categoryCapes = _.filter(categories.categories,
  ((category) => category.id === 2));

const CATALOG = {
  cards: [
    {
      id: 1,
      picture: FUJIMO_TON,
      raiting: 5,
      type: 'Массажное кресло',
      model: 'FUJIMO TON',
      price: 250000,
      count: 9,
      title: 'Разминающий роликовый',
      massage: massageFull,
      router: 'fujimo-ton',
      category: categoryChair,
    },
    {
      id: 2,
      picture: FUJIMO_QI,
      raiting: 4.5,
      type: 'Массажное кресло',
      model: 'FUJIMO QI',
      price: 215000,
      count: 12,
      massage: massageFujimoQi,
      router: '',
      category: categoryChair,
    },
    {
      id: 3,
      picture: FUJIMO_KEN,
      raiting: 4,
      type: 'Массажное кресло',
      model: 'FUJIMO KEN',
      price: 199000,
      count: 5,
      router: '',
      massage: massageFull,
      category: categoryChair,
    },
    {
      id: 4,
      picture: FUJIMO_PRIME,
      raiting: 5,
      type: 'Массажная накидка',
      model: 'FUJIMO PRIME',
      price: 27900,
      count: 10,
      router: '',
      category: categoryCapes,
    },
    {
      id: 5,
      picture: FUJIMO_KENKO,
      raiting: 4.5,
      type: 'Массажное кресло',
      model: 'FUJIMO KENKO',
      price: 189000,
      count: 14,
      router: '',
      category: categoryChair,
    },
    {
      id: 6,
      picture: FUJIMO_OKI,
      raiting: 4,
      type: 'Массажное кресло',
      model: 'FUJIMO OKI',
      price: 219000,
      count: 5,
      router: '',
      category: categoryChair,
    },
    {
      id: 7,
      picture: FUJIMO_LOTUS,
      raiting: 5,
      type: 'Массажная накидка',
      model: 'FUJIMO LOTUS',
      price: 18900,
      count: 4,
      router: '',
      category: categoryCapes,
    },
  ],
};

export default CATALOG;
