import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const overscrollOptions = {
  enabled: true,
  effect: 'bounce',
  damping: 0.17,
  maxOverscroll: 150,
};

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('.scroll-container'), {
      damping: 0.05,
      thumbMinSize: 10,
      plugins: {
        overscroll: { ...overscrollOptions },
      },
    });

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.querySelector('.scroll-container'));
    };
  },
  []);

  return null;
};

export default SmoothScroll;
