'use client';
import { ExternalLink } from '@/ui/external-link';

import { EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { EuiMarkdownFormat } from '@elastic/eui';
import React from 'react';
import { GlobalPage } from '@/ui/global-page';
import { GlobalPageSection } from '@/ui/global-page-section';

export default function Page() {
  const markdownContent: any = ` * A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain
              interactive, and do not re-render. Two or more layouts can also be nested.
              \n * Try navigating between categories and sub categories. `;

  return (
    <GlobalPage header={{ pageTitle: 'Layouts' }}>
      <GlobalPageSection grow={false} alignment="top" hasShadow={false} paddingSize="none">
        <EuiFlexGroup direction="column" justifyContent="flexStart" alignItems="flexStart">
          <EuiFlexItem grow={false}>
            <EuiMarkdownFormat textSize="s">{markdownContent}</EuiMarkdownFormat>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup direction="row" gutterSize="s">
              <ExternalLink
                iconType="documentation"
                href="https://nextjs.org/docs/app/getting-started/layouts-and-pages"
              >
                Docs
              </ExternalLink>
              <ExternalLink
                iconType="editorCodeBlock"
                href="https://github.com/vercel/app-playground/tree/main/app/layouts"
              >
                Code
              </ExternalLink>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </GlobalPageSection>
    </GlobalPage>
  );
}
