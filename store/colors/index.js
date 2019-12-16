const THEME = 'THEME';

const initState = {
  theme: '#1890ff',
};

/* ------------actions------------- */
export const updateTheme = theme => (
  { type: THEME, theme }
);

export const updateThemeAsync = theme => (
  dispatch => {
    dispatch(updateTheme(theme));
  }
);

/* ------------reducer------------- */
export default (state = initState, action) => {

  switch (action.type) {

    /* ------------主题------------- */
    case THEME:
      const { theme } = action;
      return { ...state, theme };

    default:
      return state;
  }
};
