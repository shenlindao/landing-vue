import FuncMassageBg from '@/assets/pics/func-massage-bg.jpg';
import FuncWarmBg from '@/assets/pics/func-warm-bg.jpg';
import FuncZerogBg from '@/assets/pics/func-zerog-bg.jpg';
import FuncScanBg from '@/assets/pics/func-scan-bg.jpg';

const FUNCTIONS_CONTENT = {
  FunctionsContentParams: [
    {
      id: 1,
    },
  ],
};
const CHAIR_FUNCTION = {
  chairFunctions: [
    {
      id: 1,
      title: 'Интеллектуальный массаж',
      content: FUNCTIONS_CONTENT,
      background: FuncMassageBg,
    },
    {
      id: 2,
      title: 'Прогревание тела',
      // content: FUNCTIONS_CONTENT,
      background: FuncWarmBg,
    },
    {
      id: 3,
      title: 'Zero gravity',
      // content: FUNCTIONS_CONTENT,
      background: FuncZerogBg,
    },
    {
      id: 4,
      title: 'Сканирование тела',
      // content: FUNCTIONS_CONTENT,
      background: FuncScanBg,
    },
  ],
};

export default CHAIR_FUNCTION;
