import Cookies from 'js-cookie';


export const setToken = (token) => {
    Cookies.set('token', token)
}

export const removeToken = () => {
    Cookies.remove('token')
}

export const getToken = () =>{
    return Cookies.get('token')
}

export const getAuthHeader = () => {
    // return headers['Token'] = getToken()
    return  {headers: {'Authorization' : `Bearer ${getToken()}` } }
  } 