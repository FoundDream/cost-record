export default function (func, delay) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    // 如果距离上次执行的时间超过了 delay，则调用 func
    if (now - lastTime >= delay) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}
