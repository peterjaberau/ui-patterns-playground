import React, { FC, useMemo, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { useSet } from '../../utils/hooks';

import './index.less';
interface IProps {
  data: string;
  height: number;
  leftSlot?: JSX.Element | string;
  rightSlot?: JSX.Element | string;
  contentStyle?: any;
}

const initState = {
  hidden: true, // Hide the interception first and then display it after execution is completed
  diff: 0,
  isEllipsis: true,
  isFirst: true, // first time
};

const TextEllipsis: FC<IProps> = (props) => {
  const { height, leftSlot, rightSlot, data, contentStyle } = props;

  const [state, setState] = useSet({
    cutText: data, // The remaining text after cutting
    lastLength: data.length, // the last length
    ...initState,
  });

  const conRef = useRef(null);
  const { cutText, hidden, isEllipsis, lastLength, diff, isFirst } = state;

  useEffect(() => {
    const onsize = function () {
      setState({
        cutText: props.data,
        lastLength: props.data.length,
        ...initState,
      });
    };

    window.addEventListener('resize', onsize);
    return () => window.removeEventListener('resize', onsize);
  }, []);

  useEffect(() => {
    if (!data) {
      return;
    }
    setState({
      cutText: props.data,
      lastLength: props.data.length,
      ...initState,
    });
  }, [data]);

  useEffect(() => {
    // No display content is not processed
    if (!data) {
      return;
    }
    // The first time has been processed and returned directly
    if (isFirst) {
      firstTimeRender();
      return;
    }
    //Intercept processing
    const { clientHeight }: any = conRef.current || {};
    const cutTextLength = cutText.length;
    const length = Math.floor((cutTextLength - diff) / 2 + diff);

    // The actual height exceeds the fixed height, and the string needs to be intercepted
    if (clientHeight - height > 5) {
      setState({
        cutText: cutText.slice(0, length),
        lastLength: cutTextLength,
      });
      return;
    }
    // Find the appropriate value and terminate the traversal
    if (cutTextLength === diff) {
      setState({ hidden: false });
      return;
    }
    // Fall back and find a suitable value
    setState({
      diff: cutTextLength,
      cutText: data.slice(0, lastLength),
    });
  }, [cutText]);

  const firstTimeRender = () => {
    const { clientHeight }: any = conRef.current || {};
    const cutTextLength = cutText.length;
    // The actual height exceeds the fixed height, and the string needs to be intercepted
    if (clientHeight - height > 5) {
      setState({
        cutText: cutText.slice(0, cutTextLength / 2),
        lastLength: cutTextLength,
        isFirst: false,
      });
      return;
    }
    // The actual height does not exceed the fixed height, so it is displayed directly without...
    setState({ isEllipsis: false, hidden: false });
  };

  return useMemo(() => {
    if (!data) {
      return null;
    }
    return (
      <div className="text-ellipsis-box" style={{ height: isEllipsis ? height : 'auto' }}>
        <div
          ref={conRef}
          className={classnames('text-ellipsis-view', { 'text-ellipsis-hidden': hidden })}
        >
          {isEllipsis ? (
            <>
              {leftSlot && <span>{leftSlot}</span>}
              <span style={contentStyle}>{`${cutText}...`}</span>
              <span className="text-ellipsis-all" onClick={() => setState({ isEllipsis: false })}>
                Expand
              </span>
              {rightSlot && <span>{rightSlot}</span>}
            </>
          ) : (
            <>
              {leftSlot && <span>{leftSlot}</span>}
              <span style={contentStyle}>{data}</span>
              {data !== cutText && (
                <span className="text-ellipsis-all" onClick={() => setState({ isEllipsis: true })}>
                  Close
                </span>
              )}
              {rightSlot && <span>{rightSlot}</span>}
            </>
          )}
        </div>
      </div>
    );
  }, [cutText, hidden, isEllipsis]);
};

export default TextEllipsis;
