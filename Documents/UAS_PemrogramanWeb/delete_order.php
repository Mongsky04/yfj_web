<?php
session_start();
include('config.php');

if (isset($_SESSION['id_user'])) {
    $id_user = $_SESSION['id_user'];

    // Fetch the active reservation id for the user
    $stmt = $conn->prepare("SELECT id_reservasi FROM reservasi WHERE id_user = ? AND status = 'aktif'");
    $stmt->bind_param("i", $id_user);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        // Get the reservation ID
        $row = $result->fetch_assoc();
        $reservasi_id = $row['id_reservasi'];

        // Begin transaction to delete all related data
        $conn->begin_transaction();

        try {
            // Delete related details from detail_pesanan (order details)
            $stmtDetail = $conn->prepare("DELETE FROM detail_pesanan WHERE id_pesanan IN (SELECT id_pesanan FROM pesanan_makanan WHERE id_reservasi = ?)");
            $stmtDetail->bind_param("i", $reservasi_id);
            $stmtDetail->execute();
            $stmtDetail->close();

            // Delete related order from pesanan_makanan
            $stmtPesanan = $conn->prepare("DELETE FROM pesanan_makanan WHERE id_reservasi = ?");
            $stmtPesanan->bind_param("i", $reservasi_id);
            $stmtPesanan->execute();
            $stmtPesanan->close();

            // Delete the reservation itself
            $stmtReservasi = $conn->prepare("DELETE FROM reservasi WHERE id_reservasi = ? AND id_user = ? AND status = 'aktif'");
            $stmtReservasi->bind_param("ii", $reservasi_id, $id_user);
            $stmtReservasi->execute();
            $stmtReservasi->close();

            // Commit the transaction
            $conn->commit();

            // Optionally: Clear the session variables related to the reservation
            unset($_SESSION['orderDetails']); // Keep other session variables like user data intact
            $_SESSION['message'] = "Reservation and related orders have been successfully deleted.";

        } catch (Exception $e) {
            // Rollback the transaction in case of an error
            $conn->rollback();
            $_SESSION['message'] = "Error deleting reservation: " . $e->getMessage();
        }
    }

    // Redirect to the index or reservation page
    header("Location: index.php");
    exit();
}
?>
