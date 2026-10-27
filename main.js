(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // Poster + play button; swaps in YouTube (or the local file) only when tapped,
  // so phones don't download video until someone asks for it.
  function player(el, { youtubeId, localFile, poster, label }) {
    el.innerHTML = `
      <img src="${esc(poster)}" alt="" loading="lazy">
      <button class="play" type="button" aria-label="Play ${esc(label)}">
        <span class="btn-circle" aria-hidden="true"></span>
        <span class="play-text">${esc(label)}</span>
      </button>`;
    el.querySelector(".play").addEventListener("click", () => {
      if (youtubeId && S.embedYouTube !== false) {
        el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&rel=0&playsinline=1"
          title="${esc(label)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      } else {
        el.innerHTML = `<video src="${esc(localFile)}" poster="${esc(poster)}" controls playsinline autoplay></video>`;
      }
    });
  }

  // Muted preview loops play only while on screen.
  function autoplayLoops() {
    const vids = document.querySelectorAll("video[data-loop]");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const v = e.target;
          if (e.isIntersecting) {
            if (!v.src) v.src = v.dataset.loop;
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        }),
      { threshold: 0.35 }
    );
    vids.forEach((v) => io.observe(v));
  }

  function contactButtons() {
    return [
      `<a class="button solid" href="mailto:${esc(S.email)}">Email me</a>`,
      ...S.socials
        .filter((x) => x.url)
        .map((x) => `<a class="button" href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.name)}</a>`),
      S.cv ? `<a class="button" href="${esc(S.cv)}" download>Download CV</a>` : "",
    ].join("");
  }

  function footer() {
    $("#footer").innerHTML = `<div class="wrap"><span>© ${new Date().getFullYear()} ${esc(S.name)}</span><span>${esc(S.role)}</span></div>`;
  }

  function renderHome() {
    document.title = `${S.name} | ${S.role}`;

    $("#hero").innerHTML = `
      <h1 class="display">${esc(S.name)}</h1>
      <p class="role">${esc(S.role)}</p>
      <hr class="rule">
      <p class="intro">${esc(S.intro)}</p>`;

    player($("#reel"), { ...S.reel, label: "Play showreel" });
    if (S.reel.youtubeUrl)
      $("#reel").insertAdjacentHTML(
        "afterend",
        `<a class="watch yt" href="${esc(S.reel.youtubeUrl)}" target="_blank" rel="noopener">Watch on YouTube ↗</a>`
      );

    $("#panel").innerHTML = `
      <div>
        <p class="display big">15+</p>
        <p class="big-label">Years in African digital media</p>
      </div>
      <div class="divider" aria-hidden="true"></div>
      <div class="facts">
        <p class="label">What I do</p><p>${esc(S.whatIDo)}</p>
        <p class="label">Markets</p><p>${S.markets.map(esc).join(" · ")}</p>
        <p class="label">Skills</p><p>${S.skills.map(esc).join(" · ")}</p>
        <p class="label">YouTube</p><p class="lede">${esc(S.youtube)}</p>
        ${S.works ? `<p class="label">Works</p><p>${esc(S.works)}</p>` : ""}
      </div>`;

    $("#stats").innerHTML = S.stats
      .slice(1)
      .map((s) => `<div class="stat"><p class="display">${esc(s.value)}</p><p class="label">${esc(s.label)}</p></div>`)
      .join("");

    const cats = ["All", ...S.categories];
    $("#filters").innerHTML = cats
      .map((c, i) => `<button type="button" class="chip" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`)
      .join("");
    $("#work-count").textContent = `[ ${S.work.length} ]`;
    const pin = S.pinned;
    $("#work-grid").innerHTML =
      (pin
        ? `
      <figure class="piece pinned">
        <button type="button" class="media reel-play" aria-label="Play ${esc(pin.title)}">
          <img src="${esc(pin.poster)}" alt="" loading="lazy">
          <span class="pin-overlay"><span class="btn-circle" aria-hidden="true"></span><span class="play-text">Play reel</span></span>
        </button>
        <figcaption>
          <div class="meta">
            <h3 class="display">${esc(pin.title)}</h3>
            <span class="tag">Pinned</span>
          </div>
          <span class="sub">${esc(pin.show)}</span>
          ${pin.youtubeUrl ? `<a class="watch" href="${esc(pin.youtubeUrl)}" target="_blank" rel="noopener">Watch on YouTube ↗</a>` : ""}
        </figcaption>
      </figure>`
        : "") +
      S.work
      .map(
        (w) => `
      <figure class="piece" data-cat="${esc(w.category)}">
        ${
          w.gif
            ? `<div class="media">
          <img src="${esc(w.poster)}" alt="" loading="lazy">
          <video data-loop="${esc(w.clip)}" poster="${esc(w.poster)}" muted loop playsinline preload="none" aria-hidden="true"></video>
        </div>`
            : `<button type="button" class="media" aria-label="Play ${esc(w.title)} with sound">
          <img src="${esc(w.poster)}" alt="" loading="lazy">
          <video data-loop="${esc(w.clip)}" poster="${esc(w.poster)}" muted loop playsinline preload="none"></video>
          <span class="sound" aria-hidden="true">Tap for sound</span>
        </button>`
        }
        <figcaption>
          <div class="meta">
            <h3 class="display">${esc(w.title)}</h3>
            <span class="tag">${esc(w.category)}</span>
          </div>
          <span class="sub">${esc(w.show)}</span>
          ${w.link ? `<a class="watch" href="${esc(w.link)}" target="_blank" rel="noopener">Watch full ↗</a>` : ""}
        </figcaption>
      </figure>`
      )
      .join("");

    $("#filters").addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      const cat = chip.dataset.cat;
      document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === chip));
      document.querySelectorAll(".piece:not(.pinned)").forEach((el) => {
        el.hidden = cat !== "All" && el.dataset.cat !== cat;
      });
    });

    // Pinned reel: swap the poster for a full player on tap
    const reelBtn = document.querySelector(".reel-play");
    if (reelBtn)
      reelBtn.addEventListener("click", () => {
        document.querySelectorAll(".piece video").forEach((o) => (o.muted = true));
        reelBtn.outerHTML =
          pin.youtubeId && S.embedYouTube !== false
            ? `<div class="media"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(pin.youtubeId)}?autoplay=1&rel=0&playsinline=1"
                title="${esc(pin.title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`
            : `<div class="media"><video src="${esc(pin.clip)}" poster="${esc(pin.poster)}" controls autoplay playsinline></video></div>`;
      });

    // Tap a piece: restart it with sound; tap again to mute. Only one plays aloud at a time.
    $("#work-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("button.media");
      if (!btn || btn.classList.contains("reel-play")) return;
      const v = btn.querySelector("video");
      if (!v.src) v.src = v.dataset.loop;
      const turnOn = v.muted;
      document.querySelectorAll(".piece video").forEach((o) => {
        o.muted = true;
        o.closest(".piece").classList.remove("loud");
      });
      if (turnOn) {
        v.muted = false;
        v.currentTime = 0;
        v.play().catch(() => {});
        btn.closest(".piece").classList.add("loud");
      }
    });



    $("#highlights-intro").textContent = S.highlightsIntro;
    $("#highlights-list").innerHTML = S.highlights
      .map(
        (h) => `
      <li>
        <p class="label">${esc(h.views)}</p>
        <h3 class="display">${esc(h.title)}</h3>
        <p>${esc(h.text)}</p>
      </li>`
      )
      .join("");

    $("#timeline").innerHTML = S.experience
      .map(
        (e) => `
      <li>
        <span class="yrs">${esc(e.years)}</span>
        <div><h3>${esc(e.title)}</h3><span class="org">${esc(e.org)}</span><p>${esc(e.note)}</p></div>
      </li>`
      )
      .join("");
    $("#edu").textContent = S.education;

    // doubled so the marquee loops seamlessly
    const names = S.shows.map((c) => `<span>${esc(c)}</span>`).join("");
    $("#clients").innerHTML = `<div class="clients-track" aria-label="Shows worked on: ${esc(S.shows.join(", "))}">${names}${names}</div>`;

    $("#contact").innerHTML = `
      <div class="buttons">${contactButtons()}</div>`;

    footer();
    autoplayLoops();
  }

  function renderProject() {
    const slug = new URLSearchParams(location.search).get("p");
    const i = Math.max(0, S.projects.findIndex((p) => p.slug === slug));
    const p = S.projects[i];
    const next = S.projects[(i + 1) % S.projects.length];
    document.title = `${p.title} | ${S.name}`;

    $("#project").innerHTML = `
      <section class="project-hero wrap">
        <a class="back" href="index.html#work">← All work</a>
        <h1 class="display">${esc(p.title)}</h1>
        ${p.full !== p.title ? `<p class="full">${esc(p.full)}</p>` : ""}
      </section>
      <div class="wrap">
        <div class="player" id="clip"></div>
        <div class="facts-row">
          <div><p class="label">Network</p><p>${esc(p.network)}</p></div>
          <div><p class="label">Years</p><p>${esc(p.years)}</p></div>
          <div><p class="label">Role</p><p>${esc(p.role)}</p></div>
        </div>
        <div class="case">
          <div><p class="label">01</p><h2 class="display">The brief</h2><p>${esc(p.brief)}</p></div>
          <div><p class="label">02</p><h2 class="display">What I did</h2><ul>${p.did.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>
          <div class="results">
            <p class="label">03</p><h2 class="display">Results</h2>
            <div class="stats">${p.results
              .map((r) => `<div class="stat"><p class="display">${esc(r.value)}</p><p class="label">${esc(r.label)}</p></div>`)
              .join("")}</div>
          </div>
        </div>
        <a class="next" href="project.html?p=${encodeURIComponent(next.slug)}">
          <p class="label">Next project</p>
          <p class="display">${esc(next.title)} →</p>
        </a>
      </div>`;

    player($("#clip"), { youtubeId: p.youtubeId, localFile: p.loop, poster: p.poster, label: `Play ${p.title}` });
    footer();
  }

  document.body.dataset.page === "project" ? renderProject() : renderHome();
})();
