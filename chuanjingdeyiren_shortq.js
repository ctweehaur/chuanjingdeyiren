// ============================================================================
// 穿井得一人 - 简答题特训数据包（完整修复版）
// ============================================================================

const SHORTQ_CONFIG = {
    totalQuestions: 5,
    version: "1.0",
    categories: ["comprehension", "theme", "analysis", "reflection", "application"]
};

const shortQQuestions = [
    {
        id: "Q1",
        category: "comprehension",
        text: "“穿井得一人”的谣言是如何产生的？请简要概括。",
        py: "“ chuān jǐng dé yī rén ” de yáo yán shì rú hé chǎn shēng de ？ qǐng jiǎn yào gài kuò 。",
        en: "How did the rumor 'digging a well gained a person' come about? Please summarize briefly.",
        strategyZh: "答题时需抓住“丁氏原意”与“传话者误解”的核心矛盾进行对比阐述。",
        strategyPy: "dá tí shí xū zhuā zhù “ dīng shì yuán yì ” yǔ “ chuán huà zhě wù jiě ” de hé xīn máo dùn jìn xíng duì bǐ chǎn shù 。",
        strategyEn: "Focus on the core contradiction between Ding's original intent and the messenger's misinterpretation.",
        answerZh: "谣言产生的关键在于'语言歧义'：丁氏本意是'挖井后省下了一个人力'（得一人之使），但'得一人'的字面意思也可以理解为'获得一个人'。传话者没有结合上下文核实，将'节省人力'误解为'挖出一个人'，谣言由此产生。",
        answerPy: "yáo yán chǎn shēng de guān jiàn zài yú 'yǔ yán qí yì'： dīng shì běn yì shì 'wā jǐng hòu shěng xià le yī gè rén lì'（dé yī rén zhī shǐ）， dàn 'dé yī rén' de zì miàn yì sī yě kě yǐ lǐ jiě wéi 'huò dé yī gè rén'。 chuán huà zhě méi yǒu jié hé shàng xià wén hé shí ， jiāng 'jié shěng rén lì' wù jiě wéi 'wā chū yī gè rén'， yáo yán yóu cǐ chǎn shēng。",
        answerEn: "The rumor originated from 'language ambiguity': Ding meant 'saved one person's labor,' but 'gained a person' could literally mean 'found a person.' The listener didn't verify the context, misinterpreting 'saved labor' as 'dug up a person' — that's how the rumor started."
    },
    {
        id: "Q2",
        category: "theme",
        text: "这则寓言故事告诫了我们一个什么样的处世道理？",
        py: "zhè zé yù yán gù shì gào jiè le wǒ men yī gè shén me yàng de chǔ shì dào lǐ ？",
        en: "What life lesson does this fable teach us regarding handling information?",
        strategyZh: "这属于主旨寓意题，必须结合课文尾句'求闻之若此，不如无闻也'的核心意思来答题。",
        strategyPy: "zhè shǔ yú zhǔ zhǐ yù yì tí ， bì xū jié hé kè wén wěi jù “ qiú wén zhī ruò cǐ ， bù rú wú wén yě ” de hé xīn yì sī lái dá tí 。",
        strategyEn: "This is a core theme question. Answer based on the final moral: 'Seeking news like this is worse than hearing nothing.'",
        answerZh: "这则寓言告诫我们：对于传闻消息，不能盲目轻信、更不能以讹传讹。应该保持理性思考，实事求是，凡事调查核实后再下结论。正如文中所说'求闻之若此，不若无闻也'——与其听信虚假谣言，不如一开始就没听到。",
        answerPy: "zhè zé yù yán gào jiè wǒ men ： duì yú chuán wén xiāo xī ， bù néng máng mù qīng xìn 、 gèng bù néng yǐ é chuán é 。 yīng gāi bǎo chí lǐ xìng sī kǎo ， shí shì qiú shì ， fán shì diào chá hé shí hòu zài xià jié lùn 。 zhèng rú wén zhōng suǒ shuō 'qiú wén zhī ruò cǐ ， bù ruò wú wén yě' —— yǔ qí tīng xìn xū jiǎ yáo yán ， bù rú yī kāi shǐ jiù méi tīng dào 。",
        answerEn: "This fable teaches us not to blindly believe or spread rumors. We should think critically, seek truth from facts, and verify information before drawing conclusions. As the text says: 'Seeking news like this is worse than hearing nothing at all.'"
    },
    {
        id: "Q3",
        category: "analysis",
        text: "“国人道之”中的“国人”指的是谁？他们对谣言的传播起了什么作用？",
        py: "“ guó rén dào zhī ” zhōng de “ guó rén ” zhǐ de shì shuí ？ tā men duì yáo yán de chuán bō qǐ le shén me zuò yòng ？",
        en: "Who does 'Guo Ren' refer to, and what role did they play in spreading the rumor?",
        strategyZh: "先解释核心实词'国人'的词义，再分析广大群众在谣言扩大化过程中扮演的推波助澜的角色。",
        strategyPy: "xiān jiě shì hé xīn shí cí “ guó rén ” de cí yì ， zài fēn xī guǎng dà qún zhòng zài yáo yán kuò dà huà guò chéng zhōng bàn yǎn de tuī bō zhù lán de jué sè 。",
        strategyEn: "First explain the meaning of 'Guo Ren', then analyze the role of the public in amplifying the rumor.",
        answerZh: "（1）'国人'指国都里的百姓，即当时的京城居民。\n（2）他们在没有弄清真相的情况下，盲目聚众谈论并四处传播，导致谣言迅速升级扩大。'国人道之'四个字，生动表现了谣言从个别人传播发展到'全民热议'的过程，甚至最终惊动了朝廷和国君。这揭示了'群众盲目参与传播'是谣言扩大化的关键因素。",
        answerPy: "（1）'guó rén' zhǐ guó dū lǐ de bǎi xìng ， jí dāng shí de jīng chéng jū mín 。\n（2）tā men zài méi yǒu nòng qīng zhēn xiàng de qíng kuàng xià ， máng mù jù zhòng tán lùn bìng sì chù chuán bō ， dǎo zhì yáo yán xùn sù shēng jí kuò dà 。 'guó rén dào zhī' sì gè zì ， shēng dòng biǎo xiàn le yáo yán cóng gè bié rén chuán bō fā zhǎn dào 'quán mín rè yì' de guò chéng ， shèn zhì zuì zhōng jīng dòng le cháo tíng hé guó jūn 。 zhè jiē shì le 'qún zhòng máng mù cān yǔ chuán bō' shì yáo yán kuò dà huà de guān jiàn yīn sù 。",
        answerEn: "(1) 'Guo Ren' refers to the citizens of the capital city. (2) Without verifying the truth, they blindly discussed and spread the hearsay. The phrase 'the people talked about it' vividly shows how a rumor escalated from individual gossip to 'nationwide sensation,' eventually alarming the ruler. This reveals that 'mass blind participation' is key to rumor amplification."
    },
    {
        id: "Q4",
        category: "reflection",
        text: "宋国国君听到传闻后的举动说明了什么？为什么他要派人去调查？",
        py: "sòng guó guó jūn tīng dào chuán wén hòu de jǔ dòng shuō míng le shén me ？ wèi shén me tā yào pài rén qù diào chá ？",
        en: "What does the action of the ruler of Song indicate, and why did he send someone to investigate?",
        strategyZh: "从侧面反映谣言的严重性，以及居上位者面对离奇荒诞现象时应有的审慎态度进行思考。",
        strategyPy: "cóng cè miàn fǎn yìng yáo yán de yán zhòng xìng ， yǐ jí jū shàng wèi zhě miàn duì lí qí huāng dàn xiàn xiàng shí yīng yǒu de shěn shèn tài dù jìn xíng sī kǎo 。",
        strategyEn: "Reflect on the severity of the rumor and the cautious attitude a ruler should have towards bizarre phenomena.",
        answerZh: "（1）说明谣言已经传播到极高的程度——从民间传闻升级到了'惊动最高统治者'的层面，侧面反映了以讹传讹的严重危害。\n（2）国君派人调查而非直接惩罚丁氏，说明他保持了一定的理性与审慎态度，没有轻信未经证实的传言。这一举动既体现了为君者的责任感，也为后文'真相大白'埋下伏笔，同时从反面衬托出'盲目传谣者'的轻率。",
        answerPy: "（1）shuō míng yáo yán yǐ jīng chuán bō dào jí gāo de chéng dù —— cóng mín jiān chuán wén shēng jí dào le 'jīng dòng zuì gāo tǒng zhì zhě' de céng miàn ， cè miàn fǎn yìng le yǐ é chuán é de yán zhòng wēi hài 。\n（2）guó jūn pài rén diào chá ér fēi zhí jiē chéng fá dīng shì ， shuō míng tā bǎo chí le yī dìng de lǐ xìng yǔ shěn shèn tài dù ， méi yǒu qīng xìn wèi jīng zhèng shí de chuán yán 。 zhè yī jǔ dòng jì tǐ xiàn le wéi jūn zhě de zé rèn gǎn ， yě wéi hòu wén 'zhēn xiàng dà bái' mái xià fú bǐ ， tóng shí cóng fǎn miàn chèn tuō chū 'máng mù chuán yáo zhě' de qīng shuài 。",
        answerEn: "(1) It shows the rumor had escalated from casual gossip to 'alerting the highest authority,' reflecting the severe harm of misinformation. (2) The ruler's investigation rather than direct punishment shows his rational, cautious approach — not blindly believing unverified claims. This demonstrates responsible leadership, sets up the 'truth revealed' conclusion, and contrasts with the recklessness of blind rumor-spreaders."
    },
    {
        id: "Q5",
        category: "application",
        text: "结合现实生活，谈谈你认为该如何避免像“穿井得一人”这样的闹剧发生？",
        py: "jié hé xiàn shí shēng huó ， tán tán nǐ rèn wéi gāi rú hé bì miǎn xiàng “ chuān jǐng dé yī rén ” zhè yàng de nào jù fā shēng ？",
        en: "In modern context, how do you think we can avoid fables like this from happening?",
        strategyZh: "这是开放性鉴赏题。需从面对网络虚假信息时的'个人素养'与'独立思考'两个角度切入。",
        strategyPy: "zhè shì kāi fàng xìng jiàn shǎng tí 。 xū cóng miàn duì wǎng luò xū jiǎ xìn xī shí de “ gè rén sù yǎng ” yǔ “ dú lì sī kǎo ” liǎng gè jiǎo dù qiē rù 。",
        strategyEn: "This is an open-ended question. Address it from the perspectives of personal digital literacy and independent critical thinking.",
        answerZh: "避免类似闹剧，我们应该做到以下几点：\n① 提高媒介素养：看到'爆炸性'消息时先冷静，不急于转发；\n② 核实信源：检查消息来源是否可靠，是否有官方或权威媒体证实；\n③ 多方求证：通过不同渠道交叉验证，避免'信息茧房'；\n④ 独立思考：不盲从'大家都这么说'的从众心理，保持理性判断；\n⑤ 负责任传播：不确定的消息不转发，已确认为谣言的要主动澄清。\n总之，做到'不信谣、不传谣、慎思明辨'，就能有效避免'穿井得一人'式的闹剧。",
        answerPy: "bì miǎn lèi sì nào jù ， wǒ men yīng gāi zuò dào yǐ xià jǐ diǎn ：\n① tí gāo méi jiè sù yǎng ： kàn dào 'bào zhà xìng' xiāo xī shí xiān lěng jìng ， bù jí yú zhuǎn fā ；\n② hé shí xìn yuán ： jiǎn chá xiāo xī lái yuán shì fǒu kě kào ， shì fǒu yǒu guān fāng huò quán wēi méi tǐ zhèng shí ；\n③ duō fāng qiú zhèng ： tōng guò bù tóng qú dào jiāo chā yàn zhèng ， bì miǎn 'xìn xī jiǎn fáng'；\n④ dú lì sī kǎo ： bù máng cóng 'dà jiā dōu zhè me shuō' de cóng zhòng xīn lǐ ， bǎo chí lǐ xìng pàn duàn ；\n⑤ fù zé rèn chuán bō ： bù què dìng de xiāo xī bù zhuǎn fā ， yǐ què rèn wéi yáo yán de yào zhǔ dòng chéng qīng 。\nzǒng zhī ， zuò dào 'bù xìn yáo 、 bù chuán yáo 、 shèn sī míng biàn' ， jiù néng yǒu xiào bì miǎn 'chuān jǐng dé yī rén' shì de nào jù 。",
        answerEn: "To avoid such farces, we should:\n① Improve media literacy: Stay calm when seeing 'sensational' news; don't rush to share;\n② Verify sources: Check if the source is reliable (official/authoritative media);\n③ Cross-reference: Verify through multiple channels to avoid 'information bubbles';\n④ Think independently: Resist herd mentality ('everyone says so');\n⑤ Share responsibly: Don't spread unconfirmed info; proactively clarify known rumors.\nIn short, 'don't believe or spread rumors; think critically' — this prevents 'digging a well' style farces."
    }
];

// 辅助函数：获取所有简答题
function getAllShortQuestions() {
    return shortQQuestions;
}

// 辅助函数：根据ID获取题目
function getShortQuestionById(id) {
    return shortQQuestions.find(q => q.id === id);
}

// 辅助函数：随机获取指定数量的题目
function getRandomShortQuestions(count) {
    const shuffled = [...shortQQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// 辅助函数：按类别筛选题目
function getShortQuestionsByCategory(category) {
    return shortQQuestions.filter(q => q.category === category);
}

// 辅助函数：渲染单个简答题
function renderShortQuestion(question) {
    return `
        <div class="sa-card" data-id="${question.id}">
            <div class="sa-q-header">
                <div class="sa-q-num">${question.id}</div>
                <div class="q-text-group">
                    <div class="q-py">${question.py}</div>
                    <h4 class="q-zh">${question.text}</h4>
                    <div class="q-en">${question.en}</div>
                </div>
            </div>
            <div class="strategy-box">
                <div class="strategy-title">💡 答题思路</div>
                <div class="strategy-py">${question.strategyPy}</div>
                <div class="strategy-zh">${question.strategyZh}</div>
                <div class="strategy-en">${question.strategyEn}</div>
            </div>
            <button class="sa-answer-btn" data-id="${question.id}">📖 点击查看标准答案</button>
            <div class="sa-answer-box" id="answer-${question.id}">
                <div class="sa-model-answer">
                    <div class="sa-badge">标准答案</div>
                    <div class="sa-py">${question.answerPy}</div>
                    <div class="sa-zh">${question.answerZh}</div>
                    <div class="sa-en">${question.answerEn}</div>
                </div>
            </div>
        </div>
    `;
}

// 辅助函数：渲染所有简答题
function renderAllShortQuestions() {
    return shortQQuestions.map(q => renderShortQuestion(q)).join('');
}

// 辅助函数：绑定答案按钮事件（需要在HTML中调用）
function bindShortAnswerButtons() {
    const buttons = document.querySelectorAll('.sa-answer-btn');
    buttons.forEach(btn => {
        btn.removeEventListener('click', toggleShortAnswer);
        btn.addEventListener('click', toggleShortAnswer);
    });
}

// 答案切换函数
function toggleShortAnswer(e) {
    const btn = e.currentTarget;
    const card = btn.closest('.sa-card');
    const answerBox = card.querySelector('.sa-answer-box');
    
    if (answerBox.style.display === 'block') {
        answerBox.style.display = 'none';
        btn.innerHTML = '📖 点击查看标准答案';
    } else {
        answerBox.style.display = 'block';
        btn.innerHTML = '📖 收起答案';
    }
}

// 导出到全局
window.shortQQuestions = shortQQuestions;
window.SHORTQ_CONFIG = SHORTQ_CONFIG;
window.getAllShortQuestions = getAllShortQuestions;
window.getShortQuestionById = getShortQuestionById;
window.getRandomShortQuestions = getRandomShortQuestions;
window.getShortQuestionsByCategory = getShortQuestionsByCategory;
window.renderShortQuestion = renderShortQuestion;
window.renderAllShortQuestions = renderAllShortQuestions;
window.bindShortAnswerButtons = bindShortAnswerButtons;
window.toggleShortAnswer = toggleShortAnswer;
