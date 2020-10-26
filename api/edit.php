<?php
header("Access-Control-Allow-Origin: *");
$id = '';

$koneksi = mysqli_connect('localhost', 'root', '','db_beratbadan');

$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$koneksi) {
  die("Koneksi gagal: " . mysqli_connect_error());
}


switch ($method) {
    case 'POST':
        $id = $_POST['id'];
      $tgl = $_POST["tgl"];
      $jenis = $_POST["jenis"];
      $durasi = $_POST["durasi"];
      $bb = $_POST["bb"];
      $keterangan = $_POST["keterangan"];

      $sql = "update databb set tanggal='$tgl', jenis_kegiatan='$jenis', durasi='$durasi', keterangan='$keterangan', berat_badan='$bb' where id='$id'"; 
      break;
}

$result = mysqli_query($koneksi,$sql);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($koneksi));
}

$koneksi->close();