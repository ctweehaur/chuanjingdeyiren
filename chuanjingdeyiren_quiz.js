const quizQuestions = [
    {
        id: 1,
        py: "宋 国 丁 氏 在 穿 井 之 前 ， 遇 到 的 主 要 问 题 是 什 么 ？",
        text: "1. 宋国丁氏在穿井之前，遇到的主要问题是什么？",
        en: "1. What was the main problem faced by the Ding family of Song before digging the well?",
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
        text: "2. 丁氏说“吾穿井得一人”的真实本意是什么？",
        en: "2. What was the real meaning of Ding's statement 'We gained a person by digging a well'?",
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
    },
    {
        id: 3,
        py: "下 列 句 子 中 加 点 字 “ 闻 ” 的 解 释 错 误 的 一 项 是 ：",
        text: "3. 下列句子中加点字“闻”的解释错误的一项是：",
        en: "3. Which of the following explanations for the word 'Wen' is INCORRECT?",
        options: [
            {
                py: "有 闻 而 传 之 者 （ 闻 ： 听 说 ）",
                text: "有闻而传之者（闻：听说）",
                en: "Someone heard it and spread it (Wen: heard)",
                correct: false,
                explanationPy: "解 释 正 确 。 这 里 指 听 到 丁 家 传 出 的 话 语 。",
                explanationZh: "解释正确。这里指听到丁家传出的话语。",
                explanationEn: "Correct explanation. It refers to hearing the statement from the Ding family."
            },
            {
                py: "闻 之 于 宋 君 （ 闻 ： 使 …… 听 到 ）",
                text: "闻之于宋君（闻：使……听到）",
                en: "It was heard by the ruler of Song (Wen: cause to hear)",
                correct: false,
                explanationPy: "解 释 正 确 。 指 这 件 事情 被 动 地 让 宋 国 国 君 听 到 了 。",
                explanationZh: "解释正确。指这件事情被动地让宋国国君听到了。",
                explanationEn: "Correct explanation. It means the matter was made known or heard by the ruler."
            },
            {
                py: "求 闻 之 若 此 （ 闻 ： 闻 气 味 ）",
                text: "求闻之若此（闻：闻气味）",
                en: "Seeking news like this (Wen: smell odor)",
                correct: true,
                explanationPy: "解 释 错 误 ！ 在 文 年 文 中 “ 闻 ” 的 本 意 是 听 到 的 消息 ， 现代 汉 语 才 常用 作 闻 气 味 。",
                explanationZh: "解释错误！在文言文中“闻”的本意是听到的消息，现代汉语才常用作闻气味。",
                explanationEn: "Incorrect explanation! In Classical Chinese, 'Wen' means news or hearsay, not to smell."
            },
            {
                py: "不 如 无 闻 也 （ 闻 ： 听 到 ）",
                text: "不如无闻也（闻：听到）",
                en: "Better than hearing nothing (Wen: hear)",
                correct: false,
                explanationPy: "解 释 正 确 。 指 还不 如 根 本 没 有 听 到 过 这 种 消息 。",
                explanationZh: "解释正确。指还不如根本没有听到过这种消息。",
                explanationEn: "Correct explanation. It implies it would be better not to have heard any such rumors at all."
            }
        ]
    },
    {
        id: 4,
        py: "文 中 “ 闻 之 于 宋 君 ” 的 “ 于 ” 字 ， 其 意 思 与 下 列 哪 项 相同 ？",
        text: "4. 文中“闻之于宋君”的“于”字，其意思与下列哪项相同？",
        en: "4. Which of the following uses of 'Yu' has the same meaning as 'Yu' in 'Wen Zhi Yu Song Jun'?",
        options: [
            {
                py: "问 之 于 丁 氏 （ 于 ： 向 ）",
                text: "问之于丁氏（于：向）",
                en: "Inquire it from the Ding family (Yu: from / to)",
                correct: false,
                explanationPy: "不 相同 。 “ 问 之 于 丁 氏 ” 的 “ 于 ” 表示 动作 的 对象 ， 意 为 “ 向 ” 。",
                explanationZh: "不相同。“问之于丁氏”的“于”表示动作的对象，意为“向”。",
                explanationEn: "Different. In that context, 'Yu' introduces the object of inquiry, meaning 'from'."
            },
            {
                py: "得 一 人 于 井 中 （ 于 ： 在 ）",
                text: "得一人于井中（于：在）",
                en: "Found a person in the well (Yu: in / inside)",
                correct: false,
                explanationPy: "不 相同 。 “ 于 井 中 ” 的 “ 于 ” 表示 地 点 介 词 ， 意 为 “ 在 ” 。",
                explanationZh: "不相同。“于井中”的“于”表示地点介词，意为“在”。",
                explanationEn: "Different. Here 'Yu' serves as a preposition of place, meaning 'in' or 'at'."
            },
            {
                py: "劳 心 者 治 人 ， 劳 力 者 治 于 人 （ 于 ： 被 ）",
                text: "劳心者治人，劳力者治于人（于：被）",
                en: "Those who labor with minds govern; those who labor with strength are governed by others (Yu: by)",
                correct: true,
                explanationPy: "完 全 相同 ！ “ 闻 之 于 宋 君 ” 表 被 动 意 思 ， 意 为 “ 被 ” 宋 君 听到 ； 治 于 人 亦 为 “ 被 ” 人 统治 。",
                explanationZh: "完全相同！“闻之于宋君”表被动意思，意为“被”宋君听到；治于人亦为“被”人统治。",
                explanationEn: "Exactly the same! Both use 'Yu' as a passive marker meaning 'by'."
            },
            {
                py: "青 取 之 于 蓝 而 青 于 蓝 （ 于 ： 比 ）",
                text: "青取之于蓝而青于蓝（于：比）",
                en: "Indigo blue is obtained from the indigo plant, but it is bluer than the plant (Yu: than)",
                correct: false,
                explanationPy: "不 相同 。 “ 青 于 蓝 ” 的 “ 于 ” 表示 比较 介 词 ， 意 为 “ 比 ” 。",
                explanationZh: "不相同。“青于蓝”的“于”表示比较介词，意为“比”。",
                explanationEn: "Different. 'Yu' in 'Qing Yu Lan' acts as a preposition of comparison, meaning 'than'."
            }
        ]
    },
    {
        id: 5,
        py: "这 则 寓 言 故事 运用 “ 穿 井 得 一 人 ” 的 闹 剧 ， 主要是 为了 讽 刺 现实 中 的 哪 种 人 ？",
        text: "5. 这则寓言故事运用“穿井得一人”的闹剧，主要是为了讽刺现实中的哪种人？",
        en: "5. What kind of people does this fable mainly satirize through the farce of 'digging a well to find a man'?",
        options: [
            {
                py: "不 愿 意 靠 自 己 努力 工作 、 整 天 想 着 走 捷 径 的 人",
                text: "不愿意靠自己努力工作、整天想着走捷径的人",
                en: "People who are unwilling to work hard and always look for shortcuts.",
                correct: false,
                explanationPy: "故事 主 旨 与 走 捷 径 无关 ， 丁 家 是 靠 自己 挖 井 释 放 劳 动力 的 。",
                explanationZh: "故事主旨与走捷径无关，丁家是靠自己挖井释放劳动力的。",
                explanationEn: "The theme is unrelated to shortcuts; the Ding family dug the well through their own labor."
            },
            {
                py: "盲 目 听 信 谣 言 、 不 加 思考 就 以 讹 传 讹 的 人",
                text: "盲目听信谣言、不加思考就以讹传讹的人",
                en: "People who blindly believe rumors and spread them without critical thinking.",
                correct: true,
                explanationPy: "完全 切 中 主 旨 ！ 故事 深刻 讽 刺 了 那些 道 听 途 说 、 不 去 考 证 事实 就 盲 目 瞎 传 的 人 。",
                explanationZh: "完全切中主旨！故事深刻讽刺了那些道听途说、不去考证事实就盲目瞎传的人。",
                explanationEn: "Perfect match for the theme! It directly satirizes those who spread rumors without verification."
            },
            {
                py: "挖 井 技术 差 劲 、 导致 水 井 经常 塌 陷 的 建筑 工 人",
                text: "挖井技术差劲、导致水井经常塌陷的建筑工人",
                en: "Construction workers with poor skills that cause wells to collapse.",
                correct: false,
                explanationPy: "这 属于 完全 偏 离 文本 的 字 面 恶 搞 选项 ， 故事 与 挖 井 技术 无关 。",
                explanationZh: "这属于完全偏离文本的字面恶搞选项，故事与挖井技术无关。",
                explanationEn: "This is a literal and incorrect option; the fable has nothing to do with engineering skills."
            },
            {
                py: "做 了 错 事 却 极 力 隐 瞒 真 相 、 欺 骗 国 君 的 官员",
                text: "做了错事却极力隐瞒真相、欺骗国君的官员",
                en: "Officials who hide the truth and deceive their ruler after making mistakes.",
                correct: false,
                explanationPy: "丁 氏 在 国 君 派 人 询问 时 立刻 诚 实 澄清 了 真 真 相 ， 并不 存在 隐 瞒 或 欺 骗 。",
                explanationZh: "丁氏在国君派人询问时立刻诚实澄清了真相，并不存在隐瞒或欺骗。",
                explanationEn: "The Ding family immediately and honestly clarified the facts; there was no deception involved."
            }
        ]
    }
];
