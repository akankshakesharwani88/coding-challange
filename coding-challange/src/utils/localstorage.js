export function setAuthToken(authToken) {
    return localStorage.setItem('authToken', authToken);
  }
  
  export function getAuthToken() {
    return localStorage.getItem('authToken');
  }
  
  