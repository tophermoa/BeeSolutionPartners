<?php
header("Access-Control-Allow-Origin: *");
// $id = '';

$koneksi = mysqli_connect('localhost', 'root', '','db_beratbadan');

$method = $_SERVER['REQUEST_METHOD'];


if (!$koneksi) {
  die("Koneksi gagal: " . mysqli_connect_error());
}


switch ($method) {
    case 'POST':
        $id = $_POST['id'];

      $sql = "delete from databb where id='$id'"; 
      break;
}

$result = mysqli_query($koneksi,$sql);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($koneksi));
}

$koneksi->close();