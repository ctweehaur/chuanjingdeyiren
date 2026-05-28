// 穿井得一人 - 客观题自测数据（100% 完整版）
const quizQuestions = [
    {
        id: 1,
        text: "1. 宋国丁氏在穿井之前，遇到的主要问题是什么？",
        py: "sòng guó dīng shì zài chuān jǐng zhī qián ， yù dào de zhǔ yào wèn tí shì shén me ？",
        en: "1. What was the main problem faced by the Ding family of Song before digging the well?",
        options: [
            { text: "家里没有钱雇佣劳动力", py: "jiā lǐ méi yǒu qián gù yōng láo dòng lì", en: "The family had no money to hire labor.", correct: false, explanationZh: "课文完全没有提到丁家的经济状况，这属于主观臆测。", explanationPy: "kè wén wán quán méi yǒu tí dào dīng jiā de jīng jì zhuàng kuàng ， zhè shǔ yú zhǔ guān yì cè 。", explanationEn: "The text does not mention their financial status." },
            { text: "家里没有水井需要派人去外面打水", py: "jiā lǐ méi yǒu shuǐ jǐng xū yào pài rén qù wài miàn dǎ shuǐ", en: "They had no well and had to send someone outside to fetch water.", correct: true, explanationZh: "对照原文“家无井而出溉汲，常一人居外”，证实因无井而耗费劳力。", explanationPy: "duì zhào yuán wén “ jiā wú jǐng ér chū gài jí ， cháng yī rén jū wài ” ， zhèng shí yīn wú jǐng ér hào fèi láo lì 。", explanationEn: "Matches the text: 'The family had no well... so one person constantly stayed outside to fetch water.'" },
            { text: "打水的仆人在外面逃跑了", py: "dǎ shuǐ de pú rén zài wài miàn táo pǎo le", en: "The servant who fetched water ran away.", correct: false, explanationZh: "“居外”的意思是呆在外面工作，而非逃跑。", explanationPy: "“ jū wài ” de yì sī shì dāi zài wài miàn gōng zuò ， ér fēi táo pǎo 。", explanationEn: "'Ju wai' means staying outside to work, not escaping." },
            { text: "宋国的诸侯征收昂贵的水税", py: "sòng guó de zhū hóu zhēng shōu áng guì de shuǐ shuì", en: "The ruler of Song imposed a heavy tax on water.", correct: false, explanationZh: "背景中完全没有提到征税的内容。", explanationPy: "bèi jǐng zhōng wán quán méi yǒu tí dào zhēng shuì de nèi róng 。", explanationEn: "There is no mention of water taxes in the text." }
        ]
    },
    {
        id: 2,
        text: "2. 丁氏说“吾穿井得一人”的真实本意是什么？",
        py: "dīng shì shuō “ wú chuān jǐng dé yī rén ” de zhēn shí běn yì shì shén me ？",
        en: "2. What was the real meaning of Ding's statement 'We gained a person by digging a well'?",
        options: [
            { text: "在挖井的过程中挖出了一个活人", py: "zài wā jǐng de guò chéng zhōng wā chū le yī gè huó rén", en: "They dug up a living person from inside the well.", correct: false, explanationZh: "这是别人道听途说的谣言误解，不是丁氏的本意。", explanationPy: "zhè shì bié rén dào tīng tú shuō de yáo yán wù jiě ， bú shì dīng shì de běn yì 。", explanationEn: "This is the rumored misunderstanding." },
            { text: "家里多了一个仆人来帮忙挖井", py: "jiā lǐ duō le yī gè pú rén lái bāng máng wā jǐng", en: "They acquired a new servant to help dig the well.", correct: false, explanationZh: "丁家是自己挖井，而不是雇佣新人。", explanationPy: "dīng jiā shì zì jǐ wā jǐng ， ér bú shì gù yōng xīn rén 。", explanationEn: "They dug it themselves rather than hiring a new worker." },
            { text: "省下了一个专门外出打水的劳动力", py: "shěng xià le yī gè zhuān mén wài chū dǎ shuǐ de láo dòng lì", en: "They saved the labor of one person who used to fetch water outside.", correct: true, explanationZh: "由于家里有了井，原本必须在外打水的人可以撤回回家帮忙，省下了人力。", explanationPy: "yóu yú jiā lǐ yǒu le jǐng ， yuán běn bì xū zài wài dǎ shuǐ de rén kě yǐ chè huí huí jiā bāng máng ， shěng xià le rén lì 。", explanationEn: "Since they had a well, the person fetching water was freed up." },
            { text: "挖井的技术非常高超只需要一个人", py: "wā jǐng de jì shù fēi cháng gāo chāo zhī xū yào yī gè rén", en: "The well-digging technique was so advanced it required only one person.", correct: false, explanationZh: "文章强调的是劳动力的释放，而非挖井技术。", explanationPy: "wén zhāng qiáng diào de shì láo dòng lì de shì fàng ， ér fēi wā jǐng jì shù 。", explanationEn: "The text emphasizes the freeing of labor." }
        ]
    },
    {
        id: 3,
        text: "3. 下列句子中加点字“闻”的解释错误的一项是：",
        py: "xià liè jù zi zhōng jiā diǎn zì “ wén ” de jiě shì cuò wù de yī xiàng shì ：",
        en: "3. Which of the following explanations for 'Wen' is INCORRECT?",
        options: [
            { text: "有闻而传之者（闻：听说）", py: "yǒu wén ér chuán zhī zhě （ wén ： tīng shuō ）", en: "Someone heard it (Wen: heard)", correct: false, explanationZh: "解释正确，这里指听到丁家传出的话语。", explanationPy: "jiě shì zhèng què ， zhè lǐ zhǐ tīng dào dīng jiā chuán chū de huà yǔ 。", explanationEn: "Correct explanation." },
            { text: "闻之于宋君（闻：使……听到）", py: "wén zhī yú sòng jūn （ wén ： shǐ …… tīng dào ）", en: "Heard by the ruler (Wen: cause to hear)", correct: false, explanationZh: "解释正确，指这件事让宋国国君听到了。", explanationPy: "jiě shì zhèng què ， zhǐ zhè jiàn shì ràng sòng guó guó jūn tīng dào le 。", explanationEn: "Correct explanation." },
            { text: "求闻之若此（闻：闻气味）", py: "qiú wén zhī ruò cǐ （ wén ： wén qì wèi ）", en: "Seeking news (Wen: smell odor)", correct: true, explanationZh: "解释错误！文言中“闻”意为消息，非闻气味。", explanationPy: "jiě shì cuò wù ！ wén yán zhōng “ wén ” yì wèi xiāo xī ， fēi wén qì wèi 。", explanationEn: "Incorrect! 'Wen' means news, not smell." },
            { text: "不如无闻也（闻：听到）", py: "bù rú wú wén yě （ wén ： tīng dào ）", en: "Better than hearing (Wen: hear)", correct: false, explanationZh: "解释正确，指还不如没有听到过这种消息。", explanationPy: "jiě shì zhèng què ， zhǐ hái bù rú méi yǒu tīng dào guò zhè zhǒng xiāo xī 。", explanationEn: "Correct explanation." }
        ]
    },
    {
        id: 4,
        text: "4. 文中“闻之于宋君”的“于”字，其意思与下列哪项相同？",
        py: "wén zhōng “ wén zhī yú sòng jūn ” de “ yú ” zì ， qí yì sī yǔ xià liè nǎ xiàng xiāng tóng ？",
        en: "4. Which 'Yu' has the same meaning as 'Yu' in 'Wen Zhi Yu Song Jun'?",
        options: [
            { text: "问之于丁氏（于：向）", py: "wèn zhī yú dīng shì （ yú ： xiàng ）", en: "Inquire from Ding (Yu: from)", correct: false, explanationZh: "不相同。这里的“于”表示向。", explanationPy: "bù xiāng tóng 。 zhè lǐ de “ yú ” biǎo shì xiàng 。", explanationEn: "Different." },
            { text: "得一人于井中（于：在）", py: "dé yī rén yú jǐng zhōng （ yú ： zài ）", en: "Found a person in the well (Yu: in)", correct: false, explanationZh: "不相同。这里的“于”表示在。", explanationPy: "bù xiāng tóng 。 zhè lǐ de “ yú ” biǎo shì zài 。", explanationEn: "Different." },
            { text: "劳心者治人，劳力者治于人（于：被）", py: "láo xīn zhě zhì rén ， láo lì zhě zhì yú rén （ yú ： bèi ）", en: "Governed by others (Yu: by)", correct: true, explanationZh: "完全相同！“闻之于宋君”表被动意，意为“被”。", explanationPy: "wán quán xiāng tóng ！ “ wén zhī yú sòng jūn ” biǎo bèi dòng yì ， yì wèi “ bèi ” 。", explanationEn: "Exactly the same! Passive marker 'by'." },
            { text: "青取之于蓝而青于蓝（于：比）", py: "qīng qǔ zhī yú lán ér qīng yú lán （ yú ： bǐ ）", en: "Bluer than the plant (Yu: than)", correct: false, explanationZh: "不相同。这里的“于”表示比较。", explanationPy: "bù xiāng tóng 。 zhè lǐ de “ yú ” biǎo shì bǐ jiào 。", explanationEn: "Different." }
        ]
    },
    {
        id: 5,
        text: "5. 这则寓言讽刺了现实中的哪种人？",
        py: "zhè zé yù yán fěng cì le xiàn shí zhōng de nǎ zhǒng rén ？",
        en: "5. What kind of people does this fable mainly satirize?",
        options: [
            { text: "不愿努力工作的人", py: "bù yuàn nǔ lì gōng zuò de rén", en: "People unwilling to work hard.", correct: false, explanationZh: "主旨与走捷径无关。", explanationPy: "zhǔ zhǐ yǔ zǒu jié jìng wú guān 。", explanationEn: "Unrelated." },
            { text: "盲目听信谣言、以讹传讹的人", py: "máng mù tīng xìn yáo yán 、 yǐ é chuán é de rén", en: "People spreading rumors without thinking.", correct: true, explanationZh: "切中主旨，讽刺道听途说者。", explanationPy: "qiè zhōng zhǔ zhǐ ， fěng cì dào tīng tú shuō zhě 。", explanationEn: "Perfect match." },
            { text: "技术差劲的工人", py: "jì shù chà jìn de gōng rén", en: "Unskilled workers.", correct: false, explanationZh: "偏离文本。", explanationPy: "piān lí wén běn 。", explanationEn: "Irrelevant." },
            { text: "欺骗国君的官员", py: "qī piàn guó jūn de guān yuán", en: "Deceptive officials.", correct: false, explanationZh: "文中不存在欺骗。", explanationPy: "wén zhōng bú cún zài qī piàn 。", explanationEn: "No deception." }
        ]
    }
];
