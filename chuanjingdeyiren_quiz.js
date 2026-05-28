const quizQuestions = [
    { id: 1, text: "“及其家穿井”中的“穿井”是什么意思？", py: "jí qí jiā chuān jǐng zhōng de chuān jǐng shì shén me yì si", en: "Meaning of 'Chuan Jing'?",
      options: [
          { text: "开凿水井", py: "kāi záo shuǐ jǐng", correct: true, explanation: "正确解释：“穿”的本义是凿通，“穿井”就是开凿水井。", explanationPy: "zhèng què jiě shì chuān de běn yì shì záo tōng chuān jǐng jiù shì kāi záo shuǐ jǐng", en: "Dig a well" },
          { text: "堵塞废弃", py: "dǔ sè fèi qì", correct: false, explanation: "错误原因：“穿”没有堵住的意思。", explanationPy: "cuò wù yuán yīn chuān méi yǒu dǔ zhù de yì si", en: "Block and abandon the well" }
      ] },
    { id: 2, text: "丁氏说“吾穿井得一人”，实际意思是？", py: "dīng shì shuō wú chuān jǐng dé yī rén shí jì yì si shì", en: "What did Ding actually mean?",
      options: [
          { text: "节省了一个劳动力", py: "shěng xià le yī gè láo dòng lì", correct: true, explanation: "正确解释：挖井后不需要派人外出打水，节省了人力。", explanationPy: "zhèng què jiě shì wā jǐng hòu bù xū yào pài rén wài chū dǎ shuǐ shěng xià le rén lì", en: "Gained an extra laborer (saved manpower)" },
          { text: "从井中挖出了活人", py: "cóng jǐng zhōng wā chū le huó rén", correct: false, explanation: "错误原因：这是道听途说的谣言误解。", explanationPy: "cuò wù yuán yīn zhè shì dào tīng tú shuō de yáo yán wù jiě", en: "Rescue a person from the well" }
      ] },
    { id: 3, text: "这个故事主要讽刺了什么社会现象？", py: "zhè ge gù shì zhǔ yào fěng cì le shén me shè huì xiàn xiàng", en: "What phenomenon does this fable satirize?",
      options: [
          { text: "以讹传讹，轻信谣言", py: "yǐ é chuán é qīng xìn yáo yán", correct: true, explanation: "正确解释：生动讽刺了人们不辨真伪、盲目传播的弊病。", explanationPy: "zhèng què jiě shì shēng dòng fěng cì le rén men bú biàn zhēn wěi máng mù chuán bō de bì bìng", en: "Spread misinformation and believe rumors" },
          { text: "不重视水利建设", py: "bú zhòng shì shuǐ lì jiàn shè", correct: false, explanation: "错误原因：文章重点不在于水利建设。", explanationPy: "cuò wù yuán yīn wén zhāng zhòng diǎn bú zài yú shuǐ lì jiàn shè", en: "People neglect water conservancy" }
      ] },
    { id: 4, text: "“闻之于宋君”中的“闻”是什么意思？", py: "wén zhī yú sòng jūn zhōng de wén shì shén me yì si", en: "What does 'it was heard by the ruler of Song' indicate?",
      options: [
          { text: "使听到，被听说", py: "shǐ tīng dào bèi tīng shuō", correct: true, explanation: "正确解释：这里是被动用法，被宋君听闻。", explanationPy: "zhèng què jiě shì zhè lǐ shì bèi dòng yòng fǎ bèi sòng jūn tīng wén", en: "The rumor has alarmed the highest ruler" },
          { text: "听到，听闻", py: "tīng dào tīng wén", correct: false, explanation: "错误原因：结合语境，是被宋君听到。", explanationPy: "cuò wù yuán yīn jié hé yǔ jìng shì bèi sòng jūn tīng dào", en: "The ruler actively sent someone to investigate" }
      ] },
    { id: 5, text: "结尾“不若无闻也”告诫我们什么道理？", py: "jié wěi bú ruò wú wén yě gào jiè wǒ men shén me dào lǐ", en: "Which best matches the moral of the last sentence?",
      options: [
          { text: "听信虚假传闻不如没有听到任何消息", py: "tīng xìn xū jiǎ chuán wén bù rú méi yǒu tīng dào rèn hé xiāo xī", correct: true, explanation: "正确解释：与其听信失真谣言，不如什么都不听。", explanationPy: "zhèng què jiě shì yǔ qí tīng xìn shī zhēn yáo yán bù rú shén me dōu bù tīng", en: "It's better to hear nothing than to believe false rumors" },
          { text: "国君应亲自调查每一件事", py: "guó jūn yīng qīn zì diào chá měi yī jiàn shì", correct: false, explanation: "错误原因：文章是告诫所有人，并非针对国君。", explanationPy: "cuò wù yuán yīn wén zhāng shì gào jiè suǒ yǒu rén bìng fēi zhēn duì guó jūn", en: "The ruler should personally investigate everything" }
      ] }
];
