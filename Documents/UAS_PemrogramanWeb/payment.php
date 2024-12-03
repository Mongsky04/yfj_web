<?php
session_start();
include 'config.php'; // Ensure the database connection is included

// Initialize variables
$orderDetails = [];
$totalAmount = 0;
$userName = 'Guest';
$reservationDate = '';
$reservationTime = '';
$reservationFound = false;

// Fetch user information if logged in
if (isset($_SESSION['id_user'])) {
    $id_user = $_SESSION['id_user'];
    
    // Fetch user name
    $sqlUser = "SELECT nama FROM user WHERE id_user = ?";
    $stmtUser = $conn->prepare($sqlUser);
    $stmtUser->bind_param("i", $id_user);
    $stmtUser->execute();
    $stmtUser->bind_result($userName);
    $stmtUser->fetch();
    $stmtUser->close();

    // Fetch latest reservation for the user
    $sqlReservasi = "SELECT tanggal_reservasi, waktu_reservasi FROM reservasi 
                     WHERE id_user = ? ORDER BY id_reservasi DESC LIMIT 1";
    $stmtReservasi = $conn->prepare($sqlReservasi);
    $stmtReservasi->bind_param("i", $id_user);
    $stmtReservasi->execute();
    $stmtReservasi->bind_result($reservationDate, $reservationTime);
    if ($stmtReservasi->fetch()) {
        $reservationFound = true; // Flag if a reservation is found
    }
    $stmtReservasi->close();
}

// Check if the form is submitted with order details
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['orderDetails'])) {
    $orderDetails = json_decode($_POST['orderDetails'], true);

    // Process order details and calculate total amount
    if (!empty($orderDetails)) {
        foreach ($orderDetails as $item) {
            $totalAmount += $item['price'] * $item['quantity'];
        }
    }
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
                    $menuNames = [];
                    foreach ($orderDetails as $item) {
                        $menuNames[] = $item['name'];
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
