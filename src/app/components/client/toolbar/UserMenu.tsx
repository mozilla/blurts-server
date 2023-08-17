/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import type { AriaMenuProps } from "react-aria";
import { useMenuTriggerState, useTreeState, Item } from "react-stately";
import { useMenuTrigger, useMenu, useMenuItem } from "react-aria";
import { useRef } from "react";
import styles from "./UserMenu.module.scss";
import { useL10n } from "../../../hooks/l10n";
import { Popover } from "../Popover";

import OpenInIcon from "./images/menu-icon-open-in.svg";
import SettingsIcon from "./images/menu-icon-settings.svg";
import HelpIcon from "./images/menu-icon-help.svg";
import SignOutIcon from "./images/menu-icon-signout.svg";
import { SignInButton } from "../../../(nextjs_migration)/components/client/SignInButton";

export type Props = {
  user: Session["user"] | null;
};

export const UserMenu = (props: Props) => {
  const l10n = useL10n();

  if (!props.user) {
    return <SignInButton autoSignIn />;
  }

  const menuItemsData = [
    {
      key: "fxa",
      label: l10n.getString("user-menu-manage-fxa-label"),
      icon: OpenInIcon,
      itemType: "external",
      linkHref: "/redesign/user/fxa/",
    },
    {
      key: "settings",
      label: l10n.getString("user-menu-settings-label"),
      icon: SettingsIcon,
      itemType: "internal",
      tooltipText: l10n.getString("user-menu-settings-tooltip"),
      linkHref: "/redesign/user/settings/",
    },
    {
      key: "help",
      label: l10n.getString("user-menu-help-label"),
      icon: HelpIcon,
      itemType: "internal",
      tooltipText: l10n.getString("user-menu-help-tooltip"),
      linkHref: "/redesign/user/link/",
    },
    {
      key: "sign-out",
      label: l10n.getString("user-menu-signout-label"),
      icon: SignOutIcon,
      itemType: "button",
      tooltipText: l10n.getString("user-menu-signout-tooltip"),
      linkHref: "/redesign/user/sign-out/",
    },
  ];

  return (
    <MenuTrigger
      user={props.user}
      onAction={(menuItemKey: any) => console.log(menuItemKey)}
    >
      {menuItemsData.map((menuItem) => (
        <Item key={menuItem.key} textValue={menuItem.label}>
          {/* <b className={styles["user-email"]}>
              {props.user.email}
              user email
            </b> */}
          <a
            href={menuItem.linkHref}
            target="_blank"
            className={styles.menuItemCta}
          >
            <Image src={menuItem.icon} alt="" height={24} width={24} />
            {menuItem.label}
          </a>
          {/* <button
              title={menuItem.tooltipText}
            >
              <Image src={SignOutIcon} alt="" height={24} width={24} />
              {l10n.getString("user-menu-signout-label")}
            </button> */}
        </Item>
      ))}
    </MenuTrigger>
  );
};

function MenuTrigger(props: any) {
  const l10n = useL10n();
  const state = useMenuTriggerState(props);

  const ref = useRef(null);
  const popoverRef = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

  return (
    <div className={styles.wrapper}>
      <button
        {...menuTriggerProps}
        ref={ref}
        onClick={() => state.open()}
        className={styles.trigger}
      >
        <img
          src={props.user.fxa?.avatar}
          alt={l10n.getString("user-menu-trigger-open-label")}
          // alt={l10n.getString("user-menu-trigger-close-label")}
          width={42}
          height={42}
        />
      </button>
      {state.isOpen && (
        <Popover
          state={state}
          isVisible={state.isOpen}
          triggerRef={ref}
          popoverRef={popoverRef}
        >
          <Menu {...props} {...menuProps} />
        </Popover>
      )}
    </div>
  );
}

function Menu<T extends object>(props: AriaMenuProps<T>) {
  const state = useTreeState(props);

  const ref = useRef(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref} className={styles.menuList}>
      {[...state.collection].map((item) => (
        <MenuItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

function MenuItem({ item, state }: { item: any; state: any }) {
  const ref = useRef(null);
  const { menuItemProps } = useMenuItem({ key: item.key }, state, ref);

  return (
    <li {...menuItemProps} ref={ref} className={`${styles.menuItemWrapper}`}>
      {item.rendered}
    </li>
  );
}
