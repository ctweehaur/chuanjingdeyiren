const quizQuestions = [
    { id: 1, text: "“及其家穿井”中的“穿井”是什么意思？", en: "What does 'chuān jǐng' mean?", py: "“ jí qí jiā chuān jǐng ” zhōng de “ chuān jǐng ” shì shén me yì si ？",
      options: [
          { text: "堵上水井并废弃", correct: false, explanation: "❌ 错误原因：“穿”在古汉语中从来没有“堵住”或“废弃”的意思。如果表示堵上水井，一般会用“塞井”“填井”。这里“穿”是动词，指凿通、挖掘。", py: "dǔ shàng shuǐ jǐng bìng fèi qì", en: "Block and abandon the well" },
          { text: "开凿水井", correct: true, explanation: "✅ 正确解释：“穿”的本义是“凿通、穿透”，“穿井”就是开凿水井。这句话的意思是“等到他家挖好了水井”。", py: "kāi záo shuǐ jǐng", en: "Dig a well" },
          { text: "在井边穿行", correct: false, explanation: "❌ 错误原因：“穿”虽有“穿过”之义，但“穿井”是一个动宾短语，后面接“井”作宾语，整体意思是“挖井”，而不是在井边走来走去。文中没有“穿行”之意。", py: "zài jǐng biān chuān xíng", en: "Walk around the well" },
          { text: "用水井灌溉", correct: false, explanation: "❌ 错误原因：“穿井”是挖井的动作，不是灌溉。灌溉在文中用的是“溉汲”。如果已经挖好井，可以灌溉，但“穿井”本身指挖掘的过程。", py: "yòng shuǐ jǐng guàn gài", en: "Irrigate with the well" }
      ] },
    { id: 2, text: "丁氏说“吾穿井得一人”，他的实际意思是？", en: "What did Ding actually mean?", py: "dīng shì shuō “ wú chuān jǐng dé yī rén ” ， tā de shí jì yì si shì ？",
      options: [
          { text: "挖井时从井里救出一个人", correct: false, explanation: "❌ 错误原因：文中没有任何情节提到丁氏从井里救人。这种理解完全是凭空想象，原文丁氏强调的是“得一人之使”，即劳动人手的变化。", py: "wā jǐng shí cóng jǐng lǐ jiù chū yī gè rén", en: "Rescue a person from the well" },
          { text: "挖井得到一个人的尸骨", correct: false, explanation: "❌ 错误原因：这一选项极具误导性，但原文并没有说挖出尸骨。后文丁氏澄清“非得一人于井中也”，明确说明不是从井中得到一个人（不论死活）。", py: "wā jǐng dé dào yī gè rén de shī gǔ", en: "Dig up a person's skeleton" },
          { text: "多得到一个劳动力（节省人力）", correct: true, explanation: "✅ 正确解释：结合后文丁氏的解释“得一人之使”可知，他的意思是：原来家里没井，需要派一个人常年在外面取水；挖井之后，这个人就不需要外出了，相当于家里多出了一个劳动力。这是一种节省人力的说法。", py: "duō dé dào yī gè láo dòng lì （ jié shěng rén lì ）", en: "Gained an extra laborer (saved manpower)" },
          { text: "挖井需要请一个工人帮忙", correct: false, explanation: "❌ 错误原因：丁氏说的是挖井之后的结果，不是挖井的过程。如果是要请工人，他会说“雇一人”“得一人助”，而不是“得一人”。原文是“穿井得一人”，语序也表明“得一人”是穿井带来的收益。", py: "wā jǐng xū yào qǐng yī gè gōng rén bāng máng", en: "Need to hire a worker to dig the well" }
      ] },
    { id: 3, text: "这个故事主要讽刺了什么社会现象？", en: "What phenomenon does this fable satirize?", py: "zhè ge gù shì zhǔ yào fěng cì le shén me shè huì xiàn xiàng ？",
      options: [
          { text: "百姓不重视水利建设", correct: false, explanation: "❌ 错误原因：故事虽然从“无井”说起，但讽刺的重点不是水利。文中没有批评百姓懒惰或不修水利，而是讽刺信息在传播中严重失真。", py: "bǎi xìng bú zhòng shì shuǐ lì jiàn shè", en: "People neglect water conservancy" },
          { text: "国君听信谗言", correct: false, explanation: "❌ 错误原因：国君听到传闻后，派人去调查核实，并没有盲目处置丁家。所以国君的行为反而是正面的榜样，不是讽刺对象。", py: "guó jūn tīng xìn chán yán", en: "The ruler believes slander" },
          { text: "以讹传讹，轻信谣言", correct: true, explanation: "✅ 正确解释：从“吾穿井得一人（多一人力）” → 被传成“丁氏穿井得一人（挖出一个人）” → 国人纷纷道之 → 甚至惊动国君。这个过程生动讽刺了人们不辨真伪、盲目传播谣言的社会弊病。", py: "yǐ é chuán é ， qīng xìn yáo yán", en: "Spread misinformation and believe rumors" },
          { text: "丁氏说话含糊不清", correct: false, explanation: "❌ 错误原因：丁氏的话虽有歧义，但在当时语境中，“得一人”经常指节省一个人力。主要责任在传播者不追问、不核实就添油加醋。", py: "dīng shì shuō huà hán hu bù qīng", en: "Ding's speech is ambiguous" }
      ] },
    { id: 4, text: "“国人道之，闻之于宋君”中的“闻之于宋君”一句，说明了什么？", en: "What does 'it was heard by the ruler of Song' indicate?", py: "“ guó rén dào zhī ， wén zhī yú sòng jūn ” zhōng de “ wén zhī yú sòng jūn ” yī jù ， shuō míng le shén me ？",
      options: [
          { text: "宋君主动派人调查民情", correct: false, explanation: "❌ 错误原因：原文“闻之于宋君”是被动句式，意思是“这件事被宋国国君听说了”。强调的是国君被动听闻，不是他主动去调查民情。", py: "sòng jūn zhǔ dòng pài rén diào chá mín qíng", en: "The ruler actively sent someone to investigate" },
          { text: "谣言已经惊动了最高统治者", correct: true, explanation: "✅ 正确解释：“闻之于宋君”说明谣言传播范围之广、影响之大，甚至传到了一国之君的耳朵里。这侧面表现了以讹传讹的严重性。", py: "yáo yán yǐ jīng jīng dòng le zuì gāo tǒng zhì zhě", en: "The rumor has alarmed the highest ruler" },
          { text: "宋君是谣言的源头", correct: false, explanation: "❌ 错误原因：国君是“闻之”，即听说者，而不是最初传播的人。源头是丁氏的那句“吾穿井得一人”以及后续的误传者。", py: "sòng jūn shì yáo yán de yuán tóu", en: "The ruler is the source of the rumor" },
          { text: "国人把丁氏告到了国君那里", correct: false, explanation: "❌ 错误原因：“闻之于宋君”是被动结构，表示“被国君听闻”，不一定是有人告状。也可能是民间议论纷纷，自然传到国君耳中。", py: "guó rén bǎ dīng shì gào dào le guó jūn nà lǐ", en: "People reported Ding to the ruler" }
      ] },
    { id: 5, text: "下列哪一项最符合“求闻之若此，不若无闻也”的寓意？", en: "Which best matches the moral of the last sentence?", py: "xià liè nǎ yī xiàng zuì fú hé “ qiú wén zhī ruò cǐ ， bú ruò wú wén yě ” de yù yì ？",
      options: [
          { text: "听到任何消息都要立刻告诉别人", correct: false, explanation: "❌ 错误原因：这句话意思完全相反。作者批评的是不加分辨就传播，而不是鼓励立刻告诉别人。", py: "tīng dào rèn hé xiāo xī dōu yào lì kè gào su bié rén", en: "Tell others immediately upon hearing any news" },
          { text: "国君应该亲自去调查每一件事", correct: false, explanation: "❌ 错误原因：这句话是针对所有人听闻消息的态度，不是专门对国君说的。", py: "guó jūn yīng gāi qīn zì qù diào chá měi yī jiàn shì", en: "The ruler should personally investigate everything" },
          { text: "听信虚假传闻不如没有听到任何消息", correct: true, explanation: "✅ 正确解释：虚假的传闻会误导人的判断，甚至造成恐慌或错误决策。与其被谣言蒙蔽，不如一开始就没听过，然后通过正规渠道去了解真相。", py: "tīng xìn xū jiǎ chuán wén bù rú méi yǒu tīng dào rèn hé xiāo xī", en: "It's better to hear nothing than to believe false rumors" },
          { text: "不要相信任何人的话", correct: false, explanation: "❌ 错误原因：这个选项过于极端。作者并非要人完全不信任何话，而是强调“若此”这种以讹传讹的情况不如不听。", py: "bú yào xiāng xìn rèn hé rén de huà", en: "Don't believe anyone's words" }
      ] }
];
