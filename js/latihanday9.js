// ASYINCHRONUS..........................


// membuat data kita secara online

// asyincrhonus adalah / cara menulis code yg menjalankan beberapa task tanpa menunggu harus nunggu yang lainnya berjalan/ bisa berjalan tanpa harus menunggu code yang lain

// caranya dengan membuat http request di bg nya.
// console.log("satu")
// console.log("lima")
// setTimeout(() => {
//     console.log("dua")
// }, 5000)
// setTimeout(() => {
//     console.log("tiga")
// }, 3000)
// setTimeout(() => {
//     console.log("empat")
// }, 1000)


// ..................................................................
// promie/ janji . resolve =janji nya d tepati . rejected = janji nya ga d tepati




// promise
// let condition = true


// CONT
//        let promise = new Promise(function(resolve,rejcted) {
//          if(condition) {
//             console.log("janji terpenuhi")
//               } else {
//         console.log("janji ga di penuhi")
//               }
//           })
//           console.log(promise)

// // dalam bentuk function nya..


//           promise
//                .then(function(value) {
//         console.log(value) 
//                })
//                .catch(function(reason) {
//         console.log(reason)
//                })

// CONTOH2

    //       let condition = false

    //       let promise = new Promise ((resolve,reject) => {
    //           if(condition) {
    //              resolve("janji ada")
    //           }
    //           if(!condition) {
    //              reject("janji ga ada")
    //           }
    //       })
    //                  console.log(promise)

    //       promise
    // //    kondisi kalau true / maka dia akan fullfill/terpenuhi
    //              .then((value) => {
    //               console.log(value)
    //              })
    // // kondisi kalau false / pending atau gagal           
    //              .catch((reason) => {
    //                console.log(reason)
    //              })






//     let condition = true;

// let janji = new Promise((resolve, reject) => {
//     if (condition) {
//         setTimeout(() => {
//             resolve("Janji ditepati!")
//         }, 3000)
//     } else {
//         reject("Janji gugur!")
//     }
// })




// ASYINC AWAIT


// async function getData() {
//     try {
//         const response = await janji;
//         console.log(response)
//         // Swal.fire(
//         //     'Good job!',
//         //     response,
//         //     'success'
//         //   )
//     } catch (err) {
//         // alert -> registrasi user gagal
//         // Swal.fire({
//         //     icon: 'error',
//         //     title: 'Oops...',
//         //     text: 'Registrasi gagal!',
//         // })
//         console.log(err)
//     }
// }

// // console.log(promise)
// // janji.then((value) => {
// //     console.log(value)
// // }).catch((err) => {
// //     console.log(err)
// // }).finally(() => {
// //     console.log("selesai")
// // })















    // .........................................................


    
//     const xhr = new XMLHttpRequest()

// AJAX
// JSON / adalahbentuk data untuk bikiin API DAN UNTUK DATANYA
// // CRUD
// xhr.open("GET", "https://your-url", true) // asynchronous
// // param 1 : is the method
// // param 2 : place of data by url
// // param 3 : true -> asynchronous, false -> synchronous

// xhr.onload = function () { } // mengecek status
// xhr.onerror = function () { } // menampilkan error ketika request
// xhr.send()



// //  variabel ajax bentuk http

// const xhr = XMLHttpRequest()

// // untuk mengambil data dari server
// xhr.open = ('GET' ,  "https://api.npoint.io/40a3d982f04db2584674",true)

// // untuk cek status nya
// xhr.onload = function() {}

// // untuk cek error nya
// xhr.onerror = () {}


// //mengirim data
// xhr.send()