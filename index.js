document.addEventListener("DOMContentLoaded", function () {
    let blogs_html = "";
    const blogList = document.getElementById("blogs");

    fetch("./blogs.json").then((response) => {
    response.json().then((data) => {
      data.forEach((blog) => {
        blogs_html += `
        <article class="blog-post">
            <div class="image-container">
            <img
                src="${blog.image}"
                alt="${blog.title}"
                class="blog-image"
            >
            <div class="overlay">
                <h2>${blog.title}</h2>
                <p class="description"></p>
            </div>
            </div>
            <p class="catchy-sentence">${blog.content}</p>
        </article>
`;
      });
  blogList.innerHTML = blogs_html;

    })
  }).catch((error) => {
    console.log(error)
  });

});
