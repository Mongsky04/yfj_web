<?php
session_start();
include('config.php'); // Include your database connection

// Check if the user is logged in and a reservation ID is set
if (!isset($_SESSION['id_user']) || !isset($_SESSION['reservasi_id'])) {
    header("Location: index.php?message=Please log in to update a reservation.");
    exit();
}

$id_user = $_SESSION['id_user']; // Get the logged-in user's ID
$reservasi_id = $_SESSION['reservasi_id']; // Get the current reservation ID

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['Update'])) {
    // Retrieve the submitted date and time
    $date = $conn->real_escape_string($_POST['date']);
    $time = $conn->real_escape_string($_POST['time']);

    // Update the reservation in the database
    $stmt = $conn->prepare("UPDATE reservasi SET tanggal_reservasi = ?, waktu_reservasi = ? WHERE id_reservasi = ? AND id_user = ?");
    $stmt->bind_param("ssii", $date, $time, $reservasi_id, $id_user);

    if ($stmt->execute()) {
        // Redirect to the 'my-reservasi.php' page with a success message
        header("Location: my-reservasi.php?message=Reservation updated successfully.");
        exit();
    } else {
        // Display an error message on failure
        echo "<script>alert('Failed to update reservation. Please try again.');</script>";
    }
    $stmt->close();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Reservation - Kwetiau Djuara</title>
    <link rel="icon" type="image" href="https://i.imgur.com/uTgr4G3.jpeg">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="logo">
                <a href="home.php">
                    <img src="https://i.imgur.com/uTgr4G3.jpeg" alt="Logo" class="logo-img">
                </a>
                <a href="home.php" class="brand"></a>
            </div>
            <ul class="nav-links">
                <li><a href="home.php">Home</a></li>
                <li><a href="index.php">Reservasi</a></li>
                <li><a href="my-reservasi.php" class="active">My Reservasi</a></li>
                <li><a href="menu.php">Menu</a></li>
                <li><a href="contact.php">Kontak</a></li>
                <li><a href="about.php">About</a></li>
            </ul>
        </nav>
    </header>
    <section class="res" id="home">
        <div class="res-c">
            <h1>Update Reservasi</h1>
        </div>
    </section>
    <section class="rus">
        <div>
            <h3>Perbarui Reservasimu</h3><br>
        </div>
        <div class="rus-c">
            <form method="post" action="update.php">
                <label for="date">Select Reservation Date</label><br />
                <input type="date" name="date" id="date" required /><br /><br />
                <label for="time">Select Reservation Time</label><br />
                <input type="time" name="time" id="time" required /><br /><br />
                <input type="submit" name="Update" value="Update Reservation"
                    style="background-color: #4CAF50; font-weight: bold; border: none; color: white;" />
            </form>
        </div>
    </section>
</body>
</html>
