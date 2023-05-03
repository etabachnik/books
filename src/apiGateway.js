import { API_BASE } from "./config";

export default class ApiGateway {
  get = async (path) => {
    const response = await fetch(`${API_BASE}${path}`);
    const dto = response.json();
    return dto;
  };
  post = async (path, payload) => {
    /////for private books put userToken
    let headers = {
        "Content-Type": "application/json",
    }
    if(payload.isUserToken){
        const userToken = localStorage.getItem('token');
        const authHeaders = userToken ? {'user-token': userToken} : EMPTY_OBJECT;
        headers ={...headers, ...authHeaders};
    } 
    const response = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload)
    });
    const dto = response.json();
    return dto;
  };
}