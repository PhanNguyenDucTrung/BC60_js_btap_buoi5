/** Quản lý tuyển sinh
 * Mô tả: điểm tổng >= điểm chuẩn và ko có môn điểm 0 ====> đậu
 * Đầu vào: điểm chuẩn của hội đồng, điểm 3 môn thi, khu vực(dấu X nếu ko ưu tiên),
 * đối tượng dự thi (nhập 0 nếu ko ưu tiên)
 * Xử lý:
 * Tính tổng điểm 3 môn thi. Khai báo
 *
 * Đầu ra: kết quả cho biết thí sinh đậu hay rớt và tổng số điểm đạt được
 */

function tinhDiemUuTien() {}

document.getElementById('btnQuanLiTuyenSinh').addEventListener('click', function () {
    const diemChuan = document.getElementById('diemChuan').value * 1;
    const diemToan = document.getElementById('diemToan').value * 1;
    const diemLy = document.getElementById('diemLy').value * 1;
    const diemHoa = document.getElementById('diemHoa').value * 1;
    const tongDiemBaMon = diemHoa + diemLy + diemToan;
    const hienThiTuyenSinh = document.getElementById('hienThiTuyenSinh');

    const khuVuc = document.getElementById('khuVuc').value;
    const doiTuong = document.getElementById('doiTuong').value;

    var ketQua = true;

    var diemUuTien = 0;
    switch (khuVuc) {
        case 'A':
            diemUuTien = 2;
            console.log(diemUuTien);
            break;
        case 'B':
            console.log(diemUuTien);
            diemUuTien = 1;
            break;
        case 'C':
            diemUuTien = 0.5;
            console.log(diemUuTien);

            break;
        default:
            diemUuTien = 0;
    }

    switch (doiTuong) {
        case '0':
            console.log(diemUuTien);
            diemUuTien += 0;
            break;
        case '1':
            diemUuTien += 2.5;
            console.log(diemUuTien);
            break;

        case '2':
            diemUuTien += 1.5;
            console.log(diemUuTien);

            break;
        case '3':
            diemUuTien += 1;
            console.log(diemUuTien);
            break;
    }

    const tongDiem = tongDiemBaMon + diemUuTien;
    console.log(tongDiem);

    if (tongDiem >= diemChuan) {
        console.log('Bạn đậu tốt nghiệp');
        ketQua = 'đậu';
    } else {
        console.log('Bạn rớt tốt nghiệp');
        ketQua = 'rớt';
    }
    var content = '';

    content = `
    <div class="alert alert-success mb-0">
       <p>Tổng điểm 3 môn là: ${tongDiemBaMon}.</p>
       <p>Điểm ưu tiên: ${diemUuTien}.</p>
       <p>Tổng điểm tuyển sinh: ${tongDiem}.</p>
       <p>Bạn đã ${ketQua} tuyển sinh.</p>
    </div>`;
    hienThiTuyenSinh.innerHTML = content;
});

/**
 * Tính tiền điện
 * Đầu vào: Tên, số điện(Kw)
 * Xử lí: Tính tiền điện theo các mốc
 * 0 - 50: 500d * số điện
 * 50 - 100: 500 * 50 + (số điện - 50) * 650
 * 100 - 200: 500 * 50 + 650 * 50 + (số điện - 100) * 850
 * 200 - 350: 500 * 50 + 650 * 50 + 850 * 100 + (số điện - 200) * 1100
 * >350: 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (số điện - 350) * 1300
 * Đầu ra: Số tiền
 */

function tinhTienDien(soDien = 1) {
    if (0 <= soDien && soDien <= 50) {
        var tienDien = 500 * soDien;
    }
    if (50 < soDien && soDien <= 100) {
        var tienDien = 500 * 50 + (soDien - 50) * 650;
    }
    if (100 < soDien && soDien <= 200) {
        var tienDien = 500 * 50 + 650 * 50 + (soDien - 100) * 850;
    }
    if (200 < soDien && soDien <= 350) {
        var tienDien = 500 * 50 + 650 * 50 + 850 * 100 + (soDien - 200) * 1100;
    }
    if (350 < soDien) {
        var tienDien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (soDien - 350) * 1300;
    }
    return tienDien;
}
document.getElementById('btnTinhTienDien').addEventListener('click', function () {
    const tenChuHo = document.getElementById('tenChuHo').value;
    console.log(tenChuHo);
    const soDien = document.getElementById('soDien').value * 1;
    console.log(soDien);
    const hienThiTienDien = document.getElementById('hienThiTienDien');
    const tienDien = tinhTienDien(soDien);
    console.log('Tien dien', tienDien);

    var content = '';
    content = `
    <div class="alert alert-success mb-0">
     <p>Tên chủ hộ: ${tenChuHo}</p>
     <p>Tiền điện là: ${tienDien}</p>
    </div>
    `;
    hienThiTienDien.innerHTML = content;
});

/**
 * TÍNH THUẾ THU NHẬP CÁ NHÂN
 * Đầu vào: Thông tin Họ tên, tổng thu nhập năm, số người phụ thuộc
 * Xử lý:
 * Tính thu nhập chịu thuế:
 * Thu nhập chịu thuế = Tổng thu nhập năm - 4tr - Số người phụ thuộc * 1.6tr
 * 1. Thu nhập chịu thuế <= 0 =>  Không cần đóng thuế => In kết quả
 * 2. ------------------ > 0 => Tính thuế thu nhập theo các mốc: Thu nhập chịu thuế * thuế suất
 * Đầu ra: Thuế thu nhập cá nhân
 */

function tinhThueThuNhapCaNhan(thuNhapChiuThue) {
    const bacThue_1 = 60;
    const bacThue_2 = 120;
    const bacThue_3 = 210;
    const bacThue_4 = 384;
    const bacThue_5 = 624;
    const bacThue_6 = 960;

    const thueSuat_1 = 0.05;
    const thueSuat_2 = 0.1;
    const thueSuat_3 = 0.15;
    const thueSuat_4 = 0.2;
    const thueSuat_5 = 0.25;
    const thueSuat_6 = 0.3;
    const thueSuat_7 = 0.35;
    // Bậc thuế 1
    if (thuNhapChiuThue <= bacThue_1) {
        const thueThuNhap = thuNhapChiuThue * thueSuat_1;
        return thueThuNhap;
    }
    // Bậc thuế 2
    if (thuNhapChiuThue <= bacThue_2) {
        const thueThuNhap = bacThue_1 + (thuNhapChiuThue - bacThue_1) * thueSuat_2;

        return thueThuNhap;
    }
    // Bậc thuế 3
    if (thuNhapChiuThue <= bacThue_3) {
        const thueThuNhap =
            bacThue_1 * thueSuat_1 + (bacThue_2 - bacThue_1) * thueSuat_2 + (thuNhapChiuThue - bacThue_2) * thueSuat_3;
        return thueThuNhap;
    }
    // Bậc thuế 4
    if (thuNhapChiuThue <= bacThue_4) {
        const thueThuNhap =
            bacThue_1 * thueSuat_1 +
            (bacThue_2 - bacThue_1) * thueSuat_2 +
            (bacThue_3 - bacThue_2) * thueSuat_3 +
            (thuNhapChiuThue - bacThue_3) * thueSuat_4;
        return thueThuNhap;
    }
    // Bậc thuế 5
    if (thuNhapChiuThue <= bacThue_5) {
        const thueThuNhap =
            bacThue_1 * thueSuat_1 +
            (bacThue_2 - bacThue_1) * thueSuat_2 +
            (bacThue_3 - bacThue_2) * thueSuat_3 +
            (bacThue_4 - bacThue_3) * thueSuat_4 +
            (thuNhapChiuThue - bacThue_4) * thueSuat_5;
        return thueThuNhap;
    }
    // Bậc thuế 6
    if (thuNhapChiuThue <= bacThue_6) {
        const thueThuNhap =
            bacThue_1 * thueSuat_1 +
            (bacThue_2 - bacThue_1) * thueSuat_2 +
            (bacThue_3 - bacThue_2) * thueSuat_3 +
            (bacThue_4 - bacThue_3) * thueSuat_4 +
            (bacThue_5 - bacThue_4) * thueSuat_5 +
            (thuNhapChiuThue - bacThue_5) * thueSuat_6;
        return thueThuNhap;
    }
    // Bậc thuế 7
    if (960 < thuNhapChiuThue) {
        const thueThuNhap =
            bacThue_1 * thueSuat_1 +
            (bacThue_2 - bacThue_1) * thueSuat_2 +
            (bacThue_3 - bacThue_2) * thueSuat_3 +
            (bacThue_4 - bacThue_3) * thueSuat_4 +
            (bacThue_5 - bacThue_4) * thueSuat_5 +
            (bacThue_6 - bacThue_5) * thueSuat_6 +
            (thuNhapChiuThue - bacThue_6) * thueSuat_7;
        return thueThuNhap;
    }
}

document.getElementById('btnTinhThueThuNhapCaNhan').addEventListener('click', function () {
    const hoTen = document.getElementById('hoTen').value;
    const tongThuNhapNam = document.getElementById('tongThuNhapNam').value;
    const soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value * 1;
    console.log(hoTen, tongThuNhapNam, soNguoiPhuThuoc);
    const thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc * 1.6;
    const hienThiThueThuNhap = document.getElementById('hienThiThueThuNhap');

    var content = '';
    if (thuNhapChiuThue <= 0) {
        console.log('Bạn không phải đóng thuế');
        content = `
        <div class="alert alert-success mb-0">
            <p>Bạn không phải đóng thuế.</p>
        </div>
        `;
        hienThiThueThuNhap.innerHTML = content;
        return;
    }

    const thueThuNhap = tinhThueThuNhapCaNhan(thuNhapChiuThue).toFixed(2);
    console.log(thueThuNhap);
    content = `
      <div class="alert alert-success mb-0">
            <p>Số thuế phải nộp: ${thueThuNhap} (triệu đồng).</p>
            <p>Tên người nộp thuế: ${hoTen}.</p>
      </div>
    `;
    hienThiThueThuNhap.innerHTML = content;
});

/**
 * TÍNH TIỀN CÁP
 * Đầu vào: Mã KH, Loại Khách Hàng, Số Kết Nối, Số Kênh Cao Cấp
 * Xử lý:
 * . Nhà dân: tienCap = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
 * . Doanh nghiệp: tienCap = ---------------------------------------------;
 * 0  - 10 cổng: phiDichVuCoBan = 75
 * > 10: phiDichVuCoBan = 75 + 5 * (số cổng - 10)
 * Đầu ra: Hóa đơn tiền cáp
 */
const soKetNoi = document.getElementById('soKetNoi');
const loaiKhachHang = document.getElementById('loaiKhachHang');
loaiKhachHang.addEventListener('change', () => {
    soKetNoi.disabled = !soKetNoi.disabled;
    soKetNoi.value = '';
});
const soKenhCaoCap = document.getElementById('soKenhCaoCap');
function tinhTienCap(loaiKhachHang, soKetNoi, soKenhCaoCap = 0) {
    if (loaiKhachHang == 'nhaDan') {
        const phiXuLyHoaDon = 4.5;
        const phiDichVuCoBan = 20.5;
        const phiThueKenhCaoCap = 7.5;
        const tienCap = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap * soKenhCaoCap;
        return tienCap;
    }
    if (loaiKhachHang == 'doanhNghiep') {
        const phiXuLyHoaDon = 15;
        const phiDichVuCoBan_muc1 = 75;
        const phiDichVuCoBan_muc2 = 5;
        const phiThueKenhCaoCap = 50;
        tienCap = phiXuLyHoaDon + phiDichVuCoBan_muc1 + phiThueKenhCaoCap * soKenhCaoCap;
        return tienCap;
    }
}
document.getElementById('btnTinhTienCap').addEventListener('click', () => {
    const tienCap = tinhTienCap(loaiKhachHang.value, soKetNoi.value, soKenhCaoCap.value);
    console.log(tienCap);
});
