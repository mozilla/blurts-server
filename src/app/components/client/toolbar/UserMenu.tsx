/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRef } from "react";
import Image from "next/image";
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
import type { ReactNode } from "react";

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

  const itemKeys = {
    fxa: "fxa",
    settings: "settings",
    contact: "contact",
    help: "help",
    signout: "signout",
  };

  const handleAction = (key: React.Key) => {
    switch (key) {
      case itemKeys.fxa:
        recordTelemetry("ctaButton", "click", {
          button_id: "manage_account_user_menu",
        });
        break;
      case itemKeys.settings:
        recordTelemetry("ctaButton", "click", {
          button_id: "settings_user_menu",
        });
        break;
      case itemKeys.contact:
        recordTelemetry("ctaButton", "click", {
          button_id: "contact_us_user_menu",
        });
        break;
      case itemKeys.help:
        recordTelemetry("ctaButton", "click", {
          button_id: "help_and_support_user_menu",
        });
        break;
      case itemKeys.signout:
        recordTelemetry("ctaButton", "click", {
          button_id: "sign_out_user_menu",
        });
        void signOut({ callbackUrl: "/" });
        break;
    }
  };

  return (
    <MenuTrigger user={props.user} onAction={handleAction}>
      <Item
        key={itemKeys.fxa}
        textValue={l10n.getString("user-menu-manage-fxa-label")}
        href={props.fxaSettingsUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className={styles.manageFXAItem}>
          <b>{props.user.email}</b>
          <span className={styles.menuItemCta}>
            {l10n.getString("user-menu-manage-fxa-label")}
            <Image src={OpenInIcon} alt="" height={24} width={24} />
          </span>
        </div>
      </Item>
      <Item
        key={itemKeys.settings}
        textValue={l10n.getString("user-menu-settings-label")}
        href="/user/settings"
      >
        <Image src={SettingsIcon} alt="" height={24} width={24} />
        {l10n.getString("user-menu-settings-label")}
      </Item>
      {hasPremium(props.user) && (
        <Item
          key={itemKeys.contact}
          textValue={l10n.getString("user-menu-contact-label")}
          href={CONST_URL_PLUS_CONTACT_SUPPORT}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src={ContactIcon} alt="" height={24} width={24} />
          {l10n.getString("user-menu-contact-label")}
        </Item>
      )}
      <Item
        key={itemKeys.help}
        textValue={l10n.getString("user-menu-help-label")}
        href={CONST_URL_SUMO_MONITOR_SUPPORT}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image src={HelpIcon} alt="" height={24} width={24} />
        {l10n.getString("user-menu-help-label")}
      </Item>
      <Item
        key={itemKeys.signout}
        textValue={l10n.getString("user-menu-signout-label")}
      >
        <Image src={SignOutIcon} alt="" height={24} width={24} />
        {l10n.getString("user-menu-signout-label")}
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
  const isLink = !!item.props.href;
  const ref = useRef<HTMLElement>(null);

  const { menuItemProps } = useMenuItem(
    {
      key: item.key,
      ...(isLink ? { elementType: "a" } : {}),
    },
    state,
    ref,
  );

  return (
    <li role="none" className={styles.menuItemWrapper}>
      {isLink ? (
        <a
          {...menuItemProps}
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={item.props.href}
          target={item.props.target}
          rel={item.props.rel}
          title={item.props.title}
          className={styles.menuItemCta}
        >
          {item.rendered}
        </a>
      ) : (
        <button
          {...menuItemProps}
          ref={ref as React.RefObject<HTMLButtonElement>}
          title={item.props.title}
          className={styles.menuItemCta}
        >
          {item.rendered}
        </button>
      )}
    </li>
  );
}
