// 穿井得一人 - 核心正文及逐字解析数据（100% 完整版）
const poemData = {
    title: "穿井得一人",
    author: "《吕氏春秋》",
    lines: [
        {
            lineIndex: 1,
            words: [
                { text: "宋", pinyin: "Sòng", zh: "宋国，周代诸侯国名。", en: "The State of Song", examFocus: false, exam: false },
                { text: "之", pinyin: "zhī", zh: "助词，相当于“的”。", en: "Possessive particle 'of'", examFocus: false, exam: false },
                { text: "丁", pinyin: "Dīng", zh: "丁氏，宋国的一户姓丁的人家。", en: "The Ding family", examFocus: false, exam: false },
                { text: "氏", pinyin: "shì", zh: "氏，表示家族、姓氏。", en: "Family name suffix", examFocus: false, exam: false },
                { text: "，", isPunctuation: true },
                { text: "家", pinyin: "jiā", zh: "家里，居住的地方。", en: "Family / Household", examFocus: false, exam: false },
                { text: "无", pinyin: "wú", zh: "没有。", en: "Did not have", examFocus: false, exam: false },
                { text: "井", pinyin: "jǐng", zh: "水井。", en: "A water well", examFocus: false, exam: false },
                { text: "出", pinyin: "chū", zh: "出去，到外面。", en: "To go out", examFocus: false, exam: false },
                { text: "溉", pinyin: "gài", zh: "浇灌，灌溉田地。", en: "To irrigate / water fields", examFocus: true, exam: true },
                { text: "汲", pinyin: "jí", zh: "从井里打水。", en: "To draw water from a well", examFocus: true, exam: true },
                { text: "，", isPunctuation: true },
                { text: "常", pinyin: "cháng", zh: "经常，往往。", en: "Often / Regularly", examFocus: false, exam: false },
                { text: "一", pinyin: "yī", zh: "一个。", en: "One", examFocus: false, exam: false },
                { text: "人", pinyin: "rén", zh: "人员，劳动力。", en: "Person (laborer)", examFocus: false, exam: false },
                { text: "居", pinyin: "jū", zh: "停留，这里指专门停留在一处（这里指在外面做打水浇田的工作）。", en: "Stayed permanently / Was occupied with", examFocus: true, exam: true },
                { text: "外", pinyin: "wài", zh: "外面。", en: "Outside", examFocus: false, exam: false },
                { text: "自", pinyin: "zì", zh: "从，由。", en: "From", examFocus: false, exam: false },
                { text: "环", pinyin: "huán", zh: "环绕，这里指引水灌溉或来回奔波。", en: "Circulate / Go back and forth", examFocus: false, exam: false },
                { text: "。", isPunctuation: true }
            ]
        },
        {
            lineIndex: 2,
            words: [
                { text: "及", pinyin: "jí", zh: "等到。", en: "Until / When it came to", examFocus: true, exam: true },
                { text: "其", pinyin: "qí", zh: "代词，他们，指丁氏家。", en: "Their", examFocus: false, exam: false },
                { text: "穿", pinyin: "chuān", zh: "挖掘，开凿（井）。", en: "Dug / Excavated", examFocus: true, exam: true },
                { text: "井", pinyin: "jǐng", zh: "水井。", en: "Well", examFocus: false, exam: false },
                { text: "，", isPunctuation: true },
                { text: "告", pinyin: "gào", zh: "告诉，对别人说。", en: "Told", examFocus: false, exam: false },
                { text: "人", pinyin: "rén", zh: "别人。", en: "Others", examFocus: false, exam: false },
                { text: "曰", pinyin: "yuē", zh: "说。", en: "Said", examFocus: false, exam: false },
                { text: "：", isPunctuation: true },
                { text: "“", isPunctuation: true },
                { text: "吾", pinyin: "wú", zh: "我们，我家。", en: "We / My family", examFocus: false, exam: false },
                { text: "穿", pinyin: "chuān", zh: "挖掘。", en: "Dug", examFocus: false, exam: false },
                { text: "井", pinyin: "jǐng", zh: "水井。", en: "Well", examFocus: false, exam: false },
                { text: "得", pinyin: "dé", zh: "得到，获得（这里指省下）。", en: "Gained (saved)", examFocus: true, exam: true },
                { text: "一", pinyin: "yī", zh: "一个。", en: "One", examFocus: false, exam: false },
                { text: "人", pinyin: "rén", zh: "人员，劳动力。", en: "Person's labor", examFocus: false, exam: false },
                { text: "。", hidePinyin: true, isPunctuation: true },
                { text: "”", isPunctuation: true }
            ]
        },
        {
            lineIndex: 3,
            words: [
                { text: "有", pinyin: "yǒu", zh: "有人。", en: "Someone", examFocus: false, exam: false },
                { text: "闻", pinyin: "wén", zh: "听见，听到。", en: "Heard", examFocus: true, exam: true },
                { text: "而", pinyin: "ér", zh: "连词，表顺接，就。", en: "And then", examFocus: false, exam: false },
                { text: "传", pinyin: "chuán", zh: "传播，传导。", en: "Spread / Rumored", examFocus: false, exam: false },
                { text: "之", pinyin: "zhī", zh: "代词，代指这句话。", en: "It (the statement)", examFocus: false, exam: false },
                { text: "者", pinyin: "zhě", zh: "……的人。", en: "People who...", examFocus: false, exam: false },
                { text: "曰", pinyin: "yuē", zh: "说。", en: "Said", examFocus: false, exam: false },
                { text: "：", isPunctuation: true },
                { text: "“", isPunctuation: true },
                { text: "丁", pinyin: "Dīng", zh: "姓丁的人家。", en: "The Ding family", examFocus: false, exam: false },
                { text: "氏", pinyin: "shì", zh: "氏。", en: "Family", examFocus: false, exam: false },
                { text: "穿", pinyin: "chuān", zh: "挖掘。", en: "Dug", examFocus: false, exam: false },
                { text: "井", pinyin: "jǐng", zh: "水井。", en: "Well", examFocus: false, exam: false },
                { text: "得", pinyin: "dé", zh: "得到，挖出。", en: "Found / Extracted", examFocus: false, exam: false },
                { text: "一", pinyin: "yī", zh: "一个。", en: "A", examFocus: false, exam: false },
                { text: "人", pinyin: "rén", zh: "活人。", en: "Live person", examFocus: false, exam: false },
                { text: "。", isPunctuation: true },
                { text: "”", isPunctuation: true }
            ]
        },
        {
            lineIndex: 4,
            words: [
                { text: "国", pinyin: "guó", zh: "国都，京城。", en: "The capital city", examFocus: true, exam: true },
                { text: "人", pinyin: "rén", zh: "居住在国都里的人，百姓。", en: "Citizens / Public", examFocus: true, exam: true },
                { text: "道", pinyin: "dào", zh: "讲述，说，谈论。", en: "Talked about / Discussed", examFocus: true, exam: true },
                { text: "之", pinyin: "zhī", zh: "代词，这件事。", en: "It (the news)", examFocus: false, exam: false },
                { text: "，", isPunctuation: true },
                { text: "闻", pinyin: "wén", zh: "传到，使……听到。", en: "Reached the ears of", examFocus: false, exam: false },
                { text: "诸", pinyin: "zhū", zh: "兼词，“之于”的合音。", en: "Combination of 'it' and 'to'", examFocus: true, exam: true },
                { text: "宋", pinyin: "Sòng", zh: "宋国。", en: "Song", examFocus: false, exam: false },
                { text: "君", pinyin: "jūn", zh: "国君，君主。", en: "The ruler", examFocus: false, exam: false },
                { text: "。", isPunctuation: true }
            ]
        },
        {
            lineIndex: 5,
            words: [
                { text: "宋", pinyin: "Sòng", zh: "宋国。", en: "Song", examFocus: false, exam: false },
                { text: "君", pinyin: "jūn", zh: "国君。", en: "Ruler", examFocus: false, exam: false },
                { text: "使", pinyin: "shǐ", zh: "派遣，委派。", en: "Dispatched / Sent", examFocus: true, exam: true },
                { text: "人", pinyin: "rén", zh: "人员，使者。", en: "Someone / Envoy", examFocus: false, exam: false },
                { text: "问", pinyin: "wèn", zh: "询问，调查核实。", en: "Inquire / Investigate", examFocus: false, exam: false },
                { text: "之", pinyin: "zhī", zh: "代词，向丁氏求证这件事。", en: "The matter", examFocus: false, exam: false },
                { text: "于", pinyin: "yú", zh: "介词，向。", en: "From / To", examFocus: false, exam: false },
                { text: "丁", pinyin: "Dīng", zh: "姓丁的那家。", en: "The Ding family", examFocus: false, exam: false },
                { text: "氏", pinyin: "shì", zh: "氏。", en: "Family", examFocus: false, exam: false },
                { text: "。", isPunctuation: true }
            ]
        },
        {
            lineIndex: 6,
            words: [
                { text: "丁", pinyin: "Dīng", zh: "姓丁的人家。", en: "The Ding family", examFocus: false, exam: false },
                { text: "氏", pinyin: "shì", zh: "氏。", en: "Family", examFocus: false, exam: false },
                { text: "对", pinyin: "duì", zh: "回答。", en: "Replied / Answered", examFocus: true, exam: true },
                { text: "曰", pinyin: "yuē", zh: "说。", en: "Said", examFocus: false, exam: false },
                { text: "：", isPunctuation: true },
                { text: "“", isPunctuation: true },
                { text: "得", pinyin: "dé", zh: "得到，省下。", en: "Gained (saved)", examFocus: false, exam: false },
                { text: "一", pinyin: "yī", zh: "一个。", en: "One", examFocus: false, exam: false },
                { text: "人", pinyin: "rén", zh: "人员，劳动力。", en: "Person's labor", examFocus: false, exam: false },
                { text: "之", pinyin: "zhī", zh: "助词，的。", en: "Of", examFocus: false, exam: false },
                { text: "力", pinyin: "lì", zh: "劳动力，精力。", en: "Labor / Effort", examFocus: false, exam: false },
                { text: "，", isPunctuation: true },
                { text: "非", pinyin: "fēi", zh: "不是。", en: "Not that", examFocus: true, exam: true },
                { text: "得", pinyin: "dé", zh: "得到，挖出。", en: "Found", examFocus: false, exam: false },
                { text: "一", pinyin: "yī", zh: "一个。", en: "A", examFocus: false, exam: false },
                { text: "人", pinyin: "rén", zh: "活人。", en: "Live person", examFocus: false, exam: false },
                { text: "于", pinyin: "yú", zh: "介词，从……当中。", en: "From inside", examFocus: false, exam: false },
                { text: "井", pinyin: "jǐng", zh: "水井。", en: "Well", examFocus: false, exam: false },
                { text: "中", pinyin: "zhōng", zh: "里面。", en: "In", examFocus: false, mergeNext: true },
                { text: "也", pinyin: "yě", zh: "语气助词，表表白或判断。", en: "Particle indicating statement of fact", examFocus: false, exam: false },
                { text: "。", isPunctuation: true },
                { text: "”", isPunctuation: true }
            ]
        },
        {
            lineIndex: 7,
            words: [
                { text: "求", pinyin: "qiú", zh: "寻求，获取信息。", en: "Seeking / Pursuing information", examFocus: true, exam: true },
                { text: "闻", pinyin: "wén", zh: "听到的传闻，消息。", en: "News / Hearsay", examFocus: false, exam: false },
                { text: "之", pinyin: "zhī", zh: "指示代词，像这样。", en: "Like this", examFocus: false, exam: false },
                { text: "若", pinyin: "ruò", zh: "好像，如果（这里指如此）。", en: "As / In such a way", examFocus: true, exam: true },
                { text: "此", pinyin: "cǐ", zh: "这，这样。", en: "This", examFocus: false, exam: false },
                { text: "，", isPunctuation: true },
                { text: "不", pinyin: "bù", zh: "不。", en: "Not", examFocus: false, exam: false },
                { text: "如", pinyin: "rú", zh: "如同，不如。", en: "As good as / Better to have", examFocus: true, exam: true },
                { text: "无", pinyin: "wú", zh: "没有。", en: "No", examFocus: false, exam: false },
                { text: "闻", pinyin: "wén", zh: "听到，知道消息。", en: "Hearing anything at all", examFocus: false, exam: false },
                { text: "也", pinyin: "yě", zh: "语气助词，表感叹或断定。", en: "Final particle of emphasis", examFocus: false, exam: false },
                { text: "。", isPunctuation: true }
            ]
        }
    ]
};
