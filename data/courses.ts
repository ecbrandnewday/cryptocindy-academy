export type Lesson = {
  slug: string;
  title: string;
  youtubeId: string;
};

export type Course = {
  slug: string;
  title: string;
  type: "course" | "live";
  cover?: string;
  lessons: Lesson[];
};

// YouTube IDs use public demo videos so the player works out of the box.
export const courses: Course[] = [
  {
    slug: "spot",
    title: "現貨買賣",
    type: "course",
    cover: "/cover/現貨買賣.png",
    lessons: [
      { slug: "basics", title: "基礎概念", youtubeId: "_UjqRixv24s" },
      { slug: "order", title: "下單方式", youtubeId: "6fEhs5pahlA" },
      { slug: "dca", title: "定投", youtubeId: "xd5VXu2z1qI" },
      { slug: "risk", title: "風險與建議", youtubeId: "oZGGGH3Hf3Y" },
    ],
  },
  {
    slug: "grid",
    title: "網格教學",
    type: "course",
    cover: "/cover/網格.png",
    lessons: [
      { slug: "basics", title: "基礎概念", youtubeId: "UjF9QrRORvE" },
      { slug: "principle", title: "設定原理", youtubeId: "PMpCNo4MaxY" },
      { slug: "contract", title: "合約網格", youtubeId: "ogOBeH4XrEA" },
      { slug: "example", title: "派網操作範例", youtubeId: "F5RRVE-aCug" },
      { slug: "risk", title: "風險與應用", youtubeId: "vZesQeZU7to" },
    ],
  },
  {
    slug: "airdrop",
    title: "空投",
    type: "course",
    cover: "/cover/空投賽道.png",
    lessons: [
      { slug: "basics", title: "基礎概念", youtubeId: "aO8_nO7ymro" },
      { slug: "types", title: "空投的類型", youtubeId: "AaTdXYMXG1U" },
      { slug: "risk", title: "風險與建議", youtubeId: "3AhZPjE9J7s" },
      { slug: "binance", title: "幣安 alpha event", youtubeId: "iAXABgMwRfw" },
      { slug: "buidlpad", title: "Buidlpad + Momentum", youtubeId: "PkYLmVDKO5U" },
    ],
  },
  {
    slug: "exchange-finance",
    title: "交易所理財",
    type: "course",
    cover: "/cover/交易所理財.png",
    lessons: [
      { slug: "dual", title: "雙幣理財", youtubeId: "XFBznTDlWjs" },
      {
        slug: "binance-dual",
        title: "幣安雙幣理財",
        youtubeId: "DJiigAZY8eQ",
      },
    ],
  },
  {
    slug: "live-20250207",
    title: "2025.02.07 社群直播",
    type: "live",
    cover: "/cover/2025.02.07 社群直播.png",
    lessons: [
      {
        slug: "20250207",
        title: "2025.02.07 CINDY加密聊天室",
        youtubeId: "dCabDC8XSIU",
      },
    ],
  },
  {
    slug: "live-20250912",
    title: "2025.09.12 社群直播",
    type: "live",
    cover: "/cover/2025.09.12 社群直播.png",
    lessons: [
      {
        slug: "20250912",
        title: "2025.09.12 幣圈資產配置分享＋交易所工具",
        youtubeId: "mNJhZ2JxtTo",
      },
    ],
  },
  {
    slug: "live-20251004",
    title: "2025.10.04 社群直播",
    type: "live",
    cover: "/cover/2025.10.04 社群直播.png",
    lessons: [
      {
        slug: "20251004",
        title: "2025.10.04 幣圈所有賺錢方法",
        youtubeId: "qc2Yi6pAtPU",
      },
    ],
  },
];
