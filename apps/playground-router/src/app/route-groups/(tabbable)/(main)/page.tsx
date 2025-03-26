'use client';
import { ExternalLink } from '@/ui/external-link';
import { GlobalPage } from '@/ui/global-page';
import { GlobalPageSection } from '@/ui/global-page-section';
import { EuiFlexGroup, EuiFlexItem, EuiMarkdownFormat } from '@elastic/eui';
import React from 'react';

export default function Page() {
  const markdownContent: any = ` * This example uses Route Groups to create layouts for different sections of the app without affecting the URL structure.
  \n * Try navigating pages and noting the different layouts used for each section.
  \n * Route groups can be used to:
  \n   * Opt a route segment out of a shared layout.
  \n   * Organize routes without affecting the URL structure.
  \n   * Create multiple root layouts by partitioning the top level of the application.
  `;

  return (
    <GlobalPage header={{ pageTitle: 'Route Groups' }}>
      <GlobalPageSection grow={false} alignment="top" hasShadow={false} paddingSize="none">
        <EuiFlexGroup direction="column" justifyContent="flexStart" alignItems="flexStart">
          <EuiFlexItem grow={false}>
            <EuiMarkdownFormat textSize="s">{markdownContent}</EuiMarkdownFormat>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup direction="row" gutterSize="s">
              <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/route-groups">
                Docs
              </ExternalLink>
              <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/route-groups">
                Code
              </ExternalLink>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </GlobalPageSection>
    </GlobalPage>
  );
}
