//get json
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let nihongo = JSON.parse(this.responseText);
    console.log(nihongo);
  };
};
xhr.open('GET','file/file.json', true);
xhr.send();


// Ambil elemen tombol dan elemen menu
const menuButton = document.querySelector('#btn');
const mobileMenu = document.getElementById('mobile-menu');

// Tambahkan event listener ke tombol
menuButton.addEventListener('click', () => {
  // Toggle visibility menu (gunakan class hidden dari Tailwind)
  mobileMenu.classList.toggle('hidden');

  // Toggle ikon menu (garis 3) dan ikon close (X)
  const icons = menuButton.querySelectorAll('svg');
  icons.forEach(icon => icon.classList.toggle('hidden'));

  // Toggle atribut aria-expanded
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !isExpanded);
});