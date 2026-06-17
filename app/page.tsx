import { loadGalleryImages } from "../src/lib/gallery-loader";
import AuroraBackground from "../src/components/AuroraBackground";
import BiasDetector from "../src/components/BiasDetector";
import CoverSection from "../src/components/CoverSection";
import FinalScene from "../src/components/FinalScene";
import MemberChapter from "../src/components/MemberChapter";
import OT5Collection from "../src/components/OT5Collection";
import MemoryWall from "../src/components/MemoryWall";
import ParticleLayer from "../src/components/ParticleLayer";

const memberOrder = ["martin", "james", "juhoon", "seonghyeon", "keonho"];
const memberNames: Record<string, string> = {
  martin: "Martin",
  james: "James",
  juhoon: "Juhoon",
  seonghyeon: "Seonghyeon",
  keonho: "Keonho",
};

export default function HomePage() {
  const images = loadGalleryImages();
  const groupImages = images.filter((image) => image.group === "group");
  const memberImages = images.filter((image) => memberOrder.includes(image.group));
  const aImages = images.filter((image) => image.group === "a");
  const wallImages = images.filter((image) => image.group === "group" || memberOrder.includes(image.group));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <AuroraBackground />
      <ParticleLayer />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(103,50,255,0.18),_transparent_30%),radial-gradient(circle_at_50%_50%,_rgba(82,164,255,0.12),_transparent_22%)]" />

      <div className="relative z-10">
        <CoverSection image={groupImages[0]} />

        <section id="ot5" className="relative isolate overflow-hidden px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <OT5Collection images={groupImages} />
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-10">
          <div className="mx-auto max-w-7xl space-y-24">
            {memberOrder.map((member, index) => (
              <MemberChapter
                key={member}
                member={memberNames[member]}
                images={images.filter((image) => image.group === member)}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <MemoryWall images={wallImages} />
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <BiasDetector images={memberImages} />
          </div>
        </section>

        <FinalScene />
      </div>
    </main>
  );
}
