/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Item, useMenuTriggerState, useTreeState } from "react-stately";
import { mergeProps, useMenuTrigger, useMenu, useMenuItem } from "react-aria";

import type { AriaMenuOptions, AriaMenuTriggerProps } from "react-aria";
import type { MenuTriggerProps, TreeState } from "react-stately";
import type { Node } from "@react-types/shared";
import type { ReactNode, Key } from "react";

import { Popover } from "../Popover";
import { useL10n } from "../../../hooks/l10n";
import styles from "./UserMenu.module.scss";
import OpenInIcon from "./images/menu-icon-open-in.svg";
import SettingsIcon from "./images/menu-icon-settings.svg";
import HelpIcon from "./images/menu-icon-help.svg";
import SignOutIcon from "./images/menu-icon-signout.svg";

export type UserMenuProps = {
  user?: Session["user"];
};

export const UserMenu = (props: UserMenuProps) => {
  const l10n = useL10n();

  const fxaItemRef = useRef<HTMLAnchorElement>(null);
  const settingsItemRef = useRef<HTMLAnchorElement>(null);
  const helpItemRef = useRef<HTMLAnchorElement>(null);
  const signOutItemRef = useRef<HTMLButtonElement>(null);

  if (!props.user) {
    return null;
  }

  const itemKeys = {
    fxa: "fxa",
    settings: "settings",
    help: "help",
    signout: "signout",
  };

  const handleOnAction = (menuItemKey: Key) => {
    switch (menuItemKey) {
      case itemKeys.fxa:
        fxaItemRef.current?.click();
        break;
      case itemKeys.settings:
        settingsItemRef.current?.click();
        break;
      case itemKeys.help:
        helpItemRef.current?.click();
        break;
      case itemKeys.signout:
        signOutItemRef.current?.click();
        break;
    }
  };

  return (
    <MenuTrigger user={props.user} onAction={handleOnAction}>
      <Item
        key={itemKeys.fxa}
        textValue={l10n.getString("user-menu-manage-fxa-label")}
      >
        <b>{props.user.email}</b>
        <a
          className={styles.menuItemCta}
          href={process.env.NEXT_PUBLIC_FXA_SETTINGS_URL}
          ref={fxaItemRef}
          rel="noopener noreferrer"
          target="_blank"
        >
          {l10n.getString("user-menu-manage-fxa-label")}
          <Image src={OpenInIcon} alt="" height={24} width={24} />
        </a>
      </Item>
      <Item
        key={itemKeys.settings}
        textValue={l10n.getString("user-menu-settings-label")}
      >
        <Link
          className={styles.menuItemCta}
          href="/redesign/user/settings/"
          ref={settingsItemRef}
          title={l10n.getString("user-menu-settings-tooltip")}
        >
          <Image src={SettingsIcon} alt="" height={24} width={24} />
          {l10n.getString("user-menu-settings-label")}
        </Link>
      </Item>
      <Item
        key={itemKeys.help}
        textValue={l10n.getString("user-menu-help-label")}
      >
        <a
          className={styles.menuItemCta}
          href={process.env.NEXT_PUBLIC_EXTERNAL_SUPPORT_URL}
          ref={helpItemRef}
          rel="noopener noreferrer"
          target="_blank"
          title={l10n.getString("user-menu-help-tooltip")}
        >
          <Image src={HelpIcon} alt="" height={24} width={24} />
          {l10n.getString("user-menu-help-label")}
        </a>
      </Item>
      <Item
        key={itemKeys.signout}
        textValue={l10n.getString("user-menu-signout-label")}
      >
        <button
          className={styles.menuItemCta}
          ref={signOutItemRef}
          title={l10n.getString("user-menu-signout-tooltip")}
          onClick={() => void signOut({ callbackUrl: "/" })}
        >
          <Image src={SignOutIcon} alt="" height={24} width={24} />
          {l10n.getString("user-menu-signout-label")}
        </button>
      </Item>
    </MenuTrigger>
  );
};

type MenuTriggerComponentProps = MenuTriggerProps &
  AriaMenuOptions<object> & {
    children: ReactNode;
    user: Session["user"];
  };

function MenuTrigger(props: MenuTriggerComponentProps) {
  const l10n = useL10n();

  const state = useMenuTriggerState(props);
  const ref = useRef(null);
  const popoverRef = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
  const items = menuProps.items as Array<Node<object>>;

  const mergedMenuProps = mergeProps(props, { ...menuProps, items });

  return (
    <>
      <button
        {...menuTriggerProps}
        ref={ref}
        className={styles.trigger}
        title={l10n.getString("user-menu-trigger-tooltip")}
        onClick={() => state.open()}
      >
        {props.user.fxa?.avatar && (
          <Image
            alt={l10n.getString("user-menu-trigger-label")}
            height={42}
            src={props.user.fxa?.avatar}
            unoptimized
            width={42}
          />
        )}
      </button>
      {state.isOpen && (
        <Popover
          offset={16}
          popoverRef={popoverRef}
          state={state}
          triggerRef={ref}
        >
          <Menu {...mergedMenuProps} />
        </Popover>
      )}
    </>
  );
}

type MenuProps = AriaMenuOptions<object> &
  MenuTriggerProps &
  AriaMenuTriggerProps;

function Menu(props: MenuProps) {
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

type MenuItemProps = {
  item: Node<object>;
  state: TreeState<object>;
};

function MenuItem({ item, state }: MenuItemProps) {
  const ref = useRef(null);
  const { menuItemProps } = useMenuItem({ key: item.key }, state, ref);

  return (
    <li {...menuItemProps} ref={ref} className={`${styles.menuItemWrapper}`}>
      {item.rendered}
    </li>
  );
}
