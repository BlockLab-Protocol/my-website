import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '9c8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f66'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '96a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'adf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'eef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c34'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '86c'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '5eb'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3cf'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '54a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '0a9'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e5d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '05a'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'bc9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '1ea'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'aa2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '6e5'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '86d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd3a'),
    exact: true
  },
  {
    path: '/ReleaseNotes',
    component: ComponentCreator('/ReleaseNotes', 'e2e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '517'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd65'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c23'),
            routes: [
              {
                path: '/docs/api-reference/debug-apis',
                component: ComponentCreator('/docs/api-reference/debug-apis', '37f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-reference/json-rpc-apis',
                component: ComponentCreator('/docs/api-reference/json-rpc-apis', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-reference/sensitive-apis',
                component: ComponentCreator('/docs/api-reference/sensitive-apis', '175'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/consensus',
                component: ComponentCreator('/docs/architecture/consensus', '112'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/design',
                component: ComponentCreator('/docs/architecture/design', '800'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/governance',
                component: ComponentCreator('/docs/architecture/governance', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/interaction-with-ethereum',
                component: ComponentCreator('/docs/architecture/interaction-with-ethereum', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/system-components',
                component: ComponentCreator('/docs/architecture/system-components', '9c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/api-references',
                component: ComponentCreator('/docs/category/api-references', 'b97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/architecture',
                component: ComponentCreator('/docs/category/architecture', '1bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/for-developers',
                component: ComponentCreator('/docs/category/for-developers', '521'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/for-developers-1',
                component: ComponentCreator('/docs/category/for-developers-1', '1ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/for-users',
                component: ComponentCreator('/docs/category/for-users', 'a94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/for-users-1',
                component: ComponentCreator('/docs/category/for-users-1', '710'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/for-validators',
                component: ComponentCreator('/docs/category/for-validators', '091'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/for-validators-1',
                component: ComponentCreator('/docs/category/for-validators-1', 'bd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', '01f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/introduction',
                component: ComponentCreator('/docs/category/introduction', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/standards--primitives',
                component: ComponentCreator('/docs/category/standards--primitives', '48a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/testnet',
                component: ComponentCreator('/docs/category/testnet', '3dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tools--infrastructure',
                component: ComponentCreator('/docs/category/tools--infrastructure', '469'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/troubleshooting',
                component: ComponentCreator('/docs/category/troubleshooting', '819'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorials--examples',
                component: ComponentCreator('/docs/category/tutorials--examples', '26f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/for-developers/develop-deploy-dapp',
                component: ComponentCreator('/docs/getting-started/for-developers/develop-deploy-dapp', '5c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/for-developers/explore-contracts-in-ten',
                component: ComponentCreator('/docs/getting-started/for-developers/explore-contracts-in-ten', '2d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/for-developers/setup-dev-env',
                component: ComponentCreator('/docs/getting-started/for-developers/setup-dev-env', 'b92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/for-users/get-tokens',
                component: ComponentCreator('/docs/getting-started/for-users/get-tokens', '689'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/for-users/setup-you-wallet',
                component: ComponentCreator('/docs/getting-started/for-users/setup-you-wallet', 'e72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/for-validators/running-a-node',
                component: ComponentCreator('/docs/getting-started/for-validators/running-a-node', '41f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/developer-quickstart',
                component: ComponentCreator('/docs/introduction/developer-quickstart', 'cab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/features',
                component: ComponentCreator('/docs/introduction/features', '4f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/overview',
                component: ComponentCreator('/docs/introduction/overview', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/technology',
                component: ComponentCreator('/docs/introduction/technology', '589'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/standards-primitives/fungible-tokens',
                component: ComponentCreator('/docs/standards-primitives/fungible-tokens', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/standards-primitives/random-numbers',
                component: ComponentCreator('/docs/standards-primitives/random-numbers', '1ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/testnet/faq',
                component: ComponentCreator('/docs/testnet/faq', '5ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/testnet/for-developers/dapp-ideas',
                component: ComponentCreator('/docs/testnet/for-developers/dapp-ideas', 'aff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/testnet/for-users/participate',
                component: ComponentCreator('/docs/testnet/for-users/participate', '426'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/testnet/for-validators/running-a-node',
                component: ComponentCreator('/docs/testnet/for-validators/running-a-node', 'f7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools-infrastructure/compatible-tools',
                component: ComponentCreator('/docs/tools-infrastructure/compatible-tools', '6df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools-infrastructure/cross-chain-messaging',
                component: ComponentCreator('/docs/tools-infrastructure/cross-chain-messaging', '650'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools-infrastructure/gateway-widget',
                component: ComponentCreator('/docs/tools-infrastructure/gateway-widget', '4bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools-infrastructure/hosted-gateway',
                component: ComponentCreator('/docs/tools-infrastructure/hosted-gateway', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools-infrastructure/obscuro-faucet',
                component: ComponentCreator('/docs/tools-infrastructure/obscuro-faucet', '52f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools-infrastructure/obscuroscan',
                component: ComponentCreator('/docs/tools-infrastructure/obscuroscan', '709'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tools-infrastructure/standard-bridge',
                component: ComponentCreator('/docs/tools-infrastructure/standard-bridge', '416'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting/faq',
                component: ComponentCreator('/docs/troubleshooting/faq', '636'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting/how-to-submit-a-bug-reports',
                component: ComponentCreator('/docs/troubleshooting/how-to-submit-a-bug-reports', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials-examples/guessing-game',
                component: ComponentCreator('/docs/tutorials-examples/guessing-game', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '12e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
