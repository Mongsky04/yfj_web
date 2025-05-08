// JavaScript for Page Transitions
document.addEventListener("DOMContentLoaded", () => {
  // Tambahkan kelas fade-in saat halaman dimuat
  document.body.classList.add("fade-in");

  // Pilih semua tautan <a>
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href");

      // Hindari transisi jika tautan adalah anchor ke bagian dalam halaman
      if (href.startsWith("#") || href === "" || link.target === "_blank") {
        return;
      }

      // Tambahkan animasi fade-out
      event.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      // Tunggu animasi selesai sebelum berpindah halaman
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Sesuaikan durasi dengan CSS transition
    });
  });
});
