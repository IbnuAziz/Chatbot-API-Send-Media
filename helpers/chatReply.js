const sql = require('./connection.js')


const getallData = async (keyword) => {
    const conn = await sql.connection();
    const [rows] = await conn.execute('SELECT * FROM categories LIMIT 5');
    const result = Object.values(JSON.parse(JSON.stringify(rows)))

    if(rows.length > 0) {
        if(keyword == 'Hai' || keyword == 'B'){
            return `Hallo, Saya DEWI, ada yang bisa saya bantu?\n\nSilahkan pilih dulu informasi yang Bapak/Ibu ingin ketahui lebih lanjut.\n${result[0].id}. ${result[0].name}\n${result[1].id}. ${result[1].name}\n${result[2].id}. ${result[2].name}\n${result[3].id}. ${result[3].name}\n${result[4].id}. ${result[4].name}\n\nKetik 1/2/3/4 untuk info produk lebih lanjut. Ketik 8 untuk info distributor.\natau Ketik G| Untuk lihat Galery,  atau B| Kembali Ke Menu`
        }   
    }
    return false;
}

const getData = async (keyword) => {
    const conn = await sql.connection()
    const [rows] = await conn.execute('SELECT category_product.category_id, products.id, products.name, products.description FROM products INNER JOIN category_product ON products.id = category_product.product_id AND category_id = ? ', [keyword]);
    const result = Object.values(JSON.parse(JSON.stringify(rows)))

    var no = result.map(({ id }) => id)
    var na = result.map(({ name }) => name)
    if(result.length = 10){    
      if(keyword){
          return `Beberapa product yang tersedia untuk kategori ini\n\n${no[0] || ''}. ${na[0] || ''}\n${no[1] || ''}. ${na[1] || ''}\n${no[2] || ''}. ${na[2] || ''}\n${no[3] || ''}. ${na[3] || ''}\n${no[4] || ''}. ${na[4] || ''}\n${no[5] || ''}. ${na[5] || ''}\n${no[6] || ''}. ${na[6] || ''}\n${no[7] || ''}. ${na[7] || ''}\n${no[8] || ''}. ${na[8] || ''}\n${no[9] || ''}. ${na[9] || ''}\n\nMau Order? Ketik Y| jika yes.\natau Ketik G| Untuk Lihat Galery,  atau B| Kembali Ke Menu`
      }
        return `Maaf Keyword tidak ada dalam kategori`  
    } 
    return false;
}

const replyImage = async (keyword) =>{
    if(keyword == 'G'){
      return `Mau tau informasi galeri secara virtual dan detail? Klik dulu link ini ya:\nhttp://www.galery.com\nAnda Tertarik?\nKetik B| Kembali Ke Menu`
    }
}

const replyYes = async (keyword) =>{
    if(keyword == 'Y' || keyword == 'Yes'){
      return `Terimakasih\n\nTeam kami akan menghubungin anda paling lambat 2x24 Jam. Pastikan WA atau No Kontak Anda Aktif terus ya...\nKetik B| Kembali Ke Menu Utama`
    }
}



module.exports = {
    replyImage,
    getData,
    getallData,
    replyYes
}