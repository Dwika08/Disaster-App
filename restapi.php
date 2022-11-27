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
    case 'Delete':
        Delete();
        break;
    case 'Update':
        Update();
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
    $sql = mysqli_query($conn, "SELECT * FROM tbl_bencana 
    JOIN desa_detail ON tbl_bencana.id_desa_detail = desa_detail.id_desa_detail
    JOIN kec_detail ON desa_detail.kecamatan = kec_detail.kecamatan
    JOIN bencana_detail ON tbl_bencana.id_bencana_detail = bencana_detail.id_bencana_detail 
    WHERE id_bencana = '$id'");

    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'ID' => $row['id_bencana'],
            'Desa' => $row['desa'],
            'Kecamatan' => $row['kecamatan'],
            'Bencana' => $row['bencana'],
            'Tanggal' => $row['tgl_bencana'],
            'Penyebab_Kejadian' => $row['penyebab_kejadian'],
            'Rusak_Ringan' => $row['rusak_ringan'],
            'Rusak_Sedang' => $row['rusak_sedang'],
            'Rusak_Berat' => $row['rusak_berat'],
            'Meninggal_Dunia' => $row['md'],
            'Luka_Ringan' => $row['lr'],
            'Luka_Berat' => $row['lb'],
            'Pengungsi_Jiwa' => $row['pengungsi_jiwa'],
            'Pengungsi_KK' => $row['pengungsi_kk'],
            'Pelapor' => $row['nama_pelapor'],
            'Tlp_Darurat' => $row['tlp_darurat'],
            'Kondisi' => $row['kondisi_umum'],
            'Tindakan' => $row['tindakan'],
            'Kendala' => $row['kendala'],
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

    $sql = mysqli_query($conn, "SELECT * FROM tbl_bencana 
    JOIN desa_detail ON tbl_bencana.id_desa_detail = desa_detail .id_desa_detail
    JOIN kec_detail ON desa_detail.kecamatan = kec_detail.kecamatan
    JOIN bencana_detail ON tbl_bencana.id_bencana_detail = bencana_detail.id_bencana_detail
    WHERE year (tgl_bencana) = '2021' and status='1' ORDER BY tgl_bencana ASC");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'ID' => $row['id_bencana'],
            'Desa' => $row['desa'],
            'Kecamatan' => $row['kecamatan'],
            'Bencana' => $row['bencana'],
            'Tanggal' => $row['tgl_bencana'],
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

    $sql = mysqli_query($conn, "SELECT * FROM tbl_bencana 
    JOIN desa_detail ON tbl_bencana.id_desa_detail = desa_detail .id_desa_detail
    JOIN kec_detail ON desa_detail.kecamatan = kec_detail.kecamatan
    JOIN bencana_detail ON tbl_bencana.id_bencana_detail = bencana_detail.id_bencana_detail
    WHERE year (tgl_bencana) = '2022' and status='1' ORDER BY tgl_bencana ASC");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'ID' => $row['id_bencana'],
            'Desa' => $row['desa'],
            'Kecamatan' => $row['kecamatan'],
            'Bencana' => $row['bencana'],
            'Tanggal' => $row['tgl_bencana'],
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

    $id_bencana_detail = $_POST['id_bencana_detail'];
    $tgl_bencana = $_POST['tgl_bencana'];
    $id_desa_detail = $_POST['id_desa_detail'];
    $penyebab_kejadian = $_POST['penyebab_kejadian'];
    $rusak_ringan = $_POST['rusak_ringan'];
    $rusak_sedang = $_POST['rusak_sedang'];
    $rusak_berat = $_POST['rusak_berat'];
    $md = $_POST['md'];
    $lr = $_POST['lr'];
    $lb = $_POST['lb'];
    $pengungsi_jiwa = $_POST['pengungsi_jiwa'];
    $pengungsi_kk = $_POST['pengungsi_kk'];
    $nama_pelapor = $_POST['nama_pelapor'];
    $tlp_darurat = $_POST['tlp_darurat'];
    $kondisi_umum = $_POST['kondisi_umum'];
    $tindakan = $_POST['tindakan'];
    $kendala = $_POST['kendala'];
    $lat = $_POST['lat'];
    $lng = $_POST['lng'];
    
    $file = $_FILES['$file']['name'];

    if (!empty($_FILES ['file']['name'])) {
    $target_dir = "../../img/img/";

    $target_file = $target_dir . basename($_FILES["file"]['name']);
    $imageFileType =strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    if (move_uploaded_file($_FILES['file']['tmp_name'], $target_file)) {
        $sql = "INSERT INTO tbl_bencana VALUES ('',' $id_bencana_detail','$tgl_bencana','$id_desa_detail','$penyebab_kejadian',
            '$rusak_ringan',' $rusak_sedang',' $rusak_berat',' $md','$lr','$lb','$pengungsi_jiwa','$pengungsi_kk','$nama_pelapor',
            '$tlp_darurat','$kondisi_umum',' $tindakan','$kendala','$file','$lat','$lng',0)" or die(mysqli_error($conn));
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

function Update()
{
    global $conn;
    global $json;
    global $obj;
    // Mendapatkan ID bencana
    $id = isset($_GET['id']) ? $_GET['id'] : "";

    $id_bencana_detail = isset($_POST['id_bencana_detail']) ? $_POST['id_bencana_detail'] : "";
    $tgl_bencana = isset($_POST['tgl_bencana']) ? $_POST['tgl_bencana'] : "";
    $id_desa_detail = isset($_POST['id_desa_detail']) ? $_POST['id_desa_detail'] : "";
    $kondisi_umum = isset($_POST['kondisi_umum']) ? $_POST['kondisi_umum'] : "";
    $dampak_bencana = isset($_POST['dampak_bencana']) ? $_POST['dampak_bencana'] : "";
    $pelapor = isset($_POST['pelapor']) ? $_POST['pelapor'] : "";
    $kk = isset($_POST['kk']) ? $_POST['kk'] : "";
    $tindakan = isset($_POST['tindakan']) ? $_POST['tindakan'] : "";
    $koordinat = isset($_POST['koordinat']) ? $_POST['koordinat'] : "";

    $sql = "UPDATE tbl_bencana22 SET id_bencana_detail='$id_bencana_detail', Tgl_bencana='$tgl_bencana',id_desa_detail='$id_desa_detail', kondisi_umum='$kondisi_umum',
    dampak_bencana='$dampak_bencana', pelapor='$pelapor',kk='$kk' ,tindakan='$tindakan',koordinat='$koordinat' WHERE id_bencana = " . $id . ";";
    // echo $sql;

    $query = mysqli_query($conn, $sql);
    if ($query) {
        $msg = "Update Data Berhasil";
    } else {
        $msg = "Update Data gagal";
    }

    $response = array(
        'status' => 'OK',
        'msg' => $msg
    );
    echo json_encode($response);
}


//--- Delete
function Delete()
{
    global $conn;
    global $json;
    global $obj;
    $id = isset($_GET['id']) ? $_GET['id'] : "";
    $sql = "DELETE FROM tbl_bencana22 WHERE id_bencana='$id'";
    // echo $sql;


    // $id = isset($_GET['id']) ? $_GET['id'] : "";
    // $sql = "DELETE FROM mahasiswa WHERE id_mahasiswa='$id'";

    $query = mysqli_query($conn, $sql);
    if ($query) {
        $msg = "Data Berhasil Dihapus";
    } else {
        $msg = "Gagal dihapus";
    }

    $response = array(
        'status' => 'OK',
        'msg' => $msg
    );
    echo json_encode($response);
}




// Marker- MAP

function getMarker21()
{
    global $conn;
    global $json;
    global $obj;
    $sql = mysqli_query($conn, "SELECT * FROM tbl_bencana 
    JOIN desa_detail ON tbl_bencana.id_desa_detail = desa_detail .id_desa_detail
    JOIN kec_detail ON desa_detail.kecamatan = kec_detail.kecamatan
    JOIN bencana_detail ON tbl_bencana.id_bencana_detail = bencana_detail.id_bencana_detail 
    WHERE year (tgl_bencana) = '2021' and status='1' ");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'id' => $row['id_bencana'],
            'lat' => $row['latitude'],
            'long' => $row['longitude'],
            'desa' => $row['desa'],
            'bencana' => $row['bencana'],
            'kecamatan' => $row['kecamatan'],
            'tanggal' => $row['tgl_bencana']
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
    $sql = mysqli_query($conn, "SELECT * FROM tbl_bencana 
    JOIN desa_detail ON tbl_bencana.id_desa_detail = desa_detail.id_desa_detail
    JOIN kec_detail ON desa_detail.kecamatan = kec_detail.kecamatan
    JOIN bencana_detail ON tbl_bencana.id_bencana_detail = bencana_detail.id_bencana_detail 
    WHERE year (tgl_bencana) = '2022' and status='1' ");
    while ($row = mysqli_fetch_array($sql)) {
        $hasil[] = array(
            'id' => $row['id_bencana'],
            'lat' => $row['latitude'],
            'long' => $row['longitude'],
            'desa' => $row['desa'],
            'bencana' => $row['bencana'],
            'kecamatan' => $row['kecamatan'],
            'tanggal' => $row['tgl_bencana']
        );
    }
    $data = $hasil;
    echo json_encode($data);
}
