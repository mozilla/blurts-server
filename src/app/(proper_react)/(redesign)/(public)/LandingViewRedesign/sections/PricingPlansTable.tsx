/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useCookies } from "react-cookie";
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  TableState,
  TableStateProps,
  useTableState,
} from "react-stately";
import {
  AriaTableCellProps,
  AriaTableColumnHeaderProps,
  AriaTableProps,
  GridRowProps,
  mergeProps,
  useFocusRing,
  useTable,
  useTableCell,
  useTableColumnHeader,
  useTableHeaderRow,
  useTableRow,
  useTableRowGroup,
} from "react-aria";
import { useL10n } from "../../../../../hooks/l10n";
import { useTelemetry } from "../../../../../hooks/useTelemetry";
import { getLocale } from "../../../../../functions/universal/getLocale";
import {
  BillingPeriod,
  BillingPeriodToggle,
} from "../../../../../components/client/BillingPeriod";
import { modifyAttributionsForUrlSearchParams } from "../../../../../functions/universal/attributions";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import {
  CONST_ONEREP_DATA_BROKER_COUNT,
  CONST_URL_MONITOR_LANDING_PAGE_ID,
} from "../../../../../../constants";
import styles from "./PricingPlansTable.module.scss";

export type Props = {
  "aria-labelledby": string;
  premiumSubscriptionUrl: {
    monthly: string;
    yearly: string;
  };
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
};

type ScanLimitProp = {
  scanLimitReached: boolean;
};

export const PricingPlansTable = (props: Props & ScanLimitProp) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");

  const [cookies] = useCookies(["attributionsLastTouch"]);
  const newSearchParam = modifyAttributionsForUrlSearchParams(
    new URLSearchParams(cookies.attributionsLastTouch),
    {
      entrypoint: CONST_URL_MONITOR_LANDING_PAGE_ID,
      form_type: "button",
      data_cta_position: "pricing",
    },
    {
      utm_source: "product",
      utm_medium: "monitor",
      utm_campaign: "pricing",
    },
  );
  const searchParam = useRef(newSearchParam);

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
  const {
    yearly: monthlyPriceAnnualBilling,
    monthly: monthlyPriceMonthlyBilling,
  } = props.subscriptionBillingAmount;

  const pricingTableData = {
    columns: [
      {
        content: "Features",
      },
      {
        content: (
          <>
            {!props.scanLimitReached && (
              <span className={styles.badge}>At capacity</span>
            )}
            <h3>Monitor</h3>
            <p>Free breach alerts</p>
          </>
        ),
      },
      {
        content: (
          <>
            <span className={styles.badge}>
              {props.scanLimitReached ? "At capacity" : "Recommended"}
            </span>
            <h3>Monitor Plus</h3>
            <p>Automatic data removal requests</p>
          </>
        ),
      },
    ],
    rows: [
      [
        {
          content: "Data broker scan",
        },
        {
          content: `One-time scan of ${CONST_ONEREP_DATA_BROKER_COUNT}+ data brokers that may be selling your personal info`,
        },
        {
          content: `Monthly scans of ${CONST_ONEREP_DATA_BROKER_COUNT}+ data brokers that may be selling your personal info`,
        },
      ],
      [
        {
          content: "Data broker removal",
        },
        {
          content:
            "Guided manual removal of personal info from data broker sites",
        },
        {
          content: "Automatic removal of personal info from data broker sites",
        },
      ],
      [
        {
          content: "Data breach monitoring",
        },
        {
          content: "Continuous monitoring for data breach exposures",
        },
        {
          content:
            "Continuous monitoring for data broker exposures and data breaches",
        },
      ],
      [
        {
          content: "Data breach alerts",
        },
        {
          content: "Receive data breach exposure alerts",
        },
        {
          content: "Receive data broker and data breach exposure alerts",
        },
      ],
      [
        {
          content: "Plan benefit",
        },
        {
          content: "Upgrade to Monitor Plus anytime for automated protection",
        },
        {
          content: "Save 35% with a yearly Monitor Plus subscription",
        },
      ],
      [
        {
          content: "Pricing",
        },
        {
          content: (
            <>
              <p>
                <strong>{roundedPriceFormatter.format(0)}</strong>
              </p>
              <TelemetryButton
                aria-describedby="plansTableBillingFree plansTableReassuranceFree"
                disabled={props.scanLimitReached}
                variant="secondary"
                event={{
                  module: "ctaButton",
                  name: "click",
                  data: {
                    button_id: "clicked_free_pricing_grid",
                  },
                }}
                onPress={() => {
                  void signIn("fxa");
                }}
              >
                Get Monitor (Free)
              </TelemetryButton>
            </>
          ),
        },
        {
          content: (
            <>
              <BillingPeriodToggle
                onChange={(newValue) => {
                  setBillingPeriod(newValue);
                  recordTelemetry("button", "click", {
                    button_id:
                      newValue === "yearly"
                        ? "selected_yearly_plan"
                        : "selected_monthly_plan",
                  });
                }}
              />
              <p aria-live="polite">
                <strong id="plansTableMonthlyOrYearly">
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
                </strong>
                <span>
                  {billingPeriod === "yearly" && (
                    <>
                      <span>
                        {l10n.getString(
                          "landing-premium-plans-table-price-plus-yearly-discount",
                          {
                            discountPercentage: Math.floor(
                              ((monthlyPriceMonthlyBilling -
                                monthlyPriceAnnualBilling) *
                                100) /
                                monthlyPriceMonthlyBilling,
                            ),
                          },
                        )}
                      </span>
                      <span>
                        {l10n.getString(
                          "landing-premium-plans-table-price-plus-yearly-sum",
                          {
                            yearlyPrice: priceFormatter.format(
                              12 * monthlyPriceAnnualBilling,
                            ),
                          },
                        )}
                      </span>
                    </>
                  )}
                </span>
              </p>
              <TelemetryButton
                aria-describedby="plansTableMonthlyOrYearly plansTableReassurancePlus"
                disabled={props.scanLimitReached}
                variant="primary"
                href={`${props.premiumSubscriptionUrl[billingPeriod]}&${searchParam.current.toString()}`}
                event={{
                  module: "upgradeIntent",
                  name: "click",
                  data: {
                    button_id:
                      billingPeriod === "yearly"
                        ? "purchase_yearly_landing_page"
                        : "purchase_monthly_landing_page",
                  },
                }}
              >
                Get Monitor Plus
              </TelemetryButton>
            </>
          ),
        },
      ],
    ],
  };

  return (
    <Table
      aria-labelledby={props["aria-labelledby"]}
      selectionMode="none"
      scanLimitReached={props.scanLimitReached}
    >
      <TableHeader>
        {pricingTableData.columns.map((column, columnIndex) => (
          <Column key={`column-${columnIndex}`}>{column.content}</Column>
        ))}
      </TableHeader>
      <TableBody>
        {pricingTableData.rows.map((row, rowIndex) => (
          <Row key={`row-${rowIndex}`}>
            {row.map((cell, cellIndex) => (
              <Cell key={`cell-${cellIndex}`}>{cell.content}</Cell>
            ))}
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

const Table = (
  props: TableStateProps<object> & AriaTableProps & ScanLimitProp,
) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const tableState = useTableState(props);
  const { collection } = tableState;
  const { gridProps } = useTable(props, tableState, tableRef);

  return (
    <table {...gridProps} ref={tableRef} className={styles.pricingPlansTable}>
      <TableRowGroup type="thead">
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow
            key={headerRow.key}
            item={headerRow}
            state={tableState}
          >
            {[...headerRow.childNodes].map((column) => (
              <TableColumnHeader
                scanLimitReached={props.scanLimitReached}
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
              <TableCell
                scanLimitReached={props.scanLimitReached}
                key={cell.key}
                cell={cell}
                state={tableState}
              />
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
  scanLimitReached: boolean;
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
      className={`${isFocusVisible ? styles.isFocused : ""}`}
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
      className={`${isFocusVisible ? styles.isFocused : ""} ${isPressed ? styles.isPressed : ""}`}
    >
      {props.children}
    </tr>
  );
};

const TableCell = (props: {
  cell: AriaTableCellProps["node"];
  state: TableState<object>;
  scanLimitReached: boolean;
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
        className={`${styles.tableCell} ${isFocusVisible ? styles.isFocused : ""}`}
      >
        <span className={styles.cellWrapper}>{props.cell.rendered}</span>
      </th>
    );
  }

  return (
    <td
      {...mergeProps(gridCellProps, focusProps)}
      ref={cellRef}
      className={`${styles.tableCell} ${isFocusVisible ? styles.isFocused : ""}`}
    >
      <span className={styles.cellWrapper}>{props.cell.rendered}</span>
    </td>
  );
};
