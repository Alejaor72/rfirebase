import "./components/export"
import { dispatch } from "./store";
import { getProducts } from "./store/actions";

class AppContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    async connectedCallback() {
      dispatch(await getProducts());
      this.render();
  }
  
    render() {
        const form = this.ownerDocument.createElement("app-form");
        const plist = this.ownerDocument.createElement("products-list");
        this.shadowRoot?.appendChild(form);
        this.shadowRoot?.appendChild(plist);
    }
  }
  
  customElements.define("app-container", AppContainer);