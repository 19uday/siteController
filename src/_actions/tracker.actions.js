export const trackerActions = {
  setrow,
  setzone
};

function setrow(row) {
  return dispatch => {
      dispatch(setr(row));
  };

  function setr(row) { return { type: 'setr', row } }
}

function setzone(zone) {
  console.log(zone);
  return dispatch => {
      dispatch(setz(zone));
  };

  function setz(zone) { return { type: 'setz', zone } }
}

