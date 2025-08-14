class TestCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p></p>';
  }
}
customElements.define('test-card', TestCard);