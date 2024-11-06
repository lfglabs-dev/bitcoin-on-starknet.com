import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const YEAR = new Date().getFullYear();

const config: DocsThemeConfig = {
  logo: <span>Bitcoin on Starknet</span>,
  project: {
    link: "https://github.com/lfglabs-dev/bitcoin-on-starknet.js",
  },
  chat: {
    link: "https://t.me/+Xm1Zw8URs1VlODQx",
  },
  docsRepositoryBase: "https://github.com/lfglabs-dev/bitcoin-on-starknet.com",
  footer: {
    text: (
      <small>
        <time>{YEAR}</time> © <a href="https://lfglabs.dev/">LFG LABS</a>.
      </small>
    ),
  },
};

export default config;
