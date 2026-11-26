
const chapters = [
  ["THE INTRODUCTION", "Seseorang bernama Zivanna",
    ["Ada satu nama yang belakangan terasa akrab di hari-hari sekolah: Zivanna. Ia duduk di sebelahku, menjalani hari seperti siswa lain, tetapi ada detail kecil tentang dirinya yang mudah kuingat.", "Halaman ini bukan usaha untuk menjelaskan seluruh dirinya. Ini hanya kumpulan kesan dari seseorang yang kebetulan mendapat tempat duduk di dekatnya."],
    "Pilih kata yang paling pas untuk membuka cerita ini.", ["Sederhana", "Terburu-buru", "Berisik"], "Tidak semua cerita perlu dimulai dengan sesuatu yang besar."],

  ["THE SEAT NEXT DOOR", "Jarak yang dekat, cerita yang sederhana",
    ["Tempat duduk yang bersebelahan membuatku mengenal beberapa kebiasaan kecilnya. Bukan berarti aku tahu semua hal tentang Zivanna.", "Kadang, kehadiran seseorang cukup terasa tanpa harus menjadi pusat perhatian."],
    "Pilih satu detail yang paling sering kamu perhatikan.", ["Suasana kelas", "Cara belajar", "Percakapan kecil"], "Hal sederhana sering menjadi bagian yang paling mudah diingat."],

  ["A LITTLE INTRODUCTION", "Tentang Zivanna",
    ["Zivanna adalah seseorang yang kukenal di kelas. Dari hal-hal yang sempat kulihat, ia tampak rajin, tekun, dan punya caranya sendiri dalam menjalani kegiatan sekolah.", "Deskripsi ini tentu hanya sudut pandangku. Ia jauh lebih luas daripada beberapa kalimat yang kutulis di sini."],
    "Apa yang membuat sebuah perkenalan terasa tulus?", ["Jujur", "Tidak berlebihan", "Menghargai batas"], "Perkenalan yang baik tidak harus menceritakan semuanya."],

  ["CONSISTENCY", "Gadis yang rajin",
    ["Ada kesan tekun yang terlihat dari caranya mengikuti kegiatan belajar. Ia tampak berusaha menyelesaikan apa yang menjadi tanggung jawabnya.", "Rajin bukan berarti seseorang tidak pernah lelah. Bagiku, yang menarik justru usaha kecil yang dilakukan berulang kali."],
    "Susun kebiasaan belajar yang sehat.", ["Mencatat", "Memahami", "Beristirahat"], "Ketekunan juga membutuhkan waktu untuk beristirahat."],

  ["SHOWING UP", "Hadir, hari demi hari",
    ["Setahuku, Zivanna termasuk orang yang hampir selalu hadir di kelas. Kehadirannya menjadi bagian dari rutinitas sekolah yang terasa biasa.", "Aku tidak ingin mengubahnya menjadi sosok yang sempurna. Konsisten hadir saja sudah merupakan kebiasaan yang patut dihargai."],
    "Pilih simbol untuk konsistensi.", ["Kalender", "Jam", "Buku"], "Konsistensi dibangun dari banyak hari biasa."],

  ["A CURIOUS MIND", "Tentang kecerdasannya",
    ["Aku melihatnya sebagai seseorang yang pintar. Namun, pintar bukan cuma soal nilai atau seberapa cepat seseorang menjawab pertanyaan.", "Ada banyak bentuk kecerdasan: mau belajar, mencoba memahami, bertanya ketika belum tahu, dan tetap terbuka pada hal baru."],
    "Mana yang juga termasuk sikap belajar yang baik?", ["Mau bertanya", "Meremehkan orang", "Tak mau mencoba"], "Belajar bukan perlombaan untuk terlihat paling tahu."],

  ["SOFT SPOKEN", "Cara dia berbicara",
    ["Salah satu hal yang kuingat adalah kesan lembut dari cara Zivanna berbicara. Tidak semua orang perlu menggunakan suara keras untuk membuat perkataannya didengar.", "Nada bicara yang tenang bisa membuat percakapan terasa lebih nyaman. Setidaknya, itulah kesan yang kutangkap."],
    "Pilih respons yang menjaga percakapan tetap nyaman.", ["Mendengarkan dulu", "Memotong pembicaraan", "Mengejek"], "Mendengarkan adalah bagian dari komunikasi."],

  ["THOUGHTFUL WORDS", "Cara dia menjawab",
    ["Ada sesuatu yang menarik dari cara seseorang merespons orang lain. Dari beberapa percakapan yang sempat kudengar, jawabannya memberi kesan tenang dan tidak dibuat-buat.", "Satu atau dua percakapan tidak cukup untuk menyimpulkan seluruh kepribadian seseorang."],
    "Apa yang sebaiknya dilakukan sebelum menjawab?", ["Memahami maksudnya", "Langsung menyela", "Mengabaikan"], "Jawaban yang baik sering dimulai dari mendengarkan."],

  ["QUIET DETAILS", "Kesederhanaannya",
    ["Tidak semua hal menarik harus mencolok. Ada orang yang justru mudah diingat lewat sikap sederhana dan cara membawa dirinya.", "Kadang, justru di situlah letak kenyamanannya."],
    "Pilih hal sederhana yang layak diapresiasi.", ["Sikap sopan", "Pamer berlebihan", "Mencari perhatian"], "Kesederhanaan tidak perlu dibuat-buat."],

  ["HER STYLE", "Berpakaian dengan rapi",
    ["Aku memperhatikan bahwa Zivanna sering tampil rapi dengan pakaian yang tertutup dan sopan. Cara berpakaian adalah pilihan pribadi, dan aku menghargai bagaimana ia membawa dirinya.", "Yang ingin kucatat bukan penilaian atas penampilannya, melainkan kesan rapi dan terjaga yang terlihat."],
    "Pilih prinsip saat mengomentari penampilan orang lain.", ["Menghargai pilihan", "Membandingkan", "Menghakimi"], "Menghargai lebih baik daripada menilai."],

  ["SMALL THINGS", "Hal kecil yang berkesan",
    ["Ingatan kadang menyimpan hal-hal yang tidak direncanakan: suasana kelas, percakapan singkat, atau momen ketika seseorang melakukan sesuatu seperti biasanya.", "Hal kecil tidak harus menjadi kejadian luar biasa untuk layak dikenang."],
    "Temukan pasangan kartu yang sama.", ["A", "B", "C", "D"], "Setiap detail punya tempatnya sendiri di ingatan."],

  ["A GENTLE MOMENT", "Ketika suasana terasa ringan",
    ["Ada momen ketika suasana kelas terasa lebih ringan karena hal sederhana. Mungkin sebuah senyum, obrolan singkat, atau respons kecil yang datang pada waktu yang tepat.", "Aku tidak perlu membesar-besarkan momen itu."],
    "Pilih suasana yang cocok dengan bab ini.", ["Tenang", "Ribut", "Tergesa"], "Momen kecil boleh disimpan tanpa harus dimiliki."],

  ["IN THE CLASSROOM", "Kebiasaan di kelas",
    ["Kelas punya ritmenya sendiri: guru menjelaskan, buku dibuka, tugas dikerjakan, dan teman-teman saling bertanya. Di tengah rutinitas itu, aku melihat Zivanna menjalani bagiannya.", "Ada banyak hal yang tidak kutahu tentang kesehariannya."],
    "Pilih benda yang paling identik dengan suasana belajar.", ["Buku", "Bantal", "Panci"], "Rutinitas sekolah tersusun dari hal-hal kecil."],

  ["SIDE BY SIDE", "Duduk di sebelahnya",
    ["Duduk bersebelahan membuat jarak terasa dekat, tetapi bukan berarti aku berhak mengetahui semua hal tentangnya. Ada ruang pribadi yang tetap harus dihormati.", "Dua orang berada di ruang kelas yang sama, menjalani hari masing-masing."],
    "Apa arti menghormati ruang pribadi?", ["Memberi batas", "Memaksa bercerita", "Membaca pesan pribadi"], "Kedekatan tidak menghapus batas pribadi."],

  ["UNSAID", "Hal yang tidak terucapkan",
    ["Tidak semua kekaguman harus segera disampaikan. Ada kalanya seseorang hanya ingin mengakui dalam hati bahwa ia menghargai kehadiran orang lain.", "Perasaan yang baik tetap perlu disertai sikap yang baik."],
    "Pilih sikap yang paling menghargai.", ["Tidak memaksa", "Menuntut jawaban", "Menyebarkan cerita"], "Menghargai seseorang berarti menghargai kebebasannya."],

  ["ADMIRATION", "Tentang kekaguman",
    ["Aku mengagumi beberapa hal dari Zivanna: kerajinannya, kesan cerdasnya, tutur katanya yang lembut, dan kerapian dalam berpakaian.", "Kekaguman ini adalah milikku. Ia tidak membuat Zivanna punya kewajiban untuk menjadi seperti yang kubayangkan."],
    "Lengkapi kalimat: kekaguman yang sehat harus tetap ...", ["Menghormati", "Mengontrol", "Menuntut"], "Kekaguman seharusnya tidak berubah menjadi tuntutan."],

  ["SCHOOL DAYS", "Hari-hari di sekolah",
    ["Hari sekolah tidak selalu menarik. Ada tugas, jadwal, suara kursi bergeser, dan waktu istirahat yang kadang terasa cepat.", "Namun, saat dikenang, rutinitas itu bisa menjadi latar bagi banyak cerita kecil."],
    "Pilih urutan kegiatan sekolah yang masuk akal.", ["Datang–belajar–pulang", "Pulang–datang–belajar", "Belajar–tidur di kelas–datang"], "Hari biasa pun bisa menjadi kenangan."],

  ["ORDINARY MOMENTS", "Momen sederhana",
    ["Mungkin yang paling kuingat bukan peristiwa besar, melainkan potongan kecil: duduk di kelas, mendengar percakapan, atau melihat seseorang fokus pada tugasnya.", "Kenangan tidak selalu datang dengan musik dramatis. Sering kali ia hadir diam-diam."],
    "Pilih satu kata untuk menyimpan momen.", ["Simpan", "Lewati", "Lupakan"], "Tidak semua hal perlu dijelaskan panjang lebar."],

  ["A QUIET IMPRESSION", "Sesuatu yang istimewa",
    ["Istimewa tidak selalu berarti sempurna. Bisa jadi seseorang terasa istimewa karena hal-hal sederhana yang ia lakukan tanpa sadar sedang diperhatikan.", "Bagi cerita ini, Zivanna punya tempat khusus sebagai seseorang yang kehadirannya membuat hari sekolah terasa sedikit berbeda."],
    "Pilih arti 'istimewa' yang paling sehat.", ["Dihargai tanpa dimiliki", "Harus selalu dekat", "Tidak boleh berubah"], "Seseorang tetap bebas menjadi dirinya sendiri."],

  ["MORE THAN WORDS", "Tentang dia",
    ["Pada akhirnya, Zivanna bukan sekadar kumpulan sifat yang kutulis: rajin, pintar, lembut, dan rapi. Ia adalah manusia dengan cerita, kesibukan, dan perasaannya sendiri.", "Aku hanya melihat sebagian kecil dari hidupnya. Bagian lain tetap menjadi miliknya."],
    "Pilih batas yang perlu dijaga saat menulis tentang orang lain.", ["Privasi", "Rasa ingin tahu tanpa batas", "Asumsi"], "Cerita orang lain tetap milik orang itu sendiri."],

  ["LITTLE MEMORIES", "Potongan ingatan",
    ["Ada hal-hal yang ingin kuingat, tetapi tidak perlu kupajang untuk semua orang. Karena itu, halaman ini menjadi tempat menyimpan kesan dengan cara yang tetap sopan.", "Sebuah kenangan tidak harus diumumkan agar punya arti."],
    "Cocokkan simbol dengan kata yang tepat.", ["✦", "○", "□", "△"], "Kenangan bisa disimpan dengan tenang."],

  ["A SMALL GAME", "Jeda sebentar",
    ["Sebelum cerita berakhir, ada satu permainan kecil. Tidak ada skor penting dan tidak ada hadiah besar. Ini hanya jeda agar halaman-halaman ini tidak terasa seperti bacaan panjang.", "Setelah selesai, lanjutkan ke bab berikutnya."],
    "Pilih jawaban yang paling sesuai dengan cerita ini.", ["Cerita sederhana", "Kompetisi", "Biografi lengkap"], "Cerita ini hanyalah satu sudut pandang."],

  ["A LETTER", "Catatan kecil",
    ["Zivanna, mungkin kamu tidak pernah tahu bahwa hal-hal sederhana yang kamu lakukan bisa meninggalkan kesan baik bagi orang di sekitarmu.", "Semoga kamu tetap punya ruang untuk menjadi diri sendiri, belajar, bertumbuh, dan menjalani hari tanpa merasa harus memenuhi gambaran siapa pun."],
    "Pilih penutup surat yang paling tulus.", ["Terima kasih sudah menjadi dirimu", "Kamu harus membalas", "Aku tahu semua tentangmu"], "Ucapan baik tidak harus meminta balasan."],

  ["THE LAST CHAPTER", "Sampai di halaman terakhir",
    ["Dua puluh empat bab ini tidak pernah dimaksudkan untuk merangkum seluruh diri Zivanna. Ini hanya catatan kecil dari seseorang yang duduk di sebelahnya dan memperhatikan beberapa hal baik.", "Mungkin suatu hari nanti, cerita ini akan terasa seperti potongan masa sekolah: sederhana, sedikit canggung, tetapi menyimpan kesan."],
    "Selesai. Kamu sudah sampai di akhir cerita.", ["Baca ulang", "Kembali ke awal", "Tutup cerita"], "The end — but ordinary days continue."]
];

const $ = id => document.getElementById(id);

let current = 0;
let matched = [];
let memoryOpen = [];

function renderList() {
  $('chapterList').innerHTML = chapters.map((c, i) => `
    <button class="chapter-link ${i === current ? 'active' : ''}" data-index="${i}">
      <span>${String(i + 1).padStart(2, '0')}</span>
      ${c[1]}
    </button>
  `).join('');

  document.querySelectorAll('.chapter-link').forEach(button => {
    button.addEventListener('click', () => {
      current = Number(button.dataset.index);
      renderChapter();
      $('chapterSidebar').classList.remove('open');
    });
  });
}

function renderChapter() {
  const chapter = chapters[current];
  const number = String(current + 1).padStart(2, '0');

  $('chapterNumber').textContent = `CHAPTER ${number}`;
  $('chapterCategory').textContent = chapter[0];
  $('progressBar').style.width = `${((current + 1) / chapters.length) * 100}%`;
  $('chapterKicker').textContent = chapter[0];
  $('chapterTitle').textContent = chapter[1];

  $('chapterBody').innerHTML = `
    <p>${chapter[2][0]}</p>
    <p>${chapter[2][1]}</p>
    ${current === 0 ? '<div class="pullquote">“Some people make ordinary days feel different.”</div>' : ''}
  `;

  $('pageCount').textContent = `${number} / 24`;
  $('prevButton').disabled = current === 0;

  $('nextButton').innerHTML = current === 23
    ? 'Kembali ke awal <span>↺</span>'
    : 'Berikutnya <span>→</span>';

  renderGame(chapter);
  renderList();

  $('reader').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function feedback(message) {
  $('gameFeedback').textContent = message;
}

function renderGame(chapter) {
  const gameIndex = current % 4;

  const gameNames = [
    'A tiny choice',
    'Memory tiles',
    'Choose with care',
    'One small answer'
  ];

  const gameTypes = [
    'CHOICE GAME',
    'MEMORY GAME',
    'QUICK DECISION',
    'MINI QUIZ'
  ];

  $('gameTitle').textContent = gameNames[gameIndex];
  $('gamePrompt').textContent = chapter[3];
  $('gameType').textContent = gameTypes[gameIndex];

  const area = $('gameArea');
  area.innerHTML = '';
  feedback('');

  if (current === 10 || current === 20 || gameIndex === 1) {
    const icons = ['✦', '◌', '▧', '⌁', '✦', '◌', '▧', '⌁'];

    const shuffled = icons
      .map((value, index) => ({ value, id: index }))
      .sort(() => Math.random() - 0.5);

    memoryOpen = [];
    matched = [];

    const grid = document.createElement('div');
    grid.className = 'memory-grid';

    shuffled.forEach((item, index) => {
      const button = document.createElement('button');
      button.className = 'memory-card';
      button.textContent = '?';
      button.dataset.value = item.value;
      button.dataset.index = index;

      button.addEventListener('click', () => flipCard(button));
      grid.appendChild(button);
    });

    area.appendChild(grid);

    const reset = document.createElement('button');
    reset.className = 'game-action';
    reset.textContent = 'Acak ulang';
    reset.onclick = () => renderGame(chapter);

    area.appendChild(reset);
  } else {
    const options = chapter[4];
    const wrapper = document.createElement('div');
    wrapper.className = 'game-options';

    options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'game-option';
      button.textContent = option;

      button.onclick = () => {
        wrapper.querySelectorAll('button').forEach(item => {
          item.classList.remove('selected');
        });

        button.classList.add('selected');

        if (index === 0) {
          feedback(chapter[5]);
        } else {
          feedback('Pilihan tersimpan. Ingat, tidak ada jawaban yang harus dipaksakan.');
        }
      };

      wrapper.appendChild(button);
    });

    area.appendChild(wrapper);
  }
}

function flipCard(button) {
  if (
    button.classList.contains('revealed') ||
    matched.includes(button.dataset.value) ||
    memoryOpen.length === 2
  ) return;

  button.classList.add('revealed');
  button.textContent = button.dataset.value;
  memoryOpen.push(button);

  if (memoryOpen.length === 2) {
    const [first, second] = memoryOpen;

    if (first.dataset.value === second.dataset.value) {
      matched.push(first.dataset.value);
      memoryOpen = [];

      feedback('Pasangan ditemukan. Bagus, lanjutkan.');

      if (matched.length === 4) {
        feedback('Semua pasangan ditemukan. Permainan selesai.');
      }
    } else {
      setTimeout(() => {
        memoryOpen.forEach(card => {
          card.classList.remove('revealed');
          card.textContent = '?';
        });

        memoryOpen = [];
      }, 650);
    }
  }
}

$('beginButton').onclick = () => {
  $('hero').classList.add('hidden');
  $('reader').classList.remove('hidden');
  current = 0;
  renderChapter();
};

$('homeLink').onclick = event => {
  event.preventDefault();
  $('reader').classList.add('hidden');
  $('hero').classList.remove('hidden');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

$('nextButton').onclick = () => {
  current = current === 23 ? 0 : current + 1;
  renderChapter();
};

$('prevButton').onclick = () => {
  if (current > 0) {
    current--;
    renderChapter();
  }
};

$('menuButton').onclick = () => {
  $('chapterSidebar').classList.add('open');
};

$('closeMenu').onclick = () => {
  $('chapterSidebar').classList.remove('open');
};
