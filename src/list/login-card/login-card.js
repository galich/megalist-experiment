import { LitElement, html, css } from "lit";

import "./login-card-row";
import "../list-card";

const ICONS = {
  "https://google.com": "../../assets/google.png",
  "https://amazon.com": "../../assets/amazon.png",
  "https://facebook.com": "../../assets/facebook.png",
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

  getIconSrc(name) {
    if (name.includes("websites")) {
      return ICONS[this.login[name]] || "../../assets/default.png";
    }
  }

  renderInput(label, value, type = "text") {
    const values = value.split("\n").map((v) => {
      if (label.includes("websites")) {
        return html`<div><a href=${v}>${v}</a></div>`;
      }

      if (label.includes("address")) {
        return html`<div>
          <a href=${`https://www.google.ca/maps/place/${v}`}>${v}</a>
        </div>`;
      }

      if (value.includes("@")) {
        return html`<div>
          <a href=${`mailto:${v}`}>${v}</a>
        </div>`;
      }
      return html`<input name="${label}" type="${type}" value=${v} />`;
    });

    return html`
      <div slot="row-content" class="input-display">
        <div>
          <label for="${label}">${label}</label>
        </div>
        ${values}
      </div>
    `;
  }

  // render() {
  //   return html`
  //     <list-card>
  //       <div slot="content">
  //         <login-card-row .icon=${this.getIconSrc()}>
  //           ${this.renderInput("Website", this.login.allowed on websites)}
  //         </login-card-row>
  //         <login-card-row>
  //           ${this.renderInput("Username", this.login.username)}
  //         </login-card-row>
  //         <login-card-row>
  //           ${this.renderInput("Password", this.login.password, "password")}
  //         </login-card-row>
  //       </div>
  //     </list-card>
  //   `;
  // }

  render() {
    return html`
      <list-card>
        <div slot="content">
          ${Object.entries(this.login).map(([name, value]) => {
            let type = "text";
            if (name.includes("password")) {
              type = "password";
            }

            // Format the credit card number value
            if (name.includes("card-number")) {
              const result = value.match(/.{1,4}/g) || [];
              value = result.join("-");
            }

            return html`
              <login-card-row .icon=${this.getIconSrc(name)}>
                ${this.renderInput(name, value, type)}
              </login-card-row>
            `;
          })}
        </div>
      </list-card>
    `;
  }
}

customElements.define("login-card", LoginCard);
