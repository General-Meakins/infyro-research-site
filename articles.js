// ============================================================
//  INFYRO RESEARCH — ARTICLES CONTENT FILE
// ============================================================
//  HOW TO ADD A NEW ARTICLE:
//  1. Copy the block between the dashed lines below
//  2. Paste it at the TOP of the 'articles' array (before the first {)
//  3. Fill in the title, date, and text fields
//  4. Save the file — your article will appear on the site automatically
//
//  DATE FORMAT: "DD Month YYYY"  e.g. "14 May 2026"
//
//  TEXT: Use \n\n between paragraphs for spacing
//        Use straight quotes " not curly quotes
// ============================================================

// --- COPY FROM HERE ---
// {
//   title: "Your article title here",
//   date: "DD Month YYYY",
//   text: `Your first paragraph goes here.
//
// Your second paragraph goes here.
//
// And so on.`
// },
// --- TO HERE ---

const articles = [

  {
    title: "A quantity, not (yet?) quality view of agentic software development",
    date: "16 September 2026",
    text: `I've seen a few people reposting this fascinating graph posted by the FT, which looks at relative change in iOS Marketplace application releases, reviews and usage, before vs after proliferation of agentic software engineering tools.

The analysis is from a paper published in the National Bureau of Economic Research from Demirer et. al, testing whether access to asynchronous agentic coding tools have actually increased productivity - defining this as the building of tools that actually pick up downloads, usage and positive reviews.

They used the release of Github's Async* Copilot capability as the key catalyst in early 2025 (shaded area below) to demonstrate how the number of iOS app releases have exploded under unsupervised agentic production, but that this has not at all translated into adoption (or perceived quality). The paper also looked at Android & Chrome app marketplaces where they found a similar pattern.

[image: article-images/app-releases-vs-reviews-1.jpg]

*Agentic tools, which help people write software, can be described as "sync" or "async". The former type have been more widely available from 2023 onwards, requiring frequent developer input/handholding.

The asynchronous "async" tools, on the other hand, allow tasks to be run in a much more segregated, expansive way, giving an agent a remit or area of focus, before allowing it to run for several hours independently.

Overall, the volatility of the app reviews line since '24 is intriguing and suggests the rapidly shifting LLM capabilities we are seeing are being felt by the end consumer (or perhaps the agents are the ones doing the reviews too!).`
  },

  {
    title: "AI Token-omics: how much, and how many?",
    date: "18 May 2026",
    text: `Breaking it down, we can think of a firm's AI compute spend as a product of two things: price and volume. The fundamental units to think about here are “tokens”, the base blocks of LLM processing, which are roughly 3 or 4 characters in size.

Price, most commonly measured by “cost-per-token” (or per-million-tokens, $/M) has fluctuated across providers and model releases. The leading firms  deal with the tricky task of allocating finite compute amidst exploding demand (complaints about Anthropic's £20/month Pro tier hitting usage limits after only a handful of searches are one example). 

Zooming out, however, it is clear that on this per-token basis, prices continue to fall. See the below blended average of frontier AI tool pricing from Anthropic, OpenAI and Google, with the price of an early model (GPT-4) for completeness.

[image: article-images/cost-per-token-1.png]

On the other hand, the volume of tokens now being processed has increased by orders of magnitude, and importantly, faster than prices are falling. Of course, the number of overall end users is growing fast. But controlling for this adoption, the acceleration is clear in the per-unit measure, “tokens-per-task”, as the focus moves from human-prompted chat responses to complex agentic use. 

Agentic tools are increasingly accessible to non-technical users via extensions such as Perplexity and Co-Work, and generate huge costs due to their compounding nature (agents “calling” their own agents, and so on). The log-scale usage graph below shows the exponential scaling effects here.

[image: article-images/token-per-task-1.png]

Overall, while pricing and volumes may settle eventually, the balance of these two forces, or “token-omics”, is quickly becoming a key driver of software profitability, as firms move away from per-seat subscription models towards outcome-based charges.`
  },

  {
    title: "Software pricing: from seat-based to outcome-based?",
    date: "1 April 2026",
    text: `Almost all of the largest-scale cloud subscription players have made agentic AI a core part of their roadmap in 2026:

- Salesforce’s AgentForce 360
- Atlassian’s Rovo 
- Figma’s Make

are just a few examples of incumbents putting automation of workflows at the centre of their growth ambitions, particularly in the business productivity sub-space.

Yet these commitments come at a time of continued downward valuations: the key Nasdaq Emerging Cloud Index (EMCLOUD) down circa 20% in 2026, and double-digit haircuts for each of the above names. 

One explanation is that investors are pricing in the disruption to what has always been an attractive feature of these businesses: highly repeatable revenues brought about by seat-based subscription pricing. 

The existing model works in part due to a layer of abstraction between payment and end result - operators use the rationale that “employee doing role X must need a login to software Y to do their job.” The result has been revenues that are not only highly recurring (1-3 year subscriptions) but also grow predictably by headcount. 

These firms must recognise that while the agentic programmes they are rolling out may improve their resilience to smaller, AI-native disruptors, they also pose an existential threat to their own pricing mechanisms - each role automated away is a lost subscriber.

[image: article-images/per-seat-pricing-1.png]

The future will be an increasing focus on charging per service outcome, not per user. In one example, HubSpot have responded by rolling out “HubSpot Credits” which are based on tasks-actually-completed (e.g. fully resolved support tickets) by agents, rather than the number of individual licenses a human support team is using.

With software increasingly commoditised, value propositions will become focused on the end product, not building expertise, or tools themselves. As outlined recently by Sequoia Capital: “In 2025, the fastest-growing AI companies were copilots. In 2026, many will try to become autopilots.”`
  }

];
