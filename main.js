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
 * Xử lí:
 * 0 - 50: 500d * số điện
 * 50 - 100: 500 * 50 + (số điện - 50) * 650
 * 100 - 200: 500 * 50 + 650 * 50 + (số điện - 100) * 850
 * 200 - 350: 500 * 50 + 650 * 50 + 850 * 100 + (số điện - 200) * 1100
 * >350: 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (số điện - 350) * 1300
 * Đầu ra: Số tiền
 */
