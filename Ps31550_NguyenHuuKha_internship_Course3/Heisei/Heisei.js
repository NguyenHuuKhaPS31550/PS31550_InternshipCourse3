// Danh sách phim
var Phim = [
    {
        TenPhim: "Kamen Rider Decade",
        NoiDung: " là series về một kamen rider qua đường", ThoiDai: "Heisei",
        HinhAnh: "https://tokuvn.com/wp-content/uploads/2019/06/Kamen-Rider-Decade-2.jpg",
        DanhGia: "Bình Thường"
    },
    {
        TenPhim: "Kamen Rider Zio",
        NoiDung: " Series về Kamen Rider thứ 20 của thời đại heisei được gọi với cái danh ''Ma Vương'' ", ThoiDai: "Heisei",
        HinhAnh: "https://3.bp.blogspot.com/-AdL-Wp_syv4/W0xfZCPpAQI/AAAAAAAAft8/vN1Li73ZuCQfl5Yju0yHtCUySVVbafuGgCLcBGAs/s1600/Kamen-Rider-Zi-O-Toy-Catalog-1-.jpg",
        DanhGia: "Bình Thường"
    },
    {
        TenPhim: "Kamen Rider Kiva",
        NoiDung: " Kamen Rider lấy chủ đề về các sinh vật trong phim kinh dị.", ThoiDai: "Heisei",
        HinhAnh: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a7d470e-9eda-4178-bd2b-dd1dadfe77c9/dg2vt0b-4bf070c9-9f9d-4642-8318-1d4685153fc9.jpg/v1/fill/w_1280,h_1152,q_75,strp/arte_exclusiva_tokusatsu___kamen_rider___kiva_by_marmoxdesign_dg2vt0b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1MiIsInBhdGgiOiJcL2ZcLzdhN2Q0NzBlLTllZGEtNDE3OC1iZDJiLWRkMWRhZGZlNzdjOVwvZGcydnQwYi00YmYwNzBjOS05ZjlkLTQ2NDItODMxOC0xZDQ2ODUxNTNmYzkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JcnjP52FVhykzqmg6287Vxiu0Ic99oMKni4hlgdMHEU",
        DanhGia: "Bình Thường"
    },
    {
        TenPhim: "Kamen Rider Ryuki",
        NoiDung: " Series Kamen Rider về cuộc chiến sinh tử giữa các rider để nhận được đièu ước cuối cùng.", ThoiDai: "Heisei",
        HinhAnh: "https://i.pinimg.com/originals/b9/7d/c5/b97dc50f416858c69d39f8d6859e72fd.jpg",
        DanhGia: "Hay"
    },
];
var movieContainer = document.getElementById("movie-list");
if (movieContainer) {
    movieContainer.innerHTML = ""; // Xóa nội dung cũ
    Phim.forEach(function (movie, index) {
        var movieDiv = document.createElement("div");
        movieDiv.className = "movie";
        movieDiv.innerHTML = "\n          <h2>" + movie.TenPhim + "</h2>\n          <p>N\u1ED9i Dung:" + movie.NoiDung + "</p> <p>Th\u1EDDi \u0110\u1EA1i:" + movie.ThoiDai + "</p>\n          <img src=\"" + movie.HinhAnh + "\">\n          <p>\u0110\u00E1nh Gi\u00E1: " + movie.DanhGia + "/Hay</p>\n          <div class=\"\u0110\u00E1nh Gi\u00E1:\">\n            <button onclick=\"rateMovie(" + index + ", 1)\">T\u1EC7</button>\n            <button onclick=\"rateMovie(" + index + ", 2)\">B\u00ECnhTh\u01B0\u1EDDng</button>\n            <button onclick=\"rateMovie(" + index + ", 3)\">Hay</button>\n          </div>\n        ";
        movieContainer.appendChild(movieDiv);
    });
}
