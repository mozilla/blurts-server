/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  useMenuTriggerState,
  useTreeState,
  TreeState,
  Item,
  MenuTriggerProps,
  Node,
} from "react-stately";
import {
  useMenuTrigger,
  useButton,
  useMenu,
  mergeProps,
  useMenuItem,
  AriaMenuProps,
  AriaMenuTriggerProps,
  useFocusRing,
} from "react-aria";
import { useRef } from "react";
import Image from "next/image";
import { ReactLocalization } from "@fluent/react";
import styles from "./AppPicker.module.scss";
import FirefoxLogo from "./images/fx.png";
import RelayLogo from "./images/relay-logo.svg";
import VpnLogo from "./images/vpn.svg";
import FxDesktopLogo from "./images/fx-logo.svg";
import FxMobileLogo from "./images/fx-mobile.png";
import SoloLogo from "./images/solo-logo.svg";
import { useL10n } from "../../../hooks/l10n";
import { BentoIcon } from "../../server/Icons";
import { gaEvent } from "../../../functions/client/gaEvent";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { Popover } from "../Popover";

const getProducts = (referringHost: string, l10n: ReactLocalization) => ({
  vpn: {
    id: "vpn",
    url: `https://www.mozilla.org/products/vpn/?utm_source=${encodeURIComponent(
      referringHost,
    )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`,
    title: l10n.getString("toolbar-app-picker-product-vpn"),
    gaLabel: "vpn",
    imgSrc: VpnLogo,
  },
  relay: {
    id: "relay",
    url: `https://relay.firefox.com/?utm_source=${encodeURIComponent(
      referringHost,
    )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`,
    title: l10n.getString("toolbar-app-picker-product-relay"),
    gaLabel: "fx-relay",
    imgSrc: RelayLogo,
  },
  fxDesktop: {
    id: "fxDesktop",
    url: `https://www.mozilla.org/firefox/new/?utm_source=${encodeURIComponent(
      referringHost,
    )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`,
    title: l10n.getString("toolbar-app-picker-product-fx-desktop"),
    gaLabel: "fx-desktop",
    imgSrc: FxDesktopLogo,
  },
  fxMobile: {
    id: "fxMobile",
    url: `https://www.mozilla.org/firefox/browsers/mobile/?utm_source=${encodeURIComponent(
      referringHost,
    )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`,
    title: l10n.getString("toolbar-app-picker-product-fx-mobile"),
    gaLabel: "fx-mobile",
    imgSrc: FxMobileLogo,
  },
  solo: {
    id: "solo",
    url: `https://soloist.ai/?utm_source=${encodeURIComponent(
      referringHost,
    )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`,
    title: l10n.getString("toolbar-app-picker-product-solo"),
    gaLabel: "solo",
    imgSrc: SoloLogo,
  },
});

/**
 * Menu that can be opened to see other relevant products Mozilla has available for people.
 */
export const AppPicker = () => {
  const l10n = useL10n();

  const referringHost =
    // TODO: Add unit test when changing this code:
    /* c8 ignore next 3 */
    typeof document !== "undefined"
      ? document.location.host
      : "monitor.mozilla.org";
  const products = getProducts(referringHost, l10n);

  const handleAction = (key: React.Key) => {
    if (key === "mozilla") {
      gaEvent({
        category: "bento",
        action: "bento-app-link-click",
        label: "Mozilla",
      });
    } else {
      const product = Object.values(products).find((p) => p.id === key);
      if (product) {
        gaEvent({
          category: "bento",
          action: "bento-app-link-click",
          label: product.gaLabel,
        });
      }
    }
  };

  return (
    <AppPickerTrigger
      label={l10n.getString("toolbar-app-picker-trigger-title")}
      referringHost={referringHost}
      onAction={handleAction}
    >
      <>
        {Object.values(products).map((p) => (
          <Item
            key={p.id}
            textValue={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={`${styles.menuLink} ${styles[`${p.id}Link`]}`}>
              <Image src={p.imgSrc} alt="" width={16} height={16} />
              {p.title}
            </span>
          </Item>
        ))}
      </>

      <Item
        key="mozilla"
        textValue={l10n.getString("toolbar-app-picker-by-mozilla")}
        href={`https://www.mozilla.org/?utm_source=${encodeURIComponent(
          referringHost,
        )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={`${styles.menuLink} ${styles.mozillaLink}`}>
          {l10n.getString("toolbar-app-picker-by-mozilla")}
        </span>
      </Item>
    </AppPickerTrigger>
  );
};

type AppPickerTriggerProps = {
  label: string;
  referringHost: string;
} & AriaMenuProps<object> &
  MenuTriggerProps &
  AriaMenuTriggerProps;

function AppPickerTrigger(props: AppPickerTriggerProps) {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const state = useMenuTriggerState({
    onOpenChange: (isOpen) => {
      if (isOpen) {
        recordTelemetry("ctaButton", "click", {
          button_id: "bento_box",
        });
      }
      gaEvent({
        category: "bento",
        action: isOpen ? "bento-opened" : "bento-closed",
        label: props.referringHost,
      });
    },
  });
  const ref = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
  const items = menuProps.items as Array<Node<object>>;
  const mergedMenuProps = mergeProps(props, { ...menuProps, items });
  const menuTriggerButton = useButton(menuTriggerProps, ref);

  return (
    <>
      <button
        {...menuTriggerButton.buttonProps}
        ref={ref}
        title={l10n.getString("toolbar-app-picker-trigger-title")}
        className={styles.trigger}
      >
        <BentoIcon alt={props.label} />
      </button>
      {state.isOpen && (
        <Popover
          offset={20}
          popoverRef={popoverRef}
          state={state}
          triggerRef={ref}
        >
          <AppPickerMenu
            {...mergedMenuProps}
            aria-label={l10n.getString("toolbar-app-picker-trigger-title")}
          />
        </Popover>
      )}
    </>
  );
}

type AppPickerMenuProps<T> = AriaMenuProps<T>;

// TODO: Add unit test when changing this code:
/* c8 ignore start */
const AppPickerMenu = <T extends object>(props: AppPickerMenuProps<T>) => {
  const l10n = useL10n();
  const menuState = useTreeState({ ...props });
  const menuRef = useRef<HTMLDivElement>(null);
  const menuProps = useMenu(props, menuState, menuRef).menuProps;

  return (
    <div className={styles.popup}>
      <div className={styles.appPickerHeading}>
        <Image src={FirefoxLogo} alt="" width={32} height={32} />
        <h2>{l10n.getString("fx-makes-tech")}</h2>
      </div>
      <div
        {...menuProps}
        ref={menuRef}
        tabIndex={-1}
        className={styles.menuWrapper}
      >
        {Array.from(menuState.collection).map((item) => (
          <AppPickerItem key={item.key} item={item} state={menuState} />
        ))}
      </div>
    </div>
  );
};
/* c8 ignore stop */

type AppPickerItemProps<T> = {
  // TODO: Figure out correct type:
  item: Node<T>;
  state: TreeState<T>;
};

// TODO: Add unit test when changing this code:
/* c8 ignore start */
const AppPickerItem = <T extends object>(props: AppPickerItemProps<T>) => {
  const isLink = !!props.item.props?.href;
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const ref = isLink ? anchorRef : divRef;
  const { focusProps } = useFocusRing();

  const { menuItemProps } = useMenuItem(
    {
      key: props.item.key,
    },
    props.state,
    ref,
  );

  const commonProps = {
    ...mergeProps(menuItemProps, focusProps),
    className: styles.menuItemWrapper,
  };

  if (isLink) {
    return (
      <a
        {...commonProps}
        ref={anchorRef}
        href={props.item.props?.href}
        target={props.item.props?.target}
        rel={props.item.props?.rel}
      >
        {props.item.rendered}
      </a>
    );
  }

  return (
    <div {...commonProps} ref={divRef}>
      {props.item.rendered}
    </div>
  );
};
/* c8 ignore stop */
