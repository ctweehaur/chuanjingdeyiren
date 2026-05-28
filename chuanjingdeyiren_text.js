// ============================================================================
// 穿井得一人 - 核心正文及逐字解析数据（完整修复版）
// ============================================================================

const poemData = {
    title: "穿井得一人",
    author: "《吕氏春秋·察今》 / 吕不韦 (先秦)",
    lines: [
        {
            words: [
                { text: "宋", pinyin: "sòng", zh: "春秋时的诸侯国名，宋国。", en: "The State of Song." },
                { text: "之", pinyin: "zhī", zh: "结构助词，相当于‘的’。", en: "possessive particle 'of'." },
                { text: "丁氏", pinyin: "dīng shì", zh: "姓丁的一户人家。氏：表示家族或姓氏。", en: "The Ding family." },
                { text: "，", isPunctuation: true },
                { text: "家", pinyin: "jiā", zh: "名词作状语，指在家里或家境。", en: "In the family," },
                { text: "无井", pinyin: "wú jǐng", zh: "没有水井。无：没有；井：水井。", en: "had no water well," },
                { text: "而", pinyin: "ér", zh: "连词，表顺承，相当于‘就’、‘于是’。", en: "so" },
                { text: "出", pinyin: "chū", zh: "动词，外出、到外面去。", en: "went out" },
                { text: "溉汲", pinyin: "gài jí", zh: "指翻土浇田和打水。溉：同‘溉’，灌溉、浇地；汲：从井里打水。", en: "to irrigate and fetch water." },
                { text: "，", isPunctuation: true },
                { text: "常", pinyin: "cháng", zh: "副词，经常、常常。", en: "often" },
                { text: "一人", pinyin: "yī rén", zh: "一个劳动力、一个人。", en: "one person" },
                { text: "居外", pinyin: "jū wài", zh: "常年呆在外面打水。居：停留、居住；外：外面。", en: "stayed outside." },
                { text: "。", isPunctuation: true }
            ]
        },
        {
            words: [
                { text: "及", pinyin: "jí", zh: "介词，等到、到了……时候。", en: "When" },
                { text: "其", pinyin: "qí", zh: "代词，他、他们（指丁家）。", en: "their" },
                { text: "家", pinyin: "jiā", zh: "家里。", en: "family" },
                { text: "穿井", pinyin: "chuān jǐng", zh: "打井、挖掘水井。穿：凿通、挖掘；井：水井。", en: "dug a well," },
                { text: "，", isPunctuation: true },
                { text: "告人", pinyin: "gào rén", zh: "告诉别人。告：告诉；人：别人、他人。", en: "told others" },
                { text: "曰", pinyin: "yuē", zh: "动词，说。", en: "said," },
                { text: "“", isPunctuation: true },
                { text: "吾", pinyin: "wú", zh: "我，或者我们（指我丁家）。", en: "We", exam: true },
                { text: "穿井", pinyin: "chuān jǐng", zh: "挖掘水井。", en: "dug a well" },
                { text: "得", pinyin: "dé", zh: "获得、多得到。这里特指‘省下’了一个人力。", en: "and gained" },
                { text: "一人", pinyin: "yī rén", zh: "一个人的劳动力。", en: "one person's labor.", exam: true },
                { text: "”", isPunctuation: true },
                { text: "。", isPunctuation: true }
            ]
        },
        {
            words: [
                { text: "有", pinyin: "yǒu", zh: "动词，有（人）。", en: "There was someone who" },
                { text: "闻而传之者", pinyin: "wén ér chuán zhī zhě", zh: "听到并传播这件事的人。闻：听说、听到；而：连词；传：传播；之：代词；者：……的人。", en: "heard it and spread the rumor," },
                { text: "曰", pinyin: "yuē", zh: "说。", en: "saying," },
                { text: "“", isPunctuation: true },
                { text: "丁氏", pinyin: "dīng shì", zh: "丁家。", en: "The Ding family" },
                { text: "穿井", pinyin: "chuān jǐng", zh: "挖井。", en: "dug a well" },
                { text: "得", pinyin: "dé", zh: "误传为‘获得’或‘挖出’了一个人。", en: "and found", exam: true },
                { text: "一人", pinyin: "yī rén", zh: "一个人（实体的人）。", en: "a person inside.", exam: true },
                { text: "”", isPunctuation: true },
                { text: "。", isPunctuation: true }
            ]
        },
        {
            words: [
                { text: "国人", pinyin: "guó rén", zh: "国都里的人，后引申为全国的人民。", en: "People of the state" },
                { text: "道之", pinyin: "dào zhī", zh: "谈论这件事。道：动词，谈论、述说；之：代词。", en: "talked about it," },
                { text: "，", isPunctuation: true },
                { text: "闻之于宋君", pinyin: "wén zhī yú sòng jūn", zh: "这件事被宋国国君听说了。闻：被动用法；之：代词；于：介词，相当于‘被’；宋君：宋国国君。", en: "and it was heard by the ruler of Song." },
                { text: "。", isPunctuation: true }
            ]
        },
        {
            words: [
                { text: "宋君", pinyin: "sòng jūn", zh: "宋国的国君。", en: "The ruler of Song" },
                { text: "令人", pinyin: "lìng rén", zh: "派人、派遣别人。令：动词，派遣、命令。", en: "sent someone" },
                { text: "问之", pinyin: "wèn zhī", zh: "询问这件事。问：询问、调查；之：代词。", en: "to ask about it" },
                { text: "于丁氏", pinyin: "yú dīng shì", zh: "向姓丁的人家调查。于：介词，向、从；丁氏：丁家。", en: "from the Ding family." },
                { text: "。", isPunctuation: true }
            ]
        },
        {
            words: [
                { text: "丁氏", pinyin: "dīng shì", zh: "丁家的人。", en: "The man of the Ding family" },
                { text: "对曰", pinyin: "duì yuē", zh: "回答说。对：回答；曰：说。", en: "replied:" },
                { text: "：", isPunctuation: true },
                { text: "“", isPunctuation: true },
                { text: "得", pinyin: "dé", zh: "获得、多得到。", en: "We gained", exam: true },
                { text: "一人之使", pinyin: "dé yī rén zhī shǐ", zh: "得到一个人的劳动力（供使唤）。使：名词，劳力、使唤、佣工；之：结构助词‘的’。", en: "the labor of one person,", exam: true },
                { text: "，", isPunctuation: true },
                { text: "非", pinyin: "fēi", zh: "副词，不是。", en: "not" },
                { text: "得", pinyin: "dé", zh: "获得。", en: "finding" },
                { text: "一人", pinyin: "yī rén", zh: "一个人。", en: "a person" },
                { text: "于井中", pinyin: "yú jǐng zhōng", zh: "在水井里面。于：介词，在；井中：井底。", en: "in the well." },
                { text: "”", isPunctuation: true },
                { text: "。", isPunctuation: true }
            ]
        },
        {
            words: [
                { text: "求闻", pinyin: "qiú wén", zh: "寻觅、探求听到的传闻消息。求：寻求、探求；闻：听到的传闻。", en: "Seeking news", exam: true },
                { text: "之", pinyin: "zhī", zh: "音节助词，无实际意义。", en: "" },
                { text: "若此", pinyin: "ruò cǐ", zh: "像这样（盲目轻信、以讹传讹）。若：像；此：这样。", en: "like this,", exam: true },
                { text: "，", isPunctuation: true },
                { text: "不若", pinyin: "bù ruò", zh: "不如、还不如。", en: "is worse than" },
                { text: "无闻", pinyin: "wú wén", zh: "没有听到过消息。无：没有；闻：听到。", en: "hearing nothing" },
                { text: "也", pinyin: "yě", zh: "语气助词，表感叹或表态语气，相当于‘啊’。", en: "at all." },
                { text: "。", isPunctuation: true }
            ]
        }
    ]
};

// 辅助函数：获取整行原文（纯文本）
function getLineText(lineIndex) {
    if (!poemData.lines[lineIndex]) return "";
    return poemData.lines[lineIndex].words
        .map(w => w.isPunctuation ? w.text : w.text)
        .join("");
}

// 辅助函数：获取全文纯文本
function getFullText() {
    return poemData.lines.map((_, i) => getLineText(i)).join("");
}

// 辅助函数：获取所有需要高亮的考点词
function getExamWords() {
    const examWords = [];
    poemData.lines.forEach((line, lineIdx) => {
        line.words.forEach((word, wordIdx) => {
            if (word.exam === true && !word.isPunctuation) {
                examWords.push({
                    line: lineIdx,
                    word: wordIdx,
                    text: word.text,
                    pinyin: word.pinyin,
                    zh: word.zh,
                    en: word.en
                });
            }
        });
    });
    return examWords;
}

// 导出到全局
window.poemData = poemData;
window.getLineText = getLineText;
window.getFullText = getFullText;
window.getExamWords = getExamWords;
