import { ImageResponse } from "next/og";

export const alt = "Artzen Ambientes Planejados - Móveis Sob Medida em Teresópolis RJ";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #1F1610 0%, #2E1F16 50%, #150E0A 100%)",
          color: "#FAF7F2",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle decorative gold border */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "1px solid rgba(200, 150, 102, 0.3)",
            borderRadius: "16px",
            pointerEvents: "none",
          }}
        />

        {/* Top bar: Brand Name & Location Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #C89666 0%, #9E6B38 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: "bold",
                color: "#1F1610",
              }}
            >
              A
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  color: "#FAF7F2",
                }}
              >
                ARTZEN
              </span>
              <span
                style={{
                  fontSize: "13px",
                  letterSpacing: "4px",
                  color: "#C89666",
                  textTransform: "uppercase",
                }}
              >
                Ambientes Planejados
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "999px",
              background: "rgba(200, 150, 102, 0.15)",
              border: "1px solid rgba(200, 150, 102, 0.4)",
              color: "#E2C39B",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E2C39B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Teresopolis - RJ
          </div>
        </div>

        {/* Main Content / Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "920px",
            marginTop: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#FAF7F2",
              margin: 0,
            }}
          >
            Móveis Planejados de Alto Padrão sob Medida
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.4,
              color: "#D8C7B5",
              margin: 0,
            }}
          >
            Transforme seu lar com projetos 3D personalizados, 100% MDF de alta densidade e ferragens premium com amortecimento.
          </p>
        </div>

        {/* Bottom Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.06)",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "16px",
              color: "#E2C39B",
              fontWeight: 600,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E2C39B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            100% MDF Premium
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.06)",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "16px",
              color: "#E2C39B",
              fontWeight: 600,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E2C39B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Projeto 3D Exclusivo
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.06)",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "16px",
              color: "#E2C39B",
              fontWeight: 600,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E2C39B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            5 Anos de Garantia
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.06)",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "16px",
              color: "#E2C39B",
              fontWeight: 600,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E2C39B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Montagem Própria
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
