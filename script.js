// BizCapto website: ปุ่มภาษา แถบหัวเว็บ และปุ่มลองเปิดโหมดเครื่องบิน
// หน้าอังกฤษ = index.html, หน้าไทย = th/index.html (สร้างจาก th.js ด้วย _tools/build_th.py)
const LANG_KEY = 'bizcapto-lang';

// ---------- ภาษา ----------
// ปุ่ม EN / ไทย เป็นลิงก์ไปอีกหน้า จำภาษาที่เลือกไว้ ครั้งหน้าเปิดหน้าอังกฤษจะพาไปหน้าไทยให้ (ดูสคริปต์ใน <head>)
document.querySelectorAll('.lang [data-lang]').forEach((link) => {
  link.addEventListener('click', () => {
    try { localStorage.setItem(LANG_KEY, link.dataset.lang); } catch { /* เบราว์เซอร์ปิดการเก็บค่า */ }
  });
});

// ---------- แถบหัวเว็บ: มีเส้นใต้เมื่อเลื่อนลง ----------
const siteHeader = document.getElementById('siteHeader');
const markScrolled = () => siteHeader.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', markScrolled, { passive: true });
markScrolled();

// ---------- ลองเปิดโหมดเครื่องบิน ----------
// กดแล้วแถบสถานะในจอขึ้นรูปเครื่องบิน แต่แอปยังบันทึกนามบัตรได้ (ข้อความทั้ง 2 แบบอยู่ใน HTML จึงแปลไทยได้)
const air = document.getElementById('offline');
const airToggle = document.getElementById('airToggle');
airToggle.addEventListener('click', () => {
  const on = airToggle.getAttribute('aria-checked') !== 'true';
  airToggle.setAttribute('aria-checked', String(on));
  air.classList.toggle('is-on', on);
});
