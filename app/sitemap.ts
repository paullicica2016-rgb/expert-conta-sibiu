import type { MetadataRoute } from "next";
const base = "https://expert-conta-sibiu.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/confidentialitate"].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : .7 })); }
