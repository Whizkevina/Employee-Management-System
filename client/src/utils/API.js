import axios from "axios";

/**
 * @description methods for interacting with API Auth routes and home routes with axios
 */
export default {
  getPosts: () => axios.get("/post/post"),
  login: userData => axios.post("/auth/login",  userData),
  signUp: userData => axios.post('/auth/signup', userData),
  dashboard: token => axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}}),
  searchd: (token, identifier) => axios.get(`/api/search/${identifier}`, {headers: {Authorization: `bearer ${token}`}}),
  addPosts:(token, postData)  => axios.post('/api/addPost', postData, {headers: {Authorization: `bearer ${token}`}}),
  signUpm: (token,userData) => axios.post('/api/signup', userData,{headers: {'Authorization': `bearer ${token}`}}),
  // updatePortfolio:(token,userData) => axios.put('/api/update', userData,{headers: {'Authorization': `bearer ${token}`}}),
  updatePost:(token,postData) => axios.put('/api/updatepost', postData,{headers: {'Authorization': `bearer ${token}`}}),
  updateUser:(token,userData) => axios.put('/api/update', userData,{headers: {'Authorization': `bearer ${token}`}}),
  removePost:(token, id) => axios.delete(`/api/deletepost/${id}`,{headers: {'Authorization': `bearer ${token}`}}),
  removeUser:(token, id) => axios.delete(`/api/delete/${id}`,{headers: {'Authorization': `bearer ${token}`}}),
  uploadFile:(token,fileData) => axios.post('/api/upload', fileData,{headers: {'Authorization': `bearer ${token}`}}),
  getImg:(token,imdAdd) => axios.get(`/api/getImage/${imdAdd}`,{headers: {'Authorization': `bearer ${token}`}}),
  addAct:(token, actData)  => axios.post('/api/act', actData, {headers: {Authorization: `bearer ${token}`}}),
  getAct: token => axios.get('/api/act', {headers: {Authorization: `bearer ${token}`}}),
  updateAct:(token,data) => axios.put('/api/act',data,{headers: {'Authorization': `bearer ${token}`}}),
};