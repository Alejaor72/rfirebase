import { addObserver, appState } from "../../store";
import style from "./style.css";

class ProductsList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
    }
    //36
    connectedCallback() {
      this.render();
    }
  
    render() {
      if (this.shadowRoot) this.shadowRoot.innerHTML = "";
      appState.products.forEach((product)=>{
          const pcontainer = this.ownerDocument.createElement("article");
          const ptitle = this.ownerDocument.createElement("h3");
          ptitle.textContent = product.name;
          const pprice = this.ownerDocument.createElement("h4");
          pprice.textContent = product.price;
          pcontainer?.appendChild(ptitle);
          pcontainer?.appendChild(pprice);
          this.shadowRoot?.appendChild(pcontainer);
      })
        //
    }
  }
  
  customElements.define("products-list", ProductsList);
  export default ProductsList;