// Simple array of posts (you update this when you add new pages)
const posts = [
    { title: "Example Page", description: "An example of a branching page.", url: "posts/example.html" }
];

// Insert posts into homepage
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

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();