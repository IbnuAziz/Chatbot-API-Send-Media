
const awal = async (keyword) =>{
    if(keyword == 'Hai' || keyword == 'B'){
        return `Hallo, Saya DEWI, ada yang bisa saya bantu?\n\nSilahkan pilih dulu informasi yang Bapak/Ibu ingin ketahui lebih lanjut.\n1.Magicly Cream Skincare, Silver Package (Face Brightening Soap,DayCream With Sun Protector,Night Whitening Gel)\n2.Magicly Cream Skincare,  Gold Package (Face Brightening Soap,Fresh Cleanser,DayCream With Sun Protector,Night Whitening Gel)\n3.Face Brightening Soap\n4.Fresh Cleanser\n5.Day Cream with Sun Protection\n6.Night Whitening Gel\n7.Serum Brightening\nKetik 1/2/3/4/5/6/7 untuk info produk lebih lanjut.\nKetik 8 untuk info distributor.\natau Ketik G| Untuk lihat Galery,  atau B| Kembali Ke Menu`
    }
}

const satu = async (keyword) => {
    if(keyword == '1'){
        return `Magicly Cream Skincare,  Silver Package, Rp. 300.000\nMau Order? Ketik Y| jika yes.\natau Ketik G| Untuk Lihat Galery,  atau B| Kembali Ke Menu`
    }
}

const dua = async (keyword) => {
    if(keyword == '2'){
        return `Magicly Cream Skincare,  Gold Package, Rp. 370.000\nMau Order? Ketik Y| jika yes.\natau Ketik G| Untuk Lihat Galery,  atau B| Kembali Ke Menu`
    }
}

const tiga = async (keyword) => {
    if(keyword == '3'){
        return `Face Brightening Soap, Rp. 79.000\nMau Order? Ketik Y| jika yes.\natau Ketik G| Untuk Lihat Galery, atau B| Kembali Ke Menu`
    }
}

const empat = async (keyword) => {
    if(keyword == '4'){
        return `Fresh Cleanser, Rp. 79.000\nMau Order? Ketik Y| jika yes.\natau Ketik G| Untuk Lihat Galery,  atau B| Kembali Ke Menu`
    }
}

const lima = async (keyword) => {
    if(keyword == '5'){
        return `Day Cream with Sun Protector, Rp. 150.000\nMau Order? Ketik Y| jika yes.\natau Ketik G| Untuk Lihat Galery,  atau B| Kembali Ke Menu`
    }
}

const enam = async (keyword) => {
    if(keyword == '6'){
        return `Night Whitening Gel, Rp. 150.000\nMau Order? Ketik Y| jika yes.\natau Ketik G| Untuk Lihat Galery,  atau B| Kembali Ke Menu`
    }
}

const tujuh = async (keyword) => {
    if(keyword == '7'){
        return `Brightening Serum, Rp. 185.000\nMau Order? Ketik Y| jika yes.\natau Ketik G| Untuk Lihat Galery,  atau B| Kembali Ke Menu`
    }
}
const replyImage = async (keyword) =>{
    if(keyword == 'G'){
      return `Mau tau informasi galeri secara virtual dan detail? Klik dulu link ini ya:\nhttp://www.galery.com\nAnda Tertarik?\nKetik B| Kembali Ke Menu`
    }
}

const replyYes = async (keyword) => {
    if(keyword == 'Y' || keyword == 'yes'){
        return `Terimakasih, Team kami akan menghubungin anda paling lambat 2x24 Jam.\nPastikan WA atau No Kontak Anda Aktif terus ya...\nKetik B| Kembali Ke Menu Utama`
    }
}

const usersDatareply = async (keyword) =>{
    const usersNama = [];
    const usersAlamat = [];
    const usersAT = [];
    if(keyword == 'M'){
        return `Isi data berikut ya!\n\nNama:\nAlamat:\nAvailable Time:\nTerimakasih :)\nApakah data ini sudah benar?\n\nlalu.. ketik:\nS| jika ada yang salah B| kembali ke menu atau YES| jika sudah benar`
    
    }else if(keyword == 'Ibnu'){
        usersNama.push(keyword)
        return `Isi data berikut ya!\n\nNama: ${usersNama[0]}\nAlamat:\nAvailable Time:\nTerimakasih :)\nApakah data ini sudah benar?\n\nlalu.. ketik:\nS| jika ada yang salah B| kembali ke menu atau YES| jika sudah benar`
    }else if(keyword == 'Bandung'){
        usersAlamat.push(keyword)
        return `Isi data berikut ya!\n\nNama: ${usersNama[0]}\nAlamat: ${usersAlamat[0]}\nAvailable Time:\nTerimakasih :)\nApakah data ini sudah benar?\n\nlalu.. ketik:\nS| jika ada yang salah B| kembali ke menu atau YES| jika sudah benar`
    }else if(keyword == 'Siang'){
        usersAT.push(keyword)
        return `Isi data berikut ya!\n\nNama: ${usersNama[0]}\nAlamat: ${usersAlamat[0]}\nAvailable Time: ${usersAT[0]}\nTerimakasih :)\nApakah data ini sudah benar?\n\nlalu.. ketik:\nS| jika ada yang salah B| kembali ke menu atau YES| jika sudah benar`
    }
    else if(keyword == 'S'){
        return `Silahkan melakukan perbaikan :\nNama:\nAlamat:\nAvailable Time:\n\nlalu..ketik:\nB| kembali ke menu atau Y| jika sudah benar`
    }
}



module.exports = {
    awal,
    satu,
    dua,
    tiga,
    empat,
    lima,
    enam,
    tujuh,
    replyImage,
    replyYes,
    usersDatareply,
}