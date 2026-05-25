import type { DashboardState } from '@/types/dashboard'

export const DEFAULT_STATE: DashboardState = {
  "pinned": [
    {
      "id": "p1",
      "label": "Claude",
      "url": "https://claude.ai/",
      "color": "#e8622a"
    },
    {
      "id": "p2",
      "label": "ChatGPT",
      "url": "https://chatgpt.com/",
      "color": "#10a37f"
    },
    {
      "id": "p3",
      "label": "Gemini",
      "url": "https://gemini.google.com/app",
      "color": "#4285f4"
    },
    {
      "id": "p4",
      "label": "Perplexity",
      "url": "https://www.perplexity.ai/",
      "color": "#22d3ee"
    },
    {
      "id": "p5",
      "label": "Genspark",
      "url": "https://www.genspark.ai/",
      "color": "#f97316"
    },
    {
      "id": "p6",
      "label": "AI Studio",
      "url": "https://aistudio.google.com/",
      "color": "#4285f4"
    },
    {
      "id": "p7",
      "label": "Flow",
      "url": "https://labs.google/fx/tools/flow",
      "color": "#4285f4"
    },
    {
      "id": "p8",
      "label": "Vercel",
      "url": "https://vercel.com/elohim",
      "color": "#ffffff"
    },
    {
      "id": "p9",
      "label": "Deployments",
      "url": "https://vercel.com/elohim/~/deployments",
      "color": "#ffffff"
    },
    {
      "id": "p10",
      "label": "Drive",
      "url": "https://drive.google.com/",
      "color": "#4285f4"
    },
    {
      "id": "p11",
      "label": "Docs",
      "url": "https://docs.google.com/document/u/0/",
      "color": "#4285f4"
    },
    {
      "id": "p12",
      "label": "Dropbox",
      "url": "https://www.dropbox.com/home",
      "color": "#0061ff"
    },
    {
      "id": "p13",
      "label": "Canva AI",
      "url": "https://www.canva.com/ai",
      "color": "#00c4cc"
    },
    {
      "id": "p14",
      "label": "Google",
      "url": "https://www.google.com/",
      "color": "#ea4335"
    },
    {
      "id": "p15",
      "label": "Solscan",
      "url": "https://solscan.io/account/523vdNYYi44e762Qd7eU6HQGULQsRbsZLYp9g69weAr5#portfolio",
      "color": "#a78bfa"
    }
  ],
  "sections": [
    {
      "id": "s_ai",
      "label": "AI Models & Platforms",
      "filter": "ai",
      "priority": true,
      "cards": [
        {
          "id": "ai1",
          "label": "Claude",
          "url": "https://claude.ai/",
          "color": "#e8622a",
          "icon": "◈"
        },
        {
          "id": "ai2",
          "label": "ChatGPT",
          "url": "https://chatgpt.com/",
          "color": "#10a37f",
          "icon": "◆"
        },
        {
          "id": "ai3",
          "label": "Codex",
          "url": "https://chatgpt.com/codex",
          "color": "#10a37f",
          "icon": "⬡"
        },
        {
          "id": "ai4",
          "label": "Grok",
          "url": "https://grok.com/",
          "color": "#eaf0f6",
          "icon": "✦"
        },
        {
          "id": "ai5",
          "label": "Gemini",
          "url": "https://gemini.google.com/app",
          "color": "#4285f4",
          "icon": "✦"
        },
        {
          "id": "ai6",
          "label": "Perplexity",
          "url": "https://www.perplexity.ai/",
          "color": "#22d3ee",
          "icon": "◎"
        },
        {
          "id": "ai7",
          "label": "Mistral",
          "url": "https://chat.mistral.ai/chat",
          "color": "#ff7700",
          "icon": "◉"
        },
        {
          "id": "ai8",
          "label": "DeepSeek Chat",
          "url": "https://chat.deepseek.com/",
          "color": "#4f9cf9",
          "icon": "◈"
        },
        {
          "id": "ai9",
          "label": "Meta AI",
          "url": "https://www.meta.ai/",
          "color": "#0866ff",
          "icon": "◆"
        },
        {
          "id": "ai10",
          "label": "Copilot",
          "url": "https://copilot.microsoft.com/",
          "color": "#2563eb",
          "icon": "◇"
        },
        {
          "id": "ai11",
          "label": "Kimi",
          "url": "https://www.kimi.com/",
          "color": "#22d3ee",
          "icon": "◎"
        },
        {
          "id": "ai12",
          "label": "Genspark",
          "url": "https://www.genspark.ai/",
          "color": "#f97316",
          "icon": "⬡"
        },
        {
          "id": "ai13",
          "label": "MiniMax Agent",
          "url": "https://agent.minimax.io/",
          "color": "#a78bfa",
          "icon": "◉"
        },
        {
          "id": "ai14",
          "label": "ElevenLabs",
          "url": "https://elevenlabs.io/app/home",
          "color": "#fbbf24",
          "icon": "♪"
        },
        {
          "id": "ai15",
          "label": "MaxAI",
          "url": "https://www.maxai.co/",
          "color": "#22d3ee",
          "icon": "◈"
        },
        {
          "id": "ai16",
          "label": "CapCut",
          "url": "https://www.capcut.com/",
          "color": "#4ade80",
          "icon": "▶"
        },
        {
          "id": "ai17",
          "label": "Requesty",
          "url": "https://app.requesty.ai/",
          "color": "#f97316",
          "icon": "◈"
        },
        {
          "id": "ai18",
          "label": "AthenaLab",
          "url": "https://athenalab.ai/",
          "color": "#22d3ee",
          "icon": "◎"
        },
        {
          "id": "ai19",
          "label": "Polsia",
          "url": "https://polsia.com/dashboard/vulpineos",
          "color": "#a78bfa",
          "icon": "⬡"
        },
        {
          "id": "ai20",
          "label": "xAI Console",
          "url": "https://console.x.ai/team/bfcdb2ab-e8e0-42ad-939d-fe8ab681bbfc",
          "color": "#eaf0f6",
          "icon": "✕"
        },
        {
          "id": "ai21",
          "label": "LiveKit Cloud",
          "url": "https://cloud.livekit.io/",
          "color": "#f97316",
          "icon": "◉"
        },
        {
          "id": "ai22",
          "label": "FastGPT",
          "url": "https://fastgpt.cn/en",
          "color": "#22d3ee",
          "icon": "⚡"
        },
        {
          "id": "ai23",
          "label": "Mistral Console",
          "url": "https://console.mistral.ai/home",
          "color": "#ff7700",
          "icon": "◈"
        },
        {
          "id": "ai24",
          "label": "Prompt Genie",
          "url": "https://www.prompt-genie.com/dashboard",
          "color": "#a78bfa",
          "icon": "◇"
        },
        {
          "id": "ai25",
          "label": "ZhipuAI",
          "url": "https://open.bigmodel.cn/",
          "color": "#38bdf8",
          "icon": "◉"
        },
        {
          "id": "ai26",
          "label": "DeepSeek Platform",
          "url": "https://platform.deepseek.com/api_keys",
          "color": "#4f9cf9",
          "icon": "⊠"
        },
        {
          "id": "ai27",
          "label": "HuggingFace",
          "url": "https://huggingface.co/",
          "color": "#fbbf24",
          "icon": "◉"
        },
        {
          "id": "ai28",
          "label": "Creatify",
          "url": "https://app.creatify.ai/home",
          "color": "#a78bfa",
          "icon": "▶"
        },
        {
          "id": "ai29",
          "label": "Clipto",
          "url": "https://www.clipto.com/apps/transcription",
          "color": "#22d3ee",
          "icon": "◎"
        },
        {
          "id": "ai30",
          "label": "ToolFK",
          "url": "https://www.toolfk.com/",
          "color": "#f97316",
          "icon": "⊞"
        },
        {
          "id": "ai31",
          "label": "Zencoder",
          "url": "https://zencoder.ai/",
          "color": "#4ade80",
          "icon": "⌥"
        },
        {
          "id": "ai32",
          "label": "DeepSite",
          "url": "https://enzostvs-deepsite.hf.space/",
          "color": "#fbbf24",
          "icon": "✦"
        },
        {
          "id": "ai33",
          "label": "Roo Code",
          "url": "https://roocode.com/",
          "color": "#4ade80",
          "icon": "⌥"
        },
        {
          "id": "ai34",
          "label": "Lambda Cloud",
          "url": "https://cloud.lambda.ai/instances",
          "color": "#a78bfa",
          "icon": "λ"
        },
        {
          "id": "ai35",
          "label": "Collaby AI",
          "url": "https://collaby.ai/",
          "color": "#22d3ee",
          "icon": "◈"
        },
        {
          "id": "ai36",
          "label": "LiveKit",
          "url": "https://livekit.io/",
          "color": "#f97316",
          "icon": "◉"
        },
        {
          "id": "ai37",
          "label": "Anthropic Console",
          "url": "https://console.anthropic.com/dashboard",
          "color": "#e8622a",
          "icon": "◈"
        },
        {
          "id": "ai38",
          "label": "OpenAI Platform",
          "url": "https://platform.openai.com/chat",
          "color": "#10a37f",
          "icon": "◆"
        },
        {
          "id": "ai39",
          "label": "AI Studio",
          "url": "https://aistudio.google.com/",
          "color": "#4285f4",
          "icon": "⬡"
        },
        {
          "id": "ai40",
          "label": "Lovable",
          "url": "https://lovable.dev/",
          "color": "#f97316",
          "icon": "◇"
        }
      ]
    },
    {
      "id": "s_dev",
      "label": "Dev & Infrastructure",
      "filter": "dev",
      "priority": true,
      "cards": [
        {
          "id": "dv1",
          "label": "GitHub (Mine)",
          "url": "https://github.com/rosegoldcruz?tab=repositories",
          "color": "#eaf0f6",
          "icon": "⌥"
        },
        {
          "id": "dv2",
          "label": "GitHub",
          "url": "https://github.com/",
          "color": "#eaf0f6",
          "icon": "⌥"
        },
        {
          "id": "dv3",
          "label": "GitLab AEON",
          "url": "https://gitlab.com/aeon9855232",
          "color": "#fc6d26",
          "icon": "⌥"
        },
        {
          "id": "dv4",
          "label": "Vercel",
          "url": "https://vercel.com/elohim",
          "color": "#eaf0f6",
          "icon": "△"
        },
        {
          "id": "dv5",
          "label": "v0 by Vercel",
          "url": "https://v0.dev/",
          "color": "#eaf0f6",
          "icon": "△"
        },
        {
          "id": "dv6",
          "label": "Supabase",
          "url": "https://supabase.com/dashboard",
          "color": "#3ecf8e",
          "icon": "◉"
        },
        {
          "id": "dv7",
          "label": "Supabase Keys",
          "url": "https://supabase.com/dashboard/project/rlprgoppztcdvlodkdqr/settings/api-keys",
          "color": "#3ecf8e",
          "icon": "⊠"
        },
        {
          "id": "dv8",
          "label": "Airtable",
          "url": "https://airtable.com/",
          "color": "#2d7be5",
          "icon": "⊞"
        },
        {
          "id": "dv9",
          "label": "Stripe",
          "url": "https://dashboard.stripe.com/",
          "color": "#635bff",
          "icon": "⊠"
        },
        {
          "id": "dv10",
          "label": "n8n AEON",
          "url": "https://n8n.aeondial.com/",
          "color": "#f97316",
          "icon": "⟳"
        },
        {
          "id": "dv11",
          "label": "ZITADEL",
          "url": "https://zitadel.com/admin/dashboard",
          "color": "#22d3ee",
          "icon": "◈"
        },
        {
          "id": "dv12",
          "label": "Cloudflare",
          "url": "https://dash.cloudflare.com/",
          "color": "#f6821f",
          "icon": "☁"
        },
        {
          "id": "dv13",
          "label": "Cloudflare One",
          "url": "https://one.dash.cloudflare.com/",
          "color": "#f6821f",
          "icon": "☁"
        },
        {
          "id": "dv14",
          "label": "Clerk",
          "url": "https://dashboard.clerk.com/",
          "color": "#6c47ff",
          "icon": "◈"
        },
        {
          "id": "dv15",
          "label": "Railway",
          "url": "https://railway.com/dashboard",
          "color": "#c084fc",
          "icon": "◈"
        },
        {
          "id": "dv16",
          "label": "DigitalOcean",
          "url": "https://cloud.digitalocean.com/",
          "color": "#0080ff",
          "icon": "◎"
        },
        {
          "id": "dv17",
          "label": "Hivelocity",
          "url": "https://my.hivelocity.net/auth/login",
          "color": "#a78bfa",
          "icon": "▣"
        },
        {
          "id": "dv18",
          "label": "Hetzner",
          "url": "https://console.hetzner.com/",
          "color": "#d50c2d",
          "icon": "▣"
        },
        {
          "id": "dv19",
          "label": "vast.ai",
          "url": "https://cloud.vast.ai/",
          "color": "#22d3ee",
          "icon": "▣"
        },
        {
          "id": "dv20",
          "label": "Lightning AI",
          "url": "https://lightning.ai/",
          "color": "#fbbf24",
          "icon": "⚡"
        },
        {
          "id": "dv21",
          "label": "Replicate",
          "url": "https://replicate.com/",
          "color": "#eaf0f6",
          "icon": "◉"
        },
        {
          "id": "dv22",
          "label": "Windsurf",
          "url": "https://windsurf.com/",
          "color": "#22d3ee",
          "icon": "⋈"
        },
        {
          "id": "dv23",
          "label": "Cursor",
          "url": "https://cursor.com/en",
          "color": "#eaf0f6",
          "icon": "⌥"
        },
        {
          "id": "dv24",
          "label": "Augment",
          "url": "https://app.augmentcode.com/account/subscription",
          "color": "#4ade80",
          "icon": "⌥"
        },
        {
          "id": "dv25",
          "label": "Sentry",
          "url": "https://aeon-investments-technologies.sentry.io/dashboards/",
          "color": "#f87171",
          "icon": "◈"
        },
        {
          "id": "dv26",
          "label": "PostHog",
          "url": "https://us.posthog.com/project/192816",
          "color": "#fbbf24",
          "icon": "◉"
        },
        {
          "id": "dv27",
          "label": "Zapier",
          "url": "https://zapier.com/app/home",
          "color": "#ff4a00",
          "icon": "⟳"
        },
        {
          "id": "dv28",
          "label": "ngrok",
          "url": "https://dashboard.ngrok.com/",
          "color": "#22d3ee",
          "icon": "◈"
        },
        {
          "id": "dv29",
          "label": "anything.world",
          "url": "https://app.anything.world/",
          "color": "#a78bfa",
          "icon": "⬡"
        },
        {
          "id": "dv30",
          "label": "Emergent",
          "url": "https://app.emergent.sh/",
          "color": "#22d3ee",
          "icon": "⚡"
        },
        {
          "id": "dv31",
          "label": "Famous.ai",
          "url": "https://famous.ai/",
          "color": "#a78bfa",
          "icon": "✦"
        },
        {
          "id": "dv32",
          "label": "Tripo3D",
          "url": "https://studio.tripo3d.ai/",
          "color": "#22d3ee",
          "icon": "◉"
        },
        {
          "id": "dv33",
          "label": "Sketchfab",
          "url": "https://sketchfab.com/",
          "color": "#1caad9",
          "icon": "◉"
        },
        {
          "id": "dv34",
          "label": "Notion",
          "url": "https://www.notion.so/",
          "color": "#eaf0f6",
          "icon": "◻"
        },
        {
          "id": "dv35",
          "label": "Publer",
          "url": "https://app.publer.com/",
          "color": "#4285f4",
          "icon": "◈"
        },
        {
          "id": "dv36",
          "label": "Outlier",
          "url": "https://app.outlier.ai/v2",
          "color": "#22d3ee",
          "icon": "◎"
        },
        {
          "id": "dv37",
          "label": "EmailJS",
          "url": "https://dashboard.emailjs.com/admin",
          "color": "#f97316",
          "icon": "✉"
        },
        {
          "id": "dv38",
          "label": "Web3Forms",
          "url": "https://web3forms.com/",
          "color": "#4ade80",
          "icon": "◈"
        },
        {
          "id": "dv39",
          "label": "Formspree",
          "url": "https://formspree.io/",
          "color": "#f97316",
          "icon": "◻"
        },
        {
          "id": "dv40",
          "label": "FB Developers",
          "url": "https://developers.facebook.com/apps",
          "color": "#0866ff",
          "icon": "⬡"
        },
        {
          "id": "dv41",
          "label": "Apify",
          "url": "https://console.apify.com/actors/YJCnS9qogi9XxDgLB/input",
          "color": "#22d3ee",
          "icon": "⟳"
        },
        {
          "id": "dv42",
          "label": "QR Generator",
          "url": "https://goqr.me/",
          "color": "#4ade80",
          "icon": "⊞"
        },
        {
          "id": "dv43",
          "label": "iLovePDF",
          "url": "https://www.ilovepdf.com/",
          "color": "#f87171",
          "icon": "◈"
        },
        {
          "id": "dv44",
          "label": "PDF24",
          "url": "https://tools.pdf24.org/en/",
          "color": "#f97316",
          "icon": "◈"
        },
        {
          "id": "dv45",
          "label": "Taskade",
          "url": "https://www.taskade.com/",
          "color": "#a78bfa",
          "icon": "◻"
        },
        {
          "id": "dv46",
          "label": "UX Pilot",
          "url": "https://uxpilot.ai/a",
          "color": "#a78bfa",
          "icon": "◇"
        },
        {
          "id": "dv47",
          "label": "Sourceforge",
          "url": "https://sourceforge.net/",
          "color": "#22d3ee",
          "icon": "◈"
        }
      ]
    },
    {
      "id": "s_admin",
      "label": "Admin & Email",
      "filter": "admin",
      "priority": true,
      "cards": [
        {
          "id": "ad1",
          "label": "Gmail",
          "url": "https://mail.google.com/mail/u/0/#inbox",
          "color": "#ea4335",
          "icon": "✉"
        },
        {
          "id": "ad2",
          "label": "NEO MAiL",
          "url": "https://app.neo.space/mail/",
          "color": "#38bdf8",
          "icon": "✉"
        },
        {
          "id": "ad3",
          "label": "Mercury",
          "url": "https://app.mercury.com/login",
          "color": "#22d3ee",
          "icon": "⊠"
        },
        {
          "id": "ad4",
          "label": "Stripe",
          "url": "https://dashboard.stripe.com/",
          "color": "#635bff",
          "icon": "⊠"
        },
        {
          "id": "ad5",
          "label": "Vertex AI",
          "url": "https://console.cloud.google.com/vertex-ai/studio",
          "color": "#4285f4",
          "icon": "⬡"
        },
        {
          "id": "ad6",
          "label": "Google Cloud",
          "url": "https://console.cloud.google.com/",
          "color": "#4285f4",
          "icon": "☁"
        },
        {
          "id": "ad7",
          "label": "Drive",
          "url": "https://drive.google.com/",
          "color": "#4285f4",
          "icon": "◈"
        },
        {
          "id": "ad8",
          "label": "Google Admin",
          "url": "https://admin.google.com/",
          "color": "#4285f4",
          "icon": "⬡"
        },
        {
          "id": "ad9",
          "label": "Remote Desktop",
          "url": "https://remotedesktop.google.com/access/",
          "color": "#4285f4",
          "icon": "◉"
        },
        {
          "id": "ad10",
          "label": "Google Photos",
          "url": "https://photos.google.com/",
          "color": "#ea4335",
          "icon": "◇"
        },
        {
          "id": "ad11",
          "label": "Microsoft Admin",
          "url": "https://admin.microsoft.com/AdminPortal/",
          "color": "#0078d4",
          "icon": "⊞"
        },
        {
          "id": "ad12",
          "label": "Azure",
          "url": "https://portal.azure.com/",
          "color": "#0078d4",
          "icon": "☁"
        },
        {
          "id": "ad13",
          "label": "M365 Copilot",
          "url": "https://m365.cloud.microsoft/search/",
          "color": "#0078d4",
          "icon": "◈"
        },
        {
          "id": "ad14",
          "label": "GHL Vulpine",
          "url": "https://app.gohighlevel.com/v2/location/OOxBz4Jalnuam4eNqhvD/memberships/client-portal/dashboard",
          "color": "#25d366",
          "icon": "⬡"
        },
        {
          "id": "ad15",
          "label": "Spotify",
          "url": "https://open.spotify.com/",
          "color": "#1db954",
          "icon": "♪"
        },
        {
          "id": "ad16",
          "label": "Telegram",
          "url": "https://my.telegram.org/",
          "color": "#229ed9",
          "icon": "✈"
        },
        {
          "id": "ad17",
          "label": "Canva",
          "url": "https://www.canva.com/",
          "color": "#00c4cc",
          "icon": "◇"
        }
      ]
    },
    {
      "id": "s_proj",
      "label": "Live Projects & Domains",
      "filter": "projects",
      "priority": false,
      "cards": [
        {
          "id": "pr1",
          "label": "AEON OPS",
          "url": "https://aeonops.com/",
          "color": "#f97316",
          "icon": "◈",
          "badge": "wip"
        },
        {
          "id": "pr2",
          "label": "AEON CRM Dialer",
          "url": "https://ivsol.aeondial.com/dialer",
          "color": "#f97316",
          "icon": "☎",
          "badge": "wip"
        },
        {
          "id": "pr3",
          "label": "AEON DIAL",
          "url": "https://www.aeondial.com/",
          "color": "#f97316",
          "icon": "☎",
          "badge": "wip"
        },
        {
          "id": "pr4",
          "label": "Diversified OS",
          "url": "https://app.snrglabs.com/dashboard",
          "color": "#22d3ee",
          "icon": "◈",
          "badge": "wip"
        },
        {
          "id": "pr5",
          "label": "Vulpine Homes",
          "url": "https://vulpinehomes.com/",
          "color": "#4ade80",
          "icon": "⌂",
          "badge": "live"
        },
        {
          "id": "pr6",
          "label": "ResumeBot",
          "url": "https://jobs.aeoninvestmentstechnologies.com",
          "color": "#4ade80",
          "icon": "◈",
          "badge": "live"
        },
        {
          "id": "pr7",
          "label": "Mashburn",
          "url": "https://mashburn.vercel.app",
          "color": "#4ade80",
          "icon": "◈",
          "badge": "live"
        },
        {
          "id": "pr8",
          "label": "Iron Vault Token",
          "url": "https://ironvaulttoken.com/",
          "color": "#fbbf24",
          "icon": "▣",
          "badge": "wip"
        },
        {
          "id": "pr9",
          "label": "AEON Protocol",
          "url": "https://www.aeonprotocol.com/",
          "color": "#a78bfa",
          "icon": "◈",
          "badge": "live"
        },
        {
          "id": "pr10",
          "label": "ATOM DeFi",
          "url": "https://www.atomdefi.tech/",
          "color": "#4f9cf9",
          "icon": "⬡"
        },
        {
          "id": "pr11",
          "label": "Vulpine LLC",
          "url": "https://vulpine.llc/",
          "color": "#f97316",
          "icon": "◇",
          "badge": "live"
        },
        {
          "id": "pr12",
          "label": "SNRG Labs",
          "url": "https://www.snrglabs.com/",
          "color": "#f97316",
          "icon": "▣",
          "badge": "live"
        },
        {
          "id": "pr13",
          "label": "G3 Contracting",
          "url": "https://www.g3homeremodel.com/",
          "color": "#4ade80",
          "icon": "⌂",
          "badge": "live"
        },
        {
          "id": "pr14",
          "label": "Raw2Recruited",
          "url": "https://www.raw2recruited.com/",
          "color": "#4ade80",
          "icon": "◉",
          "badge": "live"
        },
        {
          "id": "pr15",
          "label": "AEON Investments",
          "url": "https://aeoninvestmentstechnologies.com/",
          "color": "#f97316",
          "icon": "◈",
          "badge": "live"
        },
        {
          "id": "pr16",
          "label": "smart4technology",
          "url": "https://smart4technology.com/",
          "color": "#22d3ee",
          "icon": "⬡"
        }
      ]
    },
    {
      "id": "s_video",
      "label": "Video Generation",
      "filter": "video",
      "priority": false,
      "cards": [
        {
          "id": "vd1",
          "label": "Hailuo AI",
          "url": "https://hailuoai.video/",
          "color": "#a78bfa",
          "icon": "▶"
        },
        {
          "id": "vd2",
          "label": "WaveSpeed AI",
          "url": "https://wavespeed.ai/models/wavespeed-ai/video-outpainter",
          "color": "#22d3ee",
          "icon": "⋈"
        },
        {
          "id": "vd3",
          "label": "Leonardo AI",
          "url": "https://leonardo.ai/",
          "color": "#a78bfa",
          "icon": "✦"
        },
        {
          "id": "vd4",
          "label": "Kling AI",
          "url": "https://app.klingai.com/global/",
          "color": "#f97316",
          "icon": "▶"
        },
        {
          "id": "vd5",
          "label": "Runway",
          "url": "https://app.runwayml.com/",
          "color": "#eaf0f6",
          "icon": "▶"
        },
        {
          "id": "vd6",
          "label": "InVideo",
          "url": "https://invideo.io/",
          "color": "#22d3ee",
          "icon": "▶"
        },
        {
          "id": "vd7",
          "label": "RepublicLabs",
          "url": "https://republiclabs.ai/",
          "color": "#f87171",
          "icon": "◈"
        },
        {
          "id": "vd8",
          "label": "Creatify",
          "url": "https://app.creatify.ai/home",
          "color": "#a78bfa",
          "icon": "▶"
        },
        {
          "id": "vd9",
          "label": "Synthesia",
          "url": "https://www.synthesia.io/",
          "color": "#22d3ee",
          "icon": "▶"
        },
        {
          "id": "vd10",
          "label": "LTX Studio",
          "url": "https://ltx.studio/",
          "color": "#f97316",
          "icon": "▶"
        },
        {
          "id": "vd11",
          "label": "Visla",
          "url": "https://www.visla.us/",
          "color": "#38bdf8",
          "icon": "▶"
        },
        {
          "id": "vd12",
          "label": "Luma Ray2",
          "url": "https://lumalabs.ai/ray",
          "color": "#a78bfa",
          "icon": "◎"
        },
        {
          "id": "vd13",
          "label": "Banuba AR",
          "url": "https://www.banuba.com/",
          "color": "#22d3ee",
          "icon": "◎"
        },
        {
          "id": "vd14",
          "label": "Midjourney",
          "url": "https://www.midjourney.com/home",
          "color": "#eaf0f6",
          "icon": "◇"
        },
        {
          "id": "vd15",
          "label": "makewebvideo",
          "url": "https://www.makewebvideo.com/",
          "color": "#f97316",
          "icon": "▶"
        }
      ]
    },
    {
      "id": "s_tel",
      "label": "Telephony & Comms",
      "filter": "telephony",
      "priority": false,
      "cards": [
        {
          "id": "tl1",
          "label": "GHL AEON Dial",
          "url": "https://app.gohighlevel.com/v2/location/XtWqMQz9pdgAJtERl7Ik/dashboard",
          "color": "#25d366",
          "icon": "☎"
        },
        {
          "id": "tl2",
          "label": "Telnyx Portal",
          "url": "https://portal.telnyx.com/#/login/sign-in",
          "color": "#00bcd4",
          "icon": "◈"
        },
        {
          "id": "tl3",
          "label": "Telnyx",
          "url": "https://telnyx.com/",
          "color": "#00bcd4",
          "icon": "◎"
        },
        {
          "id": "tl4",
          "label": "Twilio",
          "url": "https://www.twilio.com/en-us",
          "color": "#f22f46",
          "icon": "☎"
        },
        {
          "id": "tl5",
          "label": "VoIP.ms",
          "url": "https://voip.ms/signin/index.php?ln=en",
          "color": "#22d3ee",
          "icon": "☎"
        },
        {
          "id": "tl6",
          "label": "DIDforSale",
          "url": "https://www.didforsale.com/",
          "color": "#38bdf8",
          "icon": "☎"
        },
        {
          "id": "tl7",
          "label": "3CX",
          "url": "https://1559.3cx.cloud/",
          "color": "#a78bfa",
          "icon": "☎"
        },
        {
          "id": "tl8",
          "label": "AEON Dial Agent",
          "url": "https://api.aeondial.com/agent.html",
          "color": "#f97316",
          "icon": "☎"
        },
        {
          "id": "tl9",
          "label": "ICT Innovations",
          "url": "https://service.ictinnovations.com/",
          "color": "#22d3ee",
          "icon": "◈"
        },
        {
          "id": "tl10",
          "label": "GOautodial v4",
          "url": "https://goautodial.org/news/66",
          "color": "#4ade80",
          "icon": "☎"
        },
        {
          "id": "tl11",
          "label": "RefaceKit.sbs",
          "url": "https://refacekit.sbs/",
          "color": "#f87171",
          "icon": "◈"
        },
        {
          "id": "tl12",
          "label": "BuildingConnected",
          "url": "https://app.buildingconnected.com/",
          "color": "#f97316",
          "icon": "⊞"
        }
      ]
    },
    {
      "id": "s_ui",
      "label": "UI Libraries & Components",
      "filter": "ui",
      "priority": false,
      "cards": [
        {
          "id": "ui1",
          "label": "shadcn/ui",
          "url": "https://ui.shadcn.com/docs/components",
          "color": "#eaf0f6",
          "icon": "◻"
        },
        {
          "id": "ui2",
          "label": "MUI",
          "url": "https://mui.com/",
          "color": "#007fff",
          "icon": "⊞"
        },
        {
          "id": "ui3",
          "label": "Untitled UI",
          "url": "https://www.untitledui.com/react",
          "color": "#a78bfa",
          "icon": "◇"
        },
        {
          "id": "ui4",
          "label": "Motion Primitives",
          "url": "https://motion-primitives.com/",
          "color": "#22d3ee",
          "icon": "⋈"
        },
        {
          "id": "ui5",
          "label": "Animata",
          "url": "https://animata.design/docs/accordion/faq",
          "color": "#f97316",
          "icon": "⋈"
        },
        {
          "id": "ui6",
          "label": "hover.dev",
          "url": "https://www.hover.dev/components",
          "color": "#a78bfa",
          "icon": "⋈"
        },
        {
          "id": "ui7",
          "label": "Animate UI",
          "url": "https://animate-ui.com/docs/components",
          "color": "#22d3ee",
          "icon": "⋈"
        },
        {
          "id": "ui8",
          "label": "DynaUI",
          "url": "https://www.dynaui.design/",
          "color": "#f97316",
          "icon": "◇"
        },
        {
          "id": "ui9",
          "label": "React Bits",
          "url": "https://www.reactbits.dev/",
          "color": "#38bdf8",
          "icon": "◈"
        },
        {
          "id": "ui10",
          "label": "Magic UI",
          "url": "https://magicui.design/",
          "color": "#a78bfa",
          "icon": "✦"
        },
        {
          "id": "ui11",
          "label": "Aceternity UI",
          "url": "https://ui.aceternity.com/components",
          "color": "#22d3ee",
          "icon": "◎"
        },
        {
          "id": "ui12",
          "label": "Uiverse",
          "url": "https://uiverse.io/elements",
          "color": "#f97316",
          "icon": "◈"
        },
        {
          "id": "ui13",
          "label": "Preline UI",
          "url": "https://preline.co/docs/index.html",
          "color": "#38bdf8",
          "icon": "◻"
        },
        {
          "id": "ui14",
          "label": "coss UI",
          "url": "https://coss.com/ui/docs",
          "color": "#eaf0f6",
          "icon": "◻"
        },
        {
          "id": "ui15",
          "label": "Swiper API",
          "url": "https://swiperjs.com/swiper-api",
          "color": "#f97316",
          "icon": "⋈"
        },
        {
          "id": "ui16",
          "label": "UX Pilot",
          "url": "https://uxpilot.ai/a",
          "color": "#a78bfa",
          "icon": "◇"
        }
      ]
    },
    {
      "id": "s_google",
      "label": "Google Workspace",
      "filter": "google",
      "priority": false,
      "cards": [
        {
          "id": "gg1",
          "label": "Sheets",
          "url": "https://docs.google.com/spreadsheets/u/1/",
          "color": "#34a853",
          "icon": "⊞"
        },
        {
          "id": "gg2",
          "label": "Docs",
          "url": "https://docs.google.com/document/u/1/",
          "color": "#4285f4",
          "icon": "◻"
        },
        {
          "id": "gg3",
          "label": "Slides",
          "url": "https://docs.google.com/presentation/u/1/",
          "color": "#fbbc04",
          "icon": "◇"
        },
        {
          "id": "gg4",
          "label": "Calendar",
          "url": "https://calendar.google.com/calendar/u/1/r",
          "color": "#4285f4",
          "icon": "◷"
        },
        {
          "id": "gg5",
          "label": "Google One",
          "url": "https://one.google.com/u/1/home",
          "color": "#4285f4",
          "icon": "◉"
        },
        {
          "id": "gg6",
          "label": "NotebookLM",
          "url": "https://notebooklm.google.com/",
          "color": "#4285f4",
          "icon": "◻"
        },
        {
          "id": "gg7",
          "label": "Analytics",
          "url": "https://analytics.google.com/",
          "color": "#f97316",
          "icon": "◉"
        },
        {
          "id": "gg8",
          "label": "Google Ads",
          "url": "https://ads.google.com/",
          "color": "#34a853",
          "icon": "⬡"
        },
        {
          "id": "gg9",
          "label": "Google Vids",
          "url": "https://docs.google.com/videos/d/13sk0GalrJ9eQ6B2fKNFoyPz9AuNedGCtwOQKVnocp9A/edit",
          "color": "#ea4335",
          "icon": "▶"
        },
        {
          "id": "gg10",
          "label": "Google Account",
          "url": "https://myaccount.google.com/u/0/",
          "color": "#4285f4",
          "icon": "◎"
        },
        {
          "id": "gg11",
          "label": "Apollo",
          "url": "https://app.apollo.io/#/onboarding-hub/queue",
          "color": "#f97316",
          "icon": "◈"
        },
        {
          "id": "gg12",
          "label": "Hunter.io",
          "url": "https://hunter.io/dashboard",
          "color": "#f97316",
          "icon": "◎"
        },
        {
          "id": "gg13",
          "label": "People Data Labs",
          "url": "https://dashboard.peopledatalabs.com/",
          "color": "#38bdf8",
          "icon": "◉"
        },
        {
          "id": "gg14",
          "label": "Kixie",
          "url": "https://app.kixie.com/",
          "color": "#22d3ee",
          "icon": "☎"
        }
      ]
    },
    {
      "id": "s_lab",
      "label": "Vercel Lab & Experiments",
      "filter": "lab",
      "priority": false,
      "cards": [
        {
          "id": "lb1",
          "label": "SIGNAL",
          "url": "https://v0-interface-nu-three.vercel.app/",
          "color": "#f97316",
          "icon": "✦",
          "badge": "fav"
        },
        {
          "id": "lb2",
          "label": "Lindy CRM",
          "url": "https://v0-lindy-omega-lake.vercel.app/",
          "color": "#22d3ee",
          "icon": "◈",
          "badge": "fav"
        },
        {
          "id": "lb3",
          "label": "Modern SaaS",
          "url": "https://v0-le-lo-saa-s-landing-sigma-ivory.vercel.app/",
          "color": "#a78bfa",
          "icon": "◉",
          "badge": "fav"
        },
        {
          "id": "lb4",
          "label": "Aeon v0",
          "url": "https://v0-it-kohl.vercel.app/",
          "color": "#f97316",
          "icon": "◈",
          "badge": "fav"
        },
        {
          "id": "lb5",
          "label": "MORAVEC 04",
          "url": "https://v0-the-future-is-now-drab-theta.vercel.app/",
          "color": "#eaf0f6",
          "icon": "◈"
        },
        {
          "id": "lb6",
          "label": "Sales CRM",
          "url": "https://v0-sales-crm-design-inky.vercel.app/",
          "color": "#22d3ee",
          "icon": "◉"
        },
        {
          "id": "lb7",
          "label": "SaaS Landing",
          "url": "https://v0-saa-s-landing-page-dun-one-85.vercel.app/",
          "color": "#a78bfa",
          "icon": "◇"
        },
        {
          "id": "lb8",
          "label": "OptionsPro",
          "url": "https://options-trading-pro.vercel.app/",
          "color": "#4ade80",
          "icon": "◉"
        },
        {
          "id": "lb9",
          "label": "AI Agent Builder",
          "url": "https://v0-ai-agent-builder-eight-mu.vercel.app/",
          "color": "#f97316",
          "icon": "⬡"
        },
        {
          "id": "lb10",
          "label": "FinBro Dashboard",
          "url": "https://v0-finbro-dashboard-hu.vercel.app/",
          "color": "#4ade80",
          "icon": "◉"
        },
        {
          "id": "lb11",
          "label": "Driftwoods CMS",
          "url": "https://cms-driftwood.vercel.app/admin/dashboard",
          "color": "#f97316",
          "icon": "◻"
        },
        {
          "id": "lb12",
          "label": "Driftwoods POS",
          "url": "https://restaurant-pos-system-vert.vercel.app/menu",
          "color": "#f97316",
          "icon": "⊞"
        },
        {
          "id": "lb13",
          "label": "Frosted Glass CRM",
          "url": "https://v0-frosted-glass-ui-crm-dashboar-seven-lime.vercel.app/",
          "color": "#22d3ee",
          "icon": "◈"
        },
        {
          "id": "lb14",
          "label": "v0 Dashboard",
          "url": "https://v0-dashboard-design-requirements-omega-woad-28.vercel.app/team",
          "color": "#a78bfa",
          "icon": "⊞"
        },
        {
          "id": "lb15",
          "label": "Sambo Admin",
          "url": "https://v0-admin-dashboard-ten-silk.vercel.app/dashboard",
          "color": "#38bdf8",
          "icon": "⊞"
        },
        {
          "id": "lb16",
          "label": "AEON Construction",
          "url": "https://cruz-construction.vercel.app/",
          "color": "#f97316",
          "icon": "⌂"
        },
        {
          "id": "lb17",
          "label": "Vulpine Marketplace",
          "url": "https://futuristic-crm.vercel.app/",
          "color": "#a78bfa",
          "icon": "◈"
        },
        {
          "id": "lb18",
          "label": "Cliste",
          "url": "https://v0-cliste-website-navigation-smoky-phi.vercel.app/",
          "color": "#22d3ee",
          "icon": "◇"
        },
        {
          "id": "lb19",
          "label": "Smart Home",
          "url": "https://v0-modern-smart-home-dashboard-mu-virid.vercel.app/",
          "color": "#4ade80",
          "icon": "⌂"
        },
        {
          "id": "lb20",
          "label": "AEON Digital Lab",
          "url": "https://v0-ein-code-digital-lab-tau-steel.vercel.app/",
          "color": "#f97316",
          "icon": "◈"
        },
        {
          "id": "lb21",
          "label": "Hugo Pet Care",
          "url": "https://v0-proactive-pet-care-gamma.vercel.app/",
          "color": "#4ade80",
          "icon": "◉"
        },
        {
          "id": "lb22",
          "label": "SNRG IT Services",
          "url": "https://snrg-it-services.vercel.app/#testimonials",
          "color": "#f97316",
          "icon": "▣"
        }
      ]
    }
  ]
}
