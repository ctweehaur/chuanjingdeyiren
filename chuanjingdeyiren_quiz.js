// ============================================================================
// 穿井得一人 - 客观题自测数据包（完整修复版）
// ============================================================================

const QUIZ_CONFIG = {
    totalQuestions: 5,
    passingScore: 3,
    version: "1.0"
};

const quizQuestions = [
    {
        id: 1,
        type: "comprehension",
        difficulty: "easy",
        text: "宋国丁氏在穿井之前，遇到的主要问题是什么？",
        py: "sòng guó dīng shì zài chuān jǐng zhī qián ， yù dào de zhǔ yào wèn tí shì shén me ？",
        en: "What was the main problem faced by the Ding family of Song before digging the well?",
        options: [
            { 
                text: "家里没有钱雇佣劳动力", 
                py: "jiā lǐ méi yǒu qián gù yōng láo dòng lì", 
                en: "The family had no money to hire labor.", 
                correct: false, 
                explanationZh: "❌ 错误原因：课文完全没有提到丁家的经济状况，这属于主观臆测。正确理解应结合原文'家无井而出溉汲，常一人居外'，主要问题是'没有水井导致需要专人外出打水'。",
                explanationPy: "cuò wù yuán yīn ： kè wén wán quán méi yǒu tí dào dīng jiā de jīng jì zhuàng kuàng ， zhè shǔ yú zhǔ guān yì cè 。 zhèng què lǐ jiě yīng jié hé yuán wén 'jiā wú jǐng ér chū gài jí ， cháng yī rén jū wài' ， zhǔ yào wèn tí shì 'méi yǒu shuǐ jǐng dǎo zhì xū yào zhuān rén wài chū dǎ shuǐ'。",
                explanationEn: "❌ Incorrect: The text does not mention their financial status. The correct understanding: 'no well → need dedicated person to fetch water' as stated in the original text."
            },
            { 
                text: "家里没有水井需要派人去外面打水", 
                py: "jiā lǐ méi yǒu shuǐ jǐng xū yào pài rén qù wài miàn dǎ shuǐ", 
                en: "They had no well and had to send someone outside to fetch water.", 
                correct: true, 
                explanationZh: "✅ 正确解释：对照原文'家无井而出溉汲，常一人居外'，证实因无井而耗费劳力，这是丁家面临的主要问题。",
                explanationPy: "duì zhào yuán wén “ jiā wú jǐng ér chū gài jí ， cháng yī rén jū wài ” ， zhèng shí yīn wú jǐng ér hào fèi láo lì ， zhè shì dīng jiā miàn lín de zhǔ yào wèn tí 。",
                explanationEn: "✅ Correct: Matches the text: 'The family had no well... so one person constantly stayed outside to fetch water.'"
            },
            { 
                text: "打水的仆人在外面逃跑了", 
                py: "dǎ shuǐ de pú rén zài wài miàn táo pǎo le", 
                en: "The servant who fetched water ran away.", 
                correct: false, 
                explanationZh: "❌ 错误原因：'居外'的意思是呆在外面工作，而非逃跑。文中没有任何关于仆人逃跑的描述。",
                explanationPy: "“ jū wài ” de yì sī shì dāi zài wài miàn gōng zuò ， ér fēi táo pǎo 。 wén zhōng méi yǒu rèn hé guān yú pú rén táo pǎo de miáo shù 。",
                explanationEn: "❌ Incorrect: 'Ju wai' means staying outside to work, not escaping. No mention of servants running away."
            },
            { 
                text: "宋国的诸侯征收昂贵的水税", 
                py: "sòng guó de zhū hóu zhēng shōu áng guì de shuǐ shuì", 
                en: "The ruler of Song imposed a heavy tax on water.", 
                correct: false, 
                explanationZh: "❌ 错误原因：背景中完全没有提到征税的内容，这是脱离文本的臆想。",
                explanationPy: "bèi jǐng zhōng wán quán méi yǒu tí dào zhēng shuì de nèi róng ， zhè shì tuō lí wén běn de yì xiǎng 。",
                explanationEn: "❌ Incorrect: There is no mention of water taxes in the text at all."
            }
        ]
    },
    {
        id: 2,
        type: "comprehension",
        difficulty: "medium",
        text: "丁氏说'吾穿井得一人'的真实本意是什么？",
        py: "dīng shì shuō “ wú chuān jǐng dé yī rén ” de zhēn shí běn yì shì shén me ？",
        en: "What was the real meaning of Ding's statement 'We gained a person by digging a well'?",
        options: [
            { 
                text: "在挖井的过程中挖出了一个活人", 
                py: "zài wā jǐng de guò chéng zhōng wā chū le yī gè huó rén", 
                en: "They dug up a living person from inside the well.", 
                correct: false, 
                explanationZh: "❌ 错误原因：这是别人道听途说的谣言误解，不是丁氏的本意。丁氏后来澄清'非得一人于井中也'。",
                explanationPy: "zhè shì bié rén dào tīng tú shuō de yáo yán wù jiě ， bú shì dīng shì de běn yì 。 dīng shì hòu lái chéng qīng 'fēi dé yī rén yú jǐng zhōng yě'。",
                explanationEn: "❌ Incorrect: This is the rumored misunderstanding, not Ding's original meaning. Ding later clarified: 'not finding a person from inside the well.'"
            },
            { 
                text: "家里多了一个仆人来帮忙挖井", 
                py: "jiā lǐ duō le yī gè pú rén lái bāng máng wā jǐng", 
                en: "They acquired a new servant to help dig the well.", 
                correct: false, 
                explanationZh: "❌ 错误原因：丁家是自己挖井，而不是雇佣新人。'得一人'指的是释放了一个人力，而非增加仆人。",
                explanationPy: "dīng jiā shì zì jǐ wā jǐng ， ér bú shì gù yōng xīn rén 。 'dé yī rén' zhǐ de shì shì fàng le yī gè rén lì ， ér fēi zēng jiā pú rén 。",
                explanationEn: "❌ Incorrect: They dug it themselves rather than hiring a new worker. 'Gained a person' means freeing up labor, not hiring."
            },
            { 
                text: "省下了一个专门外出打水的劳动力", 
                py: "shěng xià le yī gè zhuān mén wài chū dǎ shuǐ de láo dòng lì", 
                en: "They saved the labor of one person who used to fetch water outside.", 
                correct: true, 
                explanationZh: "✅ 正确解释：由于家里有了井，原本必须在外打水的人可以撤回家帮忙，省下了人力。这就是'得一人之使'的真正含义。",
                explanationPy: "yóu yú jiā lǐ yǒu le jǐng ， yuán běn bì xū zài wài dǎ shuǐ de rén kě yǐ chè huí jiā bāng máng ， shěng xià le rén lì 。 zhè jiù shì 'dé yī rén zhī shǐ' de zhēn zhèng hán yì 。",
                explanationEn: "✅ Correct: Since they had a well, the person fetching water was freed up. This is the true meaning of 'gained the labor of one person.'"
            },
            { 
                text: "挖井的技术非常高超只需要一个人", 
                py: "wā jǐng de jì shù fēi cháng gāo chāo zhī xū yào yī gè rén", 
                en: "The well-digging technique was so advanced it required only one person.", 
                correct: false, 
                explanationZh: "❌ 错误原因：文章强调的是劳动力的释放，而非挖井技术。'得一人'是结果，不是过程。",
                explanationPy: "wén zhāng qiáng diào de shì láo dòng lì de shì fàng ， ér fēi wā jǐng jì shù 。 'dé yī rén' shì jié guǒ ， bú shì guò chéng 。",
                explanationEn: "❌ Incorrect: The text emphasizes the freeing of labor, not the technique of well-digging."
            }
        ]
    },
    {
        id: 3,
        type: "vocabulary",
        difficulty: "medium",
        text: "下列句子中'闻'字的解释错误的一项是：",
        py: "xià liè jù zi zhōng “ wén ” zì de jiě shì cuò wù de yī xiàng shì ：",
        en: "Which of the following explanations for the character 'Wen' is INCORRECT?",
        options: [
            { 
                text: "有闻而传之者（闻：听说）", 
                py: "yǒu wén ér chuán zhī zhě （ wén ： tīng shuō ）", 
                en: "Someone heard it (Wen: heard)", 
                correct: false, 
                explanationZh: "✅ 解释正确，这里指听到丁家传出的话语。", 
                explanationPy: "jiě shì zhèng què ， zhè lǐ zhǐ tīng dào dīng jiā chuán chū de huà yǔ 。", 
                explanationEn: "✅ Correct explanation: 'Heard' as in hearing Ding's statement."
            },
            { 
                text: "闻之于宋君（闻：使……听到）", 
                py: "wén zhī yú sòng jūn （ wén ： shǐ …… tīng dào ）", 
                en: "Heard by the ruler (Wen: cause to hear)", 
                correct: false, 
                explanationZh: "✅ 解释正确，指这件事让宋国国君听到了（被动用法）。", 
                explanationPy: "jiě shì zhèng què ， zhǐ zhè jiàn shì ràng sòng guó guó jūn tīng dào le （ bèi dòng yòng fǎ ） 。", 
                explanationEn: "✅ Correct explanation: Passive construction meaning 'was heard by the ruler.'"
            },
            { 
                text: "求闻之若此（闻：闻气味）", 
                py: "qiú wén zhī ruò cǐ （ wén ： wén qì wèi ）", 
                en: "Seeking news (Wen: smell odor)", 
                correct: true, 
                explanationZh: "❌ 解释错误！文言中'闻'在此处意为'消息、传闻'，而非'闻气味'。这是古今异义词的典型例子。",
                explanationPy: "jiě shì cuò wù ！ wén yán zhōng “ wén ” zài cǐ chù yì wèi “ xiāo xī 、 chuán wén ” ， ér fēi “ wén qì wèi ” 。 zhè shì gǔ jīn yì yì cí de diǎn xíng lì zi 。",
                explanationEn: "❌ Incorrect! Here 'Wen' means 'news/rumor,' not 'smell.' This is a classic example of a word whose meaning changed over time."
            },
            { 
                text: "不若无闻也（闻：听到）", 
                py: "bù rú wú wén yě （ wén ： tīng dào ）", 
                en: "Better than hearing (Wen: hear)", 
                correct: false, 
                explanationZh: "✅ 解释正确，指还不如没有听到过这种消息。", 
                explanationPy: "jiě shì zhèng què ， zhǐ hái bù rú méi yǒu tīng dào guò zhè zhǒng xiāo xī 。", 
                explanationEn: "✅ Correct explanation: 'Hear' as in hearing news."
            }
        ]
    },
    {
        id: 4,
        type: "grammar",
        difficulty: "hard",
        text: "文中'闻之于宋君'的'于'字，其意思与下列哪项相同？",
        py: "wén zhōng “ wén zhī yú sòng jūn ” de “ yú ” zì ， qí yì sī yǔ xià liè nǎ xiàng xiāng tóng ？",
        en: "Which 'Yu' has the same meaning as 'Yu' in 'Wen Zhi Yu Song Jun'?",
        options: [
            { 
                text: "问之于丁氏（于：向）", 
                py: "wèn zhī yú dīng shì （ yú ： xiàng ）", 
                en: "Inquire from Ding (Yu: from)", 
                correct: false, 
                explanationZh: "❌ 不相同。这里的'于'表示'向'，而原句中的'于'表示被动'被'。", 
                explanationPy: "bù xiāng tóng 。 zhè lǐ de “ yú ” biǎo shì “ xiàng ” ， ér yuán jù zhōng de “ yú ” biǎo shì bèi dòng “ bèi ” 。", 
                explanationEn: "❌ Different: Here 'Yu' means 'from,' while the original means 'by' (passive marker)."
            },
            { 
                text: "得一人于井中（于：在）", 
                py: "dé yī rén yú jǐng zhōng （ yú ： zài ）", 
                en: "Found a person in the well (Yu: in)", 
                correct: false, 
                explanationZh: "❌ 不相同。这里的'于'表示'在'（地点），而原句表被动。", 
                explanationPy: "bù xiāng tóng 。 zhè lǐ de “ yú ” biǎo shì “ zài ” （ dì diǎn ） ， ér yuán jù biǎo bèi dòng 。", 
                explanationEn: "❌ Different: Here 'Yu' indicates location 'in,' while the original is passive."
            },
            { 
                text: "劳心者治人，劳力者治于人（于：被）", 
                py: "láo xīn zhě zhì rén ， láo lì zhě zhì yú rén （ yú ： bèi ）", 
                en: "Governed by others (Yu: by)", 
                correct: true, 
                explanationZh: "✅ 完全相同！'闻之于宋君'表被动，意为'被宋君听说'；'治于人'也是被动，意为'被人统治'。两者'于'都表示被动。", 
                explanationPy: "wán quán xiāng tóng ！ 'wén zhī yú sòng jūn' biǎo bèi dòng ， yì wèi 'bèi sòng jūn tīng shuō'； 'zhì yú rén' yě shì bèi dòng ， yì wèi 'bèi rén tǒng zhì'。 liǎng zhě 'yú' dōu biǎo shì bèi dòng 。", 
                explanationEn: "✅ Exactly the same! Both indicate passive voice: 'was heard by the ruler' and 'are governed by others.'"
            },
            { 
                text: "冰水为之而寒于水（于：比）", 
                py: "bīng shuǐ wéi zhī ér hán yú shuǐ （ yú ： bǐ ）", 
                en: "Colder than water (Yu: than)", 
                correct: false, 
                explanationZh: "❌ 不相同。这里的'于'表示比较'比……更'，而原句表被动。", 
                explanationPy: "bù xiāng tóng 。 zhè lǐ de “ yú ” biǎo shì bǐ jiào “ bǐ …… gèng ” ， ér yuán jù biǎo bèi dòng 。", 
                explanationEn: "❌ Different: Here 'Yu' is used for comparison 'than,' while the original is passive."
            }
        ]
    },
    {
        id: 5,
        type: "theme",
        difficulty: "easy",
        text: "这则寓言讽刺了现实中的哪种人？",
        py: "zhè zé yù yán fěng cì le xiàn shí zhōng de nǎ zhǒng rén ？",
        en: "What kind of people does this fable mainly satirize?",
        options: [
            { 
                text: "不愿努力工作的人", 
                py: "bù yuàn nǔ lì gōng zuò de rén", 
                en: "People unwilling to work hard.", 
                correct: false, 
                explanationZh: "❌ 错误原因：主旨与努力工作无关，本文核心是讽刺'以讹传讹'。", 
                explanationPy: "zhǔ zhǐ yǔ nǔ lì gōng zuò wú guān ， běn wén hé xīn shì fěng cì 'yǐ é chuán é'。", 
                explanationEn: "❌ Incorrect: The theme is about spreading rumors, not work ethic."
            },
            { 
                text: "盲目听信谣言、以讹传讹的人", 
                py: "máng mù tīng xìn yáo yán 、 yǐ é chuán é de rén", 
                en: "People who blindly believe and spread rumors without verification.", 
                correct: true, 
                explanationZh: "✅ 正确解释：这则寓言的核心讽刺对象就是'道听途说、以讹传讹'的人。结尾'求闻之若此，不若无闻也'直接点明了主旨。",
                explanationPy: "zhè zé yù yán de hé xīn fěng cì duì xiàng jiù shì 'dào tīng tú shuō 、 yǐ é chuán é' de rén 。 jié wěi 'qiú wén zhī ruò cǐ ， bù ruò wú wén yě' zhí jiē diǎn míng le zhǔ zhǐ 。",
                explanationEn: "✅ Correct: The fable satirizes those who spread rumors without verification. The ending directly states the theme."
            },
            { 
                text: "技术差劲的工人", 
                py: "jì shù chà jìn de gōng rén", 
                en: "Unskilled workers.", 
                correct: false, 
                explanationZh: "❌ 错误原因：文中没有讨论工人的技术水平，完全是偏离文本的理解。", 
                explanationPy: "wén zhōng méi yǒu tǎo lùn gōng rén de jì shù shuǐ píng ， wán quán shì piān lí wén běn de lǐ jiě 。",
                explanationEn: "❌ Incorrect: The text does not discuss workers' skill levels."
            },
            { 
                text: "欺骗国君的官员", 
                py: "qī piàn guó jūn de guān yuán", 
                en: "Officials who deceive the ruler.", 
                correct: false, 
                explanationZh: "❌ 错误原因：文中没有任何人欺骗国君。国君听到谣言后主动派人调查，反而是正面形象。",
                explanationPy: "wén zhōng méi yǒu rèn hé rén qī piàn guó jūn 。 guó jūn tīng dào yáo yán hòu zhǔ dòng pài rén diào chá ， fǎn ér shì zhèng miàn xíng xiàng 。",
                explanationEn: "❌ Incorrect: No one deceives the ruler. The ruler investigates the rumor, presenting a positive example."
            }
        ]
    }
];

// 辅助函数：获取所有题目
function getAllQuizQuestions() {
    return quizQuestions;
}

// 辅助函数：根据ID获取题目
function getQuizQuestionById(id) {
    return quizQuestions.find(q => q.id === id);
}

// 辅助函数：按类型筛选题目
function getQuizQuestionsByType(type) {
    return quizQuestions.filter(q => q.type === type);
}

// 辅助函数：按难度筛选题目
function getQuizQuestionsByDifficulty(difficulty) {
    return quizQuestions.filter(q => q.difficulty === difficulty);
}

// 辅助函数：随机打乱选项顺序
function shuffleOptions(question) {
    const shuffled = [...question.options];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 辅助函数：渲染单道题目
function renderQuizQuestion(question, index) {
    const letters = ['A', 'B', 'C', 'D'];
    const shuffledOpts = shuffleOptions(question);
    
    let optionsHtml = '';
    shuffledOpts.forEach((opt, idx) => {
        optionsHtml += `
            <button class="option-btn" data-correct="${opt.correct}" 
                data-explanation-correct="${opt.correct ? opt.explanationZh.replace(/"/g, '&quot;') : ''}"
                data-explanation-wrong="${!opt.correct ? opt.explanationZh.replace(/"/g, '&quot;') : ''}"
                data-opt-text="${opt.text}">
                <div class="opt-zh">${letters[idx]}. ${opt.text}</div>
                <div class="quiz-option-py">${opt.py}</div>
                <div class="quiz-option-en">${opt.en}</div>
            </button>
        `;
    });
    
    return `
        <div class="quiz-card" data-qid="${question.id}">
            <div class="question-header">
                <div class="q-py">${question.py}</div>
                <h4 class="q-zh">${question.id}. ${question.text}</h4>
                <div class="q-en">${question.en}</div>
                <div class="quiz-meta">
                    <span class="quiz-type">${question.type === 'comprehension' ? '📖 理解题' : question.type === 'vocabulary' ? '📝 词汇题' : question.type === 'grammar' ? '📐 语法题' : '🎯 主旨题'}</span>
                    <span class="quiz-difficulty">${question.difficulty === 'easy' ? '⭐ 简单' : question.difficulty === 'medium' ? '⭐⭐ 中等' : '⭐⭐⭐ 困难'}</span>
                </div>
            </div>
            <div class="options-area">${optionsHtml}</div>
            <div class="feedback"></div>
        </div>
    `;
}

// 辅助函数：渲染所有题目
function renderAllQuizQuestions() {
    return quizQuestions.map((q, idx) => renderQuizQuestion(q, idx)).join('');
}

// 导出到全局
window.quizQuestions = quizQuestions;
window.QUIZ_CONFIG = QUIZ_CONFIG;
window.getAllQuizQuestions = getAllQuizQuestions;
window.getQuizQuestionById = getQuizQuestionById;
window.getQuizQuestionsByType = getQuizQuestionsByType;
window.getQuizQuestionsByDifficulty = getQuizQuestionsByDifficulty;
window.shuffleOptions = shuffleOptions;
window.renderQuizQuestion = renderQuizQuestion;
window.renderAllQuizQuestions = renderAllQuizQuestions;
