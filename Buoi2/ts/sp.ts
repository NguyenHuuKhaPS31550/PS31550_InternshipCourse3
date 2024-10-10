type TLaptop = {
    id:number,
    ten_sp: string,
    hinh: string,
    gia: number,
    ngay:string, 
    luot_xem: number
} 
let sp1:TLaptop ;
sp1 = {
    id:1,
    ten_sp:"Asus Vivobook Go 15 E1504FA R5",
    hinh:"images/1.jpg",
    gia: 12000000,
    ngay:"2024-09-12",
    luot_xem:120
}
function hien1sp(){
    let str =`
        <div class="sp1">
            <h3>${sp1.ten_sp}</h3>
            <p>Giá: ${Number(sp1.gia).toLocaleString("vi")} VNĐ</p>
            <img src="${sp1.hinh}">
            <p>Cập nhật: ${new Date(sp1.ngay).toLocaleDateString("vi")}</p>
            <p>Lượt xem: ${sp1.luot_xem}</p>
        </div>`;
    return str;
}
let sp_arr:TLaptop[] = [
    { id:1, ten_sp:"Asus Vivobook Go 15", hinh:"images/1.jpg", gia: 11000000,ngay:"2024-09-12", luot_xem:312 },
    { id:2, ten_sp:"Vivobook Go 15 R5", hinh:"images/1.jpg", gia: 16000000,ngay:"2024-09-12", luot_xem:330 },
    { id:3, ten_sp:"Go 15 E1504FA R5", hinh:"images/1.jpg", gia: 14000000,ngay:"2024-09-12", luot_xem:520 },
    { id:4, ten_sp:"Asus 15 E1504FA R5", hinh:"images/1.jpg", gia: 15000000,ngay:"2024-09-12", luot_xem:250 },
    { id:5, ten_sp:"Vivobook Go 15 E1504FA", hinh:"images/1.jpg", gia: 17000000,ngay:"2024-09-12", luot_xem:220 },
    { id:6, ten_sp:"Go 15 E1504FA F5", hinh:"images/1.jpg", gia: 14000000,ngay:"2024-09-12", luot_xem:160 },
    { id:7, ten_sp:"Vivobook E1504FA R5", hinh:"images/1.jpg", gia: 12000000,ngay:"2024-09-12", luot_xem:150 },
    { id:8, ten_sp:"Go 15 E1504FA P1", hinh:"images/1.jpg", gia: 13000000,ngay:"2024-09-12", luot_xem:10 },
    { id:9, ten_sp:"Vivobook Go I7 Y5", hinh:"images/1.jpg", gia: 11000000,ngay:"2024-09-12", luot_xem:12 },
 ];
 
function show1sp(sp:TLaptop){
    let str =`
        <div class="sp1">
            <h3>${sp.ten_sp}</h3>
            <p>Giá: ${Number(sp.gia).toLocaleString("vi")} VNĐ</p>
            <img src="${sp.hinh}">
            <p>Cập nhật: ${new Date(sp.ngay).toLocaleDateString("vi")}</p>
            <p>Lượt xem: ${sp.luot_xem}</p>
        </div>`;
    return str;
}
function hienlistsp() {
    let str="";
    sp_arr.forEach ( sp => str+= show1sp(sp) )
    return str;
}

