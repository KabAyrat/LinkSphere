const loginBtn = document.getElementById("login-btn")
const registerBtn = document.getElementById("register-btn")
const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById("register-form") 

loginBtn.addEventListener('click', function(){
    loginBtn.classList.add('active')
    registerBtn.classList.remove('active')
    loginForm.classList.add('active')
    registerForm.classList.remove('active')
})
registerBtn.addEventListener('click', function(){
    registerBtn.classList.add('active')
    loginBtn.classList.remove('active')
    registerForm.classList.add('active')
    loginForm.classList.remove('active')
})



document.addEventListener('DOMContentLoaded', function () {
    // Лайк
    const likeButton = document.querySelector('.like-btn');
    likeButton.addEventListener('click', function () {
      const isLiked = this.dataset.liked === 'true';
      this.dataset.liked = !isLiked;
      this.classList.toggle('text-red-500', !isLiked);
      this.classList.toggle('text-gray-600', isLiked);
    });
  
    // Комментарии
    const commentButton = document.querySelector('.comment-btn');
    const commentSection = document.querySelector('.comments-section');
    const commentInput = document.querySelector('.comments-section textarea');
    const submitComment = document.querySelector('.comments-section button');
    const commentsList = document.querySelector('.comments-list');
  
    commentButton.addEventListener('click', function () {
      commentSection.classList.toggle('hidden');
    });
  
    submitComment.addEventListener('click', function () {
      const commentText = commentInput.value.trim();
      if (commentText) {
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);
        commentInput.value = '';
      }
    });
  });