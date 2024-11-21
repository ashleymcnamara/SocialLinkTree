// Make sure to set Babel as preprocessor in settings
const App = () => (
  <div className="container">
    <div style={{textAlign: 'center', marginBottom: '2rem'}}>
      <img 
        src="https://cdn.bsky.app/img/avatar/plain/did:plc:5tgxxpsiv36w3e37im6kd2se/bafkreifi4eyljcts2nbyilhvbpx73jncektv7iidf7eaub7wzomxk6fqmy@jpeg" 
        alt="Profile" 
        className="profile-img"
      />
      <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
        Ashley Willis
      </h1>
      <p style={{color: '#4b5563'}}>
        Find me on the internet
        <br/>
        <span style={{fontSize: '0.875rem', fontStyle: 'italic'}}>
          (except that one site we don't talk about anymore 👀)
        </span>
      </p>
    </div>

    <a href="https://x.com/ashleymcnamara" className="social-link twitter-link">
      <div>𝕏 (we don't talk about 𝕏)</div>
      <div className="handle">@ashleymcnamara</div>
      <div style={{fontSize: '0.75rem', fontStyle: 'italic'}}>
        🪦 RIP Twitter (2006-2022)
      </div>
    </a>

    <a href="https://bsky.app/profile/ashley.dev" className="social-link bluesky-link">
      <div>Bluesky</div>
      <div className="handle">@ashley.dev</div>
    </a>

    <a href="https://www.threads.net/@ashley_n_willis" className="social-link threads-link">
      <div>Threads</div>
      <div className="handle">@ashley_n_willis</div>
    </a>

    <a href="https://github.com/ashleymcnamara" className="social-link github-link">
      <div>GitHub</div>
      <div className="handle">@ashleymcnamara</div>
    </a>

    <a href="https://www.linkedin.com/in/ashleymcnamara1" className="social-link linkedin-link">
      <div>LinkedIn</div>
      <div className="handle">ashleymcnamara1</div>
    </a>

    <a href="https://www.instagram.com/ashley_n_willis" className="social-link instagram-link">
      <div>Instagram</div>
      <div className="handle">@ashley_n_willis</div>
    </a>

    <div className="footer">
      ashley.social • Built with ☕️ and an aggressive aversion to certain billionaires
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));