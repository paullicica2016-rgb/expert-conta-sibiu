import type { MetadataRoute } from "next";
const base = "https://expert-conta-sibiu.fairy-pear-0325.chatgpt.site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/servicii", "/contabilitate-sibiu", "/consultanta-fiscala-sibiu", "/salarizare-sibiu", "/infiintare-firma-sibiu", "/despre", "/contact", "/blog"].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : .7 })); }
