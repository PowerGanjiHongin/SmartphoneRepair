import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["description", "category"],
  },
});

export async function GET() {
  const NAVER_BLOG_ID = "smartphoneprorepare";
  const RSS_URL = `https://rss.blog.naver.com/${NAVER_BLOG_ID}.xml`;

  // 💡 필터링하고 싶은 카테고리 이름을 정확히 적어주세요! (예: "아이폰 수리")
  const TARGET_CATEGORY = "아이패드 수리"; 

  try {
    const feed = await parser.parseURL(RSS_URL);

    // 1. 해당 카테고리 글만 필터링
    const filteredItems = feed.items.filter((item: any) => {
      // 카테고리 이름이 일치하는지 확인 (공백 제거 후 비교)
      const categoryName = item.category ? item.category.trim() : "";
      return categoryName === TARGET_CATEGORY;
    });

    // 2. 필터링된 글 중 최신 4개 추출
    const posts = filteredItems.slice(0, 2).map((item: any) => {
      const rawDescription = item.description || "";

      const imgMatch = rawDescription.match(/<img[^>]+src=["']([^"']+)["']/i);
      const thumbnail = imgMatch ? imgMatch[1] : null;

      const cleanDescription = rawDescription
        .replace(/<[^>]*>?/gm, "")
        .replace(/&nbsp;/g, " ")
        .trim()
        .slice(0, 90);

      let formattedDate = "";
      if (item.pubDate) {
        const d = new Date(item.pubDate);
        formattedDate = `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}`;
      }

      return {
        title: item.title || "수리 일지",
        link: item.link || item.guid || "#",
        pubDate: formattedDate,
        snippet: cleanDescription ? `${cleanDescription}...` : "내용 보기",
        thumbnail: thumbnail,
        category: item.category || "수리 후기",
      };
    });

    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("네이버 카테고리 RSS 파싱 실패:", error);
    return NextResponse.json(
      { success: false, message: "카테고리 글을 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}