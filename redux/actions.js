export const GET_USERS = 'GET_USERS';

const API_URL = 'https://api.github.com/gists';

export const getUsers = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await result.json()
      if(json){
        dispatch({
          type: GET_USERS,
          payload: json
        })
      }else{
        console.log('Unable to fetch!')
      }
    }
  } catch (error) {
    console.log(error)
  }
}