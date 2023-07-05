/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Shell as ShellEl } from "./Shell";
import { getL10n } from "../functions/server/l10n";
import {
  ExposureCard,
  ExposureCardProps,
} from "../components/client/ExposureCard";
import styles from "./Dashboard.module.scss";
import { DashboardTopBanner } from "./DashboardTopBanner";
import { useL10n } from "../hooks/l10n";
import { QuestionMarkCircle } from "../components/server/Icons";
import { useState } from "react";
import { Modal } from "../components/client/Modal";
import ModalImage from "../components/client/assets/modal-default-img.svg";

type DashboardProps = {
  exposures: ExposureCardProps[];
};

export const Dashboard = (props: DashboardProps) => {
  const l10n = useL10n();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const modalContentExposureType = (
    <div className={styles.modalBodyContent}>
      <p>
        {l10n.getString("modal-exposure-type-description", {
          data_broker_sites_total_num: 190,
        })}
      </p>
      <ol>
        <li>
          {l10n.getFragment("modal-exposure-type-data-breach", {
            elems: { b: <strong /> },
          })}
        </li>
        <li>
          {l10n.getFragment("modal-exposure-type-data-broker", {
            elems: { b: <strong /> },
          })}
        </li>
      </ol>
    </div>
  );

  const modalContentStatus = (
    <div className={styles.modalBodyContent}>
      <p>
        {l10n.getString("modal-exposure-status-description", {
          data_broker_sites_total_num: 190,
        })}
      </p>
      <br />
      <ul>
        <li>
          {l10n.getFragment("modal-exposure-status-action-needed", {
            elems: { b: <strong /> },
          })}
        </li>
        <li>
          {l10n.getFragment("modal-exposure-status-in-progress", {
            elems: { b: <strong /> },
          })}
        </li>
        <li>
          {l10n.getFragment("modal-exposure-status-fixed", {
            elems: { b: <strong /> },
          })}
        </li>
      </ul>
    </div>
  );

  return (
    <ShellEl l10n={getL10n()} session={null}>
      <div className={styles.container}>
        <DashboardTopBanner type={"LetsFixDataContent"} chart={<></>} />
        <section className={styles.exposuresArea}>
          <div>
            <h2>{l10n.getString("dashboard-exposures-area-headline")}</h2>
            <p>
              {l10n.getString("dashboard-exposures-area-description", {
                // TODO: Use real user data
                exposures_total_num: 90,
                data_breach_total_num: 15,
                data_broker_total_num: 75,
              })}
            </p>
          </div>
          <div className={styles.filterHeaderWrapper}>
            <ul className={styles.filterHeaderList}>
              <li className={styles.hideOnMobile}>
                {l10n.getString("dashboard-exposures-filter")}
              </li>
              <li>{l10n.getString("dashboard-exposures-filter-company")}</li>
              <li className={styles.hideOnMobile}>
                {l10n.getString("dashboard-exposures-filter-exposure-type")}
                <button
                  aria-label={l10n.getString("modal-open-alt")}
                  onClick={handleOpen}
                >
                  <QuestionMarkCircle width="15" height="15" alt={""} />
                </button>
              </li>
              <li className={styles.hideOnMobile}>
                {l10n.getString("dashboard-exposures-filter-date-found")}
              </li>
              <li>{l10n.getString("dashboard-exposures-filter-status")}</li>
            </ul>
            <div className={styles.rightSpace}></div>
          </div>
          <ul className={styles.exposureList}>
            {props.exposures.map((exposure, index) => (
              <li key={index} className={styles.exposureListItem}>
                <ExposureCard {...exposure} />
              </li>
            ))}
          </ul>
        </section>

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleClose}
            image={ModalImage}
            headline={l10n.getString("modal-exposure-type-title")}
            body={modalContentStatus}
            cta={{
              content: l10n.getString("modal-cta-ok"),
              link: handleClose,
            }}
          />
        )}
      </div>
    </ShellEl>
  );
};
