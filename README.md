# SIPERPUS PWA

## Isi repo
index.html · manifest.webmanifest · sw.js · icons/ (4 PNG)

## Langkah
1. Apps Script: tempel isi `Code_doPost.gs` (jangan dihapus fungsi lama), lalu
   Deploy > New deployment > Web app > Execute as: **Me**, Who has access: **Anyone** > salin URL `/exec`.
2. Di `index.html`, ganti `PASTE_URL_EXEC_DI_SINI` dengan URL tadi.
3. Upload semua file (kecuali `Code_doPost.gs` & README boleh ikut) ke repo GitHub.
4. Settings > Pages > Deploy from branch > `main` / root.
5. Buka `https://USERNAME.github.io/REPO/` di Chrome HP > menu > Install app / Add to Home screen.

## Update berikutnya
Ubah `VERSION` di `sw.js` (mis. `siperpus-v2`) tiap kali index.html diubah.
Setiap kali kode Apps Script diubah, buat **New version** pada deployment.
