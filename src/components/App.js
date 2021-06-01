import googleImage from '../assets/googlelogo.png';
import avatar from '../assets/avatar.jpg';

function App() {
  return (
    <div className="App">
      <section className="sec-1">
        <div className="links-wrapper">
          <a href="/">Gmail</a>
          <a href="/">Images</a>
        </div>
        <div className="app-drawer-wrapper">
          <a className="app-drawer" href="/">
            <svg focusable="false" viewBox="0 0 24 24">
              <path
                d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,
              -0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 
              -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 
              0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,
              1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,
              -2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 
              0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="avatar-wrapper">
          <a href="/">
            <img className="avatar" src={avatar} alt="Avatar" />
          </a>
        </div>
      </section>
      <section className="sec-2">
        <img src={googleImage} alt="Google Logo" width="272" height="92" />
      </section>
      <section className="sec-3">
        <form>
          <div className="search-wrapper">
            <div className="search-wrapper-svg-container">
              <span className="search-wrapper-svg">
                <svg focusable="false" viewBox="0 0 24 24">
                  <path
                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 
              16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01
               14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="search-input">
              <input type="text" title="search" />
            </div>
          </div>
          <div className="btn-wrapper">
            <input type="button" value="Google Search" />
            <input type="button" value="I'm Feeling Lucky" />
          </div>
        </form>
      </section>
      <section className="sec-4">
        <div className="language-links">
          Google offered in:
          <a href="/">हिन्दी</a>
          <a href="/">বাংলা</a>
          <a href="/">తెలుగు</a>
          <a href="/">मराठी</a>
          <a href="/">தமிழ்</a>
          <a href="/">ગુજરાતી</a>
          <a href="/">ಕನ್ನಡ</a>
          <a href="/">മലയാളം</a>
          <a href="/">ਪੰਜਾਬੀ</a>
        </div>
      </section>
      <section className="sec-5">
        <div id="india">India</div>
        <div className="footer-links-wrapper">
          <div>
            <a href="/">About</a>
            <a href="/">Advertising</a>
            <a href="/">Business</a>
            <a href="/">How Search works</a>
          </div>
          <div>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Settings</a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
