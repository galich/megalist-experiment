import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";

export default class LoginCardRow extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
    };
  }

  static get styles() {
    return css`
      .row {
        display: flex;
        flex-direction: row;
        margin: 8px;
      }

      .row > .image-margin {
        display: grid;
        align-content: center;
        min-width: 32px;
      }

      .image-margin > img {
        width: 22px;
        height: 22px;
      }
    `;
  }

  render() {
    return html`
      <div class="row">
        <div class="image-margin">
          ${when(
            this.icon,
            () => html`<img src=${this.icon} role="presentation" />`,
            () => null
          )}
        </div>
        <slot name="row-content"></slot>
      </div>
    `;
  }
}

customElements.define("login-card-row", LoginCardRow);