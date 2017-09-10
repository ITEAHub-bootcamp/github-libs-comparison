const repositories = (state = false, action) => {
  if (action.type === 'SHOW_LOADER') {
    return true;
  } else if (action.type === 'HIDE_LOADER') {
    return false;
  } else {
    return state;
  }
};

export default repositories;
