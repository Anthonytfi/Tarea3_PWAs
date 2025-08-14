import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@2.8.0/+esm';

class HabitCard extends LitElement {
  static properties = {
    title: { type: String },
    checked: { type: Boolean }
  };

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      margin: 0.5rem 0;
      border: 1px solid #ccc;
      border-radius: 6px;
      background-color: #f9f9f9;
      font-family: sans-serif;
    }

    .habit-title {
      flex-grow: 1;
      margin-left: 0.5rem;
      text-decoration: var(--text-decoration, none);
    }

    input[type="checkbox"] {
      cursor: pointer;
    }

    button {
      background: none;
      border: none;
      color: #f44336;
      font-size: 1.2rem;
      cursor: pointer;
      margin-left: 1rem;
    }

    button:hover {
      color: #d32f2f;
    }
  `;

  constructor() {
    super();
    this.title = '';
    this.checked = false;
  }

  render() {
    return html`
      <input type="checkbox" ?checked=${this.checked} @change=${this._toggle} />
      <span class="habit-title" style="--text-decoration: ${this.checked ? 'line-through' : 'none'}">
        ${this.title}
      </span>
      <button @click=${this._delete}>✕</button>
    `;
  }

  _toggle() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('toggle-habit', {
      detail: { title: this.title, checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }

  _delete() {
    this.dispatchEvent(new CustomEvent('delete-habit', {
      detail: { title: this.title },
      bubbles: true,
      composed: true
    }));
    this.remove();
  }
}

customElements.define('habit-card', HabitCard);