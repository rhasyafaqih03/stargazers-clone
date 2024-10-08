// Shown up
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});

// Toggle
document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbarv-nav");
  const hm = document.querySelector("#hamburger-menu");

  if (hm && navbarNav) {
    hm.onclick = () => {
      navbarNav.classList.toggle("active");
    };
    document.addEventListener("click", function (e) {
      if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
      }
    });
  }
});

// Pastikan untuk mengganti salah satu key "Band Performance" menjadi "Band Performance Day2" di objek events
const events = {
  "Padus Performance": {
    ID: {
      heading: "Performance Paduan Suara",
      description:
        "Performance yang tak akan kalah seruh dari team Paduan Suara membawakan lagu ‘nama lagu’ dengan suasana yang luar biasa cocok untuk event ASTERIA. Performance ini tentu memberi semangat dan menyenangkan bagi semua yang menyaksikannya.",
    },
    ENG: {
      heading: "Choir Performance",
      description:
        "A performance that will be just as thrilling as the Choir Team's rendition of 'song name,' with an atmosphere perfectly suited for the ASTERIA event. This performance is sure to energize and delight everyone who experiences it.",
    },
    JP: {
      heading: "合唱パフォーマンス",
      description:
        "合唱チームによる‘曲名’の演奏は、ASTERIAイベントにぴったりの雰囲気を提供し、非常に興奮するパフォーマンスです。このパフォーマンスは、観客全員を元気づけ、楽しませることでしょう。",
    },
  },
  "Band Performance Day2": {
    // Key unik
    ID: {
      heading: "Pertunjukan Band",
      description:
        "Pertunjukkan yang dibawa band-band ‘nama band’ yang sungguh mengkagumkan, Menunjukkan skill dan kerjasama antara anggota band. Dengan lagu ‘nama lagu’ yang menciptakan suasana penuh energi tentunya akan menyemangati siswa siswi untuk hari kedua ASTERIA.",
    },
    ENG: {
      heading: "Band Performance",
      description:
        "The performances by the bands ‘band name’ are truly impressive, showcasing their skill and teamwork. With the song ‘song name,’ which creates an energetic atmosphere, it will undoubtedly energize the students for the second day of ASTERIA.",
    },
    JP: {
      heading: "バンドパフォーマンス",
      description:
        "‘バンド名’によるパフォーマンスは本当に素晴らしく、彼らのスキルとチームワークを示しています。‘曲名’という曲でエネルギッシュな雰囲気を作り出し、ASTERIAの2日目に学生たちを活気づけることでしょう。",
    },
  },
  "Ice Breaking": {
    ID: {
      heading: "Ice Breaking",
      description:
        "MC akan mengajak siswa siswi untuk mengikuti ice breaking agar dapat memeriahkan acara dan menegaskan kesemangatan diantara siswa siswi sembari meningkatkan tingkat percaya diri dari setiap siswa. Salah satu contoh ice breaking adalah quiz mengenai IGS.",
    },
    ENG: {
      heading: "Ice Breaking",
      description:
        "The MC will invite students to participate in ice-breaking activities to liven up the event and reinforce enthusiasm among them, while also boosting each student's confidence. One example of an ice-breaking activity is a quiz about IGS.",
    },
    JP: {
      heading: "アイスブレイキング",
      description:
        "MCが学生をアイスブレイキング活動に招待し、イベントを盛り上げ、学生の間に熱意を強化し、各学生の自信を高めることを目的としています。アイスブレイキングの一例として、IGSに関するクイズがあります。",
    },
  },
  "Leadership Seminar": {
    ID: {
      heading: "Seminar Kepemimpinan",
      description:
        "Seorang lecturer akan memberi materi berkaitan dengan leadership kepada murid myrid. Dengan diadakannya seminar ini, siswa siswi bisa mendalami ilmu masing masing tentang skill kepemimpinan. Seminar ini memberi arahan dan membekali mereka untuk mengembang skillnya.",
    },
    ENG: {
      heading: "Leadership Seminar",
      description:
        "A lecturer will present material related to leadership to the students. Through this seminar, students can delve deeper into their individual leadership skills. The seminar will provide guidance and equip them to develop their skills further.",
    },
    JP: {
      heading: "リーダーシップセミナー",
      description:
        "講師が学生にリーダーシップに関する資料を提供します。このセミナーを通じて、学生はそれぞれのリーダーシップスキルを深く掘り下げることができます。セミナーは、学生に指導を提供し、スキルをさらに発展させるための準備を整えます。",
    },
  },
  "Cooking Activities": {
    ID: {
      heading: "Aktivitas Memasak",
      description:
        "Siswa siswi akan diminta untuk memasak makan malamnya di sekolah. Mereka akan dibagi menjadi kelompok kelompok kecil. Siswa siswi dapat menentukan hindangan yang dimasak dan membawa bahan bahannya dari rumah. Kegiatan ini dirancang untuk melatih skill dan keterampilan memasak.",
    },
    ENG: {
      heading: "Cooking Activities",
      description:
        "Students will be asked to cook their own dinner at school. They will be divided into small groups, where they can choose the dishes they will prepare and bring the ingredients from home. This activity is designed to develop their cooking skills and abilities.",
    },
    JP: {
      heading: "料理活動",
      description:
        "学生は学校で自分たちの夕食を作るように求められます。彼らは小グループに分けられ、調理する料理を選び、材料を家から持参することができます。この活動は、彼らの料理スキルと能力を育成するために設計されています。",
    },
  },
  Games: {
    ID: {
      heading: "Permainan",
      description:
        "Menyediakan kesempatan untuk siswa-siswi supaya bisa berpartisipasi dalam permainan yang menjalurkan semangat kompetitif, menguatkan keakraban antara anggota, dan meningkatkan keterampilan interpersonal. Games yang akan diselenggarakan meliputi Musical chairs, Ular Naga, Estafet Sarung dan Balap Balon.",
    },
    ENG: {
      heading: "Games",
      description:
        "Providing opportunities for students to participate in games that channel competitive spirit, strengthen camaraderie among members, and enhance interpersonal skills. The games to be held include Musical Chairs, Dragon Snake, Sarung Relay, and Balloon Race.",
    },
    JP: {
      heading: "ゲーム",
      description:
        "学生が競争心を発揮し、メンバー間の親睦を深め、対人スキルを向上させるためのゲームに参加する機会を提供します。開催されるゲームには、ミュージカルチェア、ドラゴンスネーク、サルンリレー、バルーンレースが含まれます。",
    },
  },
  "Lomba Yel Yel": {
    ID: {
      heading: "Lomba Yel-Yel",
      description:
        "Siswa Siswi akan diminta untuk menampilkan hasil kerjasamanya dalam bentuk yelyel. Kegiatan ini efektif dalam meningkatkan kekerabatan antar anggota kelompok dan mengurangi rasa kemaluan seseorang.",
    },
    ENG: {
      heading: "Cheer Chant Competition",
      description:
        "Students will be asked to present their teamwork results in the form of cheer chants. This activity is effective in enhancing group cohesion and reducing individual shyness.",
    },
    JP: {
      heading: "応援歌コンペティション",
      description:
        "学生は、チームワークの結果を応援歌の形で発表するように求められます。この活動は、グループの結束を高め、個人の恥ずかしさを減らすのに効果的です。",
    },
  },
  Campfire: {
    ID: {
      heading: "Api Unggun",
      description:
        "Siswa siswi akan duduk mengelilingi api unggun yang dinyalakan di tengah dengan jarak yang aman. Kegiatan ini bisa diiringi dengan lagu atau musik yang cocok dengan suasananya. Momen ini akan dikenang siswa siswi sebagai puncak di masa masa sekolahnya.",
    },
    ENG: {
      heading: "Campfire",
      description:
        "Students will sit around a bonfire lit safely in the center. This activity can be accompanied by songs or music that suits the atmosphere. This moment will be remembered by the students as a highlight of their school years.",
    },
    JP: {
      heading: "キャンプファイヤー",
      description:
        "学生は、安全に中央で点火された焚き火の周りに座ります。この活動は、雰囲気に合った歌や音楽で伴奏されることがあります。この瞬間は、学生にとって学校生活のハイライトとして記憶に残るでしょう。",
    },
  },
  "Solo Performance Day2": {
    ID: {
      heading: "Pertunjukan Solo",
      description:
        "Performance- performance yang menarik perhatian dan akan dikenang penyaksinya yang dibawa oleh: Alif Danendra, Jason Marvel dan Muhammad Yusuf dengan berbagai lagu yang sedang populer.",
    },
    ENG: {
      heading: "Solo Performance",
      description:
        "The captivating performances that will leave a lasting impression on the audience are brought to you by Alif Danendra, Jason Marvel, and Muhammad Yusuf, featuring a variety of popular songs.",
    },
    JP: {
      heading: "ソロパフォーマンス",
      description:
        "観客に強い印象を残す魅力的なパフォーマンスは、Alif Danendra、Jason Marvel、Muhammad Yusufによって提供され、さまざまな人気の曲が演奏されます。",
    },
  },
  "Jalan Santai Day2": {
    ID: {
      heading: "Jalan Santai",
      description:
        "Siswa siswi akan jalan bersama di pagi hari berdasarkan rute yang telah ditentukan. Pasti, kegiatan ini akan menyegarkan mereka dan melatih tubuhnya supaya menjadi lebih sehat dan bugar.",
    },
    ENG: {
      heading: "Leisure Walk",
      description:
        "Students will walk together in the morning along a predetermined route. This activity will undoubtedly refresh them and help train their bodies to become healthier and fitter.",
    },
    JP: {
      heading: "レジャーウォーク",
      description:
        "学生は、事前に決められたルートに沿って朝に一緒に歩きます。この活動は、学生をリフレッシュさせ、体をより健康でフィットさせるのに役立ちます。",
    },
  },
  // ... pastikan semua event lainnya unik dan sesuai ...
};

document.addEventListener("DOMContentLoaded", function () {
  const changeLang = document.getElementById("lang");
  const langOption = document.getElementById("langOpt");
  const currentLang = changeLang.querySelector(".lang-opt");
  const options = document.querySelectorAll("#langOpt .lang-opt");

  const aboutDesc = document.getElementById("about-desc");
  const formHead = document.getElementById("form-heading");
  const formDesc = document.getElementById("form-desc");
  const formJoin = document.getElementById("form-join");
  const heading = document.getElementById("detail-heading");
  const desc = document.getElementById("detail-desc");
  const dayone = document.getElementById("day-1");
  const daytwo = document.getElementById("day-2");
  const asteriaAct = document.getElementById("asteria-act");
  const abtHead = document.getElementById("about-heading");

  const about = {
    ID: 'ASTEREIA (A story to memorialize) Memiliki arti "Bintang Bintang Bersinar". Acara ini melibatkan anggota organisasi organisasi intra sekolah dalam kegiatan menginap bersama, api unggun, permainan dan kegiatan kegiatan yang lainnya dibawah langit yang penuh bintang bintang bersinar.',
    ENG: 'ASTEREIA (A Story to Memorialize) means "Shining Stars." This event involves members of intra-school organizations in activities such as an overnight stay, a bonfire, games, and other activities under a sky filled with shining stars.',
    JP: "ASTEREIA（A Story to Memorialize）は「輝く星々」を意味します。このイベントは、星々が輝く空の下での宿泊、キャンプファイヤー、ゲーム、その他のアクティビティに参加する学校内の組織メンバーを巻き込むものです。",
  };

  const form = {
    ID: [
      "Bergabunglah dalam Petualangan Malam yang Tak Terlupakan di Asteria!",
      "Saat malam turun, bintang-bintang menyaksikan kegembiraan tak terbatas di SMA Ignatius Global School! Siapkan dirimu untuk merasakan petualangan yang menggetarkan hati dalam event Asteria, night camp eksklusif kami. Dengan campuran sempurna antara tantangan seru, kegiatan kreatif, dan momen kebersamaan yang tak terlupakan, Asteria adalah panggung bagi para pemberani yang siap mengukir kenangan malam yang magis.",
      "Jadi bagian dari Asteria sekarang!",
    ],
    ENG: [
      "Join the Unforgettable Night Adventure at Asteria!",
      "As night falls, the stars bear witness to the boundless joy at Ignatius Global School! Prepare yourself to experience a heart-pounding adventure at Asteria, our exclusive night camp event. With a perfect blend of thrilling challenges, creative activities, and unforgettable moments of togetherness, Asteria is the stage for the brave souls ready to carve out magical nighttime memories.",
      "Be a part of Asteria now!",
    ],
    JP: [
      "Asteriaで忘れられない夜の冒険に参加しよう！",
      "夜が訪れると、星々がIgnatius Global Schoolでの無限の喜びを見守ります！心が震えるような冒険をAsteriaで体験する準備をしてください。スリリングな挑戦、創造的なアクティビティ、忘れられない仲間とのひとときを完璧に融合させたAsteriaは、魔法のような夜の思い出を刻む準備ができた勇敢な人々のための舞台です。",
      "今すぐAsteriaの一部になろう！",
    ],
  };

  changeLang.onclick = () => {
    langOption.classList.toggle("show-box");
  };

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedLang = option.innerText;
      option.innerText = currentLang.innerText;
      currentLang.innerText = selectedLang;
      langOption.classList.remove("show-box");
      const textLits = document.querySelectorAll(".event-name"); // Ubah selector

      // Update bagian lainnya
      if (currentLang.innerText === "ID") {
        aboutDesc.innerText = about.ID;
        formHead.innerText = form.ID[0];
        formDesc.innerText = form.ID[1];
        formJoin.innerText = form.ID[2];
        dayone.innerText = "HARI 1";
        daytwo.innerText = "HARI 2";
        asteriaAct.innerText = "AKTIVITAS DAN KEGIATAN ASTERIA";
        abtHead.innerText = "Tentang ASTERIA";
      } else if (currentLang.innerText === "ENG") {
        aboutDesc.innerText = about.ENG;
        formHead.innerText = form.ENG[0];
        formDesc.innerText = form.ENG[1];
        formJoin.innerText = form.ENG[2];
        dayone.innerText = "DAY 1";
        daytwo.innerText = "DAY 2";
        asteriaAct.innerText = "ASTERIA'S ACTIVITIES & PERFORMANCES";
        abtHead.innerText = "About ASTERIA";
      } else if (currentLang.innerText === "JP") {
        aboutDesc.innerText = about.JP;
        formHead.innerText = form.JP[0];
        formDesc.innerText = form.JP[1];
        formJoin.innerText = form.JP[2];
        dayone.innerText = "1日目";
        daytwo.innerText = "2日目";
        asteriaAct.innerText = "アステリアの活動とパフォーマンス";
        abtHead.innerText = "アステリアについて";
      }

      // Update teks pada kartu
      const eventNameElements = document.querySelectorAll(".event-name");
      eventNameElements.forEach((el) => {
        const eventKey = el.dataset.eventKey;
        if (events[eventKey] && events[eventKey][currentLang.innerText]) {
          el.innerText = events[eventKey][currentLang.innerText].heading;
        }
      });

      // Jika detail sedang ditampilkan, perbarui detail juga
      if (document.getElementById("detail").style.display === "block") {
        updateCardDetail(currentLang.innerText);
      }
    });
  });

  function updateCardDetail(lang) {
    if (events[event]) {
      const eventDetail = events[event][lang];
      document.getElementById("detail-heading").innerText = eventDetail.heading;
      document.getElementById("detail-desc").innerText =
        eventDetail.description;
    }
  }

  window.showDetail = function (eventName, classEvent, descEvent) {
    document.getElementById("detail").style.display = "block";
    const heading = document.getElementById("detail-heading");
    const logo = document.getElementById("detail-logo");
    const desc = document.getElementById("detail-desc");

    event = eventName;

    // Set event-specific heading dan logo
    heading.innerText = eventName;
    logo.className = classEvent;
    desc.innerText = descEvent;

    updateCardDetail(currentLang.innerText);
  };

  window.closeDetail = function () {
    document.getElementById("detail").style.display = "none";
  };
});

// Chat Box Mascott
document.addEventListener("DOMContentLoaded", function () {
  const mascot = document.getElementById("chat-mascott");
  const chatBox = document.getElementById("chatBox");

  mascot.onclick = () => {
    chatBox.classList.toggle("show-box");
  };
  var typed = new Typed("#chatBox", {
    strings: [
      "ASTERIA ada api unggun lohhh!!",
      "Kapan lagi nih nginap di sekolah sama teman teman seangkatann? ",
      "Duh aku pengen banget nontonin performance dari Jason, Yusuf, Padus dan lain lainnya..!",
    ],
    typeSpeed: 50,
    loop: true,
  });
});
