const articles = window.PORTFOLIO_ARTICLES;
const app = document.querySelector("#app");

function readMinutes(article) {
  const count = article.content.join("").length;
  return Math.max(1, Math.ceil(count / 500));
}

function renderShell(content, pageClass = "") {
  document.body.className = pageClass;
  app.innerHTML = content;
}

function girlFigure(className = "") {
  return `
    <svg class="girl-figure ${className}" viewBox="0 0 260 360" role="img" aria-label="拿着书和笔思考的年轻女孩">
      <g class="crayon-lines">
        <path d="M86 65 C90 25, 158 20, 176 62 C191 97, 178 124, 168 143 C139 130, 111 129, 87 145 C74 119, 70 89, 86 65 Z" class="hair-fill"/>
        <path d="M94 77 C105 52, 151 48, 166 78 C178 102, 166 138, 130 139 C93 139, 82 103, 94 77 Z" class="skin-fill"/>
        <path d="M80 155 C98 137, 157 136, 179 156 L194 254 C161 270, 100 270, 66 254 Z" class="shirt-fill"/>
        <path d="M91 253 L118 253 L113 331 L76 331 Z" class="jeans-fill"/>
        <path d="M143 253 L170 253 L188 331 L151 331 Z" class="jeans-fill"/>
        <path d="M69 330 C90 322, 105 326, 116 339 C99 348, 77 348, 59 339 Z" class="shoe-fill"/>
        <path d="M148 334 C168 324, 188 326, 204 338 C189 349, 164 350, 145 342 Z" class="shoe-fill"/>
        <path d="M48 172 C30 197, 31 230, 55 252" class="skin-line"/>
        <path d="M205 171 C219 202, 215 230, 190 252" class="skin-line"/>
        <path d="M47 208 L105 186 L123 254 L65 276 Z" class="book-fill"/>
        <path d="M105 186 L161 205 L143 273 L123 254 Z" class="book-fill"/>
        <path d="M176 175 L206 138" class="pen-line"/>
        <path d="M206 138 L214 129" class="pen-line"/>
        <circle cx="113" cy="101" r="4" class="ink-fill"/>
        <circle cx="148" cy="101" r="4" class="ink-fill"/>
        <path d="M119 122 C130 130, 143 129, 151 121" class="face-line"/>
      </g>
    </svg>
  `;
}

function homeGirl() {
  return `
    <figure class="home-girl">
      <span class="thought-dot dot-one"></span>
      <span class="thought-dot dot-two"></span>
      ${girlFigure("main-girl")}
      <figcaption>思考中</figcaption>
    </figure>
  `;
}

function renderHome() {
  const bubbles = articles
    .map(
      (article, index) => `
        <a class="image-bubble image-bubble-${index + 1}" href="#/article/${article.slug}">
          <span>${article.category} · ${readMinutes(article)} 分钟</span>
          <strong>${article.title}</strong>
          <em>${article.mood}</em>
        </a>
      `
    )
    .join("");

  renderShell(`
    <main class="home comic-home">
      <header class="comic-header">
        <h1>Je pense...</h1>
      </header>
      <section class="image-directory" aria-label="文章目录">
        <img src="./assets/web-directory-clean.jpg" alt="拿着书和笔的女孩站在四个思想泡下方" />
        ${bubbles}
      </section>
    </main>
  `, "home-scene");
}

function girlSymbol(x, y, scale = 1, pose = "stand") {
  const pocketArm = pose === "pocket" ? "M64 150 C48 178, 49 205, 74 214" : "M64 150 C38 170, 31 203, 47 232";
  const penArm = pose === "type" ? "M192 151 C214 171, 216 197, 196 216" : "M192 151 C210 181, 205 211, 180 226";
  return `
    <g class="tiny-girl" transform="translate(${x} ${y}) scale(${scale})">
      <path d="M86 65 C90 25, 158 20, 176 62 C191 97, 178 124, 168 143 C139 130, 111 129, 87 145 C74 119, 70 89, 86 65 Z" class="hair-fill"/>
      <path d="M94 77 C105 52, 151 48, 166 78 C178 102, 166 138, 130 139 C93 139, 82 103, 94 77 Z" class="skin-fill"/>
      <path d="M80 155 C98 137, 157 136, 179 156 L194 254 C161 270, 100 270, 66 254 Z" class="shirt-fill"/>
      <path d="M91 253 L118 253 L113 331 L76 331 Z" class="jeans-fill"/>
      <path d="M143 253 L170 253 L188 331 L151 331 Z" class="jeans-fill"/>
      <path d="M69 330 C90 322, 105 326, 116 339 C99 348, 77 348, 59 339 Z" class="shoe-fill"/>
      <path d="M148 334 C168 324, 188 326, 204 338 C189 349, 164 350, 145 342 Z" class="shoe-fill"/>
      <path d="${pocketArm}" class="skin-line"/>
      <path d="${penArm}" class="skin-line"/>
      <path d="M176 175 L206 138" class="pen-line"/>
      <circle cx="113" cy="101" r="4" class="ink-fill"/>
      <circle cx="148" cy="101" r="4" class="ink-fill"/>
      <path d="M119 122 C130 130, 143 129, 151 121" class="face-line"/>
    </g>
  `;
}

function thresholdScene() {
  return `
    <svg class="article-illustration" viewBox="0 0 900 620" role="img" aria-label="电梯、硬币和键盘的蜡笔插画">
      <rect x="62" y="70" width="286" height="430" rx="18" class="crayon-panel"/>
      <path d="M205 70 L205 500 M92 110 L318 110 M92 458 L318 458" class="crayon-stroke"/>
      ${girlSymbol(88, 170, 0.72, "pocket")}
      <path d="M263 72 C365 30, 472 70, 474 161 C475 231, 394 249, 318 218 C297 244, 274 256, 242 259 C258 240, 266 223, 270 207 C220 169, 219 99, 263 72 Z" class="thought-cloud"/>
      <path d="M331 126 C361 105, 390 103, 417 124" class="crayon-stroke"/>
      <circle cx="336" cy="168" r="22" class="coin-fill"/>
      <circle cx="391" cy="174" r="20" class="coin-fill"/>
      <circle cx="433" cy="145" r="17" class="coin-fill"/>
      <path d="M324 166 C339 151, 354 151, 368 166 M380 173 C393 160, 406 160, 421 173" class="crayon-stroke thin"/>
      <rect x="530" y="308" width="298" height="132" rx="14" class="keyboard-fill"/>
      <path d="M553 338 H806 M553 374 H806 M553 410 H806 M592 322 V438 M636 322 V438 M680 322 V438 M724 322 V438 M768 322 V438" class="crayon-stroke thin"/>
      <text x="574" y="362" class="label-text">A</text>
      <text x="712" y="399" class="label-text">A</text>
      <path d="M602 287 C662 226, 752 226, 810 284" class="crayon-stroke"/>
      <path d="M607 286 C616 258, 652 249, 679 260 C704 226, 766 232, 790 269 C823 265, 852 290, 850 323 C847 362, 802 380, 758 364 C727 389, 670 384, 647 358 C611 364, 579 344, 580 313 C581 302, 591 292, 607 286 Z" class="thought-cloud"/>
      <text x="626" y="314" class="small-text">AZERTY</text>
      <text x="724" y="344" class="small-text">QWERTY</text>
      ${girlSymbol(555, 118, 0.44, "type")}
    </svg>
  `;
}

function meaningScene() {
  return `
    <svg class="article-illustration" viewBox="0 0 900 620" role="img" aria-label="树林、蒲公英和写作的蜡笔插画">
      ${girlSymbol(68, 190, 0.62)}
      <path d="M276 492 C294 375, 284 241, 332 106 M402 492 C390 352, 430 244, 458 110 M542 492 C522 360, 565 238, 608 92 M686 492 C678 350, 710 242, 752 116" class="crayon-stroke tree"/>
      <path d="M218 522 C352 494, 557 492, 796 522" class="crayon-stroke"/>
      <path d="M230 134 C324 72, 454 82, 510 160 C573 150, 651 178, 682 241 C596 259, 500 241, 433 204 C365 253, 272 245, 212 196 C203 172, 207 151, 230 134 Z" class="thought-cloud"/>
      <circle cx="455" cy="220" r="58" class="dandelion"/>
      <path d="M455 220 L455 342" class="crayon-accent"/>
      <path d="M455 220 C414 180, 388 149, 372 107 M455 220 C480 174, 516 142, 560 116 M455 220 C514 219, 561 194, 604 156 M455 220 C407 231, 361 214, 315 180 M455 220 C446 166, 449 128, 469 86" class="seed-line"/>
      <rect x="94" y="160" width="126" height="78" rx="12" class="sponge-fill"/>
      <path d="M118 207 C158 228, 190 219, 210 196 M118 180 C142 168, 172 170, 198 184" class="crayon-stroke thin"/>
      <path d="M238 246 C255 280, 264 311, 261 346" class="drop-line"/>
      <text x="544" y="370" class="small-text">meaning</text>
    </svg>
  `;
}

function nightScene() {
  return `
    <svg class="article-illustration" viewBox="0 0 900 620" role="img" aria-label="夜路、火星、海水和表达的蜡笔插画">
      <path d="M92 470 C218 430, 338 448, 456 486 C590 528, 704 506, 816 456" class="water-line"/>
      <path d="M146 460 C254 488, 330 500, 420 478 C514 454, 616 460, 754 496" class="water-line thin"/>
      <path d="M156 460 L245 126 L336 460" class="crayon-stroke lamp"/>
      <ellipse cx="245" cy="126" rx="105" ry="35" class="light-fill"/>
      ${girlSymbol(126, 236, 0.56)}
      <path d="M388 142 C473 80, 604 92, 666 170 C716 232, 682 302, 600 322 C538 338, 461 326, 414 286 C386 306, 354 316, 318 314 C344 292, 356 268, 362 244 C330 206, 342 173, 388 142 Z" class="thought-cloud"/>
      <circle cx="484" cy="206" r="13" class="spark-fill"/>
      <path d="M484 206 C531 230, 548 266, 532 310" class="crayon-accent"/>
      <path d="M590 182 C617 202, 624 238, 607 268" class="crayon-stroke thin"/>
      <path d="M430 256 C476 300, 545 306, 615 274" class="water-line thin"/>
      <path d="M668 136 C697 112, 728 110, 760 134 M691 164 C726 138, 767 144, 793 176" class="snow-line"/>
    </svg>
  `;
}

function greenhouseScene() {
  return `
    <svg class="article-illustration" viewBox="0 0 900 620" role="img" aria-label="温室、花盆、铁轨和倒影的蜡笔插画">
      <path d="M172 458 L172 242 L430 96 L688 242 L688 458 Z" class="crayon-panel"/>
      <path d="M172 242 L688 242 M430 96 L430 458 M260 193 L260 458 M600 193 L600 458" class="crayon-stroke thin"/>
      ${girlSymbol(118, 235, 0.54)}
      <path d="M424 270 C454 232, 515 234, 545 276 C574 316, 552 372, 496 381 C440 372, 396 322, 424 270 Z" class="reflection-fill"/>
      <path d="M262 470 C400 420, 560 420, 718 470" class="rail-line"/>
      <path d="M340 474 L430 344 L530 474" class="rail-line"/>
      <path d="M298 366 L354 366 L342 435 L310 435 Z M424 362 L486 362 L474 438 L438 438 Z M554 368 L604 368 L596 430 L562 430 Z" class="pot-fill"/>
      <path d="M326 366 C318 324, 352 308, 346 280 M456 362 C448 326, 480 306, 475 274" class="seed-line"/>
      <path d="M480 138 C562 112, 664 150, 704 220 C646 224, 579 206, 531 174 C498 188, 468 188, 436 174 C444 154, 458 143, 480 138 Z" class="thought-cloud"/>
      <text x="520" y="177" class="small-text">silent spring</text>
    </svg>
  `;
}

function articleIllustration(article) {
  const scenes = {
    threshold: thresholdScene,
    meaning: meaningScene,
    night: nightScene,
    greenhouse: greenhouseScene
  };
  return (scenes[article.theme] || thresholdScene)();
}

const articleImageCounts = {
  "rhodes-in-the-elevator": 4,
  "meaning-in-the-forest": 3,
  "spark-before-ash": 2,
  "greenhouse-and-railway": 3
};

function articleImages(article) {
  const count = articleImageCounts[article.slug] || 0;
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `./assets/article-illustrations/${article.slug}/${article.slug}-${number}.png`;
  });
}

function articleImageHtml(article, src, index) {
  const side = index % 2 === 0 ? "right" : "left";
  return `
    <figure class="article-float article-float-${side}" style="shape-outside: url('${src}');">
      <img src="${src}" alt="${article.title} illustration ${index + 1}" loading="lazy" />
    </figure>
  `;
}

function renderArticle(article) {
  const images = articleImages(article);
  const imageSlots = images.reduce((slots, src, index) => {
    const slot = Math.min(
      article.content.length - 1,
      Math.floor((index * article.content.length) / images.length)
    );
    slots[slot] = [...(slots[slot] || []), { src, index }];
    return slots;
  }, {});
  const paragraphs = article.content
    .map((text, index) => {
      const floats = (imageSlots[index] || [])
        .map((item) => articleImageHtml(article, item.src, item.index))
        .join("");
      return `${floats}<p>${text}</p>`;
    })
    .join("");
  const related = articles
    .filter((item) => item.slug !== article.slug)
    .map((item) => `<a href="#/article/${item.slug}">${item.title}</a>`)
    .join("");

  renderShell(`
    <main class="article-page">
      <nav class="topbar">
        <a href="#/">作品集</a>
        <span>${article.category}</span>
      </nav>

      <article>
        <header class="article-hero">
          <div class="article-title-block">
            <p class="eyebrow">${article.date} · ${readMinutes(article)} 分钟</p>
            <h1>${article.title}</h1>
            <p class="summary">${article.summary}</p>
          </div>
          <aside class="quote-panel">
            <span>${article.mood}</span>
            <strong>${article.pullquote}</strong>
          </aside>
        </header>

        <div class="article-body">
          ${paragraphs}
        </div>
      </article>

      <footer class="article-footer">
        <a href="#/">返回目录</a>
        <div>${related}</div>
      </footer>
    </main>
  `, "article-scene");
}

function renderNotFound() {
  renderShell(`
    <main class="empty">
      <h1>这篇文章还没有上架。</h1>
      <a href="#/">返回作品目录</a>
    </main>
  `);
}

function route() {
  const [, path, slug] = location.hash.split("/");
  if (path === "article") {
    const article = articles.find((item) => item.slug === slug);
    article ? renderArticle(article) : renderNotFound();
    return;
  }
  renderHome();
}

window.addEventListener("hashchange", route);
route();
