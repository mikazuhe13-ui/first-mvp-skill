// FirstMVPSkill — AI Action Plan Generator
// Bilingual inline display (中文 primary + English secondary)
// Zero dependencies, zero API keys, zero backend

(function () {
  "use strict";

  var goalInput = document.getElementById("goalInput");
  var generateBtn = document.getElementById("generateBtn");
  var copyAllBtn = document.getElementById("copyAllBtn");
  var copyCommandBtn = document.getElementById("copyCommandBtn");
  var resultEl = document.getElementById("result");
  var btnText = generateBtn.querySelector(".btn-text");
  var btnLoading = generateBtn.querySelector(".btn-loading");

  generateBtn.addEventListener("click", generatePlan);
  goalInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") generatePlan();
  });
  copyAllBtn.addEventListener("click", function () { copyResult(this); });
  copyCommandBtn.addEventListener("click", function () { copyCommand(this); });

  var chips = document.querySelectorAll(".chip");
  for (var i = 0; i < chips.length; i++) {
    chips[i].addEventListener("click", function () {
      goalInput.value = this.getAttribute("data-goal");
      generatePlan();
    });
  }

  function generatePlan() {
    var goal = goalInput.value.trim();
    if (!goal) {
      goalInput.classList.add("shake");
      goalInput.focus();
      setTimeout(function () { goalInput.classList.remove("shake"); }, 400);
      return;
    }
    btnText.classList.add("hidden");
    btnLoading.classList.remove("hidden");
    resultEl.classList.add("hidden");
    resultEl.classList.remove("visible");
    setTimeout(function () {
      var data = buildAll(goal);
      showResult(data);
      btnText.classList.remove("hidden");
      btnLoading.classList.add("hidden");
    }, 350);
  }

  // Helper: create a bilingual list item
  function biItem(parent, zh, en) {
    var li = document.createElement("li");
    li.textContent = zh;
    var span = document.createElement("span");
    span.className = "bi-en";
    span.textContent = en;
    li.appendChild(span);
    parent.appendChild(li);
  }

  function showResult(data) {
    // 1. Goal
    document.getElementById("goalDisplay").textContent = data.goal;

    // 2. Tiny MVP
    var mvpList = document.getElementById("mvpList");
    mvpList.innerHTML = "";
    for (var i = 0; i < data.mvp.zh.length; i++) {
      biItem(mvpList, data.mvp.zh[i], data.mvp.en[i]);
    }

    // 3. Not in V1
    var notV1List = document.getElementById("notV1List");
    notV1List.innerHTML = "";
    for (var j = 0; j < data.notV1.zh.length; j++) {
      biItem(notV1List, data.notV1.zh[j], data.notV1.en[j]);
    }

    // 3.5 Minimal Stack
    var stackContent = document.getElementById("stackContent");
    stackContent.innerHTML = "";
    for (var s = 0; s < data.stack.zh.length; s++) {
      var item = document.createElement("div");
      item.className = "stack-item";
      var name = document.createElement("div");
      name.className = "stack-name";
      name.textContent = data.stack.zh[s].name;
      var role = document.createElement("div");
      role.className = "stack-role";
      role.textContent = data.stack.zh[s].role;
      var roleEn = document.createElement("div");
      roleEn.className = "bi-en";
      roleEn.style.paddingLeft = "0";
      roleEn.textContent = data.stack.en[s].role;
      item.appendChild(name);
      item.appendChild(role);
      item.appendChild(roleEn);
      stackContent.appendChild(item);
    }

    // 4. 7-Day Plan
    var planContent = document.getElementById("planContent");
    planContent.innerHTML = "";
    for (var k = 0; k < data.days.zh.length; k++) {
      var dayDiv = document.createElement("div");
      dayDiv.className = "day";
      var label = document.createElement("span");
      label.className = "day-label";
      label.textContent = "Day " + (k + 1);
      dayDiv.appendChild(label);
      dayDiv.appendChild(document.createTextNode(" " + data.days.zh[k]));
      var dayEn = document.createElement("span");
      dayEn.className = "bi-en";
      dayEn.textContent = data.days.en[k];
      dayDiv.appendChild(dayEn);
      planContent.appendChild(dayDiv);
    }

    // 5. Day 1 Command (show zh + en inline)
    document.getElementById("day1Command").textContent = data.day1Command.zh + "\n\n────────────────────\n\n" + data.day1Command.en;

    // 6. Acceptance Gate
    var gateList = document.getElementById("gateList");
    gateList.innerHTML = "";
    for (var g = 0; g < data.gate.zh.length; g++) {
      biItem(gateList, data.gate.zh[g], data.gate.en[g]);
    }

    // 7. Next Action
    var nextEl = document.getElementById("nextAction");
    nextEl.textContent = data.nextAction.zh;
    var nextEn = document.createElement("span");
    nextEn.className = "bi-en";
    nextEn.textContent = data.nextAction.en;
    nextEl.appendChild(nextEn);

    // Show & animate
    resultEl.classList.remove("hidden");
    void resultEl.offsetWidth;
    resultEl.classList.add("visible");

    var sections = resultEl.querySelectorAll(".section");
    for (var si = 0; si < sections.length; si++) {
      (function (el, delay) {
        setTimeout(function () { el.classList.add("visible"); }, delay);
      })(sections[si], 60 * si + 150);
    }

    var dayEls = planContent.querySelectorAll(".day");
    for (var d = 0; d < dayEls.length; d++) {
      (function (el, delay) {
        setTimeout(function () { el.classList.add("visible"); }, delay);
      })(dayEls[d], 50 * d + 500);
    }

    resultEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ── Build all ──

  function buildAll(goal) {
    var cat = detectCategory(goal);
    var data = generators[cat](goal);
    data.goal = goal;
    return data;
  }

  function detectCategory(goal) {
    var g = goal.toLowerCase();
    if (/学|习|英语|日语|考试|背单词|study|learn|笔记|复习|quiz|助手|assistant|question/.test(g)) return "study";
    if (/健身|运动|跑步|减[肥重]|锻炼|gym|fitness|workout|习惯|打卡|habit|tracker/.test(g)) return "habit";
    if (/写|文章|公众号|博客|blog|write|content|创作|文案|post/.test(g)) return "writing";
    if (/编程|代码|cursor|codex|claude|开发|app|tool|工具|代码|code|知识库|检索|chrome|插件|extension|search/.test(g)) return "coding";
    if (/画画|设计|design|illustrat|sketch|draw|海报|logo/.test(g)) return "design";
    return "general";
  }

  // ── Bilingual generators ──
  // B(zh, en) creates { zh: ..., en: ... }

  function B(zh, en) { return { zh: zh, en: en }; }

  var generators = {

    study: function () {
      return {
        mvp: B(
          ["上传笔记或粘贴文本", "AI 根据笔记生成 3 道练习题", "答题后显示分数和正确答案"],
          ["Upload or paste notes", "AI generates 3 quiz questions from notes", "Show score and correct answers after answering"]
        ),
        notV1: B(
          ["用户登录 / 注册 — 先让工具能用", "付费 / 会员 — 先验证有人需要", "移动端 App — 先做网页版", "间隔重复算法 — Day 1 不需要", "社交分享 / 排行榜 — 先自己用"],
          ["Login — make it work first", "Payment — validate demand first", "Mobile app — start with web", "Spaced repetition — not needed on Day 1", "Social / leaderboard — use it yourself first"]
        ),
        stack: B(
          [{ name: "Streamlit", role: "前端 + 后端，一个文件搞定" }, { name: "Python", role: "编写逻辑" }, { name: "Claude API", role: "生成练习题（Day 3 接入）" }, { name: "浏览器", role: "测试和使用" }],
          [{ name: "Streamlit", role: "Frontend + backend in one file" }, { name: "Python", role: "Write logic" }, { name: "Claude API", role: "Generate questions (connect Day 3)" }, { name: "Browser", role: "Test and use" }]
        ),
        days: B(
          ["创建 app.py，搭建界面：标题 + 输入笔记 + 生成按钮", "实现 mock 逻辑：点击按钮显示 3 道预设选择题", "接入 AI API，用笔记内容生成真实练习题", "实现答题交互：选择 + 提交 + 显示分数", "整合测试，修复 Bug，确保全流程跑通", "优化界面：加侧边栏说明、loading 状态", "部署到 Streamlit Cloud，分享给朋友试用"],
          ["Create app.py: title + note input + generate button", "Mock logic: show 3 preset questions on click", "Connect AI API to generate real questions from notes", "Build quiz: select + submit + score display", "Integration test, fix bugs, verify full flow", "Polish UI: sidebar, loading state", "Deploy to Streamlit Cloud, share with friends"]
        ),
        day1Command: B(
          "请只完成 Day 1。创建 app.py，用 Streamlit 搭建最小界面。\n\n要求：\n1. 页面标题：AI 学习助手\n2. st.text_area(\"粘贴你的笔记\")\n3. st.button(\"生成练习题\")\n4. 点击后用 st.write 显示 3 道 mock 选择题\n5. 不要接入 AI API，不要加登录\n\n运行：pip install streamlit && streamlit run app.py\n\n验收：浏览器打开后能看到标题、输入框和按钮，点击按钮能看到 3 道题。",
          "Only complete Day 1. Create app.py with Streamlit.\n\nRequirements:\n1. Title: AI Study Assistant\n2. st.text_area(\"Paste your notes\")\n3. st.button(\"Generate quiz\")\n4. On click, show 3 mock questions with st.write\n5. No AI API, no login\n\nRun: pip install streamlit && streamlit run app.py\n\nAcceptance: browser shows title, input, button; clicking shows 3 questions."
        ),
        gate: B(
          ["浏览器打开 http://localhost:8501 能看到页面", "输入框可以粘贴笔记文本", "点击「生成练习题」后显示 3 道题", "整个流程不需要 API key"],
          ["Browser at localhost:8501 shows the page", "Input accepts pasted notes", "Clicking 'Generate quiz' shows 3 questions", "Full flow works without API key"]
        ),
        nextAction: B(
          "把 Day 1 指令复制到你的 AI Agent（Claude Code、Cursor、ChatGPT 都可以）。今天只做 Day 1。",
          "Copy the Day 1 command into your AI Agent (Claude Code, Cursor, ChatGPT — any works). Only do Day 1 today."
        )
      };
    },

    habit: function () {
      return {
        mvp: B(
          ["一个打卡按钮（点击记录今天完成）", "显示连续打卡天数", "刷新页面后数据不丢失"],
          ["A check-in button (click to mark today done)", "Show consecutive days count", "Data persists after refresh"]
        ),
        notV1: B(
          ["用户登录 / 注册 — 先自己用", "社交 / 好友系统 — 先一个人坚持", "数据统计图表 — 先看天数", "提醒推送 — 先靠自己记", "多设备同步 — 先用一个浏览器"],
          ["Login — use it yourself first", "Social / friends — stick with it alone first", "Charts — days count is enough", "Push notifications — remember it yourself first", "Multi-device sync — one browser first"]
        ),
        stack: B(
          [{ name: "HTML + CSS + JS", role: "一个文件，零依赖" }, { name: "localStorage", role: "浏览器本地存储" }, { name: "浏览器", role: "直接打开使用" }],
          [{ name: "HTML + CSS + JS", role: "One file, zero dependencies" }, { name: "localStorage", role: "Local browser storage" }, { name: "Browser", role: "Open directly" }]
        ),
        days: B(
          ["创建 index.html：标题 + 打卡按钮 + 连续天数", "实现点击打卡、记录日期、计算连续天数", "用 localStorage 持久化，刷新不丢失", "添加今日状态显示（已打卡 / 未打卡）", "添加最近 7 天记录展示", "优化界面：颜色状态、布局调整", "部署到 GitHub Pages，手机打开使用"],
          ["Create index.html: title + button + streak counter", "Click-to-check-in, date recording, streak calc", "localStorage persistence, survive refresh", "Add today status (done / not done)", "Add last 7 days history", "Polish UI: color states, layout", "Deploy to GitHub Pages, use on phone"]
        ),
        day1Command: B(
          "请只完成 Day 1。创建 index.html，用纯 HTML + CSS + JS 搭建最小界面。\n\n要求：\n1. 页面标题：每日打卡\n2. 一个大按钮「打卡」\n3. 显示「连续打卡：X 天」\n4. 用 localStorage 存储打卡日期\n5. 刷新后数据不丢失\n\n运行：直接用浏览器打开 index.html\n\n验收：打开页面能点打卡，刷新后数据还在。",
          "Only complete Day 1. Create index.html with pure HTML + CSS + JS.\n\nRequirements:\n1. Title: Daily Habit Tracker\n2. A big 'Check In' button\n3. Show 'Streak: X days'\n4. Use localStorage for dates\n5. Data persists after refresh\n\nRun: open index.html in browser\n\nAcceptance: click button to check in, refresh and data remains."
        ),
        gate: B(
          ["浏览器打开 index.html 能看到页面", "点击打卡按钮后显示已打卡", "刷新后连续天数保持不变", "不需要服务器或 API key"],
          ["Opening index.html shows the page", "Clicking check-in shows 'done'", "Streak persists after refresh", "No server or API key needed"]
        ),
        nextAction: B(
          "把 Day 1 指令复制到你的 AI Agent。浏览器打开 index.html 测试。今天只做 Day 1。",
          "Copy the Day 1 command into your AI Agent. Open index.html to test. Only do Day 1 today."
        )
      };
    },

    writing: function () {
      return {
        mvp: B(
          ["输入文章主题或关键词", "AI 生成文章大纲（标题 + 3-5 个要点）", "一键复制大纲到剪贴板"],
          ["Enter article topic or keywords", "AI generates outline (title + 3-5 points)", "One-click copy outline to clipboard"]
        ),
        notV1: B(
          ["多平台自动发布 — 先手动发", "图片 / 排版美化 — 先纯文本", "SEO 优化 — 先写内容", "团队协作 — 先自己写", "数据分析 — 先发出去再说"],
          ["Auto-publish — manual first", "Images / formatting — plain text first", "SEO — write content first", "Team collab — solo first", "Analytics — ship it first"]
        ),
        stack: B(
          [{ name: "Streamlit", role: "前端 + 后端，一个文件" }, { name: "Python", role: "编写逻辑" }, { name: "Claude API", role: "生成大纲和内容" }, { name: "浏览器", role: "测试和使用" }],
          [{ name: "Streamlit", role: "Frontend + backend in one file" }, { name: "Python", role: "Write logic" }, { name: "Claude API", role: "Generate outlines and content" }, { name: "Browser", role: "Test and use" }]
        ),
        days: B(
          ["创建 app.py：标题 + 主题输入 + 生成按钮", "实现 mock 大纲：点击显示预设模板", "接入 AI API，根据主题生成真实大纲", "添加文章正文生成功能", "添加一键复制功能", "优化提示词，提升生成质量", "部署到 Streamlit Cloud，自己先写一篇"],
          ["Create app.py: title + topic input + generate button", "Mock outline: show preset on click", "Connect AI API for real outlines", "Add article body generation", "Add one-click copy", "Optimize prompts for quality", "Deploy to Streamlit Cloud, write your first article"]
        ),
        day1Command: B(
          "请只完成 Day 1。创建 app.py，用 Streamlit 搭建最小界面。\n\n要求：\n1. 页面标题：AI 写作助手\n2. st.text_input(\"输入文章主题\")\n3. st.button(\"生成大纲\")\n4. 点击后显示 mock 大纲（标题 + 3 个要点）\n5. st.button(\"复制大纲\") 点击后显示「已复制」\n\n运行：pip install streamlit && streamlit run app.py\n\n验收：输入主题，点击生成，看到大纲，点复制。",
          "Only complete Day 1. Create app.py with Streamlit.\n\nRequirements:\n1. Title: AI Writing Assistant\n2. st.text_input(\"Enter article topic\")\n3. st.button(\"Generate outline\")\n4. On click, show mock outline (title + 3 points)\n5. st.button(\"Copy outline\") shows 'Copied'\n\nRun: pip install streamlit && streamlit run app.py\n\nAcceptance: enter topic, generate, see outline, copy works."
        ),
        gate: B(
          ["浏览器打开后能看到输入框和按钮", "输入主题后点击生成，显示大纲", "大纲包含标题和 3-5 个要点", "复制按钮能正常工作"],
          ["Browser shows input and buttons", "Entering topic + generate shows outline", "Outline has title and 3-5 points", "Copy button works"]
        ),
        nextAction: B(
          "把 Day 1 指令复制到你的 AI Agent。运行 streamlit run app.py 测试。今天只做 Day 1。",
          "Copy the Day 1 command into your AI Agent. Run streamlit run app.py to test. Only do Day 1 today."
        )
      };
    },

    coding: function () {
      return {
        mvp: B(
          ["一个输入界面（搜索框或表单）", "核心处理逻辑（搜索、匹配或生成）", "结果展示区"],
          ["An input interface (search box or form)", "Core logic (search, match, or generate)", "Results display area"]
        ),
        notV1: B(
          ["用户登录 / 注册 — 先不用", "复杂数据库 — 先用 localStorage", "付费 / 会员 — 先免费", "移动端适配 — 先做桌面版", "高级自动化 — 先手动触发"],
          ["Login — skip for now", "Complex DB — use localStorage first", "Payment — free first", "Mobile — desktop first", "Advanced automation — manual first"]
        ),
        stack: B(
          [{ name: "HTML + CSS + JS", role: "前端界面" }, { name: "localStorage", role: "数据存储" }, { name: "浏览器", role: "测试和使用" }],
          [{ name: "HTML + CSS + JS", role: "Frontend interface" }, { name: "localStorage", role: "Data storage" }, { name: "Browser", role: "Test and use" }]
        ),
        days: B(
          ["创建 index.html：标题 + 输入框 + 按钮 + 结果区", "实现核心输入处理逻辑", "实现结果展示和交互", "添加数据持久化（localStorage）", "测试并修复 Bug", "优化界面和体验", "部署到 GitHub Pages，分享给朋友"],
          ["Create index.html: title + input + button + results", "Implement core input processing", "Build results display and interaction", "Add localStorage persistence", "Test and fix bugs", "Polish UI and UX", "Deploy to GitHub Pages, share with friends"]
        ),
        day1Command: B(
          "请只完成 Day 1。创建 index.html，用纯 HTML + CSS + JS 搭建最小界面。\n\n要求：\n1. 页面标题：我的工具\n2. 一个输入框 + 一个按钮\n3. 点击按钮后在下方显示 mock 结果\n4. 界面简洁，能用就行\n5. 不要加后端、不要用框架\n\n运行：直接用浏览器打开 index.html\n\n验收：打开页面，输入内容，点击按钮，看到结果。",
          "Only complete Day 1. Create index.html with pure HTML + CSS + JS.\n\nRequirements:\n1. Title: My Tool\n2. An input field + a button\n3. On click, show mock results below\n4. Simple UI, just make it work\n5. No backend, no frameworks\n\nRun: open index.html in browser\n\nAcceptance: enter content, click button, see results."
        ),
        gate: B(
          ["浏览器打开 index.html 能看到页面", "输入框可以输入内容", "点击按钮后显示结果", "不需要服务器或 API key"],
          ["Opening index.html shows the page", "Input field accepts content", "Clicking button shows results", "No server or API key needed"]
        ),
        nextAction: B(
          "把 Day 1 指令复制到你的 AI Agent。浏览器打开 index.html 测试。今天只做 Day 1。",
          "Copy the Day 1 command into your AI Agent. Open index.html to test. Only do Day 1 today."
        )
      };
    },

    design: function () {
      return {
        mvp: B(
          ["选择一个预设模板", "编辑文字内容和颜色", "导出为图片"],
          ["Choose a preset template", "Edit text and colors", "Export as image"]
        ),
        notV1: B(
          ["用户登录 — 先本地用", "团队协作 — 先自己做", "高级动画 — 先做静态", "自定义字体 — 先用系统字体", "批量生成 — 先做一个"],
          ["Login — local first", "Team collab — solo first", "Advanced animations — static first", "Custom fonts — system fonts first", "Batch — make one first"]
        ),
        stack: B(
          [{ name: "HTML + CSS + JS", role: "编辑器界面" }, { name: "html2canvas", role: "导出图片（Day 4 加）" }, { name: "浏览器", role: "测试和使用" }],
          [{ name: "HTML + CSS + JS", role: "Editor interface" }, { name: "html2canvas", role: "Export image (add Day 4)" }, { name: "Browser", role: "Test and use" }]
        ),
        days: B(
          ["创建 index.html：预览区 + 文字编辑面板", "实现 2-3 个预设模板（不同布局配色）", "实现文字实时编辑和预览", "添加颜色和字号调整", "添加导出为图片功能", "优化交互体验", "部署到 GitHub Pages，做一个作品"],
          ["Create index.html: preview + text editing panel", "Build 2-3 preset templates (layouts, colors)", "Real-time text editing and preview", "Add color and font size controls", "Add export-to-image feature", "Polish interaction UX", "Deploy to GitHub Pages, make a design"]
        ),
        day1Command: B(
          "请只完成 Day 1。创建 index.html，用纯 HTML + CSS + JS 搭建最小编辑器。\n\n要求：\n1. 页面标题：设计工具\n2. 左侧预览区（显示一个模板）\n3. 右侧编辑面板（标题输入 + 副标题输入）\n4. 输入文字后预览区实时更新\n5. 用 CSS 做一个简洁模板样式\n\n运行：直接用浏览器打开 index.html\n\n验收：打开页面，输入文字，预览实时变化。",
          "Only complete Day 1. Create index.html with pure HTML + CSS + JS.\n\nRequirements:\n1. Title: Design Tool\n2. Left: preview area (showing template)\n3. Right: editing panel (title + subtitle inputs)\n4. Preview updates in real-time\n5. Clean CSS template style\n\nRun: open index.html in browser\n\nAcceptance: type text, preview updates live."
        ),
        gate: B(
          ["浏览器打开能看到编辑器", "输入文字后预览实时更新", "至少有一个模板样式", "界面能正常使用"],
          ["Browser shows the editor", "Typing updates preview in real-time", "At least one template style", "Interface is usable"]
        ),
        nextAction: B(
          "把 Day 1 指令复制到你的 AI Agent。浏览器打开 index.html 测试。今天只做 Day 1。",
          "Copy the Day 1 command into your AI Agent. Open index.html to test. Only do Day 1 today."
        )
      };
    },

    general: function () {
      return {
        mvp: B(
          ["一个输入界面（告诉系统要做什么）", "一个输出区（系统返回结果）", "一个最简交互流程"],
          ["An input interface (tell the system what to do)", "An output area (system returns results)", "One simplest interaction flow"]
        ),
        notV1: B(
          ["用户登录 — 先不用", "付费功能 — 先免费", "移动端 App — 先做网页版", "复杂数据库 — 先用简单存储", "高级自动化 — 先手动"],
          ["Login — skip for now", "Payment — free first", "Mobile app — web first", "Complex DB — simple storage first", "Automation — manual first"]
        ),
        stack: B(
          [{ name: "HTML + CSS + JS", role: "前端界面，零依赖" }, { name: "浏览器", role: "直接打开使用" }],
          [{ name: "HTML + CSS + JS", role: "Frontend, zero dependencies" }, { name: "Browser", role: "Open directly" }]
        ),
        days: B(
          ["创建 index.html：标题 + 输入框 + 按钮 + 输出区", "实现核心输入处理逻辑", "实现输出展示", "添加交互反馈（loading、成功提示）", "测试并修复 Bug", "优化界面体验", "部署到 GitHub Pages，分享给朋友"],
          ["Create index.html: title + input + button + output", "Implement core input processing", "Build output display", "Add feedback (loading, success)", "Test and fix bugs", "Polish UI and UX", "Deploy to GitHub Pages, share with friends"]
        ),
        day1Command: B(
          "请只完成 Day 1。创建 index.html，用纯 HTML + CSS + JS 搭建最小界面。\n\n要求：\n1. 页面标题：我的小工具\n2. 一个输入框 + 一个按钮\n3. 点击按钮后在下方显示输出结果\n4. 界面简洁，能用就行\n5. 不要加后端、不要用框架\n\n运行：直接用浏览器打开 index.html\n\n验收：打开页面，输入内容，点击按钮，看到结果。",
          "Only complete Day 1. Create index.html with pure HTML + CSS + JS.\n\nRequirements:\n1. Title: My Little Tool\n2. An input field + a button\n3. On click, show output below\n4. Simple UI, just make it work\n5. No backend, no frameworks\n\nRun: open index.html in browser\n\nAcceptance: enter content, click button, see results."
        ),
        gate: B(
          ["浏览器打开 index.html 能看到页面", "输入框可以输入内容", "点击按钮后显示结果", "整体流程跑通一次"],
          ["Opening index.html shows the page", "Input field accepts content", "Clicking button shows results", "Full flow works end-to-end"]
        ),
        nextAction: B(
          "把 Day 1 指令复制到你的 AI Agent。今天只做 Day 1，不要提前做 Day 2。",
          "Copy the Day 1 command into your AI Agent. Only do Day 1 today."
        )
      };
    }
  };

  // ── Helpers ──

  function extractKeyword(goal) {
    var cleaned = goal
      .replace(/^(我想|我要|我打算|我准备|我希望|I want to|I want|I'd like to)\s*/i, "")
      .replace(/^(开始|学习|学会|做|做出来|完成|做一个|build|create|make)\s*/i, "")
      .trim();
    if (cleaned.length > 12) cleaned = cleaned.substring(0, 12) + "...";
    return cleaned || goal.substring(0, 12);
  }

  function copyResult(btn) {
    navigator.clipboard.writeText(collectAllText()).then(function () { flashCopy(btn); });
  }

  function copyCommand(btn) {
    // Copy Chinese version only (ready to paste into agent)
    navigator.clipboard.writeText(lastData.day1Command.zh).then(function () { flashCopy(btn); });
  }

  function flashCopy(btn) {
    var label = btn.querySelector(".copy-label");
    var check = btn.querySelector(".copy-check");
    label.classList.add("hidden");
    check.classList.remove("hidden");
    btn.classList.add("copied");
    setTimeout(function () {
      label.classList.remove("hidden");
      check.classList.add("hidden");
      btn.classList.remove("copied");
    }, 2000);
  }

  function collectAllText() {
    var lines = [];
    var secs = [
      ["Goal / 目标", "goalDisplay"],
      ["Tiny MVP / 最小可运行版本", "mvpList"],
      ["Not in V1 / 第一版不做", "notV1List"],
      ["7-Day Plan / 7 天计划", "planContent"],
      ["Day 1 Agent Command / 智能体指令", "day1Command"],
      ["Acceptance Gate / 验收标准", "gateList"],
      ["Next Action / 下一步", "nextAction"]
    ];
    for (var i = 0; i < secs.length; i++) {
      lines.push("=== " + secs[i][0] + " ===");
      var el = document.getElementById(secs[i][1]);
      if (el.tagName === "UL") {
        var items = el.querySelectorAll("li");
        for (var j = 0; j < items.length; j++) lines.push("- " + items[j].textContent);
      } else {
        lines.push(el.textContent);
      }
      lines.push("");
    }
    // Stack
    lines.push("=== Minimal Stack / 最小工具栈 ===");
    var stackItems = document.querySelectorAll(".stack-item");
    for (var s = 0; s < stackItems.length; s++) {
      lines.push("- " + stackItems[s].querySelector(".stack-name").textContent + " — " + stackItems[s].querySelector(".stack-role").textContent);
    }
    return lines.join("\n");
  }
})();
