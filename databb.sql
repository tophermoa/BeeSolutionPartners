-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 26 Okt 2020 pada 23.19
-- Versi Server: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_beratbadan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `databb`
--

CREATE TABLE `databb` (
  `id` int(5) NOT NULL,
  `tanggal` date NOT NULL,
  `jenis_kegiatan` varchar(30) NOT NULL,
  `durasi` int(5) DEFAULT NULL,
  `keterangan` varchar(100) DEFAULT NULL,
  `berat_badan` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `databb`
--

INSERT INTO `databb` (`id`, `tanggal`, `jenis_kegiatan`, `durasi`, `keterangan`, `berat_badan`) VALUES
(1, '2020-03-01', 'tidur', 400, 'tidur siang', '59.40'),
(2, '2020-03-01', 'tidur', 400, 'tidur malam', '60.00'),
(3, '2020-10-28', 'Aktifitas Lain', 20, 'terbang', '70.00'),
(4, '2020-10-28', 'Olahraga', 80, 'berlari lari', '80.00'),
(5, '2020-03-01', 'tidur', 400, 'tidur malam', '62.50'),
(6, '2020-03-01', 'tidur', 400, 'tidur malam', '62.50'),
(7, '2020-03-01', 'tidur', 400, 'tidur malam', '62.50'),
(8, '2020-03-01', 'tidur', 400, 'tidur malam', '62.50'),
(9, '2020-03-01', 'tidur', 400, 'tidur malam', '62.50'),
(10, '2020-03-01', 'tidur', 400, 'tidur malam', '62.50'),
(11, '2020-03-02', 'tidur', 400, 'tidur malam', '40.20'),
(12, '2020-03-02', 'tidur', 400, 'tidur malam', '40.20'),
(14, '2020-03-02', 'tidur', 400, 'tidur siang', '40.20'),
(15, '2020-03-02', 'tidur', 400, 'tidur siang', '40.20'),
(16, '2020-03-02', 'tidur', 400, 'tidur siang', '40.20'),
(17, '2020-03-02', 'makan', 400, 'makan siang', '40.20'),
(18, '2020-03-02', 'makan', 400, 'makan malam', '40.20'),
(19, '2020-03-02', 'makan', 400, 'makan malam', '40.20'),
(20, '2020-03-02', 'makan', 400, 'makan malam', '40.20'),
(21, '2020-03-03', 'tidur', 400, 'tidur malam', '40.20'),
(22, '2020-03-03', 'tidur', 400, 'tidur malam', '40.20'),
(23, '2020-03-03', 'tidur', 400, 'tidur malam', '40.20'),
(24, '2020-03-03', 'tidur', 400, 'tidur malam', '62.50'),
(25, '2020-03-03', 'tidur', 400, 'tidur malam', '62.50'),
(26, '2020-03-03', 'tidur', 400, 'tidur malam', '55.40'),
(27, '2020-03-03', 'tidur', 400, 'tidur malam', '55.40'),
(28, '2020-03-03', 'tidur', 400, 'tidur malam', '55.40'),
(29, '2020-03-03', 'aktifitas lain', 400, 'ngoding', '55.40'),
(30, '2020-03-03', 'aktifitas lain', 400, 'ngopi', '55.40'),
(31, '2020-03-04', 'aktifitas lain', 400, 'berenang', '55.40'),
(32, '2020-03-04', 'aktifitas lain', 400, 'ngopi', '55.40'),
(33, '2020-03-04', 'aktifitas lain', 400, 'berenang', '55.40'),
(34, '2020-03-04', 'aktifitas lain', 400, 'ngopi', '55.40'),
(35, '2020-03-04', 'aktifitas lain', 400, 'berlari', '55.40'),
(37, '2020-03-04', 'aktifitas lain', 400, 'push up', '55.40'),
(39, '2020-03-04', 'aktifitas lain', 400, 'ngopi', '55.40'),
(40, '2020-03-04', 'aktifitas lain', 400, 'ngoding', '59.40'),
(42, '2020-03-05', 'aktifitas lain', 400, 'main game', '62.30'),
(44, '2020-03-05', 'aktifitas lain', 400, 'main catur', '62.30'),
(45, '2020-03-05', 'aktifitas lain', 400, 'ngoding', '62.30'),
(46, '2020-03-05', 'aktifitas lain', 400, 'main game', '62.30'),
(47, '2020-03-05', 'olahraga', 400, 'lari pagi', '62.30'),
(48, '2020-03-05', 'olahraga', 400, 'lari pagi', '62.30'),
(49, '2020-03-05', 'olahraga', 400, 'lari pagi', '62.30'),
(50, '2020-03-05', 'olahraga', 400, 'lari pagi', '62.30'),
(51, '2020-03-06', 'olahraga', 400, 'lari pagi', '62.30'),
(52, '2020-03-06', 'olahraga', 400, 'lari pagi', '62.30'),
(53, '2020-03-06', 'olahraga', 400, 'lari pagi', '62.30'),
(54, '2020-03-06', 'olahraga', 400, 'lari pagi', '62.30'),
(55, '2020-03-06', 'olahraga', 400, 'lari pagi', '62.30'),
(57, '2020-03-06', 'olahraga', 400, 'lari pagi', '62.30'),
(58, '2020-03-06', 'olahraga', 400, 'lari pagi', '62.30'),
(59, '2020-03-06', 'olahraga', 400, 'lari pagi', '61.20'),
(60, '2020-03-06', 'olahraga', 400, 'lari pagi', '61.20'),
(61, '2020-03-07', 'olahraga', 400, 'lari pagi', '61.20'),
(63, '2020-03-07', 'olahraga', 400, 'lari pagi', '61.20'),
(65, '2020-03-07', 'olahraga', 400, 'lari pagi', '61.20'),
(66, '2020-03-07', 'olahraga', 400, 'lari pagi', '61.20'),
(67, '2020-03-07', 'olahraga', 400, 'lari pagi', '61.20'),
(68, '2020-03-07', 'olahraga', 400, 'lari siang', '61.20'),
(69, '2020-03-07', 'tidur', 400, 'tidur siang', '61.20'),
(70, '2020-03-07', 'tidur', 400, 'tidur siang', '61.20'),
(71, '2020-03-08', 'tidur', 400, 'tidur siang', '61.20'),
(72, '2020-03-08', 'tidur', 400, 'tidur siang', '61.20'),
(73, '2020-03-08', 'tidur', 400, 'tidur siang', '58.30'),
(74, '2020-03-08', 'tidur', 400, 'tidur malam', '58.30'),
(75, '2020-03-08', 'tidur', 400, 'tidur malam', '58.30'),
(76, '2020-03-08', 'tidur', 400, 'tidur malam', '58.30'),
(77, '2020-03-08', 'tidur', 400, 'tidur malam', '58.30'),
(78, '2020-03-08', 'makan', 400, 'makan siang', '58.30'),
(79, '2020-03-08', 'makan', 400, 'makan siang', '58.30'),
(80, '2020-03-08', 'makan', 400, 'makan malam', '58.30'),
(129, '2020-10-27', 'Tidur', 12, 'v', '21.00'),
(130, '2020-10-29', 'Tidur', 12, 'c czx', '21.00'),
(131, '2020-10-27', 'Aktifitas Lain', 40, 'renang', '68.00'),
(132, '2020-03-01', 'tidur', 400, 'tidur siang', '57.40'),
(133, '2020-03-01', 'Aktifitas Lain', 80, 'mandi', '60.00'),
(134, '2020-10-27', 'tidur', 30, 'tidur siang', '59.40'),
(167, '2020-10-27', 'tidur', 30, 'tidur malam', '60.00'),
(168, '2020-10-27', 'tidur', 30, 'tidur malam', '61.00'),
(169, '2020-10-27', 'tidur', 30, 'tidur malam', '62.50'),
(170, '2020-10-27', 'tidur', 30, 'tidur malam', '62.50'),
(171, '2020-10-27', 'tidur', 30, 'tidur malam', '62.50'),
(172, '2020-10-27', 'Olahraga', 30, 'Olahraga malam', '62.50'),
(173, '2020-10-27', 'Olahraga', 30, 'Olahraga malam', '62.50'),
(174, '2020-10-27', 'Olahraga', 60, 'Olahraga malam', '62.50'),
(175, '2020-10-27', 'Olahraga', 31, 'Olahraga malam', '62.50'),
(176, '2020-10-27', 'Olahraga', 60, 'Olahraga malam', '40.20'),
(177, '2020-10-27', 'Olahraga', 60, 'Olahraga malam', '40.20'),
(178, '2020-10-27', 'Olahraga', 20, 'Olahraga siang', '40.20'),
(179, '2020-10-27', 'Olahraga', 20, 'Olahraga siang', '40.20'),
(180, '2020-10-27', 'Olahraga', 20, 'Olahraga siang', '40.20'),
(181, '2020-10-27', 'Olahraga', 20, 'Olahraga siang', '40.20'),
(184, '2020-10-27', 'makan', 5, 'makan malam', '40.20'),
(185, '2020-10-27', 'makan', 5, 'makan malam', '40.20'),
(186, '2020-10-27', 'tidur', 500, 'tidur malam', '40.20'),
(187, '2020-10-27', 'tidur', 500, 'tidur malam', '40.20'),
(188, '2020-10-27', 'tidur', 500, 'tidur malam', '40.20'),
(189, '2020-10-27', 'Aktifitas lain', 300, 'ngoding malam', '62.50'),
(190, '2020-10-27', 'Aktifitas lain', 300, 'ngoding malam', '62.50'),
(191, '2020-10-27', 'Aktifitas lain', 300, 'ngoding malam', '55.40'),
(192, '2020-10-27', 'Aktifitas lain', 300, 'ngoding malam', '55.40'),
(193, '2020-10-27', 'Aktifitas lain', 300, 'ngoding malam', '55.40'),
(198, '0000-00-00', 'Tidur', 20, 'tiduran', '20.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `databb`
--
ALTER TABLE `databb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `databb`
--
ALTER TABLE `databb`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=199;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
