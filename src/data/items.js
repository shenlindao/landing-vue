import Beige from '@/assets/pics/fujimo_ton_beige.png';
import Black from '@/assets/pics/fujimo_ton_black.png';
import Brown from '@/assets/pics/fujimo_ton_brown.png';
import Gray from '@/assets/pics/fujimo_ton_grey.png';

const item = {
  title: 'Интеллектуальный помощник',
  description: 'Массажный механизм с точностью иммитирует человеческие руки',
  variants: [
    {
      variantId: 1,
      color: {
        name: 'Коричневый',
        hex: '#7d361e',
      },
      price: 219000,
      picture: Brown,
    },
    {
      variantId: 2,
      color: {
        name: 'Бежевый',
        hex: '#fcefba',
      },

      price: 230000,
      picture: Beige,
    },
    {
      variantId: 3,
      color: {
        name: 'Черный',
        hex: '#000000',
      },
      price: 240000,
      picture: Black,
    },
    {
      variantId: 4,
      color: {
        name: 'Серый',
        hex: '#c2c2c2',
      },
      price: 250000,
      picture: Gray,
    },
  ],
};

export default item;
