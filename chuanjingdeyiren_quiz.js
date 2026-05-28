const quizQuestions = [
    { id: 1, text: "及其家穿井中的穿井是什么意思？", py: "jí qí jiā chuān jǐng zhōng de chuān jǐng shì shén me yì si", en: "What does 'chuān jǐng' mean?",
      options: [
          { text: "开凿水井", py: "kāi záo shuǐ jǐng", correct: true, explanation: "正确解释：“穿”的本义是“凿通、穿透”，“穿井”就是开凿水井。", explanationPy: "zhèng què jiě shì chuān de běn yì shì záo tōng chuān jǐng jiù shì kāi záo shuǐ jǐng", en: "Dig a well" },
          { text: "堵塞水井并废弃", py: "dǔ sè shuǐ jǐng bìng fèi qì", correct: false, explanation: "错误原因：“穿”在古汉语中从来没有“堵住”或“废弃”的意思。", explanationPy: "cuò wù yuán yīn chuān zài gǔ dài hàn yǔ zhōng cóng lái méi yǒu dǔ zhù huò fèi qì de yì si", en: "Block and abandon the well" },
          { text: "在井边穿行", py: "zài jǐng biān chuān xíng", correct: false, explanation: "错误原因：“穿井”是一个动宾短语，整体意思是“挖井”，而不是在井边走动。", explanationPy: "cuò wù yuán yīn chuān jǐng shì yī gè dòng bīn duǎn yǔ zhěng tǐ yì si shì wā jǐng bàng shì zài jǐng biān zǒu dòng", en: "Walk around the well" },
          { text: "用水井灌溉", py: "yòng shuǐ jǐng guàn gài", correct: false, explanation: "错误原因：“穿井”是挖井的动作，不是灌溉。灌溉在文中用的是“溉汲”。", explanationPy: "cuò wù yuán yīn chuān jǐng shì wā jǐng de dòng zuò bú shì guàn gài guàn gài zài wén zhōng yòng de shì gài jí", en: "Irrigate with the well" }
      ] },
    { id: 2, text: "丁氏说吾穿井得一人，实际意思是？", py: "dīng shì shuō wú chuān jǐng dé yī rén shí jì yì si shì", en: "What did Ding actually mean?",
      options: [
          { text: "多得到一个劳动力", py: "duō dé dào yī gè láo dòng lì", correct: true, explanation: "正确解释：挖井后不需要派人外出打水，家里相当于多出了一个劳动力。", explanationPy: "zhèng què jiě shì wā jǐng hòu bù xū yào pài rén wài chū dǎ shuǐ jiā lǐ xiāng dāng yú duō chū le yī gè láo dòng lì", en: "Gained an extra laborer (saved manpower)" },
          { text: "从井中挖出了活人", py: "cóng jǐng zhōng wā chū le huó rén", correct: false, explanation: "错误原因：这是听闻者没有结合上下文产生的以讹传讹的谣言误解。", explanationPy: "cuò wù yuán yīn zhè shì tīng wén zhě méi yǒu jié hé shàng xià wén chǎn shēng de yǐ é chuán é de yáo yán wù jiě", en: "Rescue a person from the well" },
          { text: "挖井得到一个人尸骨", py: "wā jǐng dé dào yī gè rén shī gǔ", correct: false, explanation: "错误原因：后文丁氏明确澄清“非得一人于井中也”，并非挖出尸骨。", explanationPy: "cuò wù yuán yīn hòu wén dīng shì míng què chéng qīng fēi dé yī rén yú jǐng zhōng yě bìng fēi wā chū shī gǔ", en: "Dig up a person's skeleton" },
          { text: "挖井需要请工人帮忙", py: "wā jǐng xū yào qǐng gōng rén bāng máng", correct: false, explanation: "错误原因：丁氏说的是挖井带来的长期收益，而不是挖掘的过程。", explanationPy: "cuò wù yuán yīn dīng shì shuō de shì wā jǐng dài lái de cháng qī shōu yì ér bú shì wā jué de guò chéng", en: "Need to hire a worker to dig the well" }
      ] },
    { id: 3, text: "这个故事主要讽刺了什么社会现象？", py: "zhè ge gù shì zhǔ yào fěng cì le shén me shè huì xiàn xiàng", en: "What phenomenon does this fable satirize?",
      options: [
          { text: "以讹传讹，轻信谣言", py: "yǐ é chuán é qīng xìn yáo yán", correct: true, explanation: "正确解释：文章生动地讽刺了社会上人们不辨真伪、盲目传播谣言的弊病。", explanationPy: "zhèng què jiě shì wén zhāng shēng dòng de fěng cì le shè huì shàng rén men bú biàn zhēn wěi máng mù chuán bō yáo yán de bì bìng", en: "Spread misinformation and believe rumors" },
          { text: "不重视水利建设", py: "bú zhòng shì shuǐ lì jiàn shè", correct: false, explanation: "错误原因：故事虽然从“无井”说起，但核心重点是讽刺信息传播的失真。", explanationPy: "cuò wù yuán yīn gù shì suī rán cóng wú jǐng shuō qǐ dàn hé xīn zhòng diǎn shì fěng cì xìn xī chuán bō de shī zhēn", en: "People neglect water conservancy" },
          { text: "国君听信谗言", py: "guó jūn tīng xìn chán yán", correct: false, explanation: "错误原因：国君在此处派人核实真相，属于正面实事求是的行为，而非讽刺对象。", explanationPy: "cuò wù yuán yīn guó jūn zài cǐ chù pài rén hé shí zhēn xiàng shǔ yú zhèng miàn shí shì qiú shì de xíng wéi ér fēi fěng cì duì xiàng", en: "The ruler believes slander" },
          { text: "丁氏说话含糊不清", py: "dīng shì shuō huà hán hu bù qīng", correct: false, explanation: "错误原因：主要责任在传播者不核实就添油加醋，不能归咎于丁氏表达。", explanationPy: "cuò wù yuán yīn zhǔ yào zé rèn zài chuán bō zhě bù hé shí jiù tiān yóu jiā cù bù néng guī jiù yú dīng shì biǎo dá", en: "Ding's speech is ambiguous" }
      ] },
    { id: 4, text: "国人道之闻之于宋君中的闻是什么意思？", py: "guó rén dào zhī wén zhī yú sòng jūn zhōng de wén shì shén me yì si", en: "What does 'it was heard by the ruler of Song' indicate?",
      options: [
          { text: "使听到，被听说", py: "shǐ tīng dào bèi tīng shuō", correct: true, explanation: "正确解释：此处是动词的被动用法，意为“这件事被宋国国君听说了”。", explanationPy: "zhèng què jiě shì cǐ chù shì dòng cí de bèi dòng yòng fǎ yì wéi zhè jiàn shì bèi sòng guó guó jūn tīng shuō le", en: "The rumor has alarmed the highest ruler" },
          { text: "主动去听，打听", py: "zhǔ dòng qù tīng dǎ tīng", correct: false, explanation: "错误原因：“闻之于宋君”强调国君是被动得知传闻，而不是主动打听。", explanationPy: "cuò wù yuán yīn wén zhī yú sòng jūn qiáng diào guó jūn shì bèi dòng dé zhī chuán wén ér bú shì zhǔ dòng dǎ tīng", en: "The ruler actively investigated" },
          { text: "传闻，声誉", py: "chuán wén shēng yù", correct: false, explanation: "错误原因：在这里作动词使用，不是名词“传闻”或“名声”。", explanationPy: "cuò wù yuán yīn zài zhè lǐ zuò dòng cí shǐ yòng bú shì míng cí chuán wén huò míng shēng", en: "Rumor or reputation" },
          { text: "知道，晓得", py: "zhī dào xiǎo de", correct: false, explanation: "错误原因：虽然词义接近，但在此处特指听到、听闻传言这一动作。", explanationPy: "cuò wù yuán yīn suī rán cí yì jiē jìn dàn zài cǐ chù tè zhǐ tīng dào tīng wén chuán yán zhè yī dòng zuò", en: "To know or realize" }
      ] },
    { id: 5, text: "结尾不若无闻也告诫我们什么道理？", py: "jié wěi bú ruò wú wén yě gào jiè wǒ men shén me dào lǐ", en: "Which best matches the moral of the last sentence?",
      options: [
          { text: "听信虚假传闻不如没有听到任何消息", py: "tīng xìn xū jiǎ chuán wén bù rú méi yǒu tīng dào rèn hé xiāo xī", correct: true, explanation: "正确解释：虚假传闻会误导判断，与其盲目听信，不如一开始就不知道。", explanationPy: "zhèng què jiě shì xū jiǎ chuán wén huì wù dǎo pàn duàn yǔ qí máng mù tīng xìn bù rú yī kāi shǐ jiù bù zhī dào", en: "It's better to hear nothing than to believe false rumors" },
          { text: "听到任何消息都要立刻告诉别人", py: "tīng dào rèn hé xiāo xī dōu yào lì kè gào su bié rén", correct: false, explanation: "错误原因：作者的态度完全相反，旨在批评不加分辨地盲目传播。", explanationPy: "cuò wù yuán yīn zuò zhě de tài dù wán quán xiāng fǎn zhǐ zài pī píng bù jiā fēn biàn de máng mù chuán bō", en: "Tell others immediately upon hearing any news" },
          { text: "国君应该亲自去调查每一件事", py: "guó jūn yīng gāi qīn zì qù diào chá měi yī jiàn ___", correct: false, explanation: "错误原因：这句话是对所有对待传闻者的告诫，并非专门针对君主。", explanationPy: "cuò wù yuán yīn zhè jù huà shì duì suǒ yǒu duì dài chuán wén zhě de gào jiè bìng fēi zhuān mén zhēn duì jūn zhǔ", en: "The ruler should personally investigate everything" },
          { text: "不要相信周围人说的任何话", py: "bú yào xiāng xìn zhōu wéi rén shuō de rèn hé huà", correct: false, explanation: "错误原因：选项说法过于极端，作者强调的是要审慎、实事求是地求证。", explanationPy: "cuò wù yuán yīn xuǎn xiàng shuō fǎ guò yú jí duān zuò zhě qiáng diào de shì yào shěn shèn shí shì qiú shì de qiú zhèng", en: "Don't believe anyone's words" }
      ] }
];
