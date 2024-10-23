// Mô tả cấu trúc dữ liệu cho phim
interface Movie {
  TenPhim: string;
  NoiDung: string;
  HinhAnh: string;
  ThoiDai: string;
  DanhGia: string;
}

// Danh sách phim
const Phim: Movie[] = [
  {
    TenPhim: "Kamen Rider Decade",
    NoiDung: " là series về một kamen rider qua đường", ThoiDai:"Heisei",
    HinhAnh: "https://tokuvn.com/wp-content/uploads/2019/06/Kamen-Rider-Decade-2.jpg",
    DanhGia: "Bình Thường",
  },
  {
    TenPhim: "Kamen Rider Zio",
    NoiDung: " Series về Kamen Rider thứ 20 của thời đại heisei được gọi với cái danh ''Ma Vương'' ", ThoiDai:"Heisei",
    HinhAnh: "https://3.bp.blogspot.com/-AdL-Wp_syv4/W0xfZCPpAQI/AAAAAAAAft8/vN1Li73ZuCQfl5Yju0yHtCUySVVbafuGgCLcBGAs/s1600/Kamen-Rider-Zi-O-Toy-Catalog-1-.jpg",
    DanhGia: "Bình Thường",
  },
  {
    TenPhim: "Kamen Rider Saber",
    NoiDung: " Series Kamen Rider về Kiếm và những cuốn sách.",ThoiDai:"Reiwa",
    HinhAnh: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc6e466b-25a1-4bc0-873b-18a6e92d743a/de9a13u-a971c46b-8944-43a0-8f30-e16a3d2e3d38.png/v1/fill/w_1280,h_720,q_80,strp/wallpaper_kamen_rider_saber_by_prasblacker_de9a13u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZmM2ZTQ2NmItMjVhMS00YmMwLTg3M2ItMThhNmU5MmQ3NDNhXC9kZTlhMTN1LWE5NzFjNDZiLTg5NDQtNDNhMC04ZjMwLWUxNmEzZDJlM2QzOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.acWc3phg_KyI6yP7Lh1WhLWEC_-i1fATzc_WMjkKtSg",
    DanhGia: "Tệ",
  },
  {
    TenPhim: "Kamen Rider Kiva",
    NoiDung: " Kamen Rider lấy chủ đề về các sinh vật trong phim kinh dị.",ThoiDai:"Heisei",
    HinhAnh: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a7d470e-9eda-4178-bd2b-dd1dadfe77c9/dg2vt0b-4bf070c9-9f9d-4642-8318-1d4685153fc9.jpg/v1/fill/w_1280,h_1152,q_75,strp/arte_exclusiva_tokusatsu___kamen_rider___kiva_by_marmoxdesign_dg2vt0b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1MiIsInBhdGgiOiJcL2ZcLzdhN2Q0NzBlLTllZGEtNDE3OC1iZDJiLWRkMWRhZGZlNzdjOVwvZGcydnQwYi00YmYwNzBjOS05ZjlkLTQ2NDItODMxOC0xZDQ2ODUxNTNmYzkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JcnjP52FVhykzqmg6287Vxiu0Ic99oMKni4hlgdMHEU",
    DanhGia: "Bình Thường",
  },
  {
    TenPhim: "Kamen Rider Gavv",
    NoiDung: " Kamen Rider Lấy chủ đề về đồ ngọt.",ThoiDai:"Reiwa",
    HinhAnh: "https://pbs.twimg.com/media/GUGQEc3aEAARkg7.jpg:large",
    DanhGia: "Hay",
  },
  {
    TenPhim: "Kamen Rider Ryuki",
    NoiDung: " Series Kamen Rider về cuộc chiến sinh tử giữa các rider để nhận được đièu ước cuối cùng.",ThoiDai:"Heisei",
    HinhAnh: "https://i.pinimg.com/originals/b9/7d/c5/b97dc50f416858c69d39f8d6859e72fd.jpg",
    DanhGia: "Hay",
  },
  {
    TenPhim: "Kamen Rider Gotchard",
    NoiDung: " Series Kamen Rider về giar Kim Thuật được xem là series có thể sánh ngang Saber và Ghost về độ dở và các diễn viên đóng có phần hơi đơ",ThoiDai:"Reiwa",
    HinhAnh: "https://upload.wikimedia.org/wikipedia/vi/a/ae/Kamen_Rider_Gotchard_Poster.png",
    DanhGia: "Tệ",
  },
];

  const movieContainer = document.getElementById("movie-list");
  if (movieContainer) {
    movieContainer.innerHTML = ""; // Xóa nội dung cũ
    
    Phim.forEach((movie, index) => {
      const movieDiv = document.createElement("div");
      movieDiv.className = "movie";
      movieDiv.innerHTML = `
        <h2>${movie.TenPhim}</h2>
        <p>Nội Dung:${movie.NoiDung}</p> <p>Thời Đại:${movie.ThoiDai}</p>
        <img src="${movie.HinhAnh}">
        <p>Đánh Giá: ${movie.DanhGia}/Hay</p>
        <div class="Đánh Giá:">
          <button onclick="rateMovie(${index}, 1)">😩Tệ😩</button>
          <button onclick="rateMovie(${index}, 2)">🗿BìnhThường🗿</button>
          <button onclick="rateMovie(${index}, 3)">🔥Hay🔥</button>
        </div>
      `;
      movieContainer.appendChild(movieDiv);
    });
  }
}

// Hàm để đánh giá phim
function rateMovie(index: number, newDanhGia: number): void {
  Phim[index].DanhGia = newDanhGia; // Cập nhật đánh giá
  displayMovie(Phim);            // Cập nhật lại danh sách phim
}

// Hiển thị danh sách phim khi trang được tải
document.addEventListener("DOMContentLoaded", () => {
  displayMovie(Phim);
});