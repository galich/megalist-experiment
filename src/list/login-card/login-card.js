import { LitElement, html, css } from "lit";

import "./login-card-row";
import "../list-card";

const ICONS = {
  "https://google.com": "../../assets/google.png",
  "https://amazon.com": "../../assets/amazon.png",
};

export default class LoginCard extends LitElement {
  static get properties() {
    return {
      login: { type: Object },
    };
  }

  static get styles() {
    return css`
      .input-display {
        width: 100%;
        padding: 4px;
        padding-inline-start: 8px;
        border-radius: 8px;
      }

      .input-display:hover,
      .input-display:focus-within {
        background-color: rgba(147, 144, 144, 0.2);
      }

      .input-display label {
        color: #6b6b6b;
      }

      .input-display > input {
        border: none;
        width: 100%;
        padding-block: 4px;
        margin-inline-end: 8px;
        background-color: transparent;
      }

      .input-display > input:focus-visible {
        outline: none;
      }
    `;
  }

  getIconSrc() {
    return ICONS[this.login.origin] || "../../assets/default.png";
  }

  renderInput(label, value, type = "text") {
    return html`
      <div slot="row-content" class="input-display">
        <div>
          <label for="${label}">${label}</label>
        </div>
        <input name="${label}" type="${type}" value=${value} />
      </div>
    `;
  }

  render() {
    return html`
      <list-card>
        <div slot="content">
          <login-card-row .icon=${this.getIconSrc()}>
            ${this.renderInput("Website", this.login.origin)}
          </login-card-row>
          <login-card-row>
            ${this.renderInput("Username", this.login.username)}
          </login-card-row>
          <login-card-row>
            ${this.renderInput("Password", this.login.password, "password")}
          </login-card-row>
        </div>
      </list-card>
    `;
  }
}

customElements.define("login-card", LoginCard);
