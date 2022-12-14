<?php
$conn = mysqli_connect('localhost', 'root', '', 'aplikasi');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$op = $_GET['op'];
switch ($op) {
    case 'inputData':
        inputData();
        break;
    case 'getDatabencana':
        getDatabencana();
        break;
    case 'getDatabencana1':
        getdatabencana1();
        break;
    case 'getBencanaDetail':
        getBencanaDetail();
        break;
    case 'input':
        input();
        break;
    case 'getMarker21':
        getMarker21();
        break;
    case 'getMarker22':
        getMarker22();
        break;
    case 'getBencana':
        getBencana();
        break;
    case 'cariData':
        cariData();
        break;
    case 'kritik':
        kritik();
        break;
}

// -- GET
function getBencana()
{
    global $conn;
    global $json;
    global $obj;

    $sql = mysqli_query($conn, "SELECT * FROM bencana_detail 
-- WHERE tbl_bencana.id_bencana_detail = '3' AND YEAR(tgl_bencana) = '2021'");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'ID' => $row['id_bencana_detail'],
            'bencana' => $row['bencana'],
        );
    }
    $data = $hasil;
    echo json_encode($data);
}


// --- GET --- // Rekap Bencana

function getBencanaDetail()
{
    global $conn;
    global $json;
    global $obj;

    $id = $obj['id'];
    $sql = mysqli_query($conn, "SELECT * FROM rekap_bencana 
    JOIN desa_detail ON rekap_bencana.id_desa_detail = desa_detail.id_desa_detail
    JOIN kec_detail ON desa_detail.id_kec_detail = kec_detail.id_kec_detail
    JOIN bencana_detail ON rekap_bencana.id_bencana_detail = bencana_detail.id_bencana_detail 
    WHERE id_rekap = '$id'");

    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'ID' => $row['id_rekap'],
            'Desa' => $row['desa'],
            'Kecamatan' => $row['kecamatan'],
            'Bencana' => $row['bencana'],
            'Tanggal' => $row['tgl_kejadian'],
            'Nama_kk' => $row['nama_kk'],
            'Jumlah_jiwa' => $row['jumlah_jiwa'],
            'Rt' => $row['rt'],
            'Rw' => $row['rw'],
            'Rusak_Ringan' => $row['rusak_ringan'],
            'Rusak_Sedang' => $row['rusak_sedang'],
            'Rusak_Berat' => $row['rusak_berat'],
            'Terancam' => $row ['terancam'],
            'Meninggal_Dunia' => $row['meninggal_dunia'],
            'Luka_luka' => $row['luka_luka'],
            'Kronologi' => $row['kronologi'],
            'Kerugian' => $row['kerugian'],
            'Latitude' => $row['latitude'],
            'Longitude' => $row['longitude'],
            'Img' => $row['gambar']
        );
    }
    $data = $hasil;
    echo json_encode($data);
}

//-----------// DATA BENCANA //------------// Rekap 

function getDatabencana()
{
    global $conn;
    global $json;
    global $obj;

    $sql = mysqli_query($conn, "SELECT * FROM rekap_bencana 
    JOIN desa_detail ON rekap_bencana.id_desa_detail = desa_detail .id_desa_detail
    JOIN kec_detail ON desa_detail.id_kec_detail = kec_detail.id_kec_detail
    JOIN bencana_detail ON rekap_bencana.id_bencana_detail = bencana_detail.id_bencana_detail
    WHERE year (tgl_kejadian) = '2021' and status='1' ORDER BY tgl_kejadian ASC");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'ID' => $row['id_rekap'],
            'Desa' => $row['desa'],
            'Kecamatan' => $row['kecamatan'],
            'Bencana' => $row['bencana'],
            'Tanggal' => $row['tgl_kejadian'],
            'Status' => $row['status']
        );
    }
    $data = $hasil;
    echo json_encode($data);
}

function getdatabencana1()
{
    global $conn;
    global $json;
    global $obj;

    $sql = mysqli_query($conn, "SELECT * FROM rekap_bencana 
    JOIN desa_detail ON rekap_bencana.id_desa_detail = desa_detail .id_desa_detail
    JOIN kec_detail ON desa_detail.id_kec_detail = kec_detail.id_kec_detail
    JOIN bencana_detail ON rekap_bencana.id_bencana_detail = bencana_detail.id_bencana_detail
    WHERE year (tgl_kejadian) = '2022' and status='1' ORDER BY tgl_kejadian ASC");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'ID' => $row['id_rekap'],
            'Desa' => $row['desa'],
            'Kecamatan' => $row['kecamatan'],
            'Bencana' => $row['bencana'],
            'Tanggal' => $row['tgl_kejadian'],
            'Status' => $row['status']
        );
    }
    $data = $hasil;
    echo json_encode($data);
}

//-----------// DATA BENCANA //------------//

// --- Aksi Input --- //
function inputData()
{
    global $conn;
    global $json;
    global $obj;

    $tgl_kejadian = $_POST['tgl_kejadian'];
    $id_bencana_detail = $_POST['id_bencana_detail'];
    $nama_kk = $_POST['nama_kk'];
    $jumlah_jiwa = $_POST['jumlah_jiwa'];
    $rt = $_POST['rt'];
    $rw = $_POST['rw'];
    $id_desa_detail = $_POST['id_desa_detail'];
    $rusak_berat = $_POST['rusak_berat'];
    $rusak_sedang = $_POST['rusak_sedang'];
    $rusak_ringan = $_POST['rusak_ringan'];
    $terancam = $_POST['terancam'];
    $meninggal_dunia = $_POST['meninggal_dunia'];
    $luka_luka = $_POST['luka_luka'];
    $kronologi = $_POST['kronologi'];
    $kerugian = $_POST['kerugian'];
    $lat = $_POST['lat'];
    $lng = $_POST['lng'];



    $file = $_FILES['file']['name'];

    if (!empty($_FILES['file']['name'])) {
        $target_dir = "../aplikasiV2/html/img/img/";

        $target_file = $target_dir . basename($_FILES["file"]['name']);
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        if (move_uploaded_file($_FILES['file']['tmp_name'], $target_file)) {
            $sql = "INSERT INTO rekap_bencana VALUES ('','$tgl_kejadian','$id_bencana_detail','$nama_kk','$jumlah_jiwa','$rt','$rw','$id_desa_detail',
            '$rusak_berat','$rusak_sedang','$rusak_ringan','$terancam','$meninggal_dunia','$luka_luka','$kronologi','$kerugian','$file','$lat','$lng','0')" or die(mysqli_error($conn));
            $query = mysqli_query($conn, $sql);
            // echo $sql;
            if ($query) {
                $msg = "Simpan Data Berhasil";
                $status = 'ok';
            } else {
                $msg = "Simpan Data gagal";
                $status = 'fail';
            }
            $response = array(
                'status' => $status,
                'msg' => $msg
            );
            echo json_encode($response);
        }
    }
}

function input()
{
    global $conn;
    global $json;
    global $obj;
    $sql = mysqli_query($conn, "SELECT id_desa_detail, CONCAT(desa, ' , ', kecamatan) AS desa_kec FROM desa_detail
        join kec_detail on desa_detail.id_kec_detail = kec_detail.id_kec_detail
    ");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'ID' => $row['id_desa_detail'],
            'desa_kec' => $row['desa_kec']
        );
    }
    $data = $hasil;
    echo json_encode($data);
}


// --- Aksi Input --- //




// Marker- MAP

function getMarker21()
{
    global $conn;
    global $json;
    global $obj;
    $sql = mysqli_query($conn, "SELECT * FROM rekap_bencana 
    JOIN desa_detail ON rekap_bencana.id_desa_detail = desa_detail .id_desa_detail
    JOIN kec_detail ON desa_detail.id_kec_detail = kec_detail.id_kec_detail
    JOIN bencana_detail ON rekap_bencana.id_bencana_detail = bencana_detail.id_bencana_detail 
    WHERE year (tgl_kejadian) = '2021' and status='1' ");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'id' => $row['id_rekap'],
            'lat' => $row['latitude'],
            'long' => $row['longitude'],
            'desa' => $row['desa'],
            'bencana' => $row['bencana'],
            'kecamatan' => $row['kecamatan'],
            'tanggal' => $row['tgl_kejadian']
        );
    }
    $data = $hasil;
    echo json_encode($data);
}

function getMarker22()
{
    global $conn;
    global $json;
    global $obj;
    $sql = mysqli_query($conn, "SELECT * FROM rekap_bencana 
    JOIN desa_detail ON rekap_bencana.id_desa_detail = desa_detail.id_desa_detail
    JOIN kec_detail ON desa_detail.id_kec_detail = kec_detail.id_kec_detail
    JOIN bencana_detail ON rekap_bencana.id_bencana_detail = bencana_detail.id_bencana_detail 
    WHERE year (tgl_kejadian) = '2022' and status='1' ");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'id' => $row['id_rekap'],
            'lat' => $row['latitude'],
            'long' => $row['longitude'],
            'desa' => $row['desa'],
            'bencana' => $row['bencana'],
            'kecamatan' => $row['kecamatan'],
            'tanggal' => $row['tgl_kejadian']
        );
    }
    $data = $hasil;
    echo json_encode($data);
}

function cariData()
{
    global $conn;
    global $json;
    global $obj;

    $tahun = $obj['tahun'];
    $bencana = $obj['bencana'];
    $sql = mysqli_query($conn, "SELECT * FROM rekap_bencana 
    JOIN desa_detail ON rekap_bencana.id_desa_detail = desa_detail.id_desa_detail
    JOIN kec_detail ON desa_detail.id_kec_detail = kec_detail.id_kec_detail
    JOIN bencana_detail ON rekap_bencana.id_bencana_detail = bencana_detail.id_bencana_detail 
    WHERE year(tgl_kejadian) = '$tahun' and rekap_bencana.id_bencana_detail='$bencana' and status='1'");

    if ($sql) {
        while ($row = mysqli_fetch_array($sql)) {

            if ($row > 0) {
                $hasil[] = array(
                    'id' => $row['id_rekap'],
                    'lat' => $row['latitude'],
                    'long' => $row['longitude'],
                    'desa' => $row['desa'],
                    'bencana' => $row['bencana'],
                    'kecamatan' => $row['kecamatan'],
                    'tanggal' => $row['tgl_kejadian']
                );
            } else {
                $hasil = 'null';
            }
        }
    } else {
        $hasil = 'null';
    }

    $data = $hasil;
    echo json_encode($data);
}

function kritik()
{
    global $conn;
    global $json;
    global $obj;

    $kritik = $obj['kritik'];

    $sql = "INSERT INTO kritik_saran VALUES ('','$kritik')";
    $query = mysqli_query($conn, $sql);
    if ($query) {
        $msg = "Simpan Data Berhasil";
        $status = 'ok';
    } else {
        $msg = "Simpan Data gagal";
        $status = 'fail';
    }
    $response = array(
        'status' => $status,
        'msg' => $msg
    );
    echo json_encode($response);
}
