import { LitElement, html, css } from "lit";

import "./login-card-row";
import "../list-card";

const ICONS = {
  "https://google.com": "./assets/google.png",
  "https://amazon.com": "./assets/amazon.png",
  "https://facebook.com": "./assets/facebook.png",
  default: "./assets/default.png",
};

export default class LoginCard extends LitElement {
  static get properties() {
    return {
      login: { type: Array }, // Should this be an object?
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

  getIconSrc(name, value) {
    if (name.includes("websites")) {
      return ICONS[value] ?? ICONS["default"];
    }
  }

  onMoveUp(idx) {
    if (idx > 0) {
      this.login.lines.splice(
        idx - 1,
        2,
        this.login.lines[idx],
        this.login.lines[idx - 1]
      );
    }
    this.requestUpdate();
  }

  onMoveDown(idx) {
    if (idx < this.login.lines.length - 1) {
      this.login.lines.splice(
        idx,
        2,
        this.login.lines[idx + 1],
        this.login.lines[idx]
      );
    }
    this.requestUpdate();
  }

  onsaveInfo(label, value, idx){
    this.editMode = false;
    this.login.lines[idx].label = label;
    this.login.lines[idx].value = value;
    this.requestUpdate();
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

    const valuesToEdit = value.split("\n").map((v) => {
      return html`<textarea placeholder="Enter your data" rows="1">
${v}</textarea
      >`;
    });

    return html`
      <div slot="row-content" class="input-display">
        <div>
          <label for="${label}">${label}</label>
        </div>
        ${values}
      </div>

      <div slot="edit-row-content" class="input-display">
        <div>
          <input
            list="label-suggestions"
            placeholder="Enter label"
            value=${label}
          />
          <datalist id="label-suggestions">
            <option>username</option>
            <option>password</option>
            <option>credit-card-number</option>
            <option>credit-card-type</option>
            <option>credit-card-expiry</option>
            <option>allowed websites</option>
            <option>never show on websites</option>
            <option>Serg's favourite dishwasher model#</option>
            <option>VIN# for car</option>
            <option>address</option>
          </datalist>
        </div>
        ${valuesToEdit}
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
          ${this.login.lines.map(({ label, value }, idx) => {
            let type = "text";
            if (label.includes("password")) {
              type = "password";
            }

            // Format the credit card number value
            if (label.includes("card-number")) {
              const result = value.match(/.{1,4}/g) || [];
              value = result.join("-");
            }

            return html`
              <login-card-row
                .moveUp=${idx > 0 ? () => this.onMoveUp(idx) : null}
                .moveDown=${idx < this.login.lines.length - 1
                  ? () => this.onMoveDown(idx)
                  : null}
                .saveInfo=${!label && !value ? null : () => this.onsaveInfo(label, value, idx)}
                .editMode=${!label && !value}
                .icon=${this.getIconSrc(label, value)}
              >
                ${this.renderInput(label, value, type)}
              </login-card-row>
            `;
          })}
        </div>
      </list-card>
    `;
  }
}

customElements.define("login-card", LoginCard);
