// TAMBAHKAN ke project Apps Script (jangan hapus fungsi panggil() & doGet() yang sudah ada)
function doPost(e) {
  var out;
  try {
    out = panggil(e.postData.contents); // panggil() mengembalikan objek/JSON string seperti biasa
  } catch (err) {
    out = { ok: false, error: String(err && err.message || err) };
  }
  var text = (typeof out === 'string') ? out : JSON.stringify(out);
  return ContentService.createTextOutput(text).setMimeType(ContentService.MimeType.JSON);
}
