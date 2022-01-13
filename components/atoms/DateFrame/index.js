export const DateFrame = ({ t1, t2, t3, t4, t5, t6, t7 }) => (
  <div className="font-averia grid gap-3 place-items-center">
    <div className="relative">
      <div className="text-right absolute -left-full top-1/2 transform -translate-y-1/2 w-full pr-3">
        <span className="block font-bold">{t2}</span>
        <span className="block font-roboto text-xs">{t3}</span>
      </div>
      <div className="w-20 h-20 rounded-full bg-white shadow-lg font-bold flex items-center justify-center border-4 border-yellow-500 text-4xl">
        {t1}
      </div>
      <div className="text-left absolute -right-full top-1/2 transform -translate-y-1/2 w-full pl-3">
        <span className="block font-bold">{t4}</span>
        <span className="block font-roboto text-xs">{t5}</span>
      </div>
    </div>
    <div className="space-y-2 text-center font-averia">
      <span className="block font-bold">{t6}</span>
      <span>{t7}</span>
    </div>
  </div>
);
