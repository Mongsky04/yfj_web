<?php
session_start();
include('config.php');

if (isset($_SESSION['id_user'])) {
    $id_user = $_SESSION['id_user'];


    $stmt = $conn->prepare("SELECT id_reservasi FROM reservasi WHERE id_user = ? AND status = 'aktif'");
    $stmt->bind_param("i", $id_user);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $reservasi_id = $row['id_reservasi'];

        $conn->begin_transaction();

        try {
            $stmtDetail = $conn->prepare("DELETE FROM detail_pesanan WHERE id_pesanan IN (SELECT id_pesanan FROM pesanan_makanan WHERE id_reservasi = ?)");
            $stmtDetail->bind_param("i", $reservasi_id);
            $stmtDetail->execute();
            $stmtDetail->close();

            $stmtPesanan = $conn->prepare("DELETE FROM pesanan_makanan WHERE id_reservasi = ?");
            $stmtPesanan->bind_param("i", $reservasi_id);
            $stmtPesanan->execute();
            $stmtPesanan->close();

            $stmtReservasi = $conn->prepare("DELETE FROM reservasi WHERE id_reservasi = ? AND id_user = ? AND status = 'aktif'");
            $stmtReservasi->bind_param("ii", $reservasi_id, $id_user);
            $stmtReservasi->execute();
            $stmtReservasi->close();

            $conn->commit();

            unset($_SESSION['orderDetails']); 
            $_SESSION['message'] = "Reservation and related orders have been successfully deleted.";

        } catch (Exception $e) {
            $conn->rollback();
            $_SESSION['message'] = "Error deleting reservation: " . $e->getMessage();
        }
    }

    header("Location: my-reservasi.php");
    exit();
}
?>
