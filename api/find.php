<?php
header("Access-Control-Allow-Origin: *");
// $id = '';

$koneksi = mysqli_connect('localhost', 'root', '','db_beratbadan');

$method = $_SERVER['REQUEST_METHOD'];


if (!$koneksi) {
  die("Koneksi gagal: " . mysqli_connect_error());
}


switch ($method) {
    case 'GET':
        $tglAwal = $_GET["tglAwal"];
        $tglAkhir = $_GET["tglAkhir"];
        $jenis = $_GET["jenis"];
        $durasi = $_GET["durasi"];

      $sql = "select * from databb where jenis_kegiatan='$jenis' and durasi='$durasi' and tanggal between '$tglAwal' and '$tglAkhir'"; 
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