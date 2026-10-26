export const siteConfig = {
  name: "Nguyen Thanh Phu",
  email: "thanhphu2643@gmail.com",
  githubUrl: "https://github.com/thanhphu2643",
  linkedinUrl: "",
  resumePath: "/resume/nguyen-thanh-phu-software-engineer.pdf",
  location: "Ho Chi Minh City, Vietnam",
} as const;

export function getSiteUrl(): string {
  return import.meta.env.VITE_SITE_URL || window.location.origin;
}
