function scrollIntoView(eleID) {
  const e = document.getElementById(eleID);
  if (!!e && e.scrollIntoView) {
    e.scrollIntoView();
  }
}

export default scrollIntoView;
