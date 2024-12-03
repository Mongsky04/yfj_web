<?php
session_start(); // Start session at the beginning
include 'config.php';

// Fetch menu items from the database
$sql = "SELECT id_menu, nama_menu, deskripsi, harga, foto FROM menu";
$result = $conn->query($sql);

// Handle POST request to store order details in session
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['orderDetails'])) {
    $orderDetails = json_decode($_POST['orderDetails'], true); // Decode JSON to array
    $_SESSION['orderDetails'] = $orderDetails; // Save to session
    header('Location: payment.php'); // Redirect to avoid resubmission
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Menu</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="menu-section">
    <h2>Our Menu</h2>
    <div class="menu-items">
        <?php while($row = $result->fetch_assoc()): ?>
        <div class="menu-item" data-id="<?= $row['id_menu'] ?>" data-price="<?= $row['harga'] ?>">
            <img src="<?= $row['foto'] ?>" alt="<?= $row['nama_menu'] ?>">
            <h3><?= $row['nama_menu'] ?></h3>
            <p><?= $row['deskripsi'] ?></p>
            <div class="harga">Rp <?= number_format($row['harga'], 2, ',', '.') ?></div>
            <button class="add-to-cart">+</button>
        </div>
        <?php endwhile; ?>
    </div>
</div>

<div class="cart-container">
    <div class="button-keranjang">
        <button id="cartButton" onclick="toggleCartDropdown()">Order</button>
    </div>
    <div id="cartDropdown" class="cart-dropdown">
        <h3>Your Cart</h3>
        <div id="cartItems"></div>
        <div class="cart-total">
            <strong>Total:</strong> Rp <span id="totalAmount">0</span>
        </div>
        <form id="placeOrderForm" method="POST" action="order.php">
            <input type="hidden" name="orderDetails" id="orderDetails">
            <button type="submit" name="submit-makanan">Place Order</button>
        </form>
    </div>
</div>

<script>
let cart = [];

// Add event listener to each "add to cart" button
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const id = item.getAttribute('data-id');
        const price = parseFloat(item.getAttribute('data-price'));
        const name = item.querySelector('h3').innerText;

        addToCart(id, name, price);
        updateCart();
    });
});

// Add item to cart
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
}

// Update the cart UI and hidden input
function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const totalAmountSpan = document.getElementById('totalAmount');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItemsDiv.innerHTML += `
            <p>
                ${item.name} x${item.quantity} - Rp ${item.price * item.quantity}
                <span onclick="removeFromCart('${item.id}')" class="remove-item">✖</span>
            </p>`;
    });

    totalAmountSpan.innerText = total.toLocaleString();
    document.getElementById('orderDetails').value = JSON.stringify(cart); // Save cart data as JSON
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Toggle cart dropdown visibility
function toggleCartDropdown() {
    document.getElementById('cartDropdown').classList.toggle('show');
}
</script>

</body>
</html>
