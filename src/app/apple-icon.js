import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#181818" }}>
        <svg width="112" height="123" viewBox="0 0 40 44" fill="#D3371E">
          <rect x="2" y="26" width="8" height="16" />
          <rect x="13" y="16" width="8" height="26" />
          <rect x="24" y="6" width="8" height="36" />
          <path d="M2 14 L16 6 L27 12 L38 2" fill="none" stroke="#D3371E" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size,
  );
}
