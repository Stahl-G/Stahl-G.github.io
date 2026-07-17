export interface Bilingual {
  en: string;
  zh: string;
}

const b = (en: string, zh: string): Bilingual => ({ en, zh });

export const c = {
  identity: {
    name: b('Yihong ‘Stahl’ Guo', '郭义泓（Stahl）'),
  },
  nav: {
    about: b('About', '关于'),
    work: b('Work', '项目'),
    background: b('Background', '经历'),
    frames: b('Archive', '影像'),
    contact: b('Contact', '联系'),
    langToggle: b('中文', 'EN'),
  },
  hero: {
    kicker: b('01 / PROFILE', '01 / 个人简介'),
    titleA: b('Strategy, research, and ', '战略、研究与'),
    titleB: b('accountable AI workflows.', '可问责的 AI 工作流。'),
    lead: b(
      'I work where corporate strategy, investor communications, and accountable AI meet—turning complex information into work that can be traced, reviewed, and improved.',
      '我的工作横跨企业战略、投资者沟通与可问责 AI，致力于将复杂信息转化为可追溯、可复核、可持续改进的成果。'
    ),
    primaryCta: b('Explore BriefLoop', '了解 BriefLoop'),
    secondaryCta: b('View selected work', '查看精选项目'),
    credentials: [
      b('Strategy & IR', '战略与投资者沟通'),
      b('UCSB Physics', 'UCSB 物理'),
      b('Melbourne Finance', '墨尔本大学金融'),
    ],
  },
  about: {
    kicker: b('02 / ABOUT', '02 / 关于'),
    title: b('Good decisions need more than a polished answer.', '好的决策，需要的不只是一个漂亮答案。'),
    paragraphs: [
      b(
        'I am a strategy practitioner and independent builder trained in physics and finance. My work spans corporate strategy, investor communications, industry and policy research, and structured AI workflows.',
        '我拥有物理与金融背景，目前从事企业战略、投资者沟通、行业与政策研究，同时独立探索结构化 AI 工作流。'
      ),
      b(
        'I am interested in the systems behind good judgment: rigorous evidence, clear responsibility, and repeatable process.',
        '我关注的不只是结论本身，也关注好判断背后的系统：严谨的证据、清晰的责任边界，以及可重复的流程。'
      ),
    ],
  },
  work: {
    kicker: b('03 / SELECTED WORK', '03 / 精选项目'),
    title: b('Building systems that keep evidence and responsibility visible.', '让证据与责任在工作流中保持可见。'),
    briefloop: {
      index: 'BL / 01',
      label: b('OPEN-SOURCE PROJECT', '开源项目'),
      name: 'BriefLoop',
      body: b(
        'An open-source workflow for accountable AI briefs. BriefLoop organizes recurring research around claim ledgers, source traceability, quality gates, audit trails, and explicit human approval—so a brief can be reviewed as a process, not only read as prose.',
        '一套面向可问责 AI 简报的开源工作流。BriefLoop 通过主张台账、来源追溯、质量门禁、审计轨迹与明确的人工审批组织周期性研究，让简报不仅可以阅读，也可以作为完整过程被检查和复核。'
      ),
      visit: b('Visit BriefLoop', '访问 BriefLoop'),
      github: b('View on GitHub', '在 GitHub 查看'),
      ledger: [
        ['CLAIM LEDGER', 'VISIBLE'],
        ['QUALITY GATES', 'CHECKED'],
        ['HUMAN APPROVAL', 'REQUIRED'],
      ] as const,
    },
    experience: {
      title: b('Experience', '工作经历'),
      rows: [
        {
          period: b('2026—Present', '2026—至今'),
          company: b('TOYO Co., Ltd.', 'TOYO Co., Ltd.'),
          role: b('Management Trainee · Strategy & Investor Communications', '总裁办管培生 · 战略与投资者沟通'),
          desc: b(
            'Corporate strategy, investor communications, and market and policy research for a global solar manufacturer.',
            '参与全球光伏制造企业的战略、投资者沟通，以及市场与政策研究。'
          ),
        },
        {
          period: b('2023—2025', '2023—2025'),
          company: b('Technology · Industrials · Energy', '科技 · 工业 · 能源'),
          role: b('Investment Research', '投资研究'),
          desc: b(
            'Industry research, company analysis, valuation support, and pre-investment diligence across advanced manufacturing, technology, consumer, healthcare, and energy sectors.',
            '曾参与先进制造、科技、消费、医疗与能源等领域的行业研究、公司分析、估值支持与投前尽调。'
          ),
        },
      ],
    },
  },
  background: {
    kicker: b('04 / BACKGROUND', '04 / 背景'),
    title: b('From physics to finance, strategy, and research.', '从物理到金融、战略与研究。'),
    education: {
      title: b('Education', '教育'),
      items: [
        {
          year: '2025',
          school: b('University of Melbourne', '墨尔本大学'),
          degree: b('Master of Management (Finance)', '管理学硕士（金融方向）'),
        },
        {
          year: '2022',
          school: b('University of California, Santa Barbara', '加州大学圣塔芭芭拉分校'),
          degree: b('Bachelor’s degree in Physics', '物理学学士'),
        },
        {
          year: '2019',
          school: b('International Christian University', '国际基督教大学'),
          degree: b('UCEAP Japanese Language Program', 'UCEAP 日语教育项目'),
        },
      ],
    },
    languages: {
      title: b('Languages', '语言'),
      items: [
        { num: '01', label: b('Mandarin · Native', '中文 · 母语') },
        { num: '02', label: b('English · Fluent', '英语 · 流利') },
        { num: '03', label: b('Japanese · JLPT N2', '日语 · JLPT N2') },
      ],
    },
  },
  frames: {
    kicker: b('05 / SELECTED FRAMES', '05 / 精选影像'),
    meta: b('PHOTOGRAPHY · COSPLAY', '摄影 · COSPLAY'),
    title: b('Photography & Cosplay', '摄影与 Cosplay'),
    intro: b(
      'Outside work, I use photography and cosplay to explore light, character, and place. This selection brings together astrophotography, portraiture, and collaborative character work.',
      '工作之外，我通过摄影与角色扮演探索光线、人物与地点。以下精选涵盖星空、人像与角色合作创作。'
    ),
    gallery: [
      { file: 'night-tree', wide: true, category: '01 / ASTROPHOTOGRAPHY', title: b('Night Tree', '星夜孤树'), alt: 'Milky Way above a lone tree' },
      { file: 'stars-and-character', wide: false, category: '02 / NIGHT PORTRAIT', title: b('Under the Milky Way', '银河之下'), alt: 'Character portrait under the Milky Way' },
      { file: 'night-road', wide: true, category: '03 / ASTROPHOTOGRAPHY', title: b('Road into the Night', '驶入星夜'), alt: 'Panoramic night sky over a country road' },
      { file: 'masked-portrait', wide: false, category: '04 / PORTRAIT', title: b('Metal & Light', '金属与光'), alt: 'Close-up cosplay portrait in warm evening light' },
      { file: 'blue-archer', wide: false, category: '05 / COSPLAY', title: b('Azure Archer', '青蓝射手'), alt: 'Cosplay portrait with twin ornate blades' },
      { file: 'silver-demon', wide: false, category: '06 / COSPLAY', title: b('Silver & Fur', '银发白裘'), alt: 'Cosplay portrait with silver hair and white fur collar' },
      { file: 'violet-warrior', wide: false, category: '07 / COSPLAY', title: b('Violet Blade', '紫刃'), alt: 'Cosplay portrait in violet with a sword' },
      { file: 'white-fantasy', wide: true, category: '08 / DUO', title: b('Promise in White', '白衣之约'), alt: 'Two cosplayers in white, backlit in a garden' },
      { file: 'ferris-wheel', wide: false, category: '09 / GROUP', title: b('Ferris Wheel', '摩天轮下'), alt: 'Group of friends silhouetted under a ferris wheel' },
    ],
  },
  contact: {
    kicker: b('06 / CONTACT', '06 / 联系'),
    title: b('Let’s connect.', '保持联系。'),
    lead: b('For BriefLoop, research, and collaboration:', '如需就 BriefLoop、研究或合作联系：'),
  },
  footer: {
    copyright: b('Yihong ‘Stahl’ Guo', '郭义泓'),
    note: b(
      'Views are my own. Selected work is published with appropriate consent and credit.',
      '本站观点仅代表个人。合作创作仅在取得适当同意并标注署名后发布。'
    ),
    top: '↑ TOP',
  },
};
