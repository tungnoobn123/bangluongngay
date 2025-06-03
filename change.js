const sheetId = "1yxtqSjrgVBa3dgk3to9ytc9F5J3-nWehXjgQdOgbqrI";
    const sheetName = "taikhoan"; // 🔁 Thay bằng tên tab chính xác trong bảng của bạn
    const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
  let sheetData = [];

$("#btnSm").click(function(){
    if($("#txtUserid").val()==""||$("#txtPwOld").val()==""||$("#txtPwNew1").val()==""||$("#txtPwNew2").val()=="")
    {
        alert("❌Nhập đầy đủ thông tin");
        return;
    }
    else if($("#txtPwNew1").val()!=$("#txtPwNew2").val())
    {
         alert("❌Mật khẩu mới không khớp nhau");
        return;
    }
    const inputStaff = document.getElementById("txtUserid").value.trim();
      const inputId = document.getElementById("txtPwOld").value.trim();
      const pwnew = document.getElementById("txtPwNew1").value.trim();
     // Lấy dữ liệu từ Google Sheet khi load trang
    fetch(url)
      .then(res => res.json())
      .then(data => {
        sheetData = data;
      

      const found = sheetData.find(row =>
        row.USERID === inputStaff && row.PW === inputId
      );
      if (found) {
        //alert(111);
       fetch("https://script.google.com/macros/s/AKfycbz4vuSyMLfRpfcmwvaT-QvWBbedtznTKuv3t2LQvQc3btcVI37otF8sS7XlX1kSKW_TEA/exec", {
  method: "POST",
  headers: {
    // Chỉ để mỗi Content-Type text/plain để tránh CORS preflight
   "Content-Type": "text/plain"
  },
  body: JSON.stringify({
    "USERID": inputStaff,
    "PW": pwnew
  })
})

$("#txtPwOld").val('');
$("#txtPwNew1").val('');
$("#txtPwNew2").val('');
 alert("✅Cập nhập thành công.");
        
      } else {
       
         alert("❌Mật khẩu cũ sai.");
         return;
      }
      })
      .catch(err => {
        console.error("Lỗi tải dữ liệu:", err);
        document.getElementById("result").textContent = "Không tải được dữ liệu từ Google Sheet.";
      });

  
  

})