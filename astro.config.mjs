// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import lucode from "lucode-starlight";

import mdx from "@astrojs/mdx";

import playformCompress from "@playform/compress";

import compressor from "astro-compressor";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://arg.mcds.moe",

  integrations: [
    starlight({
      title: "Minecodes' ARG Wiki",
      plugins: [
        lucode({
          navLinks: [
            {
              label: "Murder Drones",
              link: "/glitch/murder-drones/disclaimer",
            },
          ],
        }),
      ],
      social: [
        {
          icon: "codeberg",
          label: "Codeberg",
          href: "https://codeberg.org/Minecodes/arg.mcds.moe",
        },
      ],
      /**sidebar: [
    {
      label: "Guides",
      items: [
        // Each item here is one entry in the navigation menu.
        { label: "Example Guide", slug: "guides/example" },
      ],
    },
    {
      label: "Reference",
      items: [{ autogenerate: { directory: "reference" } }],
    },
  ],**/
    }),
    mdx(),
    playformCompress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      JSON: true,
      SVG: true,
    }),
    compressor({ gzip: true, brotli: true }),
  ],

  adapter: vercel(),
});