"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { motion, useInView } from "framer-motion";

import {
  DownloadIcon,
  PhoneCall,
  ClipboardCheck,
  Cloud,
  Bot,
  Briefcase,
  Building2,
  BadgeCheck,
  UserPlus,
  Terminal,
  Flag,
  ArrowRight,
  Target,
  Award,
  CheckCircle2,
  RoadIcon,
} from "lucide-react";

/* ============================================================================
   CONFIGURATION
============================================================================ */

const CONFIG = {
  // ------------------------------------------------------------
  // Animation
  // ------------------------------------------------------------

  DWELL_TIME_MS: 1100,

  // Higher = faster
  TRAVEL_SPEED: 0.18,

  INITIAL_DELAY_MS: 700,

  // ------------------------------------------------------------
  // Desktop Road
  // ------------------------------------------------------------

  // Increased overall band height + gap between rows so a card that
  // sits above a road line never collides with the row below it.
  ROAD_BAND_HEIGHT: 1450,

  ROAD_PADDING_X: 180,

  ROAD_Y_ROWS: [280, 760, 1240],

  CORNER_RADIUS: 120,

  ROAD_WIDTH: 36,

  ROAD_COLOR: "#1e293b",

  LINE_COLOR: "#ffffff",

  LINE_DASH: "12 18",

  // ------------------------------------------------------------
  // Cards
  // ------------------------------------------------------------

  CARD_WIDTH: 280,

  // Shorter card (less padding / tighter line-height below) so it
  // fits cleanly in the gap above each road line.
  CARD_HEIGHT_APPROX: 140,

  CARD_GAP: 40,

  // ------------------------------------------------------------
  // Car
  // ------------------------------------------------------------

  // Drop a real car image at /public/car.png (or any path) and set it
  // here to use it instead of the built-in vector car. Leave as null
  // to keep the drawn vector car.
  CAR_IMAGE_SRC: "/car2.png",
};

/* ============================================================================
   STEP THEMES
============================================================================ */

const STEP_THEMES = [
  {
    id: 0,
    from: "#3b82f6",
    to: "#06b6d4",
    text: "#0284c7",
    shadow: "rgba(59,130,246,0.35)",
  },
  {
    id: 1,
    from: "#8b5cf6",
    to: "#d946ef",
    text: "#a21caf",
    shadow: "rgba(139,92,246,0.35)",
  },
  {
    id: 2,
    from: "#ec4899",
    to: "#f43f5e",
    text: "#e11d48",
    shadow: "rgba(236,72,153,0.35)",
  },
  {
    id: 3,
    from: "#f97316",
    to: "#facc15",
    text: "#c2410c",
    shadow: "rgba(249,115,22,0.35)",
  },
  {
    id: 4,
    from: "#10b981",
    to: "#14b8a6",
    text: "#0f766e",
    shadow: "rgba(16,185,129,0.35)",
  },
  {
    id: 5,
    from: "#0ea5e9",
    to: "#3b82f6",
    text: "#0369a1",
    shadow: "rgba(14,165,233,0.35)",
  },
  {
    id: 6,
    from: "#6366f1",
    to: "#8b5cf6",
    text: "#4338ca",
    shadow: "rgba(99,102,241,0.35)",
  },
  {
    id: 7,
    from: "#eab308",
    to: "#f97316",
    text: "#b45309",
    shadow: "rgba(234,179,8,0.35)",
  },
  {
    id: 8,
    from: "#22c55e",
    to: "#10b981",
    text: "#15803d",
    shadow: "rgba(34,197,94,0.35)",
  },
];

/* ============================================================================
   TIMELINE DATA
============================================================================ */

const TIMELINE_DATA = [
  {
    title: "Registration",
    duration: "Start Your Career Journey",
    blurb:
      "Career Goal Discussion, Basic Eligibility Check, and Program Registration.",
    bullets: [
      "Career Goal Discussion",
      "Basic Eligibility Check",
      "Program Registration",
    ],
    icon: UserPlus,
  },

  {
    title: "Interaction & Assessment",
    duration: "Understand. Assess. Personalize.",
    blurb:
      "Career counselling, communication & technical assessments, and personalized learning roadmap.",
    bullets: [
      "Career Counselling",
      "Communication Assessment",
      "Technical Assessment",
      "Learning Roadmap",
    ],
    icon: ClipboardCheck,
  },

  {
    title: "DevOps Foundation",
    duration: "Months 1–4",
    blurb:
      "Linux, Git, Docker, Kubernetes, CI/CD & Automation through hands-on projects.",
    bullets: [
      "Linux & Git",
      "Docker & Kubernetes",
      "CI/CD & Automation",
      "Hands-on Projects",
    ],
    icon: Terminal,
  },

  {
    title: "Cloud Engineering",
    duration: "Months 4–5",
    blurb:
      "AWS / Azure, Infrastructure & Automation, Cloud Deployment, and Real-World Projects.",
    bullets: [
      "AWS / Azure",
      "Infrastructure Automation",
      "Cloud Deployment",
      "Real-World Projects",
    ],
    icon: Cloud,
  },

  {
    title: "GenAI, Agentic AI & MLOps",
    duration: "Months 6–7",
    blurb:
      "Generative AI, Agentic AI Workflows, MLOps, Model Deployment and Capstone.",
    bullets: [
      "Generative AI",
      "Agentic AI Workflows",
      "MLOps & Deployment",
      "AI Capstone",
    ],
    icon: Bot,
  },

  {
    title: "Interview Preparation",
    duration: "Month 8",
    blurb:
      "Deep Technical Preparation, Project & System Design, Scenario-Based Questions.",
    bullets: [
      "Deep Technical Prep",
      "System Design",
      "Scenario Questions",
      "Interview Readiness",
    ],
    icon: Briefcase,
  },

  {
    title: "Internship",
    duration: "Months 9–12",
    blurb:
      "Work on Real Projects, Industry Mentorship, Real Tickets & Performance Reviews.",
    bullets: [
      "Work on Real Projects",
      "Industry Mentorship",
      "Real Tickets",
      "Performance Reviews",
    ],
    icon: Building2,
  },

  {
    title: "Job Offers",
    duration: "Career Launched",
    blurb:
      "Active Placement Support, Real Interview Opportunities, Offer & Salary Guidance.",
    bullets: [
      "Active Placement",
      "Interview Opportunities",
      "Salary Guidance",
      "₹3 LPA+ Guarantee*",
    ],
    icon: BadgeCheck,
  },

  {
    title: "Goal Achieved!",
    duration: "Mission Accomplished",
    blurb:
      "Congratulations! You've successfully transformed your skills into a high-growth career.",
    bullets: [],
    icon: Flag,
    isFlag: true,
  },
];

/* ============================================================================
   ROAD PATH
============================================================================ */

const generateRoadPath = (width) => {
  const L = CONFIG.ROAD_PADDING_X;

  const R = Math.max(
    width - CONFIG.ROAD_PADDING_X,
    L + 300
  );

  const [Y1, Y2, Y3] = CONFIG.ROAD_Y_ROWS;

  const radius = Math.min(
    CONFIG.CORNER_RADIUS,
    (R - L) / 2,
    (Y2 - Y1) / 2,
    (Y3 - Y2) / 2
  );

  return [
    `M -100 ${Y1}`,

    // ----------------------------------------------------------
    // ROW 1
    // ----------------------------------------------------------

    `L ${R - radius} ${Y1}`,

    `A ${radius} ${radius} 0 0 1 ${R} ${
      Y1 + radius
    }`,

    `L ${R} ${Y2 - radius}`,

    // ----------------------------------------------------------
    // RIGHT TURN
    // ----------------------------------------------------------

    `A ${radius} ${radius} 0 0 1 ${
      R - radius
    } ${Y2}`,

    // ----------------------------------------------------------
    // ROW 2
    // ----------------------------------------------------------

    `L ${L + radius} ${Y2}`,

    // ----------------------------------------------------------
    // LEFT TURN
    // ----------------------------------------------------------

    `A ${radius} ${radius} 0 0 0 ${L} ${
      Y2 + radius
    }`,

    `L ${L} ${Y3 - radius}`,

    // ----------------------------------------------------------
    // LEFT TURN
    // ----------------------------------------------------------

    `A ${radius} ${radius} 0 0 0 ${
      L + radius
    } ${Y3}`,

    // ----------------------------------------------------------
    // ROW 3
    // ----------------------------------------------------------

    `L ${width + 100} ${Y3}`,
  ].join(" ");
};

/* ============================================================================
   NODE POSITIONS
============================================================================ */

const calculateNodePositions = (width) => {
  const L = CONFIG.ROAD_PADDING_X;

  const R = Math.max(
    width - CONFIG.ROAD_PADDING_X,
    L + 300
  );

  const M = (L + R) / 2;

  const [Y1, Y2, Y3] = CONFIG.ROAD_Y_ROWS;

  return [
    { x: L, y: Y1 },
    { x: M, y: Y1 },
    { x: R, y: Y1 },

    { x: R, y: Y2 },
    { x: M, y: Y2 },
    { x: L, y: Y2 },

    { x: L, y: Y3 },
    { x: M, y: Y3 },
    { x: R, y: Y3 },
  ];
};

/* ============================================================================
   WINDOW SIZE HOOK
============================================================================ */

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    let resizeTimer;

    const updateSize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100);
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      clearTimeout(resizeTimer);

      window.removeEventListener(
        "resize",
        updateSize
      );
    };
  }, []);

  return size;
};

/* ============================================================================
   MAIN COMPONENT
============================================================================ */

export default function CareerTimeline() {
  const containerRef = useRef(null);

  const pathRef = useRef(null);

  const carGroupRef = useRef(null);

  const animationFrameRef = useRef(null);

  const windowSize = useWindowSize();

  const isMobile =
    windowSize.width > 0 &&
    windowSize.width < 1024;

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.05,
  });

  /* --------------------------------------------------------------------------
     STATE
  -------------------------------------------------------------------------- */

  const [containerWidth, setContainerWidth] =
    useState(1200);

  const [pathData, setPathData] =
    useState("");

  const [nodePositions, setNodePositions] =
    useState([]);

  const [nodeFractions, setNodeFractions] =
    useState([]);

  const [isReady, setIsReady] =
    useState(false);

  const [currentStep, setCurrentStep] =
    useState(-1);

  const [hasVisited, setHasVisited] =
    useState(
      new Array(TIMELINE_DATA.length).fill(false)
    );

  /* ==========================================================================
     MEASURE CONTAINER
  ========================================================================== */

  useLayoutEffect(() => {
    if (isMobile || !containerRef.current) {
      return;
    }

    const element = containerRef.current;

    const updateLayout = () => {
      const width =
        element.getBoundingClientRect().width;

      if (!width || width < 100) {
        return;
      }

      const path = generateRoadPath(width);

      const nodes =
        calculateNodePositions(width);

      setContainerWidth(width);

      setPathData(path);

      setNodePositions(nodes);

      setIsReady(false);
    };

    updateLayout();

    const observer =
      new ResizeObserver(updateLayout);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  /* ==========================================================================
     CALCULATE NODE FRACTIONS
  ========================================================================== */

  useEffect(() => {
    if (
      isMobile ||
      !pathData ||
      !pathRef.current ||
      !nodePositions.length
    ) {
      return;
    }

    let cancelled = false;

    const timer = setTimeout(() => {
      if (cancelled) {
        return;
      }

      try {
        const path = pathRef.current;

        const totalLength =
          path.getTotalLength();

        if (!totalLength) {
          return;
        }

        const fractions =
          nodePositions.map((target) => {
            let bestLength = 0;

            let bestDistance =
              Number.POSITIVE_INFINITY;

            const SAMPLES = 1500;

            for (
              let i = 0;
              i <= SAMPLES;
              i++
            ) {
              const length =
                (i / SAMPLES) *
                totalLength;

              const point =
                path.getPointAtLength(
                  length
                );

              const distance = Math.hypot(
                point.x - target.x,
                point.y - target.y
              );

              if (
                distance <
                bestDistance
              ) {
                bestDistance = distance;

                bestLength = length;
              }
            }

            return bestLength / totalLength;
          });

        /* --------------------------------------------------------------
           Ensure fractions are strictly increasing
        -------------------------------------------------------------- */

        for (
          let i = 1;
          i < fractions.length;
          i++
        ) {
          if (
            fractions[i] <=
            fractions[i - 1]
          ) {
            fractions[i] =
              fractions[i - 1] +
              0.0001;
          }
        }

        setNodeFractions(fractions);

        setIsReady(true);
      } catch (error) {
        console.error(
          "Timeline path measurement failed:",
          error
        );
      }
    }, 100);

    return () => {
      cancelled = true;

      clearTimeout(timer);
    };
  }, [
    pathData,
    nodePositions,
    isMobile,
  ]);

  /* ==========================================================================
     POSITION CAR
  ========================================================================== */

  const positionCar = useCallback(
    (fraction) => {
      if (
        !pathRef.current ||
        !carGroupRef.current
      ) {
        return;
      }

      try {
        const path = pathRef.current;

        const totalLength =
          path.getTotalLength();

        const currentLength =
          fraction * totalLength;

        const point =
          path.getPointAtLength(
            currentLength
          );

        const previousPoint =
          path.getPointAtLength(
            Math.max(
              0,
              currentLength - 3
            )
          );

        const angle =
          Math.atan2(
            point.y -
              previousPoint.y,
            point.x -
              previousPoint.x
          ) *
          (180 / Math.PI);

        carGroupRef.current.setAttribute(
          "transform",
          `translate(${point.x}, ${point.y}) rotate(${angle})`
        );
      } catch (error) {
        console.error(
          "Car positioning failed:",
          error
        );
      }
    },
    []
  );

  /* ==========================================================================
     CAR JOURNEY ENGINE
  ========================================================================== */

  useEffect(() => {
    if (
      isMobile ||
      !isReady ||
      !pathRef.current ||
      !carGroupRef.current ||
      nodeFractions.length !==
        TIMELINE_DATA.length
    ) {
      return;
    }

    let active = true;

    let startTimestamp = null;

    let currentNode = 0;

    let waiting = true;

    let waitStart =
      performance.now();

    /* --------------------------------------------------------------
       Reset state
    -------------------------------------------------------------- */

    setCurrentStep(-1);

    setHasVisited(
      new Array(
        TIMELINE_DATA.length
      ).fill(false)
    );

    /* --------------------------------------------------------------
       Place car at first node
    -------------------------------------------------------------- */

    positionCar(nodeFractions[0]);

    /* --------------------------------------------------------------
       Hide until journey starts
    -------------------------------------------------------------- */

    carGroupRef.current.style.opacity =
      "0";

    /* --------------------------------------------------------------
       Start journey
    -------------------------------------------------------------- */

    const initialTimer =
      setTimeout(() => {
        if (!active) {
          return;
        }

        carGroupRef.current.style.opacity =
          "1";

        /* First step becomes active */

        setCurrentStep(0);

        setHasVisited((previous) => {
          const next = [...previous];

          next[0] = true;

          return next;
        });

        waitStart =
          performance.now();

        const animate = (timestamp) => {
          if (!active) {
            return;
          }

          /* --------------------------------------------------------
             Waiting at node
          -------------------------------------------------------- */

          if (waiting) {
            positionCar(
              nodeFractions[
                currentNode
              ]
            );

            if (
              timestamp -
                waitStart >=
              CONFIG.DWELL_TIME_MS
            ) {
              waiting = false;

              startTimestamp =
                timestamp;
            } else {
              animationFrameRef.current =
                requestAnimationFrame(
                  animate
                );

              return;
            }
          }

          /* --------------------------------------------------------
             Final node
          -------------------------------------------------------- */

          const nextNode =
            currentNode + 1;

          if (
            nextNode >=
            nodeFractions.length
          ) {
            positionCar(
              nodeFractions[
                nodeFractions.length -
                  1
              ]
            );

            setCurrentStep(
              TIMELINE_DATA.length - 1
            );

            return;
          }

          /* --------------------------------------------------------
             Segment
          -------------------------------------------------------- */

          const startFraction =
            nodeFractions[
              currentNode
            ];

          const targetFraction =
            nodeFractions[
              nextNode
            ];

          const distance =
            targetFraction -
            startFraction;

          const travelTime =
            (distance /
              CONFIG.TRAVEL_SPEED) *
            1000;

          const elapsed =
            timestamp -
            startTimestamp;

          const rawProgress =
            Math.min(
              elapsed /
                travelTime,
              1
            );

          /* Smooth ease-in-out */

          const easedProgress =
            0.5 -
            0.5 *
              Math.cos(
                rawProgress *
                  Math.PI
              );

          const fraction =
            startFraction +
            distance *
              easedProgress;

          /* --------------------------------------------------------
             Move car
          -------------------------------------------------------- */

          positionCar(fraction);

          /* --------------------------------------------------------
             Reached next node
          -------------------------------------------------------- */

          if (
            rawProgress >= 1
          ) {
            currentNode =
              nextNode;

            setCurrentStep(
              currentNode
            );

            setHasVisited(
              (previous) => {
                const next = [
                  ...previous,
                ];

                next[currentNode] =
                  true;

                return next;
              }
            );

            waiting = true;

            waitStart =
              timestamp;

            startTimestamp =
              null;
          }

          animationFrameRef.current =
            requestAnimationFrame(
              animate
            );
        };

        animationFrameRef.current =
          requestAnimationFrame(
            animate
          );
      }, CONFIG.INITIAL_DELAY_MS);

    return () => {
      active = false;

      clearTimeout(
        initialTimer
      );

      if (
        animationFrameRef.current
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [
    isReady,
    nodeFractions,
    isMobile,
    positionCar,
  ]);

  /* ==========================================================================
     DESKTOP PIN
  ========================================================================== */

  const DesktopPin = ({
    step,
    index,
    position,
  }) => {
    const isActive =
      currentStep === index;

    const isCompleted =
      hasVisited[index] &&
      !isActive;

    const theme =
      STEP_THEMES[index];

    return (
      <div
        className="absolute pointer-events-none flex items-center justify-center"
        style={{
          top: position.y,
          left: position.x,
          transform:
            "translate(-50%, -50%)",
          zIndex: isActive
            ? 100
            : isCompleted
            ? 50
            : 20,
        }}
      >
        {/* Active pulse */}

        {isActive && (
          <motion.div
            className="absolute rounded-full"
            initial={{
              width: 35,
              height: 35,
              opacity: 0.7,
            }}
            animate={{
              width: 75,
              height: 75,
              opacity: 0,
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              border: `3px solid ${theme.from}`,
            }}
          />
        )}

        {/* Pin */}

        <motion.div
          animate={{
            scale: isActive
              ? 1.25
              : isCompleted
              ? 1
              : 0.9,
          }}
          transition={{
            duration: 0.4,
          }}
          className="relative w-11 h-11 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
          style={{
            background:
              isActive ||
              isCompleted
                ? `linear-gradient(135deg, ${theme.from}, ${theme.to})`
                : "#cbd5e1",

            boxShadow: isActive
              ? `0 0 0 5px ${theme.shadow}, 0 8px 20px rgba(0,0,0,0.2)`
              : "0 4px 10px rgba(0,0,0,0.12)",
          }}
        >
          {step.isFlag ? (
            <Flag
              size={18}
              className="text-white"
            />
          ) : isCompleted ? (
            <CheckCircle2
              size={18}
              className="text-white"
            />
          ) : (
            <span className="text-white text-[12px] font-black">
              {index + 1}
            </span>
          )}
        </motion.div>
      </div>
    );
  };

  /* ==========================================================================
     DESKTOP CARD
  ========================================================================== */

 const DesktopCard = ({
  step,
  index,
  position,
}) => {
  const isActive = currentStep === index;

  const isCompleted =
    hasVisited[index] && !isActive;

  const isLocked =
    !isActive && !isCompleted;

  const theme = STEP_THEMES[index];

  const Icon = step.icon;

  /*
   * ------------------------------------------------------------
   * 3D CARD POSITION
   * ------------------------------------------------------------
   *
   * Card remains above the road.
   * When active, Framer Motion makes it look like it is
   * travelling from far away toward the viewer.
   */

  const cardTop =
    position.y -
    CONFIG.CARD_HEIGHT_APPROX -
    CONFIG.CARD_GAP -
    80;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: CONFIG.CARD_WIDTH,

        top: cardTop,

        left: position.x,

        transform:
          "translateX(-50%)",

        perspective: "1400px",

        zIndex: isActive
          ? 200
          : isCompleted
          ? 100
          : 30,
      }}
    >
      <motion.div
        initial={false}

        animate={{
          /*
           * ------------------------------------------------------
           * FAR → NEAR EFFECT
           * ------------------------------------------------------
           */

          scale: isActive
            ? 1.08
            : isCompleted
            ? 1
            : 0.86,

          opacity: isLocked
            ? 0.18
            : 1,

          y: isActive
            ? -10
            : 0,

          rotateX: isActive
            ? 0
            : 8,

          rotateY: isActive
            ? 0
            : index % 2 === 0
            ? -7
            : 7,

          rotateZ: isActive
            ? 0
            : index % 2 === 0
            ? -1.5
            : 1.5,
        }}

        transition={{
          duration: isActive ? 1.05 : 0.55,

          ease: [
            0.16,
            1,
            0.3,
            1,
          ],
        }}

        style={{
          transformStyle: "preserve-3d",

          transformOrigin:
            "center center",

          willChange:
            "transform, opacity",

          filter: isLocked
            ? "blur(0.3px)"
            : "none",
        }}
      >

        {/* ======================================================
            FAR → NEAR LIGHT / DEPTH
        ====================================================== */}

        {isActive && (
          <motion.div
            className="absolute -inset-8 rounded-[40px] pointer-events-none"
            initial={{
              opacity: 0,
              scale: 0.65,
            }}
            animate={{
              opacity: [
                0,
                0.65,
                0.25,
              ],

              scale: [
                0.65,
                1.08,
                1,
              ],
            }}
            transition={{
              duration: 1.1,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
            style={{
              background: `linear-gradient(
                135deg,
                ${theme.from},
                ${theme.to}
              )`,

              filter:
                "blur(28px)",

              transform:
                "translateZ(-80px)",
            }}
          />
        )}

      
   
        {/* ======================================================
            ANIMATED 3D BORDER
        ====================================================== */}

        {isActive && (
          <motion.div
            className="absolute -inset-[2px] rounded-[31px] pointer-events-none"
            style={{
              background: `linear-gradient(
                90deg,
                transparent,
                ${theme.from},
                white,
                ${theme.to},
                transparent
              )`,

              backgroundSize:
                "300% 100%",

              transform:
                "translateZ(2px)",
            }}
            animate={{
              backgroundPosition: [
                "200% 0%",
                "-100% 0%",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* ======================================================
            MAIN CARD
        ====================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border-2
            bg-white/95
            backdrop-blur-xl
            p-4
          "
          style={{
            borderColor:
              isActive
                ? theme.from
                : isCompleted
                ? `${theme.from}55`
                : "rgba(226,232,240,0.7)",


            transform:
              "translateZ(35px)",

            transformStyle:
              "preserve-3d",
          }}
        >

          {/* ====================================================
              TOP ACTIVE LINE
          ==================================================== */}

          {isActive && (
            <motion.div
              className="
                absolute
                top-0
                left-0
                right-0
                h-1
              "
              animate={{
                opacity: [
                  0.4,
                  1,
                  0.4,
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              style={{
                background: `linear-gradient(
                  90deg,
                  ${theme.from},
                  ${theme.to}
                )`,
              }}
            />
          )}

          {/* ====================================================
              COMPLETED INDICATOR
          ==================================================== */}

          {isCompleted && (
            <div
              className="
                absolute
                top-3
                right-3
                w-2
                h-2
                rounded-full
              "
              style={{
                background:
                  theme.from,

                boxShadow:
                  `0 0 12px ${theme.from}`,
              }}
            />
          )}

          {/* ====================================================
              DURATION
          ==================================================== */}

          <div
            className="
              inline-flex
              items-center
              gap-1.5
              px-3
              py-1
              rounded-full
              text-[10px]
              font-black
              tracking-wide
              uppercase
              mb-2.5
            "
            style={{
              backgroundColor:
                isLocked
                  ? "#f8fafc"
                  : `${theme.from}15`,

              color:
                isLocked
                  ? "#64748b"
                  : theme.text,

              border:
                isActive
                  ? `1px solid ${theme.from}40`
                  : "1px solid transparent",
            }}
          >
            {step.isFlag && (
              <Award size={12} />
            )}

            {step.duration}
          </div>

          {/* ====================================================
              TITLE
          ==================================================== */}

          <div
            className="
              flex
              items-start
              gap-2.5
              mb-2
            "
          >
            <motion.div
              className="
                p-1.5
                rounded-xl
                shrink-0
              "
              animate={
                isActive
                  ? {
                      scale: [
                        1,
                        1.12,
                        1,
                      ],

                      rotate: [
                        0,
                        -3,
                        3,
                        0,
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1.2,
                repeat: isActive
                  ? Infinity
                  : 0,
              }}
              style={{
                backgroundColor:
                  isLocked
                    ? "#f1f5f9"
                    : `${theme.from}15`,

                transform:
                  "translateZ(45px)",
              }}
            >
              <Icon
                size={18}
                strokeWidth={2.5}
                style={{
                  color:
                    isLocked
                      ? "#94a3b8"
                      : theme.from,
                }}
              />
            </motion.div>

            <h4
              className="
                font-extrabold
                text-[15px]
                leading-snug
                text-left
              "
              style={{
                color:
                  isLocked
                    ? "#475569"
                    : "#0f172a",

                transform:
                  "translateZ(40px)",
              }}
            >
              {step.title}
            </h4>
          </div>

          {/* ====================================================
              DESCRIPTION
          ==================================================== */}

          <p
            className="
              text-slate-600
              text-[11px]
              leading-relaxed
              text-left
              font-medium
              line-clamp-3
            "
            style={{
              transform:
                "translateZ(25px)",
            }}
          >
            {step.blurb}
          </p>

          {/* ====================================================
              ACTIVE STATUS
          ==================================================== */}

          {isActive && (
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mt-2.5
                flex
                items-center
                gap-2
                text-[10px]
                font-black
                uppercase
                tracking-widest
              "
              style={{
                color: theme.text,

                transform:
                  "translateZ(35px)",
              }}
            >
              <motion.span
                className="
                  w-2
                  h-2
                  rounded-full
                "
                animate={{
                  scale: [
                    1,
                    1.5,
                    1,
                  ],

                  opacity: [
                    1,
                    0.5,
                    1,
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                style={{
                  background:
                    theme.from,
                }}
              />

              Current Step
            </motion.div>
          )}

          {/* ====================================================
              COMPLETED STATUS
          ==================================================== */}

          {isCompleted && (
            <div
              className="
                mt-2.5
                flex
                items-center
                gap-2
                text-[10px]
                font-black
                uppercase
                tracking-widest
              "
              style={{
                color: theme.text,
              }}
            >
              <CheckCircle2
                size={13}
              />

              Completed
            </div>
          )}
        </div>

        {/* ======================================================
            CARD → PIN CONNECTOR
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            w-[2px]
          "
          animate={{
            height: isActive
              ? 55
              : 40,

            opacity: isLocked
              ? 0
              : isActive
              ? 1
              : 0.45,
          }}
          transition={{
            duration: 0.4,
          }}
          style={{
            transform:
              "translateX(-50%)",

            top: "100%",

            background: isActive
              ? `linear-gradient(
                  to bottom,
                  ${theme.from},
                  ${theme.to},
                  transparent
                )`
              : `linear-gradient(
                  to bottom,
                  ${theme.from}60,
                  transparent
                )`,
          }}
        />

        {/* ======================================================
            CONNECTOR PARTICLE
        ====================================================== */}

        {isActive && (
          <motion.div
            className="
              absolute
              left-1/2
              w-2.5
              h-2.5
              rounded-full
            "
            style={{
              transform:
                "translateX(-50%)",

              top: "100%",

              background:
                theme.from,

              boxShadow:
                `0 0 12px ${theme.from}`,
            }}
            animate={{
              y: [0, 50],

              opacity: [
                1,
                0,
              ],

              scale: [
                1,
                0.4,
              ],
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

  /* ==========================================================================
     MOBILE TIMELINE
  ========================================================================== */

  const MobileTimeline = () => {
    return (
      <div className="relative w-full max-w-xl mx-auto mt-12 pb-8">
        {/* ----------------------------------------------------------
            MOBILE TRACK
        ---------------------------------------------------------- */}

        <div className="absolute left-[31px] top-5 bottom-8 w-1 rounded-full bg-slate-200 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600"
            initial={{
              height: 0,
            }}
            whileInView={{
              height: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 3,
              ease: "linear",
            }}
          />
        </div>

        {/* ----------------------------------------------------------
            MOBILE STEPS
        ---------------------------------------------------------- */}

        <div className="space-y-8">
          {TIMELINE_DATA.map(
            (step, index) => {
              const theme =
                STEP_THEMES[index];

              const Icon =
                step.icon;

              const isActive =
                currentStep ===
                index;

              const isCompleted =
                hasVisited[index] &&
                !isActive;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin:
                      "-80px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      index * 0.05,
                  }}
                  className="relative flex items-start gap-5 pl-2"
                >
                  {/* Node */}

                  <motion.div
                    animate={{
                      scale: isActive
                        ? 1.15
                        : 1,
                    }}
                    className="relative mt-2 w-10 h-10 shrink-0 rounded-full border-4 border-white flex items-center justify-center text-white text-xs font-black z-10"
                    style={{
                      background:
                        `linear-gradient(135deg, ${theme.from}, ${theme.to})`,

                      boxShadow:
                        isActive
                          ? `0 0 0 6px ${theme.shadow}, 0 5px 15px rgba(0,0,0,.15)`
                          : "0 3px 10px rgba(0,0,0,.1)",
                    }}
                  >
                    {step.isFlag ? (
                      <Flag
                        size={15}
                      />
                    ) : isCompleted ? (
                      <CheckCircle2
                        size={16}
                      />
                    ) : (
                      index + 1
                    )}

                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          scale: [
                            1,
                            1.8,
                          ],
                          opacity: [
                            0.7,
                            0,
                          ],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat:
                            Infinity,
                        }}
                        style={{
                          border: `2px solid ${theme.from}`,
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Card */}

                  <motion.div
                    animate={{
                      scale: isActive
                        ? 1.03
                        : 1,

                      opacity:
                        currentStep >=
                        0
                          ? isActive ||
                            isCompleted
                            ? 1
                            : 0.6
                          : 1,
                    }}
                    className="relative flex-1 bg-white rounded-3xl p-6 border-2 overflow-hidden"
                    style={{
                      borderColor:
                        isActive
                          ? theme.from
                          : isCompleted
                          ? `${theme.from}45`
                          : "#f1f5f9",

                      boxShadow:
                        isActive
                          ? `0 15px 40px ${theme.shadow}`
                          : "0 10px 30px rgba(0,0,0,.05)",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-1"
                        animate={{
                          opacity: [
                            0.4,
                            1,
                            0.4,
                          ],
                        }}
                        transition={{
                          duration: 1,
                          repeat:
                            Infinity,
                        }}
                        style={{
                          background:
                            `linear-gradient(90deg, ${theme.from}, ${theme.to})`,
                        }}
                      />
                    )}

                    {/* Duration */}

                    <div
                      className="inline-flex px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-4"
                      style={{
                        backgroundColor:
                          `${theme.from}15`,

                        color:
                          theme.text,
                      }}
                    >
                      {step.duration}
                    </div>

                    {/* Heading */}

                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="p-2 rounded-xl"
                        style={{
                          background:
                            `${theme.from}15`,
                        }}
                      >
                        <Icon
                          size={19}
                          style={{
                            color:
                              theme.from,
                          }}
                        />
                      </div>

                      <h4 className="font-extrabold text-lg text-slate-900 leading-tight">
                        {step.title}
                      </h4>
                    </div>

                    {/* Description */}

                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {step.blurb}
                    </p>

                    {/* Bullets */}

                    {step.bullets
                      .length >
                      0 && (
                      <ul className="mt-4 space-y-2.5">
                        {step.bullets.map(
                          (
                            bullet,
                            bulletIndex
                          ) => (
                            <li
                              key={
                                bulletIndex
                              }
                              className="flex items-start gap-2.5 text-sm text-slate-600"
                            >
                              <CheckCircle2
                                size={
                                  16
                                }
                                className="shrink-0 mt-0.5"
                                style={{
                                  color:
                                    theme.from,
                                }}
                              />

                              <span>
                                {
                                  bullet
                                }
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    )}

                    {/* Active */}

                    {isActive && (
                      <div
                        className="mt-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                        style={{
                          color:
                            theme.text,
                        }}
                      >
                        <motion.span
                          className="w-2 h-2 rounded-full"
                          animate={{
                            scale: [
                              1,
                              1.5,
                              1,
                            ],
                          }}
                          transition={{
                            duration: 1,
                            repeat:
                              Infinity,
                          }}
                          style={{
                            background:
                              theme.from,
                          }}
                        />

                        Current Step
                      </div>
                    )}

                    {/* Completed */}

                    {isCompleted && (
                      <div
                        className="mt-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                        style={{
                          color:
                            theme.text,
                        }}
                      >
                        <CheckCircle2
                          size={13}
                        />

                        Completed
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    );
  };

  /* ==========================================================================
     RENDER
  ========================================================================== */

  return (
    <section id="journey" className="relative w-full min-h-screen overflow-hidden  py-24 font-sans">

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* ===================================================================
            HEADER
        =================================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-16 md:mb-28 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-orange-300/30 border 
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] text-orange-50 font-bold text-sm mb-6">
            <RoadIcon size={16} />

            12-Month S-Curve Journey
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight text-slate-900 tracking-tight">
            From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Learning
            </span>{" "}
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Earning
            </span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg md:text-md max-w-3xl mx-auto leading-relaxed">
            A complete, professionally guided roadmap into DevOps, Cloud, and AI Engineering, culminating in an industry job offer.
          </p>
        </motion.div>

        {/* ===================================================================
            DESKTOP
        =================================================================== */}

        {!isMobile && (
          <div
            ref={containerRef}
            className="relative w-full mx-auto"
            style={{
              height:
                CONFIG.ROAD_BAND_HEIGHT,
            }}
          >
            {/* ===============================================================
                SVG ROAD
            =============================================================== */}

            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox={`0 0 ${containerWidth} ${CONFIG.ROAD_BAND_HEIGHT}`}
              preserveAspectRatio="none"
            >
              {/* =============================================================
                  DEFINITIONS
              ============================================================= */}

              <defs>
                <linearGradient
                  id="timeline-asphalt"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#334155"
                  />

                  <stop
                    offset="50%"
                    stopColor="#0f172a"
                  />

                  <stop
                    offset="100%"
                    stopColor="#1e293b"
                  />
                </linearGradient>

                <linearGradient
                  id="timeline-headlight"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#fef08a"
                    stopOpacity="0.9"
                  />

                  <stop
                    offset="100%"
                    stopColor="#fef08a"
                    stopOpacity="0"
                  />
                </linearGradient>

                <filter
                  id="timeline-road-shadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="12"
                    stdDeviation="12"
                    floodOpacity="0.12"
                  />
                </filter>

                <filter
                  id="timeline-car-glow"
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                >
                  <feGaussianBlur
                    stdDeviation="3"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* =============================================================
                  INVISIBLE MEASUREMENT PATH
              ============================================================= */}

              {pathData && (
                <path
                  ref={pathRef}
                  d={pathData}
                  fill="none"
                  stroke="transparent"
                  strokeWidth="1"
                />
              )}

              {/* =============================================================
                  ROAD SHADOW
              ============================================================= */}

              {pathData && (
                <path
                  d={pathData}
                  fill="none"
                  stroke="rgba(0,0,0,0.12)"
                  strokeWidth={
                    CONFIG.ROAD_WIDTH + 14
                  }
                  strokeLinecap="round"
                  filter="url(#timeline-road-shadow)"
                  transform="translate(0, 14)"
                />
              )}

              {/* =============================================================
                  ROAD OUTER BORDER
              ============================================================= */}

              {pathData && (
                <path
                  d={pathData}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth={
                    CONFIG.ROAD_WIDTH + 8
                  }
                  strokeLinecap="round"
                />
              )}

              {/* =============================================================
                  ASPHALT
              ============================================================= */}

              {pathData && (
                <path
                  d={pathData}
                  fill="none"
                  stroke="url(#timeline-asphalt)"
                  strokeWidth={
                    CONFIG.ROAD_WIDTH
                  }
                  strokeLinecap="round"
                />
              )}

              {/* =============================================================
                  ROAD DASH
              ============================================================= */}

              {pathData && (
                <path
                  d={pathData}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeDasharray={
                    CONFIG.LINE_DASH
                  }
                  strokeLinecap="round"
                  opacity="0.55"
                />
              )}

              {/* =============================================================
                  CAR
              ============================================================= */}

              <g
                ref={carGroupRef}
                opacity="0"
                filter="url(#timeline-car-glow)"
              >
                {CONFIG.CAR_IMAGE_SRC ? (
                  <g transform="translate(-30, -22) scale(1.1)">
               

                    <image
                      href={CONFIG.CAR_IMAGE_SRC}
                      x="0"
                      y="0"
                      width="60"
                      height="44"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                ) : (
                  <g transform="translate(-25, -15) scale(1.45)">
              

                    {/* -------------------------------------------------------
                        Main body
                    ------------------------------------------------------- */}

                    <rect
                      x="0"
                      y="2"
                      width="38"
                      height="20"
                      rx="6"
                      fill="#ef4444"
                    />

                    {/* -------------------------------------------------------
                        Roof
                    ------------------------------------------------------- */}

                    <path
                      d="M8 2 L14 -6 L28 -6 L35 2 Z"
                      fill="#dc2626"
                    />

                    {/* -------------------------------------------------------
                        Windows
                    ------------------------------------------------------- */}

                    <path
                      d="M14 -4 L18 -4 L18 2 L10 2 Z"
                      fill="#0f172a"
                    />

                    <path
                      d="M20 -4 L27 -4 L32 2 L20 2 Z"
                      fill="#0f172a"
                    />

                    {/* -------------------------------------------------------
                        Headlights
                    ------------------------------------------------------- */}

                    <circle
                      cx="37"
                      cy="7"
                      r="2.5"
                      fill="#fef08a"
                    />

                    <circle
                      cx="37"
                      cy="17"
                      r="2.5"
                      fill="#fef08a"
                    />

                    {/* -------------------------------------------------------
                        Headlight beams
                    ------------------------------------------------------- */}

                    <path
                      d="M38 7 L68 -4 L68 13 Z"
                      fill="url(#timeline-headlight)"
                      opacity="0.8"
                    />

                    <path
                      d="M38 17 L68 12 L68 28 Z"
                      fill="url(#timeline-headlight)"
                      opacity="0.8"
                    />

                    {/* -------------------------------------------------------
                        Wheels
                    ------------------------------------------------------- */}

                    <circle
                      cx="9"
                      cy="23"
                      r="4.5"
                      fill="#020617"
                    />

                    <circle
                      cx="30"
                      cy="23"
                      r="4.5"
                      fill="#020617"
                    />

                    <circle
                      cx="9"
                      cy="23"
                      r="1.7"
                      fill="#94a3b8"
                    />

                    <circle
                      cx="30"
                      cy="23"
                      r="1.7"
                      fill="#94a3b8"
                    />

                    {/* -------------------------------------------------------
                        Exhaust
                    ------------------------------------------------------- */}

                    <circle
                      cx="-3"
                      cy="12"
                      r="3"
                      fill="#fb7185"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.9;0.2;0.9"
                        dur="0.55s"
                        repeatCount="indefinite"
                      />

                      <animate
                        attributeName="r"
                        values="2;4;2"
                        dur="0.55s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* -------------------------------------------------------
                        Speed trail
                    ------------------------------------------------------- */}

                    <path
                      d="M-10 8 L-25 8"
                      stroke="#f87171"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.7"
                    />

                    <path
                      d="M-10 14 L-30 14"
                      stroke="#fb7185"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.45"
                    />
                  </g>
                )}
              </g>
            </svg>

            {/* ===============================================================
                DESKTOP OVERLAY CARDS
            =============================================================== */}

            {isReady &&
              nodePositions.map(
                (position, index) => (
                  <React.Fragment
                    key={index}
                  >
                    <DesktopPin
                      step={
                        TIMELINE_DATA[
                          index
                        ]
                      }
                      index={index}
                      position={position}
                    />

                    <DesktopCard
                      step={
                        TIMELINE_DATA[
                          index
                        ]
                      }
                      index={index}
                      position={position}
                    />
                  </React.Fragment>
                )
              )}
          </div>
        )}

        {/* ===================================================================
            MOBILE
        =================================================================== */}

        {isMobile && (
          <MobileTimeline />
        )}
      </div>

      {/* =====================================================================
          CTA
      ===================================================================== */}

      <div className="relative z-20 flex flex-col sm:flex-row justify-center items-center mt-20 md:mt-0 gap-5 px-6 pb-20">
        {/* -------------------------------------------------------------------
            CALL
        ------------------------------------------------------------------- */}

        <motion.a
          href="tel:+916350618066"
          whileHover={{
            scale: 1.03,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="group relative flex items-center w-full border border-white/30
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] sm:w-auto justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-[16px] font-bold text-white overflow-hidden"
        >

          <PhoneCall
            size={20}
            className="mr-3 relative z-10"
          />

          <span className="relative z-10">
            Connect with an Expert
          </span>

          <ArrowRight
            size={18}
            className="ml-3 relative z-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          />
        </motion.a>

        {/* -------------------------------------------------------------------
            BROCHURE
        ------------------------------------------------------------------- */}

        <motion.button
          whileHover={{
            scale: 1.03,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="open-genai-modal group relative flex border border-white/30
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] items-center w-full sm:w-auto justify-center rounded-full  bg-black px-8 py-4 text-[16px] font-bold text-slate-50 transition-all hover:border-slate-300 hover:text-slate-900"
        >
          <DownloadIcon
            size={20}
            className="mr-3 text-slate-400 group-hover:text-orange-500 transition-colors"
          />

          <span>
            Download Syllabus Brochure
          </span>
        </motion.button>
      </div>
    </section>
  );
}