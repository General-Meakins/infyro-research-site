// ── Tokenomics pricing history ──
// One entry per REAL, sourced price change for each provider's flagship model.
// Do not add synthetic "window start" anchor points — the chart computes the
// rolling 12-month window and carries the last known price forward to today
// at render time, so this file only ever needs genuine change events appended.
//
// When a provider's flagship price changes, append a new { date, input, output, note }
// entry to that model's array (ISO date, most recent last). The Tokenomics chart
// and table both pick this up automatically on next publish — no other code
// changes needed.
const pricingHistory = {
  "GPT-5.6 Sol": {
    provider: "OpenAI",
    color: "#2a78d6",
    events: [
      { date: "2026-07-09", input: 5.00, output: 30.00, note: "Launch price" },
      { date: "2026-08-21", input: 4.00, output: 20.00, note: "20% promotional price cut (through 21 Nov 2026)" }
    ]
  },
  "Claude Fable 5.1": {
    provider: "Anthropic",
    color: "#eb6834",
    events: [
      { date: "2026-06-09", input: 10.00, output: 50.00, note: "Claude Fable 5 launch price (predecessor; token rates unchanged at Fable 5.1's 1 Sep 2026 launch)" }
    ]
  },
  "Gemini 3.1 Pro Preview": {
    provider: "Google",
    color: "#1baf7a",
    events: [
      { date: "2025-11-18", input: 2.00, output: 12.00, note: "Gemini 3 Pro launch price, ≤200K tokens (predecessor; unchanged at Gemini 3.1 Pro Preview's 19 Feb 2026 launch)" }
    ]
  },
  "Grok 4.6": {
    provider: "xAI",
    color: "#eda100",
    events: [
      { date: "2026-07-08", input: 2.00, output: 6.00, note: "Grok 4.5 launch price, <200K tokens (predecessor; unchanged at Grok 4.6's 12 Aug 2026 launch)" }
    ]
  },
  "Llama 4 Maverick": {
    provider: "Meta",
    color: "#e87ba4",
    events: [
      { date: "2026-09-16", input: 0.1875, output: 0.6525, note: "OpenRouter (DigitalOcean Gradient AI) — third-party hosted, no single continuous price series available across hosts" }
    ]
  },
  "Mistral Large 3": {
    provider: "Mistral",
    color: "#008300",
    events: [
      { date: "2025-12-02", input: 0.50, output: 1.50, note: "Launch price, unchanged since" }
    ]
  },
  "DeepSeek V4 Pro": {
    provider: "DeepSeek",
    color: "#4a3aa7",
    events: [
      { date: "2026-04-24", input: 0.435, output: 0.87, note: "Preview launch, promotional rate (made permanent 31 May 2026)" },
      { date: "2026-08-16", input: 0.66, output: 1.98, note: "Off-peak rate after peak/off-peak billing introduced; peak rate is 2× (01:00–04:00 & 06:00–10:00 UTC, Mon–Fri)" }
    ]
  },
  "Nova Premier": {
    provider: "Amazon",
    color: "#e34948",
    events: [
      { date: "2025-04-30", input: 2.50, output: 12.50, note: "Launch price, unchanged since" }
    ]
  }
};
