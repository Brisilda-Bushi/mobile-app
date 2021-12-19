import axios from "axios";
export const GET_USERS = 'GET_USERS';

const API_URL = 'https://api.github.com/gists';
// const API_URL2 = "https://anime-facts-rest-api.herokuapp.com/api/v1"

export const getUsers = () => {
  try {
    return async dispatch => {
      const result = await axios.get(API_URL)
      .then(res => {
        const response = res.data
        // console.log(response)
        if(response){
          dispatch({
            type: GET_USERS,
            payload: response
          })
        }else{
          console.log('Unable to fetch!')
        }
      });
    }
  } catch (error) {
    console.log(error)
  }
}