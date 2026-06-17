import fs from "fs";
import path from "path";

export type ImageEntry = {
  id: string;
  src: string;
  alt: string;
  group: string;
  folder: string;
};

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function humanizeLabel(text: string) {
  return text
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\s+/g, " ")
    .trim();
}

export function loadGalleryImages() {
  const publicImagesDir = path.join(process.cwd(), "public", "images");
  const entries: ImageEntry[] = [];

  if (!fs.existsSync(publicImagesDir)) {
    return entries;
  }

  const folders = fs.readdirSync(publicImagesDir, { withFileTypes: true });

  for (const folder of folders) {
    if (!folder.isDirectory()) continue;
    const folderName = folder.name;
    const folderPath = path.join(publicImagesDir, folderName);
    const files = fs.readdirSync(folderPath, { withFileTypes: true });

    for (const file of files) {
      if (!file.isFile()) continue;
      const extension = path.extname(file.name).toLowerCase();
      if (!imageExtensions.includes(extension)) continue;

      const id = `${folderName}-${file.name}`;
      const src = `/images/${folderName}/${file.name}`;
      const alt = `${folderName} ${humanizeLabel(file.name.replace(extension, ""))}`;

      entries.push({
        id,
        src,
        alt,
        group: folderName,
        folder: folderName,
      });
    }
  }

  return entries.sort((a, b) => a.id.localeCompare(b.id));
}
