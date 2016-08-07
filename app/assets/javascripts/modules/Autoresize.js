
export function resizeEvt() {
  const skipTop = parseInt(this.dataset.skipY) || 0;
  const skipSides = parseInt(this.dataset.skipX) || 0;
  this.setAttribute("style", `min-height:${window.innerHeight - skipTop}px;min-width:${window.innerWidth - skipSides}px`);
}

export default function autoresize(element) {
    window.addEventListener('resize', resizeEvt.bind(element));
    resizeEvt.bind(element)();
}
