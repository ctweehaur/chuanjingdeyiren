// ============================================================================
// 穿井得一人 - 白话翻译数据包（完整修复版）
// 与 poemData 的7行原文一一对应
// ============================================================================

const translationData = [
    {
        lineIndex: 0,
        zh: "宋国有一户姓丁的人家，家里没有水井，需要到外面浇灌田地、打水回家，因此经常要有一个劳动力专门停留在外面从事打水的工作。",
        py: "sòng guó yǒu yī hù xìng dīng de rén jiā ， jiā lǐ méi yǒu shuǐ jǐng ， xū yào dào wài miàn jiāo guàn tián dì 、 dǎ shuǐ huí jiā ， yīn cǐ jīng cháng yào yǒu yī gè láo dòng lì zhuān mén tíng liú zài wài miàn cóng shì dǎ shuǐ de gōng zuò 。",
        en: "There was a Ding family in the state of Song whose house had no well. They had to go outside to irrigate the fields and fetch water. Therefore, one family member was constantly occupied outside doing this heavy chore."
    },
    {
        lineIndex: 1,
        zh: "等到他家挖好了水井，就告诉别人说：'我们家挖井得到一个人的劳力。'",
        py: "děng dào tā jiā wā hǎo le shuǐ jǐng ， jiù gào su bié rén shuō ： ' wǒ men jiā wā jǐng dé dào yī gè rén de láo lì 。'",
        en: "When they finally dug a well in their yard, they told others: 'Digging the well has gained us one person's labor.'"
    },
    {
        lineIndex: 2,
        zh: "有人听到这句话就四处传播说：'丁氏挖井挖出了一个人！'",
        py: "yǒu rén tīng dào zhè jù huà jiù sì chù chuán bō shuō ： ' dīng shì wā jǐng wā chū le yī gè rén ！'",
        en: "Someone heard this and spread the hearsay: 'The Ding family dug up a real person from their well!'"
    },
    {
        lineIndex: 3,
        zh: "国都里的人都在谈论这件事，最后连宋国国君也听到了这个传闻。",
        py: "guó dū lǐ de rén dōu zài tán lùn zhè jiàn shì ， zuì hòu lián sòng guó guó jūn yě tīng dào le zhè gè chuán wén 。",
        en: "The whole city began to gossip about it, and eventually, the rumor reached the ears of the ruler of Song."
    },
    {
        lineIndex: 4,
        zh: "宋国国君派人去向丁氏调查核实这件事。",
        py: "sòng guó guó jūn pài rén qù xiàng dīng shì diào chá hé shí zhè jiàn shì 。",
        en: "The ruler of Song then sent someone to the Ding family to verify this bizarre story."
    },
    {
        lineIndex: 5,
        zh: "丁氏回答说：'是得到了一个人的劳动力，而不是从井里面挖出了一个人啊。'",
        py: "dīng shì huí dá shuō ： ' shì dé dào le yī gè rén de láo dòng lì ， ér bú shì cóng jǐng lǐ miàn wā chū le yī gè rén ā 。'",
        en: "The Ding family replied: 'We meant we gained the labor of one person, not that we dug up a physical human being from the well.'"
    },
    {
        lineIndex: 6,
        zh: "像这样去寻求听闻到的消息，还不如什么都听不到呢。",
        py: "xiàng zhè yàng qù qiú xún tīng wén dào de xiāo xī ， hái bù rú shén me dōu tīng bú dào ne 。",
        en: "Seeking and relying on information in such a distorted manner is far worse than hearing nothing at all."
    }
];

// 辅助函数：根据行索引获取翻译
function getTranslationByLineIndex(lineIndex) {
    return translationData.find(item => item.lineIndex === lineIndex);
}

// 辅助函数：获取所有翻译
function getAllTranslations() {
    return translationData;
}

// 辅助函数：渲染完整翻译块（带分隔线）
function renderTranslationBlock() {
    let html = '';
    translationData.forEach((item, index) => {
        html += `
            <div class="trans-text-line" data-line="${item.lineIndex}">
                <div class="trans-py">${item.py}</div>
                <div class="trans-zh">${item.zh}</div>
                <div class="trans-en">${item.en}</div>
            </div>
        `;
        // 最后一条不加分隔线
        if (index < translationData.length - 1) {
            html += `<div class="trans-divider"></div>`;
        }
    });
    return html;
}

// 导出到全局
window.translationData = translationData;
window.getTranslationByLineIndex = getTranslationByLineIndex;
window.getAllTranslations = getAllTranslations;
window.renderTranslationBlock = renderTranslationBlock;
