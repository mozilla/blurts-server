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
import {
  mergeProps,
  useMenuTrigger,
  useMenu,
  useMenuItem,
  useButton,
} from "react-aria";

import type { AriaMenuOptions, AriaMenuTriggerProps } from "react-aria";
import type { MenuTriggerProps, TreeState } from "react-stately";
import type { Node } from "@react-types/shared";
import type { ReactNode, Key } from "react";

import { Popover } from "../Popover";
import { useL10n } from "../../../hooks/l10n";
import { useTelemetry } from "../../../hooks/useTelemetry";
import styles from "./UserMenu.module.scss";
import OpenInIcon from "./images/menu-icon-open-in.svg";
import SettingsIcon from "./images/menu-icon-settings.svg";
import ContactIcon from "./images/menu-icon-contact.svg";
import HelpIcon from "./images/menu-icon-help.svg";
import SignOutIcon from "./images/menu-icon-signout.svg";
import {
  CONST_URL_PLUS_CONTACT_SUPPORT,
  CONST_URL_SUMO_MONITOR_SUPPORT,
} from "../../../../constants";
import { hasPremium } from "../../../functions/universal/user";

export type UserMenuProps = {
  user: Session["user"];
  fxaSettingsUrl: string;
};

export const UserMenu = (props: UserMenuProps) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();

  const fxaItemRef = useRef<HTMLAnchorElement>(null);
  const settingsItemRef = useRef<HTMLAnchorElement>(null);
  const contactItemRef = useRef<HTMLAnchorElement>(null);
  const helpItemRef = useRef<HTMLAnchorElement>(null);
  const signOutItemRef = useRef<HTMLButtonElement>(null);

  const itemKeys = {
    fxa: "fxa",
    settings: "settings",
    contact: "contact",
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
      case itemKeys.contact:
        contactItemRef.current?.click();
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
          href={props.fxaSettingsUrl}
          ref={fxaItemRef}
          rel="noopener noreferrer"
          target="_blank"
          onClick={() =>
            recordTelemetry("ctaButton", "click", {
              button_id: "manage_account_user_menu",
            })
          }
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
          href="/user/settings"
          ref={settingsItemRef}
          title={l10n.getString("user-menu-settings-tooltip")}
        >
          <Image src={SettingsIcon} alt="" height={24} width={24} />
          {l10n.getString("user-menu-settings-label")}
        </Link>
      </Item>
      {hasPremium(props.user) && (
        <Item
          key={itemKeys.contact}
          textValue={l10n.getString("user-menu-contact-label")}
        >
          <a
            className={styles.menuItemCta}
            href={CONST_URL_PLUS_CONTACT_SUPPORT}
            ref={contactItemRef}
            rel="noopener noreferrer"
            target="_blank"
            title={l10n.getString("user-menu-contact-tooltip")}
          >
            <Image src={ContactIcon} alt="" height={24} width={24} />
            {l10n.getString("user-menu-contact-label")}
          </a>
        </Item>
      )}
      <Item
        key={itemKeys.help}
        textValue={l10n.getString("user-menu-help-label")}
      >
        <a
          className={styles.menuItemCta}
          href={CONST_URL_SUMO_MONITOR_SUPPORT}
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
  const recordTelemetry = useTelemetry();

  const state = useMenuTriggerState(props);
  const ref = useRef(null);
  const popoverRef = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
  const items = menuProps.items as Array<Node<object>>;

  const mergedMenuProps = mergeProps(props, { ...menuProps, items });

  const menuTiggerButton = useButton(menuTriggerProps, ref);

  return (
    <>
      <button
        {...menuTiggerButton.buttonProps}
        ref={ref}
        className={styles.trigger}
        title={l10n.getString("user-menu-trigger-tooltip")}
        onClick={() => {
          state.open();
          recordTelemetry("ctaButton", "click", {
            button_id: "opened_user_menu",
          });
        }}
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
          offset={20}
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
  const recordTelemetry = useTelemetry();

  return (
    <li
      {...menuItemProps}
      ref={ref}
      className={`${styles.menuItemWrapper}`}
      onClick={() => {
        const buttonId =
          item.textValue.replaceAll(" ", "_").toLowerCase() + "_user_menu";
        recordTelemetry("ctaButton", "click", {
          button_id: buttonId,
        });
      }}
    >
      {item.rendered}
    </li>
  );
}
