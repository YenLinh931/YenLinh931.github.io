const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
    { name: "Hà Văn Phòng", age: 30, gender: "nam" },
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
    {name: "Nguyễn Văn Tuấn", age:18, gender:"nữ"},
    {name: "Phan Thị Yến Linh", age:19, gender:"nữ"},
  ]
  function countPersonByGender(listPersons, gender) {
    let count=0;
    for (let index = 0; index < listPersons.length; index++) {
        if(listPersons[index].gender== gender)    count++;        
    }
    return count;
  }
  function statisticsByAge(listPerson) {
      let count1=0, count2=0, count3=0;
      for (let index = 0; index < listPerson.length; index++) {
        if(listPerson[index].age < 18)     count1++;
        else if(listPerson[index].age >=18 && listPerson[index].age<=30)    count2++;
        else     count3++;
      }
      console.log(
          "Trẻ Con: "+count1,
          "\nThanh Niên: "+count2,
          "\nNgười Gìa: "+count3,
      );
  }
  function main(){
        console.log("Nam= "+countPersonByGender(listPersons, "nam"));
        console.log("Nữ= "+countPersonByGender(listPersons, "nữ"));
  }
  main();
  statisticsByAge(listPersons);