function tinh() {
    let so1 = document.getElementById("so1").Value;
    let so2 = document.getElementById("so2").Value;
    let cong = document.getElementById("tong_day_la_thay_doi_so_2");
    let t = Number(so1) + Number(so2)
    cong.innerHTML = "tổng là:" + t
}