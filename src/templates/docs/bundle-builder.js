import { ExtensionSelection } from 'components/pages/doc-extensions/extension-selection';
import { ExtensionsTitleGroup } from 'components/pages/doc-extensions/extensions-title-group';
import docPageContent from 'components/templates/doc-page/doc-page-content/doc-page-content.module.scss';
import LocaleProvider from 'contexts/locale-provider';
import { useScrollToAnchor } from 'hooks';
import { DocLayout } from 'layouts/doc-layout';
import React from 'react';
import SeoMetadata from 'utils/seo-metadata';

import { extensionsSidebar } from './extensions';

const bundleBuilderSidebar = extensionsSidebar;

const breadcrumbs = [
  {
    name: 'Extensions',
    path: '/extensions/',
  },
  {
    name: 'Build Bundle',
    path: '/extensions/bundle-builder/',
  },
];

export default function BundleBuilderPage({ pageContext: { navLinks } }) {
  useScrollToAnchor();
  const pageMetadata = SeoMetadata['bundle-builder'];

  return (
    <LocaleProvider>
      <DocLayout
        sidebarTree={bundleBuilderSidebar}
        navLinks={navLinks}
        pageMetadata={pageMetadata}
        sectionName="Extensions"
      >
        <ExtensionsTitleGroup
          title={'Build Bundle'}
          description={``}
          className="container"
          breadcrumbs={breadcrumbs}
        />
        <div className={docPageContent.inner}>
          <p>
            Easily create your own bespoke k6 binary with all the extensions you
            want to run using the bundle builder and xk6. Just select all the
            extensions you want to use, and copy the command below. The
            resulting binary will then allow you to use all the extensions
            you&apos;ve picked in your test scripts.
          </p>
          <p>
            Want learn more about how xk6 works or how to create your own
            extension? Check out the{' '}
            <a
              className={docPageContent.link}
              href="https://k6.io/blog/extending-k6-with-xk6/"
            >
              tutorial
            </a>
            .
          </p>
        </div>
        <div className={`${docPageContent.inner} `}>
          <ExtensionSelection />
        </div>
      </DocLayout>
    </LocaleProvider>
  );
}
