(function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("pixel-theme");
  if (storedTheme) {
    root.dataset.theme = storedTheme;
  }

  const pageName = document.body.dataset.page;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    const isHome = pageName === "home" && href === "index.html";
    const isPosts = (pageName === "posts" || pageName === "article") && href === "posts.html";
    if (isHome || isPosts || href === `${pageName}.html`) {
      link.classList.add("is-active");
    }
  });

  const themeButton = document.querySelector("[data-theme-toggle]");
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "" : "light";
      if (next) {
        root.dataset.theme = next;
        localStorage.setItem("pixel-theme", next);
      } else {
        delete root.dataset.theme;
        localStorage.removeItem("pixel-theme");
      }
    });
  }

  const clock = document.querySelector("[data-clock]");
  if (clock) {
    const tick = () => {
      clock.textContent = new Intl.DateTimeFormat("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(new Date());
    };
    tick();
    setInterval(tick, 1000);
  }

  const energy = document.querySelector("[data-energy]");
  if (energy) {
    setInterval(() => {
      const value = 78 + Math.floor(Math.random() * 18);
      energy.textContent = value;
    }, 2600);
  }

  const rotator = document.querySelector("[data-rotator]");
  if (rotator) {
    const lines = ["正在整理灵感碎片...", "已同步今日心情像素。", "文章缓存完成。", "留言频道保持开启。"];
    let index = 0;
    setInterval(() => {
      index = (index + 1) % lines.length;
      rotator.textContent = lines[index];
    }, 2400);
  }

  const typing = document.querySelector("[data-typing]");
  if (typing) {
    const words = typing.dataset.typing.split(" / ");
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const type = () => {
      const word = words[wordIndex];
      typing.textContent = word.slice(0, charIndex);
      if (!deleting && charIndex < word.length) {
        charIndex += 1;
      } else if (deleting && charIndex > 0) {
        charIndex -= 1;
      } else {
        deleting = !deleting;
        if (!deleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      setTimeout(type, deleting ? 55 : 120);
    };
    type();
  }

  const progress = document.querySelector("[data-progress]");
  if (progress) {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
  }

  const searchInput = document.querySelector("[data-post-search]");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const postCards = document.querySelectorAll("[data-post-container] .post-card");
  const emptyState = document.querySelector("[data-empty-state]");
  let activeFilter = "all";

  const applyPostFilter = () => {
    const query = (searchInput?.value || "").trim().toLowerCase();
    let shown = 0;
    postCards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const title = card.dataset.title || "";
      const text = card.textContent.toLowerCase();
      const matchesTag = activeFilter === "all" || tags.includes(activeFilter);
      const matchesQuery = !query || title.toLowerCase().includes(query) || text.includes(query);
      const visible = matchesTag && matchesQuery;
      card.hidden = !visible;
      shown += visible ? 1 : 0;
    });
    if (emptyState) {
      emptyState.hidden = shown !== 0;
    }
  };

  if (searchInput) {
    searchInput.addEventListener("input", applyPostFilter);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      applyPostFilter();
    });
  });

  const escapeHtml = (value) => value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const renderMessages = (list, messages, emptyText) => {
    if (!list) return;
    if (messages.length === 0) {
      list.innerHTML = `<div class="message-item"><p>${emptyText}</p></div>`;
      return;
    }
    list.innerHTML = messages.map((item) => `
      <article class="message-item">
        <strong>${escapeHtml(item.name)}</strong>
        <time>${escapeHtml(item.time)}</time>
        <p>${escapeHtml(item.message)}</p>
      </article>
    `).join("");
  };

  const getStoredMessages = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      return [];
    }
  };

  const saveMessage = (key, item) => {
    const messages = getStoredMessages(key);
    messages.unshift(item);
    localStorage.setItem(key, JSON.stringify(messages.slice(0, 20)));
    return getStoredMessages(key);
  };

  const guestbookForm = document.querySelector("[data-guestbook-form]");
  const guestbookList = document.querySelector("[data-message-list]");
  const guestbookKey = "pixel-guestbook";
  renderMessages(guestbookList, getStoredMessages(guestbookKey), "还没有留言，来当第一个存档的人。");

  if (guestbookForm) {
    guestbookForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(guestbookForm);
      const item = {
        name: String(data.get("name")).trim(),
        message: String(data.get("message")).trim(),
        time: new Intl.DateTimeFormat("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        }).format(new Date())
      };
      if (!item.name || !item.message) return;
      renderMessages(guestbookList, saveMessage(guestbookKey, item), "还没有留言，来当第一个存档的人。");
      guestbookForm.reset();
    });
  }

  const clearMessages = document.querySelector("[data-clear-messages]");
  if (clearMessages) {
    clearMessages.addEventListener("click", () => {
      localStorage.removeItem(guestbookKey);
      renderMessages(guestbookList, [], "留言已经清空。");
    });
  }

  const articleId = document.body.dataset.articleId;
  const commentForm = document.querySelector("[data-comment-form]");
  const commentList = document.querySelector("[data-comment-list]");
  const commentKey = articleId ? `pixel-comments-${articleId}` : "";
  if (commentKey) {
    renderMessages(commentList, getStoredMessages(commentKey), "这篇文章还没有本地评论。");
  }

  if (commentForm && commentKey) {
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(commentForm);
      const item = {
        name: String(data.get("name")).trim(),
        message: String(data.get("message")).trim(),
        time: new Intl.DateTimeFormat("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        }).format(new Date())
      };
      if (!item.name || !item.message) return;
      renderMessages(commentList, saveMessage(commentKey, item), "这篇文章还没有本地评论。");
      commentForm.reset();
    });
  }

  let sparkReady = true;
  window.addEventListener("pointermove", (event) => {
    if (!sparkReady || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    sparkReady = false;
    const spark = document.createElement("span");
    spark.className = "pixel-spark";
    spark.style.left = `${event.clientX}px`;
    spark.style.top = `${event.clientY}px`;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 640);
    setTimeout(() => {
      sparkReady = true;
    }, 90);
  }, { passive: true });
}());
