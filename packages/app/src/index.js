import { CartPage } from "@monorepo/cart";
import { CheckoutPage } from "@monorepo/checkout";
import { Header } from "@monorepo/components";

const app = document.createElement('div');

console.log('testing')

app.appendChild(Header());
app.appendChild(CheckoutPage());
app.appendChild(CartPage());

document.getElementById('root').appendChild(app);

