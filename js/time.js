function updateDateAndTime(){
  let date = new Date();
  const ye = new Intl.DateTimeFormat('ua', { year: 'numeric' }).format(date)
  const mo = new Intl.DateTimeFormat('ua', { month: 'short' }).format(date)
  const da = new Intl.DateTimeFormat('ua', { day: '2-digit' }).format(date)
  const ho = new Intl.DateTimeFormat('ua', { hour: '2-digit' }).format(date)
  const mi = new Intl.DateTimeFormat('ua', { minute: '2-digit' }).format(date)
  const se = new Intl.DateTimeFormat('ua', { second: '2-digit' }).format(date)
  document.querySelector('#time').innerHTML = `${ho}:${mi}:${se}`;
  document.querySelector('#date').innerHTML = `${da} ${mo} ${ye}`;
  let dateUpdator = setInterval(updateDateAndTime,1000);
}

updateDateAndTime();
