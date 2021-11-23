import Visa from '@/assets/pics/Payment Method/Visa.svg';
import Webmoney from '@/assets/pics/Payment Method/Webmoney.svg';
import Yandex from '@/assets/pics/Payment Method/Yandex.svg';
import AmazonPay from '@/assets/pics/Payment Method/AmazonPay.svg';
import ApplePay from '@/assets/pics/Payment Method/ApplePay.svg';
import GooglePay from '@/assets/pics/Payment Method/GooglePay.svg';
import Maestro from '@/assets/pics/Payment Method/Maestro.svg';
import Mastercard from '@/assets/pics/Payment Method/Mastercard.svg';
import PayPal from '@/assets/pics/Payment Method/PayPal.svg';
import Qiwi from '@/assets/pics/Payment Method/Qiwi.svg';
import UnionPay from '@/assets/pics/Payment Method/UnionPay.svg';

export const PAY_CARD = [
  { icon: Mastercard },
  { icon: PayPal },
  { icon: Qiwi },
  { icon: UnionPay },
  { icon: Visa },
  { icon: Webmoney },
  { icon: Yandex },
  { icon: AmazonPay },
  { icon: ApplePay },
  { icon: GooglePay },
  { icon: Maestro },
];

const PAY_VARIANTS = {
  content: [
    {
      title: 'Оплата наличными',
      text: 'Вы оплачиваете заказ наличными менеджеру или курьеру при его получении. Обратите внимание, что при получении заказа вам выдается накладная и гарантийный талон, содержащий информацию по комплектации заказа и его стоимости.<br>При получении заказа Вы должны проверить его на соответствие наименований и количество позиций, а также качество товара. После расчета с курьером Вам будет необходимо подписать накладную и гарантийный талон, этим Вы подтвердите, что претензий к качеству и комплектации заказа не имеете. Вместе с заказом Вы получаете накладную, содержащую все товарные позиции заказа и гарантийный талон.',
      // pic: ,
    },
    {
      title: 'Оплата картой',
      text: 'Заказанный товар можно оплатить банковской картой онлайн. Для этого сообщите менеджеру точную информацию о том, какие товары Вы желаете приобрести. После подтверждения итоговой суммы Вы получите ссылку на оплату.<br>Пожалуйста, уточняйте все детали заказа сразу.',
      pic: PAY_CARD,
    },
    {
      title: 'Оплата по квитанции',
      text: 'Для получения квитанции Вам необходимо заполнить дополнительные поля формы заказа. Если все данные указаны верно, мы сформируем для Вас квитанцию и направим на указанную электронную почту, в ином случае наш менеджер свяжется в Вами для уточнения деталей заказа.',
      // pic: ,
    },
    {
      title: 'Оплата наложенным платежом',
      text: 'Услуга «наложенный платёж» оказывается во всех филиалах Компании «ПЭК» на территории России.<br>Внимание! При оплате наложенным платежом с покупателя взимается комиссия в размере 3% от итоговой суммы заказа.',
      // pic: ,
    },
    {
      title: 'Рассрочка',
      text: 'Условия для предоставления рассрочки на покупку товара:<br><ol><li>Срок от 6 до 24 месяцев</li><li>Первоначальный взнос: 0 - 90% от суммы чека</li><li>Сумма рассрочки от 3 000 до 300 000 рублей</li><li>Возраст от 18 до 70 лет</li><li>Постоянная регистрация в России</li><li>Стаж на последнем месте работы превышает 3 месяца</li></ol>',
      // pic: ,
    },
  ],
};

export default PAY_VARIANTS;
