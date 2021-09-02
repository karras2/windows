function getIconFile(name, size) {
  let icon = new Image();
  icon.src = "./icons/" + name + size + "x" + size + ".png";
  return icon;
};
// 0: MSStore
window.icons = [
  [getIconFile(name, 32)]
];