import Notifier from './index';

setTimeout(() => {
  const types = ["primary", "success", "danger", "warn", "dark"];
  const alignments = ["top-left", "top-right", "bottom-right", "bottom-left"];
  let t = 0;
  let a = 0;
  document.getElementById("notify").addEventListener("click", () => {
    new Notifier({
      title: "Notification",
      message: "This is a notification",
      type: types[t],
      align: alignments[a],
    });
    t++
    if (t > 4) t = 0;
    a++
    if (a > 3) a = 0;
  });
}, 1000);