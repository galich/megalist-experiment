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
  { lines: [{ label: "", value: "" }] },
  {
    lines: [
      { label: "allowed on websites", value: "https://google.com" },
      { label: "password", value: "123456789" },
      { label: "username", value: "joedoe" },
    ],
  },
  {
    lines: [
      { label: "allowed on websites", value: "https://accounts.firefox.com" },
      { label: "username", value: "joedoe" },
      { label: "password", value: "123456789" },
    ],
  },
  {
    lines: [
      { label: "allowed on websites", value: "https://amazon.com" },
      { label: "username", value: "joedoe" },
      { label: "password", value: "123456789" },
    ],
  },
  {
    lines: [
      { label: "allowed on websites", value: "https://amazon.com" },
      { label: "username", value: "joedoe" },
      { label: "password", value: "123456789" },
    ],
  },
  {
    lines: [
      { label: "allowed on websites", value: "https://amazon.com" },
      { label: "username", value: "joedoe" },
      { label: "password", value: "123456789" },
    ],
  },
  {
    lines: [
      {
        label: "allowed on websites",
        value: "https://www.bmo.com\nhttps://www.bmoinvestorline.com",
      },
      { label: "credit-card-number", value: "378282246310005" },
      { label: "credit-card-type", value: "visa" },
      { label: "credit-card-expiry", value: "05/29" },
      { label: "username", value: "joedoe" },
      { label: "password", value: "123456789" },
    ],
  },
  {
    lines: [
      {
        label: "allowed on websites",
        value: "https://www.bmo.com\nhttps://www.bmoinvestorline.com",
      },
      { label: "credit-card-number", value: "5555555555554444" },
      { label: "credit-card-type", value: "mastercard" },
      { label: "credit-card-expiry", value: "05/29" },
      { label: "username", value: "joedoe" },
      { label: "password", value: "123456789" },
    ],
  },
  {
    lines: [
      {
        label: "allowed on websites",
        value: "https://www.bmo.com\nhttps://www.bmoinvestorline.com",
      },
      { label: "credit-card-number", value: "5610591081018250" },
      { label: "credit-card-type", value: "american-express" },
      { label: "credit-card-expiry", value: "05/29" },
      { label: "username", value: "joedoe" },
      { label: "password", value: "123456789" },
    ],
  },
  {
    lines: [
      {
        label: "allowed on websites",
        value: "https://www.bmo.com\nhttps://www.bmoinvestorline.com",
      },
      { label: "never use on websites", value: "https://facebook.com" },
      { label: "address", value: "366 Adelaide St W #500" },
      { label: "city", value: "Toronto" },
      { label: "province", value: "ON" },
      { label: "postal code", value: "M5V 1R9" },
      { label: "username", value: "joedoe" },
      { label: "password", value: "123456789" },
      { label: "email", value: "joe@doe.com" },
    ],
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
