import apiClient from '../../../utils/apiClient';
import * as ActionTypes from '../../../constants';
import { startLoader, stopLoader } from '../reducers/loading';

import { setProjects } from '../reducers/projects';

// eslint-disable-next-line
export function getProjects(username) {
  return (dispatch) => {
    dispatch(startLoader());
    let url;
    if (username) {
      url = `/${username}/projects`;
    } else {
      url = '/projects';
    }
    return apiClient
      .get(url)
      .then((response) => {
        dispatch(setProjects(response.data));
        dispatch(stopLoader());
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.ERROR,
          error: error?.response?.data
        });
        dispatch(stopLoader());
      });
  };
}
