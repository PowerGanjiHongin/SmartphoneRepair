"use client";

import { useEffect, useState } from "react";

interface Post {
  title: string;
  link: string;
  pubDate: string;
  snippet: string;
  thumbnail: string | null;
  category: string;
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blog2");
        const data = await res.json();
        if (data.success && data.posts) {
          setPosts(data.posts);
        }
      } catch (err) {
        console.error("블로그 로딩 실패:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0", color: "#64748b" }}>
        최신 수리 후기를 불러오는 중입니다...
      </div>
    );
  }

  if (posts.length === 0) return null;

  // 컨베이어 벨트의 끊김 없는 무한 루프를 위해 포스팅 목록을 2번 복제합니다.
  const displayPosts = [...posts, ...posts];

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* 글로벌 스타일: 컨베이어 벨트 애니메이션 정의 */}
      <style jsx global>{`
        @keyframes conveyor {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .conveyor-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: conveyor 25s linear infinite;
        }
        /* 마우스 올렸을 때 정지 기능 */
        .conveyor-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 헤더 제목 */}
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: "0 0 6px 0" }}>
          🔥 최신 수리 일지 & 후기
        </h2>
        <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
          실제 현장에서 작업한 최신 수리 내역입니다 (마우스를 올리면 정지합니다)
        </p>
      </div>

      {/* 컨베이어 벨트 뷰포트 (오버플로우 숨김) */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", padding: "10px 0" }}>
        <div className="conveyor-track">
          {displayPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "280px", // 3개가 한 화면에 조화롭게 들어가는 너비
                flexShrink: 0,
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {/* 썸네일 영역 */}
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  backgroundColor: "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {post.thumbnail ? (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span style={{ fontSize: "36px" }}>📱</span>
                )}
              </div>

              {/* 본문 컨텐츠 */}
              <div style={{ padding: "18px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#059669",
                    backgroundColor: "#ecfdf5",
                    padding: "3px 8px",
                    borderRadius: "12px",
                    width: "fit-content",
                    marginBottom: "8px",
                  }}
                >
                  {post.category}
                </span>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#1e293b",
                    margin: "0 0 8px 0",
                    lineHeight: "1.4",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    margin: "0 0 16px 0",
                    lineHeight: "1.5",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    flexGrow: 1,
                  }}
                >
                  {post.snippet}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "#94a3b8",
                  }}
                >
                  <span>{post.pubDate}</span>
                  <span style={{ color: "#2563eb", fontWeight: "600" }}>네이버 블로그 ➔</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}