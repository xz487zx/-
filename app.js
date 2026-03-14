const meals = [
  {
    id: "braised-pork-rice",
    name: "滷肉飯",
    categories: ["飯類", "台式"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "dine-in"],
    delivery: true,
    fullness: "medium",
    moods: ["想省錢", "想快速解決", "想被安慰"],
    scenarios: ["一個人快速吃", "下班很累", "一般晚餐", "宵夜模式"],
    taste: ["濃郁"],
    tags: ["台味", "快速", "安心"],
    avoidTags: [],
    description: "簡單直接、熟悉又不容易踩雷，適合不想想太多的晚上。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "curry-rice",
    name: "咖哩飯",
    categories: ["飯類", "異國料理"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["想被安慰", "很累"],
    scenarios: ["一般晚餐", "下班很累", "一個人快速吃"],
    taste: ["濃郁"],
    tags: ["暖胃", "濃香", "穩定"],
    avoidTags: ["辣"],
    description: "香氣和飽足感都剛剛好，很適合需要被食物接住的狀態。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "bento",
    name: "便當",
    categories: ["飯類"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "delivery"],
    delivery: true,
    fullness: "heavy",
    moods: ["想省錢", "想快速解決"],
    scenarios: ["一般晚餐", "一個人快速吃", "雨天不想出門"],
    taste: ["重口味"],
    tags: ["效率", "高飽足", "日常"],
    avoidTags: [],
    description: "最有效率的選擇，省腦力、省時間，也很有飽足感。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "dumplings",
    name: "水餃",
    categories: ["麵類", "台式"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["想省錢", "想快速解決", "沒特別想法"],
    scenarios: ["一般晚餐", "一個人快速吃", "宵夜模式"],
    taste: ["清淡"],
    tags: ["順口", "好入口", "不費腦"],
    avoidTags: [],
    description: "很容易入口，也適合在不知道要吃什麼時當安全答案。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "beef-noodle",
    name: "牛肉麵",
    categories: ["麵類", "台式"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "heavy",
    moods: ["很累", "想吃重口味", "想被安慰"],
    scenarios: ["下班很累", "天氣冷", "一般晚餐"],
    taste: ["重口味", "濃郁"],
    tags: ["熱湯", "厚實", "療癒"],
    avoidTags: ["牛肉"],
    description: "需要來點厚實感時，牛肉麵幾乎不會讓人失望。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "ramen",
    name: "拉麵",
    categories: ["麵類", "日式"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "heavy",
    moods: ["很累", "想被安慰", "想吃重口味"],
    scenarios: ["下班很累", "約會晚餐", "一般晚餐"],
    taste: ["濃郁", "重口味"],
    tags: ["熱食", "療癒", "儀式感"],
    avoidTags: [],
    description: "熱湯和麵一起上桌，對疲憊的晚上很有安撫效果。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "pasta",
    name: "義大利麵",
    categories: ["異國料理", "麵類"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: true,
    fullness: "medium",
    moods: ["想被安慰", "沒特別想法"],
    scenarios: ["一般晚餐", "約會晚餐", "朋友聚餐"],
    taste: ["濃郁", "清淡"],
    tags: ["輕鬆", "聚會感", "好分享"],
    avoidTags: [],
    description: "可濃可清，兩人約會或朋友一起吃都很穩。",
    socialFit: ["pair", "group"],
  },
  {
    id: "hotpot",
    name: "火鍋",
    categories: ["火鍋"],
    priceLevel: "high",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "heavy",
    moods: ["想被安慰", "今天可以放縱"],
    scenarios: ["朋友聚餐", "約會晚餐", "天氣冷"],
    taste: ["濃郁", "重口味"],
    tags: ["聚餐", "滿足", "暖身"],
    avoidTags: [],
    description: "如果今晚想吃得有存在感，火鍋會是很有儀式感的答案。",
    socialFit: ["pair", "group"],
  },
  {
    id: "bibimbap",
    name: "韓式拌飯",
    categories: ["飯類", "異國料理"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["想吃重口味", "想快速解決"],
    scenarios: ["一般晚餐", "一個人快速吃"],
    taste: ["重口味"],
    tags: ["有層次", "微辣", "滿足"],
    avoidTags: ["辣"],
    description: "想吃得夠味又不要太厚重，韓式拌飯常常剛剛好。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "fried-chicken",
    name: "炸雞",
    categories: ["炸物", "速食"],
    priceLevel: "mid",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "delivery"],
    delivery: true,
    fullness: "heavy",
    moods: ["想吃重口味", "今天可以放縱", "很累"],
    scenarios: ["朋友聚餐", "宵夜模式", "雨天不想出門"],
    taste: ["重口味"],
    tags: ["罪惡感", "爽度", "分享感"],
    avoidTags: [],
    description: "如果今天就是想吃得爽一點，炸雞是很直接的快樂。",
    socialFit: ["pair", "group"],
  },
  {
    id: "burger",
    name: "漢堡",
    categories: ["速食"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "dine-in", "delivery"],
    delivery: true,
    fullness: "medium",
    moods: ["想快速解決", "今天可以放縱"],
    scenarios: ["一個人快速吃", "宵夜模式", "雨天不想出門"],
    taste: ["濃郁"],
    tags: ["方便", "快速", "放縱"],
    avoidTags: [],
    description: "節奏很快、又想吃得有一點爽感時，漢堡很有效率。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "salad",
    name: "沙拉輕食",
    categories: ["輕食"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout", "delivery"],
    delivery: true,
    fullness: "light",
    moods: ["想吃健康一點"],
    scenarios: ["一般晚餐", "約會晚餐", "天氣熱"],
    taste: ["清淡"],
    tags: ["清爽", "健康", "低負擔"],
    avoidTags: [],
    description: "想吃得清爽一點、讓身體輕鬆一些時，這會是舒服的答案。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "sushi",
    name: "壽司",
    categories: ["異國料理", "輕食"],
    priceLevel: "high",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "light",
    moods: ["沒特別想法", "想吃健康一點"],
    scenarios: ["約會晚餐", "一般晚餐", "天氣熱"],
    taste: ["清淡"],
    tags: ["精緻", "清爽", "約會感"],
    avoidTags: [],
    description: "偏輕盈但又有質感，特別適合想吃得清爽一點的晚上。",
    socialFit: ["pair", "group"],
  },
  {
    id: "claypot-rice",
    name: "煲仔飯",
    categories: ["飯類", "異國料理"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: false,
    fullness: "heavy",
    moods: ["想被安慰", "想吃重口味"],
    scenarios: ["天氣冷", "一般晚餐", "下班很累"],
    taste: ["濃郁"],
    tags: ["鍋氣", "暖胃", "厚實"],
    avoidTags: [],
    description: "熱熱上桌、香氣很明顯，特別適合想吃得有存在感的晚餐。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "donburi",
    name: "丼飯",
    categories: ["飯類", "日式"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["沒特別想法", "想快速解決"],
    scenarios: ["一般晚餐", "一個人快速吃"],
    taste: ["濃郁"],
    tags: ["穩妥", "飽足", "日常"],
    avoidTags: [],
    description: "有飯、有肉、有溫度，是一種不太需要冒險的踏實選擇。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "fried-rice",
    name: "炒飯",
    categories: ["飯類", "台式"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "dine-in"],
    delivery: true,
    fullness: "heavy",
    moods: ["想快速解決", "想省錢"],
    scenarios: ["一般晚餐", "宵夜模式", "一個人快速吃"],
    taste: ["重口味"],
    tags: ["鍋氣", "飽足", "效率"],
    avoidTags: [],
    description: "鑊氣一上來，晚餐就有了熟悉又可靠的香味。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "congee",
    name: "粥品",
    categories: ["飯類", "輕食"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "delivery", "dine-in"],
    delivery: true,
    fullness: "light",
    moods: ["想吃健康一點", "想被安慰"],
    scenarios: ["一般晚餐", "天氣冷", "雨天不想出門"],
    taste: ["清淡"],
    tags: ["暖胃", "柔和", "低負擔"],
    avoidTags: [],
    description: "當晚餐想走柔和路線，粥品總有一種安穩而克制的好。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "risotto",
    name: "燉飯",
    categories: ["飯類", "異國料理"],
    priceLevel: "high",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "medium",
    moods: ["想被安慰", "今天可以放縱"],
    scenarios: ["約會晚餐", "一般晚餐", "天氣冷"],
    taste: ["濃郁"],
    tags: ["奶香", "細緻", "儀式感"],
    avoidTags: [],
    description: "綿密細緻、慢慢入口，很適合把晚餐吃得稍微講究一些。",
    socialFit: ["pair", "group"],
  },
  {
    id: "udon",
    name: "烏龍麵",
    categories: ["麵類", "日式"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["想被安慰", "沒特別想法"],
    scenarios: ["一般晚餐", "天氣冷", "一個人快速吃"],
    taste: ["清淡", "濃郁"],
    tags: ["滑順", "暖胃", "舒服"],
    avoidTags: [],
    description: "比拉麵更溫和一點，卻一樣有熱食能安撫晚上的能力。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "dry-noodle",
    name: "乾麵",
    categories: ["麵類", "台式"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "dine-in"],
    delivery: true,
    fullness: "medium",
    moods: ["想省錢", "想快速解決"],
    scenarios: ["一般晚餐", "宵夜模式", "一個人快速吃"],
    taste: ["重口味"],
    tags: ["樸實", "快速", "熟悉"],
    avoidTags: [],
    description: "簡單乾淨、價格友善，是晚餐裡很老派也很耐吃的選擇。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "pho",
    name: "越南河粉",
    categories: ["麵類", "異國料理"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["想吃健康一點", "沒特別想法"],
    scenarios: ["一般晚餐", "天氣熱", "一個人快速吃"],
    taste: ["清淡"],
    tags: ["清爽", "香草感", "低負擔"],
    avoidTags: ["牛肉"],
    description: "清香湯頭和爽口的節奏，適合想吃得輕盈又不失滿足的夜晚。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "laksa",
    name: "叻沙",
    categories: ["麵類", "異國料理"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "heavy",
    moods: ["想吃重口味", "今天可以放縱"],
    scenarios: ["一般晚餐", "天氣冷"],
    taste: ["濃郁", "重口味"],
    tags: ["辛香", "濃厚", "有記憶點"],
    avoidTags: ["辣"],
    description: "香料和椰奶的層次感很強，適合想把晚餐吃得鮮明一點的時候。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "sandwich",
    name: "三明治",
    categories: ["輕食"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "delivery"],
    delivery: true,
    fullness: "light",
    moods: ["想快速解決", "想吃健康一點"],
    scenarios: ["一般晚餐", "天氣熱", "雨天不想出門"],
    taste: ["清淡"],
    tags: ["方便", "輕盈", "好入口"],
    avoidTags: [],
    description: "當晚餐只想俐落解決，又不想太厚重時，三明治很有分寸。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "poke-bowl",
    name: "夏威夷拌飯",
    categories: ["輕食", "異國料理"],
    priceLevel: "high",
    distanceFit: ["near", "far"],
    diningStyle: ["takeout", "dine-in"],
    delivery: true,
    fullness: "medium",
    moods: ["想吃健康一點", "沒特別想法"],
    scenarios: ["天氣熱", "一般晚餐", "約會晚餐"],
    taste: ["清淡"],
    tags: ["清爽", "繽紛", "精緻"],
    avoidTags: [],
    description: "色彩和口感都輕快，很適合想把晚餐吃得清楚明亮一些。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "sub",
    name: "潛艇堡",
    categories: ["輕食", "速食"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "delivery"],
    delivery: true,
    fullness: "medium",
    moods: ["想快速解決"],
    scenarios: ["一般晚餐", "雨天不想出門", "一個人快速吃"],
    taste: ["清淡"],
    tags: ["快速", "方便", "客製"],
    avoidTags: [],
    description: "介於速食和輕食之間，對想快一點又不想太罪惡的人很友善。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "yakitori",
    name: "串燒",
    categories: ["日式", "炸物"],
    priceLevel: "high",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "medium",
    moods: ["今天可以放縱", "想吃重口味"],
    scenarios: ["朋友聚餐", "約會晚餐", "宵夜模式"],
    taste: ["重口味"],
    tags: ["香氣", "下酒", "夜晚感"],
    avoidTags: [],
    description: "帶著炭火香的晚餐，特別適合想把今晚吃得有點氣氛。",
    socialFit: ["pair", "group"],
  },
  {
    id: "tempura",
    name: "天婦羅",
    categories: ["日式", "炸物"],
    priceLevel: "high",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "medium",
    moods: ["今天可以放縱"],
    scenarios: ["約會晚餐", "一般晚餐"],
    taste: ["清淡"],
    tags: ["酥脆", "細緻", "講究"],
    avoidTags: [],
    description: "酥脆卻不粗暴，屬於那種安靜地顯得很體面的晚餐。",
    socialFit: ["pair", "group"],
  },
  {
    id: "taiwanese-snacks",
    name: "台式小吃拼盤",
    categories: ["台式", "炸物"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "dine-in"],
    delivery: true,
    fullness: "medium",
    moods: ["沒特別想法", "想吃重口味"],
    scenarios: ["宵夜模式", "一般晚餐", "朋友聚餐"],
    taste: ["重口味"],
    tags: ["台味", "多樣", "滿足"],
    avoidTags: [],
    description: "一次把鹹酥、甜不辣、米血都排進來，屬於很懂夜晚的選擇。",
    socialFit: ["pair", "group"],
  },
  {
    id: "brunch-plate",
    name: "早午餐拼盤",
    categories: ["輕食", "異國料理"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "medium",
    moods: ["沒特別想法"],
    scenarios: ["一般晚餐", "約會晚餐"],
    taste: ["清淡"],
    tags: ["輕鬆", "舒服", "不出錯"],
    avoidTags: [],
    description: "如果今天不想吃得太有壓力，早午餐式的拼盤會很溫和。",
    socialFit: ["pair", "group"],
  },
  {
    id: "thai-food",
    name: "泰式料理",
    categories: ["異國料理", "飯類"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["想吃重口味", "想被安慰"],
    scenarios: ["朋友聚餐", "一般晚餐", "天氣熱"],
    taste: ["重口味"],
    tags: ["酸辣", "開胃", "聚餐感"],
    avoidTags: ["辣"],
    description: "酸、辣、香一起上桌，能讓沒精神的胃口一下子醒過來。",
    socialFit: ["pair", "group"],
  },
  {
    id: "mexican-bowl",
    name: "墨西哥捲餅碗",
    categories: ["異國料理", "飯類"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["takeout", "dine-in"],
    delivery: true,
    fullness: "medium",
    moods: ["想吃健康一點", "想快速解決"],
    scenarios: ["一般晚餐", "天氣熱"],
    taste: ["重口味"],
    tags: ["有層次", "爽口", "快速"],
    avoidTags: ["辣"],
    description: "配料層次分明，對想吃得飽又不想太單調的人很有吸引力。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "pizza",
    name: "披薩",
    categories: ["異國料理", "速食"],
    priceLevel: "high",
    distanceFit: ["near", "far"],
    diningStyle: ["delivery", "dine-in", "takeout"],
    delivery: true,
    fullness: "heavy",
    moods: ["今天可以放縱", "想被安慰"],
    scenarios: ["朋友聚餐", "雨天不想出門", "一般晚餐"],
    taste: ["濃郁"],
    tags: ["分享", "罪惡感", "滿足"],
    avoidTags: [],
    description: "當晚餐不只要填飽，還要帶來一點熱鬧氣氛，披薩很有說服力。",
    socialFit: ["pair", "group"],
  },
  {
    id: "omelette-rice",
    name: "蛋包飯",
    categories: ["飯類", "日式"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["想被安慰", "沒特別想法"],
    scenarios: ["一般晚餐", "約會晚餐"],
    taste: ["濃郁"],
    tags: ["柔和", "療癒", "安心"],
    avoidTags: [],
    description: "帶著一點復古可愛的溫柔，是很容易讓人心情放鬆的選項。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "mapo-tofu-rice",
    name: "麻婆豆腐飯",
    categories: ["飯類", "異國料理"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["takeout", "dine-in"],
    delivery: true,
    fullness: "heavy",
    moods: ["想吃重口味", "很累"],
    scenarios: ["一般晚餐", "一個人快速吃"],
    taste: ["重口味"],
    tags: ["香辣", "下飯", "醒胃"],
    avoidTags: ["辣"],
    description: "有勁、有香氣、也很下飯，適合想把疲憊一口氣壓下去的晚上。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "roast-meat-rice",
    name: "燒臘飯",
    categories: ["飯類", "港式"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "dine-in"],
    delivery: true,
    fullness: "heavy",
    moods: ["想快速解決", "想省錢"],
    scenarios: ["一般晚餐", "一個人快速吃", "雨天不想出門"],
    taste: ["重口味"],
    tags: ["高效率", "飽足", "穩妥"],
    avoidTags: [],
    description: "肉量和效率都很到位，特別適合下班後不想再猶豫太久。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "wonton-noodle",
    name: "雲吞麵",
    categories: ["麵類", "港式"],
    priceLevel: "mid",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["沒特別想法", "想被安慰"],
    scenarios: ["一般晚餐", "天氣冷"],
    taste: ["清淡"],
    tags: ["滑順", "熱湯", "舒服"],
    avoidTags: [],
    description: "細麵和熱湯總有種安靜的安撫力，很適合平平穩穩地吃完一餐。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "sukiyaki",
    name: "壽喜燒",
    categories: ["火鍋", "日式"],
    priceLevel: "high",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "heavy",
    moods: ["想被安慰", "今天可以放縱"],
    scenarios: ["約會晚餐", "朋友聚餐", "天氣冷"],
    taste: ["濃郁"],
    tags: ["暖身", "細緻", "儀式感"],
    avoidTags: ["牛肉"],
    description: "比一般火鍋更多一點甜鹹層次，很適合把晚餐吃得柔和又講究。",
    socialFit: ["pair", "group"],
  },
  {
    id: "tofu-hotpot",
    name: "臭臭鍋",
    categories: ["火鍋", "台式"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["dine-in", "takeout"],
    delivery: false,
    fullness: "heavy",
    moods: ["很累", "想被安慰"],
    scenarios: ["天氣冷", "一般晚餐", "下班很累"],
    taste: ["重口味"],
    tags: ["熱湯", "台味", "暖胃"],
    avoidTags: [],
    description: "用最直接的方式把身體暖起來，是冷天裡很實際的慰藉。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "soy-milk-breakfast",
    name: "中式早餐店",
    categories: ["台式", "輕食"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["takeout", "delivery"],
    delivery: true,
    fullness: "medium",
    moods: ["想省錢", "沒特別想法"],
    scenarios: ["一般晚餐", "宵夜模式", "雨天不想出門"],
    taste: ["清淡", "重口味"],
    tags: ["親切", "熟悉", "便宜"],
    avoidTags: [],
    description: "有時候晚餐不必隆重，熟悉的蛋餅與豆漿也能把人安穩接住。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "sashimi-don",
    name: "生魚片丼",
    categories: ["日式", "飯類"],
    priceLevel: "high",
    distanceFit: ["near", "far"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "medium",
    moods: ["想吃健康一點", "今天可以放縱"],
    scenarios: ["約會晚餐", "天氣熱", "一般晚餐"],
    taste: ["清淡"],
    tags: ["清爽", "精緻", "質感"],
    avoidTags: [],
    description: "清爽、俐落、帶點儀式感，適合想把晚餐吃得乾淨又漂亮。",
    socialFit: ["solo", "pair"],
  },
  {
    id: "gyoza-set",
    name: "煎餃套餐",
    categories: ["日式", "麵類"],
    priceLevel: "low",
    distanceFit: ["walk", "near"],
    diningStyle: ["dine-in", "takeout"],
    delivery: true,
    fullness: "medium",
    moods: ["想快速解決", "沒特別想法"],
    scenarios: ["一般晚餐", "宵夜模式", "一個人快速吃"],
    taste: ["重口味"],
    tags: ["酥香", "方便", "不出錯"],
    avoidTags: [],
    description: "帶點酥香、又不至於太沈重，是很懂分寸的日常晚餐。",
    socialFit: ["solo", "pair"],
  },
];

const state = {
  currentMode: "condition",
  lastResults: [],
  currentResultIndex: 0,
  currentSource: "依條件挑選",
  currentContext: {
    weather: null,
  },
  favorites: loadFavorites(),
  history: loadRecommendationHistory(),
  weather: loadWeatherCache(),
  pk: {
    active: false,
    round: 1,
    currentPair: [],
    queue: [],
    nextRound: [],
  },
};

const tabButtons = [...document.querySelectorAll(".tab")];
const panels = [...document.querySelectorAll(".mode-panel")];
const resultEmpty = document.getElementById("result-empty");
const resultCard = document.getElementById("result-card");
const resultSource = document.getElementById("result-source");
const resultName = document.getElementById("result-name");
const resultDescription = document.getElementById("result-description");
const resultTags = document.getElementById("result-tags");
const alternativeList = document.getElementById("alternative-list");
const favoritesList = document.getElementById("favorites-list");
const quickStartButton = document.getElementById("quick-start");

setupTabs();
setupJumps();
setupForms();
setupResultActions();
setupPk();
setupQuickStart();
renderFavorites();

function setupTabs() {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });
}

function setupJumps() {
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.jump;
      if (["condition", "mood", "pk", "scenario"].includes(target)) {
        setMode(target);
      }
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupQuickStart() {
  quickStartButton.addEventListener("click", async () => {
    setMode("condition");
    setButtonLoading(quickStartButton, true, "判斷天氣中...");
    const criteria = await withWeatherCriteria({});
    const results = criteria.weather ? rankMeals(criteria) : getQuickStartResults();
    showRecommendation("今晚快速推薦", results, { weather: criteria.weather || null });
    resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setButtonLoading(quickStartButton, false, "開始推薦");
  });
}

function setMode(mode) {
  state.currentMode = mode;
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === mode);
  });
}

function setupForms() {
  document.getElementById("condition-panel").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const submitButton = event.currentTarget.querySelector('button[type="submit"]');
    setButtonLoading(submitButton, true, "判斷天氣中...");
    const criteria = await withWeatherCriteria(buildConditionCriteria(form));
    const results = rankMeals(criteria);
    showRecommendation("依條件挑選", results, { weather: criteria.weather || null });
    setButtonLoading(submitButton, false, "開始推薦");
  });

  document.getElementById("mood-panel").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const submitButton = event.currentTarget.querySelector('button[type="submit"]');
    setButtonLoading(submitButton, true, "判斷天氣中...");
    const criteria = await withWeatherCriteria(buildMoodCriteria(form));
    const results = rankMeals(criteria);
    showRecommendation("依心情挑選", results, { weather: criteria.weather || null });
    setButtonLoading(submitButton, false, "開始推薦");
  });

  document.getElementById("scenario-panel").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const submitButton = event.currentTarget.querySelector('button[type="submit"]');
    setButtonLoading(submitButton, true, "判斷天氣中...");
    const criteria = await withWeatherCriteria(buildScenarioCriteria(form));
    const results = rankMeals(criteria);
    showRecommendation("依情境挑選", results, { weather: criteria.weather || null });
    setButtonLoading(submitButton, false, "開始推薦");
  });
}

function buildConditionCriteria(form) {
  const criteria = {};
  const budget = form.get("budget");
  if (budget !== "all") criteria.priceLevel = budget;

  const distance = form.get("distance");
  if (distance !== "all") criteria.distance = distance;

  const type = form.get("foodType");
  if (type !== "all") criteria.category = type;

  const delivery = form.get("delivery");
  if (delivery !== "all") criteria.delivery = delivery;

  const fullness = form.get("fullness");
  if (fullness !== "all") criteria.fullness = fullness;

  const partySize = form.get("partySize");
  if (partySize) criteria.socialMode = partySize;

  const exclude = form.get("exclude");
  if (exclude !== "none") criteria.exclude = exclude;

  return criteria;
}

function buildMoodCriteria(form) {
  const criteria = {};
  const mood = form.get("mood");
  if (mood !== "all") criteria.mood = mood;

  const tasteBias = form.get("tasteBias");
  if (tasteBias !== "all") criteria.taste = tasteBias;

  const comfortLevel = form.get("comfortLevel");
  if (comfortLevel === "想吃療癒感") criteria.tags = ["療癒", "暖胃", "安心"];

  const priceMood = form.get("priceMood");
  if (priceMood === "想省") criteria.priceLevel = "low";
  if (priceMood === "放縱") criteria.priceLevel = "high";

  return criteria;
}

function buildScenarioCriteria(form) {
  const criteria = {};
  const scenario = form.get("scenario");
  if (scenario !== "all") criteria.scenario = scenario;

  const timePressure = form.get("timePressure");
  if (timePressure === "rush") criteria.tags = ["快速", "效率"];

  const goOut = form.get("goOutWillingness");
  if (goOut === "stay-in") criteria.delivery = "delivery";
  if (goOut === "go-out") criteria.delivery = "dine-in";

  const socialMode = form.get("socialMode");
  if (socialMode !== "all") criteria.socialMode = socialMode;

  const weather = form.get("weatherImpact");
  if (weather === "rain") criteria.scenario = "雨天不想出門";
  if (weather === "cold") criteria.scenario = "天氣冷";
  if (weather === "hot") criteria.scenario = "天氣熱";

  return criteria;
}

function rankMeals(criteria) {
  const scored = meals
    .map((meal) => ({ meal, score: scoreMeal(meal, criteria) + Math.random() * 0.35 }))
    .filter((entry) => entry.score > -999)
    .sort((a, b) => b.score - a.score);

  return buildRecommendationDeck(scored).map((entry) => entry.meal);
}

function getQuickStartResults() {
  return shuffle(rankMeals({}).slice(0, 8));
}

async function withWeatherCriteria(baseCriteria) {
  const weather = await getWeatherContext();
  if (!weather) return { ...baseCriteria };
  return {
    ...baseCriteria,
    weather,
  };
}

function scoreMeal(meal, criteria) {
  let score = 10;

  if (criteria.exclude) {
    if (meal.categories.includes(criteria.exclude) || meal.avoidTags.includes(criteria.exclude)) {
      return -1000;
    }
  }

  if (criteria.priceLevel) {
    if (meal.priceLevel === criteria.priceLevel) score += 4;
    else if (criteria.priceLevel === "mid" && meal.priceLevel === "low") score += 2;
    else score -= 1;
  }

  if (criteria.distance) {
    score += meal.distanceFit.includes(criteria.distance) ? 3 : -1;
  }

  if (criteria.category) {
    score += meal.categories.includes(criteria.category) ? 5 : -2;
  }

  if (criteria.delivery) {
    if (criteria.delivery === "delivery") score += meal.delivery ? 3 : -2;
    if (criteria.delivery === "dine-in") score += meal.diningStyle.includes("dine-in") ? 2 : -1;
    if (criteria.delivery === "takeout") score += meal.diningStyle.includes("takeout") ? 2 : -1;
  }

  if (criteria.fullness) {
    const fullnessMap = { light: "light", medium: "medium", heavy: "heavy" };
    score += meal.fullness === fullnessMap[criteria.fullness] ? 3 : 0;
  }

  if (criteria.mood) {
    score += meal.moods.includes(criteria.mood) ? 5 : 0;
  }

  if (criteria.taste) {
    score += meal.taste.includes(criteria.taste) ? 3 : 0;
  }

  if (criteria.tags) {
    const hasTag = criteria.tags.some((tag) => meal.tags.includes(tag));
    score += hasTag ? 3 : 0;
  }

  if (criteria.scenario) {
    score += meal.scenarios.includes(criteria.scenario) ? 5 : -1;
  }

  if (criteria.socialMode) {
    const normalizedSocialMode = criteria.socialMode === "small-group" ? "group" : criteria.socialMode;
    score += meal.socialFit.includes(normalizedSocialMode) ? 2 : 0;
  }

  if (criteria.weather) {
    score += scoreWeatherFit(meal, criteria.weather);
  }

  if (state.favorites.includes(meal.name)) {
    score += 0.5;
  }

  score -= getRecentMealPenalty(meal);
  score -= getRecentCategoryPenalty(meal);

  return score;
}

function scoreWeatherFit(meal, weather) {
  let score = 0;

  if (weather.preferredCategories.some((category) => meal.categories.includes(category))) {
    score += 2.5;
  }

  if (weather.avoidedCategories.some((category) => meal.categories.includes(category))) {
    score -= 2;
  }

  if (weather.preferredTags.some((tag) => meal.tags.includes(tag))) {
    score += 2;
  }

  if (weather.preferredScenarios.some((scenario) => meal.scenarios.includes(scenario))) {
    score += 2;
  }

  if (weather.preferDelivery && meal.delivery) {
    score += 1.5;
  }

  if (weather.preferredFullness && meal.fullness === weather.preferredFullness) {
    score += 1.5;
  }

  return score;
}

function showRecommendation(sourceLabel, results, context = {}) {
  if (!results.length) return;
  state.lastResults = results.slice(0, 4);
  state.currentResultIndex = 0;
  state.currentSource = sourceLabel;
  state.currentContext = {
    weather: context.weather || null,
  };
  rememberRecommendation(state.lastResults[0]);
  renderCurrentResult();
}

function renderCurrentResult() {
  const meal = state.lastResults[state.currentResultIndex];
  if (!meal) return;

  resultEmpty.classList.add("hidden");
  resultCard.classList.remove("hidden");
  resultSource.textContent = state.currentSource;
  resultName.textContent = meal.name;
  resultDescription.textContent = buildReason(meal, state.currentSource);

  resultTags.innerHTML = "";
  [...meal.categories.slice(0, 2), ...meal.tags.slice(0, 2)].forEach((tag) => {
    const chip = document.createElement("span");
    chip.textContent = tag;
    resultTags.appendChild(chip);
  });

  if (state.currentContext.weather?.label) {
    const weatherChip = document.createElement("span");
    weatherChip.textContent = state.currentContext.weather.label;
    resultTags.appendChild(weatherChip);
  }

  alternativeList.innerHTML = "";
  state.lastResults
    .filter((candidate) => candidate.id !== meal.id)
    .slice(0, 3)
    .forEach((candidate) => {
      const item = document.createElement("li");
      item.textContent = `${candidate.name}：${candidate.description}`;
      alternativeList.appendChild(item);
    });
}

function buildReason(meal, sourceLabel) {
  const weatherNote = buildWeatherReason(state.currentContext.weather);
  const leadIn = buildWeatherLeadIn(state.currentContext.weather);
  if (sourceLabel === "依心情挑選") {
    return `${leadIn}${meal.description} 今晚看起來更適合用 ${meal.name} 這種 ${meal.tags[0]} 路線收尾。${weatherNote}`;
  }
  if (sourceLabel === "依情境挑選") {
    return `${leadIn}${meal.description} 以你現在的情境來說，它兼顧了方便和滿足感。${weatherNote}`;
  }
  if (sourceLabel === "PK 冠軍") {
    return `${meal.description} 經過一輪輪淘汰後，它最後留下來，代表今晚真的很有冠軍相。`;
  }
  return `${leadIn}${meal.description} 如果你只想微調幾個條件，${meal.name} 會是今晚很穩的答案。${weatherNote}`;
}

function buildWeatherReason(weather) {
  if (!weather) return "";

  if (weather.isRainy) {
    return " 因為現在有雨，系統會稍微偏向暖胃、舒服一點，或外送友善的選項。";
  }

  if (weather.temperature <= 18) {
    return " 現在偏涼，系統會多考慮熱食、暖胃和更有飽足感的餐點。";
  }

  if (weather.temperature >= 30) {
    return " 現在偏熱，系統會多考慮清爽、輕盈、負擔較低的選項。";
  }

  return " 目前天氣舒適，所以推薦會維持比較日常、通用的晚餐路線。";
}

function buildWeatherLeadIn(weather) {
  if (!weather) return "";

  if (weather.isRainy) {
    return `現在外面是雨天、體感約 ${Math.round(weather.temperature)}°C，`;
  }

  if (weather.temperature <= 18) {
    return `現在體感約 ${Math.round(weather.temperature)}°C，天氣偏涼，`;
  }

  if (weather.temperature >= 30) {
    return `現在體感約 ${Math.round(weather.temperature)}°C，天氣偏熱，`;
  }

  return `現在體感約 ${Math.round(weather.temperature)}°C，天氣算舒服，`;
}

function setupResultActions() {
  document.getElementById("reroll-button").addEventListener("click", () => {
    if (state.lastResults.length < 2) return;
    state.currentResultIndex = (state.currentResultIndex + 1) % state.lastResults.length;
    renderCurrentResult();
  });

  document.getElementById("favorite-button").addEventListener("click", () => {
    const meal = state.lastResults[state.currentResultIndex];
    if (!meal) return;
    if (!state.favorites.includes(meal.name)) {
      state.favorites.push(meal.name);
      saveFavorites();
      renderFavorites();
    }
  });
}

function setupPk() {
  const startButton = document.getElementById("pk-start");
  const resetButton = document.getElementById("pk-reset");

  startButton.addEventListener("click", startTournament);
  resetButton.addEventListener("click", resetTournament);
}

function startTournament() {
  const mode = document.getElementById("pk-candidate-mode").value;
  const customInput = document.getElementById("pk-custom-input").value;
  let candidates = meals.map((meal) => meal.name);

  if (mode === "custom" && customInput.trim()) {
    candidates = [...new Set([...candidates.slice(0, 6), ...parseCustomCandidates(customInput)])];
  } else {
    candidates = candidates.slice(0, 8);
  }

  if (candidates.length < 2) return;

  state.pk.active = true;
  state.pk.round = 1;
  state.pk.queue = shuffle(candidates);
  state.pk.nextRound = [];
  nextMatchup();
}

function resetTournament() {
  state.pk = {
    active: false,
    round: 1,
    currentPair: [],
    queue: [],
    nextRound: [],
  };
  document.getElementById("pk-custom-input").value = "";
  document.getElementById("pk-stage").innerHTML =
    '<p class="pk-placeholder">按下開始 PK，讓候選晚餐一輪輪淘汰到剩最後一個。</p>';
}

function nextMatchup() {
  const { queue, nextRound } = state.pk;

  if (queue.length === 1 && nextRound.length === 0) {
    const championName = queue[0];
    const championMeal =
      meals.find((meal) => meal.name === championName) || buildCustomMeal(championName);
    if (championMeal) showRecommendation("PK 冠軍", [championMeal]);
    document.getElementById("pk-stage").innerHTML = `
      <p class="pk-round">冠軍出爐</p>
      <div class="result-empty">
        <h3>${championName}</h3>
        <p>一路淘汰其他選項後，今晚就交給它了。</p>
      </div>
    `;
    return;
  }

  if (queue.length < 2) {
    state.pk.queue = shuffle(nextRound);
    state.pk.nextRound = [];
    state.pk.round += 1;
    nextMatchup();
    return;
  }

  state.pk.currentPair = [queue.shift(), queue.shift()];
  renderMatchup();
}

function renderMatchup() {
  const [left, right] = state.pk.currentPair;
  const stage = document.getElementById("pk-stage");
  const queuePreview = [...state.pk.queue, ...state.pk.nextRound];

  stage.innerHTML = `
    <p class="pk-round">第 ${state.pk.round} 輪對決</p>
    <div class="pk-matchup">
      <button class="pk-option" data-pick="${left}">
        <strong>${left}</strong>
        <span>今晚如果現在就要決定，我選這個。</span>
      </button>
      <button class="pk-option" data-pick="${right}">
        <strong>${right}</strong>
        <span>另一邊也不錯，但這輪只能留一個。</span>
      </button>
    </div>
    <div class="pk-queue"></div>
  `;

  const queueNode = stage.querySelector(".pk-queue");
  queuePreview.forEach((name) => {
    const chip = document.createElement("span");
    chip.className = "pk-chip";
    chip.textContent = name;
    queueNode.appendChild(chip);
  });

  stage.querySelectorAll(".pk-option").forEach((button) => {
    button.addEventListener("click", () => {
      state.pk.nextRound.push(button.dataset.pick);
      nextMatchup();
    });
  });
}

function parseCustomCandidates(input) {
  return input
    .split(/[,，]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function buildCustomMeal(name) {
  return {
    id: `custom-${name}`,
    name,
    categories: ["自訂候選"],
    priceLevel: "mid",
    distanceFit: ["near"],
    diningStyle: ["dine-in"],
    delivery: false,
    fullness: "medium",
    moods: ["沒特別想法"],
    scenarios: ["一般晚餐"],
    taste: ["濃郁"],
    tags: ["自訂", "PK 勝出"],
    avoidTags: [],
    description: "這是你自己放進候選池的答案，最後一路贏到冠軍。",
    socialFit: ["solo", "pair", "group"],
  };
}

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function buildRecommendationDeck(scoredMeals) {
  if (!scoredMeals.length) return [];

  const deck = [];
  const usedMealIds = new Set();
  const usedPrimaryCategories = new Set();
  const bestScore = scoredMeals[0].score;

  while (deck.length < Math.min(4, scoredMeals.length)) {
    const dynamicThreshold = deck.length === 0 ? bestScore - 3 : bestScore - 5;
    let pool = scoredMeals.filter(
      (entry) =>
        !usedMealIds.has(entry.meal.id) &&
        entry.score >= dynamicThreshold &&
        !usedPrimaryCategories.has(entry.meal.categories[0])
    );

    if (!pool.length) {
      pool = scoredMeals.filter(
        (entry) => !usedMealIds.has(entry.meal.id) && entry.score >= bestScore - 6
      );
    }

    if (!pool.length) {
      pool = scoredMeals.filter((entry) => !usedMealIds.has(entry.meal.id));
    }

    const chosen = weightedPick(pool);
    if (!chosen) break;

    deck.push(chosen);
    usedMealIds.add(chosen.meal.id);
    usedPrimaryCategories.add(chosen.meal.categories[0]);
  }

  const remaining = scoredMeals.filter((entry) => !usedMealIds.has(entry.meal.id));
  return [...deck, ...remaining];
}

function weightedPick(entries) {
  if (!entries.length) return null;

  const baseScore = entries[0].score;
  const weightedEntries = entries.map((entry) => ({
    entry,
    weight: Math.max(1, Math.round((entry.score - baseScore + 6) * 10)),
  }));

  const totalWeight = weightedEntries.reduce((sum, item) => sum + item.weight, 0);
  let target = Math.random() * totalWeight;

  for (const item of weightedEntries) {
    target -= item.weight;
    if (target <= 0) return item.entry;
  }

  return weightedEntries[weightedEntries.length - 1].entry;
}

function getRecentMealPenalty(meal) {
  const index = state.history.indexOf(meal.id);
  if (index === -1) return 0;
  return Math.max(0, 5 - index);
}

function getRecentCategoryPenalty(meal) {
  const recentMeals = state.history
    .slice(0, 6)
    .map((mealId) => meals.find((entry) => entry.id === mealId))
    .filter(Boolean);

  const sameCategoryCount = recentMeals.filter(
    (recentMeal) => recentMeal.categories[0] === meal.categories[0]
  ).length;

  return sameCategoryCount * 1.2;
}

function rememberRecommendation(meal) {
  if (!meal?.id) return;
  state.history = [meal.id, ...state.history.filter((mealId) => mealId !== meal.id)].slice(0, 8);
  saveRecommendationHistory();
}

function resetRecommendationHistory() {
  state.history = [];
  saveRecommendationHistory();
}

async function getWeatherContext() {
  const now = Date.now();
  if (state.weather.data && now - state.weather.timestamp < 15 * 60 * 1000) {
    return state.weather.data;
  }

  if (!window.isSecureContext || !navigator.geolocation) {
    return null;
  }

  try {
    const position = await getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 10 * 60 * 1000,
    });
    const weather = await fetchWeather(position.coords.latitude, position.coords.longitude);
    state.weather = {
      timestamp: now,
      data: weather,
    };
    saveWeatherCache();
    return weather;
  } catch {
    return null;
  }
}

function getCurrentPosition(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

async function fetchWeather(latitude, longitude) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: "temperature_2m,apparent_temperature,precipitation,weather_code",
    timezone: "auto",
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!response.ok) {
    throw new Error("weather-fetch-failed");
  }

  const payload = await response.json();
  return mapWeatherToPreference({
    temperature: payload.current.temperature_2m,
    apparentTemperature: payload.current.apparent_temperature,
    precipitation: payload.current.precipitation,
    weatherCode: payload.current.weather_code,
  });
}

function mapWeatherToPreference(current) {
  const temperature = current.apparentTemperature ?? current.temperature;
  const isRainy =
    current.precipitation >= 0.2 ||
    [51, 53, 55, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(current.weatherCode);
  const preferredCategories = [];
  const avoidedCategories = [];
  const preferredTags = [];
  const preferredScenarios = [];
  let preferredFullness = "";
  let label = `體感 ${Math.round(temperature)}°C`;

  if (isRainy) {
    preferredScenarios.push("雨天不想出門");
    preferredTags.push("暖胃", "方便", "快速");
    label = `雨天 ${Math.round(temperature)}°C`;
  }

  if (temperature <= 18) {
    preferredCategories.push("麵類", "火鍋", "飯類");
    preferredTags.push("暖胃", "熱食", "療癒", "厚實");
    avoidedCategories.push("輕食");
    preferredFullness = "heavy";
    if (!isRainy) label = `偏涼 ${Math.round(temperature)}°C`;
  } else if (temperature >= 30) {
    preferredCategories.push("輕食", "異國料理");
    preferredTags.push("清爽", "低負擔");
    avoidedCategories.push("火鍋");
    preferredFullness = "light";
    if (!isRainy) label = `偏熱 ${Math.round(temperature)}°C`;
  } else if (temperature >= 26) {
    preferredCategories.push("飯類", "輕食");
    preferredTags.push("清爽");
    avoidedCategories.push("火鍋");
    preferredFullness = "medium";
    if (!isRainy) label = `溫暖 ${Math.round(temperature)}°C`;
  } else {
    preferredCategories.push("飯類", "麵類");
    preferredTags.push("安心", "暖胃");
    preferredFullness = "medium";
  }

  return {
    ...current,
    temperature,
    isRainy,
    preferDelivery: isRainy,
    preferredCategories,
    avoidedCategories,
    preferredTags,
    preferredScenarios,
    preferredFullness,
    label,
  };
}

function setButtonLoading(button, isLoading, label) {
  if (!button) return;
  if (!button.dataset.defaultLabel) {
    button.dataset.defaultLabel = button.textContent.trim();
  }
  button.disabled = isLoading;
  button.textContent = isLoading ? label : button.dataset.defaultLabel;
}

function loadFavorites() {
  try {
    return JSON.parse(window.localStorage.getItem("dinner-favorites") || "[]");
  } catch {
    return [];
  }
}

function saveFavorites() {
  window.localStorage.setItem("dinner-favorites", JSON.stringify(state.favorites));
}

function loadRecommendationHistory() {
  try {
    return JSON.parse(window.localStorage.getItem("dinner-history") || "[]");
  } catch {
    return [];
  }
}

function saveRecommendationHistory() {
  window.localStorage.setItem("dinner-history", JSON.stringify(state.history));
}

function loadWeatherCache() {
  try {
    return JSON.parse(
      window.localStorage.getItem("dinner-weather-cache") || '{"timestamp":0,"data":null}'
    );
  } catch {
    return { timestamp: 0, data: null };
  }
}

function saveWeatherCache() {
  window.localStorage.setItem("dinner-weather-cache", JSON.stringify(state.weather));
}

function runRecommendationSimulation(times = 20, options = {}) {
  const iterations = Number.isFinite(times) ? Math.max(1, Math.floor(times)) : 20;
  const preserveHistory = Boolean(options.preserveHistory);
  const originalHistory = [...state.history];
  const results = [];
  const counts = {};

  if (!preserveHistory) {
    resetRecommendationHistory();
  }

  for (let index = 0; index < iterations; index += 1) {
    const pick = getQuickStartResults()[0];
    results.push(pick.name);
    counts[pick.name] = (counts[pick.name] || 0) + 1;
    rememberRecommendation(pick);
  }

  if (!preserveHistory) {
    state.history = originalHistory;
    saveRecommendationHistory();
  }

  return {
    iterations,
    results,
    counts: Object.fromEntries(
      Object.entries(counts).sort(([, left], [, right]) => right - left)
    ),
  };
}

window.dinnerDebug = {
  runRecommendationSimulation,
  resetRecommendationHistory,
  getHistory: () => [...state.history],
};

function renderFavorites() {
  favoritesList.innerHTML = "";
  if (!state.favorites.length) {
    const empty = document.createElement("li");
    empty.textContent = "還沒有私藏名單，先替今晚留下一個值得再訪的答案吧。";
    favoritesList.appendChild(empty);
    return;
  }

  state.favorites.forEach((name) => {
    const item = document.createElement("li");
    item.textContent = name;
    favoritesList.appendChild(item);
  });
}
