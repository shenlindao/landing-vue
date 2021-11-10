import MassageRoll from '@/assets/pics/massage-roll.svg';
import MassageStr from '@/assets/pics/massage-str.svg';
import MassageShiazu from '@/assets/pics/massage-shiazu.svg';
import MassageAir from '@/assets/pics/massage-air.svg';
import Heating from '@/assets/pics/heating.png';

import PartArms from '@/assets/pics/part-arms.svg';
import PartCalves from '@/assets/pics/part-calves.svg';
import PartFeet from '@/assets/pics/part-feet.svg';
import PartHips from '@/assets/pics/part-hips.svg';
import PartShoulders from '@/assets/pics/part-shoulders.svg';

import MassageRollChair from '@/assets/pics/massage-roll-chair.png';
import MassageStrChair from '@/assets/pics/massage-str-chair.png';
import MassageShiazuChair from '@/assets/pics/massage-shiazu-chair.png';
import MassageAirChair from '@/assets/pics/massage-air-chair.png';
import HeatingChair from '@/assets/pics/heating-chair.png';

export const MASSAGE_PARTS = [
  { name: 'Плечи', icon: PartShoulders },
  { name: 'Руки', icon: PartArms },
  { name: 'Бедра', icon: PartHips },
  { name: 'Икры', icon: PartCalves },
  { name: 'Стопы', icon: PartFeet },
];

export const MASSAGE_PARTS_STR = MASSAGE_PARTS.filter((parts) => parts.name !== 'Стопы' && parts.name !== 'Икры');

export const MASSAGE_PARTS_SHIATZU_ROLL_HEAT = MASSAGE_PARTS.filter((parts) => parts.name !== 'Руки');

const MASSAGE = {
  massages: [
    {
      id: 1,
      title: 'Разминающий-роликовый',
      description: 'Разминание оказывает основное воздействие на мышцы человека, благодаря чему повышается их сократительная функция, увеличивается эластичность сумочно-связочного аппарата, растягиваются укороченные фасции, апоневрозы.<br>Разминание способствует усилению крово- и лимфообращения; при этом значительно улучшается питание тканей, повышается обмен веществ, уменьшается или полностью снимается мышечное утомление, повышаются работоспособность мышц, их тонус и сократительная функция.',
      icon: MassageRoll,
      picture: MassageRollChair,
      parts: MASSAGE_PARTS_SHIATZU_ROLL_HEAT,
    },
    {
      id: 2,
      title: 'Растягивающий',
      description: 'Растягивающий массаж оказывает благотворное влияние на весь организм и особенно на опорно-двигательную систему. Он существенно облегчает общее состояние человека, улучшает подвижность суставов, увеличивает амплитуду движений, обеспечивает прилив сил и повышение настроения.<br>Суть такого массажа заключается в выполнении специального комплекса последовательных растяжек и скруток, сочетающихся с глубокой, детальной проработкой всех мышц, связок и сухожилий. Параллельно производится активная стимуляция лимфы и крови, что позволяет эффективно и быстро выводить токсины, накапливающиеся в мягких тканях организма после выполнения физических нагрузок или в процессе «застоя» мышц. Все движения осуществляются плавно, неспешно, оказывая не только лечебный, но и расслабляющий эффект.',
      icon: MassageStr,
      picture: MassageStrChair,
      parts: MASSAGE_PARTS_STR,
    },
    {
      id: 3,
      title: 'Шиацу',
      description: 'Шиацу – разновидность японского точечного массажа, стимулирующего ток крови и лимфы, а также положительно влияющего на мысли и потоки энергии тела человека. Его название дословно переводится как «пальцы» и «надавливать».<br>Благодаря точечному воздействию, процедура массажа шиацу не только приносит приятные ощущения, но и обеспечивает целебный эффект. При надавливании на определенные точки на теле можно стимулировать функции иммунной системы организма, сделать кожу упругой и здоровой, избавиться от разных болезней и недомоганий.',
      icon: MassageShiazu,
      picture: MassageShiazuChair,
      parts: MASSAGE_PARTS_SHIATZU_ROLL_HEAT,
    },
    {
      id: 4,
      title: 'Воздушно-компрессионный',
      description: 'Воздушно-компрессионный массаж с помощью воздушных подушечек – это одна из самых мягких и щадящих процедур в массажном кресле. Он идеально подходит для тех людей, которые предпочитают нежное проминание. При таком массаже будут задействованы практически все области тела, начиная от шеи и вплоть до ног. Воздушный массаж прекрасно расслабляет и поднимает настроение.<br>Одновременно с этим он приносит огромную пользу организму. Его можно выполнять как основную процедуру, так и в качестве предварительного этапа перед роликовым воздействием.',
      icon: MassageAir,
      picture: MassageAirChair,
      parts: MASSAGE_PARTS,
    },
    {
      id: 5,
      title: 'Выступ роликов 11см',
      description: 'Японская технологии стоун-терапии с применением инфракрасного нагрева роликов',
      icon: Heating,
      picture: HeatingChair,
      parts: MASSAGE_PARTS_SHIATZU_ROLL_HEAT,
    },
  ],
};

export default MASSAGE;
