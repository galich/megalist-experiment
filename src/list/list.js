import { LitElement, html, css } from "lit";

import "./password-card";

// TODO: Our List implementation should be able to tell if a record is a login/credit card.
// Right now, just assume they're all logins.

export default class ListContainer extends LitElement {
    static get properties() {
        return {
            items: { type: Array }
        }
    }

    static get styles() {
        return css`
            .list {
                display: grid;
                width: 100%;
                height: 100%;
                grid-gap: 32px;
            }
        `
    }

    constructor() {
        super();
        this.items = [];
    }

    renderItems() {
        return this.items.map(item => html`<password-card .login=${item}></password-card>`);
    }

    render() {
        return html`
            <div class="list">
                ${this.renderItems()}
            </div>
        `;
    }
}

customElements.define("list-container", ListContainer);