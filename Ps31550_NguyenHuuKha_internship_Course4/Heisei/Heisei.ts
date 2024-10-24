interface Movie {
    TenPhim: string;
    NoiDung: string;
    HinhAnh: string;
    ThoiDai: string;
    DanhGia: string;
  }
  

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
      TenPhim: "Kamen Rider Kiva",
      NoiDung: " Kamen Rider lấy chủ đề về các sinh vật trong phim kinh dị.",ThoiDai:"Heisei",
      HinhAnh: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a7d470e-9eda-4178-bd2b-dd1dadfe77c9/dg2vt0b-4bf070c9-9f9d-4642-8318-1d4685153fc9.jpg/v1/fill/w_1280,h_1152,q_75,strp/arte_exclusiva_tokusatsu___kamen_rider___kiva_by_marmoxdesign_dg2vt0b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1MiIsInBhdGgiOiJcL2ZcLzdhN2Q0NzBlLTllZGEtNDE3OC1iZDJiLWRkMWRhZGZlNzdjOVwvZGcydnQwYi00YmYwNzBjOS05ZjlkLTQ2NDItODMxOC0xZDQ2ODUxNTNmYzkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JcnjP52FVhykzqmg6287Vxiu0Ic99oMKni4hlgdMHEU",
      DanhGia: "Bình Thường",
    },
    {
      TenPhim: "Kamen Rider Ryuki",
      NoiDung: " Series Kamen Rider về cuộc chiến sinh tử giữa các rider để nhận được đièu ước cuối cùng.",ThoiDai:"Heisei",
      HinhAnh: "https://i.pinimg.com/originals/b9/7d/c5/b97dc50f416858c69d39f8d6859e72fd.jpg",
      DanhGia: "Hay",
    },
   
  ];
  
    const movieContainer = document.getElementById("movie-list");
    if (movieContainer) {
      movieContainer.innerHTML = ""; 
      
      Phim.forEach((movie, index) => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie";
        movieDiv.innerHTML = `
          <h2>${movie.TenPhim}</h2>
          <p>Nội Dung:${movie.NoiDung}</p> <p>Thời Đại:${movie.ThoiDai}</p>
          <img src="${movie.HinhAnh}">
          <p>Đánh Giá: ${movie.DanhGia}/Hay</p>
          <div class="Đánh Giá:">
            <button onclick="rateMovie(${index}, 1)">Tệ</button>
            <button onclick="rateMovie(${index}, 2)">BìnhThường</button>
            <button onclick="rateMovie(${index}, 3)">Hay</button>
          </div>
        `;
        movieContainer.appendChild(movieDiv);
      });
    }