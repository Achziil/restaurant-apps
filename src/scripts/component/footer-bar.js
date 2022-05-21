class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
        <p><a href="https://www.instagram.com/iamfauziil/">Achmad Fauzi Ilham</a> || Created Based On Dicoding Module</p>
        <p>All data obtained from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">Dummy Restaurant API Reference</a></p>
        </footer>          
          `;
  }
}

customElements.define('footer-bar', FooterBar);
