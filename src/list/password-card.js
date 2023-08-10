import { LitElement, html, css } from "lit";
import { when } from 'lit/directives/when.js';

import "./list-card";

const ICONS = {
    "https://google.com": "../../assets/google.png",
    "https://amazon.com": "../../assets/amazon.png",
}

// TODO: rename to LoginCard

export default class PasswordCard extends LitElement {
    static get properties() {
        return {
            login: { type: Object }
        }
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

            .input-display {
                width: 100%;
                padding: 4px;
                padding-inline-start: 8px;
                border-radius: 8px;
            }

            .input-display > .label {
                color: #6b6b6b;
            }

            .input-display > input {
                border: none;
                width: 100%;
                padding-block: 4px;
                margin-inline-end: 8px;
            }

            .input-display:hover {
                background-color: rgba(147, 144, 144, 0.20);
            }
        `;
    }

    getIconSrc() {
        return ICONS[this.login.origin] || "../../assets/default.png";
    }

    renderRow(label = "", value = "", icon = null) {
        return html`
            <div class="row">
                <div class="image-margin">
                    ${when(
                        icon,
                        () => html`<img src=${icon} role=presentation />`,
                        () => null
                    )}
                </div>
                <div class="input-display">
                    <div class="label">${label}</div>
                    ${this.renderInput(value)}
                </div>
            </div>
        `;
    }

    renderInput(value) {
        return html`
            <input type="text" value=${value} />
        `;
    }

    render() {
        return html`
            <list-card>
                <div slot="content">
                    ${this.renderRow("Website", this.login.origin, this.getIconSrc())}
                    ${this.renderRow("Username", this.login.username)}
                    ${this.renderRow("Password", this.login.password)}
                </div>
            </list-card>
        `;
    }
}

customElements.define("password-card", PasswordCard);