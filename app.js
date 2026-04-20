const selectionGroups = [
  {
    title: "食材",
    rows: [
      {
        label: "野菜",
        items: ["にんじん", "玉ねぎ", "じゃがいも", "キャベツ", "・・・"],
      },
      {
        label: "肉",
        items: ["豚肉", "牛肉", "とり肉", "ひき肉", "・・・"],
      },
      {
        label: "魚介類",
        items: ["いわし", "鮭", "さば", "ツナ缶", "・・・"],
      },
      {
        label: "卵・乳製品",
        items: ["卵", "牛乳", "チーズ", "バター", "・・・"],
      },
      {
        label: "豆・大豆製品",
        items: ["豆腐", "納豆", "油揚げ", "・・・"],
      },
      {
        label: "麺類",
        items: ["うどん", "そば", "中華麺", "・・・"],
      },
    ],
  },
];

const chickenRecipes = [
  {
    image: "./material/1_toriniku_1.jpg",
    title: "照り焼きチキン",
    time: "15分",
    desc: "甘辛く仕上げる料理で、ご飯に合いやすく鶏もも肉で作ると失敗しにくいです",
  },
  {
    image: "./material/1_toriniku_2.jpg",
    title: "親子丼",
    time: "15分",
    desc: "鶏肉と玉ねぎを甘辛く煮る料理で、短時間で作りやすくやさしい味です。",
  },
  {
    image: "./material/1_toriniku_3.jpg",
    title: "鶏の唐揚げ",
    time: "25分",
    desc: "しょうゆとにんにくとしょうがで下味をつけて揚げる料理で、おかずやお弁当にも向いています",
  },
  {
    image: "./material/1_toriniku_4.jpg",
    title: "鶏肉のトマト煮",
    time: "40分",
    desc: "玉ねぎやきのこを入れると食べやすくなり、パンやご飯に合わせやすいです。",
  },
];

const salmonRecipes = [
  {
    image: "./material/2_sake_1.jpg",
    title: "コンソメ鮭ポテト",
    time: "15分",
    desc: "鮭とじゃがいもをコンソメでまとめる料理で、親しみやすい味わいなので洋風のおかずに向いています。",
  },
  {
    image: "./material/2_sake_2.jpg",
    title: "きのこと鮭の\nホイル蒸し",
    time: "15分",
    desc: "火にかけたあとはほったらかしで作りやすく、素材のうまみが出てご飯が進みます。",
  },
  {
    image: "./material/2_sake_3.jpg",
    title: "鮭クリームパスタ",
    time: "20分",
    desc: "コクのあるまろやかな味わいで贅沢な気分が味わえて、食卓も華やかに仕上がります。",
  },
  {
    image: "./material/2_sake_4_1.jpg",
    title: "鮭のみそマヨ\nちゃんちゃん焼き",
    time: "25分",
    desc: "フライパン１つで簡単に作れて、野菜がたくさん食べられる一品です。",
  },
];

const practiceRecipes = [
  {
    image: "./material/r_hikiniku_1.jpg",
    title: "温玉鶏そぼろ丼",
    time: "10分",
    desc: "甘辛く味つけしたそぼろに温玉をのせる料理で、温玉をくずしながら食べると全体がまろやかにまとまります。",
  },
  {
    image: "./material/r_hikiniku_2.jpg",
    title: "ボロネーゼ",
    time: "15分",
    desc: "フライパン1つで作れて、時間をおくほど味に深みが出て美味しくなります。",
  },
  {
    image: "./material/r_hikiniku_3.jpg",
    title: "ピリ辛麻婆豆腐",
    time: "15分",
    desc: "しっかりした味付けでごはんにのせればボリュームも出るので、がっつり食べたいときにおすすめです。",
  },
  {
    image: "./material/r_hikiniku_4.jpg",
    title: "シチュービーフで作る\n煮込みハンバーグ",
    time: "20分",
    desc: "ビーフシチュールウを使って手軽にコクのある味に仕上がり、洋風の主菜にぴったりです。",
  },
];

const nlSections = [
  { title: "ツナ缶を使った料理を４つご紹介します。" },
  { bullet: "■ツナマヨ丼", body: "トッピングに刻みのりや卵黄をのせると、味全体がまとまりやすいです。" },
  { bullet: "■ツナじゃが", body: "肉じゃがの肉の代わりにツナ缶を使う料理で、ツナのうまみでやさしい味になります。" },
  { bullet: "■ツナと玉ねぎの和風パスタ", body: "にんにくを入れると風味が出て、トッピングに大葉やのりも合います。" },
  { bullet: "■ツナサラダうどん", body: "めんつゆやごまだれで食べる料理で、暑い時や食欲がない時にもピッタリです。" },
  { title: "希望の調理時間や味付けの好みがあれば教えてくださいね。" },
];

function bindBackButtons() {
  document.querySelectorAll("[data-back-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.backTarget;
      if (target === "dynamic-2-result") {
        window.location.href = sessionStorage.getItem("prototypeBackTarget2") || "index.html";
        return;
      }
      window.location.href = target || "index.html";
    });
  });
}

function resetSelections() {
  sessionStorage.removeItem("prototypeSelections");
}

function bindResetLinks() {
  document.querySelectorAll("[data-reset-selections]").forEach((link) => {
    link.addEventListener("click", () => {
      resetSelections();
    });
  });
}

function mountSelectionScreen(root, nextPage) {
  const content = root.querySelector(".content");
  root.classList.add("has-fixed-actions");
  root.classList.add("selection-screen");
  const saved = new Set(JSON.parse(sessionStorage.getItem("prototypeSelections") || "[]"));

  selectionGroups.forEach((group) => {
    const groupWrap = document.createElement("section");
    const title = document.createElement("h2");
    title.className = "section-title";
    title.textContent = group.title;
    groupWrap.appendChild(title);

    group.rows.forEach((row) => {
      const rowTitle = document.createElement("h3");
      rowTitle.className = "subsection-title";
      rowTitle.textContent = row.label;
      groupWrap.appendChild(rowTitle);

      const grid = document.createElement("div");
      grid.className = "chip-grid";

      row.items.forEach((item) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "chip-button";
        button.textContent = item;
        if (saved.has(item)) {
          button.classList.add("selected");
        }
        button.addEventListener("click", () => {
          button.classList.toggle("selected");
          persistSelections(root);
        });
        grid.appendChild(button);
      });

      groupWrap.appendChild(grid);
    });

    content.appendChild(groupWrap);
  });

  const actions = document.createElement("div");
  actions.className = "selection-actions fixed";
  actions.innerHTML = `
    <button class="secondary-button" type="button" data-clear>条件クリア</button>
    <button class="primary-button" type="button" data-submit>レシピを表示</button>
  `;
  content.appendChild(actions);

  actions.querySelector("[data-clear]").addEventListener("click", () => {
    root.querySelectorAll(".chip-button.selected").forEach((button) => {
      button.classList.remove("selected");
    });
    persistSelections(root);
  });

  actions.querySelector("[data-submit]").addEventListener("click", () => {
    persistSelections(root);
    if (nextPage === "1_nl_v.html") {
      transitionToInlineNlVoice(root, {
        backTarget: `${window.location.pathname.split("/").pop() || "1_sel_nl_v.html"}`,
        delayMs: 500,
        autoplayMode: "immediate",
      });
      return;
    }
    window.setTimeout(() => {
      window.location.href = nextPage;
    }, 500);
  });
}

function persistSelections(root) {
  const selected = [...root.querySelectorAll(".chip-button.selected")].map((button) => button.textContent);
  sessionStorage.setItem("prototypeSelections", JSON.stringify(selected));
}

function mountGridResults(root, recipes, fallbackTags, forceFixedTags = false) {
  const content = root.querySelector(".content");
  if (recipes === chickenRecipes) {
    root.classList.add("grid-1-screen");
  }
  if (recipes === salmonRecipes) {
    root.classList.add("grid-2-screen");
  }
  if (recipes === practiceRecipes) {
    root.classList.add("grid-practice-screen");
  }
  const selections = JSON.parse(sessionStorage.getItem("prototypeSelections") || "[]");
  const tags = forceFixedTags ? fallbackTags : (selections.length > 0 ? selections.slice(0, 2) : fallbackTags);

  const tagWrap = document.createElement("div");
  tagWrap.className = "result-tags";
  tagWrap.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join("");
  content.appendChild(tagWrap);

  const grid = document.createElement("div");
  grid.className = "card-grid";

  recipes.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="recipe-card-body">
        <h2 class="recipe-card-title">${recipe.title.replace("\n", "<br>")}</h2>
        <p class="recipe-time"><img src="./material/clock.png" alt="" aria-hidden="true"><span>${recipe.time}</span></p>
        ${recipe.desc ? `<p class="recipe-desc">${recipe.desc}</p>` : ""}
      </div>
    `;
    grid.appendChild(card);
  });

  content.appendChild(grid);
}

function mountNlText(root) {
  const content = root.querySelector(".content");
  const wrap = document.createElement("section");
  wrap.className = "nl-copy";

  nlSections.forEach((section) => {
    if (section.title) {
      const paragraph = document.createElement("p");
      paragraph.className = "nl-paragraph";
      paragraph.textContent = section.title;
      wrap.appendChild(paragraph);
      return;
    }

    const item = document.createElement("div");
    item.className = "nl-item";
    item.innerHTML = `
      <p class="nl-bullet">${section.bullet}</p>
      <p class="nl-body">${section.body}</p>
    `;
    wrap.appendChild(item);
  });

  content.appendChild(wrap);
}

function mountNlVoice(root) {
  const content = root.querySelector(".content");
  const autoplayMode = sessionStorage.getItem("prototypeVoiceAutoplay") || "delayed";
  sessionStorage.removeItem("prototypeVoiceAutoplay");
  const stage = document.createElement("div");
  stage.className = "center-stage";
  stage.innerHTML = `
    <svg class="wave-mark" viewBox="0 0 140 140" aria-hidden="true">
      <path d="M8 74h29l18-51 25 93 20-42h32" />
    </svg>
    <audio id="nl-voice-audio" src="./material/1_NL_V.mp3" preload="auto" playsinline></audio>
  `;
  content.appendChild(stage);

  const audio = stage.querySelector("#nl-voice-audio");
  const delay = autoplayMode === "immediate" ? 0 : 500;
  const playAudio = () => {
    window.setTimeout(() => {
      audio.play().catch(() => {});
    }, delay);
  };

  if (audio.readyState >= 2) {
    playAudio();
  } else {
    audio.addEventListener("loadeddata", playAudio, { once: true });
    audio.load();
  }
}

function renderNlVoiceContent(root, backTarget) {
  const headerTitle = root.querySelector(".header-title");
  const backButton = root.querySelector(".back-button");
  const content = root.querySelector(".content");

  root.dataset.screen = "nl-voice";
  root.classList.remove("selection-screen", "has-fixed-actions");
  headerTitle.textContent = "検索結果";
  backButton.dataset.backTarget = backTarget;
  content.innerHTML = "";

  mountNlVoice(root);
}

function transitionToInlineNlVoice(root, options = {}) {
  const { backTarget = "index.html", delayMs = 0, autoplayMode = "immediate" } = options;
  const primeAudio = new Audio("./material/1_NL_V.mp3");
  primeAudio.preload = "auto";
  primeAudio.muted = true;

  const startTransition = () => {
    sessionStorage.setItem("prototypeVoiceAutoplay", autoplayMode);
    window.setTimeout(() => {
      renderNlVoiceContent(root, backTarget);
    }, delayMs);
  };

  const prime = primeAudio.play();
  if (prime && typeof prime.then === "function") {
    prime
      .then(() => {
        primeAudio.pause();
        primeAudio.currentTime = 0;
        startTransition();
      })
      .catch(() => {
        startTransition();
      });
    return;
  }

  startTransition();
}

function mountVoiceFlow(root) {
  const content = root.querySelector(".content");
  const initialState = root.dataset.voiceState || "idle";
  const routeTarget = root.dataset.routeTarget || "2_grkw_t.html";
  const backSource = root.dataset.backSource || "2_v1.html";
  const nextVoicePage = root.dataset.nextVoicePage || "";
  const panel = document.createElement("div");
  panel.className = "voice-panel";
  panel.innerHTML = `<button class="voice-button ${initialState === "active" ? "active" : "idle"}" type="button" data-voice-toggle>🎙 音声入力</button>`;
  content.appendChild(panel);

  const button = panel.querySelector("[data-voice-toggle]");
  let isActive = initialState === "active";

  button.addEventListener("click", () => {
    if (!isActive) {
      isActive = true;
      button.classList.remove("idle");
      button.classList.add("active");
      return;
    }

    sessionStorage.setItem("prototypeBackTarget2", backSource);
    if (routeTarget === "1_nl_v.html") {
      transitionToInlineNlVoice(root, {
        backTarget: backSource,
        delayMs: 500,
        autoplayMode: "immediate",
      });
      return;
    }
    window.setTimeout(() => {
      window.location.href = routeTarget;
    }, 500);
  });
}

function syncViewportOffset() {
  const update = () => {
    if (!window.visualViewport) {
      document.documentElement.style.setProperty("--viewport-offset", "0px");
      return;
    }

    const overlap = Math.max(0, window.innerHeight - window.visualViewport.height - window.visualViewport.offsetTop);
    document.documentElement.style.setProperty("--viewport-offset", `${overlap}px`);
  };

  update();

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", update);
    window.visualViewport.addEventListener("scroll", update);
  }

  window.addEventListener("resize", update);
}

function mountTextEntry(root) {
  root.classList.add("has-composer");
  const content = root.querySelector(".content");
  const routeTarget = root.dataset.routeTarget || "2_grkw_t.html";
  const backSource = root.dataset.backSource || "2_t1.html";
  const spacer = document.createElement("div");
  spacer.className = "text-page-spacer";
  content.appendChild(spacer);

  const composer = document.createElement("div");
  composer.className = "composer";
  composer.innerHTML = `
    <textarea class="text-entry" data-entry rows="1" placeholder="キーワードを入力"></textarea>
    <button class="send-button" type="button" data-send>▶︎</button>
  `;
  root.appendChild(composer);

  const entry = composer.querySelector("[data-entry]");
  const send = composer.querySelector("[data-send]");
  const initialText = root.dataset.initialText || "";
  const shouldAutoFocus = root.dataset.autofocus === "true";

  const grow = () => {
    entry.style.height = "48px";
    entry.style.height = `${Math.min(entry.scrollHeight, 108)}px`;
  };

  entry.addEventListener("focus", () => {
    sessionStorage.setItem("prototypeBackTarget2", backSource);
    syncViewportOffset();
    window.setTimeout(() => {
      entry.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 150);
  });

  entry.addEventListener("input", grow);

  send.addEventListener("click", () => {
    sessionStorage.setItem("prototypeBackTarget2", backSource);
    window.setTimeout(() => {
      window.location.href = routeTarget;
    }, 500);
  });

  if (initialText) {
    entry.value = initialText;
    grow();
  }

  if (shouldAutoFocus) {
    window.setTimeout(() => {
      entry.focus();
    }, 150);
  }
}

function mountBottomNav(root, active) {
  const nav = document.createElement("nav");
  nav.className = "bottom-nav";
  nav.innerHTML = `
    <div class="nav-item ${active === "home" ? "active" : ""}" data-nav-target="index.html">
      <img class="nav-icon-image" src="./material/home.png" alt="トップ">
      <div>トップ</div>
    </div>
    <div class="nav-item ${active === "my" ? "active" : ""}">
      <img class="nav-icon-image" src="./material/My.png" alt="My献立">
      <div>My献立</div>
    </div>
    <div class="nav-item ${active === "search" ? "active" : ""}">
      <img class="nav-icon-image" src="./material/search.png" alt="さがす">
      <div>さがす</div>
    </div>
    <div class="nav-item ${active === "favorite" ? "active" : ""}">
      <img class="nav-icon-image" src="./material/favorite.png" alt="お気に入り">
      <div>お気に入り</div>
    </div>
    <div class="nav-item ${active === "mypage" ? "active" : ""}">
      <img class="nav-icon-image" src="./material/mypage.png" alt="マイページ">
      <div>マイページ</div>
    </div>
  `;
  root.appendChild(nav);

  nav.querySelectorAll("[data-nav-target]").forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = item.dataset.navTarget;
    });
  });
}

function renderShareUrl() {
  const anchor = document.querySelector("[data-phone-url]");
  if (!anchor) {
    return;
  }

  if (window.location.protocol.startsWith("http")) {
    anchor.href = window.location.href;
    anchor.textContent = window.location.href;
    return;
  }

  anchor.removeAttribute("href");
  anchor.textContent = "start-server.command を実行後に http://PCのIPアドレス:8000/ をスマホで開いてください";
}

function mountPage() {
  bindBackButtons();
  bindResetLinks();
  renderShareUrl();

  const screen = document.querySelector("[data-screen]");
  if (!screen) {
    return;
  }

  const type = screen.dataset.screen;
  const activeNav = screen.dataset.nav || "search";
  const nextPage = screen.dataset.next || "";

  switch (type) {
    case "selection":
      mountSelectionScreen(screen, nextPage);
      break;
    case "grid-1":
      mountGridResults(screen, chickenRecipes, ["とり肉"]);
      break;
    case "grid-2":
      mountGridResults(screen, salmonRecipes, ["鮭", "20分以内"], true);
      break;
    case "grid-practice":
      mountGridResults(screen, practiceRecipes, ["ひき肉", "15分以内"], true);
      break;
    case "nl-text":
      mountNlText(screen);
      break;
    case "nl-voice":
      mountNlVoice(screen);
      break;
    case "voice-flow":
      mountVoiceFlow(screen);
      break;
    case "text-entry":
      mountTextEntry(screen);
      syncViewportOffset();
      break;
    default:
      break;
  }

  mountBottomNav(screen.parentElement, activeNav);
}

document.addEventListener("DOMContentLoaded", mountPage);
