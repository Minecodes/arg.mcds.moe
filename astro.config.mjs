// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import lucode from "lucode-starlight";

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
  ],
});
