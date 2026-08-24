export const siteConfig = {
  name: "Nguyen Thanh Phu",
  email: "thanhphu2643@gmail.com",
  githubUrl: "https://github.com/thanhphu2643",
  linkedinUrl: "",
  resumePath: "/resume/nguyen-thanh-phu-software-engineer.pdf",
  location: "Ho Chi Minh City, Vietnam",
} as const;

export function getSiteUrl(): URL {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");
}
