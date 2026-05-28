// ============================================================================
// 穿井得一人 - 核心正文数据（简化版）
// ============================================================================

const poemData = {
    title: "穿井得一人",
    author: "《吕氏春秋·察今》 / 吕不韦 (先秦)",
    lines: [
        "宋之丁氏，家无井而出溉汲，常一人居外。",
        "及其家穿井，告人曰：“吾穿井得一人。”",
        "有闻而传之者曰：“丁氏穿井得一人。”",
        "国人道之，闻之于宋君。",
        "宋君令人问之于丁氏。",
        "丁氏对曰：“得一人之使，非得一人于井中也。”",
        "求闻之若此，不若无闻也。"
    ],
    // 词义库（点击查词用）
    wordMeanings: {
        "宋": { pinyin: "sòng", zh: "春秋时的诸侯国名，宋国。", en: "The State of Song." },
        "之": { pinyin: "zhī", zh: "结构助词，相当于‘的’。", en: "possessive particle 'of'." },
        "丁氏": { pinyin: "dīng shì", zh: "姓丁的一户人家。", en: "The Ding family." },
        "家": { pinyin: "jiā", zh: "家里。", en: "family" },
        "无井": { pinyin: "wú jǐng", zh: "没有水井。", en: "had no well" },
        "而": { pinyin: "ér", zh: "连词，于是、就。", en: "so" },
        "出": { pinyin: "chū", zh: "外出。", en: "went out" },
        "溉汲": { pinyin: "gài jí", zh: "灌溉和打水。", en: "irrigate and fetch water" },
        "常": { pinyin: "cháng", zh: "经常。", en: "often" },
        "一人": { pinyin: "yī rén", zh: "一个人。", en: "one person", exam: true },
        "居外": { pinyin: "jū wài", zh: "住在外面。", en: "stayed outside" },
        "及": { pinyin: "jí", zh: "等到。", en: "when" },
        "其": { pinyin: "qí", zh: "他的。", en: "his" },
        "穿井": { pinyin: "chuān jǐng", zh: "开凿水井。", en: "dug a well" },
        "告人": { pinyin: "gào rén", zh: "告诉别人。", en: "told others" },
        "曰": { pinyin: "yuē", zh: "说。", en: "said" },
        "吾": { pinyin: "wú", zh: "我。", en: "I", exam: true },
        "得": { pinyin: "dé", zh: "获得、得到。", en: "gained", exam: true },
        "有": { pinyin: "yǒu", zh: "有人。", en: "there is" },
        "闻而传之者": { pinyin: "wén ér chuán zhī zhě", zh: "听到并传播的人。", en: "someone who heard and spread" },
        "国人": { pinyin: "guó rén", zh: "国都的人。", en: "people of the state" },
        "道之": { pinyin: "dào zhī", zh: "谈论这件事。", en: "talked about it" },
        "闻之于宋君": { pinyin: "wén zhī yú sòng jūn", zh: "被宋君听到。", en: "was heard by the ruler" },
        "宋君": { pinyin: "sòng jūn", zh: "宋国国君。", en: "ruler of Song" },
        "令人": { pinyin: "lìng rén", zh: "派人。", en: "sent someone" },
        "问之": { pinyin: "wèn zhī", zh: "询问此事。", en: "asked about it" },
        "于丁氏": { pinyin: "yú dīng shì", zh: "向丁家。", en: "from the Ding family" },
        "对曰": { pinyin: "duì yuē", zh: "回答说。", en: "replied" },
        "一人之使": { pinyin: "yī rén zhī shǐ", zh: "一个人的劳力。", en: "one person's labor", exam: true },
        "非": { pinyin: "fēi", zh: "不是。", en: "not" },
        "于井中": { pinyin: "yú jǐng zhōng", zh: "在井里。", en: "in the well" },
        "求闻": { pinyin: "qiú wén", zh: "寻求传闻。", en: "seeking news", exam: true },
        "若此": { pinyin: "ruò cǐ", zh: "像这样。", en: "like this", exam: true },
        "不若": { pinyin: "bù ruò", zh: "不如。", en: "worse than" },
        "无闻": { pinyin: "wú wén", zh: "没听到。", en: "hearing nothing" },
        "也": { pinyin: "yě", zh: "啊（语气词）。", en: "" }
    },
    examWords: ["一人", "吾", "得", "一人之使", "求闻", "若此"]
};

// 辅助函数
function getLineText(lineIndex) {
    return poemData.lines[lineIndex] || "";
}

function getFullText() {
    return poemData.lines.join("");
}

function isExamWord(word) {
    return poemData.examWords.includes(word);
}

function getWordMeaning(word) {
    return poemData.wordMeanings[word] || { 
        pinyin: "", 
        zh: "暂无释义", 
        en: "No definition available" 
    };
}

window.poemData = poemData;
window.getLineText = getLineText;
window.getFullText = getFullText;
window.isExamWord = isExamWord;
window.getWordMeaning = getWordMeaning;
