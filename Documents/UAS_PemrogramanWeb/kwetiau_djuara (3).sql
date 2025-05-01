-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2024 at 07:38 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kwetiau_djuara`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts_input`
--

CREATE TABLE `contacts_input` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_pesanan`
--

CREATE TABLE `detail_pesanan` (
  `id_detail` int(11) NOT NULL,
  `id_pesanan` int(11) DEFAULT NULL,
  `id_menu` int(11) DEFAULT NULL,
  `jumlah` int(11) NOT NULL,
  `harga` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detail_pesanan`
--

INSERT INTO `detail_pesanan` (`id_detail`, `id_pesanan`, `id_menu`, `jumlah`, `harga`) VALUES
(1, 2, 4, 2, 40000.00),
(2, 2, 5, 2, 5000.00),
(3, 3, 3, 2, 35000.00),
(4, 3, 4, 2, 40000.00),
(5, 3, 5, 2, 5000.00),
(6, 3, 8, 1, 3000.00),
(7, 4, 3, 3, 35000.00),
(8, 4, 4, 3, 40000.00),
(9, 4, 8, 3, 3000.00),
(10, 4, 7, 2, 10000.00),
(11, 5, 5, 4, 5000.00),
(12, 5, 4, 3, 40000.00),
(13, 5, 3, 1, 35000.00),
(14, 6, 3, 3, 35000.00),
(15, 6, 4, 2, 40000.00),
(16, 6, 8, 2, 3000.00),
(17, 6, 7, 2, 10000.00),
(18, 7, 1, 2, 45000.00),
(19, 7, 3, 2, 35000.00),
(20, 7, 8, 2, 3000.00),
(21, 7, 7, 1, 10000.00),
(22, 8, 2, 2, 25000.00),
(23, 8, 3, 2, 35000.00),
(24, 8, 7, 2, 10000.00),
(25, 8, 8, 2, 3000.00),
(26, 10, 2, 2, 25000.00),
(27, 10, 3, 2, 35000.00),
(28, 10, 4, 2, 40000.00),
(29, 10, 8, 2, 3000.00),
(30, 11, 4, 2, 40000.00),
(31, 11, 3, 2, 35000.00),
(32, 11, 5, 2, 5000.00),
(33, 11, 6, 2, 7000.00),
(34, 12, 3, 2, 35000.00),
(35, 12, 5, 2, 5000.00),
(36, 12, 4, 2, 40000.00),
(37, 12, 6, 2, 7000.00),
(38, 13, 3, 2, 35000.00),
(39, 13, 4, 2, 40000.00),
(40, 13, 5, 2, 5000.00),
(41, 13, 6, 2, 7000.00),
(42, 14, 4, 2, 40000.00),
(43, 14, 3, 2, 35000.00),
(44, 14, 5, 2, 5000.00),
(45, 14, 6, 2, 7000.00),
(46, 15, 4, 2, 40000.00),
(47, 15, 3, 2, 35000.00),
(48, 15, 5, 2, 5000.00),
(49, 15, 6, 2, 7000.00),
(50, 17, 3, 2, 35000.00),
(51, 17, 4, 2, 40000.00),
(52, 17, 5, 2, 5000.00),
(53, 17, 6, 2, 7000.00),
(54, 18, 3, 2, 35000.00),
(55, 18, 4, 2, 40000.00),
(56, 18, 5, 2, 5000.00),
(57, 18, 6, 2, 7000.00),
(58, 20, 4, 2, 40000.00),
(59, 20, 3, 2, 35000.00),
(60, 20, 5, 1, 5000.00),
(61, 20, 6, 1, 7000.00),
(62, 21, 3, 2, 35000.00),
(63, 21, 4, 2, 40000.00),
(64, 21, 5, 2, 5000.00),
(65, 21, 6, 2, 7000.00),
(66, 22, 3, 2, 35000.00),
(67, 22, 4, 2, 40000.00),
(68, 22, 5, 2, 5000.00),
(69, 22, 6, 2, 7000.00),
(70, 23, 4, 2, 40000.00),
(71, 23, 3, 2, 35000.00),
(72, 23, 5, 2, 5000.00),
(73, 23, 6, 2, 7000.00),
(74, 24, 3, 2, 35000.00),
(75, 24, 4, 1, 40000.00),
(76, 24, 5, 2, 5000.00),
(77, 24, 6, 2, 7000.00),
(86, 27, 3, 2, 35000.00),
(87, 27, 4, 2, 40000.00),
(88, 27, 5, 2, 5000.00),
(89, 27, 6, 2, 7000.00),
(90, 28, 3, 2, 35000.00),
(91, 28, 4, 2, 40000.00),
(92, 28, 8, 2, 3000.00),
(93, 28, 7, 2, 10000.00),
(94, 29, 5, 2, 5000.00),
(95, 29, 4, 2, 40000.00),
(96, 29, 3, 2, 35000.00),
(97, 29, 7, 2, 10000.00),
(102, 31, 1, 2, 45000.00),
(103, 31, 2, 2, 25000.00),
(104, 31, 7, 2, 10000.00),
(105, 31, 8, 1, 3000.00),
(113, 34, 4, 2, 40000.00),
(114, 34, 3, 2, 35000.00),
(115, 34, 2, 2, 25000.00),
(116, 34, 8, 2, 3000.00),
(127, 39, 3, 2, 35000.00),
(128, 39, 4, 2, 40000.00),
(129, 39, 8, 2, 3000.00),
(130, 39, 7, 2, 10000.00),
(139, 42, 3, 2, 35000.00),
(140, 42, 4, 2, 40000.00),
(141, 42, 8, 2, 3000.00),
(142, 42, 6, 2, 7000.00);

-- --------------------------------------------------------

--
-- Table structure for table `meja`
--

CREATE TABLE `meja` (
  `id_meja` int(11) NOT NULL,
  `slot_kursi` int(11) NOT NULL,
  `jumlah_tersedia` int(11) NOT NULL,
  `jumlah_tidak_tersedia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meja`
--

INSERT INTO `meja` (`id_meja`, `slot_kursi`, `jumlah_tersedia`, `jumlah_tidak_tersedia`) VALUES
(1, 4, 10, 0),
(2, 2, 5, 3),
(3, 6, 8, 2),
(4, 4, 12, 1),
(5, 2, 6, 2),
(6, 8, 15, 0);

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `nama_menu` varchar(255) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `harga` decimal(10,2) NOT NULL,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id_menu`, `nama_menu`, `deskripsi`, `harga`, `foto`) VALUES
(1, 'Kwetiau Seafood', 'Mi pipih dengan udang, cumi, dan kerang, dimasak dengan bumbu gurih.', 45000.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5RINGrltqWGBxV_lGE7DoRkGFTiktuuE2Q&s'),
(2, 'Kwetiau Krupuk', 'Mi pipih dengan kerupuk renyah dan sayuran segar, disajikan dengan bumbu gurih.', 25000.00, 'https://www.visitsingapore.com/content/dam/desktop/global/dining-drinks-singapore/local-dishes/friedkwayteow-carousel1-640x640.jpg'),
(3, 'Kwetiau Ayam', 'Mi pipih dengan irisan ayam suwir segar, telur, dan sayuran, bercita rasa gurih.', 35000.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1UhYGOrWa0dDNz0CxHRzD7dmeH6KuTAbEw&s'),
(4, 'Kwetiau Sapi', 'Mi pipih dengan irisan daging sapi yang dimasak sempurna, disajikan dengan sayuran dan bumbu khas yang lezat.', 40000.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDI7NbQw4uY-WyJHlSGI2MQr6It8NVrv-XjA&s'),
(5, 'Es Teh Manis', 'Teh segar yang disajikan dengan es batu, memberikan kesegaran di setiap tegukan.', 5000.00, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Iced_Tea_from_flickr.jpg/800px-Iced_Tea_from_flickr.jpg'),
(6, 'Es Jeruk Segar', 'Air jeruk alami yang menyegarkan, disajikan dengan potongan jeruk peras.', 7000.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93vjN1u1VNvoWlzUqxvr475peoghjkY08dg&s'),
(7, 'Kopi Hitam', 'Kopi nikmat yang diseduh dengan cara pas, memberikan cita rasa pahit yang khas.', 10000.00, 'https://fahum.umsu.ac.id/blog/wp-content/uploads/2024/06/4-Manfaat-Konsumsi-Kopi-Hitam-untuk-Kesehatan-Tubuh-Salah-Satunya-Dapat-Mengurangi-Peradangan-Dalam-Tubuh-2144257220.webp'),
(8, 'Air Mineral', 'Air mineral yang menyegarkan, ideal untuk menemani hidangan.', 3000.00, 'https://awsimages.detik.net.id/visual/2024/09/16/miris-rakyat-ri-miskin-gegara-air-galon-3-emiten-ini-malah-cuan-gila_169.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `metode_pembayaran`
--

CREATE TABLE `metode_pembayaran` (
  `id_metode` int(11) NOT NULL,
  `nama_metode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `metode_pembayaran`
--

INSERT INTO `metode_pembayaran` (`id_metode`, `nama_metode`) VALUES
(1, 'Debit/Credit_Card'),
(2, 'Gopay'),
(3, 'QRIS');

-- --------------------------------------------------------

--
-- Table structure for table `pesanan_makanan`
--

CREATE TABLE `pesanan_makanan` (
  `id_pesanan` int(11) NOT NULL,
  `id_reservasi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pesanan_makanan`
--

INSERT INTO `pesanan_makanan` (`id_pesanan`, `id_reservasi`) VALUES
(2, NULL),
(3, 46),
(4, 47),
(5, 47),
(6, 48),
(7, 49),
(8, 50),
(9, 50),
(10, 52),
(11, 53),
(12, 54),
(13, 55),
(14, 56),
(15, 56),
(16, 56),
(17, 56),
(18, 57),
(19, 57),
(20, 58),
(21, 59),
(22, 60),
(23, 61),
(24, 62),
(27, 65),
(28, 66),
(29, 67),
(31, 69),
(34, 72),
(39, 75),
(42, 78);

-- --------------------------------------------------------

--
-- Table structure for table `reservasi`
--

CREATE TABLE `reservasi` (
  `id_reservasi` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_meja` int(11) DEFAULT NULL,
  `tanggal_reservasi` date NOT NULL,
  `waktu_reservasi` time NOT NULL,
  `status` enum('aktif','dibatalkan','selesai') DEFAULT 'aktif',
  `qr_code` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservasi`
--

INSERT INTO `reservasi` (`id_reservasi`, `id_user`, `id_meja`, `tanggal_reservasi`, `waktu_reservasi`, `status`, `qr_code`) VALUES
(1, 1, 3, '2024-10-30', '10:00:00', 'aktif', '07df28d10758aad759e44d997a77d103'),
(2, 1, 3, '2024-11-09', '05:00:00', 'aktif', '3abf73503a94833cd69a9ed08a2dc8e0'),
(3, 1, 2, '2024-11-12', '21:00:00', 'aktif', '4baa26d97f739089cba3e0c3ffc769f0'),
(4, 1, 2, '2024-10-30', '19:00:00', 'aktif', 'c99c7d60c37c061e529490b6f0b9b53c'),
(5, 1, 1, '2024-11-20', '11:00:00', 'aktif', '81625b806b49a5e0224049dba791a67c'),
(6, 1, 1, '2024-11-30', '11:00:00', 'aktif', '28f1bacf2a3ec1428b3909c9fb79d168'),
(7, 1, 1, '2024-11-18', '08:00:00', 'aktif', '673ec0a6cf5da6d8e473506de8123714'),
(8, 1, 1, '2024-11-13', '09:00:00', 'aktif', 'cb42ea5e186a8af446372570edd6e7ed'),
(9, 1, 1, '2024-10-31', '10:00:00', 'aktif', '28be085fb57e2d6ce1144fa7b2762b58'),
(10, 1, 1, '2024-11-13', '09:00:00', 'aktif', '663535b836d155e098954e6ece76396a'),
(11, 1, 2, '2024-10-30', '10:00:00', 'aktif', 'e6c1ea098721fa171b8145ea18276153'),
(12, 1, 1, '2024-11-11', '19:00:00', 'aktif', '8b470352881f646e5bb3b3d3c7563d93'),
(13, 1, 1, '2024-11-06', '11:00:00', 'aktif', '41f8e8497d9a4868c1aea664f1fd8010'),
(14, 1, 2, '2024-11-13', '10:00:00', 'aktif', '7d8f3f702aac3c2496018256afffe177'),
(15, 1, 3, '2024-11-26', '13:00:00', 'aktif', '203f73884f87e71bd787a3c5623d86c3'),
(16, 1, 2, '2024-11-28', '13:00:00', 'aktif', '2a4f8136f16ac469ff6862570ef59811'),
(17, 1, 3, '2024-11-28', '14:00:00', 'aktif', '10c36cd159e99ec6a3459d2c65f88672'),
(18, 1, 1, '2024-11-30', '09:00:00', 'aktif', '99d766faca80d8151fb9d1f64c1811ee'),
(19, 5, 1, '2024-11-25', '11:00:00', 'aktif', '9954f3a6a8038909c23d7ff13a62590a'),
(20, 5, 1, '2024-10-30', '11:00:00', 'aktif', '53221337194623b4f9d2db842b0ae1d6'),
(21, 5, 1, '2024-11-06', '12:00:00', 'aktif', '0068a54bdd9d159d9752c374283b35ee'),
(22, 5, 1, '2024-11-08', '13:00:00', 'aktif', '54247efea152ca4fc4ec32c64603fc7a'),
(23, 5, 1, '2024-12-28', '12:00:00', 'aktif', '4ccd8289cc16192bacbb99ab28d7aeff'),
(24, 5, 1, '2025-01-11', '15:00:00', 'aktif', '61e126fb2b281b119465289409642974'),
(25, 5, 3, '2025-01-01', '12:00:00', 'aktif', '9f0c89b5a50bc9404b8e8ed747ab5fd9'),
(26, 5, 3, '2024-12-12', '07:00:00', 'aktif', 'f6219250394393c78187320f8ef02a58'),
(27, 5, 3, '2024-12-14', '11:00:00', 'aktif', '7d0a4653ee8e6640541fbe0f76cf52ec'),
(28, 6, 3, '2024-12-25', '11:00:00', '', 'b2cd50291c300d3293242ae32265fa42'),
(29, 6, 3, '2024-12-23', '12:00:00', '', '771d4b5750ef5f26c025a4f56cd07e61'),
(30, 6, 3, '2024-12-30', '10:00:00', '', '03143a7404d7bc3d3b9d481fb93cd80e'),
(31, 6, 3, '2024-12-24', '12:00:00', '', '009254f80d10f692271d5823546dd4cc'),
(32, 6, 3, '2024-12-17', '13:00:00', '', 'cd87f66dd4daca286df294dda8b5f93c'),
(33, 6, 3, '2024-12-13', '14:00:00', '', '031ec8e266a66c9ac90107731cafb9ba'),
(34, 6, 3, '2024-12-31', '13:00:00', '', '4960fa376bb91e79faef3dadf16611a1'),
(35, 6, 3, '2024-12-11', '13:00:00', '', 'c78e3375d41d41e090321551eabd0129'),
(36, 6, 3, '2024-12-12', '12:00:00', '', '10a442616e36edbf30c89c5d239e4804'),
(37, 6, 3, '2024-12-03', '08:00:00', '', 'd48bc29d2039050ce57b842a3503aeea'),
(38, 6, 3, '2024-12-25', '12:00:00', '', '2749c3429b177358e3024446d4c6ce73'),
(39, 6, 3, '2024-12-25', '12:00:00', '', '46728e0aa959186837250bc0cbab9b5d'),
(40, 6, 3, '2024-12-19', '11:00:00', '', '8b9c87f1f148043a71bfe638b94d23db'),
(41, 6, 3, '2024-12-11', '11:00:00', '', 'b06d9074a04d66d9c6e55ee715d80d48'),
(42, 6, 3, '2024-12-04', '11:00:00', '', '8f0a5d8e1fa613f08ec0358075d70032'),
(43, 6, 3, '2024-12-04', '11:00:00', '', 'fc51ec1eb83e9ab94082f8f13f76b954'),
(44, 6, 3, '2024-12-04', '11:00:00', '', '049d1144fade76825897aaae8ffc4ce7'),
(45, 6, 3, '2024-12-05', '11:00:00', '', '0706a1d1edbc617d32b170311b440e34'),
(46, 6, 3, '2024-12-18', '11:00:00', '', '8867c1595a4825af30ac9ad1a800dc03'),
(47, 6, 3, '2024-12-12', '14:00:00', '', '3963d3f5f452683598196ad2f9545b65'),
(48, 6, 3, '2025-01-02', '13:00:00', '', '9a130e1bf07c9e9ed7e5a01885e2a9e0'),
(49, 6, 3, '2024-12-11', '12:00:00', '', '04e8c3ed540d73f83375c69cbc5ab0c2'),
(50, 6, 3, '2024-12-24', '10:00:00', '', '00ae4fa01c9f78b6620eb7e5f31c3838'),
(51, 6, 3, '2024-12-17', '15:00:00', '', '2f5058b59784f86f82e8b57f20fdd2b8'),
(52, 6, 3, '2024-12-04', '14:00:00', '', 'bfcaeddbfbebf19b802ff53374987e70'),
(53, 6, 3, '2024-12-13', '14:00:00', '', 'fefe1ea7f1fbe1cdb48d86e19ca5e3c6'),
(54, 6, 3, '2024-12-04', '14:00:00', '', '5e35658af46a0358fb2039b5a2d32400'),
(55, 6, 3, '2024-12-18', '14:00:00', '', 'a3704380799be93b941e1f5aadd7c29f'),
(56, 6, 3, '2024-12-06', '12:00:00', '', '88af5ea31c27a4fd8567462dfcfdfc23'),
(57, 6, 3, '2024-12-05', '13:00:00', '', 'e34d4a74a4c5a85fdd83e1c086fa4bb1'),
(58, 6, 3, '2024-12-10', '15:00:00', '', '07b89626e59d7f5e71b7ae9758c2379a'),
(59, 6, 3, '2024-12-11', '16:00:00', '', 'dfa7bc8a296f4155c7824b46b96952f1'),
(60, 6, 3, '2024-12-12', '09:00:00', '', '514fe27190aac245520ec1a2df949ccc'),
(61, 6, 3, '2024-12-17', '12:00:00', '', '53fe467b3b8a39afc11e099f85ea9216'),
(62, 6, 3, '2024-12-05', '13:00:00', '', 'e978d499a6458cc7aac0f404fa611867'),
(65, 6, 3, '2024-12-11', '11:00:00', '', '3cbd8b17d9d7c906e7f2dbcc27d64e0e'),
(66, 6, 3, '2024-12-18', '07:00:00', '', 'a0559fab8965d711e8a07be1bd054ae9'),
(67, 6, 3, '2024-12-11', '10:00:00', '', '376f380e212939c82bc8b144d12a3618'),
(69, 6, 3, '2024-12-12', '10:00:00', '', 'a7688a781db90b10f6717e487d432f11'),
(72, 6, 3, '2024-12-26', '12:00:00', '', 'ba8423b7d8711f309c1295a82bc88c32'),
(75, 6, 3, '2024-12-18', '13:00:00', '', 'e75af6998f9f4ac0f74f12b5de874c2c'),
(77, 6, 3, '2024-12-11', '10:00:00', '', 'f55424ab96e73c9efc8564a6db0efa6d'),
(78, 6, 3, '2024-12-18', '11:00:00', 'aktif', '6814ef74d3fda407a98b26323ebcc93e');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `id_reservasi` int(11) DEFAULT NULL,
  `id_metode` int(11) DEFAULT NULL,
  `total_bayar` decimal(10,2) NOT NULL,
  `status_pembayaran` enum('sukses','gagal','menunggu') DEFAULT 'menunggu',
  `tanggal_transaksi` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id_transaksi`, `id_reservasi`, `id_metode`, `total_bayar`, `status_pembayaran`, `tanggal_transaksi`) VALUES
(1, 77, 2, 141000.00, 'sukses', '2024-12-08 07:00:57'),
(2, 78, 3, 170000.00, 'sukses', '2024-12-08 07:01:27');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nomor_telepon` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `nama`, `email`, `password`, `nomor_telepon`) VALUES
(1, '081319193173', 'taufiqmaulanapr@gmail.com', 'opik1234', 'Taufiq Maulana '),
(2, '081388124214', 'minsoc@gmail.com', 'okgo1234', 'Zahir Minsoc'),
(3, '081319193173', 'asd@gmail.com', 'opik1234', 'Taufiq Maulana '),
(4, '081319193173', 'asdfg@gmail.com', 'opik1234', 'Taufiq Maulana '),
(5, 'zahir', 'zahir@gmail.com', '$2y$10$M48JJeiXn7ffP7T/MOo77ut9J17tvmh7gOvu9Oy5ZuEs.Y4IxxdxC', '081111111111111'),
(6, 'Taufiq', 'taufiq123@gmail.com', '$2y$10$X6QAj4FldJrcZiHNbD.3K.vONYXargfnrKZnq24qkzLzpLj6lKyii', '08123124124');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts_input`
--
ALTER TABLE `contacts_input`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detail_pesanan`
--
ALTER TABLE `detail_pesanan`
  ADD PRIMARY KEY (`id_detail`),
  ADD KEY `id_pesanan` (`id_pesanan`),
  ADD KEY `id_menu` (`id_menu`);

--
-- Indexes for table `meja`
--
ALTER TABLE `meja`
  ADD PRIMARY KEY (`id_meja`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indexes for table `metode_pembayaran`
--
ALTER TABLE `metode_pembayaran`
  ADD PRIMARY KEY (`id_metode`);

--
-- Indexes for table `pesanan_makanan`
--
ALTER TABLE `pesanan_makanan`
  ADD PRIMARY KEY (`id_pesanan`),
  ADD KEY `id_reservasi` (`id_reservasi`);

--
-- Indexes for table `reservasi`
--
ALTER TABLE `reservasi`
  ADD PRIMARY KEY (`id_reservasi`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_meja` (`id_meja`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `id_reservasi` (`id_reservasi`),
  ADD KEY `id_metode` (`id_metode`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts_input`
--
ALTER TABLE `contacts_input`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detail_pesanan`
--
ALTER TABLE `detail_pesanan`
  MODIFY `id_detail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `meja`
--
ALTER TABLE `meja`
  MODIFY `id_meja` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `metode_pembayaran`
--
ALTER TABLE `metode_pembayaran`
  MODIFY `id_metode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pesanan_makanan`
--
ALTER TABLE `pesanan_makanan`
  MODIFY `id_pesanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `reservasi`
--
ALTER TABLE `reservasi`
  MODIFY `id_reservasi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id_transaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_pesanan`
--
ALTER TABLE `detail_pesanan`
  ADD CONSTRAINT `detail_pesanan_ibfk_1` FOREIGN KEY (`id_pesanan`) REFERENCES `pesanan_makanan` (`id_pesanan`),
  ADD CONSTRAINT `detail_pesanan_ibfk_2` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id_menu`);

--
-- Constraints for table `pesanan_makanan`
--
ALTER TABLE `pesanan_makanan`
  ADD CONSTRAINT `pesanan_makanan_ibfk_1` FOREIGN KEY (`id_reservasi`) REFERENCES `reservasi` (`id_reservasi`);

--
-- Constraints for table `reservasi`
--
ALTER TABLE `reservasi`
  ADD CONSTRAINT `reservasi_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `reservasi_ibfk_2` FOREIGN KEY (`id_meja`) REFERENCES `meja` (`id_meja`);

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_reservasi`) REFERENCES `reservasi` (`id_reservasi`),
  ADD CONSTRAINT `transaksi_ibfk_2` FOREIGN KEY (`id_metode`) REFERENCES `metode_pembayaran` (`id_metode`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
