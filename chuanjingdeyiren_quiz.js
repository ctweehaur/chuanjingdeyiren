// 穿井得一人 - 客观题自测数据（豆腐块绝对对齐版）
const quizQuestions = [
    {
        id: 1,
        py: "宋 国 丁 氏 在 穿 井 之 前 ， 遇 到 的 主 要 问 题 是 什 么 ？",
        text: "宋国丁氏在穿井之前，遇到的主要问题是什么？",
        en: "What was the main problem faced by the Ding family of Song before digging the well?",
        options: [
            {
                py: "家 里 没 有 钱 雇 佣 劳 动 力",
                text: "家里没有钱雇佣劳动力",
                en: "The family had no money to hire labor.",
                correct: false,
                explanationPy: "课 文 完 全 没 有 提 到 丁 家 的 经 济 状 况 ， 这 属于 主 观 臆 测 。",
                explanationZh: "课文完全没有提到丁家的经济状况，这属于主观臆测。",
                explanationEn: "The text does not mention their financial status; this is pure speculation."
            },
            {
                py: "家 里 没 有 水 井 需 要 派 人 去 外 面 打 水",
                text: "家里没有水井需要派人去外面打水",
                en: "They had no well and had to send someone outside to fetch water.",
                correct: true,
                explanationPy: "对 照 原 文 “ 家 无 井 而 出 溉 汲 ， 常 一 人 居 外 ” ， 证 实 因 无 井 而 耗 费 劳 力 。",
                explanationZh: "对照原文“家无井而出溉汲，常一人居外”，证实因无井而耗费劳力。",
                explanationEn: "Matches the text: 'The family had no well... so one person constantly stayed outside to fetch water.'"
            },
            {
                py: "打 水 的 仆 人 在 外 面 逃 跑 了",
                text: "打水的仆人在外面逃跑了",
                en: "The servant who fetched water ran away.",
                correct: false,
                explanationPy: "“ 居 外 ” 的 意 思 是 呆 在 外 面 工 作 ， 而 非 逃 跑 ， 属 于 字 面 误 解 。",
                explanationZh: "“居外”的意思是呆在外面工作，而非逃跑，属于字面误解。",
                explanationEn: "'Ju wai' means staying outside to work, not escaping. This is a misunderstanding."
            },
            {
                py: "宋 国 的 诸 侯 征 收 昂 贵 的 水 税",
                text: "宋国的诸侯征收昂贵的水税",
                en: "The ruler of Song imposed a heavy tax on water.",
                correct: false,
                explanationPy: "背 景 中 完 全 没 有 提 到 征 税 的 内 容 ， 属 于 无 中 生 有 。",
                explanationZh: "背景中完全没有提到征税的内容，属于无中生有。",
                explanationEn: "There is no mention of water taxes in the text at all."
            }
        ]
    },
    {
        id: 2,
        py: "丁 氏 说 “ 吾 穿 井 得 一 人 ” 的 真 实 本 意 是 什 么 ？",
        text: "丁氏说“吾穿井得一人”的真实本意是什么？",
        en: "What was the real meaning of Ding's statement 'We gained a person by digging a well'?",
        options: [
            {
                py: "在 挖 井 的 过 程 中 挖 出 了 一 个 活 人",
                text: "在挖井的过程中挖出了一个活人",
                en: "They dug up a living person from inside the well.",
                correct: false,
                explanationPy: "这 是 别 人 道 听 途 说 的 谣 言 误 解 ， 不 是 丁 氏 的 本 意 。",
                explanationZh: "这是别人道听途说的谣言误解，不是丁氏的本意。",
                explanationEn: "This is the rumored misunderstanding, not Ding's original meaning."
            },
            {
                py: "家 里 多 了 一 个 仆 人 来 帮 忙 挖 井",
                text: "家里多了一个仆人来帮忙挖井",
                en: "They acquired a new servant to help dig the well.",
                correct: false,
                explanationPy: "丁 家 是 自 己 挖 井 ， 而 不 是 雇 佣 新 人 ， 属 于 概 念 混 淆 。",
                explanationZh: "丁家是自己挖井，而不是雇佣新人，属于概念混淆。",
                explanationEn: "They dug it themselves rather than hiring a new worker."
            },
            {
                py: "省 下 了 一 个 专 门 外 出 打 水 的 劳 动 力",
                text: "省下了一个专门外出打水的劳动力",
                en: "They saved the labor of one person who used to fetch water outside.",
                correct: true,
                explanationPy: "由 于 家 里 有 了 井 ， 原 本 必 须 在 外 打 水 的 人 可 以 撤 回 回 家 帮 忙 ， 省 下 了 人 力 。",
                explanationZh: "由于家里有了井，原本必须在外打水的人可以撤回回家帮忙，省下了人力。",
                explanationEn: "Since they had a well now, the person fetching water was freed up, saving manual labor."
            },
            {
                py: "挖 井 的 技 术 非 常 高 超 只 需 要 一 个 人",
                text: "挖井的技术非常高超只需要一个人",
                en: "The well-digging technique was so advanced it required only one person.",
                correct: false,
                explanationPy: "文 章 强 调 的 是 劳 动 力 的 释 放 ， 而 非 挖 井 技 术 ， 偏 离 主 旨 。",
                explanationZh: "文章强调的是劳动力的释放，而非挖井技术，偏离主旨。",
                explanationEn: "The text emphasizes the freeing of labor, not the digging technique."
            }
        ]
    }
];
