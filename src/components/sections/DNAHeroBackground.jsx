"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

/**
 * DNAHeroBackground
 * Dual-video cross-dissolve loop.
 * Trims the clip to LOOP_START–LOOP_END and uses two stacked <video> elements
 * with opacity transitions to create a seamless, continuous loop with no visible reset.
 */

const LOOP_START = 0.96;   // seconds – first usable frame
const LOOP_END   = 7.00;   // seconds – last usable frame (pose closest to start)
const FADE_DUR   = 0.40;   // seconds – cross-dissolve length (0.33–0.5 range)

export default function DNAHeroBackground() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Refs for the two video elements
    const videoA = useRef(null);
    const videoB = useRef(null);

    // Which video is currently "on top" (visible): 'A' or 'B'
    const activeRef = useRef("A");

    // Guard against overlapping swaps
    const swapping = useRef(false);

    /* ---- reduced-motion query ---- */
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mq.matches);
        const h = (e) => setPrefersReducedMotion(e.matches);
        mq.addEventListener("change", h);
        return () => mq.removeEventListener("change", h);
    }, []);

    /* ---- helpers ---- */
    const getActive  = useCallback(() => (activeRef.current === "A" ? videoA : videoB), []);
    const getStandby = useCallback(() => (activeRef.current === "A" ? videoB : videoA), []);

    const safePlay = useCallback((el) => {
        if (!el) return;
        const p = el.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
    }, []);

    /* ---- cross-dissolve swap ---- */
    const beginSwap = useCallback(() => {
        if (swapping.current) return;
        swapping.current = true;

        const standby = getStandby().current;
        const active  = getActive().current;
        if (!standby || !active) { swapping.current = false; return; }

        // Prepare standby at loop start
        standby.currentTime = LOOP_START;
        safePlay(standby);

        // Fade standby IN, active OUT
        standby.style.opacity = "1";
        active.style.opacity  = "0";

        // After the CSS transition finishes, finalise the swap
        const tid = setTimeout(() => {
            active.pause();
            active.currentTime = LOOP_START;
            // Flip roles
            activeRef.current = activeRef.current === "A" ? "B" : "A";
            swapping.current = false;
        }, FADE_DUR * 1000 + 50);

        return () => clearTimeout(tid);
    }, [getActive, getStandby, safePlay]);

    /* ---- timeupdate handler (fires on the ACTIVE video) ---- */
    const onTimeUpdate = useCallback((e) => {
        const t = e.target.currentTime;
        // Clamp: if somehow before LOOP_START (e.g. native loop), seek forward
        if (t < LOOP_START) {
            e.target.currentTime = LOOP_START;
            return;
        }
        // Trigger swap when we're within FADE_DUR of LOOP_END
        if (t >= LOOP_END - FADE_DUR) {
            beginSwap();
        }
    }, [beginSwap]);

    /* ---- initialise both videos ---- */
    useEffect(() => {
        const a = videoA.current;
        const b = videoB.current;
        if (!a || !b) return;

        // Seek both to start
        a.currentTime = LOOP_START;
        b.currentTime = LOOP_START;

        // A is visible, B is hidden
        a.style.opacity = "1";
        b.style.opacity = "0";
        activeRef.current = "A";

        if (!prefersReducedMotion) {
            safePlay(a);
        }
    }, [prefersReducedMotion, safePlay]);

    /* ---- pause/play on reduced-motion change ---- */
    useEffect(() => {
        const active = getActive().current;
        if (!active) return;
        if (prefersReducedMotion) {
            active.pause();
        } else {
            active.currentTime = LOOP_START;
            safePlay(active);
        }
    }, [prefersReducedMotion, getActive, safePlay]);

    /* ---- shared video styles ---- */
    const videoStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
        transition: `opacity ${FADE_DUR}s ease-in-out`,
    };

    /* ---- subtle zoom/pan keyframes ---- */
    const animationStyle = `
    @keyframes subtleZoomPan {
      0%   { transform: scale(1.03) translate(0, 0); }
      50%  { transform: scale(1.05) translate(1%, -0.5%); }
      100% { transform: scale(1.03) translate(0, 0); }
    }
    `;

    return (
        <>
            <style>{animationStyle}</style>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    backgroundColor: "white",
                    zIndex: 0,
                    animation: prefersReducedMotion
                        ? "none"
                        : "subtleZoomPan 20s ease-in-out infinite",
                }}
            >
                {/* Video A */}
                <video
                    ref={videoA}
                    src="/dna-bg.mp4"
                    muted
                    playsInline
                    preload="auto"
                    onTimeUpdate={onTimeUpdate}
                    style={{ ...videoStyle, opacity: 1 }}
                />

                {/* Video B (standby) */}
                <video
                    ref={videoB}
                    src="/dna-bg.mp4"
                    muted
                    playsInline
                    preload="auto"
                    onTimeUpdate={onTimeUpdate}
                    style={{ ...videoStyle, opacity: 0 }}
                />

                {/* Semi-transparent white overlay for text readability */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                />
            </div>
        </>
    );
}
