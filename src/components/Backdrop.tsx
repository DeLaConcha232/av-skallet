import React from "react";

const Backdrop = () => {
  return (
    <div className="fixed z-0 inset-0 overflow-hidden pointer-events-none">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 gradient-hero ">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 noise-texture opacity-35 " />
      </div>

      {/* Floating orbs for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Emerald orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, hsl(152 48% 30% / 0.15) 0%, transparent 70%)",
            top: "10%",
            right: "-10%",
            filter: "blur(40px)",
          }}
        />
        {/* Amethyst orb */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-float-slower"
          style={{
            background:
              "radial-gradient(circle, hsl(268 28% 30% / 0.2) 0%, transparent 70%)",
            bottom: "20%",
            left: "-5%",
            filter: "blur(40px)",
          }}
        />
        {/* Small accent orbs */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, hsl(152 48% 50% / 0.1) 0%, transparent 70%)",
            top: "60%",
            right: "20%",
            filter: "blur(30px)",
          }}
        />
      </div>
    </div>
  );
};

export default Backdrop;
