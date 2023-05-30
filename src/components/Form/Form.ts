import { dispatch } from "../../store";
import { saveProduct } from "../../store/actions";
import { Product } from "../../types/product";
import style from "./style.css";


const userInputs: Product = {
    name: "",
    price: "0",
}

class Form extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const lname = this.ownerDocument.createElement("label");
      lname.textContent="name"
      const name = this.ownerDocument.createElement("input");
      name.addEventListener("change" , (e: any)=>{
        console.log(e.target.value);
        userInputs.name = e.target.value;
      })

      const lprice = this.ownerDocument.createElement("label");
      lprice.textContent="price"
      const price = this.ownerDocument.createElement("input");
      price.type = "number";
      price.addEventListener("change" , (e: any)=>{
        console.log(e.target.value);
        userInputs.price= e.target.value;
      })

      const btn = this.ownerDocument.createElement("button");
      btn.textContent="save"
      btn.addEventListener("click" , async()=>{
        console.log(userInputs);
        dispatch(await saveProduct(userInputs))
      })

      this.shadowRoot?.appendChild(lname);
      this.shadowRoot?.appendChild(name);
      this.shadowRoot?.appendChild(lprice);
      this.shadowRoot?.appendChild(price);
      this.shadowRoot?.appendChild(btn);

    }
  }
  
  customElements.define("app-form", Form);
  export default Form;