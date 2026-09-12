import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/playbook", "/playbook/", "/invitacion", "/invitacion/"],
    },
    sitemap: "https://www.gambitholabs.com/sitemap.xml",
  };
}
