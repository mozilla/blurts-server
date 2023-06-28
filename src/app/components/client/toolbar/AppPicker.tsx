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
  OverlayTriggerState,
  Node,
} from "react-stately";
import {
  useMenuTrigger,
  useButton,
  useMenu,
  DismissButton,
  useMenuItem,
  AriaMenuProps,
  AriaPopoverProps,
  usePopover,
  Overlay,
} from "react-aria";
import { Key, ReactNode, useRef, RefObject } from "react";
import Image from "next/image";
import { ReactLocalization } from "@fluent/react";
import styles from "./AppPicker.module.scss";
import FirefoxLogo from "./images/fx.png";
import RelayLogo from "./images/relay-logo.svg";
import PocketLogo from "./images/pocket-logo.svg";
import VpnLogo from "./images/vpn.svg";
import FxDesktopLogo from "./images/fx-logo.svg";
import FxMobileLogo from "./images/fx-mobile.png";
import { useL10n } from "../../../hooks/l10n";
import { BentoIcon } from "../../server/Icons";
import { gaEvent } from "../../../functions/client/gaEvent";

const getProducts = (referringHost: string, l10n: ReactLocalization) => ({
  relay: {
    id: "relay",
    url: `https://relay.firefox.com/?utm_source=${encodeURIComponent(
      referringHost
    )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`,
    title: l10n.getString("toolbar-app-picker-product-relay"),
    gaLabel: "fx-relay",
  },
  pocket: {
    id: "pocket",
    url: "https://app.adjust.com/hr2n0yz?engagement_type=fallback_click&fallback=https%3A%2F%2Fgetpocket.com%2Ffirefox_learnmore%3Fsrc%3Dff_bento&fallback_lp=https%3A%2F%2Fapps.apple.com%2Fapp%2Fpocket-save-read-grow%2Fid309601447",
    title: l10n.getString("toolbar-app-picker-product-pocket"),
    gaLabel: "pocket",
  },
  fxDesktop: {
    id: "fxDesktop",
    url: `https://www.mozilla.org/firefox/new/?utm_source=${encodeURIComponent(
      referringHost
    )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`,
    title: l10n.getString("toolbar-app-picker-product-fx-desktop"),
    gaLabel: "fx-desktop",
  },
  fxMobile: {
    id: "fxMobile",
    url: `https://www.mozilla.org/firefox/browsers/mobile/?utm_source=${encodeURIComponent(
      referringHost
    )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`,
    title: l10n.getString("toolbar-app-picker-product-fx-mobile"),
    gaLabel: "fx-mobile",
  },
  vpn: {
    id: "vpn",
    url: `https://www.mozilla.org/products/vpn/?utm_source=${encodeURIComponent(
      referringHost
    )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`,
    title: l10n.getString("toolbar-app-picker-product-vpn"),
    gaLabel: "vpn",
  },
});

/**
 * Menu that can be opened to see other relevant products Mozilla has available for people.
 */
export const AppPicker = () => {
  const l10n = useL10n();

  const referringHost =
    typeof document !== "undefined"
      ? document.location.host
      : "monitor.firefox.com";
  const products = getProducts(referringHost, l10n);
  const linkRefs: Record<
    keyof typeof products,
    RefObject<HTMLAnchorElement>
  > = {
    relay: useRef<HTMLAnchorElement>(null),
    pocket: useRef<HTMLAnchorElement>(null),
    fxDesktop: useRef<HTMLAnchorElement>(null),
    fxMobile: useRef<HTMLAnchorElement>(null),
    vpn: useRef<HTMLAnchorElement>(null),
  };
  const mozillaLinkRef = useRef<HTMLAnchorElement>(null);

  const onSelect = (itemKey: Key) => {
    Object.entries(products).forEach(([key, productData]) => {
      if (itemKey === productData.id) {
        linkRefs[key as keyof typeof products].current?.click();
        gaEvent({
          category: "bento",
          action: "bento-app-link-click",
          label: productData.gaLabel,
        });
      }
    });
    if (itemKey === "mozilla") {
      mozillaLinkRef.current?.click();
      gaEvent({
        category: "bento",
        action: "bento-app-link-click",
        label: "Mozilla",
      });
    }
  };

  return (
    <AppPickerTrigger
      label={l10n.getString("toolbar-app-picker-trigger-title")}
      onAction={onSelect}
      referringHost={referringHost}
    >
      <Item key={products.vpn.id} textValue={products.vpn.title}>
        <a
          ref={linkRefs.vpn}
          href={products.vpn.url}
          className={`${styles["menuLink"]} ${styles.vpnLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={VpnLogo} alt="" width={16} height={16} />
          {products.vpn.title}
        </a>
      </Item>
      <Item key={products.relay.id} textValue={products.relay.title}>
        <a
          ref={linkRefs.relay}
          href={products.relay.url}
          className={`${styles["menuLink"]} ${styles.relayLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={RelayLogo} alt="" width={16} height={16} />
          {products.relay.title}
        </a>
      </Item>
      <Item key={products.pocket.id} textValue={products.pocket.title}>
        <a
          ref={linkRefs.pocket}
          href={products.pocket.url}
          className={`${styles["menuLink"]} ${styles.pocketLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={PocketLogo} alt="" width={16} height={16} />
          {products.pocket.title}
        </a>
      </Item>
      <Item key={products.fxDesktop.id} textValue={products.fxDesktop.title}>
        <a
          ref={linkRefs.fxDesktop}
          href={products.fxDesktop.url}
          className={`${styles["menuLink"]} ${styles.fxDesktopLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={FxDesktopLogo} alt="" width={16} height={16} />
          {products.fxDesktop.title}
        </a>
      </Item>
      <Item key={products.fxMobile.id} textValue={products.fxMobile.title}>
        <a
          ref={linkRefs.fxMobile}
          href={products.fxMobile.url}
          className={`${styles["menuLink"]} ${styles.fxMobileLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={FxMobileLogo} alt="" width={12} height={16} />
          {products.fxMobile.title}
        </a>
      </Item>

      <Item
        key="mozilla"
        textValue={l10n.getString("toolbar-app-picker-by-mozilla")}
      >
        <a
          ref={mozillaLinkRef}
          href={`https://www.mozilla.org/?utm_source=${encodeURIComponent(
            referringHost
          )}&utm_medium=referral&utm_campaign=bento&utm_content=desktop`}
          className={`${styles["menuLink"]} ${styles["mozillaLink"]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {l10n.getString("toolbar-app-picker-by-mozilla")}
        </a>
      </Item>
    </AppPickerTrigger>
  );
};

type AppPickerTriggerProps<T> = AriaMenuProps<T> &
  MenuTriggerProps & {
    label: string;
    referringHost: string;
  };
const AppPickerTrigger = <T extends object>({
  label,
  referringHost,
  ...otherProps
}: AppPickerTriggerProps<T>) => {
  const l10n = useL10n();
  const appPickerTriggerState = useMenuTriggerState({
    ...otherProps,
    onOpenChange: (isOpen) => {
      otherProps.onOpenChange?.(isOpen);
      gaEvent({
        category: "bento",
        action: appPickerTriggerState.isOpen ? "bento-opened" : "bento-closed",
        label: referringHost,
      });
    },
  });

  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    {},
    appPickerTriggerState,
    triggerButtonRef
  );

  const triggerButtonProps = useButton(
    menuTriggerProps,
    triggerButtonRef
  ).buttonProps;

  return (
    <div className={styles.wrapper}>
      <button
        {...triggerButtonProps}
        ref={triggerButtonRef}
        title={l10n.getString("toolbar-app-picker-trigger-title")}
        className={styles.trigger}
      >
        <BentoIcon alt={label} />
      </button>
      {appPickerTriggerState.isOpen && (
        <AppPickerPopover
          state={appPickerTriggerState}
          triggerRef={triggerButtonRef}
          placement="bottom"
        >
          <AppPickerMenu
            {...otherProps}
            {...menuProps}
            aria-label={l10n.getString("toolbar-app-picker-trigger-title")}
          />
        </AppPickerPopover>
      )}
    </div>
  );
};

type AppPickerPopoverProps = Omit<AriaPopoverProps, "popoverRef"> & {
  children: ReactNode;
  state: OverlayTriggerState;
};
const AppPickerPopover = ({
  children,
  state,
  ...otherProps
}: AppPickerPopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...otherProps,
      popoverRef: popoverRef,
    },
    state
  );

  // The <DismissButton> components allow screen reader users
  // to dismiss the popover easily.
  return (
    <Overlay>
      <div {...underlayProps} style={{ position: "fixed", inset: 0 }} />
      <div {...popoverProps} ref={popoverRef} className={styles.popover}>
        <div
          {...arrowProps}
          data-placement={placement}
          className={styles.triggerAnchor}
        />
        <DismissButton onDismiss={state.close} />
        <div className={styles.popup}>{children}</div>
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
};

type AppPickerMenuProps<T> = AriaMenuProps<T>;

const AppPickerMenu = <T extends object>(props: AppPickerMenuProps<T>) => {
  const l10n = useL10n();

  const menuState = useTreeState({ ...props });

  const menuRef = useRef<HTMLUListElement>(null);
  const menuProps = useMenu(props, menuState, menuRef).menuProps;

  return (
    <>
      <div className={styles.appPickerHeading}>
        <Image src={FirefoxLogo} alt="" width={32} height={32} />
        <h2>{l10n.getString("fx-makes-tech")}</h2>
      </div>
      <ul {...menuProps} ref={menuRef}>
        {Array.from(menuState.collection).map((item) => (
          <AppPickerItem key={item.key} item={item} state={menuState} />
        ))}
      </ul>
    </>
  );
};

type AppPickerItemProps<T> = {
  // TODO: Figure out correct type:
  item: Node<T>;
  state: TreeState<T>;
};

const AppPickerItem = <T extends object>(props: AppPickerItemProps<T>) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const { menuItemProps, isFocused } = useMenuItem(
    {
      key: props.item.key,
    },
    props.state,
    menuItemRef
  );

  return (
    <li
      {...menuItemProps}
      ref={menuItemRef}
      className={`${styles.menuItemWrapper} ${
        isFocused ? styles.isFocused : ""
      }`}
    >
      {props.item.rendered}
    </li>
  );
};
