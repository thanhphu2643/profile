import { createOpenGraphImage, openGraphImageSize } from "@/lib/open-graph-image";

export const alt = "Nguyễn Thanh Phú — Kỹ sư phần mềm";
export const size = openGraphImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOpenGraphImage();
}
