/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { CSSProperties, useState } from "react";
import { QuestionMarkCircle } from "../server/Icons";
import styles from "./ProgressCard.module.scss";
import ExploringLaptopPlus from "./assets/exploring-laptop-check.svg";
import ExploringLaptopMinus from "./assets/exploring-laptop-minus.svg";
import SparklingCheck from "./assets/sparkling-check.svg";
import Image from "next/image";
import { Modal } from "./Modal";
 
 export type Props = {
   resolvedByYou: number;
   autoRemoved: number;
   totalNumExposures: number;
 };
 
 function PercentageComplete(props: Props) {
  const totalRemoved = props.autoRemoved + props.resolvedByYou;

   const percentageCompleteNum =
   (totalRemoved > 0 && props.totalNumExposures > 0) ? ((props.autoRemoved + props.resolvedByYou) / props.totalNumExposures) * 100 : 0 // Prevents the division of 0
     return percentageCompleteNum;
 }
 
 export const ProgressCard = (props: Props) => {
  const percentageCompleteNum = Math.round(PercentageComplete(props)); // Ensures a whole number
   const percentageRemainingNumber = 100 -  percentageCompleteNum;

   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

   const activeProgressBarStyle: CSSProperties = {
     width: `${percentageCompleteNum}%`,
   };
 
   const ProgressBar = () => {
     return (
       <div className={styles.progressBarContainer}>
        <div className={styles.fullProgressBar}>
          <div
            className={styles.activeProgressBar}
            style={activeProgressBarStyle}
          ></div>
           <div className={styles.percentageBreakdown}>
            <p>{percentageCompleteNum}% complete</p>
            <p>{percentageRemainingNumber}% in progress</p>
          </div>
        </div>
         <Image src={SparklingCheck} alt="" />
       </div>
     );
   };

   const modalContent = (
    <>
    <p>
      <strong>Resolved by you</strong> includes anything you have manually fixed. 
      All data breaches that require access to your accounts need to 
      be fixed manually, even if you have upgraded to Premium. 
      <br/><br/>
      <strong>Auto-removed</strong> includes any exposures from data broker profiles that 
      we have removed for you. This is available only for Premium subscribers.
      Complete includes anything resolved by you or auto-removed by us. 
      <br/><br/>
      <strong>In Progress</strong> includes anything that we are currently working on fixing. 
      Removals typically take 7-14 days but the most difficult sites could take 
      longer. You may also start to see removals happening within the same day.
       </p>
    </>
   )
 
   return (
     <div className={styles.progressCard}>
       <div className={styles.header}>
         Here is what we fixed
         <button aria-label="Term definitions" onClick={openModal}>
           <QuestionMarkCircle alt="" width="15" height="15" />
         </button>
       </div>
       <div className={styles.progressStatsWrapper}>
         <div className={styles.progressItem}>
           <div className={styles.progressStat}>
             <Image src={ExploringLaptopPlus} alt="" />
             <span>{props.resolvedByYou}</span>
           </div>
           <p>Resolved by you</p>
         </div>
         <div className={styles.progressItem}>
           <div className={styles.progressStat}>
             <Image src={ExploringLaptopMinus} alt="" />
             <span>{props.autoRemoved}</span>
           </div>
           <p>Auto-removed</p>
         </div>
       </div>
       <ProgressBar />
       <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
     </div>
   );
 };
