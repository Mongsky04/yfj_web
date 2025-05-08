<?php
session_start(); 
include('config.php');

if (isset($_SESSION['orderDetails'], $_SESSION['reservasi_id'])) {
    $orderDetails = $_SESSION['orderDetails'];
    $reservasiId = $_SESSION['reservasi_id'];
    $totalAmount = 0;

    foreach ($orderDetails as $item) {
        $totalAmount += $item['price'] * $item['quantity'];
    }
} else {
    header('Location: index.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['payment_method'])) {
    $idMetode = intval($_POST['payment_method']);
    $statusPembayaran = 'sukses';
    $tanggalTransaksi = date('Y-m-d H:i:s');
    
    $stmt = $conn->prepare("INSERT INTO transaksi (id_reservasi, id_metode, total_bayar, status_pembayaran, tanggal_transaksi) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("iidss", $reservasiId, $idMetode, $totalAmount, $statusPembayaran, $tanggalTransaksi);

    if ($stmt->execute()) {
        header('Location: my-reservasi.php');
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment - Kwetiau Djuara</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
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

            <div class="order-summary">
                <p><b>Menu Items:</b>
                    <?php
                    $menuNames = [];
                    foreach ($orderDetails as $item) {
                        $menuNames[] = $item['name'] . " x" . $item['quantity'];
                    }
                    echo implode(', ', $menuNames);
                    ?>
                </p>
                <p class="price"><b>Total Amount:</b> Rp<?= number_format($totalAmount, 2, ',', '.'); ?></p>
            </div>

            <form method="POST">
                <!-- Payment Methods -->
                <div class="paymentmethode">
                    <label class="method">
                        <div class="method-content">
                            <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG23.png">
                            <p>Credit / Debit Card</p>
                        </div>
                        <input type="radio" name="payment_method" value="1" required>
                    </label>
                    <label class="method">
                        <div class="method-content">
                            <img src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0">
                            <p>QR Code</p>
                        </div>
                        <input type="radio" name="payment_method" value="3" required>
                    </label>
                    <label class="method">
                        <div class="method-content">
                            <img src="https://th.bing.com/th/id/OIP.qbk7ot2JMAIvl7zA-C8PYQHaHa?rs=1&pid=ImgDetMain">
                            <p>Gopay</p>
                        </div>
                        <input type="radio" name="payment_method" value="2" required>
                    </label>
                </div>

                <!-- Pay Button -->
                <div class="buttonpay-container">
                    <button type="submit" class="paybutton">PAY</button>
                </div>
            </form>
        </fieldset>
    </section>
</body>
</html>
