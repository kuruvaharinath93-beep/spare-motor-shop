// 🧩 Product List - 40 Eicher Tractor Spare Parts
const products = [
  { id: 1, name: "Engine Oil Filter", price: 350, image: "https://5.imimg.com/data5/SELLER/Default/2022/10/RL/XP/TP/68262083/round-automotive-oil-filter-1000x1000.jpg" },
  { id: 2, name: "Air Filter", price: 500, image: "https://th.bing.com/th/id/OIP.6r3MRQLg5Oeb1KpRXq5JpQHaHa?w=179&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" },
  { id: 3, name: "Fuel Filter", price: 420, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Piston Kit", price: 2800, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Cylinder Head Gasket", price: 550, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Fuel Pump", price: 2200, image: "https://via.placeholder.com/150" },
  { id: 7, name: "Radiator Hose", price: 250, image: "https://via.placeholder.com/150" },
  { id: 8, name: "Water Pump Assembly", price: 1650, image: "https://via.placeholder.com/150" },
  { id: 9, name: "Crankshaft Pulley", price: 1350, image: "https://via.placeholder.com/150" },
  { id: 10, name: "Valve Tappet Set", price: 750, image: "https://via.placeholder.com/150" },
  { id: 11, name: "Clutch Plate", price: 1200, image: "https://via.placeholder.com/150" },
  { id: 12, name: "Clutch Cover Assembly", price: 2400, image: "https://via.placeholder.com/150" },
  { id: 13, name: "Gear Lever Knob", price: 150, image: "https://via.placeholder.com/150" },
  { id: 14, name: "Gearbox Gasket Set", price: 480, image: "https://via.placeholder.com/150" },
  { id: 15, name: "Propeller Shaft", price: 2900, image: "https://via.placeholder.com/150" },
  { id: 16, name: "Clutch Release Bearing", price: 700, image: "https://via.placeholder.com/150" },
  { id: 17, name: "Transmission Oil Seal", price: 320, image: "https://via.placeholder.com/150" },
  { id: 18, name: "Brake Shoe Set", price: 850, image: "https://via.placeholder.com/150" },
  { id: 19, name: "Brake Drum", price: 1350, image: "https://via.placeholder.com/150" },
  { id: 20, name: "Front Axle Hub", price: 1800, image: "https://via.placeholder.com/150" },
  { id: 21, name: "Rear Axle Shaft", price: 2600, image: "https://via.placeholder.com/150" },
  { id: 22, name: "Steering Box Assembly", price: 3200, image: "https://via.placeholder.com/150" },
  { id: 23, name: "Tie Rod End", price: 560, image: "https://via.placeholder.com/150" },
  { id: 24, name: "Front Wheel Bearing Kit", price: 880, image: "https://via.placeholder.com/150" },
  { id: 25, name: "Headlight Assembly", price: 950, image: "https://via.placeholder.com/150" },
  { id: 26, name: "Tail Light", price: 420, image: "https://via.placeholder.com/150" },
  { id: 27, name: "Alternator Belt", price: 400, image: "https://via.placeholder.com/150" },
  { id: 28, name: "Starter Motor", price: 3100, image: "https://via.placeholder.com/150" },
  { id: 29, name: "Ignition Switch", price: 250, image: "https://via.placeholder.com/150" },
  { id: 30, name: "Battery Cable Set", price: 350, image: "https://via.placeholder.com/150" },
  { id: 31, name: "Horn", price: 280, image: "https://via.placeholder.com/150" },
  { id: 32, name: "Hydraulic Filter", price: 620, image: "https://via.placeholder.com/150" },
  { id: 33, name: "Hydraulic Pump", price: 2500, image: "https://via.placeholder.com/150" },
  { id: 34, name: "Hydraulic Lever Kit", price: 980, image: "https://via.placeholder.com/150" },
  { id: 35, name: "Lift Arm Assembly", price: 1450, image: "https://via.placeholder.com/150" },
  { id: 36, name: "Hydraulic Hose Pipe", price: 420, image: "https://via.placeholder.com/150" },
  { id: 37, name: "Seat Cushion", price: 850, image: "https://via.placeholder.com/150" },
  { id: 38, name: "Muffler Silencer", price: 1100, image: "https://via.placeholder.com/150" },
  { id: 39, name: "Rear View Mirror", price: 220, image: "https://via.placeholder.com/150" },
  { id: 40, name: "Front Grille Cover", price: 650, image: "https://via.placeholder.com/150" }
];

// 🛠️ Display products on products.html
if (document.getElementById("product-list")) {
  const productList = document.getElementById("product-list");
  products.forEach(p => {
    const item = document.createElement("div");
    item.classList.add("product");
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(item);
  });
}

// 🛒 Add to Cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}

// 🧾 Display cart and total
if (document.getElementById("cart-items")) {
  const cartItems = document.getElementById("cart-items");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    let total = 0;
    cart.forEach(item => {
      total += item.price;
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `<h3>${item.name}</h3><p>₹${item.price}</p>`;
      cartItems.appendChild(div);
    });
    const totalDiv = document.createElement("h3");
    totalDiv.textContent = `Total: ₹${total}`;
    cartItems.appendChild(totalDiv);
  }
}

// 💬 WhatsApp Order Submission
if (document.getElementById("orderForm")) {
  document.getElementById("orderForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let message = `Eicher Motor Shop Order%0A------------------------%0A`;
    message += `Name: ${name}%0APhone: ${phone}%0AAddress: ${address}%0A------------------------%0AItems:%0A`;

    let total = 0;
    cart.forEach(item => {
      message += `- ${item.name} (₹${item.price})%0A`;
      total += item.price;
    });
    message += `------------------------%0ATotal: ₹${total}%0A`;

    // Change this to YOUR WhatsApp number (with country code, no +)
    const whatsappNumber = "9346118502";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");

    localStorage.removeItem("cart");
  });
}
