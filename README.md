# my-own-cloud
***Penjelasan Singkat:
Login.js: Mengelola autentikasi pengguna dengan Internet Identity menggunakan StoicIdentity.
FileUpload.js: Mengelola pemilihan dan pengunggahan file ke backend dengan mengonversi file ke bentuk ArrayBuffer.
FileDownload.js: Mengambil data file dari backend dan menyediakan link untuk mengunduh file.***


### Penjelasan Konfigurasi:

1. **`canisters.my-own-cloud`**: 
   - `type`: Mengatur tipe canister sebagai aset statis (`assets`).
   - `source`: Mengatur folder build aplikasi (`dist`). Pastikan output build aplikasi React disimpan di folder ini.
   - `build`: Perintah build untuk membangun aplikasi frontend. (`npm install && npm run build`), yang akan membangun aplikasi dan menghasilkan aset statis ke dalam folder `dist`.

2. **`networks`**: 
   - `local`: Mengatur konfigurasi jaringan lokal.
   - `ic`: Mengatur jaringan untuk deployment ke mainnet Internet Computer.

Setelah mengonfigurasi `dfx.json`, jalankan perintah berikut untuk deployment di jaringan lokal:

```bash
dfx start --background
dfx deploy my-own-cloud
```
