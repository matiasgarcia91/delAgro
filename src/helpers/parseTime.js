/* eslint-disable */

function pad(num) {
    return ('0' + num).slice(-2);
}
export default (secs) => {
  let minutes = Math.floor(secs / 60);
  secs = secs % 60;
  minutes = minutes % 60;
  return minutes+":"+pad(secs);
}

/* eslint-enable */
