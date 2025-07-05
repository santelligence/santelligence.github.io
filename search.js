document.getElementById('search').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {
    const text = post.textContent.toLowerCase();
    post.style.display = text.includes(filter) ? '' : 'none';
  });
});