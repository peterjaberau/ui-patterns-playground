'use client';

import { MetadataSection } from '@/components/common/metadata-section';
import { SectionRow } from '@/components/common/section';
import { SidebarLink } from '@/components/common/sidebar-link/sidebar-link';
import { SortableTree } from '@/components/common/sortable-tree';
import { Badge, Container, Heading, Text } from '@medusajs/ui';
import { JsonViewSection } from '@/components/common/json-view-section';
import { data } from '@/components/__mocks__';
import { BoltSolid } from '@medusajs/icons';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>

      <div className="space-y-10 text-white">
        <div className="grid grid-cols-1 gap-5 text-black lg:grid-cols-1">
          <Container>
            <Heading level="h2">SectionRow</Heading>
            <SectionRow title={data.SectionRow.title} value={data.SectionRow.value} />
          </Container>
          <JsonViewSection title="Json Payload" data={data} />

          <Container>
            <Heading level="h2" className="py-4">
              Sidebar Link
            </Heading>
            <SidebarLink
              to="#"
              labelKey={data.SidebarLink.labelKey}
              descriptionKey={data.SidebarLink.descriptionKey}
              icon={<BoltSolid />}
            />
          </Container>

          <MetadataSection data={data.MetadataSection.data} href={data.MetadataSection.href} />

          <Container>
            <Heading level="h2">Sortable Tree</Heading>
            <SortableTree
              items={data.SortableTree.items}
              onChange={() => {}}
              childrenProp="category_children"
              renderValue={(item) => {
                return (
                  <div className="flex items-center gap-x-3">
                    <span>{item.name}</span>
                    <Badge size="2xsmall" color="blue">
                      {item.rank}
                    </Badge>
                  </div>
                );
              }}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}
