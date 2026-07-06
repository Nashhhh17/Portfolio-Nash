type ProjectSection = {
  heading: string;
  paragraphs: string[];
};

export default function ProjectDescription({
  sections,
}: {
  sections: ProjectSection[];
}) {
  return (
    <section className="max-w-3xl px-6 py-20 sm:px-12 lg:px-20">
      <div className="flex flex-col gap-14">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="mb-4 text-[1.25rem] font-bold tracking-tight text-white">
              {section.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-[0.95rem] font-regular leading-relaxed text-[#FFFFFF]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}