// AI Tools and Role Diagnostic Knowledge Base
// Generated from 711 presentation files across all teaching modules

const AI_TOOLS_DATA = [
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "en_name": "ChatGPT (OpenAI)",
    "category": "自然語言與對話思考",
    "subcategory": "通用大語言模型",
    "official_url": "https://chatgpt.com",
    "description": "全球代表性生成式對話模型。具備文章撰寫、邏輯推理、角色扮演、程式編寫與多模態分析能力。",
    "teaching_scenarios": [
      "履歷健檢與模擬面試官（扮演挑剔面試官逐題提問）",
      "商業企劃撰寫：將價值主張圖、精實畫布轉化為商業計畫書",
      "行政文書與長照/教育公文快速擬定",
      "顧客痛點挖掘、六頂思考帽創意發想",
      "離職預測分析與職場滿意度問卷題目設計"
    ],
    "prompt_formula": "【你是、我要、你會】三步驟框架；【Co-STAR】上下文、目標、風格、語氣、受眾、回應格式；【ATM】行為、任務、衡量指標。",
    "representative_decks": [
      "1122｜成功大學｜活用ChatGPT，讓你在面試中自信表達.key",
      "0516｜士林電機｜生成Ai工作術：ChatGPT基礎到進階應用.key",
      "0709｜夾子園｜ChatGPT銷售與行銷.key",
      "AI人資課綱｜By Zack Hsu.pdf"
    ],
    "tags": [
      "文字生成",
      "免費/付費",
      "入門必學",
      "商業企劃",
      "履歷面試",
      "教學必備"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "claude",
    "name": "Claude",
    "en_name": "Claude (Anthropic)",
    "category": "自然語言與對話思考",
    "subcategory": "長文本與邏輯推理模型",
    "official_url": "https://claude.ai",
    "description": "擅長長篇專業文本分析、語氣細膩自然、嚴謹邏輯推理。其 Artifacts 功能可即時預覽互動網頁、圖表與代碼。",
    "teaching_scenarios": [
      "長篇企業白皮書、法規與合約細讀分析",
      "多模態圖表深度解讀與結構化表格提煉",
      "撰寫高階雇主品牌文案與具備邏輯深度的公關稿",
      "Artifacts 即時生成互動式教案與簡易網頁工具"
    ],
    "prompt_formula": "提供背景脈絡（Context）與詳細約束條件（Constraints），要求依照指定結構輸出 XML 或 Markdown 報告。",
    "representative_decks": [
      "AI商務實戰｜參考課綱｜許秉軒培訓師.pdf",
      "0920｜個人品牌工作者的自動化應用.key",
      "0811｜ATC｜生成式人工智慧時代學習策略.key"
    ],
    "tags": [
      "長文本分析",
      "邏輯嚴謹",
      "Artifacts",
      "企劃寫作",
      "免費/付費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "gemini",
    "name": "Google Gemini",
    "en_name": "Google Gemini",
    "category": "自然語言與對話思考",
    "subcategory": "多模態大語言模型",
    "official_url": "https://gemini.google.com",
    "description": "Google 原生多模態大模型，無縫整合 Google 生態系（Docs, Drive, YouTube, Maps），具備超長上下文窗口與即時聯網搜集能力。",
    "teaching_scenarios": [
      "農會在地農特產行銷文案與多模態商品圖像創作分析",
      "YouTube 影音重點快速拆解與教案轉換",
      "整合 Google 雲端文件進行企業知識檢索"
    ],
    "prompt_formula": "結合受眾輪廓＋產品特色＋情境喚起＋行動呼籲（CTA），讓在地農特產具備溫度與吸睛標題。",
    "representative_decks": [
      "1125｜桃園農會｜Gemini行銷圖像創作.key",
      "0926｜馬偕醫護｜生成AI高效學習應用.key"
    ],
    "tags": [
      "多模態",
      "Google整合",
      "行銷文案",
      "免費/付費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "copilot",
    "name": "Microsoft Copilot",
    "en_name": "Microsoft Copilot",
    "category": "自然語言與對話思考",
    "subcategory": "辦公套件與搜尋整合",
    "official_url": "https://copilot.microsoft.com",
    "description": "微軟將 GPT-4 與 Bing 搜尋引擎、Microsoft 365 深度整合之辦公助手，並內建 DALL-E 繪圖功能。",
    "teaching_scenarios": [
      "整合 Edge 瀏覽器即時總結網頁長文與產業報告",
      "協助 Word/PPT 快速起草企劃大綱與重點提煉",
      "在校園課堂上引導學生進行安全的數位素養學習"
    ],
    "prompt_formula": "以精確模式（Precise mode）檢索具體法規或定義；以創意模式（Creative mode）發想社群標語。",
    "representative_decks": [
      "第一傳動｜生成AI 工作術 ｜培訓規劃.pdf",
      "0921｜縉陽企業｜ChatGPT 提升商機洞察與創造力.key"
    ],
    "tags": [
      "微軟生態",
      "Office整合",
      "免費/企業版",
      "搜尋增強"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "kimi",
    "name": "Kimi (月之暗面)",
    "en_name": "Kimi Chat",
    "category": "自然語言與對話思考",
    "subcategory": "超長文本閱讀模型",
    "official_url": "https://kimi.moonshot.cn",
    "description": "專注於 20 萬字以上超長上下文的中文 AI 助手，支援整本專書、長篇財報、多份合約一次上傳解析。",
    "teaching_scenarios": [
      "長篇幼教管理法規與政策手冊閱讀",
      "企業年度財報與競品公開說明書快速橫向比對"
    ],
    "prompt_formula": "上傳長文後下達：「請提取本文前三大核心觀點，並列出在實際執行上可能遇到的法規風險與條文出處」。",
    "representative_decks": [
      "幼教主管卓越領導計畫.pptx"
    ],
    "tags": [
      "超長文本",
      "長文摘要",
      "中文優化",
      "免費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "perplexity",
    "name": "Perplexity AI",
    "en_name": "Perplexity AI",
    "category": "AI 搜尋與情報研究",
    "subcategory": "對話式智慧搜尋引擎",
    "official_url": "https://www.perplexity.ai",
    "description": "結合即時網頁檢索與生成式摘要的問答引擎，每段論點均附帶引用腳註與信賴來源鏈接，杜絕幻覺。",
    "teaching_scenarios": [
      "環境永續（ESG）、社會責任指標與國際趨勢情報搜集",
      "產業人才庫與市場競品現況速查",
      "運用 DIKW（資料→資訊→知識→智慧）金字塔，將搜尋數據轉化為企業內部觀點"
    ],
    "prompt_formula": "自然問答式查詢：以具體提問（如『2025 台灣長照產業數位轉型前三大痛點與最新補助政策』）並點擊相關延伸問題深化探索。",
    "representative_decks": [
      "1016｜靜宜大學｜ AI腳本應用｜.key",
      "AI人資課綱｜By Zack Hsu.pdf",
      "0811｜金三角商圈｜AI 實戰工坊.key"
    ],
    "tags": [
      "即時聯網",
      "學術引用",
      "趨勢調研",
      "免費/付費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "felo",
    "name": "Felo AI",
    "en_name": "Felo AI",
    "category": "AI 搜尋與情報研究",
    "subcategory": "跨語言搜尋與文檔生成",
    "official_url": "https://felo.ai",
    "description": "跨語言對話式搜尋引擎，支援繁體中文自然問答並檢索全球多語種資料，能一鍵將搜尋結果轉為心智圖或簡報大綱。",
    "teaching_scenarios": [
      "跨國產業人才招募現況與薪資標準市場調查",
      "自動將多國搜尋結果結構化為思維導圖與專題大綱",
      "產出產業人才白皮書與調研摘要"
    ],
    "prompt_formula": "輸入特定產業專題名稱，選擇『深度搜尋』模式，產出結構化章節與重點依據。",
    "representative_decks": [
      "AI人資課綱｜By Zack Hsu.pdf",
      "0516｜士林電機｜生成Ai工作術.key"
    ],
    "tags": [
      "跨語言搜尋",
      "生成心智圖",
      "情報搜集",
      "免費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "txyz",
    "name": "TXYZ.ai",
    "en_name": "TXYZ.ai",
    "category": "AI 搜尋與情報研究",
    "subcategory": "科研文獻與論文解讀",
    "official_url": "https://txyz.ai",
    "description": "專為學者、科研人員設計的文獻閱讀工具，可檢索 arXiv 及數百萬篇學術論文並提供即時問答剖析。",
    "teaching_scenarios": [
      "碩博士與大專院校學生學術論文文獻探討",
      "醫療照護與工程技術領域前沿論文核心演算法比對"
    ],
    "prompt_formula": "輸入論文 DOI 或主題，要求條列研究方法、樣本數、結論及未來研究限制。",
    "representative_decks": [
      "大專院校與高中職校園教學/各類專題簡報"
    ],
    "tags": [
      "論文閱讀",
      "科研必備",
      "學術文獻",
      "免費/付費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "consensus",
    "name": "Consensus",
    "en_name": "Consensus",
    "category": "AI 搜尋與情報研究",
    "subcategory": "科學實證搜尋引擎",
    "official_url": "https://consensus.app",
    "description": "以經過同行評審（Peer-reviewed）之科學論文為基礎，針對特定研究問題給出科學界的共識指標（Consensus Meter）。",
    "teaching_scenarios": [
      "健康照護、營養科學、心理學的實證依據查詢",
      "教學研究報告中的科學論證查核"
    ],
    "prompt_formula": "以 Yes/No 疑問句發問（如『Does mindfulness reduce employee burnout?』），觀察文獻贊成與反對比例。",
    "representative_decks": [
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf",
      "1123｜中原大學｜ChatGPT學習應用.key"
    ],
    "tags": [
      "同行評審",
      "科學共識",
      "醫護健康",
      "免費/付費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "gamma",
    "name": "Gamma",
    "en_name": "Gamma App",
    "category": "簡報與文檔生成",
    "subcategory": "AI 一鍵簡報與網頁製作",
    "official_url": "https://gamma.app",
    "description": "新一代 AI 簡報生產力神器。只需輸入主題或貼上大綱，數十秒即可自動排版生成具備圖文、卡片式設計的高質感投影片或網頁。",
    "teaching_scenarios": [
      "教師快速備課：將教案大綱一鍵轉化為課堂投影教材",
      "新興國小 AI 教學實作：從教學步驟直接輸出學生教學簡報",
      "中小企業商業提案與產品推廣單頁（One-pager）製作",
      "Whisper 逐字稿重點彙整後直接倒入排版"
    ],
    "prompt_formula": "在大綱編輯區精準指定：每張卡片標題＋3點要點說明＋預設視覺風格，避免生成空泛內容。",
    "representative_decks": [
      "1013｜德明科大｜NotebookLM簡報應用.pdf",
      "0729｜新北有課｜資訊煉金術：化繁為簡的AI簡報課.key",
      "新興國小｜AI教學簡報.xlsx",
      "0624｜AI簡報應用.pptx"
    ],
    "tags": [
      "簡報神仙工具",
      "一鍵生PPT",
      "網頁生成",
      "卡片排版",
      "免費/付費",
      "熱門必備"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "napkin",
    "name": "Napkin AI",
    "en_name": "Napkin AI",
    "category": "簡報與文檔生成",
    "subcategory": "文字一秒轉資訊圖表",
    "official_url": "https://napkin.ai",
    "description": "將生硬純文字一鍵自動轉化為精美視覺資訊圖表（Infographic）的革命性工具。支援流程圖、文氏圖、金字塔、對比圖等，可直接導出向量圖與 PNG。",
    "teaching_scenarios": [
      "解決簡報『全是字、沒人看』的痛點，將長篇論述一秒變圖解",
      "人資職能培育與培訓成效指標可視化",
      "企業商業模式、商業企劃各階段里程碑可視化展示",
      "將文字條列的教學流程轉化為色彩活潑的步驟圖"
    ],
    "prompt_formula": "直接貼入 2~3 句有邏輯關係（並列、遞進、因果、循環）的文字段落，點擊左側閃電圖標挑選最適合的視覺圖表樣式。",
    "representative_decks": [
      "AI人資課綱｜By Zack Hsu.pdf",
      "0729｜新北有課｜資訊煉金術：化繁為簡的AI簡報課.key",
      "infographic_16x9.html",
      "0930｜菌寶貝｜OKR目標管理＆AI高效工作術.key"
    ],
    "tags": [
      "資訊圖表",
      "文字轉圖表",
      "流程圖",
      "簡報升級",
      "免費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "canva",
    "name": "Canva (Magic Studio)",
    "en_name": "Canva Magic Studio",
    "category": "簡報與文檔生成",
    "subcategory": "全方位線上設計與 AI 魔法工具",
    "official_url": "https://www.canva.com",
    "description": "主流線上圖文排版平台，內建 Magic Design、Magic Switch、文字生圖、魔法橡皮擦等完整 AI 創作套件。",
    "teaching_scenarios": [
      "大專院校學生運用模板撰寫吸睛求職履歷與作品集",
      "社群經營者批次建立 Instagram 圖文輪播封面",
      "產品提案簡報設計與多尺寸行銷素材自動重排"
    ],
    "prompt_formula": "在 Magic Design 輸入簡報主題，選定品牌色系與風格字體，自動套入標準排版。",
    "representative_decks": [
      "0519＆20｜致理科大｜Canva撰寫履歷.key",
      "0820｜中華民國農會｜宣傳DM製作高效化.key",
      "ATS報告｜許秉軒｜2025 年人才發展提案.pdf"
    ],
    "tags": [
      "社群排版",
      "求職履歷",
      "大量模板",
      "商用設計",
      "免費/付費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "tome",
    "name": "Tome",
    "en_name": "Tome",
    "category": "簡報與文檔生成",
    "subcategory": "敘事型 AI 簡報生成",
    "official_url": "https://tome.app",
    "description": "以故事化敘事為特色的 AI 生成簡報工具，整合 DALL-E 配圖與自適應版面。",
    "teaching_scenarios": [
      "結合客戶背景資料快速生成客製化產品推廣故事簡報",
      "業務團隊進行提案模擬演練與簡報發表"
    ],
    "prompt_formula": "輸入客戶痛點＋產品解決方案＋預期效益，生成 6~8 頁標準商業 Pitch Deck。",
    "representative_decks": [
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf",
      "ATS報告｜許秉軒｜2025 年人才發展與營運策略提案.pdf"
    ],
    "tags": [
      "故事敘事",
      "業務提案",
      "商業簡報"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "popai",
    "name": "PopAi",
    "en_name": "PopAi",
    "category": "簡報與文檔生成",
    "subcategory": "文件轉簡報與心智圖",
    "official_url": "https://popai.pro",
    "description": "結合個人工作區與 AI 助手的工具，支援將長文、PDF 一鍵轉為演講投影片與視覺架構。",
    "teaching_scenarios": [
      "快速將讀書筆記、演講逐字稿摘要並轉製為演講簡報"
    ],
    "prompt_formula": "上傳報告檔案，選擇『Generate Presentation』，自訂頁數與目標受眾設定。",
    "representative_decks": [
      "工具專題與核心課程/簡報應用類講義"
    ],
    "tags": [
      "文檔轉PPT",
      "心智圖",
      "快速簡報"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "recraft",
    "name": "Recraft.ai",
    "en_name": "Recraft.ai",
    "category": "圖像生成與設計處理",
    "subcategory": "向量圖與品牌視覺生成神器",
    "official_url": "https://recraft.ai",
    "description": "專為專業設計師打造的生成式設計工具。能直接輸出無損向量圖（SVG）、精準控制品牌調色盤、產出 3D 圖標、扁平插畫與手繪風格。",
    "teaching_scenarios": [
      "為品牌/粉專繪製專屬吉祥物（Mascot）與系列情境貼圖",
      "網站與 App 介面所需的向量 Icon、3D 立體插畫生產",
      "統一企業品牌視覺風格，確保多張宣傳圖色調與線條一致",
      "傳產與緞帶設計師舊圖翻新、生成新型樣式花紋"
    ],
    "prompt_formula": "風格選擇（Vector art / 3D illustration / Plastic clay）＋主體描述＋指定品牌 Hex 色票，維持系列插畫一致性。",
    "representative_decks": [
      "0415｜AI繪圖與影片製作.pdf",
      "0513｜數發部｜生成AI圖像設計實務班.pdf",
      "100小時教學經驗詳細資料表｜許秉軒.pdf",
      "AI商務實戰｜參考課綱.pdf"
    ],
    "tags": [
      "向量圖SVG",
      "吉祥物設計",
      "ICON生成",
      "品牌風格一致",
      "免費/付費",
      "設計師神器"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "ideogram",
    "name": "Ideogram",
    "en_name": "Ideogram",
    "category": "圖像生成與設計處理",
    "subcategory": "字體排版與商業海報生成",
    "official_url": "https://ideogram.ai",
    "description": "在英文字體渲染與海報排版上處於全球領先地位的 AI 繪圖工具，能精準在圖像中拼寫出文字，非常適合文創與社群海報設計。",
    "teaching_scenarios": [
      "社群活動主視覺海報、精準字體排版封面圖設計",
      "文創商品 T-Shirt、馬克杯、標誌標題概念打樣",
      "中英文字體結合藝術風格的品牌招牌發想"
    ],
    "prompt_formula": "使用引號包裹文字：typography, a vintage poster with the text 'FUTURE AI WORK', bold retro lettering, vibrant colors, graphic design.",
    "representative_decks": [
      "1003｜AI社群圖像設計力.key",
      "0401｜AI社群圖像設計力.key",
      "1114｜中華民國農會｜ AI繪圖應用.key"
    ],
    "tags": [
      "字體排版",
      "海報設計",
      "文字渲染",
      "社群封面",
      "免費/付費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "midjourney",
    "name": "Midjourney",
    "en_name": "Midjourney",
    "category": "圖像生成與設計處理",
    "subcategory": "極致光影與藝術渲染",
    "official_url": "https://www.midjourney.com",
    "description": "業界藝術光影、細節質素最高的圖像生成模型。廣泛應用於概念設計、自媒體精緻視覺、商品情境攝影。",
    "teaching_scenarios": [
      "自媒體質感文青風、可愛吉祥物、黏土風（Clay）、立體盲盒公仔視覺生成",
      "商業廣告大片、產品情境包裝攝影提案",
      "電影分鏡腳本概念圖繪製"
    ],
    "prompt_formula": "主體描述 + 風格關鍵字（Kawaii, Risograph, Hand-drawn, Plastic Clay, 3D render, Voxel art）+ 光影（cinematic lighting）+ 參數（--ar 16:9 --v 6.0）。",
    "representative_decks": [
      "0816｜資展｜AI自媒體經營術.key",
      "0930｜菌寶貝｜OKR目標管理＆AI高效工作術.key",
      "0624｜AI簡報應用.pptx",
      "0513｜數發部｜生成AI圖像設計實務班.pdf"
    ],
    "tags": [
      "頂級畫質",
      "風格關鍵字",
      "商業攝影",
      "藝術創作",
      "Discord"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "firefly",
    "name": "Adobe Firefly",
    "en_name": "Adobe Firefly",
    "category": "圖像生成與設計處理",
    "subcategory": "商業版權安全與生成填色",
    "official_url": "https://firefly.adobe.com",
    "description": "Adobe 官方訓練、具備商業版權安全的 AI 圖像工具，支援 Generative Fill（生成填色）、文字效果與向量重新著色。",
    "teaching_scenarios": [
      "數位發展部圖像實務班：課堂互動遊戲，使用 Generative Fill 消除雜物與修補畫面",
      "電商情境替換：為現有商品置換節慶背景或模特手部姿勢",
      "符合企業法規要求的商業圖庫創作"
    ],
    "prompt_formula": "塗抹畫面需要替換的區域，輸入欲新增的物體特徵或背景描述，點擊生成多組變體比對。",
    "representative_decks": [
      "0513｜數發部｜生成AI圖像設計實務班.pdf",
      "1114｜中華民國農會｜ AI繪圖應用.key",
      "AI繪圖行銷應用實戰班｜許秉軒.pdf"
    ],
    "tags": [
      "版權安全",
      "生成填色",
      "圖片修復",
      "Adobe生態"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "leonardo",
    "name": "Leonardo.ai",
    "en_name": "Leonardo.ai",
    "category": "圖像生成與設計處理",
    "subcategory": "多風格遊戲資產與即時繪圖",
    "official_url": "https://leonardo.ai",
    "description": "功能全面的 AI 圖像平台，具備多種微調模型、Realtime Canvas 即時繪圖、AI 畫布擴展等功能。",
    "teaching_scenarios": [
      "各類教材插畫配圖、遊戲資產與角色概念設計",
      "即時塗鴉輔助：一邊手繪草稿一邊即時渲染成精緻圖片"
    ],
    "prompt_formula": "選擇指定微調模型（如 Leonardo Diffusion XL）＋負面提示詞（Negative Prompt）排除瑕疵肢體。",
    "representative_decks": [
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf",
      "生成式AI試教演練考核指定教材.pdf"
    ],
    "tags": [
      "即時畫布",
      "微調模型",
      "角色設計",
      "每日免費額度"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "roomgpt",
    "name": "RoomGPT",
    "en_name": "RoomGPT",
    "category": "圖像生成與設計處理",
    "subcategory": "空間室內設計 AI 改造",
    "official_url": "https://www.roomgpt.io",
    "description": "上傳現有房間、客廳或建築照片，即可選擇北歐風、現代風、工業風等風格一秒生成重新裝修效果圖。",
    "teaching_scenarios": [
      "好客民宿／民宿業者 AI 數位轉型實務：老舊客房空間重新設計提案",
      "桃園不動產仲介：中古屋空間虛擬裝潢展示，提升帶看吸引力"
    ],
    "prompt_formula": "上傳空屋或現況照片，挑選房間類型（Living Room / Bedroom）與目標風格（Modern / Minimalist / Coastal）。",
    "representative_decks": [
      "好客民宿｜民宿業AI導入數位轉型實務.key",
      "0811｜桃園不動產仲介｜社群影像AI工作術.key"
    ],
    "tags": [
      "室內設計",
      "空間改造",
      "民宿轉型",
      "房仲必備"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "photoroom",
    "name": "PhotoRoom",
    "en_name": "PhotoRoom",
    "category": "圖像生成與設計處理",
    "subcategory": "電商產品一鍵去背與棚拍棚燈",
    "official_url": "https://www.photoroom.com",
    "description": "電商賣家必備工具，能極為精準地扣出商品主體，並自動生成具備真實陰影與專業攝影燈光的背景。",
    "teaching_scenarios": [
      "農會在地農特產禮盒、自媒體電商商品白底照快速轉換為高檔情境照",
      "省下租用攝影棚與昂貴燈光設備成本"
    ],
    "prompt_formula": "手機拍照上傳→自動去背→選擇『Studio Light』或『Nature Wooden Table』自動匹配透視陰影。",
    "representative_decks": [
      "0521｜新北電商學院｜ AI打造品牌利器.key",
      "0820｜中華民國農會｜宣傳DM製作高效化.key"
    ],
    "tags": [
      "電商必備",
      "自動去背",
      "商品棚拍",
      "手機App"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "vectorizer",
    "name": "Vectorizer.ai",
    "en_name": "Vectorizer.ai",
    "category": "圖像生成與設計處理",
    "subcategory": "點陣圖轉向量圖工具",
    "official_url": "https://vectorizer.ai",
    "description": "透過深度學習演算法，將模糊的 JPG/PNG 圖片轉換為無損清晰、可無限放大的 SVG 向量格式。",
    "teaching_scenarios": [
      "手繪草圖或 AI 生成之低解析點陣圖向量化，方便大圖輸出與印刷",
      "企業 Logo 重新向量化萃取"
    ],
    "prompt_formula": "直接拖曳點陣圖片至網頁，自動分析色彩邊緣並下載向量 SVG 檔。",
    "representative_decks": [
      "0513｜數發部｜生成AI圖像設計實務班.pdf"
    ],
    "tags": [
      "向量轉換",
      "SVG輸出",
      "印刷必備"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "myedit",
    "name": "MyEdit",
    "en_name": "MyEdit (CyberLink)",
    "category": "圖像生成與設計處理",
    "subcategory": "卡通分身與音訊照片處理",
    "official_url": "https://myedit.online",
    "description": "訊連科技推出的線上 AI 編輯平台，涵蓋卡通分身圖像生成、照片去背、人聲分離與變聲工具。",
    "teaching_scenarios": [
      "為個人品牌打造專屬卡通 IP 分身",
      "搭配 HeyGen 製作全擬真或趣味風格的自媒體短影音"
    ],
    "prompt_formula": "上傳個人清晰正面照片，挑選 3D 卡通、動漫或黏土模型，生成多款頭像備用。",
    "representative_decks": [
      "100小時教學經驗詳細資料表｜許秉軒.pdf",
      "AI商務實戰｜參考課綱.pdf"
    ],
    "tags": [
      "卡通分身",
      "虛擬頭像",
      "線上修圖"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "runway",
    "name": "Runway",
    "en_name": "Runway (Gen-2 / Gen-3 Alpha)",
    "category": "影音生成與虛擬人",
    "subcategory": "電影級 AI 視頻生成",
    "official_url": "https://runwayml.com",
    "description": "全球頂級 AI 影音創作工具，具備強大的文字生視頻、圖片生視頻以及 Motion Brush 筆刷動態控制技術。",
    "teaching_scenarios": [
      "澎湖產業新創：廣告宣傳影片片段動態生成",
      "科技島工作流：運用靜態海報搭配運鏡（Camera Motion）製作吸睛動態廣告",
      "長照與政府宣導短片情境過場動畫"
    ],
    "prompt_formula": "Image-to-Video 模式：上傳產品圖，使用運動筆刷塗抹欲流動區域（如水流、煙霧），設定鏡頭推拉（Zoom in / Pan left）。",
    "representative_decks": [
      "0626｜科技島｜ AI影音工作流：創建你的行銷副總.key",
      "0716｜澎湖產業新創｜AI影像創作實戰-2.key",
      "內政部政風處｜AI影音應用於政風宣導.pdf"
    ],
    "tags": [
      "影片生成",
      "鏡頭控制",
      "運動筆刷",
      "商用廣告",
      "免費/付費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "kling",
    "name": "可靈 AI (Kling)",
    "en_name": "Kling AI (快手)",
    "category": "影音生成與虛擬人",
    "subcategory": "高物理真實度視頻生成",
    "official_url": "https://klingai.com",
    "description": "快手開發的頂級視頻生成模型，能生成長達 10 秒以上、符合真實物理世界運動規律的大幅度動作視頻。",
    "teaching_scenarios": [
      "製作人物大幅度肢體運動、飲食、工作互動的逼真行銷短片",
      "商業廣告中角色複雜表情與動態展示"
    ],
    "prompt_formula": "詳細描述鏡頭運動與動作順序：電影級光影、人物轉頭微笑、特寫推鏡頭、流暢自然動作。",
    "representative_decks": [
      "內政部政風處｜AI影音應用於政風宣導｜總體培訓規劃.pdf",
      "掌握 AI 课程.pdf"
    ],
    "tags": [
      "長視頻生成",
      "高物理擬真",
      "動作流暢",
      "行銷短片"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "luma",
    "name": "Luma Dream Machine",
    "en_name": "Luma Dream Machine",
    "category": "影音生成與虛擬人",
    "subcategory": "高畫質動態運鏡視頻生成",
    "official_url": "https://lumalabs.ai/dream-machine",
    "description": "以極速渲染、大景深透視及電影級鏡頭移動見長的視頻生成模型，擅長處理環境氣氛與動態人物。",
    "teaching_scenarios": [
      "風景景點動態展示、企業形象宣傳片流暢運鏡",
      "靜態照片賦予生命力的戲劇化短片呈現"
    ],
    "prompt_formula": "上傳首尾幀圖片（Keyframes），設定中間轉場相機平滑平移（Smooth cinematic orbit）。",
    "representative_decks": [
      "1018｜菌寶貝｜AI內容產出與專案管理工具.key",
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf"
    ],
    "tags": [
      "流暢運鏡",
      "首尾幀過渡",
      "高解析",
      "免費額度"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "hailuo",
    "name": "MiniMax 海螺 AI",
    "en_name": "Hailuo AI (MiniMax)",
    "category": "影音生成與虛擬人",
    "subcategory": "中文語境精準短影音模型",
    "official_url": "https://hailuoai.video",
    "description": "對中文字義理解深刻、畫面色彩細膩且動作自然的 AI 視頻生成工具。",
    "teaching_scenarios": [
      "長照關懷與生活情感敘事短片生成",
      "社群溫馨故事短影音配圖動態化"
    ],
    "prompt_formula": "輸入具備生活情調與細節的情境描述，生成富有情緒感染力的特寫鏡頭。",
    "representative_decks": [
      "0920｜桃園長照｜智慧科技應用於照顧服務.pdf"
    ],
    "tags": [
      "中文理解優異",
      "情感故事",
      "高擬真人物"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "heygen",
    "name": "HeyGen",
    "en_name": "HeyGen",
    "category": "影音生成與虛擬人",
    "subcategory": "AI 虛擬數字人與跨國影音分身",
    "official_url": "https://www.heygen.com",
    "description": "全球首屈一指的 AI 數字人（Digital Avatar）與視頻翻譯工具。能自動將真人語音口型翻譯為數十種語言，並支援高精度克隆分身。",
    "teaching_scenarios": [
      "創建『AI 行銷副總』：上傳照片或影片，輸入文案自動產出全擬真產品解說員",
      "外銷企業產品跨國多語言宣傳（一人講英文、日文、西班牙文）",
      "人資內部線上新人培訓課程自動播報"
    ],
    "prompt_formula": "挑選或克隆專屬數字人，貼上 ChatGPT 撰寫之銷售腳本，選擇語氣語速並啟用唇形同步（Lip Sync）。",
    "representative_decks": [
      "0626｜科技島｜ AI影音工作流：創建你的行銷副總.key",
      "AI商務實戰｜參考課綱｜許秉軒培訓師.pdf",
      "AI人資課綱｜By Zack Hsu.pdf"
    ],
    "tags": [
      "數字人分身",
      "行銷副總",
      "唇形同步",
      "多語言翻譯",
      "企業出海必備"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "did",
    "name": "D-ID",
    "en_name": "D-ID",
    "category": "影音生成與虛擬人",
    "subcategory": "相片開口說話播報工具",
    "official_url": "https://www.d-id.com",
    "description": "讓任何一張單人肖像照片開口說話的經典工具，廣泛用於快速製作新聞播報、歷史人物還原等短片。",
    "teaching_scenarios": [
      "上傳自己的照片或指定肖像，製作會說話的 AI 主播",
      "校園教學歷史人物現身說法互動影片"
    ],
    "prompt_formula": "上傳單張五官清晰照片，貼上文字並選擇繁體中文語音配音（如微軟曉臻音色）。",
    "representative_decks": [
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf"
    ],
    "tags": [
      "相片說話",
      "虛擬主播",
      "操作簡便",
      "免費點數"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "capcut",
    "name": "CapCut / 剪映",
    "en_name": "CapCut / JianYing",
    "category": "影音生成與虛擬人",
    "subcategory": "AI 智能影片剪輯與文字成片",
    "official_url": "https://www.capcut.cn",
    "description": "功能強大的短影音剪輯神器，內建文字一鍵成片、自動識別字幕、AI 語音克隆、降噪與豐富轉場特效庫。",
    "teaching_scenarios": [
      "文字成片：將 ChatGPT 產出的腳本一秒配上素材、旁白與背景音樂",
      "自動生成精準卡點字幕與高吸引力花字特效",
      "自媒體短影音（TikTok / Reels / Shorts）極速批量產出"
    ],
    "prompt_formula": "在『文字成片』功能貼上腳本，設定影片比例（9:16 或 16:9），挑選解說型語音音色，一鍵自動匹配庫存素材。",
    "representative_decks": [
      "0710｜夾子園｜ AI短影音工具包.key",
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf",
      "內政部政風處｜AI影音應用於政風宣導.pdf"
    ],
    "tags": [
      "一鍵文字成片",
      "智能字幕",
      "短影音神隊友",
      "免費實用"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "flexclip",
    "name": "FlexClip",
    "en_name": "FlexClip",
    "category": "影音生成與虛擬人",
    "subcategory": "雲端 AI 圖文影音製作",
    "official_url": "https://www.flexclip.com",
    "description": "免安裝的雲端影音創作工具，具備 AI 文本轉視頻、AI 語音合成、自動去背與豐富商用模板庫。",
    "teaching_scenarios": [
      "商務人士與人資快速製作活動花絮、課程宣傳短片",
      "結合 Recraft 圖片與 Suno 音樂快速串合成完整品牌宣傳片"
    ],
    "prompt_formula": "選擇商業模板，匯入自備圖片，透過 AI 語音合成快速生成旁白配樂。",
    "representative_decks": [
      "AI商務實戰｜參考課綱｜許秉軒培訓師.pdf",
      "100小時教學經驗詳細資料表｜許秉軒.pdf"
    ],
    "tags": [
      "免安裝",
      "雲端剪輯",
      "商業模板",
      "多合一"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "leiapix",
    "name": "LeiaPix",
    "en_name": "LeiaPix Converter",
    "category": "影音生成與虛擬人",
    "subcategory": "2D 靜態圖片轉 3D 景深動畫",
    "official_url": "https://convert.leiapix.com",
    "description": "自動計算 2D 圖片中的深度圖（Depth Map），將平面相片一秒轉為 3D 視差立體運鏡動畫。",
    "teaching_scenarios": [
      "讓不動產物件照片、歷史老照片或靜態吉祥物具備生動的呼吸感與環繞視角",
      "短影音開場抓眼球的 3D 震撼特效"
    ],
    "prompt_formula": "上傳照片，微調動畫長度、運動路徑（Circle / Horizontal / Tall），匯出 MP4 或 GIF。",
    "representative_decks": [
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf",
      "0811｜桃園不動產仲介｜社群影像AI工作術.key"
    ],
    "tags": [
      "3D景深",
      "老照片復活",
      "動態視差",
      "特效必備"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "sketch",
    "name": "Animated Drawings",
    "en_name": "Animated Drawings (Meta)",
    "category": "影音生成與虛擬人",
    "subcategory": "手繪線稿塗鴉動態化",
    "official_url": "https://sketch.metademolab.com",
    "description": "Meta 開源的 AI 動畫研究工具，能偵測手繪紙上塗鴉的關節骨架，讓小朋友或自己畫的人偶手舞足蹈跳動。",
    "teaching_scenarios": [
      "國小與幼兒園課堂：讓學生畫的繪畫角色立刻在螢幕上跳舞、跳躍、做體操",
      "自媒體趣味互動內容製作"
    ],
    "prompt_formula": "上傳一張白色背景手繪人物圖，校正四肢骨骼關節點，選擇動作模式（Dance / Jumping / Funny）。",
    "representative_decks": [
      "掌握 AI 课程.pdf"
    ],
    "tags": [
      "塗鴉動畫",
      "親子教育",
      "趣味手繪",
      "免費開源"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "suno",
    "name": "Suno AI",
    "en_name": "Suno AI",
    "category": "聲音、音樂與會議轉錄",
    "subcategory": "全能 AI 歌曲與編曲生成",
    "official_url": "https://suno.com",
    "description": "劃時代的 AI 音樂生成模型。只需輸入歌詞與曲風描述，便能自動生成包含逼真男女歌手演唱、完整前奏主歌副歌編排的高品質歌曲。",
    "teaching_scenarios": [
      "品牌與活動專屬主題曲、洗腦廣告 Jingle 創作",
      "結合 ChatGPT 寫詞（如農會活動歌、校園畢業歌），一鍵轉為搖滾/流行/爵士歌曲",
      "自媒體短影音免版權原創背景音樂庫"
    ],
    "prompt_formula": "Custom 模式：輸入歌詞並標記結構 [Verse 1], [Chorus], [Outro]，Style of Music 輸入：'Taiwanese indie pop, acoustic guitar, warm female vocal, 120 bpm'。",
    "representative_decks": [
      "0710｜夾子園｜ AI短影音工具包.key",
      "掌握 AI 课程.pdf",
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf"
    ],
    "tags": [
      "音樂生成",
      "寫歌神器",
      "原創歌曲",
      "免版權",
      "免費/付費",
      "熱門推薦"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "udio",
    "name": "Udio",
    "en_name": "Udio",
    "category": "聲音、音樂與會議轉錄",
    "subcategory": "專業級高品質音樂創作",
    "official_url": "https://www.udio.com",
    "description": "由前 Google DeepMind 研究員打造的音樂生成平台，音樂層次豐富、音質細膩，特別擅長複雜電子樂、爵士與古典風格。",
    "teaching_scenarios": [
      "專業影片配樂製作、細緻的段落向後延伸（Extend）與詞曲編輯",
      "商業廣告高品質音效製作"
    ],
    "prompt_formula": "指定細分音樂流派（Sub-genres）與樂器編制，透過多次延伸拼接出完整 3~4 分鐘曲目。",
    "representative_decks": [
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf"
    ],
    "tags": [
      "專業音質",
      "細節延伸",
      "編曲大師"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "elevenlabs",
    "name": "ElevenLabs",
    "en_name": "ElevenLabs",
    "category": "聲音、音樂與會議轉錄",
    "subcategory": "極致擬真人聲配音與聲音克隆",
    "official_url": "https://elevenlabs.io",
    "description": "全球最頂級的 AI 語音合成引擎，能完美呈現微小的呼吸聲、情緒起伏與語調轉折，支援數十種語言與 1 分鐘極速聲音複製。",
    "teaching_scenarios": [
      "專業有聲書錄製、宣傳影片高質感旁白配音",
      "企業主管聲音克隆，批次產出多語種語音訊息"
    ],
    "prompt_formula": "上傳樣本人聲音檔克隆聲音，調整 Stability（穩定度）與 Clarity（清晰度）參數以達到最適情緒感。",
    "representative_decks": [
      "工具專題與核心課程/影音創作模組"
    ],
    "tags": [
      "頂級人聲",
      "聲音克隆",
      "情緒語氣",
      "多國語言"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "whisper",
    "name": "OpenAI Whisper",
    "en_name": "OpenAI Whisper / Whisper JAX",
    "category": "聲音、音樂與會議轉錄",
    "subcategory": "高精度語音轉逐字稿",
    "official_url": "https://openai.com/research/whisper",
    "description": "OpenAI 開源的高準確度自動語音辨識（ASR）模型，對中英文夾雜、台灣口音辨識率極高，Whisper JAX 更具備數十倍極速轉錄能力。",
    "teaching_scenarios": [
      "將講師授課錄音、訪談錄音快速轉為純文字逐字稿",
      "官網內容一稿多用：語音轉文字後交由 Gamma 或 ChatGPT 自動彙整為文章與投影片"
    ],
    "prompt_formula": "匯入音訊檔案，指定輸出格式（SRT 字幕或 TXT 逐字稿），設定保留專有名詞標籤。",
    "representative_decks": [
      "100小時教學經驗詳細資料表｜許秉軒.pdf"
    ],
    "tags": [
      "語音轉文字",
      "高精確度",
      "開源免費",
      "開會訪談必備"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "vocol",
    "name": "Vocol.ai",
    "en_name": "Vocol.ai",
    "category": "聲音、音樂與會議轉錄",
    "subcategory": "AI 智慧語音會議協作平台",
    "official_url": "https://vocol.ai",
    "description": "專為團隊會議打造的語音筆記工具，具備發言人辨識、重點摘要生成與待辦行動事項（Action Items）自動提取功能。",
    "teaching_scenarios": [
      "企業會議不卡關：打造專屬 AI 會議助理，解決會議記錄遺漏與整理耗時問題",
      "長照督導會議與跨部門協調整理"
    ],
    "prompt_formula": "將會議錄音直接上傳或邀請 Bot 加入線上會議，會後自動檢視各與會者發言比例與會議共識清單。",
    "representative_decks": [
      "0708｜第一傳動｜會議不卡關：打造你的專屬AI會議助理.key",
      "0714｜大心長照｜AI時代督導工作轉型與實務應用.key"
    ],
    "tags": [
      "會議記錄",
      "發言人辨識",
      "待辦清單",
      "職場效率"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "ttsmaker",
    "name": "TTSMaker (馬克配音)",
    "en_name": "TTSMaker",
    "category": "聲音、音樂與會議轉錄",
    "subcategory": "免費文字轉語音工具",
    "official_url": "https://ttsmaker.com",
    "description": "完全免費的線上文字轉語音工具，支援超過 50 種語言與 300+ 種主播音色，可無限制商用下載 MP3。",
    "teaching_scenarios": [
      "課堂教學教材語音朗讀、學生自主學習教材製作",
      "快速生成無版權疑慮的短片旁白音檔"
    ],
    "prompt_formula": "輸入文字，插入停頓標籤（Pause），挑選適合的台灣國語主播或外語主播發音。",
    "representative_decks": [
      "工具專題與核心課程/音訊處理講義"
    ],
    "tags": [
      "免費語音",
      "文字轉語音",
      "免註冊",
      "商用免費"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "notebooklm",
    "name": "NotebookLM",
    "en_name": "Google NotebookLM",
    "category": "知識庫、筆記與文件分析",
    "subcategory": "以個人資料庫為核心的思考夥伴",
    "official_url": "https://notebooklm.google.com",
    "description": "Google 革命性個人知識庫工具。上傳數十份 PDF、Google Docs 或網址後，AI 只依據你提供的文檔進行問答，杜絕幻覺，並支援『Audio Overview』一鍵生成雙人對談 Podcast 播客！",
    "teaching_scenarios": [
      "德明科大專題應用：將整學期課程投影片上傳，一鍵生成考前重點複習與雙人語音播客",
      "人資政策與企業內部規章打造專屬內部知識問答機器人",
      "醫療照護法規與長照工作手冊隨選即問助手"
    ],
    "prompt_formula": "上傳 5~10 份專業參考文檔，點擊『FAQ』、『Study Guide』或直接提問，要求標記參考引用腳註。",
    "representative_decks": [
      "1013｜德明科大｜NotebookLM簡報應用.pdf",
      "AI人資課綱｜By Zack Hsu.pdf",
      "0702｜勞動力發展署｜AI資料整理術.key"
    ],
    "tags": [
      "零幻覺",
      "個人知識庫",
      "雙人Podcast播客",
      "論文考試神器",
      "Google免費",
      "年度最強工具"
    ],
    "pricing": "免費可用 (Freemium)"
  },
  {
    "id": "chatpdf",
    "name": "ChatPDF / ChatDOC",
    "en_name": "ChatPDF & ChatDOC",
    "category": "知識庫、筆記與文件分析",
    "subcategory": "長篇文件與論文對照閱讀",
    "official_url": "https://www.chatpdf.com",
    "description": "專門針對 PDF 與論文文件的對話問答工具，ChatDOC 更支援跨多文件比對、表格框選解析與點擊引用精準跳轉原文。",
    "teaching_scenarios": [
      "一次性分析多份合約、標案規格書或醫學期刊",
      "左側原文、右側摘要與繁體中文翻譯對照"
    ],
    "prompt_formula": "上傳 PDF 後提問：『請總結這份文件的 3 大核心結論，並列出在第幾頁提到相關數據？』",
    "representative_decks": [
      "講義1130920 超越傳統-AI助力下的效率與創新.pdf"
    ],
    "tags": [
      "PDF問答",
      "文件跳轉",
      "論文對照",
      "多文檔分析"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "notionai",
    "name": "Notion AI",
    "en_name": "Notion AI",
    "category": "知識庫、筆記與文件分析",
    "subcategory": "工作區筆記與文檔自動化",
    "official_url": "https://www.notion.so",
    "description": "深度內嵌於 Notion 工作區的 AI，能直接在頁面中擴寫、縮寫、潤飾語句、翻譯，並能依據整個工作區筆記進行全局智慧搜尋。",
    "teaching_scenarios": [
      "個人品牌工作者筆記整理、專案里程碑追蹤",
      "會議記錄一鍵轉換為待辦事項清單與行動追蹤表"
    ],
    "prompt_formula": "選取筆記文字按下空白鍵，指令：『將上述會議要點條列為行動清單，並依急迫性標註負責人與截止日』。",
    "representative_decks": [
      "0920｜個人品牌工作者的自動化應用.key"
    ],
    "tags": [
      "筆記整理",
      "專案管理",
      "全局檢索",
      "工作區整合"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "xmind",
    "name": "Xmind (Xmind AI)",
    "en_name": "Xmind / Xmind Copilot",
    "category": "思維導圖與邏輯架構",
    "subcategory": "心智圖一鍵展開與邏輯發想",
    "official_url": "https://xmind.app",
    "description": "全球經典心智圖工具，內建 AI 節點自動擴展功能。能將單一主題一鍵發想為樹狀圖、邏輯圖、魚骨圖與時間軸。",
    "teaching_scenarios": [
      "樹德科大與中原大學：運用心智圖法有感升級履歷面試與職涯亮點梳理",
      "課程大綱設計與演講架構邏輯層次規劃",
      "孫易新心智圖法國際認證班教學：邏輯垂直聯想與水平擴散思考"
    ],
    "prompt_formula": "在中心主題輸入『大健康產業商機』，點擊 AI 生成子主題，選擇『水平邏輯聯想』或『垂直因果分析』。",
    "representative_decks": [
      "1011｜樹德科大｜用心智圖開啟課程新亮點.key",
      "0531中原大學｜運用心智圖法有感升級履歷面試.key",
      "1030爆讀會_ 發現你的天職.xmind",
      "生涯設計.xmind"
    ],
    "tags": [
      "心智圖",
      "邏輯聯想",
      "演講大綱",
      "職涯規劃",
      "思考框架"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "whimsical",
    "name": "Whimsical",
    "en_name": "Whimsical (Whimsical AI)",
    "category": "思維導圖與邏輯架構",
    "subcategory": "AI 流程圖、心智圖與線框圖",
    "official_url": "https://whimsical.com",
    "description": "視覺化協作白板工具，輸入一段概念或使用者流程，AI 能自動繪製出節點相連的流程圖（Flowchart）與系統架構圖。",
    "teaching_scenarios": [
      "餐旅觀光教學實務：將服務流程與顧客旅程（Customer Journey）轉為流程圖",
      "自媒體行銷漏斗與使用者註冊路徑視覺化呈現"
    ],
    "prompt_formula": "輸入：『設計一個電商顧客退換貨的 5 步驟標準作業流程（SOP）』，自動產出具備決策判斷菱形框的流程圖。",
    "representative_decks": [
      "0828｜高雄餐旅大學｜生成AI應用於餐旅觀光之教學實務.key",
      "0811｜桃園不動產仲介｜社群影像AI工作術.key"
    ],
    "tags": [
      "流程圖",
      "顧客旅程",
      "視覺白板",
      "Wireframe",
      "團隊協同"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "make",
    "name": "Make.com",
    "en_name": "Make.com (原 Integromat)",
    "category": "工作流自動化與無代碼開發",
    "subcategory": "視覺化多應用工作流串接",
    "official_url": "https://www.make.com",
    "description": "強大的無代碼（No-code）自動化平台。能像樂高積木般串接 ChatGPT、Google 試算表、LINE、Gmail、Notion 等數千種服務。",
    "teaching_scenarios": [
      "個人品牌工作者自動化應用：收到 Google 表單自動觸發 ChatGPT 生成客製化文案並回覆 Email",
      "社群貼文自動排程與跨平台同步發布（Instagram/Facebook/LinkedIn）",
      "打造 24 小時不打烊的受眾互動機器人"
    ],
    "prompt_formula": "設計 Scenario（情境）：觸發模組（Webhook/Google Sheets）→ AI 運算模組（OpenAI GPT-4）→ 輸出模組（Gmail/LINE Notify）。",
    "representative_decks": [
      "0920｜個人品牌工作者的自動化應用.key",
      "0709:0818｜聰明AI人資工作自動化.key"
    ],
    "tags": [
      "自動化工作流",
      "No-code",
      "串接API",
      "效率倍增",
      "商業必備"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "v0",
    "name": "v0.dev",
    "en_name": "v0 by Vercel",
    "category": "工作流自動化與無代碼開發",
    "subcategory": "自然語言生成網頁前端介面",
    "official_url": "https://v0.dev",
    "description": "Vercel 開發的生成式 UI 工具。只需以自然語言描述網頁或 Dashboard 功能，即可直接生成現代風格的 React + Tailwind CSS 互動代碼。",
    "teaching_scenarios": [
      "快速搭建企業內部原型（Prototype）檢索頁面與資料儀表板",
      "非工程師快速實踐網站想法並直接預覽與複製前端代碼"
    ],
    "prompt_formula": "輸入介面需求：'A modern AI tools directory with search bar, category filter tags, cards grid layout, and dark mode support.'",
    "representative_decks": [
      "大專院校創新創業專案實作/原型開發模組",
      "0920｜個人品牌工作者的自動化應用.key"
    ],
    "tags": [
      "網頁生成",
      "前端UI",
      "React",
      "原型製作",
      "工程神器"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "en_name": "Cursor",
    "category": "工作流自動化與無代碼開發",
    "subcategory": "AI 原生程式碼編輯器",
    "official_url": "https://www.cursor.com",
    "description": "基於 VS Code 打造的 AI 原生編輯器，能深度理解整個專案代碼庫，具備一鍵代碼補全、跨檔案重構與自然語言編程能力。",
    "teaching_scenarios": [
      "全端專案開發、快速修復代碼 Bug、串接第三方 API 與模型",
      "非全職工程師以提示詞驅動完整軟體專案建置"
    ],
    "prompt_formula": "使用 Cmd+K / Cmd+L：選取代碼或以 @files 標註檔案，描述欲新增之功能或改進邏輯。",
    "representative_decks": [
      "工具專題與核心課程/高階開發講義"
    ],
    "tags": [
      "程式開發",
      "VSCode增強",
      "代碼庫感知",
      "全端開發"
    ],
    "pricing": "付費訂閱 (Paid)"
  },
  {
    "id": "chatexcel",
    "name": "ChatExcel",
    "en_name": "ChatExcel",
    "category": "工作流自動化與無代碼開發",
    "subcategory": "對話式表格數據分析",
    "official_url": "https://chatexcel.com",
    "description": "透過自然語言直接與 Excel 試算表對話，無需記憶複雜公式（VLOOKUP, INDEX/MATCH）即可自動完成數據清洗、排序、統計與圖表生成。",
    "teaching_scenarios": [
      "企業財務與長照行政人員快速處理大批量學員名冊與薪資報表",
      "不會寫 Excel 函數也能一秒算出各部門業績佔比"
    ],
    "prompt_formula": "上傳 Excel 表格後輸入：『計算各業務員在 Q3 的總銷售額，並篩選出超過 50 萬的行，按金額降序排列』。",
    "representative_decks": [
      "0421｜國泰產險｜AI財務應用.pdf",
      "1020｜中國生產力中心｜AI財務策略工作坊.key"
    ],
    "tags": [
      "Excel神助手",
      "免背公式",
      "數據分析",
      "財務行政"
    ],
    "pricing": "付費訂閱 (Paid)"
  }
];

const ROLE_PROFILES = {
  "人資專員 / 招募主管": {
    "title": "人資專員 / 招募主管 (HR & Recruiter)",
    "keywords": [
      "人資",
      "hr",
      "招募",
      "人資主管",
      "人才",
      "育才",
      "留才",
      "人事"
    ],
    "tagline": "從招募選才到內部培訓，打造無痛高感度的人力資源與雇主品牌工作流",
    "recommended_tools": [
      "chatgpt",
      "perplexity",
      "notebooklm",
      "heygen",
      "napkin"
    ],
    "core_mission": "運用 AI 撰寫精準職務說明書（JD）、設計結構化面試題目、以 Co-STAR 架構推動雇主品牌貼文，並以封閉知識庫解答同仁繁複的勞動法規與人資政策疑問。",
    "action_list": [
      {
        "stage": "第一階段：招募與選才提速 (立即上手)",
        "steps": [
          "將過往雜亂的職缺需求丟給 ChatGPT，運用「Co-STAR 架構」產出條理清晰、富吸引力的職務說明書（JD）。",
          "運用 Perplexity 檢索當前特定產業（如長照、科技、製造）之薪資行情、人才流動現況與招募 KPI 指標。",
          "在招募面試前，輸入候選人去識別化履歷，讓 ChatGPT 扮演挑剔面試官，針對候選人過往工作空窗或數據疑點列出 5 個深度追問問題。"
        ]
      },
      {
        "stage": "第二階段：育才與內部制度轉譯 (進階深化)",
        "steps": [
          "將公司員工手冊、出勤考核辦法、請假與福委會規章上傳至 Google NotebookLM，建立 100% 零幻覺內部人資知識庫，讓 HR 免於重複回答日常問答。",
          "利用 Napkin AI 將繁瑣的職能培育路徑與教育訓練地圖，一秒轉換為視覺化里程碑流程圖。",
          "運用 HeyGen 打造虛擬數字人培訓導師，將新進員工 Orientation 講義一鍵轉為具備專業口型的多語種線上影音教材。"
        ]
      },
      {
        "stage": "第三階段：留才關懷與數據化預測 (工作流固化)",
        "steps": [
          "運用 ATM 指令模型（行為-任務-衡量指標），設計匿名職場滿意度量表，進行離職預測分析與潛在管理問題預警。",
          "將文字離職訪談摘要交由 AI 提取核心痛點關鍵字，提煉出組織管理改進報告。"
        ]
      }
    ],
    "prompt_templates": [
      {
        "title": "Co-STAR 雇主品牌招募貼文指令",
        "desc": "產出吸睛且符合年輕人才期待的招募文案",
        "prompt": "你是資深雇主品牌專家，請依據【Co-STAR 模型】撰寫一篇社群招募貼文：\n- Context (背景)：我們是一家正在導入生成式 AI 數位轉型的品牌，目前急需一位【[職位名稱，如：社群行銷企劃]】。\n- Objective (目標)：吸引具備主動學習熱忱、認同彈性敏捷文化的人才投遞履歷。\n- Style (風格)：有活力、具備未來感且語氣真誠，避免陳腔濫調。\n- Tone (語氣)：熱情專業、平易近人。\n- Audience (受眾)：有 1~3 年經驗、渴望在工作中使用先進工具賦能的年輕求職者。\n- Response (格式)：包含吸睛主標題、三大工作亮點（條列）、成長機會，以及清楚的行動呼籲（投遞方式）。"
      },
      {
        "title": "候選人履歷盲點深度追問設計",
        "desc": "協助面試官在 10 分鐘內洞悉求職者真實實力",
        "prompt": "你現在是資深科技/製造業人資長，請審視以下求職者經歷片段：\n【[貼入求職者工作經歷描述]】\n請根據行為事例面試法（Behavioral Event Interview），找出這份經歷中「數據模糊」、「結果成因不明確」或「團隊分工不清」的潛在漏洞，為我設計 3~5 個犀利的追問問題，並附上如何從回答判斷其真實能力的評估要點。"
      }
    ],
    "common_myths": [
      "迷思 1：『AI 可以直接幫公司決定錄取誰。』→ 錯！AI 只能輔助梳理資訊、設計問題與對比條件，聘用決策與文化契合度必須由真人面談決定，否則極易引發偏見或勞資爭議。",
      "迷思 2：『把員工薪資名冊或身分證號貼給 ChatGPT 計算。』→ 嚴重資安與個人資料法違法！公用 AI 模型不得輸入任何真實姓名、薪資與私密個資。"
    ],
    "pitfalls_and_watchouts": [
      "🚨 個資防護線：上傳任何履歷或考績前，必須將候選人姓名、電話、前雇主公司名去識別化（以求職者 A、甲公司代稱）。",
      "🚨 政策法規依據：詢問勞基法或請假規範時，切勿直接相信公開版 ChatGPT 的自由生成，務必將最新勞基法條或公司內規放入 NotebookLM 作為單一真理來源（Single Source of Truth）。"
    ]
  },
  "社群小編 / 行銷企劃": {
    "title": "社群小編 / 行銷企劃 (Marketing & Social Media Specialist)",
    "keywords": [
      "行銷",
      "社群",
      "小編",
      "企劃",
      "文案",
      "行銷企劃",
      "公關",
      "電商",
      "廣告"
    ],
    "tagline": "擺脫靈感枯竭，建立從話題選題、向量吉祥物、字體海報到短影音的超級行銷工作流",
    "recommended_tools": [
      "chatgpt",
      "recraft",
      "ideogram",
      "capcut",
      "suno"
    ],
    "core_mission": "運用 AI 迅速拆解受眾痛點產出爆款社群腳本、透過 Recraft 產出品牌風格一致之吉祥物與 3D 圖標、用 Ideogram 排版出正確英文字體海報，並以剪映文字成片搭配 Suno 原創音樂，實現一人抵一個行銷團隊的高效產能。",
    "action_list": [
      {
        "stage": "第一階段：話題洞察與爆款文案產出",
        "steps": [
          "使用 ChatGPT 的「你是-我要-你會」框架，結合受眾痛點發想 10 組吸睛 Hook 標題與社群貼文大綱。",
          "透過 Perplexity 搜集最新節慶時事梗與產業討論熱點，確保話題具備即時性。",
          "運用六頂思考帽框架，從樂觀面、風險面與情感面多元切入同一行銷主題。"
        ]
      },
      {
        "stage": "第二階段：視覺海報與品牌資產建立",
        "steps": [
          "使用 Recraft.ai 鎖定品牌標準色票（Hex code），生成統一調性的向量插畫（SVG）、3D 圖標與粉專專屬吉祥物。",
          "使用 Ideogram 製作含文字的活動海報、文創商品（T-shirt/馬克杯）打樣概念圖，克服傳統 AI 繪圖字體亂碼的問題。",
          "電商商品圖拍攝後，使用 PhotoRoom 手機拍照一秒去背，套用攝影棚 Studio 燈光與木質背景。"
        ]
      },
      {
        "stage": "第三階段：影音化與多平台擴散",
        "steps": [
          "將寫好的社群腳本貼入剪映（CapCut）「文字成片」功能，一鍵自動匹配分鏡畫面、AI 配音與自動卡點字幕。",
          "使用 Suno AI 輸入活動標語，自訂 30 秒洗腦原創背景配樂（Jingle），打造專屬品牌聽覺記憶。"
        ]
      }
    ],
    "prompt_templates": [
      {
        "title": "爆款社群貼文痛點切入指令",
        "desc": "結合痛點共鳴與行動呼籲，吸引受眾留言互動",
        "prompt": "你是資深社群內容總監，精通 Instagram 與 Facebook 演算法。我正在推廣【[產品/服務名稱]】，目標客群是【[受眾輪廓，例如：剛出社會 25~30 歲的租屋上班族]】。\n請為我產出 3 組高互動率的社群貼文，每組包含：\n1. 【抓眼球第一句（Hook）】：用反直覺或戳中痛點的提問開頭。\n2. 【共鳴內文（300字以內）】：描述具體生活場景，說明該產品如何解決困擾。\n3. 【留言互動梗】：設計一個讓讀者忍不住在下方留言投票的互動機制。\n4. 【配圖視覺建議】：提供一段英文 Prompt，供我直接丟進 Recraft 或 Ideogram 產出插圖。"
      },
      {
        "title": "Ideogram 精準字體海報 Prompt",
        "desc": "直接可複製至 Ideogram 產出文創風格宣傳圖",
        "prompt": "A modern graphic design event poster, featuring bold typography that clearly reads \"[欲呈現的英文標題，如：AUTUMN COFFEE FEST]\", trendy retro risograph style, vibrant warm colors, minimalist layout, vector illustration, high resolution, 8k --ar 4:5"
      }
    ],
    "common_myths": [
      "迷思 1：『有了 AI 繪圖，我隨便下一句提示詞就能拿來當品牌主視覺。』→ 錯！隨意生成的圖片風格零散、色調跳脫。必須透過 Recraft 或 Midjourney 參數鎖定風格關鍵字與品牌色票，維護品牌專業感。",
      "迷思 2：『AI 寫出來的文案直接無腦排程發布。』→ 錯！未經人工微調的 AI 文案常有「空洞的總結腔」或不合台灣用語的字詞，發布前務必潤飾為品牌專屬口吻。"
    ],
    "pitfalls_and_watchouts": [
      "🚨 肖像與版權安全：商用海報避免在 Prompt 中直接使用知名在世藝術家姓名；企業商用優先挑選 Adobe Firefly、Recraft 等版權明確的工具。",
      "🚨 避免過度誇大：電商行銷切勿使用 AI 生成與實體產品規格、尺寸落差過大的渲染圖，以免招致退換貨與不實廣告申訴。"
    ]
  },
  "行政助理 / 專案秘書": {
    "title": "行政助理 / 專案秘書 (Admin & Executive Assistant)",
    "keywords": [
      "行政",
      "秘書",
      "助理",
      "行政助理",
      "專案助理",
      "總務",
      "櫃台",
      "文書",
      "行政人員"
    ],
    "tagline": "擺脫瑣碎公文與報表地獄，用 AI 會議記錄、表格對話與自動化流程釋放 80% 行政時間",
    "recommended_tools": [
      "vocol",
      "chatgpt",
      "chatexcel",
      "whimsical",
      "napkin"
    ],
    "core_mission": "運用 AI 逐字稿與會議記錄工具快速歸納共識清單、對話式操作 Excel 解決龐雜數據統計、快速起草行政公文與客訴回覆，並將繁複行政 SOP 轉化為易懂的視覺流程圖。",
    "action_list": [
      {
        "stage": "第一階段：會議與訪談記錄自動化",
        "steps": [
          "開會時使用 Vocol.ai 或錄音檔搭配 Whisper，會後自動區分發言人、生成會議摘要與待辦事項清單（Action Items）。",
          "將會議雜記貼入 ChatGPT，指示其整理為符合公司標準格式之主管週會紀錄。"
        ]
      },
      {
        "stage": "第二階段：表格數據與文書處理加速",
        "steps": [
          "面對大批量學員名冊、費用支出或考勤表時，使用 ChatExcel 透過自然語言下達計算（如『統計各部門報銷總額並按由大到小排序』），免背複雜公式。",
          "面對客訴信函、廠商催款或對外公文，使用 ChatGPT 協助起草得體、合乎商業禮儀的正式回函。"
        ]
      },
      {
        "stage": "第三階段：行政 SOP 與流程圖可視化",
        "steps": [
          "使用 Whimsical 或 Napkin AI 將文字版請購流程、報修流程、新進人員交接清單，一鍵繪製為視覺化流程圖與甘特圖，方便跨部門傳閱。"
        ]
      }
    ],
    "prompt_templates": [
      {
        "title": "雜亂會議筆記轉專業會議紀錄指令",
        "desc": "一秒將會中快速打下的零散字句整理為標準會議紀錄",
        "prompt": "你現在是專業總經理特助，請將以下雜亂的會議筆記重新整理為標準商業會議紀錄：\n【[貼入會議速記或錄音轉錄文字]】\n格式要求：\n1. 【會議主題與基本資訊】（時間、與會者、紀錄人）\n2. 【核心決議事項】（以條列呈現，精準簡潔）\n3. 【待辦行動清單（Action Items）】：以表格列出「任務項目」、「負責人員」、「預計完成期限」\n4. 【後續追蹤事項】：列出下次會議需確認之進度"
      },
      {
        "title": "得體商務客訴委婉回覆信",
        "desc": "維持品牌專業形象且平撫客戶情緒的書信回覆",
        "prompt": "請協助我撰寫一封正式的商務回覆信函。客戶 phản ánh：【[說明客戶投訴或反映之問題]】。\n我們目前處理狀況：【[說明調查結果與補償/改善措施]】。\n要求：語氣誠懇、感謝客戶反饋、致歉但不過度自我貶低、明確告知後續改善行動與時間點，文字優雅符合台灣商業書信習慣。"
      }
    ],
    "common_myths": [
      "迷思 1：『錄音丟進 AI 轉出逐字稿就當作完成會議紀錄。』→ 錯！主管要的是「決策」與「誰在什麼時候該交出什麼（Next Steps）」，逐字稿沒有人有空看完，必須要求 AI 提取精華。",
      "迷思 2：『AI 回覆公文都很正式，不用校對可以直接寄出。』→ 錯！AI 偶爾會自創過度文謅謅或非台灣慣用的官腔詞彙，寄出前務必確認受文者抬頭與核心承諾。"
    ],
    "pitfalls_and_watchouts": [
      "🚨 機密會議錄音安全：高層董事會或涉及專利財報之會議，若使用第三方雲端錄音工具需確認資安加密協議，避免外洩風險。",
      "🚨 表格數據覆核：ChatExcel 生成之統計結果，重要財務數據務必抽查 2~3 筆驗證其篩選條件是否正確。"
    ]
  },
  "業務開發 / 銷售經理": {
    "title": "業務開發 / 銷售經理 (Sales & Business Development)",
    "keywords": [
      "業務",
      "銷售",
      "業務經理",
      "業務員",
      "商務開發",
      "bd",
      "業務代表",
      "店長"
    ],
    "tagline": "縮短提案週期、精準擊中客戶痛點，打造虛擬行銷分身與高成交率的 Pitch Deck",
    "recommended_tools": [
      "chatgpt",
      "tome",
      "heygen",
      "gamma",
      "canva"
    ],
    "core_mission": "快速挖掘客戶深層痛點與抗拒理由、在 10 分鐘內產出客製化產品提案簡報（Pitch Deck）、運用數字人分身製作高質感影音介紹，提高客戶拜訪成交率與跨國開發效能。",
    "action_list": [
      {
        "stage": "第一階段：客戶背景調研與痛點拆解",
        "steps": [
          "拜訪前運用 Perplexity 或 ChatGPT 搜集目標企業近期新聞、營運痛點與可能面臨之法規挑戰。",
          "使用「價值主張圖（Value Proposition Canvas）」Prompt，分析客戶的「工作任務、痛點、獲益」，提煉出產品最強賣點。"
        ]
      },
      {
        "stage": "第二階段：極速產出客製化提案簡報",
        "steps": [
          "使用 Gamma 或 Tome，輸入拜訪對象背景與提案構想，10 分鐘內生成一份圖文並茂的 8 頁客製化商業簡報（Pitch Deck）。",
          "利用 Canva AI 快速排版一頁式產品優勢對照表（One-pager），拜訪後直接提供客戶主管參閱。"
        ]
      },
      {
        "stage": "第三階段：影音化觸客與異議處理演練",
        "steps": [
          "運用 HeyGen 打造個人的 AI 數字人分身，錄製一段 60 秒的專屬問候與產品亮點短片，附在提案 Email 中提高開啟率。",
          "利用 ChatGPT 扮演刁鑽的採購主管，針對「價格過高」、「已有配合廠商」進行模擬談判與話術拆解演練。"
        ]
      }
    ],
    "prompt_templates": [
      {
        "title": "客戶異議處理與防禦話術演練",
        "desc": "在正式拜訪前進行高強度客戶談判模擬",
        "prompt": "你現在是【[目標客戶產業，如：傳統連鎖飯店]】的嚴格採購總監，對預算極為保守。我正在向你推銷【[我的產品/服務]】。\n請你針對我的產品提出 3 個最尖銳、最常見的拒絕藉口（例如：太貴、系統轉換陣痛期太長、現有廠商配合得很好）。\n當我回答後，請評估我的回覆是否有說服力，並教我如何運用「先同理、再翻轉、立證效益」的三步說話術反客為主。"
      },
      {
        "title": "極速商業 Pitch Deck 大綱生成指令",
        "desc": "輸入客戶背景，直接產出可餵入 Gamma 的簡報大綱",
        "prompt": "我即將去拜訪【[客戶公司名稱與背景]】，向他們提案【[提案主軸]】。\n請為我規劃一份 7 頁的簡報大綱，結構需遵循經典商業說服邏輯：\n第 1 頁：封面與本次提案核心主旨\n第 2 頁：貴公司目前面臨的三大痛點與隱形代價\n第 3 頁：市場趨勢與變革契機\n第 4 頁：我們的解方與核心差異化亮點\n第 5 頁：成功案例佐證與預期成效數據\n第 6 頁：導入時程與三階段里程碑\n第 7 頁：合作方案與 Call to Action\n每頁請提供：標題＋3 點精煉要點說明，文字需可以直接貼進 Gamma App 生成投影片。"
      }
    ],
    "common_myths": [
      "迷思 1：『用 AI 生成 100 封客製化開發信全部群發，就能成交大單。』→ 錯！大客戶對制式套版信件極度敏感。AI 應該用來深入分析「該客戶特定的財報弱點或公關動向」，撰寫真正打中靶心的精準信函。",
      "迷思 2：『簡報頁數越多、看起來越厚越有誠意。』→ 錯！簡報是說服工具而非備忘錄，善用 Gamma 與 Napkin AI 將文字圖解化，重點控制在 10 分鐘內說完才有成交力。"
    ],
    "pitfalls_and_watchouts": [
      "🚨 報價與機密防線：客戶特惠報價底線、商業合作 NDA 協議草案，切勿直接貼至公開 AI 平台發問。",
      "🚨 案例真實性核實：AI 幫忙寫案例時可能會虛構出不存在的企業名稱與數據，提案上台前必須置換為公司真實客戶背書。"
    ]
  },
  "學校教師 / 培訓講師": {
    "title": "學校教師 / 培訓講師 (Teacher & Corporate Trainer)",
    "keywords": [
      "教師",
      "老師",
      "講師",
      "培訓師",
      "教授",
      "教學",
      "教案",
      "學校",
      "補習班",
      "教育"
    ],
    "tagline": "一鍵教案變簡報、打造不打烊的課程專屬知識庫，讓課堂充滿互動趣味與啟發",
    "recommended_tools": [
      "gamma",
      "notebooklm",
      "napkin",
      "sketch",
      "xmind"
    ],
    "core_mission": "運用 AI 迅速拆解教學步驟與產出教案大綱、使用 Gamma 一鍵排版高質感課堂投影簡報、透過 NotebookLM 建立學生專屬溫習與對談 Podcast、運用 Napkin AI 圖解抽象觀念，並利用 Animated Drawings 讓學生手繪動起來，激發學習熱情。",
    "action_list": [
      {
        "stage": "第一階段：教案設計與教材極速視覺化",
        "steps": [
          "以「遊戲化八角框架」或「SDGs 主題」為引導，讓 ChatGPT 協助規劃 40~60 分鐘課堂活動與引導步驟。",
          "將教案大綱直接倒入 Gamma，數十秒即可自動排版生成色彩豐富、版面乾淨的教學簡報。",
          "遇到抽象的歷史因果、科學原理或管理理論時，使用 Napkin AI 轉換為清晰的資訊圖解與流程圖。"
        ]
      },
      {
        "stage": "第二階段：課程專屬 AI 助教與播客建立",
        "steps": [
          "將整學期講義、指定閱讀論文與課堂投影片上傳至 Google NotebookLM，建立專屬課程知識庫。",
          "點擊 NotebookLM 的「Audio Overview」功能，一鍵生成兩位美式主播生動對談的英語播客（Podcast），作為學生的課後聽力與重點溫習素材。"
        ]
      },
      {
        "stage": "第三階段：課堂互動激勵與趣味體驗",
        "steps": [
          "在低年級或美術教學中，讓學生在白紙上手繪角色，使用 Meta Animated Drawings 拍照上傳，現場讓學生的塗鴉人物跳舞跳躍，引爆課堂氣氛。",
          "引導學生在 Xmind 中運用心智圖梳理課文脈絡或自主學習計畫。"
        ]
      }
    ],
    "prompt_templates": [
      {
        "title": "八角框架遊戲化教學教案設計指令",
        "desc": "產出讓學生高度投入、具備遊戲機制之課堂設計",
        "prompt": "你是榮獲教育部教學卓越獎的資深名師，擅長遊戲化教學設計。\n我想為【[學生年齡/年級，例如：國中二年級]】設計一堂【[教學時長，如：45分鐘]】的課程，主題是【[課程主題，例如：全球暖化與碳權交易]】。\n請運用「遊戲化教學的八角框架理論（Octalysis）」，規劃包含以下結構的教案：\n1. 【教學目標與先備知識】\n2. 【課堂開場破冰（5分鐘）】：運用好奇心或史詩意義引導。\n3. 【核心教學活動（25分鐘）】：設計 2 個闖關小組任務，說明運用了八角框架中的哪種動力（如使命感、進度感、社交影響）。\n4. 【學習成果驗收（10分鐘）】：具備趣味競爭或合作機制的評估方式。\n5. 【總結與反思（5分鐘）】"
      },
      {
        "title": "複雜抽象觀念譬喻解說法",
        "desc": "用生活化譬喻讓全年齡學生秒懂艱澀知識",
        "prompt": "我要向【[受眾對象，如：國小五年級學生]】解釋【[艱澀概念，如：什麼是通貨膨脹 / 什麼是雲端運算]】。\n請為我提供 3 個貼近日常生活、生動有趣的「譬喻故事情境」，避免使用任何深奧術語，並在文末列出 2 個可以引導學生思考的生活提問。"
      }
    ],
    "common_myths": [
      "迷思 1：『嚴格禁止學生使用 AI，抓到就記零分。』→ 錯！AI 時代的素養是「如何有品味、有批判力地提問與檢驗」。引導學生比對 AI 回答的真偽、訓練思辨能力，才是現代教師無可取代的價值。",
      "迷思 2：『簡報字放越多、資料越密，代表老師準備越充分。』→ 錯！學生認知負荷有限。文字應留在講義，簡報應大量運用 Gamma 與 Napkin AI 轉化為圖像與視覺架構。"
    ],
    "pitfalls_and_watchouts": [
      "🚨 學生隱私規範：國小及未成年學生的姓名、肖像、學習評語，不可在未經匿名化的情況下上傳至外部未經教育認證之 AI 服務。",
      "🚨 考題原創性查驗：由 AI 產出的選擇題與閱讀測驗，老師必須逐題驗算解答與確認答案唯一性，避免題目語意模糊引起爭議。"
    ]
  },
  "自媒體創作者 / 個人品牌": {
    "title": "自媒體創作者 / 個人品牌 (Creator & Solopreneur)",
    "keywords": [
      "自媒體",
      "個人品牌",
      "創作者",
      "網紅",
      "youtuber",
      "podcaster",
      "一人公司",
      "斜槓",
      "顧問",
      "教練"
    ],
    "tagline": "打造一人抵十人的超級產能，從內容矩陣、原創配樂、動態影音到自動化導流變現",
    "recommended_tools": [
      "make",
      "chatgpt",
      "recraft",
      "heygen",
      "suno"
    ],
    "core_mission": "運用 AI 提煉個人商業定位、批量產出社群內容矩陣、建立專屬 3D 吉祥物與向量識別、以 Suno 製作專屬片頭 Jingle、並以 Make.com 串接自動化客服，實現下班睡覺也能持續獲客的自動化漏斗。",
    "action_list": [
      {
        "stage": "第一階段：商業定位與內容資產建立",
        "steps": [
          "使用 ChatGPT 梳理個人天職與商業定位，找出「受眾痛點、個人強項、市場付費意願」交集的三大切入點。",
          "使用 Recraft.ai 打造個人品牌的專屬 3D 公仔或吉祥物形象，並輸出系列貼圖情境圖。"
        ]
      },
      {
        "stage": "第二階段：多媒體內容批量化產製",
        "steps": [
          "錄製 15 分鐘教學音檔，透過 Whisper JAX 極速轉錄，再丟給 Claude/ChatGPT 萃取成 1 篇電子報、3 則短影音腳本、5 篇社群貼文（一魚多吃）。",
          "使用 Suno AI 為個人頻道或 Podcast 製作專屬 15 秒片頭片尾曲，擺脫公共無版權罐頭音樂的撞曲尷尬。",
          "使用 HeyGen 打造虛擬影音分身，在不出鏡、不架燈光的情況下持續產出短影音。"
        ]
      },
      {
        "stage": "第三階段：自動化導流與變現漏斗建立",
        "steps": [
          "使用 Make.com 串接自動化工作流：當讀者填寫 Google 表單領取免費乾貨時，自動觸發 ChatGPT 依填表人需求客製建議信，並透過 Gmail 即時寄出。",
          "利用自動化機器人於社群私訊觸發關鍵字時，自動遞送課程購買連結。"
        ]
      }
    ],
    "prompt_templates": [
      {
        "title": "自媒體一稿多用（Content Repurposing）指令",
        "desc": "將一篇核心長文或訪談拆解為全平台發布矩陣",
        "prompt": "你是頂尖自媒體流量增長顧問。以下是我的一段長篇訪談/文章核心觀點：\n【[貼入核心內容]】\n請幫我執行「一魚多吃」內容拆解，產出：\n1. 【Instagram 圖文輪播（Carousel）架構】：包含 1 張抓眼球封面、4 張每頁只有 2~3 句金句的知識卡片、1 張行動呼籲結尾頁。\n2. 【短影音（Reels/Shorts）60秒逐字口播腳本】：前 3 秒 Hook、痛點共鳴、解法分享、結尾引導留言。\n3. 【電子報（Newsletter）深度隨筆】：語氣如同與老朋友交心，帶入個人體會。\n4. 【Threads 爆發短文】：150字以內，極具觀點碰撞或反常識結論。"
      },
      {
        "title": "個人品牌商業定位盤點指令",
        "desc": "精準梳理自己的利基市場與商業變現路徑",
        "prompt": "我想經營個人品牌。我的背景專長是【[專長領域]】，我過往幫助他人取得的成果有【[具體案例]】，我最感興趣的主題是【[感興趣方向]】。\n請從商業化可行性角度為我分析：\n1. 【最可能買單的精準利基客群（Niche Audience）是誰？】\n2. 【他們心中最迫切願意掏錢解決的痛點是什麼？】\n3. 【建議我可以包裝的 3 種階梯式產品】（免費引流款、核心付費服務、高階一對一諮詢）。"
      }
    ],
    "common_myths": [
      "迷思 1：『全部交給 AI 自動寫文章發布，我就能躺著賺錢。』→ 錯！讀者追隨個人品牌是因為「你的真實經歷、你的價值觀與失敗體悟」。AI 只是幫你省下打字與排版時間，靈魂與核心視角必須由你親自注入。",
      "迷思 2：『看到什麼新工具就花錢訂閱。』→ 錯！工具在精不在多。一人公司只要熟練 1 款語言模型＋1 款排版工具＋1 款影音工具＋1 套自動化串接，產能就足以超越中型工作室。"
    ],
    "pitfalls_and_watchouts": [
      "🚨 警惕個人風格同質化：避免直接複製貼上 AI 的罐頭開頭（如『在當今快節奏的社會中...』），開頭直接切入第一人稱故事或爭議觀點。",
      "🚨 自動化防呆機制：在 Make.com 設置郵件自動寄送前，務必加入測試濾鏡，避免因 API 報錯導致客戶收到無意義代碼或重複發送。"
    ]
  },
  "長照督導 / 醫護社工": {
    "title": "長照督導 / 醫護社工 (Care Supervisor & Social Worker)",
    "keywords": [
      "長照",
      "長照督導",
      "社工",
      "護理",
      "照服員",
      "個管師",
      "居服員",
      "長照機構",
      "日照",
      "醫護"
    ],
    "tagline": "守護個資安全的前提下，大幅減輕個案紀錄負擔，提升跨專業督導與衛教宣導品質",
    "recommended_tools": [
      "chatgpt",
      "notebooklm",
      "vocol",
      "hailuo",
      "canva"
    ],
    "core_mission": "運用 AI 迅速將口語訪視筆記整理為標準 SOAP 個案照護紀錄、使用 NotebookLM 建立長照補助法規與評鑑手冊查詢庫、利用 Vocol.ai 梳理跨專業團隊會議共識，並製作生動衛教宣導圖文。",
    "action_list": [
      {
        "stage": "第一階段：個案紀錄撰寫提速與格式標準化",
        "steps": [
          "居家訪視完成後，錄製或輸入口語化的訪視觀察（務必以代號稱呼個案），交由 ChatGPT 自動整理為符合社福評鑑標準的 SOAP 紀錄（主訴、客觀評估、分析、處置計畫）。",
          "建立常見護理照護與異常通報的標準紀錄模板，減少照服員手寫記錄耗時。"
        ]
      },
      {
        "stage": "第二階段：長照法規與評鑑規章智慧查詢",
        "steps": [
          "將衛福部長照給付支付基準、評鑑指標指引與機構作業規範上傳至 Google NotebookLM，讓督導與個管師能在 3 秒內精準查閱給付代碼與核銷規範，並標註條文出處。"
        ]
      },
      {
        "stage": "第三階段：家屬衛教宣導與跨專業會議溝通",
        "steps": [
          "使用 Canva AI 或 Napkin AI，將複雜的防跌衛教、吞嚥照護指南轉化為長輩與家屬看得懂的大字體資訊圖表。",
          "使用 MiniMax 海螺 AI 或剪映，製作溫馨的生活照護與日照活動紀錄短片，增進家屬信任。"
        ]
      }
    ],
    "prompt_templates": [
      {
        "title": "口語訪視筆記轉標準 SOAP 個案紀錄指令",
        "desc": "在符合隱私的前提下，將口語觀察轉為專業照護紀錄",
        "prompt": "你是資深長照個管督導。以下是我訪視【個案王伯伯（代號 A-102）】時的零散口語速記：\n【[貼入口頭觀察，例如：長輩今天說頭暈，不想吃中餐，量血壓 145/90，扶著走廊扶手會輕微晃動，提醒家屬注意地板積水]】\n請依據長期照顧專業個案紀錄規範，將上述內容整理為標準【SOAP 格式】：\n- S (Subjective 主觀描述)：個案主訴及家屬陳述\n- O (Objective 客觀觀察)：生理數值量測、行為活動表現、居家環境現況\n- A (Assessment 專業評估)：照護問題分析與潛在風險判斷（如防跌、營養評估）\n- P (Plan 處置計畫)：本次具體介入作為、衛教指導項目及下次追蹤重點"
      },
      {
        "title": "長照長輩與家屬衛教問答轉譯",
        "desc": "將艱澀醫護術語轉為溫暖親切的家屬說明",
        "prompt": "請將以下專業照護術語：【[例如：肌少症與吞嚥障礙引發吸入性肺炎之風險]】，改寫為一段要傳給家屬 LINE 群組的溫暖提醒小叮嚀。\n要求：語氣親切有同理心、避免專業術語造成的焦慮感、提供 2~3 個家屬在家能輕鬆執行的簡單生活調整小妙招。"
      }
    ],
    "common_myths": [
      "迷思 1：『直接把病歷號碼、真實姓名、身分證字號貼進 AI 請它代寫紀錄。』→ 極嚴重違法！醫療與社福紀錄涉及高度敏感個資，一旦洩露將面臨法律責任與行政懲處。",
      "迷思 2：『AI 回答的衛教醫學建議可以不經查核直接交給家屬。』→ 錯！AI 不是合格醫師，所有涉及用藥劑量、醫療診斷之內容，必須經由專業醫師或護理師親自核可。"
    ],
    "pitfalls_and_watchouts": [
      "🚨 絕對去識別化原則：所有輸入至外部對話系統之個案資料，一律去名化（以「案主代號 C」、「案妻」代稱），住址隱去路名與門牌。",
      "🚨 評鑑資料查核：評鑑所需之核銷法規，切忌使用未聯網或未限定文檔之模型自由發揮，務必以 NotebookLM 限定於官方公告法規中查詢。"
    ]
  },
  "地方創生 / 農會行銷推廣": {
    "title": "地方創生 / 農會行銷推廣 (Agriculture & Regional Revitalization)",
    "keywords": [
      "農會",
      "農業",
      "地方創生",
      "在地",
      "產銷",
      "青農",
      "特產",
      "休閒農業",
      "觀光",
      "社區"
    ],
    "tagline": "讓在地好物走出產地，用 AI 打造精品級商品情境照、感人文案與吸睛節慶 DM",
    "recommended_tools": [
      "gemini",
      "photoroom",
      "canva",
      "ideogram",
      "gamma"
    ],
    "core_mission": "運用手機拍攝農特產品即可一秒生成攝影棚級情境圖、以 Gemini 發想具備土地溫度的在地故事與節慶禮盒文案、用 Canva 與 Ideogram 快速製作活動宣傳 DM，低成本推動在地品牌轉型。",
    "action_list": [
      {
        "stage": "第一階段：商品拍攝與攝影棚級美化",
        "steps": [
          "在產地用手機拍攝蔬果、茶葉或農產加工品白底照，使用 PhotoRoom 自動去背並套用「木質餐桌、早晨陽光、果園背景」等情境。",
          "利用 Ideogram 產出具備精美中英文字體的農夫市集海報與禮盒包裝概念圖。"
        ]
      },
      {
        "stage": "第二階段：在地產銷故事與社群文案發想",
        "steps": [
          "使用 Google Gemini 結合在地人文歷史、青農返鄉心路歷程與產銷履歷，撰寫打動都市消費者的溫度文案。",
          "針對年節禮盒（中秋、過年、端午），生成針對不同受眾（企業送禮、長輩孝親、小家庭）的差異化推廣文案。"
        ]
      },
      {
        "stage": "第三階段：推廣手冊與產地簡報極速排版",
        "steps": [
          "使用 Gamma 將農村體驗遊程、食農教育教案或產地展銷大綱，一鍵轉為可在手機上順暢滑動瀏覽的微網站與活動簡報。",
          "使用 Canva 套用在地特色海報模板，快速印製實體宣傳單張與易拉寶展架。"
        ]
      }
    ],
    "prompt_templates": [
      {
        "title": "產地直送農特產情感故事文案指令",
        "desc": "結合土地情感與品質保證，打動都市消費者的心",
        "prompt": "你是榮獲金鐘獎的在地文史作家兼頂尖農業品牌顧問。\n我們正在推廣來自【[產地名稱，如：桃園大溪]】的【[特產名稱，如：有機日曬苦茶油]】。\n青農特色是：【[簡述背景，如：科技業返鄉青年承接爺爺的三代老油坊，堅持傳統低溫冷壓]】。\n請為我們撰寫一篇 400 字的 Facebook 品牌故事貼文：\n1. 【標題】：充滿詩意與土地溫度，能讓滑手機的都市人瞬間停下目光。\n2. 【故事開場】：描述清晨產地的陽光與勞作的樸實畫面。\n3. 【堅持的價值】：強調冷壓工藝與對純粹健康的執著。\n4. 【感官描寫】：具體描寫香氣、色澤與料理滋味。\n5. 【邀請品嚐】：溫和誠懇的購買指引（限時預購）。"
      },
      {
        "title": "農會節慶禮盒企劃與宣傳 DM 架構",
        "desc": "快速規劃年節禮盒亮點與宣傳折頁內容",
        "prompt": "我們農會預計推出【[年節檔期，如：中秋特惠]】農特產伴手禮盒，包含【[特產清單，如：文旦、蜂蜜、特色米果]】。\n請為我規劃一張 16:9 宣傳 DM 的完整版面文案與圖文編排建議，分為「主視覺亮點」、「三款禮盒推薦（小資款、尊爵款、健康款）」以及「早鳥預購優惠方案」，語氣喜氣大方、充滿人情味。"
      }
    ],
    "common_myths": [
      "迷思 1：『農產品只能低價賣給批發商，做品牌行銷太貴不划算。』→ 錯！現在利用手機加 PhotoRoom 與 AI 文案，不用花大錢請設計公司，也能做出精品超市等級的包裝視覺，大幅提升商品毛利。",
      "迷思 2：『AI 生出來的水果圖片太漂亮，直接印在包裝外盒。』→ 錯！AI 繪圖容易過度完美（如長出世界上不存在的奇形水果）。必須以真實產品照片為基底去背調色，維護消費者誠信。"
    ],
    "pitfalls_and_watchouts": [
      "🚨 避免虛構產銷認證：文案切勿由 AI 隨意生成未經檢驗的「有機認證」、「醫療療效（如預防癌症）」等字眼，以免觸犯食品安全衛生管理法規。",
      "🚨 實體印刷解析度：若要送印刷廠印製大型布條或海報，點陣圖務必使用 Vectorizer.ai 或 Upscayl 進行向量化與無損放大，避免印出模糊馬賽克。"
    ]
  },
  "求職者 / 社會新鮮人": {
    "title": "求職者 / 社會新鮮人 (Job Seeker & Student)",
    "keywords": [
      "求職",
      "新鮮人",
      "學生",
      "面試",
      "履歷",
      "轉職",
      "待業",
      "實習",
      "畢業生"
    ],
    "tagline": "用 AI 打造 STAR 原則吸睛履歷，模擬嚴格面試官攻防，自信脫穎而出",
    "recommended_tools": [
      "chatgpt",
      "xmind",
      "canva",
      "gamma"
    ],
    "core_mission": "使用 Xmind 梳理過往亮點與核心競爭力、運用 STAR 原則將平淡經歷重構為量化成果、讓 ChatGPT 扮演挑剔面試官即時對話對練，並使用 Canva 產出簡潔專業的履歷排版。",
    "action_list": [
      {
        "stage": "第一階段：盤點個人亮點與天職探索",
        "steps": [
          "在 Xmind 中運用心智圖垂直與水平思考法，列出自己過往社團、打工、專案經歷中的亮點與技能標籤。",
          "將過往經歷丟給 ChatGPT，分析自己最適合投遞的 3 類職缺與技能差距。"
        ]
      },
      {
        "stage": "第二階段：STAR 原則高勝率履歷改寫",
        "steps": [
          "將平凡無奇的打工實習描述，輸入 ChatGPT 運用【STAR 原則】（情境、任務、行動、結果）進行結構化重組，注入量化數據指標。",
          "使用 Canva 的簡約履歷模板，將文字整理為乾淨、排版專業且容易閱讀的一頁式 Resume。"
        ]
      },
      {
        "stage": "第三階段：高擬真挑剔面試官模擬攻防",
        "steps": [
          "將目標公司的職缺描述（JD）與自己的履歷一起餵給 ChatGPT，指令它扮演「毒舌且注重細節的主管」，展開一對一語音或文字模擬面試。",
          "針對每次回答，要求 AI 針對「邏輯是否嚴謹、是否展現主動性」進行打分並提供修改範例。"
        ]
      }
    ],
    "prompt_templates": [
      {
        "title": "STAR 結構化履歷量化成果改寫指令",
        "desc": "將流水帳經歷升級為具備商業說服力的亮點陳述",
        "prompt": "你是國際頂級求職顧問與外商招募主管。我目前正在應徵【[目標職位，如：行銷專員]】。\n以下是我過往在【[公司/社團]】的原始經歷流水帳：\n【[貼入原始經歷，例如：我負責管粉專，每天發文，辦過一場講座，很多人參加]】\n請依據【STAR 原則】（Situation 背景、Task 任務、Action 具體行動、Result 量化成果）幫我重新改寫為 3 個精練的履歷 Bullet Points。\n要求：\n1. 動詞開頭，文字精準有力。\n2. 包含估算的量化成效指標（如增長百分比、參與人次、節省工時）。\n3. 突顯我個人的「主動思考與問題解決能力」，而非被動聽命行事。"
      },
      {
        "title": "高強度模擬面試官對弈指令",
        "desc": "在安全環境下進行最嚴格的面試弱點追問",
        "prompt": "請你現在扮演【[目標公司名，如：台積電 / 奧美廣告]】的【[面試官職位，如：行銷資深總監]】。我是一名應徵該公司【[目標職稱]】的新鮮人。\n這是目標職缺需求：【[貼上 JD]】\n這是我的履歷重點：【[貼上個人履歷摘要]】\n【遊戲規則】：\n1. 請以嚴肅、專業、注重細節的口吻與我對話。\n2. 每次只問我一個問題，等我回答後，不要只是說好，請針對我回答中的漏洞或避重就輕之處進行「犀利追問」。\n3. 當我們進行完 5 題後，請針對我的整體表現給予具體回饋（優點、弱點、改進話術範例）。\n現在，請說出你的第 1 個面試問題！"
      }
    ],
    "common_myths": [
      "迷思 1：『直接複製貼上 AI 寫出來的高大上經歷。』→ 致命錯誤！面試官只要深問一句「這個數據你當初具體是用什麼方法計算出來的？」，虛構經歷立刻被看穿，直接列入永不錄用黑名單。",
      "迷思 2：『履歷寫了 3~4 頁洋洋灑灑。』→ 錯！HR 平均看一份履歷只有 7 秒鐘。非學術研究型工作，新鮮人請務必控制在精準排版的 1 頁之內。"
    ],
    "pitfalls_and_watchouts": [
      "🚨 真實性底線：AI 是幫你「把做過的事說得更漂亮、更有商業邏輯」，而不是幫你「無中生有」。每一個量化數字背後必須有真實依據支撐。",
      "🚨 面試背書感：面試時切記不要死記硬背 AI 的書面語，面試官看重的是自然的臨場反應與真誠眼神，練習時務必用自己的口語多講幾次。"
    ]
  }
};

// Categories definition
const CATEGORIES = [
  { id: "all", name: "全部工具", icon: "LayoutGrid" },
  { id: "自然語言與對話思考", name: "文字與對話", icon: "MessageSquare" },
  { id: "AI 搜尋與情報研究", name: "AI 搜尋研究", icon: "Search" },
  { id: "簡報與文檔生成", name: "簡報與文檔", icon: "Presentation" },
  { id: "圖像生成與設計處理", name: "圖像與美編", icon: "Palette" },
  { id: "影音生成與虛擬人", name: "影音與虛擬人", icon: "Video" },
  { id: "聲音、音樂與會議轉錄", name: "語音與音樂", icon: "Music" },
  { id: "知識庫、筆記與文件分析", name: "知識庫筆記", icon: "BookOpen" },
  { id: "思維導圖與邏輯架構", name: "思維導圖", icon: "GitFork" },
  { id: "工作流自動化與無代碼開發", name: "自動化與開發", icon: "Cpu" }
];
