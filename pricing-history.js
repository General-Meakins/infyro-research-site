// ── Tokenomics pricing history ──
// Tracks each provider's FLAGSHIP MODEL LINEAGE (not one fixed model) over
// the trailing window shown on the chart. "Flagship" changes identity over
// time as new generations launch — each event below is tagged with which
// model was the actual flagship at that date. One entry per REAL, sourced
// price point (a launch price or a later price change) — nothing synthetic.
// Do not add artificial "window start" anchor points — the chart computes
// the rolling window and carries the last known price forward to today at
// render time, so this file only ever needs genuine new events appended.
//
// When a provider's flagship changes (new model) or its price changes,
// append a new { date, model, input, output, note } entry to that
// provider's `events` array (ISO date, most recent last, never edit/remove
// past entries). The chart and pricing table both pick this up automatically
// on next publish — no other code changes needed.
//
// Researched 17 Sep 2026 across 4 parallel research passes. Every figure
// below is sourced (official provider pages/announcements or reputable
// third-party trackers — OpenRouter, Together AI, llmpricing.dev, etc.).
// Where a source was low-confidence, single-sourced, or a genuine gap
// existed (e.g. a model with no commercial API pricing), that is noted
// in-line rather than papered over with an invented number.
const pricingHistory = {
  "OpenAI": {
    color: "#2a78d6",
    events: [
      { date: "2023-03-14", model: "GPT-4", input: 30.00, output: 60.00, note: "Launch price (8K context)" },
      { date: "2023-11-06", model: "GPT-4 Turbo", input: 10.00, output: 30.00, note: "Preview launch (128K context), 3× cheaper than GPT-4" },
      { date: "2024-05-13", model: "GPT-4o", input: 5.00, output: 15.00, note: "Launch price" },
      { date: "2024-08-06", model: "GPT-4o", input: 2.50, output: 10.00, note: "Price cut (-50% input, -33% output), 4× higher max output tokens" },
      { date: "2025-02-27", model: "GPT-4.5", input: 75.00, output: 150.00, note: "Preview launch — the most expensive OpenAI model to date" },
      { date: "2025-08-07", model: "GPT-5", input: 1.25, output: 10.00, note: "Launch price — sharp cut vs GPT-4.5" },
      { date: "2025-11-12", model: "GPT-5.1", input: 1.25, output: 10.00, note: "Launch price (unchanged from GPT-5)" },
      { date: "2025-12-11", model: "GPT-5.2", input: 1.75, output: 14.00, note: "Launch price" },
      { date: "2026-03-05", model: "GPT-5.4", input: 2.50, output: 15.00, note: "Launch price" },
      { date: "2026-04-23", model: "GPT-5.5", input: 5.00, output: 30.00, note: "Launch price" },
      { date: "2026-07-09", model: "GPT-5.6 Sol", input: 5.00, output: 30.00, note: "Launch price" },
      { date: "2026-08-21", model: "GPT-5.6 Sol", input: 4.00, output: 20.00, note: "20% promotional price cut (through 21 Nov 2026)" },
      { date: "2026-09-03", model: "GPT-6 Astra", input: 10.00, output: 50.00, note: "Launch price — new OpenAI flagship, replacing GPT-5.6 Sol" }
    ]
  },
  "Anthropic": {
    color: "#eb6834",
    events: [
      { date: "2023-07-11", model: "Claude 2", input: 8.00, output: 24.00, note: "Launch price" },
      { date: "2024-03-04", model: "Claude 3 Opus", input: 15.00, output: 75.00, note: "Launch price" },
      { date: "2025-05-22", model: "Claude Opus 4", input: 15.00, output: 75.00, note: "Launch price (unchanged from Claude 3 Opus)" },
      { date: "2025-08-05", model: "Claude Opus 4.1", input: 15.00, output: 75.00, note: "Launch price (unchanged)" },
      { date: "2025-11-24", model: "Claude Opus 4.5", input: 5.00, output: 25.00, note: "Launch price — 67% cut vs Opus 4.1" },
      { date: "2026-06-09", model: "Claude Fable 5", input: 10.00, output: 50.00, note: "Launch price — new tier positioned above Opus" },
      { date: "2026-09-01", model: "Claude Fable 5.1", input: 10.00, output: 50.00, note: "Launch price (unchanged from Fable 5)" }
    ]
  },
  "Google": {
    color: "#1baf7a",
    events: [
      { date: "2023-12-06", model: "Gemini 1.0 Pro / Ultra", input: 0.50, output: 1.50, note: "Launch price (Vertex AI enterprise rate; the consumer Gemini API/AI Studio published a different rate, ~$1.00/$2.00, and Ultra's own rate could not be reliably distinguished from Pro's — sources disagreed)" },
      { date: "2024-05-02", model: "Gemini 1.5 Pro", input: 3.50, output: 10.50, note: "Launch price (≤128K context)" },
      { date: "2024-10-01", model: "Gemini 1.5 Pro", input: 1.25, output: 5.00, note: "Price cut (-64% input, -52% output)" },
      { date: "2025-04-04", model: "Gemini 2.5 Pro", input: 1.25, output: 10.00, note: "Preview launch (≤200K context)" },
      { date: "2025-11-18", model: "Gemini 3 Pro", input: 2.00, output: 12.00, note: "Launch price (≤200K context)" },
      { date: "2026-02-19", model: "Gemini 3.1 Pro Preview", input: 2.00, output: 12.00, note: "Launch price (unchanged, ≤200K context)" }
    ]
  },
  "xAI": {
    color: "#eda100",
    events: [
      { date: "2024-11-04", model: "Grok-2 (grok-beta)", input: 5.00, output: 15.00, note: "First public xAI API (beta) — no API pricing existed for Grok-1, Grok-1.5 or Grok-2's chat-only period before this" },
      { date: "2024-12-12", model: "Grok-2 (grok-2-1212)", input: 2.00, output: 10.00, note: "Price cut and rename from grok-beta" },
      { date: "2025-04-03", model: "Grok-3", input: 3.00, output: 15.00, note: "API general availability" },
      { date: "2025-07-09", model: "Grok-4", input: 3.00, output: 15.00, note: "Launch price (unchanged from Grok-3)" },
      { date: "2025-11-18", model: "Grok-4.1", input: 3.00, output: 15.00, note: "Launch price (unchanged)" },
      { date: "2026-03-10", model: "Grok-4.20", input: 2.00, output: 6.00, note: "Launch price (lower-confidence source, could not fully corroborate)" },
      { date: "2026-04-30", model: "Grok-4.3", input: 1.25, output: 2.50, note: "Launch price" },
      { date: "2026-07-08", model: "Grok-4.5", input: 2.00, output: 6.00, note: "Launch price (≤200K context)" },
      { date: "2026-08-12", model: "Grok-4.6", input: 2.00, output: 6.00, note: "Launch price (unchanged, ≤200K context)" }
    ]
  },
  "Meta": {
    color: "#e87ba4",
    events: [
      { date: "2023-10-20", model: "Llama 2 70B", input: 1.00, output: 1.00, note: "Earliest sourced hosted price (Together AI) — exact 18 Jul 2023 launch-day price not found" },
      { date: "2024-01-26", model: "Llama 2 70B", input: 0.20, output: 0.20, note: "Price cut (Together AI)" },
      { date: "2024-07-18", model: "Llama 3 70B", input: 0.88, output: 0.88, note: "Together AI Turbo endpoint price — exact 18 Apr 2024 launch-day price not found" },
      { date: "2024-07-24", model: "Llama 3.1 405B", input: 5.33, output: 16.00, note: "Launch-week price (Azure) — third-party hosted prices ranged $3–$16/M across hosts at launch" },
      { date: "2024-12-09", model: "Llama 3.3 70B", input: 0.10, output: 0.40, note: "Launch-week hosted price" },
      { date: "2025-04-05", model: "Llama 4 Maverick", input: 0.50, output: 0.77, note: "Launch price (Groq)" },
      { date: "2026-09-16", model: "Llama 4 Maverick", input: 0.1875, output: 0.6525, note: "OpenRouter (DigitalOcean Gradient AI) — third-party hosted, no single continuous price series available across hosts" }
    ]
  },
  "Mistral": {
    color: "#008300",
    events: [
      { date: "2024-02-26", model: "Mistral Large", input: 8.00, output: 24.00, note: "Launch price" },
      { date: "2024-07-24", model: "Mistral Large 2", input: 3.00, output: 9.00, note: "Launch price" },
      { date: "2024-09-17", model: "Mistral Large 2", input: 2.00, output: 6.00, note: "Official 33% price cut" },
      { date: "2025-12-02", model: "Mistral Large 3", input: 0.50, output: 1.50, note: "Launch price — ~80% cheaper than prior generation" }
    ]
  },
  "DeepSeek": {
    color: "#4a3aa7",
    events: [
      { date: "2024-05-06", model: "DeepSeek-V2", input: 0.14, output: 0.28, note: "Launch price — DeepSeek's first commercially-priced API (earlier open-weight releases had no commercial pricing)" },
      { date: "2024-12-26", model: "DeepSeek-V3", input: 0.14, output: 0.28, note: "Launch price (promotional, same as V2, through 8 Feb 2025)" },
      { date: "2025-02-09", model: "DeepSeek-V3", input: 0.27, output: 1.10, note: "Promotional pricing ended" },
      { date: "2025-09-05", model: "DeepSeek-V3.1", input: 0.56, output: 1.68, note: "V3.1 pricing took effect" },
      { date: "2025-09-29", model: "DeepSeek-V3.2-Exp", input: 0.28, output: 0.42, note: "New model, 50% price cut" },
      { date: "2026-04-24", model: "DeepSeek-V4-Pro", input: 0.435, output: 0.87, note: "Preview launch, promotional rate (75% off list, made permanent 31 May 2026)" },
      { date: "2026-08-16", model: "DeepSeek-V4-Pro", input: 0.66, output: 1.98, note: "Off-peak rate after peak/off-peak billing introduced; peak rate is 2× (01:00–04:00 & 06:00–10:00 UTC, Mon–Fri)" }
    ]
  },
  "Amazon": {
    color: "#e34948",
    events: [
      { date: "2023-11-29", model: "Titan Text Express", input: 0.80, output: 1.60, note: "Launch price" },
      { date: "2024-05-07", model: "Titan Text Premier", input: 0.50, output: 1.50, note: "Launch price" },
      { date: "2024-12-03", model: "Nova Pro", input: 0.80, output: 3.20, note: "Launch price — Amazon's most capable shipping model before Nova Premier's GA (Premier was announced the same day but not yet available)" },
      { date: "2025-04-30", model: "Nova Premier", input: 2.50, output: 12.50, note: "Launch price" }
    ]
  }
};
