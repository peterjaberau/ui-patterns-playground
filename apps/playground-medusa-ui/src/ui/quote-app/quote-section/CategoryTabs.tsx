'use client';
import { Button } from '@medusajs/ui';

import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CategoryTabs = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams: any = useSearchParams();

  const [clickedTab, setClickedTab] = useState('recent');

  const categoryParam = searchParams?.get('category');
  const defaultSelected: any = categoryParam ? categoryParam : 'recent';
  const [selected, setSelected] = useState(defaultSelected);

  const handleTabsChange = (key: React.Key) => {
    setSelected(key.toString());
    const params = new URLSearchParams(searchParams);
    if (key === 'recent') {
      params.delete('category');
      params.delete('recent');
    } else {
      params.set('category', key.toString());
      params.delete('recent');
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-row justify-start gap-4">
        <Button
          onClick={() => handleTabsChange('recent')}
          size="small"
          variant={selected === 'recent' ? 'primary' : 'secondary'}
        >
          Recent
        </Button>
        <Button
          onClick={() => handleTabsChange('life')}
          size="small"
          variant={selected === 'life' ? 'primary' : 'secondary'}
        >
          Life
        </Button>
        <Button
          onClick={() => handleTabsChange('wisdom')}
          size="small"
          variant={selected === 'wisdom' ? 'primary' : 'secondary'}
        >
          Wisdom
        </Button>
        <Button
          onClick={() => handleTabsChange('love')}
          size="small"
          variant={selected === 'love' ? 'primary' : 'secondary'}
        >
          Love
        </Button>
        <Button
          onClick={() => handleTabsChange('motivation')}
          size="small"
          variant={selected === 'motivation' ? 'primary' : 'secondary'}
        >
          Motivation
        </Button>
      </div>
    </div>
  );
};

export default CategoryTabs;
