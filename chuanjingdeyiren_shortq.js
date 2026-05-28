// 穿井得一人 - 主观简答题库
const shortQQuestions = [
    {
        id: "Q1",
        text: "为什么“得一人”会被误解？请结合文本分析。",
        en: "Why was \"gained one person\" misunderstood? Analyze with the text.",
        py: "wèi shén me “ dé yī rén ” huì bèi wù jiě ？ qǐng jié hé wén běn fēn xī 。",
        strategyZh: "第一步：丁氏原话“穿井得一人”在文中对应哪句解释？<br>第二步：“得一人”在古代汉语中有哪两种可能的理解？<br>第三步：传播者犯了什么错误？",
        strategyPy: "dì yī bù ： dīng shì yuán huà “ chuān jǐng dé yī rén ” zài wén zhōng duì yìng nǎ jù jiě shì ？ dì èr bù ： “ dé yī rén ” zài gǔ dài hàn yǔ zhōng yǒu nǎ liǎng zhǒng kě néng de lǐ jiě ？ dì sān bù ： chuán bō zhě fàn le shén me cuò wù ？",
        strategyEn: "Step 1: Which sentence explains Ding's original meaning? Step 2: Two possible interpretations of \"gained one person\"? Step 3: What mistake did the spreader make?",
        answerZh: "丁氏原意是“多得到一个劳动力”，而“得一人”字面上可理解为“获得一个人（实体）”。听者没有结合上下文，传播时失实，导致误解。",
        answerPy: "dīng shì yuán yì shì “ duō dé yī gè láo dòng lì ” ， ér “ dé yī rén ” zì miàn shàng kě lǐ jiě wéi “ huò dé yī gè rén （ shí tǐ ） ” 。 tīng zhě méi yǒu jié hé shàng xià wén ， chuán bō shí shī zhēn ， dǎo zhì wù jiě 。",
        answerEn: "Ding meant \"gained an extra laborer\", but \"gained one person\" could literally mean \"found a person\". The listener didn't consider context and spread a distorted version."
    },
    {
        id: "Q2",
        text: "“国人道之，闻之于宋君”在文中起了什么作用？",
        en: "What role does this sentence play?",
        py: "“ guó rén dào zhī ， wén zhī yú sòng jūn ” zài wén zhōng qǐ le shén me zuò yòng ？",
        strategyZh: "第一步：“国人道之”说明谣言传播的广度如何？<br>第二步：“闻之于宋君”说明谣言影响到了哪个层面？<br>第三步：这句话为下文做了哪些铺垫？",
        strategyPy: "dì yī bù ： “ guó rén dào zhī ” shuō míng yáo yán chuán bō de guǎng dù rú hé ？ dì èr bù ： “ wén zhī yú sòng jūn ” shuō míng yáo yán yǐng xiǎng dào le nǎ ge céng miàn ？ dì sān bù ： zhè jù huà wéi xià wén zuò le nǎ xiē pū diàn ？",
        strategyEn: "Step 1: What does \"国人道之\" suggest about the rumor's spread? Step 2: What level does \"闻之于宋君\" show? Step 3: How does it set up the following text?",
        answerZh: "表现了谣言传播范围极广，甚至惊动国君，为下文“宋君令人问”埋下伏笔，突出以讹传讹的危害性。",
        answerPy: "biǎo xiàn le yáo yán chuán bō fàn wēi jí guǎng ， shèn zhì jīng dòng guó jūn ， wéi xià wén “ sòng jūn lìng rén wèn ” mái xià fú bǐ ， tū chū yǐ é chuán é de wēi hài xìng 。",
        answerEn: "It shows the rumor spread widely, even reaching the ruler, setting up the inquiry and highlighting the danger of misinformation."
    },
    {
        id: "Q3",
        text: "结尾“求闻之若此，不若无闻也”揭示了什么道理？",
        en: "What truth does the ending reveal?",
        py: "jié wěi “ qiú wén zhī ruò cǐ ， bù ruò wú wén yě ” jiē shì le shén me dào lǐ ？",
        strategyZh: "第一步：如果得到的是失真消息，会有什么后果？<br>第二步：与“没有任何消息”相比，虚假消息的危害哪个更大？<br>第三步：作者借此告诫人们对待传闻应采取什么态度？",
        strategyPy: "dì yī bù ： rú guǒ dé dào de shì shī zhēn xiāo xī ， huì yǒu shén me hòu guǒ ？ dì èr bù ： yǔ “ méi yǒu rèn hé xiāo xī ” xiāng bǐ ， xū jiǎ xiāo xī de wēi hài nǎ ge gèng dà ？ dì sān bù ： zuò zhě jiè cǐ gào jiè rén men duì dài chuán wén yīng cǎi qǔ shén me tài dù ？",
        strategyEn: "Step 1: What harm can distorted news cause? Step 2: Compare false news vs no news. Step 3: What attitude should we have towards hearsay?",
        answerZh: "轻信失真的谣言会误导判断，甚至造成恐慌。与其听信虚假传闻，不如不听。道理：对于信息要审慎求证，不可盲目相信。",
        answerPy: "qīng xìn shī zhēn de yáo yán huì wù dǎo pàn duàn ， shèn zhì zào chéng kǒng huāng 。 yǔ qí tīng xìn xū jiǎ chuán wén ， bù rú bù tīng 。 dào lǐ ： duì yú xìn xī yào shěn shèn qiú zhèng ， bù kě máng mù xiāng xìn 。",
        answerEn: "Believing false rumors misleads judgment. It's better to have no information than false information. Lesson: always verify before believing."
    }
];
