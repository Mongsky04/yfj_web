<?php
// Start the session
session_start();

// Destroy the session data for 'orderDetails'
if (isset($_SESSION['orderDetails'])) {
    unset($_SESSION['orderDetails']); // Unset the orderDetails session data
}

// You can redirect to a specific page after deletion
header('Location: index.php'); // Redirect to the reservation page or another page
exit();
