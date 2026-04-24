"use client";

export default function CausticBackground() {
  return (
    <div className="caustic-overlay" aria-hidden="true">
      {/* Multiple caustic light layers for rich dappled effect */}
      <div className="caustic-layer" />
      <div className="caustic-layer caustic-layer-2" />
      <div className="caustic-layer caustic-layer-3" />

      {/* Additional bright shimmer patches using pure CSS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div className="caustic-patch patch-1" />
        <div className="caustic-patch patch-2" />
        <div className="caustic-patch patch-3" />
        <div className="caustic-patch patch-4" />
        <div className="caustic-patch patch-5" />
        
        {/* Highlight bands replacing SVG path morphs */}
        <div className="caustic-patch patch-band-1" />
        <div className="caustic-patch patch-band-2" />
      </div>

      <style>{`
        .caustic-patch {
          position: absolute;
          border-radius: 50%;
          will-change: transform, opacity;
        }

        .patch-1 {
          width: 400px;
          height: 240px;
          background: rgba(0, 212, 255, 0.08);
          left: 10%;
          top: 10%;
          filter: blur(40px);
          animation: move-1 20s infinite alternate ease-in-out;
        }

        .patch-2 {
          width: 500px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          right: -5%;
          top: 30%;
          filter: blur(50px);
          animation: move-2 22s infinite alternate ease-in-out;
        }

        .patch-3 {
          width: 360px;
          height: 200px;
          background: rgba(0, 212, 255, 0.06);
          left: 40%;
          bottom: -5%;
          filter: blur(40px);
          animation: move-3 25s infinite alternate ease-in-out;
        }

        .patch-4 {
          width: 320px;
          height: 180px;
          background: rgba(255, 255, 255, 0.08);
          right: 15%;
          top: 5%;
          filter: blur(40px);
          animation: move-4 23s infinite alternate ease-in-out;
        }

        .patch-5 {
          width: 440px;
          height: 260px;
          background: rgba(0, 220, 255, 0.07);
          left: -5%;
          bottom: 20%;
          filter: blur(50px);
          animation: move-5 24s infinite alternate ease-in-out;
        }

        .patch-band-1 {
          width: 150%;
          height: 100px;
          background: rgba(255, 255, 255, 0.08);
          left: -25%;
          top: 30%;
          filter: blur(30px);
          animation: wave-1 12s infinite alternate ease-in-out;
        }

        .patch-band-2 {
          width: 150%;
          height: 120px;
          background: rgba(0, 212, 255, 0.05);
          left: -25%;
          top: 60%;
          filter: blur(40px);
          animation: wave-2 15s infinite alternate ease-in-out;
        }

        @keyframes move-1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20vw, 15vh) scale(1.2); }
          66% { transform: translate(-5vw, 8vh) scale(0.9); }
          100% { transform: translate(10vw, 0) scale(1); }
        }

        @keyframes move-2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20vw, -15vh) scale(1.1); }
          66% { transform: translate(10vw, 10vh) scale(0.8); }
          100% { transform: translate(-10vw, 0) scale(1); }
        }

        @keyframes move-3 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20vw, -15vh) scale(1.1); }
          66% { transform: translate(-10vw, 10vh) scale(0.9); }
          100% { transform: translate(10vw, 0) scale(1); }
        }

        @keyframes move-4 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20vw, 15vh) scale(1.2); }
          66% { transform: translate(10vw, 5vh) scale(0.9); }
          100% { transform: translate(-10vw, 10vh) scale(1); }
        }

        @keyframes move-5 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20vw, -15vh) scale(1.1); }
          66% { transform: translate(-5vw, 20vh) scale(0.8); }
          100% { transform: translate(15vw, 0) scale(1); }
        }

        @keyframes wave-1 {
          0% { transform: translateY(0) rotate(-5deg) scaleY(1); }
          100% { transform: translateY(10vh) rotate(5deg) scaleY(1.5); }
        }

        @keyframes wave-2 {
          0% { transform: translateY(0) rotate(5deg) scaleY(1); }
          100% { transform: translateY(-10vh) rotate(-5deg) scaleY(1.5); }
        }
      `}</style>
    </div>
  );
}
