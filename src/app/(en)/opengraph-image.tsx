import { createOpenGraphImage, openGraphImageSize } from "@/lib/open-graph-image";

export const alt = "Nguyen Thanh Phu — Software Engineer";
export const size = openGraphImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOpenGraphImage();
}
