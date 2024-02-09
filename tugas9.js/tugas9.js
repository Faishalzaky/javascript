function panggilObject() {
  var mahasiswa = {
    nama : "Faishal",
    umur : 23,
    ipk  : 3.32,
    jurusan : "Teknik Informatika",
  }
  for(var x in mahasiswa){
    console.log(mahasiswa[x])
  }
}
panggilObject();