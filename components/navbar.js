export const Navbar = () => {
  return `
    <nav>
        <div class="navbar">
          <div class="left-navbar">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Imgur_Logo_Light.svg/1280px-Imgur_Logo_Light.svg.png"
              alt=""
            />

            <a href="" class="button">
              <img
                src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"
                alt=""
              />

              <span>New Post</span>
            </a>
          </div>

          <div class="search-navbar">
            <form action="">
              <input type="text" placeholder="Images, #tags, @users oh my!" />

              <button>
                <img
                  src="https://s.imgur.com/desktop-assets/desktop-assets/icon-search.8d0f9b564a4659d48d8eca38b968a7f2.svg"
                  alt=""
                />
              </button>
            </form>
          </div>

          <div class="right-navbar">
            <a href="">
              <ion-icon name="medal-outline"></ion-icon>
            </a>

            <a href="" class="button ad"> Go Ad-free </a>

            <a href="signin.html" class="button signin" id="sigin">Sign in</a>

            <a href="" class="button signup">Sign up </a>
          </div>
        </div>
      </nav>


    `;
};
