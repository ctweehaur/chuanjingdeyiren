/**
 * 互动古文教学平台 - 简答题特训专属题库 (Q1 - Q5 终极分行数据源)
 */

const shortQData = [
    {
        id: "Q1",
        qZh: "为什么“得一人”会 被 误解？请结合文本分析。",
        qPy: "wèi shén me dé yī rén huì bèi wù jiě qǐng jié hé wén běn fān xī",
        qEn: "Why was 'gained one person' misunderstood? Please analyze based on the text.",
        // 彻底切分成独立的数组子项，从根本上解决换行和注音对齐难题
        sZh: [
            "第一步：丁氏原话“穿井得一人”在文中对应哪句解释？",
            "第二步：“得一人”在古代汉语中有哪两种可能的理解？",
            "第三步：传播者犯了什么错误？"
        ],
        sPy: [
            "dì yī bù dīng shì yuán huà chuān jǐng dé yī rén zài wén zhōng duì yìng nǎ jù jiě饰",
            "dì èr bù dé yī rén zài gǔ dài hàn yǔ zhōng yǒu nǎ liǎng zhǒng kě néng de lǐ jiě",
            "dì sān bù chuán bō zhě fàn le shén me cuò wù"
        ],
        sEn: "Step 1: Which explanation in the text corresponds to Ding's original words?<br>Step 2: What are the two possible interpretations of 'gained one person' in classical Chinese?<br>Step 3: What mistake did the transmitters make?",
        aZh: "丁氏原意是“多得到一个劳动力”，而“得一人”字面上可理解为“获得一个人（实体）”。听者没有结合上下文，传播时失实，导致误解。",
        aPy: "dīng shì yuán yì shì duō dé dào yí gè láo dòng lì ér dé yī rén zì miàn shàng kě lǐ jiě wéi huò dé yí gè rén shí tǐ tīng zhě méi yǒu jié hé shàng xià wén chuán bō shí shī shí dǎo zhì wù jiě",
        aEn: "Ding's original meaning was 'gaining an extra labor force,' whereas 'gained one person' could literally be interpreted as 'finding a physical human being.' The listeners failed to consider the context and transmitted inaccurate information, leading to the misunderstanding."
    },
    {
        id: "Q2",
        qZh: "“国人道之，闻之于宋君”在文中起了什么作用？",
        qPy: "guó rén dào zhī wén zhī yú sòng jūn zài wén zhōng qǐ le shén me zuò yòng",
        qEn: "What role does the sentence 'the people of the state talked about it, and it reached the Lord of Song' play in the text?",
        sZh: [
            "第一步：“国人道之”说明谣言传播的广度如何？",
            "第二步：“闻之于宋君”说明谣言影响到了哪个层面？",
            "第三步：这句话为下文做了哪些铺垫？"
        ],
        sPy: [
            "dì yī bù guó rén dào zhī shuō míng yáo yán chuán bō de guǎng dù rú hé",
            "dì èr bù wén zhī yú sòng jūn shuō míng yáo yán yǐng xiǎng dào le nǎ gè céng miàn",
            "dì sān bù zhè jù huà wèi xià wén zuò le nǎ xiē pū diàn"
        ],
        sEn: "Step 1: What does 'the people talked about it' show about the breadth of the rumor's spread?<br>Step 2: What level of impact does 'reached the Lord of Song' indicate?<br>Step 3: What kind of foreshadowing does this sentence provide for the following text?",
        aZh: "表现了谣言传播范围极广，甚至惊动国君，为下文“宋君令人问”埋下伏笔，突出以讹传讹的危害性。",
        aPy: "biǎo xiàn le yáo yán chuán bō fàn wéi jí guǎng shèn zhì jīng dòng guó jūn wèi xià wén sòng jūn líng rén wèn mái xià fú bǐ tū chū yǐ é chuán é de wēi hài xìng",
        aEn: "It demonstrates that the rumor spread incredibly far, even alarming the monarch. It serves as a foreshadowing for 'the Lord of Song sent someone to inquire,' highlighting the severe consequences of spreading false rumors."
    },
    {
        id: "Q3",
        qZh: "结尾“求闻之若此，不若无闻也”揭示了什么道理？",
        qPy: "jié wěi qiú wén zhī ruò cǐ bú ruò wú wén yě jiē饰 le shén me dào lǐ",
        qEn: "What truth is revealed by the concluding sentence 'seeking information in this manner is worse than having no information at all'?",
        sZh: [
            "第一步：如果得到的是失真消息，会有什么后果？",
            "第二步：与“没有任何消息”相比，虚假消息的危害哪个更大？",
            "第三步：作者借此告诫人们对待传闻应采取什么态度？"
        ],
        sPy: [
            "dì yī bù rú guǒ dé dào de shì shī zhēn xiāo xī huì yǒu shén me hòu guǒ",
            "dì èr bù yǔ méi yǒu rèn hé xiāo xī xiāng bǐ xū jiǎ xiāo xī de wēi hài nǎ gè gèng dà",
            "dì sān bù zuò zhě jiè cǐ gào jiè rén men duì dài chuán wén yīng cǎi qǔ shén me tài dù"
        ],
        sEn: "Step 1: What are the consequences of obtaining distorted information?<br>Step 2: Compared to 'having no information,' which poses a greater harm—false information or none?<br>Step 3: What attitude towards rumors does the author warn people to adopt?",
        aZh: "轻信失真的谣言会误导判断，甚至造成恐慌。与其听信虚假传闻，不如不听。道理：对于信息要审慎求证，不可盲目相信。",
        aPy: "qīng xìn shī zhēn de yáo yán huì wù dǎo pàn duàn shèn zhì zào chéng kǒng huāng yǔ qí tīng xìn xū jiǎ chuán wén bù rú bù tīng dào lǐ duì yú xìn xī yào shěn shèn qiú zhèng bù kě máng mù xiāng xìn",
        aEn: "Blindly believing distorted rumors misleads judgment and can even cause panic. It is better to have no news than to believe false rumors. Principle: Information must be carefully verified rather than blindly trusted."
    },
    {
        id: "Q4",
        qZh: "从《穿井得一人》的故事中，你得到什么启示？",
        qPy: "cóng chuān jǐng dé yī rén de gù shì zhōng nǐ dé dào shén me qǐ shì",
        qEn: "What inspiration or lesson do you draw from the story of 'Digging a Well and Gaining a Person'?",
        sZh: [
            "第一步：传播者有没有去核实原话？",
            "第二步：谣言产生的原因有哪些？",
            "第三步：作为现代人，面对网络信息应该怎么做？"
        ],
        sPy: [
            "dì yī bù chuán bō zhě méi yǒu qù hé shí yuán huà",
            "dì èr bù yáo yán chǎn shēng de yuán yīn yǒu nǎ xiē",
            "dì sān bù zuò wéi xiàn dài rén miàn duì wǎng lù xìn xī yīng gāi zěn me zuò"
        ],
        sEn: "Step 1: Did the transmitters verify the original statement?<br>Step 2: What are the primary causes behind the creation of rumors?<br>Step 3: As a modern citizen, how should one handle information on the internet?",
        aZh: "启示：不要道听途说，凡事要调查清楚再发言；不轻信未经证实的传言；要理性思考，做负责任的传播者。",
        aPy: "qǐ shì bú yào dào tīng tú shuō fán... diào chá qīng chǔ zài fā yán bù qīng xìn wèi jīng zhèng shí de chuán yán yào lǐ xìng sī kǎo zuò fù zé rèn de chuán bō zhě",
        aEn: "Lesson: Do not pass on hearsay; always thoroughly investigate the facts before speaking out. Never blindly trust unverified rumors. Think rationally and be a responsible information sharer."
    },
    {
        id: "Q5",
        qZh: "分析本文“层层递进”的情节结构。",
        qPy: "fān xī wén zhāng céng céng dì jìn de qíng jié jié gòu",
        qEn: "Analyze the 'step-by-step progressive' plot structure of this text.",
        sZh: [
            "第一步：起点——丁氏说了什么原话？",
            "第二步：发展——个别人传成什么？",
            "第三步：高潮——国人什么反应？甚至传到了哪里？",
            "第四步：结局——国君如何做？最终真相如何？"
        ],
        sPy: [
            "dì yī bù qǐ diǎn dīng shì shuō le shén me yuán huà",
            "dì èr bù fā zhǎn yí gè bié rén chuán chéng shén me",
            "dì sān bù gāo cháo guó rén shén me fǎn yìng shèn zhì chuán dào le nǎ lǐ",
            "dì sù bù jié jú sòng jūn rú hé zuò zuì zhōng zhēn xiàng rú hé"
        ],
        sEn: "Step 1: The Starting Point—What did Ding originally say?<br>Step 2: The Development—What did a certain individual pass it on as?<br>Step 3: The Climax—How did the public react, and where did it eventually reach?<br>Step 4: The Outcome—What did the Lord do, and what was the ultimate truth?",
        aZh: "丁氏说“得一人（多一人力）” → 被误传为“挖出一个人” → 国人纷纷传播 → 国君听闻后派人调查 → 丁氏澄清真相。层层递进，讽刺强烈。",
        aPy: "dīng shì shuō dé yī rén duō yī rén lì bèi wù chuán wéi wā chū yí gè rén guó rén fēn fēn chuán bō guó jūn tīng wén hòu pài rén diào chá dīng shì chéng qīng zhēn xiàng céng céng dì jìn fěng cì qiáng liè",
        aEn: "Ding said 'gained one person (meaning an extra labor hand)' → Misinterpreted as 'digging up a physical person' → The populace eagerly spread the rumor → The Lord heard and sent investigators → Ding clarified the truth. The story progresses step by step, creating a powerful satire."
    }
];
