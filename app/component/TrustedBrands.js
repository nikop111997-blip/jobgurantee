"use client";

const companyLogos = [
  {
    name: "Company 1",
    image: "https://grras.com/wp-content/uploads/2025/02/hp1.png",
  },
  {
    name: "Company 2",
    image: "https://grras.com/wp-content/uploads/2025/02/hp2.png",
  },
  {
    name: "Company 3",
    image: "https://grras.com/wp-content/uploads/2025/02/hp3.png",
  },
  {
    name: "Company 4",
    image: "https://grras.com/wp-content/uploads/2025/02/hp4.png",
  },
  {
    name: "Company 5",
    image: "https://grras.com/wp-content/uploads/2025/02/hp5.png",
  },
  {
    name: "Company 6",
    image: "https://grras.com/wp-content/uploads/2025/02/hp6.png",
  },
  {
    name: "Company 7",
    image: "https://grras.com/wp-content/uploads/2025/02/hp7.png",
  },
  {
    name: "Company 8",
    image: "https://grras.com/wp-content/uploads/2025/02/hp8.png",
  },
  {
    name: "Company 9",
    image: "https://grras.com/wp-content/uploads/2025/02/hp9.png",
  },
  {
    name: "Company 10",
    image: "https://grras.com/wp-content/uploads/2025/02/hp10.png",
  },
];

function LogoRow({ logos, reverse = false }) {
  // Repeat logos to create a seamless scrolling effect
  const repeatedLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ];

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <div
        className={`flex w-max items-center gap-8 md:gap-12 ${
          reverse ? "animate-logo-reverse" : "animate-logo"
        }`}
      >
        {repeatedLogos.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="
              flex
              h-10
              w-[90px]
              shrink-0
              items-center
              justify-center
              sm:w-[100px]
              md:h-12
              md:w-[115px]
            "
          >
            <img
              src={company.image}
              alt={company.name}
              className="
                max-h-7
                max-w-[80px]
                object-contain
                sm:max-h-8
                sm:max-w-[90px]
                md:max-h-10
                md:max-w-[105px]
              "
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrustedBrands() {
  const rowOne = companyLogos.slice(0, 5);
  const rowTwo = companyLogos.slice(5, 10);

  return (
    <section
      className="
        trusted-brands
        relative
        mx-auto
        w-full
        max-w-[1400px]
        overflow-x-clip
        px-4
        py-12
        sm:px-6
        md:px-2
        md:py-20
      "
    >
      <div className="relative w-full max-w-full">
        {/* CONTENT */}
        <div className="w-full max-w-full">
          {/* LEFT CONTENT */}
          <div className="w-full">
            {/* Badge */}
            <span
              className="
                inline-flex
                rounded-full
                border
                border-orange-300/30
                bg-black
                px-4
                py-2
                text-xs
                font-semibold
                text-white
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]
              "
            >
              Companies That Hire From GRRAS
            </span>

            {/* Heading */}
            <h2
              className="
                mt-4
                text-3xl
                font-bold
                leading-tight
                text-slate-900
                md:text-4xl
              "
            >
              Where skills meet{" "}
              <span className="text-orange-600">
                career opportunities.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-4xl
                text-sm
                leading-7
                text-slate-600
                md:text-base
              "
            >
              Companies visit GRRAS to connect with skilled professionals
              prepared for opportunities in Linux, Cloud, DevOps and modern IT
              technologies. Through practical training and hands-on learning,
              GRRAS helps learners develop job-ready technical skills that
              employers look for.
            </p>
          </div>

          {/* LOGO CONTAINER */}
          <div
            className="
              relative
              mt-8
              w-full
              max-w-full
              overflow-hidden
              border
              border-dashed
              border-slate-200
              bg-white/70
              p-4
              shadow-sm
              backdrop-blur-sm
              sm:p-6
              md:p-10
            "
          >
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <p
                className="
                  text-xs
                  font-semibold
                  leading-5
                  text-slate-900
                  sm:text-sm
                "
              >
                Technologies and engineering ecosystems shaping modern
                infrastructure
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                  text-slate-500
                  sm:text-sm
                "
              >
                Build skills relevant to modern DevOps, Cloud and AI-powered
                engineering workflows.
              </p>
            </div>

            {/* LEFT FADE */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-10
                h-full
                w-8
                bg-gradient-to-r
                from-white
                via-white/70
                to-transparent
                sm:w-16
                md:w-20
              "
            />

            {/* RIGHT FADE */}
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                z-10
                h-full
                w-8
                bg-gradient-to-l
                from-white
                via-white/70
                to-transparent
                sm:w-16
                md:w-20
              "
            />

            {/* LOGO ROWS */}
            <div
              className="
                relative
                z-0
                w-full
                max-w-full
                space-y-6
                overflow-hidden
                sm:space-y-8
              "
            >
              {/* Row 1 */}
              <LogoRow logos={rowOne} />

              {/* Row 2 */}
              <LogoRow
                logos={rowTwo}
                reverse={true}
              />

              {/* Row 3 */}
              <LogoRow
                logos={[
                  companyLogos[2],
                  companyLogos[6],
                  companyLogos[4],
                  companyLogos[8],
                  companyLogos[0],
                ]}
              />
            </div>

            {/* Bottom Message */}
            <div
              className="
                relative
                z-20
                mt-7
                border-t
                border-slate-200
                pt-5
                sm:mt-9
                sm:pt-6
              "
            >
              <p
                className="
                  text-xs
                  leading-6
                  text-slate-600
                  sm:text-sm
                "
              >
                <strong className="text-slate-900">
                  Don't replace your DevOps skills.
                </strong>{" "}
                Upgrade them with AI and prepare to work with intelligent
                infrastructure, AI-powered automation and modern cloud
                environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}