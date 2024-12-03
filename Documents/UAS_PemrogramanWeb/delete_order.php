<?php
session_start();
include('config.php');

if (isset($_SESSION['id_user'])) {
    $id_user = $_SESSION['id_user'];

    // Delete active reservation from the database
    $stmt = $conn->prepare("DELETE FROM reservasi WHERE id_user = ? AND status = 'aktif'");
    $stmt->bind_param("i", $id_user);
    $stmt->execute();
    $stmt->close();
}

// Optional: Only destroy session variables related to the reservation
unset($_SESSION['orderDetails']); // Keep other session variables like user data intact

// Optionally, you can also set a message for the user
$_SESSION['message'] = "Reservation has been successfully deleted.";

// Redirect to the index or reservation page
header("Location: index.php");
exit();
?>
