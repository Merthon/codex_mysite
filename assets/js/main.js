(function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("pixel-theme");
  if (storedTheme) {
    root.dataset.theme = storedTheme;
  }

  const i18n = {
    zh: {
      "nav.home": "主页",
      "nav.notes": "笔记",
      "nav.stack": "技术栈",
      "nav.archive": "档案",
      "nav.about": "关于",
      "nav.guestbook": "留言",
      "home.eyebrow": "NOW LOADING / LEO MERTHON",
      "home.title": "用 AI 与后端工程，搭建可运行的未来。",
      "home.lead": "我是 Leo Merthon，程序员，关注人工智能、Golang 与后端系统。这里收集我的技术笔记、阅读片段和音乐能量。",
      "home.ctaNotes": "读取笔记",
      "home.ctaStack": "查看技术栈",
      "home.player": "PLAYER",
      "home.typing": "AI 工程 / Golang / 后端系统 / 摇滚与民谣",
      "home.recentEyebrow": "RECENT NOTES",
      "home.recentTitle": "最近更新",
      "home.liveEyebrow": "LIVE PANEL",
      "home.liveTitle": "当前运行状态",
      "home.localTime": "本地时间",
      "home.siteStatus": "系统状态：ONLINE",
      "home.rotator": "正在整理 AI 笔记...|Golang 服务保持运行。|后端地图已刷新。|阅读和音乐频道在线。",
      "notes.eyebrow": "NOTE INVENTORY",
      "notes.title": "笔记仓库",
      "notes.lead": "围绕 AI、Golang、后端系统，也收纳音乐、阅读与生活碎片。",
      "notes.searchPlaceholder": "输入关键词",
      "notes.empty": "没有匹配的笔记，换个关键词试试。",
      "filter.all": "全部",
      "tag.ai": "AI",
      "tag.life": "Life",
      "post.ai.title": "用 Go 给 AI 应用搭后端底座",
      "post.ai.excerpt": "从请求编排、流式响应到任务队列，整理 AI 应用背后的工程问题。",
      "post.life.title": "摇滚、民谣、阅读和一颗双鱼脑袋",
      "post.life.excerpt": "把音乐、书和性格关键词放在一起，看它们如何影响写代码的人。",
      "post.backend.title": "后端系统的像素级整理",
      "post.backend.excerpt": "把服务拆成接口、数据、队列、观测和部署，每一格都要能解释清楚。",
      "stack.eyebrow": "SKILL TREE",
      "stack.title": "技术栈地图",
      "stack.lead": "主要关注 AI 应用工程、Golang 服务端、后端架构、数据流与系统可观测性。",
      "stack.ai.title": "人工智能工程",
      "stack.ai.body": "关注 LLM 应用、RAG、Agent 工作流、流式响应、提示词工程和模型服务接入。",
      "stack.go.body": "用 Go 构建清晰、稳定、可维护的后端服务，重视并发、接口设计和工程边界。",
      "stack.backend.title": "后端系统",
      "stack.backend.body": "接口、数据库、缓存、队列、任务调度、鉴权、日志和部署链路都在关注范围里。",
      "stack.ops.title": "工程化",
      "stack.ops.body": "喜欢把复杂系统拆成可观察、可测试、可复用的小模块。",
      "archive.eyebrow": "SAVE FILES",
      "archive.title": "时间线档案",
      "archive.lead": "每一条记录都是一个存档点。滚动页面时，进度条会记录你读到了哪里。",
      "archive.item1": "重新整理站点身份，把 AI、Golang 和后端工程放到第一层。",
      "archive.item2": "写下音乐、阅读、双鱼座与 INFJ 对个人节奏的影响。",
      "archive.item3": "把后端系统按像素格拆开，重新定义每一块的责任。",
      "archive.item4Title": "第一张草图",
      "archive.item4": "把个人头像、技术方向和像素风界面放进同一张设计草图里。",
      "about.eyebrow": "ABOUT PLAYER",
      "about.title": "关于 Leo Merthon",
      "about.card": "程序员，关注 AI、Golang 与后端工程，也把音乐、阅读和性格关键词放进日常坐标。",
      "about.body": "我主要写 AI 应用工程、Golang、后端系统，也记录阅读、音乐和生活里的感受。技术是主线，个人气味也要留在页面里。",
      "about.skillLabel": "技能",
      "about.musicLabel": "音乐",
      "about.music": "摇滚 / 民谣 / 流行",
      "about.identityLabel": "关键词",
      "about.identity": "阅读 / 双鱼座 / INFJ",
      "about.structureTitle": "站点结构",
      "about.structure": "当前包含主页、笔记、技术栈、档案、关于、留言板和三篇内容页。后续可以继续扩展项目、长文和作品。",
      "guest.title": "本地留言板",
      "guest.lead": "留言会保存在当前浏览器里，适合做个人记录或演示互动。",
      "guest.submit": "发送留言",
      "guest.clear": "清空本地留言",
      "guest.empty": "还没有留言，来当第一个存档的人。",
      "guest.cleared": "留言已经清空。",
      "form.name": "昵称",
      "form.message": "留言",
      "form.comment": "评论",
      "form.namePlaceholder": "你的名字",
      "form.messagePlaceholder": "写点什么吧",
      "form.commentPlaceholder": "这篇笔记让你想到什么？",
      "comments.title": "本地评论",
      "comments.submit": "保存评论",
      "comments.empty": "这篇笔记还没有本地评论。",
      "footer.backHome": "返回主页",
      "footer.readNotes": "浏览笔记",
      "footer.leaveMessage": "给我留言",
      "footer.backNotes": "返回笔记列表",
      "article.ai.eyebrow": "NOTE / AI BACKEND",
      "article.ai.meta": "2026.05.16 · AI · Golang · Backend",
      "article.ai.p1": "AI 应用真正上线以后，模型调用只是其中一格。请求编排、上下文管理、流式输出、重试、限流和日志，才是后端需要长期守住的地方。",
      "article.ai.h1": "从接口开始划边界",
      "article.ai.p2": "我喜欢先把用户请求、模型请求、工具调用和结果聚合拆开。Go 的接口和结构体很适合表达这些边界，代码读起来也更像系统地图。",
      "article.ai.h2": "流式响应不是装饰",
      "article.ai.p3": "对于 AI 产品，流式输出直接影响体验。后端需要处理取消、超时、错误片段和前端断连，不能只把模型返回原样转发。",
      "article.ai.h3": "观测能力要提前接入",
      "article.ai.p4": "Prompt、Token、延迟、命中缓存、工具调用链路都应该能被追踪。看不见的 AI 系统，很快就会变成难以维护的黑盒。",
      "article.life.eyebrow": "NOTE / LIFE SIGNAL",
      "article.life.meta": "2026.05.10 · Music · Reading · INFJ",
      "article.life.p1": "写代码之外，我很依赖声音和文字。摇滚给我推进感，民谣让我慢下来，流行音乐提醒我别把表达做得太晦涩。",
      "article.life.h1": "阅读像后台任务",
      "article.life.p2": "阅读不一定马上产出什么，但它会悄悄改写判断力。很多工程选择，其实来自长期阅读形成的秩序感。",
      "article.life.h2": "双鱼座与 INFJ",
      "article.life.p3": "如果要用关键词描述自己，我会保留双鱼座和 INFJ。前者给想象力，后者让我在系统、关系和意义之间来回校准。",
      "article.backend.eyebrow": "NOTE / BACKEND MAP",
      "article.backend.meta": "2026.05.02 · Backend · Golang",
      "article.backend.p1": "我理解后端系统时，会把它拆成一个个像素块：接口、数据、缓存、队列、任务、鉴权、观测、部署。每一块都要有清楚边界。",
      "article.backend.h1": "接口是地图入口",
      "article.backend.p2": "好的接口能让调用方知道自己站在哪里，也能让服务端保持演进空间。命名、错误码和版本策略都不是小事。",
      "article.backend.h2": "系统需要可观察",
      "article.backend.p3": "日志、指标、链路追踪和告警，是后端工程的仪表盘。没有仪表盘的系统，跑得越快越危险。"
    },
    en: {
      "nav.home": "Home",
      "nav.notes": "Notes",
      "nav.stack": "Stack",
      "nav.archive": "Archive",
      "nav.about": "About",
      "nav.guestbook": "Guestbook",
      "home.eyebrow": "NOW LOADING / LEO MERTHON",
      "home.title": "Building runnable futures with AI and backend systems.",
      "home.lead": "I am Leo Merthon, a programmer focused on artificial intelligence, Golang, and backend engineering. This site collects technical notes, reading fragments, and music energy.",
      "home.ctaNotes": "Read Notes",
      "home.ctaStack": "View Stack",
      "home.player": "PLAYER",
      "home.typing": "AI Engineering / Golang / Backend Systems / Rock & Folk",
      "home.recentEyebrow": "RECENT NOTES",
      "home.recentTitle": "Recent Updates",
      "home.liveEyebrow": "LIVE PANEL",
      "home.liveTitle": "Current Runtime",
      "home.localTime": "Local time",
      "home.siteStatus": "System status: ONLINE",
      "home.rotator": "Organizing AI notes...|Golang service running.|Backend map refreshed.|Reading and music channels online.",
      "notes.eyebrow": "NOTE INVENTORY",
      "notes.title": "Notes Inventory",
      "notes.lead": "AI, Golang, backend systems, plus music, reading, and life fragments.",
      "notes.searchPlaceholder": "Search keyword",
      "notes.empty": "No matching notes. Try another keyword.",
      "filter.all": "All",
      "tag.ai": "AI",
      "tag.life": "Life",
      "post.ai.title": "Building the Backend Base for AI Apps with Go",
      "post.ai.excerpt": "From request orchestration and streaming responses to task queues, these are the engineering problems behind AI apps.",
      "post.life.title": "Rock, Folk, Reading, and a Pisces Mind",
      "post.life.excerpt": "How music, books, and personality keywords shape the person writing the code.",
      "post.backend.title": "Pixel-Level Notes on Backend Systems",
      "post.backend.excerpt": "Split services into APIs, data, queues, observability, and deployment. Every tile should have a reason.",
      "stack.eyebrow": "SKILL TREE",
      "stack.title": "Stack Map",
      "stack.lead": "Focused on AI application engineering, Golang services, backend architecture, data flow, and observability.",
      "stack.ai.title": "AI Engineering",
      "stack.ai.body": "LLM apps, RAG, agent workflows, streaming responses, prompt engineering, and model service integration.",
      "stack.go.body": "Building clear, stable, maintainable backend services with Go, with attention to concurrency, interfaces, and boundaries.",
      "stack.backend.title": "Backend Systems",
      "stack.backend.body": "APIs, databases, caches, queues, schedulers, auth, logging, deployment, and the links between them.",
      "stack.ops.title": "Engineering Practice",
      "stack.ops.body": "Breaking complex systems into observable, testable, reusable modules.",
      "archive.eyebrow": "SAVE FILES",
      "archive.title": "Timeline Archive",
      "archive.lead": "Each entry is a save point. The scroll bar records how far you have read.",
      "archive.item1": "Reframed the site around AI, Golang, and backend engineering.",
      "archive.item2": "Wrote about music, reading, Pisces, and INFJ as part of personal rhythm.",
      "archive.item3": "Split backend systems into pixel-like responsibility blocks.",
      "archive.item4Title": "First Sketch",
      "archive.item4": "Put the avatar, technical direction, and pixel interface into one design sketch.",
      "about.eyebrow": "ABOUT PLAYER",
      "about.title": "About Leo Merthon",
      "about.card": "Programmer focused on AI, Golang, and backend engineering, with music, reading, and personality keywords in the daily map.",
      "about.body": "I mainly write about AI application engineering, Golang, and backend systems, while also keeping notes on reading, music, and life. Technology is the main line, but the page should still feel personal.",
      "about.skillLabel": "Skills",
      "about.musicLabel": "Music",
      "about.music": "Rock / Folk / Pop",
      "about.identityLabel": "Keywords",
      "about.identity": "Reading / Pisces / INFJ",
      "about.structureTitle": "Site Structure",
      "about.structure": "The site now includes home, notes, stack, archive, about, guestbook, and three content pages. Projects and writings can keep growing from here.",
      "guest.title": "Local Guestbook",
      "guest.lead": "Messages are stored in this browser, useful for personal notes or interaction demos.",
      "guest.submit": "Send Message",
      "guest.clear": "Clear Local Messages",
      "guest.empty": "No messages yet. Be the first save point.",
      "guest.cleared": "Messages cleared.",
      "form.name": "Name",
      "form.message": "Message",
      "form.comment": "Comment",
      "form.namePlaceholder": "Your name",
      "form.messagePlaceholder": "Write something",
      "form.commentPlaceholder": "What did this note make you think of?",
      "comments.title": "Local Comments",
      "comments.submit": "Save Comment",
      "comments.empty": "No local comments on this note yet.",
      "footer.backHome": "Back Home",
      "footer.readNotes": "Browse Notes",
      "footer.leaveMessage": "Leave a Message",
      "footer.backNotes": "Back to Notes",
      "article.ai.eyebrow": "NOTE / AI BACKEND",
      "article.ai.meta": "2026.05.16 · AI · Golang · Backend",
      "article.ai.p1": "Once an AI app goes live, model calling is only one tile. Request orchestration, context management, streaming output, retries, rate limits, and logs are the backend parts that must hold over time.",
      "article.ai.h1": "Start with clear boundaries",
      "article.ai.p2": "I like separating user requests, model requests, tool calls, and result aggregation. Go interfaces and structs are good at making those boundaries readable.",
      "article.ai.h2": "Streaming is not decoration",
      "article.ai.p3": "For AI products, streaming directly shapes the experience. The backend must handle cancellation, timeouts, error chunks, and broken frontend connections.",
      "article.ai.h3": "Observability comes early",
      "article.ai.p4": "Prompts, tokens, latency, cache hits, and tool-call chains should be traceable. An invisible AI system quickly becomes a black box.",
      "article.life.eyebrow": "NOTE / LIFE SIGNAL",
      "article.life.meta": "2026.05.10 · Music · Reading · INFJ",
      "article.life.p1": "Outside code, I rely on sound and text. Rock gives me momentum, folk slows me down, and pop reminds me not to make expression too obscure.",
      "article.life.h1": "Reading as a background task",
      "article.life.p2": "Reading does not always produce something immediately, but it quietly rewrites judgment. Many engineering choices come from that long-running sense of order.",
      "article.life.h2": "Pisces and INFJ",
      "article.life.p3": "If I had to describe myself with keywords, I would keep Pisces and INFJ. One gives imagination; the other keeps calibrating systems, relationships, and meaning.",
      "article.backend.eyebrow": "NOTE / BACKEND MAP",
      "article.backend.meta": "2026.05.02 · Backend · Golang",
      "article.backend.p1": "When I think about backend systems, I split them into pixel blocks: APIs, data, cache, queues, jobs, auth, observability, and deployment. Every block needs a clear boundary.",
      "article.backend.h1": "APIs are map entrances",
      "article.backend.p2": "A good API tells callers where they are and gives the service room to evolve. Naming, error codes, and versioning are never small details.",
      "article.backend.h2": "Systems need instruments",
      "article.backend.p3": "Logs, metrics, traces, and alerts are the dashboard of backend engineering. A system without instruments becomes more dangerous as it gets faster."
    }
  };

  const titleByPage = {
    home: { zh: "Leo Merthon | AI 后端工程师", en: "Leo Merthon | AI Backend Engineer" },
    posts: { zh: "笔记 | Leo Merthon", en: "Notes | Leo Merthon" },
    stack: { zh: "技术栈 | Leo Merthon", en: "Stack | Leo Merthon" },
    archive: { zh: "档案 | Leo Merthon", en: "Archive | Leo Merthon" },
    about: { zh: "关于 | Leo Merthon", en: "About | Leo Merthon" },
    guestbook: { zh: "留言 | Leo Merthon", en: "Guestbook | Leo Merthon" },
    article: { zh: document.title, en: document.title }
  };

  const titleByArticle = {
    "pixel-room": {
      zh: "用 Go 给 AI 应用搭后端底座 | Leo Merthon",
      en: "Building the Backend Base for AI Apps with Go | Leo Merthon"
    },
    "desk-notes": {
      zh: "摇滚、民谣、阅读和一颗双鱼脑袋 | Leo Merthon",
      en: "Rock, Folk, Reading, and a Pisces Mind | Leo Merthon"
    },
    "static-fun": {
      zh: "后端系统的像素级整理 | Leo Merthon",
      en: "Pixel-Level Notes on Backend Systems | Leo Merthon"
    }
  };

  let lang = localStorage.getItem("leo-lang") || "zh";
  const t = (key) => i18n[lang]?.[key] || i18n.zh[key] || key;

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

  const applyLanguage = () => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-i18n-typing]").forEach((node) => {
      node.dataset.typing = t(node.dataset.i18nTyping);
    });
    const rotatorNode = document.querySelector("[data-i18n-rotator]");
    if (rotatorNode) {
      rotatorNode.dataset.lines = t(rotatorNode.dataset.i18nRotator);
      rotatorNode.textContent = rotatorNode.dataset.lines.split("|")[0];
    }
    const langButton = document.querySelector("[data-lang-toggle]");
    if (langButton) {
      langButton.textContent = lang === "zh" ? "EN" : "中";
    }
    const articleTitle = titleByArticle[document.body.dataset.articleId];
    if (articleTitle) {
      document.title = articleTitle[lang];
    } else if (titleByPage[pageName]) {
      document.title = titleByPage[pageName][lang];
    }
  };

  document.querySelector("[data-lang-toggle]")?.addEventListener("click", () => {
    lang = lang === "zh" ? "en" : "zh";
    localStorage.setItem("leo-lang", lang);
    applyLanguage();
    refreshStoredLists();
  });

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
    let index = 0;
    setInterval(() => {
      const lines = (rotator.dataset.lines || t("home.rotator")).split("|");
      index = (index + 1) % lines.length;
      rotator.textContent = lines[index];
    }, 2400);
  }

  const typing = document.querySelector("[data-typing]");
  if (typing) {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const type = () => {
      const words = typing.dataset.typing.split(" / ");
      if (wordIndex >= words.length) wordIndex = 0;
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
  const articleId = document.body.dataset.articleId;
  const commentForm = document.querySelector("[data-comment-form]");
  const commentList = document.querySelector("[data-comment-list]");
  const commentKey = articleId ? `pixel-comments-${articleId}` : "";

  const refreshStoredLists = () => {
    renderMessages(guestbookList, getStoredMessages(guestbookKey), t("guest.empty"));
    if (commentKey) {
      renderMessages(commentList, getStoredMessages(commentKey), t("comments.empty"));
    }
  };

  applyLanguage();
  refreshStoredLists();

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
      renderMessages(guestbookList, saveMessage(guestbookKey, item), t("guest.empty"));
      guestbookForm.reset();
    });
  }

  const clearMessages = document.querySelector("[data-clear-messages]");
  if (clearMessages) {
    clearMessages.addEventListener("click", () => {
      localStorage.removeItem(guestbookKey);
      renderMessages(guestbookList, [], t("guest.cleared"));
    });
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
      renderMessages(commentList, saveMessage(commentKey, item), t("comments.empty"));
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
