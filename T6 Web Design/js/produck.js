const endpoint = "https://reqres.in/api/users";
const dataPengguna = [
  {
    img: "https://img.lazcdn.com/g/p/b2749e4107bd27a1165fedc60b924159.jpg_720x720q80.jpg",
    produk: "Baju Kais Pria Distro",
    harga: "Rp.39.000",
    deskripsi:
      "Lengan pendek Cetak Grafis Masa Lalu Kapas Musim Panas. baju kaus pria gambar minuman keras. kaos viral tiktok 2023 cowok gambar",
  },
  {
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//88/MTA-50223471/brd-44261_baju-kaos-kasual-distro-cnn-lengan-pendek-pria_full02.jpg",
    produk: "Baju kaos Kasual",
    harga: "Rp.46.000",
    deskripsi:
      "Matterial Babyterry Deskripsi Produk: - Jahitan Rapi - Bahan Halus,Tidak Mudah Kusut - Motif Kekinian,Model Casual Nyaman Dipakai Sehari Hari",
  },
  {
    img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/4/b2df8daa-8c86-4a0f-956e-fa39e093f211.jpg",
    produk: "Baju Kaos Tshirt Distro",
    harga: "Rp.50.000",
    deskripsi:
      "Promo Baju Kaos Tshirt Distro 57 Oblong Pria Lengan Pendek Kekinian Cowok - Abu tua di Queenlabel. Bebas ongkir dan promo khusus pengguna baru",
  },
  {
    img: "https://down-id.img.susercontent.com/file/8ccba3c5084e44db1da5a246de089d50",
    produk: "T-Shirt Lengan Panjang",
    harga: "Rp.40.000",
    deskripsi:
      "Bahan catton 100% Kelebihanya : Bahan mudah menyerap keringat. Menggunakan Sablon Plastisol ( Halus, Kuat, Warna Tajam, Tidak Mudah Luntur, Awet )",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD012mbuFe-8ExtIL6lIk2smraLSbY91eTMuhO0T-1TS-qdda-mtXBO9febn-mF0aUVQ4&usqp=CAU",
    produk: "Celana Jeans Kargo",
    harga: "Rp.250.819",
    deskripsi:
      "Beli Celana Pria Musim Gugur Celana Jeans Taktis Militer Celana Kargo Banyak Saku Celana Jeans Lurus Kasual Celana Panjang Ukuran Plus S-4X",
  },
  {
    img: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/4/1d4c5e4a-79d5-4500-abf5-356e46413606.jpg",
    harga: "Rp.170.000",
    deskripsi:
      "ukuran M: Panjang celana: 86 cm Lingkar pinggang: 67 cm Lingkar panggul: 104 cm ukuran L: Panjang celana: 88 cm Lingkar pinggang: 70 cm Lingkar panggul: 108 cm ukuran XL:",
  },
  {
    img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/4/8/71435650-6d19-4243-a432-da4554fca85a.jpg",
    produk: "Celana Pendek Pria",
    harga: "Rp.37.500",
    deskripsi:
      "Celana RIP pendek Pria #Matt : twil combed diamond Tebal halus dan tidak kaku #Karakter : Tidak kaku - Atas karet RIP tali Bahas Super Halus",
  },
  {
    img: "https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/3/21/d8ba72ab-5f29-4dde-aedf-0f3b6bade9ca.jpg",
    produk: "Celana Pendek Brand",
    harga: "Rp.90.000",
    deskripsi:
      "Beli Celana Pendek Pria Distro Celana Pendek Branded Supreme APE Simpson - M di Kado Bandungkuh. Bebas ongkir dan promo khusus pengguna baru",
  },
  {
    img: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/7/15/9a8f7fae-f287-4e27-b5d5-5f9b259b112e.jpg",
    produk: "Sepatu Sneakers Sport",
    harga: "Rp.32.000",
    deskripsi:
      "Beli Sepatu Sneakers Sport Best Original 3 warna Sepatu formal sepatu kerja - Biru, 39 di Mn Shoe. Bebas ongkir dan promo khusus pengguna baru",
  },
  {
    img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/20/3e4f0249-38fe-4a31-a2ff-5a5653be40b0.jpg",
    produk: "Sepatu Eagle Martin",
    harga: "Rp.255.000",
    deskripsi:
      "Promo Sepatu Eagle Martin – Lifestyle Shoes - HITAM / PUITH, 42 di Eagle Official Store Official Store. Bebas ongkir dan promo khusus pengguna baru",
  },
  {
    img: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/7/18/b3a9184a-f91f-4bac-bc94-db9b118c5b50.jpg",
    produk: "Sneakers Pria Trendy",
    harga: "Rp.145.000",
    deskripsi:
      "Promo Sepatu Sneaker Pria Cowok Import Trnedy Casual Kerja Santai Gaya Keren - Hijau Putih, 43 di Hipzo Official Shop Official Store. Bebas ongkir",
  },
  {
    img: "https://id-test-11.slatic.net/p/1b268427fbaaca07d37a6fe15efb0778.jpg",
    produk: "Sneakers Kobaran",
    harga: "Rp.700.000",
    deskripsi:
      "Specification: Quality: Import Bahan Sole TPR (Thermo Plastic Rubber) Ringan dan tidak licin Insole Material: Fabric Inject Upper Material: Canvas",
  },
];
fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dataPengguna),
})
  .then((result) => result.json())
  .then((data) => console.log(data));

let konten = document.getElementById("konten");

fetch(endpoint)
  .then((res) => res.json())
  .then((response) => {
    console.log(response);

    dataPengguna.forEach((element) => {
      konten.innerHTML =
        `
                <div class="card">
                <img src="${element.img}" alt="" />
                <div class="keterangan">
                    <h3>${element.produk}</h3>
                    <p>${element.harga}</p>
                    <p>
                    ${element.deskripsi.substring(0, 90)}
                    </p>
                    <a href="#" class="btn">Beli Produk</a>
                </div>
                </div>
            ` + konten.innerHTML;
    });
  });
