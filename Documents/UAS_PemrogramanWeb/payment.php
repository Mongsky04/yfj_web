<?php
session_start();  // Start the session to access session variables

// Check if order details exist in session
if (isset($_SESSION['orderDetails'])) {
    $orderDetails = $_SESSION['orderDetails'];
    $totalAmount = 0;
    
    // Calculate the total amount for the order
    foreach ($orderDetails as $item) {
        $totalAmount += $item['price'] * $item['quantity'];
    }
} else {
    // If no order details found in session, redirect to order page or show error
    header('Location: order.php');
    exit();  // Prevent further script execution if no order details are found
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        // Function to handle the payment process and redirect after success
        function handlePayment() {
            // Show the "Payment succeeded" message
            document.getElementById('paymentMessage').style.display = 'block';
            
            // Hide the pay button after payment
            document.getElementById('payButton').style.display = 'none';

            // Redirect to the reservation page after 3 seconds
            setTimeout(function() {
                window.location.href = 'my-reservasi.php'; // Redirect to 'my-reservasi.php'
            }, 3000); // 3000ms = 3 seconds
        }
    </script>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="logo">
                <a href="home.php">
                    <img src="https://i.imgur.com/uTgr4G3.jpeg" alt="Logo" class="logo-img">
                </a>
            </div>
            <div>
                <h1>PAYMENT</h1>
            </div>
        </nav>
    </header>

    <section class="paymentsec">
        <fieldset class="paymentfieldset">
            <h1>My Order <hr></h1>

            <!-- Show all the menu names -->
            <div class="order-summary">
                <p><b>Menu Items:</b> 
                    <?php
                    // Show the names of the menu items in the order
                    $menuNames = [];
                    foreach ($orderDetails as $item) {
                        $menuNames[] = $item['name'] . " x" . $item['quantity'];
                    }
                    echo implode(', ', $menuNames);
                    ?>
                </p> 
                <p class="price"><b>Total Amount:</b> Rp<?= number_format($totalAmount, 2, ',', '.'); ?></p>
            </div>

            <!-- Payment Methods -->
            <div class="paymentmethode">
                <label class="method">
                    <div class="method-content">
                        <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG23.png">
                        <p>Credit / Debit Card</p>
                    </div>
                    <input type="radio" name="payment" value="creditcard">
                </label>
                <label class="method">
                    <div class="method-content">
                        <img src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0">
                        <p>QR Code</p>
                    </div>
                    <input type="radio" name="payment" value="qrcode">
                </label>
                <label class="method">
                    <div class="method-content">
                        <img src="https://th.bing.com/th/id/OIP.qbk7ot2JMAIvl7zA-C8PYQHaHa?rs=1&pid=ImgDetMain">
                        <p>Gopay</p>
                    </div>
                    <input type="radio" name="payment" value="gopay">
                </label>
            </div>

            <!-- Payment Confirmation Message (Initially Hidden) -->
            <div id="paymentMessage" style="display:none;">
                <h2>Pembayaran Berhasil, Tunggu Sebentar...</h2>
            </div>

            <!-- Pay Button (Always Visible) -->
            <div class="buttonpay-container">
                <button id="payButton" class="paybutton" onclick="handlePayment()">PAY</button>
            </div>
        </fieldset>
    </section>
</body>
</html>
