/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useRef } from "react";
import { create, CreateTypes } from "canvas-confetti";
import styles from "./Confetti.module.scss";

export const Confetti = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let confetti: CreateTypes;

    if (canvasRef.current) {
      confetti = create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });

      // Confetti options: https://github.com/catdad/canvas-confetti#options
      void confetti({
        disableForReducedMotion: true,
        spread: 120,
        startVelocity: 42,
      });
    }

    return () => {
      if (confetti) {
        confetti.reset();
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.confetti} aria-hidden />;
};
