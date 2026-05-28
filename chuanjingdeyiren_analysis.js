// ============================================================================
// 穿井得一人 - 全诗赏析数据包（完整修复版）
// ============================================================================

const analysisData = [
    {
        id: "theme",
        py: "yù yì yǔ zhǔ zhǐ",
        header: "寓意与主旨",
        en: "Message & Theme",
        contents: [
            {
                py: "gù shì shēn kè fěng cì le <strong>yǐ é chuán é</strong> 、 <strong>dào tīng tú shuō</strong> de shè huì bì bìng 。",
                zh: "故事深刻讽刺了<strong class='exam-focus'>以讹传讹</strong>、<strong class='exam-focus'>道听途说</strong>的社会弊病。",
                en: "The story deeply satirizes the social malady of <strong>spreading rumors</strong> and <strong>believing hearsay</strong>."
            },
            {
                py: "jiè cǐ gào jiè rén men ：",
                zh: "借此告诫人们：",
                en: "thereby warning people that:"
            },
            {
                py: "bì xū <strong>shí shì qiú shì</strong> ， fán shì qīn zì diào chá hé shí 。",
                zh: "• 必须<strong class='exam-focus'>实事求是</strong>，凡事亲自调查核实。",
                en: "• One must <strong>seek truth from facts</strong> and personally verify everything."
            },
            {
                py: "bǎo chí lǐ xìng sī kǎo ， bù qīng xìn chuán wén ， bù máng mù chuán bō xū jiǎ xìn xī 。",
                zh: "• 保持理性思考，<strong class='exam-focus'>不轻信传闻</strong>，<strong class='exam-focus'>不盲目传播虚假信息</strong>。",
                en: "• Maintain rational thinking, <strong>do not blindly trust hearsay</strong>, and <strong>do not recklessly spread false information</strong>."
            }
        ]
    },
    {
        id: "narrative",
        py: "yì shù tè diǎn",
        header: "叙事艺术",
        en: "Narrative Art",
        contents: [
            {
                py: "wén zhāng qíng jié cǎi yòng <strong>céng céng dì jìn</strong> de xù shì shǒu fǎ ， fèng cì xīn là 。",
                zh: "文章情节采用<strong class='exam-focus'>层层递进</strong>的叙事手法，讽刺辛辣。",
                en: "The story uses a <strong>progressive</strong> narrative approach with sharp sarcasm."
            },
            {
                py: "yáo yán de yǎn biàn liú chéng jí qí qīng xī ：",
                zh: "谣言的演变流程极其清晰：",
                en: "The evolution process of the rumor is extremely clear:"
            },
            {
                py: "yáo yán yǎn biàn sì bù qǔ （ xiáng xì fēn jiě rú xià ）：",
                zh: "🏷️ <strong>谣言演变四部曲</strong>（详细分解如下）：",
                en: "🏷️ <strong>The Four Stages of Rumor Evolution</strong> (Detailed breakdown below):"
            },
            {
                py: "❶ qǐ yīn （ yǔ yán qí yì ）： dīng shì běn yì “ chuān jǐng dé yī rén （ duō yī gè láo dòng lì ）”",
                zh: "❶ <strong>起因（语言歧义）</strong>：丁氏本意“穿井得一人（多一个劳动力）”",
                en: "❶ <strong>Origin (Language Ambiguity)</strong>: Ding's original meaning was 'gained a person by digging a well (gained an extra laborer)'"
            },
            {
                py: "➔ ❷ fā zhǎn （ zì miàn wù chuán ）： gè bié rén chuán wéi “ dīng shì chuān jǐng dé yī rén （ jǐng lǐ wā chū rén ）”",
                zh: "➔ ❷ <strong>发展（字面误传）</strong>：个别人传为“丁氏穿井得一人（井里挖出人）”",
                en: "➔ ❷ <strong>Development (Misinterpretation)</strong>: Someone spread it as 'Ding dug up a person from inside the well'"
            },
            {
                py: "➔ ❸ gāo cháo （ quán guó hōng dòng ）： “ guó rén dào zhī ”， shēng yīn dà dào shèn zhì chuán dào le guó jūn ěr zhōng",
                zh: "➔ ❸ <strong>高潮（全国轰动）</strong>：“国人道之”，声音大到甚至传到了国君耳中",
                en: "➔ ❸ <strong>Climax (Widespread Sensation)</strong>: 'People across the state talked about it', and it even reached the ruler's ears"
            },
            {
                py: "➔ ❹ jié jú （ zhēn xiàng dà bái ）： guó jūn pài rén diào chá ， dīng shì chéng qīng “ fēi dé yī rén yú jǐng zhōng yě ”",
                zh: "➔ ❹ <strong>结局（真相大白）</strong>：国君派人调查，丁氏澄清“非得一人于井中也”",
                en: "➔ ❹ <strong>Conclusion (Truth Revealed)</strong>: The ruler sent an inquiry, and Ding clarified 'not finding a person from inside the well'"
            },
            {
                py: "quán piān zuì hòu yǐ “ qiú wén zhī ruò cǐ ， bù ruò wú wén yě ” zhí jiē diǎn tí ， yǐn rén shēn sī 。",
                zh: "全篇最后以<strong class='exam-focus'>“求闻之若此，不若无闻也”</strong>直接点题，引人深思。",
                en: "The entire text ends by directly stating the theme: <strong>'Seeking news like this is worse than hearing nothing at all'</strong>, leaving readers with deep thoughts."
            }
        ]
    }
];

// 辅助函数：根据ID获取赏析数据
function getAnalysisById(id) {
    return analysisData.find(item => item.id === id);
}

// 辅助函数：获取所有赏析数据
function getAllAnalysis() {
    return analysisData;
}

// 辅助函数：渲染单个赏析卡片
function renderAnalysisCard(analysis) {
    let contentHtml = '';
    analysis.contents.forEach(content => {
        contentHtml += `
            <div class="ana-py">${content.py}</div>
            <p class="ana-zh">${content.zh}</p>
            <div class="ana-en">${content.en}</div>
        `;
    });
    
    return `
        <div class="analysis-card" data-id="${analysis.id}">
            <div class="ana-title-group">
                <div class="ana-py">${analysis.py}</div>
                <div class="ana-header">${analysis.header}</div>
                <div class="ana-en">${analysis.en}</div>
            </div>
            <div class="ana-text-group">
                ${contentHtml}
            </div>
        </div>
    `;
}

// 辅助函数：渲染所有赏析卡片
function renderAllAnalysisCards() {
    return analysisData.map(item => renderAnalysisCard(item)).join('');
}

// 导出到全局
window.analysisData = analysisData;
window.getAnalysisById = getAnalysisById;
window.getAllAnalysis = getAllAnalysis;
window.renderAnalysisCard = renderAnalysisCard;
window.renderAllAnalysisCards = renderAllAnalysisCards;
