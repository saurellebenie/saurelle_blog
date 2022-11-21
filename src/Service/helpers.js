import http from "../http-common";

class TutorialDataService {
    getAllpost() {
    return http.get("/post/get");
  }

//   get(id) {
//     return http.get(`/post/${id}`);
//   }

  addPost(data) {
    return http.post("/post/add", data);
  }

  updatePost(id, data) {
    return http.put(`/post/${id}`, data);
  }

  deletePost(id) {
    return http.delete(`/post/${id}`);
  }

  // deletePost() {
  //   return http.delete(`/post`);
  // }

  getPostById(id) {
    return http.get(`/post/get/${id}`);
  }

  // user endpoints
// register
  addUser(data){
    return http.post('/user/register',data);
  }

  // login
  addUserLogin(data){
    return http.post('/user/login', data)
  }

  // get all the user
  getUsers(){
    return http.get('user/get')
  }
}



export default new TutorialDataService();
