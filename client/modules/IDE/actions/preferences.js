import i18next from 'i18next';
import apiClient from '../../../utils/apiClient';
import * as ActionTypes from '../../../constants';

import {
  setFontSizeActions,
  setAutoSaveActions,
  setLineWrapActions,
  setLintWarningActions,
  setTextOutputActions,
  setGridOutputActions,
  setThemeActions,
  setAutoRefreshActions,
  setLineNumbersActions,
  setAutocloseBracketsQuotesActions,
  setAutocompleteHinterActions,
  setLanguageActions
} from '../reducers/preferences';

function updatePreferences(formParams, dispatch) {
  apiClient
    .put('/preferences', formParams)
    .then(() => {})
    .catch((error) => {
      dispatch({
        type: ActionTypes.ERROR,
        error: error?.response?.data
      });
    });
}

export function setFontSize(value) {
  return (dispatch, getState) => {
    // eslint-disable-line
    dispatch(setFontSizeActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          fontSize: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setLineNumbers(value) {
  return (dispatch, getState) => {
    dispatch(setLineNumbersActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          lineNumbers: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAutocloseBracketsQuotes(value) {
  return (dispatch, getState) => {
    dispatch(setAutocloseBracketsQuotesActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          autocloseBracketsQuotes: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAutocompleteHinter(value) {
  return (dispatch, getState) => {
    dispatch(setAutocompleteHinterActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          autocompleteHinter: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAutosave(value) {
  return (dispatch, getState) => {
    dispatch(setAutoSaveActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          autosave: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setLinewrap(value) {
  return (dispatch, getState) => {
    dispatch(setLineWrapActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          linewrap: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setLintWarning(value) {
  return (dispatch, getState) => {
    dispatch(setLintWarningActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          lintWarning: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setTextOutput(value) {
  return (dispatch, getState) => {
    dispatch(setTextOutputActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          textOutput: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setGridOutput(value) {
  return (dispatch, getState) => {
    dispatch(setGridOutputActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          gridOutput: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setTheme(value) {
  // return {
  //   type: ActionTypes.SET_THEME,
  //   value
  // };
  return (dispatch, getState) => {
    dispatch(setThemeActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          theme: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAutorefresh(value) {
  return (dispatch, getState) => {
    dispatch(setAutoRefreshActions(value));
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          autorefresh: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAllAccessibleOutput(value) {
  return (dispatch) => {
    dispatch(setTextOutput(value));
    dispatch(setGridOutput(value));
  };
}

export function setLanguage(value, { persistPreference = true } = {}) {
  return (dispatch, getState) => {
    i18next.changeLanguage(value);
    dispatch(setLanguageActions(value));
    const state = getState();
    if (persistPreference && state.user.authenticated) {
      const formParams = {
        preferences: {
          language: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}
