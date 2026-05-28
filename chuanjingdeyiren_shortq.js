// 穿井得一人 - 简答题特训数据（5题完整豆腐块绝对对齐版）
const shortQQuestions = [
    {
        id: "Q1",
        py: "“ 穿 井 得 一 人 ” 的 谣 言 是 如 何 产 生 的 ？ 请 简 要 概 括 。",
        text: "“穿井得一人”的谣言是如何产生的？请简要概括。",
        en: "How did the rumor 'digging a well gained a person' come about? Please summarize briefly.",
        strategyPy: "答 题 时 需 抓 住 “ 丁 氏 原 意 ” 与 “ 传 话 者 误 解 ” 的 核 心 矛 盾 进 行 对 比 阐 述 。",
        strategyZh: "答题时需抓住“丁氏原意”与“传话者误解”的核心矛盾进行对比阐述。",
        strategyEn: "Focus on the core contradiction between Ding's original intent and the messenger's misinterpretation.",
        answerPy: "起 因 是 丁 氏 挖 井 后 省 下 了 一 个 劳 动 力 ， 随 口 说 挖 井 得 到 一 个 人 力 的 帮 忙 ； 听 话 的 人 没 有 调 查 核 实 ， 误 将 其 听 成 “ 从 井 底 挖 掘 出 了 一 个 活 人 ” 并 瞎 传 。",
        answerZh: "起因是丁氏挖井后省下了一个劳动力，随口说挖井得到一个人力的帮忙；听话的人没有调查核实，误将其听成“从井底挖掘出了一个活人”并瞎传。",
        answerEn: "It started when Ding expressed that digging a well saved him one person's labor. Listeners spread it without verifying, mistakenly thinking a real person was dug up from the well bottom."
    },
    {
        id: "Q2",
        py: "这 则 寓 言 故 事 告 诫 了 我 们 一 个 什 么 样 的 处 世 道 理 ？",
        text: "这则寓言故事告诫了我们一个什么样的处世道理？",
        en: "What life lesson does this fable teach us regarding handling information?",
        strategyPy: "这 属 于 主 旨 寓 意 题 ， 必 须 结 合 课 文 尾 句 “ 求 闻 之 若 此 ， 不 如 无 闻 也 ” 的 核 心 意 思 来 答 题 。",
        strategyZh: "这属于主旨寓意题，必须结合课文尾句“求闻之若此，不如无闻也”的核心意思来答题。",
        strategyEn: "This is a core theme question. Answer based on the final moral: 'Seeking news like this is worse than hearing nothing.'"
    },
    {
        id: "Q3",
        py: "“ 国 人 道 之 ” 中 的 “ 国 人 ” 指 的 是 谁 ？ 他 们 对 谣 言 的 传 播 起 了 什 么 作 用 ？",
        text: "“国人道之”中的“国人”指的是谁？他们对谣言的传播起了什么作用？",
        en: "Who does 'Guo Ren' refer to in the text, and what role did they play in spreading the rumor?",
        strategyPy: "先 解 释 核 心 实 词 “ 国 人 ” 的 词 义 ， 再 分 析 广 大 群 众 在 谣 言 扩 大 化 过 程 中 扮演 的 推 波 助 澜 的 角色 。",
        strategyZh: "先解释核心实词“国人”的词义，再分析广大群众在谣言扩大化过程中扮演的推波助澜的角色。",
        strategyEn: "First explain the meaning of 'Guo Ren', then analyze the role of the public in amplifying the rumor.",
        answerPy: "“ 国 人 ” 指 的 是 国 都 里的 百 姓 。 他 们 在 没 有 弄 清 真 相 的 情况 下 ， 盲 目 聚 众 谈 论 并 瞎 传 ， 导致 谣 言 迅速 升 级 扩 大 ， 甚 至 惊 动 了 朝 廷 和 国 君 。",
        answerZh: "“国人”指的是国都里的百姓。他们在没有弄清真相的情况下，盲目聚众谈论并瞎传，导致谣言迅速升级扩大，甚至惊动了朝廷和国君。",
        answerEn: "'Guo Ren' refers to the citizens of the capital. They blindly discussed and spread the hearsay without checking the truth, causing the rumor to escalate so wildly that it eventually alarmed the ruler."
    },
    {
        id: "Q4",
        py: "宋 国 国 君 听 到 传 闻 后 的 举 动 说 明 了 什 么 ？ 为 什 么 他 要 派 人 去 调 查 ？",
        text: "宋国国君听到传闻后的举动说明了什么？为什么他要派人去调查？",
        en: "What does the action of the ruler of Song indicate, and why did he send someone to investigate?",
        strategyPy: "从 侧 面 反 映 谣 言 的 严 重 性 ， 以 及 居 上 位 者 面对 离 奇 荒 诞 现象 时 应 有 的 审 慎 态 度 进 行 思考 。",
        strategyZh: "从侧面反映谣言的严重性，以及居上位者面对离奇荒诞现象时应有的审慎态度进行思考。",
        strategyEn: "Reflect on the severity of the rumor and the cautious attitude a ruler should have towards bizarre phenomena.",
        answerPy: "说 明 该 谣 言 已经 传 得 满 城 风 雨 ， 极其 荒 诞 离 奇 ； 国 君 派 人 调查 说 明 他 保持 了一 定的 理 性 与 审 慎 ， 没 有 直接 轻 信 ， 而是 试图 追 寻 真 相 。",
        answerZh: "说明该谣言已经传得满城风雨，极其荒诞离奇；国君派人调查说明他保持了一定的理性与审慎，没有直接轻信，而是试图追寻真相。",
        answerEn: "It shows the rumor had become highly sensational and absurd. The ruler's inquiry indicates a degree of caution, as he chose to investigate the truth rather than blindly believing it."
    },
    {
        id: "Q5",
        py: "结 合 现 实 生 活 ， 谈 谈 你 认 为 该 如 何 避 免 像 “ 穿 井 得 一 人 ” 这 样 的 闹 剧 发 生 ？",
        text: "结合现实生活，谈谈你认为该如何避免像“穿井得一人”这样的闹剧发生？",
        en: "In modern context, how do you think we can avoid fables like 'digging a well to find a person' from happening?",
        strategyPy: "这 是 开放 性 鉴 赏 题 。 需 从 面 对 网络 虚 假 信息 时 的 “ 个人 素 养 ” 与 “ 独立 思考 ” 两个 角度 切 入 。",
        strategyZh: "这是开放性鉴赏题。需从面对网络虚假信息时的“个人素养”与“独立思考”两个角度切入。",
        strategyEn: "This is an open-ended question. Address it from the perspectives of personal digital literacy and independent critical thinking.",
        answerPy: "在 网络 时代 ， 面 对 各种 传 闻 消息 ， 我 们 应该 保持 独 立 思考 ， 提 高 辨 别 能力 ； 在 转发 和 评论 之前 ， 坚持 实 事 求 是 的 态度 先 考 证 事实 ， 做到 不 信 谣 、 不 传 谣 。",
        answerZh: "在网络时代，面对各种传闻消息，我们应该保持独立思考，提高辨别能力；在转发和评论之前，坚持实事求是的态度先考证事实，做到不信谣、不传谣。",
        answerEn: "In the digital age, when facing various news and hearsay, we should maintain independent thinking and critical awareness. Before sharing, verify the facts with an objective attitude to stop the spread of rumors."
    }
];
