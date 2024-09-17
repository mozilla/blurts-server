/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

declare namespace React.JSX {
  type MjmlBodyChildrenAttributes = Partial<{
    "css-class": string;
    "mj-class": string;
  }>;

  type MjmlValuePx = `${number}px` | "0";
  type MjmlValueEm = `${number}em` | "0";
  type MjmlValuePercentage = `${number}%` | "0";
  type MjmlValueAlign = "left" | "right" | "center";
  type MjmlValueVerticalAlign = "top" | "middle" | "bottom";

  type MjmlAttributesBorder = Partial<{
    border: CSSProperties["border"];
    "border-bottom": CSSProperties["borderBottom"];
    "border-left": CSSProperties["borderLeft"];
    "border-right": CSSProperties["borderRight"];
    "border-top": CSSProperties["borderTop"];
  }>;
  type MjmlAttributesFonts = Partial<{
    "font-family": CSSProperties["fontFamily"];
    "font-size": CSSProperties["fontSize"];
    "font-style": CSSProperties["fontStyle"];
    "font-weight": CSSProperties["fontWeight"];
  }>;
  type MjmlAttributesPadding = Partial<{
    padding:
      | MjmlValuePx
      | `${MjmlValuePx} ${MjmlValuePx}`
      | `${MjmlValuePx} ${MjmlValuePx} ${MjmlValuePx}`
      | `${MjmlValuePx} ${MjmlValuePx} ${MjmlValuePx} ${MjmlValuePx}`;
    "padding-bottom": MjmlValuePx;
    "padding-left": MjmlValuePx;
    "padding-right": MjmlValuePx;
    "padding-top": MjmlValuePx;
  }>;

  interface IntrinsicElements {
    mjml: {
      children?: ReactNode;
      owa?: "desktop";
      lang?: HtmlHTMLAttributes<HTMLElement>["lang"];
      dir?: HtmlHTMLAttributes<HTMLElement>["dir"];
    };
    "mj-head": {
      children?: ReactNode;
    };
    "mj-body": {
      children?: ReactNode;
      "background-color"?: CSSProperties["backgroundColor"];
      "css-class"?: string;
      width?: MjmlValuePx;
    };
    // <mj-head> children
    "mj-attributes": {
      children?: ReactNode;
    };
    "mj-all": {
      children?: ReactNode;
    };
    "mj-class": {
      name: string;
    } & Record<string, unknown>;
    "mj-breakpoint": {
      width: MjmlValuePx;
    };
    "mj-font": {
      name: string;
      href: string;
    };
    "mj-preview": {
      children: ReactNode;
    };
    "mj-style": {
      inline?: "inline";
      children: ReactNode;
    };
    "mj-title": {
      children: ReactNode;
    };
    // <mj-body> children
    "mj-button": MjmlBodyChildrenAttributes &
      MjmlAttributesBorder &
      MjmlAttributesFonts &
      MjmlAttributesPadding & {
        children?: ReactNode;
        align?: MjmlValueAlign;
        "background-color"?: CSSProperties["backgroundColor"];
        "border-radius"?: MjmlValuePx;
        color?: CSSProperties["color"];
        "container-background-color"?: CSSProperties["backgroundColor"];
        height?: MjmlValuePx;
        href?: string;
        "inner-padding"?: MjmlValuePx;
        "letter-spacing"?: MjmlValuePx | MjmlValueEm;
        "line-height"?:
          | MjmlValuePx
          | MjmlValueEm
          | MjmlValuePercentage
          | undefined;
        rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
        target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
        "text-align"?: MjmlValueAlign;
        "text-decoration"?: CSSProperties["textDecoration"];
        "text-transform"?: CSSProperties["textTransform"];
        title?: string;
        "vertical-align"?: MjmlValueVerticalAlign;
        width?: MjmlValuePx | "100%";
      };
    "mj-column": MjmlBodyChildrenAttributes &
      MjmlAttributesBorder &
      MjmlAttributesPadding & {
        children: ReactNode;
        "background-color"?: CSSProperties["backgroundColor"];
        "inner-background-color"?: CSSProperties["backgroundColor"];
        "border-radius"?: MjmlValuePx;
        "inner-border"?: CSSProperties["border"];
        "inner-border-bottom"?: CSSProperties["borderBottom"];
        "inner-border-left"?: CSSProperties["borderLeft"];
        "inner-border-right"?: CSSProperties["borderRight"];
        "inner-border-top"?: CSSProperties["borderTop"];
        "inner-border-radius"?: MjmlValuePx;
        "vertical-align"?: MjmlValueVerticalAlign;
        width?: MjmlValuePx | MjmlValuePercentage;
      };
    "mj-divider": MjmlBodyChildrenAttributes &
      MjmlAttributesPadding & {
        "border-color"?: CSSProperties["borderColor"];
        "border-style"?: CSSProperties["borderStyle"];
        "border-width"?: CSSProperties["borderWidth"];
        "container-background-color"?: CSSProperties["backgroundColor"];
        width?: MjmlValuePx | MjmlValuePercentage;
      };
    "mj-group": MjmlBodyChildrenAttributes & {
      children?: ReactNode;
      "background-color"?: CSSProperties["backgroundColor"];
      direction?: CSSProperties["direction"];
      "border-radius"?: MjmlValuePx;
      "vertical-align"?: MjmlValueVerticalAlign;
      width?: MjmlValuePx | MjmlValuePercentage;
    };
    "mj-hero": MjmlBodyChildrenAttributes &
      MjmlAttributesPadding & {
        children?: ReactNode;
        "background-color"?: CSSProperties["backgroundColor"];
        "background-height"?: MjmlValuePx;
        "background-position"?: CSSProperties["backgroundPosition"];
        "background-url"?: string;
        "background-width"?: MjmlValuePx;
        "border-radius"?: MjmlValuePx;
        height?: MjmlValuePx;
        mode?: "fluid-height" | "fixed-height";
        "vertical-align"?: MjmlValueVerticalAlign;
      };
    "mj-image": MjmlBodyChildrenAttributes &
      MjmlAttributesBorder &
      MjmlAttributesPadding & {
        src: ImgHTMLAttributes<HTMLImageElement>["src"];
        alt: string;
        align?: MjmlValueAlign;
        "border-radius"?: MjmlValuePx;
        "container-background-color"?: CSSProperties["backgroundColor"];
        "fluid-on-mobile"?: "true";
        height?: MjmlValuePx;
        href?: string;
        name?: string;
        rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
        sizes?: ImgHTMLAttributes<HTMLImageElement>["sizes"];
        srcset?: ImgHTMLAttributes<HTMLImageElement>["srcSet"];
        target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
        title?: AnchorHTMLAttributes<HTMLAnchorElement>["title"];
        width?: MjmlValuePx;
      };
    "mj-raw": MjmlBodyChildrenAttributes & {
      children: ReactNode;
    };
    "mj-section": MjmlBodyChildrenAttributes &
      MjmlAttributesBorder &
      MjmlAttributesPadding & {
        children?: ReactNode;
        "background-color"?: CSSProperties["backgroundColor"];
        "background-position"?: CSSProperties["backgroundPosition"];
        "background-position-x"?: CSSProperties["backgroundPositionX"];
        "background-position-y"?: CSSProperties["backgroundPositionY"];
        "background-repeat"?: Extract<
          CSSProperties["backgroundRepeat"],
          "repeat" | "no-repeat"
        >;
        "background-size"?: CSSProperties["backgroundSize"];
        "background-url"?: string;
        "border-radius"?:
          | MjmlValuePx
          | `${MjmlValuePx} ${MjmlValuePx} ${MjmlValuePx} ${MjmlValuePx}`;
        direction?: CSSProperties["direction"];
        "full-width"?: "full-width";
        "text-align"?: Extract<
          CSSProperties["textAlign"],
          "left" | "center" | "right"
        >;
      };
    "mj-spacer": MjmlBodyChildrenAttributes &
      MjmlAttributesPadding & {
        "container-background-color"?: CSSProperties["backgroundColor"];
        height?: MjmlValuePx;
      };
    "mj-table": MjmlBodyChildrenAttributes &
      MjmlAttributesPadding & {
        align?: MjmlValueAlign;
        border?: CSSProperties["border"];
        cellpadding: MjmlValuePx;
        cellspacing: MjmlValuePx;
        color?: CSSProperties["color"];
        "container-background-color"?: CSSProperties["backgroundColor"];
        "font-family"?: CSSProperties["fontFamily"];
        "font-size"?: MjmlValuePx;
        "line-height"?: MjmlValuePx | MjmlValuePercentage;
        role?: "none" | "presentation";
        "table-layout"?: "auto" | "fixed" | "initial" | "inherit";
        width?: MjmlValuePx | MjmlValuePercentage;
      };
    "mj-text": MjmlBodyChildrenAttributes &
      MjmlAttributesFonts &
      MjmlAttributesPadding & {
        children?: ReactNode;
        color?: CSSProperties["color"];
        "line-height"?: MjmlValuePx;
        "letter-spacing"?: MjmlValuePx | MjmlValueEm;
        height?: MjmlValuePx;
        "text-decoration"?: CSSProperties["textDecoration"];
        "text-transform"?: CSSProperties["textTransform"];
        align?: MjmlValueAlign;
        "container-background-color"?: CSSProperties["backgroundColor"];
      };
    "mj-wrapper": MjmlBodyChildrenAttributes &
      MjmlAttributesBorder &
      MjmlAttributesPadding & {
        children: ReactNode;
        "background-color"?: CSSProperties["backgroundColor"];
        "background-position"?: CSSProperties["backgroundPosition"];
        "background-position-x"?: CSSProperties["backgroundPositionX"];
        "background-position-y"?: CSSProperties["backgroundPositionY"];
        "background-repeat"?: CSSProperties["backgroundRepeat"];
        "background-size"?: CSSProperties["backgroundSize"];
        "background-url"?: string;
        "border-radius"?: MjmlValuePx;
        "full-width"?: "full-width";
        "text-align"?: MjmlValueAlign;
      };
  }
}
