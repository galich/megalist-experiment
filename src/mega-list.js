import { LitElement, html, css } from "lit";
import "./list";

export class Megalist extends LitElement {
  static get styles() {
    return css`
      ul {
        list-style-type: none;
      }

      list-container {
        width: 80%;
        max-width: 500px;
      }

      .container {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr;
        justify-items: center;
      }
    `;
  }

  render() {
    const items = [
      {
        origin: "https://google.com",
        username: "joedoe",
        password: "123456789",
      },
      {
        origin: "https://accounts.firefox.com",
        username: "joedoe",
        password: "123456789",
      },
      {
        origin: "https://amazon.com",
        username: "joedoe",
        password: "123456789",
      },
      {
        origin: "https://amazon.com",
        username: "joedoe",
        password: "123456789",
      },
      {
        origin: "https://amazon.com",
        username: "joedoe",
        password: "123456789",
      },
    ];

    return html`
      <div class="container">
        <h1>Manage Credentials</h1>
        <list-container .items=${items}></list-container>
      </div>
    `;
  }
}

customElements.define("mega-list", Megalist);
