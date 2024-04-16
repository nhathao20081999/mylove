onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("main");
    clearTimeout(c);
  }, 1000);
};