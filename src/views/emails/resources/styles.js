/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import images from './images.js'

const main = {
  global: `
    .email-body,
    .email-body * {
      margin: 0;
      padding: 0;
    }

    body.email-body,
    .email-container {
      color: black;
      font: normal 16px/1.2 sans-serif;
    }

    .email-container h1,
    .email-container p {
      margin: 12px auto;
      max-width: 600px;
      padding: 0 24px;
    }

    .email-container a {
      color: #592acb;
      text-decoration: none;
    }

    .email-container table {
      table-layout: fixed;
    }

    .email-container .logo > td {
      height: 100px;
      background-color: #f9f9fa;
      background-position: 50%;
      background-image: url('${images.logoLight}');
      background-repeat: no-repeat;
      background-size: 240px 50px;
      width: 100%;
    }

    @media screen and (max-width:600px) {
      .email-container .header-image {
        display: none;
      }
    }

    @media (prefers-color-scheme: dark) {
      .email-container .logo > td {
        background-image: url('${images.logoDark}')
      }
    }
  `,
  body: `
    color: black;
    font: normal 16px/1.2 sans-serif;
  `,
  table: `
    margin: auto;
    max-width: 1080px;
    text-align: center;
    width: 100%;
  `,
  headerTable: `
    background-color: #321c64;
    color: white;
    height: 331px;
    text-align: left;
    width: 100%;
  `,
  headerImageContainer: `
    background-color: #321c64;
    vertical-align: bottom;
    width: 50%;
  `,
  headerImage: `
    display: block;
    margin-left: auto;
    max-width: 100%;
    object-fit: cover;
    object-position: left;
  `,
  footerContainer: `
    background: #f9f9fa;
    border-top: 1px solid #dddddd;
    padding: 24px 0;
  `,
  footerImage: `
    display: block;
    margin: 24px auto 0;
  `
}

const alert = {
  breachAlertContainerStyle: `
    background: #f9f9fa;
    color: black;
    padding: 36px 0 24px;
  `,
  breachAlertCtaStyle: `
    background: #0060df;
    border-radius: 4px;
    color: white;
    display: inline-block;
    margin: 24px 0;
    margin: auto;
    padding: 12px 24px;
  `,
  breachAlertTableStyle: `
    margin: auto
  `,
  breachAlertCardsContainerStyle: `
    background: white;
    border-radius: 6px;
    border-spacing: 0;
    border: 1px solid #eeeeee;
    box-shadow: 0 0 6px #dddddd;
    display: inline-table;
    margin: 12px;
    min-width: 240px;
    width: 30%;
  `,
  breachAlertCardsTitleStyle: `
    background: #eeeeee;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 12px;
  `,
  breachAlertCardsTitleImageStyle: `
    vertical-align: bottom;
  `,
  breachAlertLabelStyle: `
    color: #5e5e72;
    font-family: sans-serif;
    font-size: 13px;
    font-weight: 300;
    margin: 0px;
    padding-bottom: 4px;
  `,
  breachAlertValueStyle: `
    color: #20123a;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin: 0px;
    padding-bottom: 15px;
  `
}

const monthly = {
  emailStyle: `
    color: black;
    background: #f9f9fa;
    padding-top: 36px;
  `,
  containerStyle: `
    background: #f9f9fa;
    color: black;
    padding: 24px;
  `,
  tableStyle: `
    background: white;
    border-radius: 8px;
    border: 1px solid #dddddd;
    box-shadow: 0 0 6px #dddddd;
    margin: auto;
    padding: 24px;
    text-align: left;
    width: auto;
  `,
  tableLabelStyle: `
    padding: 3px 12px;
  `,
  tableValueStyle: `
    border-left: 1px solid #cccccc;
    padding: 3px 12px;
  `,
  ctaStyle: `
    background: #0060df;
    border-radius: 4px;
    color: white;
    display: inline-block;
    margin: 24px 0;
    padding: 12px 24px;
  `
}

const signup = {
  emailStyle: `
    color: black;
    background: #f9f9fa;
    padding: 36px 0 24px;
  `,
  breachSummaryTableStyle: `
    margin: auto;
    max-width: 600px;
  `,
  breachSummaryCardStyle: `
    background: #eeeeee;
    border-radius: 6px;
    margin: 12px auto;
    padding: 12px;
    table-layout: auto;
    width: 100%;
  `,
  statNumberStyle: `
    font-size: 48px;
    font-weight: bold;
    width: 72px;
  `,
  statTitleStyle: `
    text-align: left;
  `,
  ctaStyle: `
    background-color: #0060DF;
    border-radius: 4px;
    color: white;
    display: inline-block;
    margin: 24px 0;
    padding: 12px 24px;
  `
}

const verify = {
  containerStyle: `
    background: #f9f9fa;
    color: black;
    padding: 36px 0 24px;
  `,
  ctaStyle: `
    background-color: #0060df;
    border-radius: 4px;
    color: white;
    display: inline-block;
    margin: 24px 0;
    margin: auto;
    padding: 12px 24px;
  `
}

export default {
  main,
  alert,
  monthly,
  signup,
  verify
}
