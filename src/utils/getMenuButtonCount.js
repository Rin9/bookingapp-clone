export const getMenuButtonCount = (windowSize) => {
  if (windowSize <= 640) {
    return 1;
  }
  if (windowSize <= 800) {
    return 2;
  }
  if (windowSize <= 1024) {
    return 4;
  }
  if (windowSize <= 1280) {
    return 5;
  }
  if (windowSize <= 9999) {
    return 6;
  }
};
