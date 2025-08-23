// Add your posts here
const posts = [
  { 
    title: "Example Page", 
    description: "An example of a branching page.", 
    url: "posts/example.html" 
  }
];

const postList = document.getElementById("post-list");
if (postList) {
  posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post-link");
    div.innerHTML = `
      <h2><a href="${post.url}">${post.title}</a></h2>
      <p>${post.description}</p>
    `;
    postList.appendChild(div);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();