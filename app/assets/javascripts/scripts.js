import DataTitle from './modules/Title';
import Autoresize from './modules/autoresize';
import MobileNav from './modules/MobileNav';
const modules = {
  'React.Data.Title': DataTitle,
  'React.Modules.MobileNav': MobileNav,
  'AUTORESIZE': Autoresize
};

// module loader

const elems = document.querySelectorAll('[data-module]');
[].map.call(elems, (element) => {
  const module = element.dataset.module;
  if (!module) return;
  if (typeof modules[module] === 'undefined') return;
  modules[module](element);
});
