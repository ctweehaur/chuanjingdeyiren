// 穿井得一人 - 简答题特训数据包（100% 完整版）
const shortQQuestions = [
    {
        id: "Q1",
        text: "“穿井得一人”的谣言是如何产生的？请简要概括。",
        py: "“ chuān jǐng dé yī rén ” de yáo yán shì rú hé chǎn shēng de ？ qǐng jiǎn yào gài kuò 。",
        en: "How did the rumor 'digging a well gained a person' come about? Please summarize briefly.",
        strategyZh: "答题时需抓住“丁氏原意”与“传话者误解”的核心矛盾进行对比阐述。",
        strategyPy: "dá tí shí xū zhuā zhù “ dīng shì yuán yì ” yǔ “ chuán huà zhě wù jiě ” de hé xīn máo dùn jìn xíng duì bǐ chǎn shù 。",
        strategyEn: "Focus on the core contradiction between Ding's original intent and the messenger's misinterpretation.",
        answerZh: "起因是丁氏挖井后省下了一个劳动力，随口说挖井得到了一个人的帮忙；听话的人没有调查核实，误将其听成“从井底挖掘出了一个活人”并四处瞎传。",
        answerPy: "qǐ yīn shì dīng shì wā jǐng hòu shěng xià le yī gè láo dòng lì ， suí kǒu shuō wā jǐng dé dào le yī gè rén de bāng máng ； tīng huà de rén méi yǒu diào chá hé shí ， wù jiāng qí tīng chéng “ cóng jǐng dǐ wā jué chū le yī gè huó rén ” bìng sì chù xiā chuán 。",
        answerEn: "It started when Ding expressed that digging a well saved him one person's labor. Listeners spread it without verifying, mistakenly thinking a real person was dug up from the well bottom."
    },
    {
        id: "Q2",
        text: "这则寓言故事告诫了我们一个什么样的处世道理？",
        py: "zhè zé yù yán gù shì gào jiè le wǒ men yī gè shén me yàng de chǔ shì dào lǐ ？",
        en: "What life lesson does this fable teach us regarding handling information?",
        strategyZh: "这属于主旨寓意题，必须结合课文尾句“求闻之若此，不如无闻也”的核心意思来答题。",
        strategyPy: "zhè shǔ yú zhǔ zhǐ yù yì tí ， bì xū jié hé kè wén wěi jù “ qiú wén zhī ruò cǐ ， bù rú wú wén yě ” de hé xīn yì sī lái dá tí 。",
        strategyEn: "This is a core theme question. Answer based on the final moral: 'Seeking news like this is worse than hearing nothing.'"
    },
    {
        id: "Q3",
        text: "“国人道之”中的“国人”指的是谁？他们对谣言的传播起了什么作用？",
        py: "“ guó rén dào zhī ” zhōng de “ guó rén ” zhǐ de shì shuí ？ tā men duì yáo yán de chuán bō qǐ le shén me zuò yòng ？",
        en: "Who does 'Guo Ren' refer to, and what role did they play in spreading the rumor?",
        strategyZh: "先解释核心实词“国人”的词义，再分析广大群众在谣言扩大化过程中扮演的推波助澜的角色。",
        strategyPy: "xiān jiě shì hé xīn shí cí “ guó rén ” de cí yì ， zài fēn xī guǎng dà qún zhòng zài yáo yán kuò dà huà guò chéng zhōng bàn yǎn de tuī bō zhù lán de jué sè 。",
        strategyEn: "First explain the meaning of 'Guo Ren', then analyze the role of the public in amplifying the rumor.",
        answerZh: "“国人”指的是国都里的百姓。他们在没有弄清真相的情况下，盲目聚众谈论并瞎传，导致谣言迅速升级扩大，甚至惊动了朝廷和国君。",
        answerPy: "“ guó rén ” zhǐ de shì guó dū lǐ de bǎi xìng 。 tā men zài méi yǒu nòng qīng zhēn xiàng de qíng kuàng xià ， máng mù jù zhòng tán lùn bìng xiā chuán ， dǎo zhì yáo yán xùn sù shēng jí kuò dà ， shèn zhì jīng dòng le cháo tíng hé guó jūn 。",
        answerEn: "'Guo Ren' refers to the citizens of the capital. They blindly discussed and spread the hearsay without checking the truth, causing the rumor to escalate so wildly that it eventually alarmed the ruler."
    },
    {
        id: "Q4",
        text: "宋国国君听到传闻后的举动说明了什么？为什么他要派人去调查？",
        py: "sòng guó guó jūn tīng dào chuán wén hòu de jǔ dòng shuō míng le shén me ？ wèi shén me tā yào pài rén qù diào chá ？",
        en: "What does the action of the ruler of Song indicate, and why did he send someone to investigate?",
        strategyZh: "从侧面反映谣言的严重性，以及居上位者面对离奇荒诞现象时应有的审慎态度进行思考。",
        strategyPy: "cóng cè miàn fǎn yìng yáo yán de yán zhòng xìng ， yǐ jí jū shàng wèi zhě miàn duì lí qí huāng dàn xiàn xiàng shí yīng yǒu de shěn shèn tài dù jìn xíng sī kǎo 。",
        strategyEn: "Reflect on the severity of the rumor and the cautious attitude a ruler should have towards bizarre phenomena.",
        answerZh: "说明该谣言已经传得满城风雨，极其荒诞离奇；国君派人调查说明他保持了一定的理性与审慎，没有直接轻信，而是试图追寻真相。",
        answerPy: "shuō míng gāi yáo yán yǐ jīng chuán dé mǎn chéng fēng yǔ ， jí qí huāng dàn lí qí ； guó jūn pài rén diào chá shuō míng tā bǎo chí le yī dìng de lǐ xìng yǔ shěn shèn ， méi yǒu zhí jiē qīng xìn ， ér shì shì tú zhuī xún zhēn xiàng 。",
        answerEn: "It shows the rumor had become highly sensational and absurd. The ruler's inquiry indicates a degree of caution, as he chose to investigate the truth rather than blindly believing it."
    },
    {
        id: "Q5",
        text: "结合现实生活，谈谈你认为该如何避免像“穿井得一人”这样的闹剧发生？",
        py: "jié hé xiàn shí shēng huó ， tán tán nǐ rèn wéi gāi rú hé bì miǎn xiàng “ chuān jǐng dé yī rén ” zhè yàng de nào jù fā shēng ？",
        en: "In modern context, how do you think we can avoid fables like this from happening?",
        strategyZh: "这是开放性鉴赏题。需从面对网络虚假信息时的“个人素养”与“独立思考”两个角度切入。",
        strategyPy: "zhè shì kāi fàng xìng jiàn shǎng tí 。 xū cóng miàn duì wǎng luò xū jiǎ xìn xī shí de “ gè rén sù yǎng ” yǔ “ dú lì sī kǎo ” liǎng gè jiǎo dù qiē rù 。",
        strategyEn: "This is an open-ended question. Address it from the perspectives of personal digital literacy and independent critical thinking.",
        answerZh: "在网络时代，面对各种传闻消息，我们应该保持独立思考，提高辨别能力；在转发评论前，坚持实事求是的态度先考证事实，做到不信谣、不传谣。",
        answerPy: "zài wǎng luò shí dài ， miàn duì gè zhǒng chuán wén xiāo xī ， wǒ men yīng gāi bǎo chí dú lì sī kǎo ， tí gāo biàn bié néng lì ； zài zhuǎn fā píng lùn qián ， jiān chí shí shì qiú shì de tài dù xiān kǎo zhèng shì shí ， zuò dào bù xìn yáo 、 bú chuán yáo 。",
        answerEn: "In the digital age, when facing various news and hearsay, we should maintain independent thinking and critical awareness. Before sharing, verify the facts with an objective attitude to stop the spread of rumors."
    }
];
