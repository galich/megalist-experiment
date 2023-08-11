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
        "allowed on websites": "https://google.com",
        username: "joedoe",
        password: "123456789",
      },
      {
        "allowed on websites": "https://accounts.firefox.com",
        username: "joedoe",
        password: "123456789",
      },
      {
        "allowed on websites": "https://amazon.com",
        username: "joedoe",
        password: "123456789",
      },
      {
        "allowed on websites": "https://amazon.com",
        username: "joedoe",
        password: "123456789",
      },
      {
        "allowed on websites": "https://amazon.com",
        username: "joedoe",
        password: "123456789",
      },
      {
        "allowed on websites":
          "https://www.bmo.com\nhttps://www.bmoinvestorline.com",
        "credit-card-number": "378282246310005",
        "credit-card-type": "visa",
        "credit-card-expiry": "05/29",
        username: "joedoe",
        password: "123456789",
      },
      {
        "allowed on websites":
          "https://www.bmo.com\nhttps://www.bmoinvestorline.com",
        "credit-card-number": "5555555555554444",
        "credit-card-type": "mastercard",
        "credit-card-expiry": "05/29",
        username: "joedoe",
        password: "123456789",
      },
      {
        "allowed on websites":
          "https://www.bmo.com\nhttps://www.bmoinvestorline.com",
        "credit-card-number": "5610591081018250",
        "credit-card-type": "american-express",
        "credit-card-expiry": "05/29",
        username: "joedoe",
        password: "123456789",
      },
      {
        "allowed on websites":
          "https://www.bmo.com\nhttps://www.bmoinvestorline.com",
        "never use on websites": "https://facebook.com",
        address: "366 Adelaide St W #500",
        city: "Toronto",
        province: "ON",
        "postal code": "M5V 1R9",
        username: "joedoe",
        password: "123456789",
        email: "joe@doe.com",
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
