import { LitElement, html, css } from "lit";

export default class ListCard extends LitElement {
  static get styles() {
    return css`
      .card {
        display: grid;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 8px;
        border-radius: 8px;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div>
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("list-card", ListCard);
