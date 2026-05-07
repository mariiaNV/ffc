import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(180deg, #ffffff 0%, #f4f4f5 100%)",
          color: "#18181b",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#047857" }}>
            {site.alternateName}
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.3, maxWidth: 900 }}>
            Фумігація • Фітосанітарний захист • Логістика • Дезінсекція
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, color: "#3f3f46" }}>{site.city}</div>
          <div style={{ fontSize: 22, color: "#3f3f46" }}>GAFTA / FOSFA</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
