import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";

export default class LoginCardRow extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
      editMode: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      .row {
        display: flex;
        flex-direction: row;
        margin: 8px;
      }
      .row:hover .arrows {
        display: flex;
        flex-direction: column;
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
      .arrows {
        display: none;
        padding: -4px 0 -4px 0;
      }
      .arrows > span {
        cursor: pointer;
      }

      .arrows > button {
        display: relative;
        margin: -2px;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
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
        ${this.editMode
          ? html`
              <slot name="edit-row-content"></slot>
              
            `
          : html`
              <slot name="row-content"></slot>
              
            `}
        <div class="arrows">
          ${this.moveUp ? html`<button title="Move line up" @click=${this.moveUp}>▲</button>` : null}
          ${this.editMode
          ? html`
              <button
                title="Save"
                @click=${() => (this.saveInfo = true)}
              >
                💾
              </button>
            `
          : html`
              <button title="Edit" @click=${() => (this.editMode = true)}>✎</button>
            `}
         ${this.moveDown ? html`<button title="Move line down" @click=${this.moveDown}>▼</button>` : null}
        </div>
      </div>
    `;
  }
}

customElements.define("login-card-row", LoginCardRow);
