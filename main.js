/** Quản lý tuyển sinh
 * Mô tả: điểm tổng >= điểm chuẩn và ko có môn điểm 0 ====> đậu
 * Đầu vào: điểm chuẩn của hội đồng, điểm 3 môn thi, khu vực(dấu X nếu ko ưu tiên),
 * đối tượng dự thi (nhập 0 nếu ko ưu tiên)
 * Xử lý:
 * Tính tổng điểm 3 môn thi. Khai báo
 *
 * Đầu ra: kết quả cho biết thí sinh đậu hay rớt và tổng số điểm đạt được
 */

document.getElementById('btnQuanLiSinhVien').addEventListener('click', function () {
    const diemToan = document.getElementById('diemToan').value * 1;
    const diemLy = document.getElementById('diemLy').value * 1;
    const diemHoa = document.getElementById('diemHoa').value * 1;
    const tongDiemBaMon = diemHoa + diemLy + diemToan;
    var diemUuTien = 0;
    // switch ()
});
