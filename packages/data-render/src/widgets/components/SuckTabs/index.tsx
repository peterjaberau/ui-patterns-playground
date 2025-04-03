import React, { FC, useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { throttle } from 'lodash-es';

import 'src/widgets/components/SuckTabs/index.css';

let activeIndx = 0; // Current tab index
let lockScroll = false; // Do not make scroll judgment
let isSubTop = false; // Is it sub-top?

interface ITabItem {
  code: string;
  title: string;
  action?: string;
}

const SuckTabs: FC<any> = (props) => {
  const { tabs, tabsId = 'tab', startY = -10, children, className, style, fixed } = props;

  const scrollContainer = props.scrollContainer || window;

  const [tabIndex, setIndex] = useState<number>(0);
  const containerRef = useRef(null);
  const tabRef = useRef(null);
  const seatRef = useRef(null);

  useEffect(() => {
    scrollContainer.addEventListener('scroll', onScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    fixedChange(fixed);
  }, []);

  const getScrollParams = () => {
    let scrollContainerHeight = document.documentElement?.clientHeight || document.body?.clientHeight;
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    if (props.scrollContainer) {
      scrollContainerHeight = scrollContainer?.clientHeight;
      scrollTop = scrollContainer.scrollTop;
    }
    return { scrollContainerHeight, scrollTop };
  };

  const onScroll = throttle(() => {
    const { scrollContainerHeight, scrollTop } = getScrollParams();

    const contaCurrent: any = containerRef.current;
    const offsetTop = contaCurrent.offsetTop;

    /** Has not yet rolled to this block area, no processing*/
    if (scrollContainerHeight + scrollTop < offsetTop) {
      return;
    }
    isSubTop = offsetTop <= scrollTop - 1; // Whether to adsorb to the top

    // Process the ceiling
    fixedChange(isSubTop || fixed);

    // Manual click, no sliding logic processing
    if (lockScroll) {
      return;
    }

    // Length from the bottom
    const distance = Math.ceil((scrollContainer.scrollHeight - scrollContainerHeight - scrollTop) / 10) || 1;

    // Check the location tab
    for (let i = tabs.length - 1; i > -1; i--) {
      const { code } = tabs[i];
      let scrollH = document.getElementById(`${tabsId}-${code}`)?.offsetTop ?? 0;
      if (isSubTop) {
        scrollH -= startY;
      }

      if (scrollH <= scrollTop) {
        // When the scrolling distance is not enough, perform shift processing
        if (tabs.length - i > distance) {
          const idx = tabs.length - distance;
          if (activeIndx !== idx) {
            activeIndx = idx;
            setIndex(idx);
          }
        } else if (activeIndx !== i) {
          activeIndx = i;
          setIndex(i);
        }
        break;
      }
    }
  }, 100);

  /** tab ceiling treatment*/
  const fixedChange = (flag: boolean) => {
    const tabElement: any = tabRef.current;
    const seatElement: any = seatRef.current;

    if (flag) {
      seatElement.style.display = 'block';
      tabElement.classList.add('tab-suction');
    } else {
      seatElement.style.display = 'none';
      tabElement.classList.remove('tab-suction');
    }
  };

  // Click on the tab and scroll to locate the corresponding module position
  const handleTabClick = (index: number) => () => {
    //Mark the current anchor module number
    activeIndx = index;

    // Scroll lock to prevent triggering scroll calculation logic
    lockScroll = true;

    // Get the height of the target container from the top, height - 10 to optimize the positioning gap
    const { code } = tabs[index];
    let scrollH = (document.getElementById(`${tabsId}-${code}`)?.offsetTop ?? 0) - startY;

    // Perform positioning
    scrollContainer.scrollTo(0, scrollH);
    setIndex(index);

    // Release the deadlock, and subsequent triggered scrolling can be calculated normally
    setTimeout(() => {
      lockScroll = false;
    }, 500);
  };

  return (
    <div className={classnames('dv-suck-nav', { [className]: className })} ref={containerRef} style={style}>
      <div className="seat-view" ref={seatRef} />
      <div className="tabs-view" ref={tabRef}>
        {tabs.map((tab: ITabItem, index: number) => (
          <div
            key={tab.code}
            className={classnames(tab.code, {
              'tab-item': true,
              'tab-active': index === tabIndex,
            })}
            onClick={handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {tabs.map((tab: ITabItem, index: number) => (
        <div key={`${tabsId}-${tab.code}`} id={`${tabsId}-${tab.code}`} className="tab-row">
          {children[index]}
        </div>
      ))}
    </div>
  );
};

export default SuckTabs;
