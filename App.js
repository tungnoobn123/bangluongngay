const sheetId = "1yxtqSjrgVBa3dgk3to9ytc9F5J3-nWehXjgQdOgbqrI";
    const sheetName = "bangluong"; // 🔁 Thay bằng tên tab chính xác trong bảng của bạn
    const sheetName1 = "taikhoan";
    const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
     const url1 = `https://opensheet.elk.sh/${sheetId}/${sheetName1}`;
     var urlParams = new URLSearchParams(window.location.search);
    var data =urlParams.get('data');
    var userid=data.split('_')[0];
    var cccd=data.split('_')[1];
      let sheetData = [];
            let sheetData1 = [];
    // console.log(userid);
    // console.log(cccd);
    fetch(url1)
      .then(res => res.json())
      .then(data => {
         sheetData = data;
      

      const found = sheetData.find(row =>
        row.USERID === userid && row.PW === cccd
      );
      
      if (found) {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            sheetData1 = data;
          // console.log(sheetData1);
      const found1 = sheetData1.find(row =>
            row["So the"] === userid 
          );
          if (found1) {
     
        //  console.log(found1["Bang luong thang"]);
                   document.getElementById("Fdate").innerHTML = found1["Bang luong thang"];
                    document.getElementById("dpt").innerHTML = found1["Bo phan"];
                    document.getElementById("Name").innerHTML =found1["Ho va ten"];

                    document.getElementById("StaffNo").innerHTML = found1["So the"];
                    document.getElementById("SalaryGrade").innerHTML =found1["bac luong moi"];
                    document.getElementById("FactBasicSalary").innerHTML =found1["luong co ban"];
                    document.getElementById("tcxx").innerHTML = found1["tro cap xang xe"];
                    document.getElementById("StationSalaryVN").innerHTML =found1["Tro cap cuong vi"];
                    document.getElementById("PhoneSalary").innerHTML =found1["tro cap dien thoai"];
                    document.getElementById("LangSalary").innerHTML = found1["tro cap ngon ngu"];
                    document.getElementById("YearSalary").innerHTML = found1["tham nien"];
                    document.getElementById("txtthuong").innerHTML = found1["chuyen can"];
                    document.getElementById("BehavePrize").innerHTML = found1["hieu suat"];
                    document.getElementById("hieusuatkhac").innerHTML = found1["Hieu suat khac"];
                    document.getElementById("DaySalary2").innerHTML =found1["tong luong"];
                    document.getElementById("Neglect").innerHTML = found1["nghi tu do"];
                    document.getElementById("LateEarly").innerHTML = found1["so lan di lam muon ve som"];
                    document.getElementById("SJ").innerHTML = found1["so ngay nghi viec rieng"];
                    document.getElementById("BJ").innerHTML = found1["so ngay nghi om + TNLD"];
                    document.getElementById("PCJ").innerHTML = found1["So ngay nghi duong suc + vo sinh"];
                    document.getElementById("NJ").innerHTML = found1["nghi phep"];
                    document.getElementById("CC").innerHTML = found1["nghi cong tac"];
                    document.getElementById("cjjVN").innerHTML = found1["so ngay nghi duoc huong luong"];
                    document.getElementById("RealTime").innerHTML =found1["TONG NGAY CONG"];
                    document.getElementById("RealTimeDay").innerHTML =found1["CA NGAY"];
                    //document.getElementById("RealTimeDay").innerHTML = data[0].CA_DEM;
                    document.getElementById("RealTimeNight").innerHTML = found1["ca dem"];
                    document.getElementById("nghi70").innerHTML = found1["Nghi 70%"];


                    document.getElementById("DaySalary").innerHTML =found1["Tong tien luong"];
                    document.getElementById("DaySalary1").innerHTML = found1["Luong ban ngay"];
                    document.getElementById("NightSalary").innerHTML = found1["Luong ban dem"];
                    document.getElementById("OverWork1").innerHTML =found1["Tang ca ngay 150% (h)"];
                    document.getElementById("cntcd200").innerHTML = found1["CN ngay + tang ca dem 200% (h)"];
                    document.getElementById("cndem280").innerHTML =found1["lam CN dem 280% (h)"];
                    document.getElementById("YeBan").innerHTML =found1["Tang ca ngay le tet 300% (h)"];
                    document.getElementById("wuban").innerHTML = found1["Tang ca đêm le tet 380% (h)"];
                    document.getElementById("BehavePricevnEx").innerHTML = found1["Tong luong tang ca"];
                    document.getElementById("RetrieveSalary").innerHTML = found1["Dieu chinh luong"];
                    document.getElementById("cdkn").innerHTML = found1["TC cach ly + Kinh nguyet"];
                    document.getElementById("OtherSubsidy").innerHTML = found1["PC bo sung"];
                    document.getElementById("ShouldTotal").innerHTML = found1["Tong thu nhập"];
                    document.getElementById("PersonalTax").innerHTML =found1["Thue TNCN"];
                    document.getElementById("BHBasic").innerHTML = found1["LUONG TINH BH+CĐ"];
                    document.getElementById("BHPeronalTotal").innerHTML = found1["Cong nhan BHXH, YT, TN"];
                    document.getElementById("LaborUnionFeePersonal").innerHTML =found1["phí công đoàn"];
                    document.getElementById("khautrukhac").innerHTML = found1["Khau tru khac"];
                    document.getElementById("DeductionsTotal").innerHTML = found1["Tong khau tru"];
                    document.getElementById("FactTotal").innerHTML =found1["TONG THUC LINH"];
     
        
      } else {
        // resultText.textContent = "❌ Không tìm thấy thông tin phù hợp.";
        // resultText.style.color = "red";
         alert("❌ Không tìm thấy thông tin phù hợp.");
         return;
      }
          
          })
          .catch(err => console.error("Lỗi đọc dữ liệu:", err));

        
      } else {
        // resultText.textContent = "❌ Không tìm thấy thông tin phù hợp.";
        // resultText.style.color = "red";
         alert("❌ Không tìm thấy thông tin phù hợp.");
         return;
      }

       
      })
      .catch(err => console.error("Lỗi đọc dữ liệu:", err));

      $("#btnExportpdf").click(function () {
            html2canvas($('#tblCustomers')[0], {
                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
                    var docDefinition = {
                        content: [{
                            image: data,
                            width: 500
                        }]
                    };
                    pdfMake.createPdf(docDefinition).download("customer-details.pdf");
                }
            });
        });
        function exportReportToExcel() {
            let table = document.getElementsByTagName("table"); // you can use document.getElementById('tableId') as well by providing id to the table tag
            TableToExcel.convert(table[0], { // html code may contain multiple tables so here we are refering to 1st table tag
                name: `export.xlsx`, // fileName you could use any name
                sheet: {
                    name: 'Sheet 1' // sheetName
                }
            });
        }