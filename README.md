# PS31550_InternshipCourse3
<!DOCTYPE html> <html>
<head>
    <title> Shop laptop </title>
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
    <nav id="menu"> </nav>
    <main> 
        <section id="sp_noi_bat" class="list_sp"> 
            <h2>Sản phẩm nổi bật</h2>
            <div id="data"></div>
        </section>
        <section id="sp_moi" class="list_sp"> 
            <h2>Sản phẩm mới</h2>
            <div id="data"></div>
        </section>
        <section id="sp_xem_nhieu" class="list_sp"> 
            <h2>Sản phẩm xem nhiều</h2>
            <div id="data"></div>
        </section>
    </main>
</body>
</html>
<script src="js/app.js"></script>
<script>
    document.querySelector("#menu").innerHTML= code_menu();
    document.querySelector("#sp_noi_bat #data").innerHTML= code_sp_noi_bat(8);
    document.querySelector("#sp_moi #data").innerHTML= code_sp_moi(8);
    document.querySelector("#sp_xem_nhieu #data").innerHTML= code_sp_xem_nhieu(8);
</script>
