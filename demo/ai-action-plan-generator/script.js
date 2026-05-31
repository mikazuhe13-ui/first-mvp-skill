// FirstMVPSkill — AI Action Plan Generator
// Turns a vague idea into a Tiny MVP + Minimal Stack + 7-day plan + Day 1 command
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

  function showResult(data) {
    // 1. Goal
    document.getElementById("goalDisplay").textContent = data.goal;

    // 2. Tiny MVP
    var mvpList = document.getElementById("mvpList");
    mvpList.innerHTML = "";
    for (var i = 0; i < data.mvp.length; i++) {
      var li = document.createElement("li");
      li.textContent = data.mvp[i];
      mvpList.appendChild(li);
    }

    // 3. Not in V1
    var notV1List = document.getElementById("notV1List");
    notV1List.innerHTML = "";
    for (var j = 0; j < data.notV1.length; j++) {
      var li2 = document.createElement("li");
      li2.textContent = data.notV1[j];
      notV1List.appendChild(li2);
    }

    // 3.5 Minimal Stack
    var stackContent = document.getElementById("stackContent");
    stackContent.innerHTML = "";
    for (var s = 0; s < data.stack.length; s++) {
      var item = document.createElement("div");
      item.className = "stack-item";
      var name = document.createElement("div");
      name.className = "stack-name";
      name.textContent = data.stack[s].name;
      var role = document.createElement("div");
      role.className = "stack-role";
      role.textContent = data.stack[s].role;
      item.appendChild(name);
      item.appendChild(role);
      stackContent.appendChild(item);
    }

    // 4. 7-Day Plan
    var planContent = document.getElementById("planContent");
    planContent.innerHTML = "";
    for (var k = 0; k < data.days.length; k++) {
      var dayDiv = document.createElement("div");
      dayDiv.className = "day";
      var label = document.createElement("span");
      label.className = "day-label";
      label.textContent = "Day " + (k + 1);
      dayDiv.appendChild(label);
      dayDiv.appendChild(document.createTextNode(" " + data.days[k]));
      planContent.appendChild(dayDiv);
    }

    // 5. Day 1 Command
    document.getElementById("day1Command").textContent = data.day1Command;

    // 6. Acceptance Gate
    var gateList = document.getElementById("gateList");
    gateList.innerHTML = "";
    for (var g = 0; g < data.gate.length; g++) {
      var li3 = document.createElement("li");
      li3.textContent = data.gate[g];
      gateList.appendChild(li3);
    }

    // 7. Next Action
    document.getElementById("nextAction").textContent = data.nextAction;

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
    if (/学|习|英语|日语|考试|背单词|reading|study|learn|笔记|复习|quiz|助手/.test(g)) return "study";
    if (/健身|运动|跑步|减[肥重]|锻炼|gym|fitness|workout|习惯|打卡/.test(g)) return "habit";
    if (/写|文章|公众号|博客|blog|write|content|创作|文案/.test(g)) return "writing";
    if (/编程|代码|cursor|codex|claude|开发|app|tool|工具|代码|code|知识库|检索|chrome|插件|extension/.test(g)) return "coding";
    if (/画画|设计|design|illustrat|sketch|draw|海报|logo/.test(g)) return "design";
    return "general";
  }

  // ── Generators ──

  var generators = {

    study: function (goal) {
      var kw = extractKeyword(goal);
      return {
        mvp: [
          "上传笔记或粘贴文本（st.text_area）",
          "AI 根据笔记生成 3 道练习题（选择题）",
          "答题后显示分数和正确答案"
        ],
        notV1: [
          "用户登录 / 注册 — 先让工具能用",
          "付费 / 会员 — 先验证有人需要",
          "移动端 App — 先做网页版",
          "间隔重复算法 — Day 1 不需要",
          "社交分享 / 排行榜 — 先自己用"
        ],
        stack: [
          { name: "Streamlit", role: "前端 + 后端，一个文件搞定" },
          { name: "Python", role: "编写逻辑" },
          { name: "Claude API / OpenAI", role: "生成练习题（Day 3 再接入）" },
          { name: "浏览器", role: "测试和使用" }
        ],
        days: [
          "创建 app.py，搭建界面：标题 + st.text_area 输入笔记 + st.button 生成",
          "实现 mock 生成逻辑：点击按钮显示 3 道预设选择题",
          "接入 AI API，用笔记内容生成真实练习题",
          "实现答题交互：radio 选择 + 提交 + 显示分数",
          "整合测试，修复 Bug，确保全流程跑通",
          "优化界面：加侧边栏说明、调整布局、加 loading 状态",
          "部署到 Streamlit Cloud，分享给朋友试用"
        ],
        day1Command: "请只完成 Day 1。创建一个文件 app.py，用 Streamlit 搭建「" + kw + "」的最小界面。\n\n要求：\n1. 页面标题：" + kw + "\n2. st.text_area(\"粘贴你的笔记\")\n3. st.button(\"生成练习题\")\n4. 点击按钮后用 st.write 显示 3 道 mock 选择题\n5. 不要接入 AI API，不要加登录，不要加数据库\n\n运行命令：pip install streamlit && streamlit run app.py\n\n验收：浏览器打开后能看到标题、输入框和按钮，点击按钮能看到 3 道题。",
        gate: [
          "浏览器打开 http://localhost:8501 能看到页面",
          "输入框可以粘贴笔记文本",
          "点击「生成练习题」按钮后显示 3 道题",
          "整个流程不需要 API key 就能跑通"
        ],
        nextAction: "把上面的 Day 1 指令复制到你正在使用的 AI Agent（Claude Code、Cursor、ChatGPT 都可以）。运行 pip install streamlit && streamlit run app.py。今天只做 Day 1，不要提前做 Day 2。"
      };
    },

    habit: function (goal) {
      var kw = extractKeyword(goal);
      return {
        mvp: [
          "一个打卡按钮（点击记录今天完成）",
          "显示连续打卡天数",
          "刷新页面后数据不丢失（localStorage）"
        ],
        notV1: [
          "用户登录 / 注册 — 先自己用",
          "社交功能 / 好友系统 — 先一个人坚持",
          "数据统计图表 — 先看天数就够了",
          "提醒推送 — 先靠自己记",
          "多设备同步 — 先用一个浏览器"
        ],
        stack: [
          { name: "HTML + CSS + JS", role: "一个文件搞定，零依赖" },
          { name: "localStorage", role: "浏览器本地存储打卡数据" },
          { name: "浏览器", role: "直接打开 index.html 使用" }
        ],
        days: [
          "创建 index.html，搭建界面：标题 + 打卡按钮 + 连续天数显示",
          "用 JS 实现点击打卡、记录日期、计算连续天数",
          "用 localStorage 持久化数据，刷新不丢失",
          "添加今日状态显示（已打卡 / 未打卡）",
          "添加最近 7 天打卡记录展示",
          "优化界面：加颜色状态、调整布局",
          "部署到 GitHub Pages，手机浏览器打开使用"
        ],
        day1Command: "请只完成 Day 1。创建一个文件 index.html，用纯 HTML + CSS + JS 搭建「" + kw + "」的最小界面。\n\n要求：\n1. 页面标题：" + kw + "\n2. 一个大按钮「打卡」\n3. 显示「连续打卡：X 天」\n4. 用 localStorage 存储打卡日期\n5. 刷新页面后数据不丢失\n6. 不要加登录、不要加后端、不要用任何框架\n\n运行命令：直接用浏览器打开 index.html\n\n验收：打开页面能点打卡，刷新后数据还在。",
        gate: [
          "用浏览器打开 index.html 能看到页面",
          "点击打卡按钮后显示「已打卡」",
          "刷新页面后连续天数保持不变",
          "不需要任何服务器或 API key"
        ],
        nextAction: "把上面的 Day 1 指令复制到你正在使用的 AI Agent。直接用浏览器打开 index.html 测试。今天只做 Day 1。"
      };
    },

    writing: function (goal) {
      var kw = extractKeyword(goal);
      return {
        mvp: [
          "输入文章主题或关键词",
          "AI 生成文章大纲（标题 + 3-5 个要点）",
          "一键复制大纲到剪贴板"
        ],
        notV1: [
          "多平台自动发布 — 先手动发",
          "图片生成 / 排版美化 — 先用纯文本",
          "SEO 优化 — 先写出内容",
          "团队协作 — 先自己写",
          "数据分析 / 阅读量 — 先发出去再说"
        ],
        stack: [
          { name: "Streamlit", role: "前端 + 后端，一个文件搞定" },
          { name: "Python", role: "编写逻辑" },
          { name: "Claude API / OpenAI", role: "生成大纲和内容" },
          { name: "浏览器", role: "测试和使用" }
        ],
        days: [
          "创建 app.py，搭建界面：标题 + 主题输入 + 生成按钮",
          "实现 mock 大纲生成：点击按钮显示预设大纲模板",
          "接入 AI API，根据主题生成真实大纲",
          "添加文章正文生成功能",
          "添加一键复制功能",
          "优化提示词，提升生成质量",
          "部署到 Streamlit Cloud，自己先用来写一篇"
        ],
        day1Command: "请只完成 Day 1。创建一个文件 app.py，用 Streamlit 搭建「" + kw + "」的最小界面。\n\n要求：\n1. 页面标题：" + kw + "\n2. st.text_input(\"输入文章主题\")\n3. st.button(\"生成大纲\")\n4. 点击按钮后显示一个 mock 大纲（标题 + 3 个要点）\n5. st.button(\"复制大纲\") 点击后显示「已复制」\n6. 不要接入 AI API，不要加登录\n\n运行命令：pip install streamlit && streamlit run app.py\n\n验收：输入主题，点击生成，看到大纲，点复制。",
        gate: [
          "浏览器打开后能看到输入框和按钮",
          "输入主题后点击生成，显示大纲内容",
          "大纲包含标题和 3-5 个要点",
          "复制按钮能正常工作"
        ],
        nextAction: "把上面的 Day 1 指令复制到你正在使用的 AI Agent。运行 streamlit run app.py 测试。今天只做 Day 1。"
      };
    },

    coding: function (goal) {
      var kw = extractKeyword(goal);
      return {
        mvp: [
          "一个输入界面（搜索框或表单）",
          "核心处理逻辑（搜索、匹配或生成）",
          "结果展示区"
        ],
        notV1: [
          "用户登录 / 注册 — 先不用",
          "复杂数据库 — 先用 JSON 或 localStorage",
          "付费 / 会员 — 先免费",
          "移动端适配 — 先做桌面版",
          "高级自动化 / 定时任务 — 先手动触发"
        ],
        stack: [
          { name: "HTML + CSS + JS", role: "前端界面" },
          { name: "localStorage / JSON", role: "数据存储（Day 1 不需要数据库）" },
          { name: "浏览器", role: "测试和使用" }
        ],
        days: [
          "创建 index.html，搭建界面：标题 + 输入框 + 按钮 + 结果区",
          "实现核心输入处理逻辑",
          "实现结果展示和交互",
          "添加数据持久化（localStorage）",
          "测试并修复 Bug",
          "优化界面和体验",
          "部署到 GitHub Pages，分享给朋友试用"
        ],
        day1Command: "请只完成 Day 1。创建一个文件 index.html，用纯 HTML + CSS + JS 搭建「" + kw + "」的最小界面。\n\n要求：\n1. 页面标题：" + kw + "\n2. 一个输入框 + 一个按钮\n3. 点击按钮后在下方显示 mock 结果\n4. 界面简洁，能用就行\n5. 不要加后端、不要用框架、不要加登录\n\n运行命令：直接用浏览器打开 index.html\n\n验收：打开页面，输入内容，点击按钮，看到结果。",
        gate: [
          "用浏览器打开 index.html 能看到页面",
          "输入框可以输入内容",
          "点击按钮后显示结果",
          "不需要任何服务器或 API key"
        ],
        nextAction: "把上面的 Day 1 指令复制到你正在使用的 AI Agent。直接用浏览器打开 index.html 测试。今天只做 Day 1。"
      };
    },

    design: function (goal) {
      var kw = extractKeyword(goal);
      return {
        mvp: [
          "选择一个预设模板",
          "编辑文字内容和颜色",
          "导出为图片（右键截图或 html2canvas）"
        ],
        notV1: [
          "用户登录 / 注册 — 先本地用",
          "团队协作 — 先自己做",
          "高级动画 — 先做静态",
          "自定义字体上传 — 先用系统字体",
          "批量生成 — 先做一个"
        ],
        stack: [
          { name: "HTML + CSS + JS", role: "编辑器界面" },
          { name: "html2canvas", role: "导出为图片（Day 4 再加）" },
          { name: "浏览器", role: "测试和使用" }
        ],
        days: [
          "创建 index.html，搭建编辑器界面：预览区 + 文字编辑面板",
          "实现 2-3 个预设模板（不同布局和配色）",
          "实现文字实时编辑和预览",
          "添加颜色和字号调整功能",
          "添加导出为图片功能",
          "优化交互体验",
          "部署到 GitHub Pages，自己先用来做一个作品"
        ],
        day1Command: "请只完成 Day 1。创建一个文件 index.html，用纯 HTML + CSS + JS 搭建「" + kw + "」的最小界面。\n\n要求：\n1. 页面标题：" + kw + "\n2. 左侧是预览区（显示一个模板）\n3. 右侧是编辑面板（标题输入 + 副标题输入）\n4. 输入文字后预览区实时更新\n5. 用 CSS 做一个简洁的模板样式\n6. 不要加后端、不要用框架\n\n运行命令：直接用浏览器打开 index.html\n\n验收：打开页面，输入文字，预览区实时变化。",
        gate: [
          "用浏览器打开 index.html 能看到编辑器",
          "输入文字后预览区实时更新",
          "至少有一个模板样式",
          "界面能正常使用"
        ],
        nextAction: "把上面的 Day 1 指令复制到你正在使用的 AI Agent。直接用浏览器打开 index.html 测试。今天只做 Day 1。"
      };
    },

    general: function (goal) {
      var kw = extractKeyword(goal);
      return {
        mvp: [
          "一个输入界面（用户告诉系统要做什么）",
          "一个输出区（系统返回结果）",
          "一个最简交互流程"
        ],
        notV1: [
          "用户登录 / 注册 — 先不用",
          "付费功能 — 先免费",
          "移动端 App — 先做网页版",
          "复杂数据库 — 先用简单存储",
          "高级自动化 — 先手动"
        ],
        stack: [
          { name: "HTML + CSS + JS", role: "前端界面，零依赖" },
          { name: "浏览器", role: "直接打开使用" }
        ],
        days: [
          "创建 index.html，搭建界面：标题 + 输入框 + 按钮 + 输出区",
          "实现核心输入处理逻辑",
          "实现输出展示",
          "添加交互反馈（loading、成功提示）",
          "测试并修复 Bug",
          "优化界面体验",
          "部署到 GitHub Pages，分享给朋友试用"
        ],
        day1Command: "请只完成 Day 1。创建一个文件 index.html，用纯 HTML + CSS + JS 搭建「" + kw + "」的最小界面。\n\n要求：\n1. 页面标题：" + kw + "\n2. 一个输入框 + 一个按钮\n3. 点击按钮后在下方显示输出结果\n4. 界面简洁，能用就行\n5. 不要加后端、不要用框架、不要加登录\n\n运行命令：直接用浏览器打开 index.html\n\n验收：打开页面，输入内容，点击按钮，看到结果。",
        gate: [
          "用浏览器打开 index.html 能看到页面",
          "输入框可以输入内容",
          "点击按钮后显示结果",
          "整体流程跑通一次"
        ],
        nextAction: "把上面的 Day 1 指令复制到你正在使用的 AI Agent（ChatGPT、Claude、Cursor、Codex 都可以）。今天只做 Day 1，不要提前做 Day 2。"
      };
    }
  };

  // ── Helpers ──

  function extractKeyword(goal) {
    var cleaned = goal
      .replace(/^(我想|我要|我打算|我准备|我希望|I want to|I want|I'd like to)\s*/i, "")
      .replace(/^(开始|学习|学会|做|做出来|完成|做一个)\s*/i, "")
      .trim();
    if (cleaned.length > 12) cleaned = cleaned.substring(0, 12) + "...";
    return cleaned || goal.substring(0, 12);
  }

  function copyResult(btn) {
    var text = collectAllText();
    navigator.clipboard.writeText(text).then(function () { flashCopy(btn); });
  }

  function copyCommand(btn) {
    var cmd = document.getElementById("day1Command").textContent;
    navigator.clipboard.writeText(cmd).then(function () { flashCopy(btn); });
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

    lines.push("=== Goal ===");
    lines.push(document.getElementById("goalDisplay").textContent);
    lines.push("");

    lines.push("=== Tiny MVP ===");
    var mvpItems = document.getElementById("mvpList").querySelectorAll("li");
    for (var i = 0; i < mvpItems.length; i++) lines.push((i + 1) + ". " + mvpItems[i].textContent);
    lines.push("");

    lines.push("=== Not in V1 ===");
    var notV1Items = document.getElementById("notV1List").querySelectorAll("li");
    for (var j = 0; j < notV1Items.length; j++) lines.push("- " + notV1Items[j].textContent);
    lines.push("");

    lines.push("=== Minimal Stack ===");
    var stackItems = document.querySelectorAll(".stack-item");
    for (var s = 0; s < stackItems.length; s++) {
      lines.push("- " + stackItems[s].querySelector(".stack-name").textContent + " — " + stackItems[s].querySelector(".stack-role").textContent);
    }
    lines.push("");

    lines.push("=== 7-Day Plan ===");
    var days = document.getElementById("planContent").querySelectorAll(".day");
    for (var k = 0; k < days.length; k++) lines.push(days[k].textContent);
    lines.push("");

    lines.push("=== Day 1 Command ===");
    lines.push(document.getElementById("day1Command").textContent);
    lines.push("");

    lines.push("=== Acceptance Gate ===");
    var gateItems = document.getElementById("gateList").querySelectorAll("li");
    for (var g = 0; g < gateItems.length; g++) lines.push("- " + gateItems[g].textContent);
    lines.push("");

    lines.push("=== Next Action ===");
    lines.push(document.getElementById("nextAction").textContent);

    return lines.join("\n");
  }
})();
