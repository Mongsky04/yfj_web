<?php
session_start();

// Check if 'orderDetails' exists in the session, if not, initialize it
if (!isset($_SESSION['orderDetails'])) {
    $_SESSION['orderDetails'] = array(); // Or you can set default values
}

// Now you can safely access the 'orderDetails' array
$orderDetails = $_SESSION['orderDetails'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    // Check if there is any data in the orderDetails array
    if (!empty($orderDetails)) {
        // If orderDetails array has data, print it
        echo "<pre>";
        print_r($orderDetails); // print_r is useful for displaying arrays
        echo "</pre>";
    } else {
        echo "No order details available.";
    }
    ?>
</body>
</html>
