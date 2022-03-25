const Endpoints = {
    LOGIN_URL:'http://localhost:8000/auth/login',
    SIGNUP_URL:'http://localhost:8000/auth/signup',
    POST_LIKE_URL: '',
    POST_DETAILS_URL: '',
    GET_POSTS_URL:'http://localhost:8000/posts',
GET_POSTBYID_URL:'http://localhost:8000/posts',
GET_COMMENTS_BY_POSTID:'http://localhost:8000/posts/{}/comments?page=1&pageSize=10',
}
export default Endpoints;
