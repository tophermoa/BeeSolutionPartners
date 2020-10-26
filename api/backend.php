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
    case 'GET':
      //$id = $_GET['id'];
      $sql = "select * from databb"; 
      break;
    case 'POST':
      $tgl = $_POST["tgl"];
      $jenis = $_POST["jenis"];
      $durasi = $_POST["durasi"];
      $bb = $_POST["bb"];
      $keterangan = $_POST["keterangan"];

      $sql = "insert into databb (tanggal, jenis_kegiatan, durasi, keterangan, berat_badan) values ('$tgl', '$jenis', '$durasi', '$keterangan', '$bb')"; 
      break;
}

$result = mysqli_query($koneksi,$sql);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($koneksi));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($koneksi);
  }

$koneksi->close();