/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, cloneElement, useRef, useState } from "react";
import {
  AriaDialogProps,
  AriaPopoverProps,
  AriaTableCellProps,
  AriaTableColumnHeaderProps,
  AriaTableProps,
  DismissButton,
  GridRowProps,
  Overlay,
  mergeProps,
  useButton,
  useDialog,
  useFocusRing,
  useOverlayTrigger,
  usePopover,
  useTable,
  useTableCell,
  useTableColumnHeader,
  useTableHeaderRow,
  useTableRow,
  useTableRowGroup,
} from "react-aria";
import {
  Cell,
  Column,
  OverlayTriggerProps,
  OverlayTriggerState,
  Row,
  TableBody,
  TableHeader,
  TableState,
  TableStateProps,
  useOverlayTriggerState,
  useTableState,
} from "react-stately";
import styles from "./PlansTable.module.scss";
import { useL10n } from "../../../hooks/l10n";
import {
  CheckIcon,
  QuestionMarkCircle,
} from "../../../components/server/Icons";
import { VisuallyHidden } from "../../../components/server/VisuallyHidden";
import {
  BillingPeriod,
  BillingPeriodToggle,
} from "../../../components/client/BillingPeriod";
import { getLocale } from "../../../functions/universal/getLocale";
import { Button } from "../../../components/server/Button";
import { signIn } from "next-auth/react";
import getPremiumSubscriptionUrl from "../../../functions/server/getPremiumSubscriptionUrl";

export type Props = {
  "aria-labelledby": string;
};

const monthlyPriceAnnualBilling = 13.37;
const monthlyPriceMonthlyBilling = 42.42;

export const PlansTable = (props: Props) => {
  const l10n = useL10n();
  const roundedPriceFormatter = new Intl.NumberFormat(getLocale(l10n), {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  });
  const priceFormatter = new Intl.NumberFormat(getLocale(l10n), {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  });
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");

  return (
    <Table aria-labelledby={props["aria-labelledby"]} selectionMode="none">
      <TableHeader>
        <Column>
          {l10n.getString("landing-premium-plans-table-heading-feature")}
        </Column>
        <Column>
          <h3>
            {l10n.getString("landing-premium-plans-table-heading-free-title")}
          </h3>
          <p>
            {l10n.getString(
              "landing-premium-plans-table-heading-free-subtitle",
            )}
          </p>
        </Column>
        <Column>
          <b className={styles.badge}>
            {l10n.getString("landing-premium-plans-table-annotation-plus")}
          </b>
          <h3>
            {l10n.getFragment(
              "landing-premium-plans-table-heading-plus-title",
              { elems: { b: <b /> } },
            )}
          </h3>
          <p>
            {l10n.getString(
              "landing-premium-plans-table-heading-plus-subtitle",
            )}
          </p>
        </Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>
            {l10n.getString("landing-premium-plans-table-feature-scan-label", {
              dataBrokerTotalCount: process.env
                .NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
            })}
          </Cell>
          <Cell>
            {l10n.getString("landing-premium-plans-table-feature-scan-free")}
          </Cell>
          <Cell>
            {l10n.getString("landing-premium-plans-table-feature-scan-plus")}
          </Cell>
        </Row>
        <Row>
          <Cell>
            {l10n.getString(
              "landing-premium-plans-table-feature-removal-label",
            )}
          </Cell>
          <Cell>
            {l10n.getString("landing-premium-plans-table-feature-removal-free")}
            <InfoPopover>
              <PopoverContent>
                {l10n.getString(
                  "landing-premium-plans-table-feature-removal-free-callout",
                )}
              </PopoverContent>
            </InfoPopover>
          </Cell>
          <Cell>
            {l10n.getString("landing-premium-plans-table-feature-removal-plus")}
            <InfoPopover>
              <PopoverContent>
                {l10n.getString(
                  "landing-premium-plans-table-feature-removal-plus-callout",
                  {
                    dataBrokerTotalCount: process.env
                      .NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                  },
                )}
              </PopoverContent>
            </InfoPopover>
          </Cell>
        </Row>
        <Row>
          <Cell>
            {l10n.getString("landing-premium-plans-table-feature-alerts-label")}
          </Cell>
          <Cell>
            <CheckIcon
              className={styles.checkIcon}
              alt={l10n.getString(
                "landing-premium-plans-table-feature-alerts-free",
              )}
            />
          </Cell>
          <Cell>
            <CheckIcon
              className={styles.checkIcon}
              alt={l10n.getString(
                "landing-premium-plans-table-feature-alerts-plus",
              )}
            />
          </Cell>
        </Row>
        <Row>
          <Cell>
            {l10n.getString(
              "landing-premium-plans-table-feature-guidance-label",
            )}
          </Cell>
          <Cell>
            {l10n.getString(
              "landing-premium-plans-table-feature-guidance-free",
            )}
          </Cell>
          <Cell>
            {l10n.getString(
              "landing-premium-plans-table-feature-guidance-plus",
            )}
          </Cell>
        </Row>
        <Row>
          <Cell>
            {l10n.getString(
              "landing-premium-plans-table-feature-monitoring-label",
            )}
          </Cell>
          <Cell>
            <CheckIcon
              className={styles.checkIcon}
              alt={l10n.getString(
                "landing-premium-plans-table-feature-monitoring-free",
              )}
            />
          </Cell>
          <Cell>
            <CheckIcon
              className={styles.checkIcon}
              alt={l10n.getString(
                "landing-premium-plans-table-feature-monitoring-plus",
              )}
            />
          </Cell>
        </Row>
        <Row>
          <Cell>
            <VisuallyHidden>
              {l10n.getString("landing-premium-plans-table-billing-label")}
            </VisuallyHidden>
          </Cell>
          <Cell>
            <div className={styles.priceCell}>
              <p className={styles.billingPeriod}>
                {l10n.getString("landing-premium-plans-table-billing-free")}
              </p>
              <p className={styles.cost}>
                <b className={styles.price}>
                  {roundedPriceFormatter.format(0)}
                </b>
                <span className={styles.total} />
              </p>
              <Button variant="secondary" onPress={() => void signIn("fxa")}>
                {l10n.getString("landing-premium-plans-table-cta-free-label")}
              </Button>
              <small className={styles.reassurance}>
                {l10n.getString(
                  "landing-premium-plans-table-reassurance-free-label",
                )}
              </small>
            </div>
          </Cell>
          <Cell>
            <div className={styles.priceCell}>
              <div className={styles.billingPeriod}>
                <BillingPeriodToggle
                  onChange={(newValue) => setBillingPeriod(newValue)}
                />
              </div>
              <p aria-live="polite" className={styles.cost}>
                <b className={styles.price}>
                  {billingPeriod === "yearly"
                    ? l10n.getString(
                        "landing-premium-plans-table-price-plus-yearly",
                        {
                          monthlyPrice: priceFormatter.format(
                            monthlyPriceAnnualBilling,
                          ),
                        },
                      )
                    : l10n.getString(
                        "landing-premium-plans-table-price-plus-monthly",
                        {
                          monthlyPrice: priceFormatter.format(
                            monthlyPriceMonthlyBilling,
                          ),
                        },
                      )}
                </b>
                <span className={styles.total}>
                  {billingPeriod === "yearly" && (
                    <em className={styles.discount}>
                      {l10n.getString(
                        "landing-premium-plans-table-price-plus-yearly-discount",
                        {
                          discountPercentage:
                            ((monthlyPriceMonthlyBilling -
                              monthlyPriceAnnualBilling) *
                              100) /
                            monthlyPriceMonthlyBilling,
                        },
                      )}
                    </em>
                  )}
                  <br />
                  <span className={styles.sum}>
                    {l10n.getString(
                      "landing-premium-plans-table-price-plus-yearly-sum",
                      {
                        yearlyPrice: priceFormatter.format(
                          12 *
                            (billingPeriod === "yearly"
                              ? monthlyPriceAnnualBilling
                              : monthlyPriceMonthlyBilling),
                        ),
                      },
                    )}
                  </span>
                </span>
              </p>
              <Button
                variant="primary"
                href={getPremiumSubscriptionUrl({ type: billingPeriod })}
              >
                {l10n.getString("landing-premium-plans-table-cta-plus-label")}
              </Button>
              <small className={styles.reassurance}>
                {l10n.getString(
                  "landing-premium-plans-table-reassurance-plus-label",
                )}
              </small>
            </div>
          </Cell>
        </Row>
      </TableBody>
    </Table>
  );
};

const Table = (props: TableStateProps<object> & AriaTableProps<object>) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const tableState = useTableState(props);
  const { collection } = tableState;
  const { gridProps } = useTable(props, tableState, tableRef);

  return (
    <table {...gridProps} ref={tableRef} className={styles.plansTable}>
      <TableRowGroup type="thead">
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow
            key={headerRow.key}
            item={headerRow}
            state={tableState}
          >
            {[...headerRow.childNodes].map((column) => (
              <TableColumnHeader
                key={column.key}
                column={column}
                state={tableState}
              />
            ))}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      <TableRowGroup type="tbody">
        {[...collection.body.childNodes].map((row) => (
          <TableRow key={row.key} item={row} state={tableState}>
            {[...row.childNodes].map((cell) => (
              <TableCell key={cell.key} cell={cell} state={tableState} />
            ))}
          </TableRow>
        ))}
      </TableRowGroup>
    </table>
  );
};

const TableRowGroup = (props: {
  type: "thead" | "tbody";
  children: ReactNode;
}) => {
  const { rowGroupProps } = useTableRowGroup();

  return props.type === "thead" ? (
    <thead {...rowGroupProps}>{props.children}</thead>
  ) : (
    <tbody {...rowGroupProps}>{props.children}</tbody>
  );
};

const TableHeaderRow = (props: {
  item: GridRowProps<object>["node"];
  state: TableState<object>;
  children: ReactNode;
}) => {
  const rowRef = useRef<HTMLTableRowElement>(null);
  const { rowProps } = useTableHeaderRow(
    { node: props.item },
    props.state,
    rowRef,
  );

  return (
    <tr {...rowProps} ref={rowRef}>
      {props.children}
    </tr>
  );
};

const TableColumnHeader = (props: {
  column: AriaTableColumnHeaderProps<unknown>["node"];
  state: TableState<object>;
}) => {
  const columnRef = useRef<HTMLTableCellElement>(null);
  const { columnHeaderProps } = useTableColumnHeader(
    { node: props.column },
    props.state,
    columnRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <th
      {...mergeProps(columnHeaderProps, focusProps)}
      colSpan={props.column.colspan}
      ref={columnRef}
      // We don't currently do anything with focused table cells, so we don't
      // have any tests for it either:
      /* c8 ignore next */
      className={`${isFocusVisible ? styles.isFocused : styles.isBlurred} ${
        props.column.index === 0
          ? `${styles.featureCell} ${styles.featureHeadingCell}`
          : props.column.index === 1
            ? `${styles.freeCell} ${styles.freeHeadingCell}`
            : `${styles.plusCell} ${styles.plusHeadingCell}`
      }`}
    >
      {props.column.rendered}
    </th>
  );
};

const TableRow = (props: {
  item: GridRowProps<unknown>["node"];
  state: TableState<object>;
  children: ReactNode;
}) => {
  const rowRef = useRef<HTMLTableRowElement>(null);
  const { rowProps, isPressed } = useTableRow(
    { node: props.item },
    props.state,
    rowRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <tr
      {...mergeProps(rowProps, focusProps)}
      ref={rowRef}
      // We don't currently do anything with focused table cells, so we don't
      // have any tests for it either:
      /* c8 ignore next 3 */
      className={`${isFocusVisible ? styles.isFocused : styles.isBlurred} ${
        isPressed ? styles.isPressed : styles.isUnpressed
      }`}
    >
      {props.children}
    </tr>
  );
};

const TableCell = (props: {
  cell: AriaTableCellProps["node"];
  state: TableState<object>;
}) => {
  const cellRef = useRef<HTMLTableCellElement>(null);
  const { gridCellProps } = useTableCell(
    { node: props.cell },
    props.state,
    cellRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  if (props.cell.column?.index === 0) {
    return (
      <th
        {...mergeProps(gridCellProps, focusProps)}
        ref={cellRef}
        className={`${styles.tableCell} ${
          // We don't currently do anything with focused table cells, so we don't
          // have any tests for it either:
          /* c8 ignore next */
          isFocusVisible ? styles.isFocused : styles.isBlurred
        } ${styles.featureCell} ${styles.featureBodyCell}`}
      >
        <span className={styles.cellWrapper}>{props.cell.rendered}</span>
      </th>
    );
  }

  return (
    <td
      {...mergeProps(gridCellProps, focusProps)}
      ref={cellRef}
      className={`${styles.tableCell} ${
        // We don't currently do anything with focused table cells, so we don't
        // have any tests for it either:
        /* c8 ignore next */
        isFocusVisible ? styles.isFocused : styles.isBlurred
      } ${
        props.cell.column?.index === 1
          ? `${styles.freeCell} ${styles.freeBodyCell}`
          : `${styles.plusCell} ${styles.plusBodyCell}`
      }`}
    >
      <span className={styles.cellWrapper}>{props.cell.rendered}</span>
    </td>
  );
};

const InfoPopover = ({
  children,
  ...otherProps
}: { children: Parameters<typeof cloneElement>[0] } & OverlayTriggerProps) => {
  const l10n = useL10n();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const triggerState = useOverlayTriggerState(otherProps);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    triggerState,
    triggerRef,
  );
  const { buttonProps } = useButton(triggerProps, triggerRef);

  return (
    <>
      <button
        {...buttonProps}
        ref={triggerRef}
        className={styles.popoverTrigger}
      >
        <QuestionMarkCircle
          alt={l10n.getString(
            "landing-premium-plans-table-feature-callout-trigger",
          )}
        />
      </button>
      {triggerState.isOpen && (
        <Popover
          {...otherProps}
          offset={4}
          triggerRef={triggerRef}
          state={triggerState}
        >
          {cloneElement(children, overlayProps)}
        </Popover>
      )}
    </>
  );
};

type PopoverProps = Omit<AriaPopoverProps, "popoverRef"> & {
  children: ReactNode;
  state: OverlayTriggerState;
};
const Popover = ({ children, state, ...props }: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state,
  );

  return (
    <Overlay>
      <div {...underlayProps} className={styles.popoverUnderlay} />
      <div {...popoverProps} ref={popoverRef} className={styles.popover}>
        <svg
          {...arrowProps}
          className={styles.popoverArrow}
          data-placement={placement}
          viewBox="0 0 12 12"
        >
          <path d="M0 0 L6 6 L12 0" />
        </svg>
        {/* <DismissButton>s are visually hidden and thus not reachable in tests: */}
        {/* c8 ignore next */}
        <DismissButton onDismiss={() => state.close()} />
        {children}
        {/* <DismissButton>s are visually hidden and thus not reachable in tests: */}
        {/* c8 ignore next */}
        <DismissButton onDismiss={() => state.close()} />
      </div>
    </Overlay>
  );
};

const PopoverContent = ({
  children,
  ...otherProps
}: AriaDialogProps & { children: ReactNode }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogProps } = useDialog(otherProps, dialogRef);

  return (
    <div {...dialogProps} ref={dialogRef} style={{ outline: "none" }}>
      {children}
    </div>
  );
};
