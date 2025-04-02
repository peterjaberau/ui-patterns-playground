import * as R from 'remeda';

import { dataImages, dataProducts, dataCollections } from './data';

/*
 @utils:

 - getPaginatedLibraryResources({resources: any[]})
 - getRandomString(length: number): string
 - cfl(string: string): string
 - beautifyObjectName(string: string): string
 - beautifySlug(string: string): string

 */

export const getPaginatedLibraryResources = ({ resources }: any) => {
  const sortedResources = resources.sort((a: any, b: any) => a.cursor - b.cursor);
  return ({ first, after, filters, query }: any) => {
    const lowercaseQuery = query?.toLowerCase();
    if (!sortedResources.length) {
      return {
        data: [],
        pageInfo: { hasNextPage: false, hasPreviousPage: false, latestCursor: after || 0 },
      };
    }

    const allFilteredResources = filters
      ? sortedResources.filter((r: any) => {
          return (
            R.keys(filters)
              .map((key) => {
                const f = filters[key];
                return f.length === 0 || f.every((el: any) => r[key]?.includes(el));
              })
              .every(Boolean) && (lowercaseQuery ? r.title['en-US'].toLowerCase().includes(lowercaseQuery) : true)
          );
        })
      : sortedResources;

    const totalAllFilteredResources = allFilteredResources.length;

    if (!totalAllFilteredResources) {
      return {
        data: [],
        pageInfo: { hasNextPage: false, hasPreviousPage: false, latestCursor: after || 0 },
      };
    }

    const startIndex = after ? allFilteredResources.findIndex((r: any) => r.cursor > after) : 0;

    if (startIndex === -1) {
      return {
        data: [],
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: after !== undefined,
          latestCursor: after || 0,
        },
      };
    }

    const endIndex = Math.min(startIndex + first, totalAllFilteredResources);
    const data = allFilteredResources.slice(startIndex, endIndex);

    const endCursor = data.length > 0 ? data[data.length - 1].cursor : after || 0;

    return {
      data,
      pageInfo: {
        hasNextPage: endIndex < totalAllFilteredResources,
        hasPreviousPage: startIndex > 0,
        endCursor: endCursor,
      },
    };
  };
};

export const getRandomString = (length = 10) => (Math.random() + 1).toString(36).substring(2, length + 2);

/*
 @Errors

 - handleErrorMessage(error: unknown): string
 */
export const handleInvokeError = ({ event }: any): void => {
  console.error(event?.error);
};

/*
 @others

 - rootPartialInput
 - isShopifyQueryQuery(payload: any): boolean
 - handleInvokeError({event}: any): void
 - handleDataImagesPagination = getPaginatedLibraryResources({resources: dataImages})

 */
export const rootPartialInput = {
  libraryStaticImage: {
    resourceSettings: {
      resourceNamespace: 'library',
      resourceType: 'libraryStaticImage',
      filtersHandler: async () => {
        return {
          filters: { tags: [...new Set(dataImages.flatMap((i) => i.tags))] },
        };
      },
      queryHandler: async (payload: any) => {
        if (payload.queryType === 'shopify') {
          throw new Error(
            `Invalid library query received: ${JSON.stringify(
              payload,
            )}, might be due if you use the Shopify query formatting instead of the library one`,
          );
        }

        const items = handlePagination(dataImages, payload);

        return {
          libraryItems: items.data.map((i: any) => ({
            tags: i.tags,
            updatedAt: new Date(i.updatedAt),
            cursor: i.cursor,
            resourceNamespace: 'library',
            status: i.status,
            allowedPlanSlugs: ['all'],
            id: i.id,
            createdAt: i.createdAt,
            description: i.description,
            mainImageSrc: i.mainImageSrc,
            title: i.title,
            resource: {
              resourceType: 'libraryStaticImage',
              title: i.title,
              data: {
                src: i.mainImageSrc,
              },
            },
          })),
          pageInfo: {
            hasNextPage: items.pageInfo.hasNextPage,
            hasPreviousPage: items.pageInfo.hasPreviousPage,
            endCursor: String(items.pageInfo.endCursor) || null,
          },
        };
      },
    },
  },

  libraryStaticProduct: {
    resourceSettings: {
      resourceNamespace: 'library',
      resourceType: 'libraryStaticProduct',
      filtersHandler: async () => {
        return {
          filters: {},
        };
      },

      queryHandler: async (payload: any) => {
        if (payload.queryType === 'shopify') {
          throw new Error(
            `Invalid library query received: ${JSON.stringify(
              payload,
            )}, might be due if you use the Shopify query formatting instead of the library one`,
          );
        }

        const items = handlePagination(dataProducts, payload);

        return {
          libraryItems: items.data.map((i: any) => ({
            allowedPlanSlugs: ['all'],
            id: i.id,
            resourceNamespace: 'library',
            resource: {
              resourceType: 'libraryStaticProduct',
              title: i.title,
            },
            mainImageSrc: i.mainImageSrc,
            title: i.title,
          })),
          pageInfo: {
            hasNextPage: items.pageInfo.hasNextPage,
            hasPreviousPage: items.pageInfo.hasPreviousPage,
            endCursor: String(items.pageInfo.endCursor) || null,
          },
        };
      },
    },
  },

  libraryStaticCollection: {
    resourceSettings: {
      resourceNamespace: 'library',
      resourceType: 'libraryStaticCollection',
      filtersHandler: async () => {
        return {
          filters: {},
        };
      },
      queryHandler: async (payload: any) => {
        if (payload.queryType === 'shopify') {
          throw new Error(
            `Invalid library query received: ${JSON.stringify(
              payload,
            )}, might be due if you use the Shopify query formatting instead of the library one`,
          );
        }

        const items = handlePagination(dataCollections, payload);

        return {
          libraryItems: items.data.map((i: any) => ({
            allowedPlanSlugs: ['all'],
            id: i.id,
            resourceNamespace: 'library',
            resource: {
              resourceType: 'libraryStaticCollection',
              title: i.title,
            },
            mainImageSrc: i.mainImageSrc,
            title: i.title,
          })),
          pageInfo: {
            hasNextPage: items.pageInfo.hasNextPage,
            hasPreviousPage: items.pageInfo.hasPreviousPage,
            endCursor: String(items.pageInfo.endCursor) || null,
          },
        };
      },
    },
  },
} satisfies { [type: string]: { resourceSettings: Partial<any> } };

const handlePagination = (resources: any[], payload: any) => {
  return getPaginatedLibraryResources({ resources })({
    query: payload.query,
    first: payload.first,
    filters: payload.filters || {},
    after: payload.endCursor ? Number(payload.endCursor) : undefined,
  });
};
