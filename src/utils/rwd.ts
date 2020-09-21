interface IGetDevice {
  (width: number): 'phone' | 'tablet' | 'desktop';
}

const getDevice: IGetDevice = (width) => {
  const isPhone = !!navigator?.userAgent.match(/phone/gi);

  if (width < 680 || isPhone) return 'phone';

  if (width < 1280 && width > 680) return 'tablet';

  return 'desktop';
};

export { getDevice };
