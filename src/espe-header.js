import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@2.8.0/+esm';

class EspeHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #004d99;
      color: white;
      font-family: sans-serif;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ::slotted(*) {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .nav-options {
      display: flex;
      gap: 1rem;
    }

    .nav-options a {
      color: white;
      text-decoration: none;
      font-size: 0.95rem;
    }

    .nav-options a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <div class="header-container">
        <slot></slot>
        <div class="nav-options">
          <a href="#">Inicio</a>
          <a href="#">Perfil</a>
          <a href="#">Cerrar sesión</a>
        </div>
      </div>
    `;
  }
}

customElements.define('espe-header', EspeHeader);