type TLoai = { 
    id: number;
    ten_loai: string;  
    thu_tu: number;
    an_hien:number;
}
type TSanPham = { 
    id: number;
    ten_sp: string;  
    slug: string;
    gia:number;
    gia_km:number;
    hinh:string;
    tinh_chat: number;
    an_hien:number;
    id_loai:number;
    ngay:string;
    so_luong:number;
    hot:number;
    luot_xem:number;
}
type TThuocTinh = { 
    id: number;
    id_sp: number;
    ram: string;  
    cpu: string;
    dia_cung: string;
    mau_sac: string;
    can_nang:string; 
}
const loai_arr:TLoai[]  = [
    {id: 1, ten_loai:"Asus", thu_tu: 0, an_hien: 1},
    { id: 2, ten_loai:"Acer", thu_tu: 1, an_hien: 1},
    { id: 3, ten_loai:"Lenovo", thu_tu: 2, an_hien: 1},
    { id: 4, ten_loai:"MSI", thu_tu: 3, an_hien: 1},
    { id: 5, ten_loai:"HP", thu_tu: 4, an_hien: 1},
    { id: 6, ten_loai:"Dell", thu_tu: 5, an_hien: 1},
    { id: 7, ten_loai:"Apple", thu_tu: 6, an_hien: 1},
    { id: 8, ten_loai:"Surface", thu_tu: 7, an_hien: 1},
    { id:9, ten_loai:"Masstel", thu_tu:8 , an_hien: 1},
    { id: 10, ten_loai:"LG", thu_tu:9, an_hien: 1},
    { id: 11, ten_loai:"CHUWI", thu_tu: 10, an_hien: 1},
    { id: 12, ten_loai:"itel", thu_tu:11, an_hien: 1}
];
let san_pham_arr:TSanPham[] = [
    {id:1, ten_sp: "itel ROG Strix N4020" , slug: "itel-rog-strix-n4020-1", gia:29102367, gia_km:24189374,id_loai:12, ngay: "2024-05-28" ,so_luong:9,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:0,luot_xem:895,an_hien:1,tinh_chat:0},
    {id:2, ten_sp: "itel Gaming G15 X 8259U" , slug: "itel-gaming-g15-x-8259u-2", gia:17755511, gia_km:16593213,id_loai:12, ngay: "2024-12-04" ,so_luong:94,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:0,luot_xem:747,an_hien:1,tinh_chat:0},
    {id:3, ten_sp: "HP ABLE 1S N4020" , slug: "hp-able-1s-n4020-3", gia:24388442, gia_km:22360233,id_loai:5, ngay: "2023-06-09" ,so_luong:66,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:0,luot_xem:366,an_hien:1,tinh_chat:0},
    {id:4, ten_sp: "Apple Pro 9 G15 G513IH" , slug: "apple-pro-9-g15-g513ih-4", gia:16248393, gia_km:14324910,id_loai:7, ngay: "2023-07-27" ,so_luong:11,hinh:"https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg" , hot:0,luot_xem:494,an_hien:1,tinh_chat:0},
    {id:5, ten_sp: "Surface ROG Strix AN515 45 R6EV" , slug: "surface-rog-strix-an515-45-r6ev-5", gia:29227760, gia_km:27640850,id_loai:8, ngay: "2024-04-10" ,so_luong:0,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:0,luot_xem:370,an_hien:1,tinh_chat:0},
    {id:6, ten_sp: "Acer Spirit G15 G513IH" , slug: "acer-spirit-g15-g513ih-6", gia:29133670, gia_km:26053661,id_loai:2, ngay: "2023-03-17" ,so_luong:86,hinh:"https://cdn.tgdd.vn/Products/Images/44/302951/masstel-e140-n4120-glr-2.jpg" , hot:1,luot_xem:90,an_hien:1,tinh_chat:0},
    {id:7, ten_sp: "Apple ABLE N4020" , slug: "apple-able-n4020-7", gia:18335813, gia_km:14687046,id_loai:7, ngay: "2024-12-26" ,so_luong:96,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:0,luot_xem:651,an_hien:1,tinh_chat:2},
    {id:8, ten_sp: "MSI Vivobook 15IHU6" , slug: "msi-vivobook-15ihu6-8", gia:15545820, gia_km:10785218,id_loai:4, ngay: "2023-11-07" ,so_luong:49,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:0,luot_xem:184,an_hien:1,tinh_chat:2},
    {id:9, ten_sp: "LG Nitro 5 Gaming 1155G7" , slug: "lg-nitro-5-gaming-1155g7-9", gia:17903055, gia_km:14756606,id_loai:10, ngay: "2023-02-27" ,so_luong:79,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:690,an_hien:1,tinh_chat:2},
    {id:10, ten_sp: "Asus Gaming ROG Strix 15IHU6" , slug: "asus-gaming-rog-strix-15ihu6-10", gia:22691377, gia_km:21100122,id_loai:1, ngay: "2023-12-05" ,so_luong:28,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:0,luot_xem:483,an_hien:0,tinh_chat:0},
    {id:11, ten_sp: "Masstel MacBook Pro X 8259U" , slug: "masstel-macbook-pro-x-8259u-11", gia:18837419, gia_km:16963635,id_loai:9, ngay: "2023-12-18" ,so_luong:28,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:1,luot_xem:408,an_hien:1,tinh_chat:0},
    {id:12, ten_sp: "Apple Gaming GF63 Thin 1155G7" , slug: "apple-gaming-gf63-thin-1155g7-12", gia:24144414, gia_km:21576741,id_loai:7, ngay: "2024-08-02" ,so_luong:3,hinh:"https://cdn.tgdd.vn/Products/Images/44/302951/masstel-e140-n4120-glr-2.jpg" , hot:1,luot_xem:62,an_hien:1,tinh_chat:0},
    {id:13, ten_sp: "Lenovo Ideapad Gaming 3 G15 G513IH" , slug: "lenovo-ideapad-gaming-3-g15-g513ih-13", gia:19142556, gia_km:14358666,id_loai:3, ngay: "2023-05-13" ,so_luong:31,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:0,luot_xem:462,an_hien:0,tinh_chat:2},
    {id:14, ten_sp: "Masstel Zenbook fa0111TX i5" , slug: "masstel-zenbook-fa0111tx-i5-14", gia:27088789, gia_km:25224486,id_loai:9, ngay: "2023-10-02" ,so_luong:41,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:1,luot_xem:338,an_hien:1,tinh_chat:0},
    {id:15, ten_sp: "itel Ideapad Gaming 3 N4020" , slug: "itel-ideapad-gaming-3-n4020-15", gia:17792546, gia_km:13477171,id_loai:12, ngay: "2023-07-17" ,so_luong:14,hinh:"https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg" , hot:0,luot_xem:58,an_hien:0,tinh_chat:2},
    {id:16, ten_sp: "Apple MacBook Pro G15 G513IH" , slug: "apple-macbook-pro-g15-g513ih-16", gia:14347282, gia_km:11031555,id_loai:7, ngay: "2024-09-25" ,so_luong:63,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:0,luot_xem:741,an_hien:1,tinh_chat:2},
    {id:17, ten_sp: "Lenovo Pavilion G15 G513IH" , slug: "lenovo-pavilion-g15-g513ih-17", gia:18729538, gia_km:14572381,id_loai:3, ngay: "2024-10-26" ,so_luong:11,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:0,luot_xem:851,an_hien:0,tinh_chat:2},
    {id:18, ten_sp: "Asus E116 15IHU6" , slug: "asus-e116-15ihu6-18", gia:16358337, gia_km:14546724,id_loai:1, ngay: "2024-08-23" ,so_luong:22,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:1,luot_xem:64,an_hien:0,tinh_chat:0},
    {id:19, ten_sp: "decade" , slug: "decade-19", gia:5209111, gia_km:1038102,id_loai:7, ngay: "2024-03-10" ,so_luong:18,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:1,luot_xem:761,an_hien:1,tinh_chat:2},
    {id:20, ten_sp: "Dell Ideapad Gaming 3 5511 11400H" , slug: "dell-ideapad-gaming-3-5511-11400h-20", gia:20768229, gia_km:19031873,id_loai:6, ngay: "2023-01-09" ,so_luong:0,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:0,luot_xem:685,an_hien:1,tinh_chat:0},
    {id:21, ten_sp: "Masstel ROG Strix 15 X1502ZA i5" , slug: "masstel-rog-strix-15-x1502za-i5-21", gia:26526674, gia_km:25046256,id_loai:9, ngay: "2024-05-21" ,so_luong:75,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:0,luot_xem:262,an_hien:1,tinh_chat:0},
    {id:22, ten_sp: "itel Ideapad Gaming 3 1155G7" , slug: "itel-ideapad-gaming-3-1155g7-22", gia:27266350, gia_km:22516735,id_loai:12, ngay: "2023-01-21" ,so_luong:64,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:0,luot_xem:111,an_hien:0,tinh_chat:2},
    {id:23, ten_sp: "itel MacBook Pro 5511 11400H" , slug: "itel-macbook-pro-5511-11400h-23", gia:27670469, gia_km:22691915,id_loai:12, ngay: "2024-03-06" ,so_luong:88,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:10,an_hien:1,tinh_chat:2},
    {id:24, ten_sp: "Acer MacBook Pro 11SC" , slug: "acer-macbook-pro-11sc-24", gia:28057158, gia_km:26830327,id_loai:2, ngay: "2023-07-23" ,so_luong:48,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:0,luot_xem:105,an_hien:1,tinh_chat:0},
    {id:25, ten_sp: "Acer MacBook Pro 15IHU6" , slug: "acer-macbook-pro-15ihu6-25", gia:25677063, gia_km:23915548,id_loai:2, ngay: "2023-11-22" ,so_luong:15,hinh:"https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg" , hot:1,luot_xem:709,an_hien:1,tinh_chat:0},
    {id:26, ten_sp: "Dell Gaming ROG Strix 1155G7" , slug: "dell-gaming-rog-strix-1155g7-26", gia:19970146, gia_km:17296132,id_loai:6, ngay: "2024-01-10" ,so_luong:87,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:1,luot_xem:512,an_hien:0,tinh_chat:0},
    {id:27, ten_sp: "Masstel ROG Strix N4020" , slug: "masstel-rog-strix-n4020-27", gia:6051105, gia_km:4932449,id_loai:9, ngay: "2024-05-24" ,so_luong:26,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:1,luot_xem:904,an_hien:1,tinh_chat:0},
    {id:28, ten_sp: "CHUWI Gaming GF63 Thin 1S N4020" , slug: "chuwi-gaming-gf63-thin-1s-n4020-28", gia:10237516, gia_km:8484302,id_loai:11, ngay: "2023-11-11" ,so_luong:25,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:0,luot_xem:439,an_hien:1,tinh_chat:0},
    {id:29, ten_sp: "CHUWI Gaming ROG Strix 1255U" , slug: "chuwi-gaming-rog-strix-1255u-29", gia:14284990, gia_km:12706842,id_loai:11, ngay: "2023-08-09" ,so_luong:100,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:1,luot_xem:179,an_hien:0,tinh_chat:0},
    {id:30, ten_sp: "CHUWI Gaming GF63 Thin AN515 45 R6EV" , slug: "chuwi-gaming-gf63-thin-an515-45-r6ev-30", gia:21230607, gia_km:16639310,id_loai:11, ngay: "2023-05-15" ,so_luong:27,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:21,an_hien:0,tinh_chat:2},
    {id:31, ten_sp: "Asus ROG Strix 15 X1502ZA i5" , slug: "asus-rog-strix-15-x1502za-i5-31", gia:15481547, gia_km:12852164,id_loai:1, ngay: "2024-07-27" ,so_luong:1,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:0,luot_xem:226,an_hien:1,tinh_chat:0},
    {id:32, ten_sp: "Surface Gaming G15 G15 G513IH" , slug: "surface-gaming-g15-g15-g513ih-32", gia:8281595, gia_km:3287392,id_loai:8, ngay: "2023-02-04" ,so_luong:14,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:1,luot_xem:458,an_hien:1,tinh_chat:2},
    {id:33, ten_sp: "Masstel Gaming G15 G15 G513IH" , slug: "masstel-gaming-g15-g15-g513ih-33", gia:14208971, gia_km:9239998,id_loai:9, ngay: "2024-08-08" ,so_luong:93,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:1,luot_xem:617,an_hien:1,tinh_chat:2},
    {id:34, ten_sp: "Apple Gaming GF63 Thin AN515 45 R6EV" , slug: "apple-gaming-gf63-thin-an515-45-r6ev-34", gia:15121950, gia_km:11332461,id_loai:7, ngay: "2024-05-26" ,so_luong:23,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:0,luot_xem:360,an_hien:1,tinh_chat:2},
    {id:35, ten_sp: "Surface gram 2023 1S N4020" , slug: "surface-gram-2023-1s-n4020-35", gia:8188725, gia_km:6976457,id_loai:8, ngay: "2023-05-18" ,so_luong:65,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:1,luot_xem:473,an_hien:1,tinh_chat:0},
    {id:36, ten_sp: "Asus E116 14 OLED UX3402ZA" , slug: "asus-e116-14-oled-ux3402za-36", gia:7315656, gia_km:2363246,id_loai:1, ngay: "2023-05-17" ,so_luong:13,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:402,an_hien:1,tinh_chat:2},
    {id:37, ten_sp: "Dell Gaming GF63 Thin 15 X1502ZA i5" , slug: "dell-gaming-gf63-thin-15-x1502za-i5-37", gia:29518030, gia_km:28321248,id_loai:6, ngay: "2023-06-19" ,so_luong:74,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:1,luot_xem:644,an_hien:0,tinh_chat:0},
    {id:38, ten_sp: "itel Vivobook G15 G513IH" , slug: "itel-vivobook-g15-g513ih-38", gia:25504080, gia_km:24185754,id_loai:12, ngay: "2024-04-15" ,so_luong:91,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:0,luot_xem:369,an_hien:1,tinh_chat:0},
    {id:39, ten_sp: "MSI ROG Strix 1S N4020" , slug: "msi-rog-strix-1s-n4020-39", gia:22976248, gia_km:21424650,id_loai:4, ngay: "2023-11-08" ,so_luong:44,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:0,luot_xem:178,an_hien:1,tinh_chat:0},
    {id:40, ten_sp: "Dell E140 X 8259U" , slug: "dell-e140-x-8259u-40", gia:5634484, gia_km:1423002,id_loai:6, ngay: "2024-01-27" ,so_luong:91,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:1,luot_xem:167,an_hien:1,tinh_chat:2},
    {id:41, ten_sp: "Lenovo Nitro 5 Gaming 15 X1502ZA i5" , slug: "lenovo-nitro-5-gaming-15-x1502za-i5-41", gia:25594705, gia_km:21024992,id_loai:3, ngay: "2024-02-12" ,so_luong:73,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:1,luot_xem:399,an_hien:1,tinh_chat:2},
    {id:42, ten_sp: "Acer ABLE N4120" , slug: "acer-able-n4120-42", gia:18860032, gia_km:16551857,id_loai:2, ngay: "2024-09-23" ,so_luong:23,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:871,an_hien:1,tinh_chat:0},
    {id:43, ten_sp: "Masstel Ideapad Gaming 3 G15 G513IH" , slug: "masstel-ideapad-gaming-3-g15-g513ih-43", gia:15056603, gia_km:10245470,id_loai:9, ngay: "2023-07-20" ,so_luong:78,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:441,an_hien:1,tinh_chat:2},
    {id:44, ten_sp: "Surface MacBook Pro X 8259U" , slug: "surface-macbook-pro-x-8259u-44", gia:19428065, gia_km:16890995,id_loai:8, ngay: "2023-11-12" ,so_luong:77,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:1,luot_xem:285,an_hien:1,tinh_chat:0},
    {id:45, ten_sp: "Apple E140 N4020" , slug: "apple-e140-n4020-45", gia:9164000, gia_km:7045515,id_loai:7, ngay: "2023-07-28" ,so_luong:68,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:336,an_hien:1,tinh_chat:0},
    {id:46, ten_sp: "Masstel Gaming G15 15 eg2082TU" , slug: "masstel-gaming-g15-15-eg2082tu-46", gia:14685307, gia_km:12504683,id_loai:9, ngay: "2023-10-20" ,so_luong:0,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:723,an_hien:1,tinh_chat:0},
    {id:47, ten_sp: "CHUWI Gaming G15 1155G7" , slug: "chuwi-gaming-g15-1155g7-47", gia:24978052, gia_km:20381216,id_loai:11, ngay: "2024-07-25" ,so_luong:33,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:1,luot_xem:153,an_hien:1,tinh_chat:2},
    {id:48, ten_sp: "HP LarkBook G15 G513IH" , slug: "hp-larkbook-g15-g513ih-48", gia:12681861, gia_km:9704915,id_loai:5, ngay: "2024-09-13" ,so_luong:22,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:1,luot_xem:200,an_hien:0,tinh_chat:0},
    {id:49, ten_sp: "MSI CoreBook G15 G513IH" , slug: "msi-corebook-g15-g513ih-49", gia:17174953, gia_km:13700778,id_loai:4, ngay: "2023-02-26" ,so_luong:67,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:0,luot_xem:68,an_hien:1,tinh_chat:2},
    {id:50, ten_sp: "Asus Zenbook 1155G7" , slug: "asus-zenbook-1155g7-50", gia:7237603, gia_km:4443040,id_loai:1, ngay: "2024-07-02" ,so_luong:20,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:1,luot_xem:65,an_hien:1,tinh_chat:0},
    {id:51, ten_sp: "Apple Spirit AN515 45 R6EV" , slug: "apple-spirit-an515-45-r6ev-51", gia:17835644, gia_km:14558990,id_loai:7, ngay: "2023-07-17" ,so_luong:19,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:232,an_hien:0,tinh_chat:2},
    {id:52, ten_sp: "Asus Nitro 5 Gaming G15 G513IH" , slug: "asus-nitro-5-gaming-g15-g513ih-52", gia:25299224, gia_km:23511659,id_loai:1, ngay: "2023-05-15" ,so_luong:22,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:223,an_hien:1,tinh_chat:0},
    {id:53, ten_sp: "LG E116 X N5100" , slug: "lg-e116-x-n5100-53", gia:21672653, gia_km:17549517,id_loai:10, ngay: "2024-12-27" ,so_luong:84,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:1,luot_xem:667,an_hien:1,tinh_chat:2},
    {id:54, ten_sp: "Apple Spirit N4120" , slug: "apple-spirit-n4120-54", gia:24112089, gia_km:20561773,id_loai:7, ngay: "2024-09-14" ,so_luong:31,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:0,luot_xem:675,an_hien:0,tinh_chat:2},
    {id:55, ten_sp: "Surface E140 11SC" , slug: "surface-e140-11sc-55", gia:9553446, gia_km:6826140,id_loai:8, ngay: "2023-04-17" ,so_luong:12,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:1,luot_xem:948,an_hien:1,tinh_chat:0},
    {id:56, ten_sp: "Apple gram 2023 Gaming VICTUS" , slug: "apple-gram-2023-gaming-victus-56", gia:17414390, gia_km:14270947,id_loai:7, ngay: "2024-09-22" ,so_luong:62,hinh:"https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg" , hot:1,luot_xem:845,an_hien:1,tinh_chat:2},
    {id:57, ten_sp: "HP Pavilion 15IHU6" , slug: "hp-pavilion-15ihu6-57", gia:16454635, gia_km:14061795,id_loai:5, ngay: "2023-04-05" ,so_luong:88,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:0,luot_xem:348,an_hien:1,tinh_chat:0},
    {id:58, ten_sp: "HP Nitro 5 Gaming 1255U" , slug: "hp-nitro-5-gaming-1255u-58", gia:7247469, gia_km:5122829,id_loai:5, ngay: "2024-10-04" ,so_luong:88,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:1,luot_xem:307,an_hien:0,tinh_chat:0},
    {id:59, ten_sp: "LG E140 G15 G513IH" , slug: "lg-e140-g15-g513ih-59", gia:25269508, gia_km:22502511,id_loai:10, ngay: "2024-11-16" ,so_luong:59,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:0,luot_xem:367,an_hien:1,tinh_chat:0},
    {id:60, ten_sp: "CHUWI LarkBook M2 2022" , slug: "chuwi-larkbook-m2-2022-60", gia:10164695, gia_km:6859502,id_loai:11, ngay: "2024-10-20" ,so_luong:68,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:355,an_hien:1,tinh_chat:2},
    {id:61, ten_sp: "HP Vivobook 1255U" , slug: "hp-vivobook-1255u-61", gia:11480157, gia_km:8437157,id_loai:5, ngay: "2024-07-17" ,so_luong:17,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:640,an_hien:1,tinh_chat:2},
    {id:62, ten_sp: "Surface Gaming GF63 Thin N4120" , slug: "surface-gaming-gf63-thin-n4120-62", gia:17334403, gia_km:15875419,id_loai:8, ngay: "2023-12-12" ,so_luong:87,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:1,luot_xem:141,an_hien:0,tinh_chat:0},
    {id:63, ten_sp: "CHUWI E116 15 X1502ZA i5" , slug: "chuwi-e116-15-x1502za-i5-63", gia:5894380, gia_km:1170402,id_loai:11, ngay: "2023-12-25" ,so_luong:19,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:194,an_hien:0,tinh_chat:2},
    {id:64, ten_sp: "itel Vivobook Gaming VICTUS" , slug: "itel-vivobook-gaming-victus-64", gia:10423093, gia_km:6488719,id_loai:12, ngay: "2024-09-15" ,so_luong:50,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:955,an_hien:1,tinh_chat:2},
    {id:65, ten_sp: "itel Pro 9 1155G7" , slug: "itel-pro-9-1155g7-65", gia:10920288, gia_km:6365186,id_loai:12, ngay: "2023-09-07" ,so_luong:75,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:0,luot_xem:97,an_hien:1,tinh_chat:2},
    {id:66, ten_sp: "CHUWI Vivobook Gaming VICTUS" , slug: "chuwi-vivobook-gaming-victus-66", gia:12586792, gia_km:11157390,id_loai:11, ngay: "2023-02-13" ,so_luong:39,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:329,an_hien:1,tinh_chat:0},
    {id:67, ten_sp: "Surface Spirit 15 X1502ZA i5" , slug: "surface-spirit-15-x1502za-i5-67", gia:6204824, gia_km:2161039,id_loai:8, ngay: "2024-04-03" ,so_luong:57,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:1,luot_xem:633,an_hien:1,tinh_chat:2},
    {id:68, ten_sp: "Lenovo ROG Strix G15 G513IH" , slug: "lenovo-rog-strix-g15-g513ih-68", gia:12084732, gia_km:10131738,id_loai:3, ngay: "2023-03-08" ,so_luong:71,hinh:"https://cdn.tgdd.vn/Products/Images/44/302951/masstel-e140-n4120-glr-2.jpg" , hot:1,luot_xem:564,an_hien:1,tinh_chat:0},
    {id:69, ten_sp: "Apple LarkBook Gaming VICTUS" , slug: "apple-larkbook-gaming-victus-69", gia:12973080, gia_km:10230991,id_loai:7, ngay: "2023-01-04" ,so_luong:63,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:592,an_hien:0,tinh_chat:0},
    {id:70, ten_sp: "itel gram 2023 11SC" , slug: "itel-gram-2023-11sc-70", gia:26419248, gia_km:25205532,id_loai:12, ngay: "2023-11-12" ,so_luong:92,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:1,luot_xem:61,an_hien:1,tinh_chat:0},
    {id:71, ten_sp: "MSI Spirit X N5100" , slug: "msi-spirit-x-n5100-71", gia:25503864, gia_km:21684785,id_loai:4, ngay: "2023-11-28" ,so_luong:9,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:861,an_hien:0,tinh_chat:2},
    {id:72, ten_sp: "Lenovo gram 2023 1155G7" , slug: "lenovo-gram-2023-1155g7-72", gia:7404283, gia_km:4727539,id_loai:3, ngay: "2024-06-21" ,so_luong:90,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:0,luot_xem:753,an_hien:1,tinh_chat:0},
    {id:73, ten_sp: "Lenovo LarkBook 1155G7" , slug: "lenovo-larkbook-1155g7-73", gia:24160918, gia_km:21875526,id_loai:3, ngay: "2023-10-08" ,so_luong:85,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:720,an_hien:1,tinh_chat:0},
    {id:74, ten_sp: "itel gram 2023 1S N4020" , slug: "itel-gram-2023-1s-n4020-74", gia:23257194, gia_km:21232984,id_loai:12, ngay: "2023-12-26" ,so_luong:58,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:0,luot_xem:214,an_hien:1,tinh_chat:0},
    {id:75, ten_sp: "Surface Gaming G15 AN515 45 R6EV" , slug: "surface-gaming-g15-an515-45-r6ev-75", gia:10434378, gia_km:9033006,id_loai:8, ngay: "2023-09-15" ,so_luong:75,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:305,an_hien:1,tinh_chat:0},
    {id:76, ten_sp: "Surface LarkBook 1255U" , slug: "surface-larkbook-1255u-76", gia:16622884, gia_km:13852487,id_loai:8, ngay: "2024-08-06" ,so_luong:58,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:0,luot_xem:25,an_hien:1,tinh_chat:0},
    {id:77, ten_sp: "MSI ROG Strix 15 eg2082TU" , slug: "msi-rog-strix-15-eg2082tu-77", gia:7041386, gia_km:2820994,id_loai:4, ngay: "2023-04-14" ,so_luong:21,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:0,luot_xem:644,an_hien:1,tinh_chat:2},
    {id:78, ten_sp: "Acer Gaming ROG Strix N4020" , slug: "acer-gaming-rog-strix-n4020-78", gia:19683282, gia_km:15123657,id_loai:2, ngay: "2023-01-11" ,so_luong:56,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:0,luot_xem:196,an_hien:1,tinh_chat:2},
    {id:79, ten_sp: "Lenovo Ideapad Gaming 3 1155G7" , slug: "lenovo-ideapad-gaming-3-1155g7-79", gia:26969756, gia_km:25383221,id_loai:3, ngay: "2024-11-26" ,so_luong:97,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:0,luot_xem:784,an_hien:1,tinh_chat:0},
    {id:80, ten_sp: "itel CoreBook fa0111TX i5" , slug: "itel-corebook-fa0111tx-i5-80", gia:29415430, gia_km:26292790,id_loai:12, ngay: "2023-05-08" ,so_luong:13,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:1,luot_xem:732,an_hien:1,tinh_chat:0},
    {id:81, ten_sp: "LG Vivobook 15 X1502ZA i5" , slug: "lg-vivobook-15-x1502za-i5-81", gia:17862685, gia_km:14045375,id_loai:10, ngay: "2023-03-22" ,so_luong:10,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:1,luot_xem:571,an_hien:1,tinh_chat:2},
    {id:82, ten_sp: "Acer gram 2023 1360P" , slug: "acer-gram-2023-1360p-82", gia:9995252, gia_km:5019747,id_loai:2, ngay: "2023-09-26" ,so_luong:0,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:661,an_hien:1,tinh_chat:2},
    {id:83, ten_sp: "MSI Vivobook 1155G7" , slug: "msi-vivobook-1155g7-83", gia:27350901, gia_km:25004273,id_loai:4, ngay: "2023-09-22" ,so_luong:87,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:636,an_hien:0,tinh_chat:0},
    {id:84, ten_sp: "Surface E116 1255U" , slug: "surface-e116-1255u-84", gia:7293995, gia_km:3333841,id_loai:8, ngay: "2024-05-27" ,so_luong:73,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:0,luot_xem:736,an_hien:0,tinh_chat:2},
    {id:85, ten_sp: "LG LarkBook AN515 45 R6EV" , slug: "lg-larkbook-an515-45-r6ev-85", gia:22030276, gia_km:20832702,id_loai:10, ngay: "2023-06-22" ,so_luong:31,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:1,luot_xem:515,an_hien:1,tinh_chat:0},
    {id:86, ten_sp: "Dell Vivobook 1360P" , slug: "dell-vivobook-1360p-86", gia:25462947, gia_km:23792720,id_loai:6, ngay: "2023-11-06" ,so_luong:8,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:0,luot_xem:758,an_hien:1,tinh_chat:0},
    {id:87, ten_sp: "CHUWI Gaming G15 N4120" , slug: "chuwi-gaming-g15-n4120-87", gia:29599893, gia_km:28448824,id_loai:11, ngay: "2023-10-15" ,so_luong:47,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:1,luot_xem:738,an_hien:1,tinh_chat:0},
    {id:88, ten_sp: "itel gram 2023 fa0111TX i5" , slug: "itel-gram-2023-fa0111tx-i5-88", gia:21301262, gia_km:19995501,id_loai:12, ngay: "2024-05-12" ,so_luong:46,hinh:"https://cdn.tgdd.vn/Products/Images/44/302951/masstel-e140-n4120-glr-2.jpg" , hot:1,luot_xem:255,an_hien:0,tinh_chat:0},
    {id:89, ten_sp: "Apple ABLE 1360P" , slug: "apple-able-1360p-89", gia:7284846, gia_km:5172975,id_loai:7, ngay: "2023-06-15" ,so_luong:26,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:1,luot_xem:133,an_hien:1,tinh_chat:0},
    {id:90, ten_sp: "MSI Nitro 5 Gaming 15 eg2082TU" , slug: "msi-nitro-5-gaming-15-eg2082tu-90", gia:25810868, gia_km:23508601,id_loai:4, ngay: "2024-01-11" ,so_luong:1,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:0,luot_xem:961,an_hien:1,tinh_chat:0},
    {id:91, ten_sp: "CHUWI E140 1360P" , slug: "chuwi-e140-1360p-91", gia:27126567, gia_km:24822098,id_loai:11, ngay: "2024-12-17" ,so_luong:10,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:0,luot_xem:210,an_hien:1,tinh_chat:0},
    {id:92, ten_sp: "Surface Gaming G15 11SC" , slug: "surface-gaming-g15-11sc-92", gia:19343882, gia_km:15940354,id_loai:8, ngay: "2023-02-28" ,so_luong:61,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:1,luot_xem:591,an_hien:1,tinh_chat:2},
    {id:93, ten_sp: "LG Vivobook 1155G7" , slug: "lg-vivobook-1155g7-93", gia:24249481, gia_km:23139368,id_loai:10, ngay: "2023-01-22" ,so_luong:93,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:0,luot_xem:741,an_hien:1,tinh_chat:0},
    {id:94, ten_sp: "MSI MacBook Pro 15 eg2082TU" , slug: "msi-macbook-pro-15-eg2082tu-94", gia:5743929, gia_km:851358,id_loai:4, ngay: "2024-01-10" ,so_luong:56,hinh:"https://cdn.tgdd.vn/Products/Images/44/302951/masstel-e140-n4120-glr-2.jpg" , hot:1,luot_xem:424,an_hien:1,tinh_chat:2},
    {id:95, ten_sp: "itel Pro 9 N4020" , slug: "itel-pro-9-n4020-95", gia:24890107, gia_km:23500118,id_loai:12, ngay: "2024-04-06" ,so_luong:50,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:696,an_hien:1,tinh_chat:0},
    {id:96, ten_sp: "Masstel Nitro 5 Gaming 1360P" , slug: "masstel-nitro-5-gaming-1360p-96", gia:29451577, gia_km:27770326,id_loai:9, ngay: "2023-10-05" ,so_luong:90,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:455,an_hien:1,tinh_chat:0},
    {id:97, ten_sp: "Acer Spirit 14 OLED UX3402ZA" , slug: "acer-spirit-14-oled-ux3402za-97", gia:26589604, gia_km:23116997,id_loai:2, ngay: "2024-02-09" ,so_luong:69,hinh:"https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg" , hot:1,luot_xem:52,an_hien:1,tinh_chat:2},
    {id:98, ten_sp: "CHUWI E140 X 8259U" , slug: "chuwi-e140-x-8259u-98", gia:20847461, gia_km:18269862,id_loai:11, ngay: "2023-03-19" ,so_luong:86,hinh:"https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg" , hot:0,luot_xem:618,an_hien:1,tinh_chat:0},
    {id:99, ten_sp: "Asus Pro 9 1360P" , slug: "asus-pro-9-1360p-99", gia:18081490, gia_km:13884163,id_loai:1, ngay: "2024-04-05" ,so_luong:3,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:639,an_hien:1,tinh_chat:2},
    {id:100, ten_sp: "itel Zenbook 15 eg2082TU" , slug: "itel-zenbook-15-eg2082tu-100", gia:16179548, gia_km:11826221,id_loai:12, ngay: "2024-10-03" ,so_luong:13,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:0,luot_xem:603,an_hien:0,tinh_chat:2},
    {id:101, ten_sp: "Lenovo Gaming GF63 Thin 1155G7" , slug: "lenovo-gaming-gf63-thin-1155g7-101", gia:21126986, gia_km:19198568,id_loai:3, ngay: "2024-10-10" ,so_luong:17,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:1,luot_xem:847,an_hien:1,tinh_chat:0},
    {id:102, ten_sp: "MSI MacBook Pro 15IHU6" , slug: "msi-macbook-pro-15ihu6-102", gia:17923747, gia_km:16826158,id_loai:4, ngay: "2023-02-06" ,so_luong:13,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:418,an_hien:1,tinh_chat:0},
    {id:103, ten_sp: "HP Vivobook N4120" , slug: "hp-vivobook-n4120-103", gia:17828213, gia_km:16680329,id_loai:5, ngay: "2023-12-08" ,so_luong:69,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:0,luot_xem:624,an_hien:1,tinh_chat:0},
    {id:104, ten_sp: "Dell Pro 9 fa0111TX i5" , slug: "dell-pro-9-fa0111tx-i5-104", gia:22344038, gia_km:19117994,id_loai:6, ngay: "2023-04-16" ,so_luong:62,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:0,luot_xem:710,an_hien:1,tinh_chat:2},
    {id:105, ten_sp: "Acer E140 1255U" , slug: "acer-e140-1255u-105", gia:5202033, gia_km:3638705,id_loai:2, ngay: "2024-05-13" ,so_luong:51,hinh:"https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg" , hot:1,luot_xem:593,an_hien:1,tinh_chat:1},
    {id:106, ten_sp: "LG Gaming ROG Strix 11SC" , slug: "lg-gaming-rog-strix-11sc-106", gia:16599490, gia_km:14421370,id_loai:10, ngay: "2023-01-08" ,so_luong:29,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:1,luot_xem:946,an_hien:1,tinh_chat:0},
    {id:107, ten_sp: "Lenovo Vivobook 5511 11400H" , slug: "lenovo-vivobook-5511-11400h-107", gia:26976858, gia_km:25495561,id_loai:3, ngay: "2023-08-14" ,so_luong:6,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:1,luot_xem:399,an_hien:1,tinh_chat:0},
    {id:108, ten_sp: "Surface Gaming ROG Strix X N5100" , slug: "surface-gaming-rog-strix-x-n5100-108", gia:5482803, gia_km:3544717,id_loai:8, ngay: "2024-07-10" ,so_luong:23,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:1,luot_xem:145,an_hien:1,tinh_chat:1},
    {id:109, ten_sp: "Asus Pro 9 AN515 45 R6EV" , slug: "asus-pro-9-an515-45-r6ev-109", gia:14824503, gia_km:12251495,id_loai:1, ngay: "2023-06-05" ,so_luong:42,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:52,an_hien:1,tinh_chat:0},
    {id:110, ten_sp: "Surface E140 G15 G513IH" , slug: "surface-e140-g15-g513ih-110", gia:9457382, gia_km:4578073,id_loai:8, ngay: "2023-10-23" ,so_luong:41,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:1,luot_xem:314,an_hien:1,tinh_chat:2},
    {id:111, ten_sp: "Asus Vivobook 5511 11400H" , slug: "asus-vivobook-5511-11400h-111", gia:5207678, gia_km:3518900,id_loai:1, ngay: "2023-02-01" ,so_luong:52,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:0,luot_xem:600,an_hien:1,tinh_chat:1},
    {id:112, ten_sp: "CHUWI Gaming G15 N4020" , slug: "chuwi-gaming-g15-n4020-112", gia:19095777, gia_km:14248869,id_loai:11, ngay: "2023-03-02" ,so_luong:9,hinh:"https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg" , hot:0,luot_xem:621,an_hien:1,tinh_chat:2},
    {id:113, ten_sp: "Asus Vivobook 15 X1502ZA i5" , slug: "asus-vivobook-15-x1502za-i5-113", gia:10851291, gia_km:7209019,id_loai:1, ngay: "2023-04-25" ,so_luong:66,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:70,an_hien:1,tinh_chat:2},
    {id:114, ten_sp: "LG Gaming ROG Strix 1255U" , slug: "lg-gaming-rog-strix-1255u-114", gia:20266666, gia_km:18119576,id_loai:10, ngay: "2023-11-14" ,so_luong:13,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:380,an_hien:1,tinh_chat:0},
    {id:115, ten_sp: "Dell Ideapad Gaming 3 N4020" , slug: "dell-ideapad-gaming-3-n4020-115", gia:25290310, gia_km:23787622,id_loai:6, ngay: "2024-04-05" ,so_luong:37,hinh:"https://cdn.tgdd.vn/Products/Images/44/302951/masstel-e140-n4120-glr-2.jpg" , hot:0,luot_xem:559,an_hien:1,tinh_chat:0},
    {id:116, ten_sp: "Dell Spirit 14 OLED UX3402ZA" , slug: "dell-spirit-14-oled-ux3402za-116", gia:23778454, gia_km:20682416,id_loai:6, ngay: "2023-06-04" ,so_luong:26,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:315,an_hien:0,tinh_chat:2},
    {id:117, ten_sp: "Dell Ideapad Gaming 3 AN515 45 R6EV" , slug: "dell-ideapad-gaming-3-an515-45-r6ev-117", gia:17106910, gia_km:14719720,id_loai:6, ngay: "2024-07-16" ,so_luong:60,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:0,luot_xem:648,an_hien:1,tinh_chat:0},
    {id:118, ten_sp: "itel Zenbook 1360P" , slug: "itel-zenbook-1360p-118", gia:12540836, gia_km:9262507,id_loai:12, ngay: "2024-07-01" ,so_luong:69,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:272,an_hien:1,tinh_chat:2},
    {id:119, ten_sp: "Apple ROG Strix X N5100" , slug: "apple-rog-strix-x-n5100-119", gia:11441537, gia_km:8039604,id_loai:7, ngay: "2024-01-07" ,so_luong:55,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:1,luot_xem:946,an_hien:1,tinh_chat:2},
    {id:120, ten_sp: "HP Spirit 14 OLED UX3402ZA" , slug: "hp-spirit-14-oled-ux3402za-120", gia:11524678, gia_km:7420019,id_loai:5, ngay: "2024-04-27" ,so_luong:41,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:712,an_hien:1,tinh_chat:2},
    {id:121, ten_sp: "Surface Spirit G15 G513IH" , slug: "surface-spirit-g15-g513ih-121", gia:7288122, gia_km:3847855,id_loai:8, ngay: "2024-01-24" ,so_luong:6,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:0,luot_xem:752,an_hien:1,tinh_chat:2},
    {id:122, ten_sp: "Acer Pro 9 14 OLED UX3402ZA" , slug: "acer-pro-9-14-oled-ux3402za-122", gia:17188775, gia_km:13050569,id_loai:2, ngay: "2023-06-22" ,so_luong:23,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:822,an_hien:0,tinh_chat:2},
    {id:123, ten_sp: "CHUWI LarkBook N4020" , slug: "chuwi-larkbook-n4020-123", gia:25797422, gia_km:22392282,id_loai:11, ngay: "2024-12-15" ,so_luong:52,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:1,luot_xem:762,an_hien:1,tinh_chat:2},
    {id:124, ten_sp: "MSI LarkBook M2 2022" , slug: "msi-larkbook-m2-2022-124", gia:18763833, gia_km:16982713,id_loai:4, ngay: "2023-08-03" ,so_luong:90,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:1,luot_xem:959,an_hien:1,tinh_chat:0},
    {id:125, ten_sp: "Masstel LarkBook 11SC" , slug: "masstel-larkbook-11sc-125", gia:28256974, gia_km:26794710,id_loai:9, ngay: "2024-02-19" ,so_luong:77,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:1,luot_xem:268,an_hien:1,tinh_chat:0},
    {id:126, ten_sp: "CHUWI E116 N4020" , slug: "chuwi-e116-n4020-126", gia:18378822, gia_km:16638050,id_loai:11, ngay: "2023-12-28" ,so_luong:68,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:0,luot_xem:299,an_hien:1,tinh_chat:0},
    {id:127, ten_sp: "Surface MacBook Pro N4020" , slug: "surface-macbook-pro-n4020-127", gia:10140941, gia_km:6569688,id_loai:8, ngay: "2024-10-14" ,so_luong:100,hinh:"https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg" , hot:0,luot_xem:217,an_hien:1,tinh_chat:2},
    {id:128, ten_sp: "Surface Nitro 5 Gaming AN515 45 R6EV" , slug: "surface-nitro-5-gaming-an515-45-r6ev-128", gia:18477240, gia_km:14030120,id_loai:8, ngay: "2024-08-23" ,so_luong:53,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:1,luot_xem:331,an_hien:1,tinh_chat:2},
    {id:129, ten_sp: "Apple Gaming ROG Strix Gaming VICTUS" , slug: "apple-gaming-rog-strix-gaming-victus-129", gia:8354176, gia_km:7261731,id_loai:7, ngay: "2023-10-10" ,so_luong:35,hinh:"https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg" , hot:1,luot_xem:924,an_hien:1,tinh_chat:0},
    {id:130, ten_sp: "Lenovo Zenbook X N5100" , slug: "lenovo-zenbook-x-n5100-130", gia:14752480, gia_km:11745048,id_loai:3, ngay: "2023-05-27" ,so_luong:9,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:1,luot_xem:296,an_hien:1,tinh_chat:2},
    {id:131, ten_sp: "Dell Vivobook G15 G513IH" , slug: "dell-vivobook-g15-g513ih-131", gia:23047184, gia_km:18054636,id_loai:6, ngay: "2024-01-06" ,so_luong:87,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:1,luot_xem:572,an_hien:1,tinh_chat:2},
    {id:132, ten_sp: "MSI Gaming ROG Strix 15 eg2082TU" , slug: "msi-gaming-rog-strix-15-eg2082tu-132", gia:21561826, gia_km:18229911,id_loai:4, ngay: "2023-02-15" ,so_luong:49,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:1,luot_xem:760,an_hien:0,tinh_chat:2},
    {id:133, ten_sp: "Asus Spirit 1255U" , slug: "asus-spirit-1255u-133", gia:6339033, gia_km:5183035,id_loai:1, ngay: "2024-04-24" ,so_luong:85,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:0,luot_xem:353,an_hien:1,tinh_chat:0},
    {id:134, ten_sp: "CHUWI Gaming G15 X 8259U" , slug: "chuwi-gaming-g15-x-8259u-134", gia:15184455, gia_km:13580495,id_loai:11, ngay: "2023-02-15" ,so_luong:49,hinh:"https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg" , hot:1,luot_xem:209,an_hien:1,tinh_chat:0},
    {id:135, ten_sp: "Surface Zenbook N4120" , slug: "surface-zenbook-n4120-135", gia:21546422, gia_km:20021897,id_loai:8, ngay: "2024-08-27" ,so_luong:59,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:1,luot_xem:459,an_hien:1,tinh_chat:0},
    {id:136, ten_sp: "Masstel gram 2023 1255U" , slug: "masstel-gram-2023-1255u-136", gia:18565262, gia_km:14436756,id_loai:9, ngay: "2023-10-15" ,so_luong:9,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:0,luot_xem:489,an_hien:1,tinh_chat:2},
    {id:137, ten_sp: "itel Ideapad Gaming 3 fa0111TX i5" , slug: "itel-ideapad-gaming-3-fa0111tx-i5-137", gia:11591942, gia_km:8670921,id_loai:12, ngay: "2023-10-20" ,so_luong:40,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:1,luot_xem:969,an_hien:0,tinh_chat:0},
    {id:138, ten_sp: "Dell Pro 9 fa0111TX i5" , slug: "dell-pro-9-fa0111tx-i5-138", gia:17660963, gia_km:12660967,id_loai:6, ngay: "2023-02-23" ,so_luong:100,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:1,luot_xem:297,an_hien:1,tinh_chat:2},
    {id:139, ten_sp: "MSI Gaming GF63 Thin fa0111TX i5" , slug: "msi-gaming-gf63-thin-fa0111tx-i5-139", gia:14322104, gia_km:11138158,id_loai:4, ngay: "2024-10-23" ,so_luong:78,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:1,luot_xem:189,an_hien:1,tinh_chat:2},
    {id:140, ten_sp: "Apple Nitro 5 Gaming 14 OLED UX3402ZA" , slug: "apple-nitro-5-gaming-14-oled-ux3402za-140", gia:8986412, gia_km:6814342,id_loai:7, ngay: "2023-03-19" ,so_luong:64,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:1,luot_xem:468,an_hien:1,tinh_chat:0},
    {id:141, ten_sp: "CHUWI ABLE 15 eg2082TU" , slug: "chuwi-able-15-eg2082tu-141", gia:18928666, gia_km:14995394,id_loai:11, ngay: "2024-04-10" ,so_luong:77,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:1,luot_xem:518,an_hien:1,tinh_chat:2},
    {id:142, ten_sp: "Surface Vivobook G15 G513IH" , slug: "surface-vivobook-g15-g513ih-142", gia:7547859, gia_km:3603294,id_loai:8, ngay: "2023-09-23" ,so_luong:59,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:1,luot_xem:568,an_hien:1,tinh_chat:2},
    {id:143, ten_sp: "Dell gram 2023 N4020" , slug: "dell-gram-2023-n4020-143", gia:23886921, gia_km:22488194,id_loai:6, ngay: "2024-12-13" ,so_luong:0,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:0,luot_xem:106,an_hien:1,tinh_chat:0},
    {id:144, ten_sp: "Lenovo E116 N4120" , slug: "lenovo-e116-n4120-144", gia:29112256, gia_km:24158674,id_loai:3, ngay: "2023-10-18" ,so_luong:91,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:1,luot_xem:767,an_hien:1,tinh_chat:0},
    {id:145, ten_sp: "Apple Vivobook N4120" , slug: "apple-vivobook-n4120-145", gia:7168682, gia_km:3328453,id_loai:7, ngay: "2024-11-15" ,so_luong:25,hinh:"https://cdn.tgdd.vn/Products/Images/44/302951/masstel-e140-n4120-glr-2.jpg" , hot:0,luot_xem:997,an_hien:0,tinh_chat:2},
    {id:146, ten_sp: "Acer Gaming GF63 Thin 1255U" , slug: "acer-gaming-gf63-thin-1255u-146", gia:13669452, gia_km:9685689,id_loai:2, ngay: "2023-07-22" ,so_luong:25,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:496,an_hien:1,tinh_chat:2},
    {id:147, ten_sp: "Surface Pavilion 1S N4020" , slug: "surface-pavilion-1s-n4020-147", gia:21585390, gia_km:17811122,id_loai:8, ngay: "2023-03-23" ,so_luong:71,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:1,luot_xem:650,an_hien:1,tinh_chat:2},
    {id:148, ten_sp: "CHUWI ABLE 1S N4020" , slug: "chuwi-able-1s-n4020-148", gia:15004185, gia_km:13166294,id_loai:11, ngay: "2023-01-24" ,so_luong:14,hinh:"https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg" , hot:0,luot_xem:836,an_hien:1,tinh_chat:0},
    {id:149, ten_sp: "Dell MacBook Pro 15IHU6" , slug: "dell-macbook-pro-15ihu6-149", gia:6800373, gia_km:1997933,id_loai:6, ngay: "2024-10-27" ,so_luong:68,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:0,luot_xem:110,an_hien:1,tinh_chat:2},
    {id:150, ten_sp: "CHUWI Pro 9 15 eg2082TU" , slug: "chuwi-pro-9-15-eg2082tu-150", gia:13297894, gia_km:8475034,id_loai:11, ngay: "2024-01-14" ,so_luong:42,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:824,an_hien:0,tinh_chat:2},
    {id:151, ten_sp: "CHUWI Ideapad Gaming 3 fa0111TX i5" , slug: "chuwi-ideapad-gaming-3-fa0111tx-i5-151", gia:20678083, gia_km:15713793,id_loai:11, ngay: "2024-11-26" ,so_luong:79,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:0,luot_xem:696,an_hien:1,tinh_chat:2},
    {id:152, ten_sp: "HP CoreBook fa0111TX i5" , slug: "hp-corebook-fa0111tx-i5-152", gia:29657262, gia_km:27199312,id_loai:5, ngay: "2024-07-02" ,so_luong:31,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:1,luot_xem:164,an_hien:1,tinh_chat:0},
    {id:153, ten_sp: "Acer ABLE X N5100" , slug: "acer-able-x-n5100-153", gia:25294494, gia_km:23070619,id_loai:2, ngay: "2023-02-08" ,so_luong:17,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:1,luot_xem:945,an_hien:1,tinh_chat:0},
    {id:154, ten_sp: "Dell Gaming ROG Strix 5511 11400H" , slug: "dell-gaming-rog-strix-5511-11400h-154", gia:29128731, gia_km:27815459,id_loai:6, ngay: "2024-02-03" ,so_luong:91,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:1,luot_xem:272,an_hien:1,tinh_chat:0},
    {id:155, ten_sp: "Dell Nitro 5 Gaming 15IHU6" , slug: "dell-nitro-5-gaming-15ihu6-155", gia:26180411, gia_km:23918322,id_loai:6, ngay: "2023-10-17" ,so_luong:1,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:0,luot_xem:213,an_hien:1,tinh_chat:0},
    {id:156, ten_sp: "HP Gaming G15 14 OLED UX3402ZA" , slug: "hp-gaming-g15-14-oled-ux3402za-156", gia:5610467, gia_km:3392078,id_loai:5, ngay: "2023-07-04" ,so_luong:35,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:0,luot_xem:214,an_hien:1,tinh_chat:1},
    {id:157, ten_sp: "Apple Pro 9 N4120" , slug: "apple-pro-9-n4120-157", gia:11467793, gia_km:8203797,id_loai:7, ngay: "2024-09-21" ,so_luong:32,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:1,luot_xem:909,an_hien:0,tinh_chat:2},
    {id:158, ten_sp: "Asus Zenbook 15IHU6" , slug: "asus-zenbook-15ihu6-158", gia:20501503, gia_km:17289343,id_loai:1, ngay: "2024-10-16" ,so_luong:52,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:1,luot_xem:473,an_hien:1,tinh_chat:2},
    {id:159, ten_sp: "LG MacBook Pro G15 G513IH" , slug: "lg-macbook-pro-g15-g513ih-159", gia:5131446, gia_km:790296,id_loai:10, ngay: "2023-03-03" ,so_luong:30,hinh:"https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg" , hot:0,luot_xem:165,an_hien:1,tinh_chat:2},
    {id:160, ten_sp: "itel Pro 9 14 OLED UX3402ZA" , slug: "itel-pro-9-14-oled-ux3402za-160", gia:23832915, gia_km:22310437,id_loai:12, ngay: "2023-11-01" ,so_luong:16,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:1,luot_xem:209,an_hien:1,tinh_chat:0},
    {id:161, ten_sp: "Apple E140 M2 2022" , slug: "apple-e140-m2-2022-161", gia:7394341, gia_km:4599100,id_loai:7, ngay: "2024-06-14" ,so_luong:59,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:666,an_hien:1,tinh_chat:0},
    {id:162, ten_sp: "HP Gaming ROG Strix AN515 45 R6EV" , slug: "hp-gaming-rog-strix-an515-45-r6ev-162", gia:22497653, gia_km:19168541,id_loai:5, ngay: "2024-08-07" ,so_luong:26,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:1,luot_xem:673,an_hien:1,tinh_chat:2},
    {id:163, ten_sp: "Surface LarkBook AN515 45 R6EV" , slug: "surface-larkbook-an515-45-r6ev-163", gia:17318132, gia_km:13978060,id_loai:8, ngay: "2023-04-12" ,so_luong:64,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:1,luot_xem:820,an_hien:1,tinh_chat:2},
    {id:164, ten_sp: "MSI Spirit Gaming VICTUS" , slug: "msi-spirit-gaming-victus-164", gia:5511340, gia_km:4023953,id_loai:4, ngay: "2023-12-25" ,so_luong:20,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:0,luot_xem:533,an_hien:1,tinh_chat:1},
    {id:165, ten_sp: "CHUWI CoreBook M2 2022" , slug: "chuwi-corebook-m2-2022-165", gia:12206250, gia_km:7683927,id_loai:11, ngay: "2024-08-13" ,so_luong:32,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:390,an_hien:1,tinh_chat:2},
    {id:166, ten_sp: "MSI Pavilion fa0111TX i5" , slug: "msi-pavilion-fa0111tx-i5-166", gia:12364749, gia_km:8022340,id_loai:4, ngay: "2023-03-08" ,so_luong:5,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:1,luot_xem:765,an_hien:1,tinh_chat:2},
    {id:167, ten_sp: "Acer LarkBook 1360P" , slug: "acer-larkbook-1360p-167", gia:7108048, gia_km:4170160,id_loai:2, ngay: "2024-02-20" ,so_luong:27,hinh:"https://cdn.tgdd.vn/Products/Images/44/302950/masstel-e116-n4020-glr-1.jpg" , hot:1,luot_xem:594,an_hien:1,tinh_chat:0},
    {id:168, ten_sp: "CHUWI MacBook Pro 15 eg2082TU" , slug: "chuwi-macbook-pro-15-eg2082tu-168", gia:12039864, gia_km:10416415,id_loai:11, ngay: "2024-09-14" ,so_luong:5,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:0,luot_xem:378,an_hien:1,tinh_chat:0},
    {id:169, ten_sp: "Dell E140 Gaming VICTUS" , slug: "dell-e140-gaming-victus-169", gia:5931201, gia_km:3837460,id_loai:6, ngay: "2024-04-09" ,so_luong:81,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:0,luot_xem:697,an_hien:1,tinh_chat:1},
    {id:170, ten_sp: "CHUWI MacBook Pro 1S N4020" , slug: "chuwi-macbook-pro-1s-n4020-170", gia:12184118, gia_km:8581607,id_loai:11, ngay: "2024-12-13" ,so_luong:71,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:0,luot_xem:29,an_hien:1,tinh_chat:2},
    {id:171, ten_sp: "MSI CoreBook 5511 11400H" , slug: "msi-corebook-5511-11400h-171", gia:7420848, gia_km:2632117,id_loai:4, ngay: "2023-12-01" ,so_luong:76,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:909,an_hien:0,tinh_chat:2},
    {id:172, ten_sp: "LG Pro 9 X 8259U" , slug: "lg-pro-9-x-8259u-172", gia:16940656, gia_km:14236055,id_loai:10, ngay: "2024-08-08" ,so_luong:26,hinh:"https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg" , hot:0,luot_xem:561,an_hien:1,tinh_chat:0},
    {id:173, ten_sp: "HP Nitro 5 Gaming 15IHU6" , slug: "hp-nitro-5-gaming-15ihu6-173", gia:5210987, gia_km:1066891,id_loai:5, ngay: "2023-09-06" ,so_luong:99,hinh:"https://cdn.tgdd.vn/Products/Images/44/306795/lg-gram-2023-i7-17z90rgah78a5-1.jpg" , hot:1,luot_xem:792,an_hien:0,tinh_chat:2},
    {id:174, ten_sp: "Lenovo Pro 9 11SC" , slug: "lenovo-pro-9-11sc-174", gia:14056678, gia_km:11382756,id_loai:3, ngay: "2024-06-01" ,so_luong:20,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:0,luot_xem:958,an_hien:1,tinh_chat:0},
    {id:175, ten_sp: "Surface Gaming G15 fa0111TX i5" , slug: "surface-gaming-g15-fa0111tx-i5-175", gia:23574416, gia_km:22124801,id_loai:8, ngay: "2024-03-22" ,so_luong:96,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:0,luot_xem:916,an_hien:1,tinh_chat:0},
    {id:176, ten_sp: "Masstel ABLE AN515 45 R6EV" , slug: "masstel-able-an515-45-r6ev-176", gia:25528087, gia_km:23806696,id_loai:9, ngay: "2023-01-21" ,so_luong:7,hinh:"https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-231122-041529.jpg" , hot:0,luot_xem:889,an_hien:1,tinh_chat:0},
    {id:177, ten_sp: "Apple Gaming G15 15 X1502ZA i5" , slug: "apple-gaming-g15-15-x1502za-i5-177", gia:26651290, gia_km:23987592,id_loai:7, ngay: "2024-03-04" ,so_luong:78,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:0,luot_xem:964,an_hien:1,tinh_chat:0},
    {id:178, ten_sp: "Acer Gaming G15 N4120" , slug: "acer-gaming-g15-n4120-178", gia:5042343, gia_km:3484015,id_loai:2, ngay: "2024-08-08" ,so_luong:68,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:1,luot_xem:113,an_hien:1,tinh_chat:1},
    {id:179, ten_sp: "Lenovo E116 X N5100" , slug: "lenovo-e116-x-n5100-179", gia:19550062, gia_km:17694010,id_loai:3, ngay: "2024-08-16" ,so_luong:88,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:1,luot_xem:833,an_hien:1,tinh_chat:0},
    {id:180, ten_sp: "LG ABLE X 8259U" , slug: "lg-able-x-8259u-180", gia:25059506, gia_km:22025472,id_loai:10, ngay: "2024-05-02" ,so_luong:62,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:38,an_hien:1,tinh_chat:2},
    {id:181, ten_sp: "Asus Pavilion G15 G513IH" , slug: "asus-pavilion-g15-g513ih-181", gia:13927145, gia_km:11384137,id_loai:1, ngay: "2023-04-15" ,so_luong:89,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:0,luot_xem:576,an_hien:0,tinh_chat:0},
    {id:182, ten_sp: "Acer Zenbook 15 eg2082TU" , slug: "acer-zenbook-15-eg2082tu-182", gia:20933872, gia_km:19607991,id_loai:2, ngay: "2024-04-19" ,so_luong:72,hinh:"https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg" , hot:0,luot_xem:759,an_hien:1,tinh_chat:0},
    {id:183, ten_sp: "Asus LarkBook 15 eg2082TU" , slug: "asus-larkbook-15-eg2082tu-183", gia:19558829, gia_km:17241277,id_loai:1, ngay: "2023-12-18" ,so_luong:16,hinh:"https://cdn.tgdd.vn/Products/Images/44/300000/itel-spirit-2-i5-71006300202-3.jpg" , hot:1,luot_xem:667,an_hien:1,tinh_chat:0},
    {id:184, ten_sp: "Asus MacBook Pro 15IHU6" , slug: "asus-macbook-pro-15ihu6-184", gia:12183702, gia_km:10551500,id_loai:1, ngay: "2024-07-08" ,so_luong:55,hinh:"https://cdn.tgdd.vn/Products/Images/44/302226/lenovo-ideapad-gaming-3-15ihu6-i5-82k101f3vn-1.jpg" , hot:1,luot_xem:754,an_hien:1,tinh_chat:0},
    {id:185, ten_sp: "Lenovo Vivobook 5511 11400H" , slug: "lenovo-vivobook-5511-11400h-185", gia:18208330, gia_km:16804905,id_loai:3, ngay: "2023-02-11" ,so_luong:69,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:0,luot_xem:787,an_hien:1,tinh_chat:0},
    {id:186, ten_sp: "Surface Zenbook 1255U" , slug: "surface-zenbook-1255u-186", gia:14941575, gia_km:11044509,id_loai:8, ngay: "2024-05-12" ,so_luong:71,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:884,an_hien:1,tinh_chat:2},
    {id:187, ten_sp: "itel Vivobook X 8259U" , slug: "itel-vivobook-x-8259u-187", gia:13306853, gia_km:11253317,id_loai:12, ngay: "2023-03-03" ,so_luong:70,hinh:"https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg" , hot:1,luot_xem:953,an_hien:1,tinh_chat:0},
    {id:188, ten_sp: "Dell Nitro 5 Gaming AN515 45 R6EV" , slug: "dell-nitro-5-gaming-an515-45-r6ev-188", gia:19395630, gia_km:15588567,id_loai:6, ngay: "2024-05-28" ,so_luong:31,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:452,an_hien:1,tinh_chat:2},
    {id:189, ten_sp: "Lenovo E140 AN515 45 R6EV" , slug: "lenovo-e140-an515-45-r6ev-189", gia:23410044, gia_km:22239433,id_loai:3, ngay: "2024-02-07" ,so_luong:95,hinh:"https://cdn.tgdd.vn/Products/Images/44/302486/hp-victus-15-fa0111tx-i5-7c0r4pa-glr-1.jpg" , hot:1,luot_xem:102,an_hien:1,tinh_chat:0},
    {id:190, ten_sp: "Dell Spirit fa0111TX i5" , slug: "dell-spirit-fa0111tx-i5-190", gia:15233149, gia_km:12705184,id_loai:6, ngay: "2023-04-07" ,so_luong:67,hinh:"https://cdn.tgdd.vn/Products/Images/44/264354/dell-gaming-g15-5511-i5-70266676-1-1.jpg" , hot:1,luot_xem:530,an_hien:1,tinh_chat:0},
    {id:191, ten_sp: "HP Nitro 5 Gaming 15 X1502ZA i5" , slug: "hp-nitro-5-gaming-15-x1502za-i5-191", gia:29139755, gia_km:26432153,id_loai:5, ngay: "2024-03-15" ,so_luong:34,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:1,luot_xem:867,an_hien:1,tinh_chat:0},
    {id:192, ten_sp: "MSI E116 fa0111TX i5" , slug: "msi-e116-fa0111tx-i5-192", gia:5064321, gia_km:1914770,id_loai:4, ngay: "2024-10-24" ,so_luong:22,hinh:"https://cdn.tgdd.vn/Products/Images/44/302951/masstel-e140-n4120-glr-2.jpg" , hot:1,luot_xem:795,an_hien:1,tinh_chat:2},
    {id:193, ten_sp: "Acer Spirit 15IHU6" , slug: "acer-spirit-15ihu6-193", gia:10684703, gia_km:5984170,id_loai:2, ngay: "2023-12-24" ,so_luong:20,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:1,luot_xem:97,an_hien:1,tinh_chat:2},
    {id:194, ten_sp: "MSI gram 2023 1360P" , slug: "msi-gram-2023-1360p-194", gia:15627224, gia_km:13266893,id_loai:4, ngay: "2023-05-02" ,so_luong:61,hinh:"https://cdn.tgdd.vn/Products/Images/44/265523/itel-able-1s-n4020-71006300027-1-1.jpg" , hot:0,luot_xem:989,an_hien:1,tinh_chat:0},
    {id:195, ten_sp: "MSI MacBook Pro N4120" , slug: "msi-macbook-pro-n4120-195", gia:23312223, gia_km:21952669,id_loai:4, ngay: "2023-01-18" ,so_luong:29,hinh:"https://cdn.tgdd.vn/Products/Images/44/270031/asus-rog-strix-gaming-g513ih-r7-hn015w-2-1.jpg" , hot:0,luot_xem:653,an_hien:1,tinh_chat:0},
    {id:196, ten_sp: "Asus Nitro 5 Gaming 14 OLED UX3402ZA" , slug: "asus-nitro-5-gaming-14-oled-ux3402za-196", gia:13625028, gia_km:12460985,id_loai:1, ngay: "2023-11-27" ,so_luong:88,hinh:"https://cdn.tgdd.vn/Products/Images/44/284258/asus-zenbook-14-oled-ux3402za-i5-km218w-a-1.jpg" , hot:0,luot_xem:314,an_hien:1,tinh_chat:0},
    {id:197, ten_sp: "LG E140 M2 2022" , slug: "lg-e140-m2-2022-197", gia:27585562, gia_km:22725256,id_loai:10, ngay: "2024-03-21" ,so_luong:70,hinh:"https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-1-1.jpg" , hot:1,luot_xem:792,an_hien:1,tinh_chat:2},
    {id:198, ten_sp: "Surface Pro 9 AN515 45 R6EV" , slug: "surface-pro-9-an515-45-r6ev-198", gia:10825472, gia_km:7637415,id_loai:8, ngay: "2024-05-16" ,so_luong:5,hinh:"https://cdn.tgdd.vn/Products/Images/44/270142/chuwi-corebook-x-i5-8259u-1-1.jpg" , hot:1,luot_xem:400,an_hien:1,tinh_chat:2},
    {id:199, ten_sp: "Lenovo Nitro 5 Gaming Gaming VICTUS" , slug: "lenovo-nitro-5-gaming-gaming-victus-199", gia:19805505, gia_km:15453563,id_loai:3, ngay: "2024-02-16" ,so_luong:61,hinh:"https://cdn.tgdd.vn/Products/Images/44/263980/Slider/vi-vn-acer-nitro-5-gaming-an515-45-r6ev-r5-nhqbmsv006-4.jpg" , hot:0,luot_xem:68,an_hien:1,tinh_chat:2},
    {id:200, ten_sp: "HP gram 2023 X 8259U" , slug: "hp-gram-2023-x-8259u-200", gia:8084595, gia_km:6755544,id_loai:5, ngay: "2023-09-27" ,so_luong:5,hinh:"https://cdn.tgdd.vn/Products/Images/44/270141/chuwi-larkbook-x-n5100-2-1.jpg" , hot:0,luot_xem:583,an_hien:1,tinh_chat:0}
];
const thuoc_tinh_arr:TThuocTinh[] = [
    {id:1 ,id_sp: 1 , ram: "4GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "2.3"},
    {id:2 ,id_sp: 2 , ram: "4GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "2.3"},
    {id:3 ,id_sp: 3 , ram: "8GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "2.0"},
    {id:4 ,id_sp: 4 , ram: "4GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "1.8"},
    {id:5 ,id_sp: 5 , ram: "16GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "2.3"},
    {id:6 ,id_sp: 6 , ram: "4GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "1.2"},
    {id:7 ,id_sp: 7 , ram: "32GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:8 ,id_sp: 8 , ram: "32GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "2.3"},
    {id:9 ,id_sp: 9 , ram: "4GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "2.5"},
    {id:10 ,id_sp: 10 , ram: "32GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "1.8"},
    {id:11 ,id_sp: 11 , ram: "4GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "2.3"},
    {id:12 ,id_sp: 12 , ram: "16GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "1.2"},
    {id:13 ,id_sp: 13 , ram: "8GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "1.4"},
    {id:14 ,id_sp: 14 , ram: "4GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "2.0"},
    {id:15 ,id_sp: 15 , ram: "16GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "1.8"},
    {id:16 ,id_sp: 16 , ram: "16GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Đen" , can_nang: "1.4"},
    {id:17 ,id_sp: 17 , ram: "8GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.4"},
    {id:18 ,id_sp: 18 , ram: "32GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "2.3"},
    {id:19 ,id_sp: 19 , ram: "8GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "1.6"},
    {id:20 ,id_sp: 20 , ram: "8GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "2.3"},
    {id:21 ,id_sp: 21 , ram: "32GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "2.0"},
    {id:22 ,id_sp: 22 , ram: "4GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "1.8"},
    {id:23 ,id_sp: 23 , ram: "8GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "2.5"},
    {id:24 ,id_sp: 24 , ram: "8GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "1.4"},
    {id:25 ,id_sp: 25 , ram: "16GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "1.6"},
    {id:26 ,id_sp: 26 , ram: "4GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Đen" , can_nang: "1.8"},
    {id:27 ,id_sp: 27 , ram: "4GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "1.0"},
    {id:28 ,id_sp: 28 , ram: "32GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.2"},
    {id:29 ,id_sp: 29 , ram: "32GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "2.3"},
    {id:30 ,id_sp: 30 , ram: "8GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "2.5"},
    {id:31 ,id_sp: 31 , ram: "32GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "2.3"},
    {id:32 ,id_sp: 32 , ram: "4GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "1.4"},
    {id:33 ,id_sp: 33 , ram: "32GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.0"},
    {id:34 ,id_sp: 34 , ram: "4GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "2.0"},
    {id:35 ,id_sp: 35 , ram: "4GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "2.0"},
    {id:36 ,id_sp: 36 , ram: "16GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "1.6"},
    {id:37 ,id_sp: 37 , ram: "32GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:38 ,id_sp: 38 , ram: "16GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "1.8"},
    {id:39 ,id_sp: 39 , ram: "32GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.8"},
    {id:40 ,id_sp: 40 , ram: "8GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "1.0"},
    {id:41 ,id_sp: 41 , ram: "8GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "1.4"},
    {id:42 ,id_sp: 42 , ram: "8GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "1.8"},
    {id:43 ,id_sp: 43 , ram: "8GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "1.2"},
    {id:44 ,id_sp: 44 , ram: "4GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "2.5"},
    {id:45 ,id_sp: 45 , ram: "8GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "2.0"},
    {id:46 ,id_sp: 46 , ram: "4GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "2.3"},
    {id:47 ,id_sp: 47 , ram: "16GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "2.3"},
    {id:48 ,id_sp: 48 , ram: "8GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "2.5"},
    {id:49 ,id_sp: 49 , ram: "4GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "2.5"},
    {id:50 ,id_sp: 50 , ram: "32GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "2.5"},
    {id:51 ,id_sp: 51 , ram: "4GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "1.8"},
    {id:52 ,id_sp: 52 , ram: "16GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "1.8"},
    {id:53 ,id_sp: 53 , ram: "4GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "1.4"},
    {id:54 ,id_sp: 54 , ram: "32GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:55 ,id_sp: 55 , ram: "4GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "1.2"},
    {id:56 ,id_sp: 56 , ram: "4GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "1.4"},
    {id:57 ,id_sp: 57 , ram: "4GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.3"},
    {id:58 ,id_sp: 58 , ram: "8GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "1.0"},
    {id:59 ,id_sp: 59 , ram: "32GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "2.5"},
    {id:60 ,id_sp: 60 , ram: "32GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "1.8"},
    {id:61 ,id_sp: 61 , ram: "16GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "1.2"},
    {id:62 ,id_sp: 62 , ram: "32GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:63 ,id_sp: 63 , ram: "32GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "1.8"},
    {id:64 ,id_sp: 64 , ram: "32GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.8"},
    {id:65 ,id_sp: 65 , ram: "4GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "2.3"},
    {id:66 ,id_sp: 66 , ram: "8GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "1.6"},
    {id:67 ,id_sp: 67 , ram: "4GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "1.6"},
    {id:68 ,id_sp: 68 , ram: "8GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "1.2"},
    {id:69 ,id_sp: 69 , ram: "16GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "2.5"},
    {id:70 ,id_sp: 70 , ram: "32GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "1.6"},
    {id:71 ,id_sp: 71 , ram: "16GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "2.5"},
    {id:72 ,id_sp: 72 , ram: "32GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "2.5"},
    {id:73 ,id_sp: 73 , ram: "8GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "2.3"},
    {id:74 ,id_sp: 74 , ram: "4GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "1.4"},
    {id:75 ,id_sp: 75 , ram: "8GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "2.0"},
    {id:76 ,id_sp: 76 , ram: "4GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "2.5"},
    {id:77 ,id_sp: 77 , ram: "16GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "2.3"},
    {id:78 ,id_sp: 78 , ram: "32GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.8"},
    {id:79 ,id_sp: 79 , ram: "4GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.4"},
    {id:80 ,id_sp: 80 , ram: "32GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "2.0"},
    {id:81 ,id_sp: 81 , ram: "8GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "2.5"},
    {id:82 ,id_sp: 82 , ram: "4GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "1.0"},
    {id:83 ,id_sp: 83 , ram: "16GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "2.0"},
    {id:84 ,id_sp: 84 , ram: "32GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "1.8"},
    {id:85 ,id_sp: 85 , ram: "8GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "1.4"},
    {id:86 ,id_sp: 86 , ram: "16GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "2.3"},
    {id:87 ,id_sp: 87 , ram: "4GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "2.5"},
    {id:88 ,id_sp: 88 , ram: "4GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "1.8"},
    {id:89 ,id_sp: 89 , ram: "4GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "1.8"},
    {id:90 ,id_sp: 90 , ram: "4GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "2.5"},
    {id:91 ,id_sp: 91 , ram: "32GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "1.6"},
    {id:92 ,id_sp: 92 , ram: "4GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "1.6"},
    {id:93 ,id_sp: 93 , ram: "8GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "1.2"},
    {id:94 ,id_sp: 94 , ram: "16GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "2.3"},
    {id:95 ,id_sp: 95 , ram: "16GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "1.0"},
    {id:96 ,id_sp: 96 , ram: "32GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "2.3"},
    {id:97 ,id_sp: 97 , ram: "8GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "1.8"},
    {id:98 ,id_sp: 98 , ram: "4GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "1.4"},
    {id:99 ,id_sp: 99 , ram: "16GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "1.4"},
    {id:100 ,id_sp: 100 , ram: "16GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "1.6"},
    {id:101 ,id_sp: 101 , ram: "16GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "1.8"},
    {id:102 ,id_sp: 102 , ram: "16GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Đen" , can_nang: "2.3"},
    {id:103 ,id_sp: 103 , ram: "16GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "1.2"},
    {id:104 ,id_sp: 104 , ram: "8GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "2.5"},
    {id:105 ,id_sp: 105 , ram: "4GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "1.4"},
    {id:106 ,id_sp: 106 , ram: "16GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "1.6"},
    {id:107 ,id_sp: 107 , ram: "4GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "1.8"},
    {id:108 ,id_sp: 108 , ram: "8GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Đen" , can_nang: "2.3"},
    {id:109 ,id_sp: 109 , ram: "4GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "1.0"},
    {id:110 ,id_sp: 110 , ram: "8GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "1.4"},
    {id:111 ,id_sp: 111 , ram: "16GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:112 ,id_sp: 112 , ram: "32GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "2.0"},
    {id:113 ,id_sp: 113 , ram: "32GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "1.6"},
    {id:114 ,id_sp: 114 , ram: "8GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "1.6"},
    {id:115 ,id_sp: 115 , ram: "32GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "1.4"},
    {id:116 ,id_sp: 116 , ram: "8GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "1.0"},
    {id:117 ,id_sp: 117 , ram: "16GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:118 ,id_sp: 118 , ram: "8GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "1.8"},
    {id:119 ,id_sp: 119 , ram: "4GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "2.3"},
    {id:120 ,id_sp: 120 , ram: "16GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "1.4"},
    {id:121 ,id_sp: 121 , ram: "16GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "1.0"},
    {id:122 ,id_sp: 122 , ram: "8GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.0"},
    {id:123 ,id_sp: 123 , ram: "16GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "2.0"},
    {id:124 ,id_sp: 124 , ram: "8GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Đen" , can_nang: "1.8"},
    {id:125 ,id_sp: 125 , ram: "4GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Đen" , can_nang: "2.0"},
    {id:126 ,id_sp: 126 , ram: "16GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "2.5"},
    {id:127 ,id_sp: 127 , ram: "4GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "2.3"},
    {id:128 ,id_sp: 128 , ram: "16GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "1.4"},
    {id:129 ,id_sp: 129 , ram: "16GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "1.8"},
    {id:130 ,id_sp: 130 , ram: "4GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "2.3"},
    {id:131 ,id_sp: 131 , ram: "32GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "1.4"},
    {id:132 ,id_sp: 132 , ram: "8GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "2.3"},
    {id:133 ,id_sp: 133 , ram: "16GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "1.2"},
    {id:134 ,id_sp: 134 , ram: "32GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "1.6"},
    {id:135 ,id_sp: 135 , ram: "32GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "2.5"},
    {id:136 ,id_sp: 136 , ram: "4GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "1.2"},
    {id:137 ,id_sp: 137 , ram: "16GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "1.4"},
    {id:138 ,id_sp: 138 , ram: "32GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "1.2"},
    {id:139 ,id_sp: 139 , ram: "32GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.0"},
    {id:140 ,id_sp: 140 , ram: "16GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.2"},
    {id:141 ,id_sp: 141 , ram: "8GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Đen" , can_nang: "2.3"},
    {id:142 ,id_sp: 142 , ram: "32GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "2.0"},
    {id:143 ,id_sp: 143 , ram: "4GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "1.0"},
    {id:144 ,id_sp: 144 , ram: "4GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đỏ" , can_nang: "2.0"},
    {id:145 ,id_sp: 145 , ram: "32GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "1.8"},
    {id:146 ,id_sp: 146 , ram: "16GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "1.2"},
    {id:147 ,id_sp: 147 , ram: "8GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "1.6"},
    {id:148 ,id_sp: 148 , ram: "16GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "1.0"},
    {id:149 ,id_sp: 149 , ram: "32GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "1.8"},
    {id:150 ,id_sp: 150 , ram: "32GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "1.2"},
    {id:151 ,id_sp: 151 , ram: "32GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "1.6"},
    {id:152 ,id_sp: 152 , ram: "4GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "1.6"},
    {id:153 ,id_sp: 153 , ram: "4GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "2.5"},
    {id:154 ,id_sp: 154 , ram: "8GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "2.0"},
    {id:155 ,id_sp: 155 , ram: "4GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:156 ,id_sp: 156 , ram: "8GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.3"},
    {id:157 ,id_sp: 157 , ram: "16GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "1.0"},
    {id:158 ,id_sp: 158 , ram: "4GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "2.3"},
    {id:159 ,id_sp: 159 , ram: "32GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "2.5"},
    {id:160 ,id_sp: 160 , ram: "32GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Đen" , can_nang: "1.0"},
    {id:161 ,id_sp: 161 , ram: "8GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "2.0"},
    {id:162 ,id_sp: 162 , ram: "4GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "2.0"},
    {id:163 ,id_sp: 163 , ram: "8GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "1.0"},
    {id:164 ,id_sp: 164 , ram: "8GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Bạc" , can_nang: "2.3"},
    {id:165 ,id_sp: 165 , ram: "16GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "1.4"},
    {id:166 ,id_sp: 166 , ram: "8GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.3"},
    {id:167 ,id_sp: 167 , ram: "16GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "1.6"},
    {id:168 ,id_sp: 168 , ram: "32GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "1.8"},
    {id:169 ,id_sp: 169 , ram: "8GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "1.8"},
    {id:170 ,id_sp: 170 , ram: "32GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "1.6"},
    {id:171 ,id_sp: 171 , ram: "32GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "1.0"},
    {id:172 ,id_sp: 172 , ram: "32GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:173 ,id_sp: 173 , ram: "32GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "2.3"},
    {id:174 ,id_sp: 174 , ram: "4GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "2.0"},
    {id:175 ,id_sp: 175 , ram: "16GB" , cpu: "i7" , dia_cung: "512GB" , mau_sac: "Đen" , can_nang: "1.0"},
    {id:176 ,id_sp: 176 , ram: "32GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.0"},
    {id:177 ,id_sp: 177 , ram: "16GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:178 ,id_sp: 178 , ram: "32GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Xám" , can_nang: "1.2"},
    {id:179 ,id_sp: 179 , ram: "4GB" , cpu: "i7" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "1.8"},
    {id:180 ,id_sp: 180 , ram: "32GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "1.2"},
    {id:181 ,id_sp: 181 , ram: "4GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "2.5"},
    {id:182 ,id_sp: 182 , ram: "16GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "2.3"},
    {id:183 ,id_sp: 183 , ram: "32GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "1.0"},
    {id:184 ,id_sp: 184 , ram: "32GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Xám" , can_nang: "1.2"},
    {id:185 ,id_sp: 185 , ram: "16GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "2.5"},
    {id:186 ,id_sp: 186 , ram: "4GB" , cpu: "i3" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "2.0"},
    {id:187 ,id_sp: 187 , ram: "8GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Trắng" , can_nang: "1.2"},
    {id:188 ,id_sp: 188 , ram: "32GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "1.2"},
    {id:189 ,id_sp: 189 , ram: "4GB" , cpu: "i5" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "2.5"},
    {id:190 ,id_sp: 190 , ram: "16GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Đen" , can_nang: "2.5"},
    {id:191 ,id_sp: 191 , ram: "32GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "2.0"},
    {id:192 ,id_sp: 192 , ram: "8GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Bạc" , can_nang: "1.6"},
    {id:193 ,id_sp: 193 , ram: "4GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Đỏ" , can_nang: "2.5"},
    {id:194 ,id_sp: 194 , ram: "32GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Trắng" , can_nang: "1.6"},
    {id:195 ,id_sp: 195 , ram: "32GB" , cpu: "i3" , dia_cung: "256GB" , mau_sac: "Đen" , can_nang: "1.8"},
    {id:196 ,id_sp: 196 , ram: "32GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Trắng" , can_nang: "1.2"},
    {id:197 ,id_sp: 197 , ram: "32GB" , cpu: "i5" , dia_cung: "1TB" , mau_sac: "Bạc" , can_nang: "2.5"},
    {id:198 ,id_sp: 198 , ram: "8GB" , cpu: "i3" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "2.5"},
    {id:199 ,id_sp: 199 , ram: "16GB" , cpu: "i5" , dia_cung: "512GB" , mau_sac: "Đỏ" , can_nang: "2.5"},
    {id:200 ,id_sp: 200 , ram: "16GB" , cpu: "i7" , dia_cung: "1TB" , mau_sac: "Xám" , can_nang: "2.0"}
];

const code_menu = () => {
    let str:string = ``;
    str+=`<li> <a href="#">Trang chủ</a> </li> `;
    str+=`<li> <a href="lien.html">Liên hệ</a> </li> `;
    loai_arr.slice(0, 6).forEach( loai => str+=`<li> <a href="">${loai.ten_loai}</a></li>`);
    str+=`<li> <a href="lien.html">Đăng nhập</a> </li> `;
    return `<ul>${str}</ul>`;
} //code_menu
     
const code_1_sp = (sp:TSanPham) => {
    let str = `
    <div class="sp"> 
        <div>
            <h3><a href="">${sp.ten_sp}</a></h3>
            <img src="${sp.hinh}">
            <p>KM : ${Number(sp.gia_km).toLocaleString("vi")} VNĐ</p>
            <p>Ngày: ${new Date(sp.ngay).toLocaleDateString("vi")}</p>
        </div>
    </div>`;
    return str;
}//code_1_sp
const code_sp_moi = ( so_sp ) => {
    let sp_arr:TSanPham[] = san_pham_arr.sort( 
        function( a:TSanPham, b:TSanPham ){ 
            let d1 = new Date(a.ngay );
            let d2 = new Date(b.ngay);
            if (d1 < d2) return 1;
            else if (d1 > d2)  return -1; 
            else return 0;
        } 
    );
    let str:string = "";
    sp_arr.slice(0, so_sp).forEach( sp => str+=code_1_sp(sp) );
    return str;
} //code_sp_moi 

const code_sp_xem_nhieu = (so_sp  ) => {
    let sp_arr:TSanPham[] = san_pham_arr.sort( 
        function(a:TSanPham, b:TSanPham){ 
            let d1 = a.luot_xem 
            let d2 = b.luot_xem;
            if (d1 < d2) return 1;
            else if (d1 > d2)  return -1;
            else return 0;
        } 
    ); 
    let str:string = "";
    sp_arr.slice(0, so_sp).forEach( sp => str+=code_1_sp(sp));
    return str;
} //code_sp_xem_nhieu 
const code_sp_noi_bat = (so_sp ) => {
    let sp_noi_bat_arr:TSanPham[] ;
    sp_noi_bat_arr = san_pham_arr.filter( 
        function(sp:TSanPham){ 
            if (sp.hot ==1 ) return true; 
            else return false;
        } 
    ); 
    let str:string = "";
    sp_noi_bat_arr.slice(0, so_sp).forEach( sp => str+=code_1_sp(sp));
    return str;
} //code_sp_noi_bat 
