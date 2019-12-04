export const timer = (callBack, timer) => {
  const timerId = setTimeout(() => {
    callBack();
  }, timer);
  return timerId;
};

export const timePause = timeoutId => {
  let start = Date.now();
  let remaining = "";

  window.clearTimeout(timeoutId);
  remaining -= Date.now() - start;
  let timerId = setTimeout(() => {
    console.log("PAUSE");
  }, remaining);

  return timerId;
};

export const timeResume = (timeoutId, delay, callback) => {
  window.clearTimeout(timeoutId);
  let timerId = setTimeout(() => {
    console.log("RESUMED");
    callback();
  }, delay);
  return timerId;
};
