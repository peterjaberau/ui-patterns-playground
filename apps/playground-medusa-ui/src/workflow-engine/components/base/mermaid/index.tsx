import React, { useCallback, useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { usePrevious } from 'ahooks';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { cleanUpSvgCode } from './utils';
import LoadingAnim from '@base/chat/chat/loading-anim';
import cn from '@utils/classnames';
import ImagePreview from '@base/image-uploader/image-preview';

let mermaidAPI: any;
mermaidAPI = null;

if (typeof window !== 'undefined') mermaidAPI = mermaid.mermaidAPI;

const svgToBase64 = (svgGraph: string) => {
  const svgBytes = new TextEncoder().encode(svgGraph);
  const blob = new Blob([svgBytes], { type: 'image/svg+xml;charset=utf-8' });
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const Flowchart = ({
  ref,
  ...props
}: {
  PrimitiveCode: string;
} & {
  ref: React.RefObject<unknown>;
}) => {
  const [svgCode, setSvgCode] = useState(null);
  const [look, setLook] = useState<'classic' | 'handDrawn' | any>('classic' as any);

  const prevPrimitiveCode = usePrevious(props.PrimitiveCode);
  const [isLoading, setIsLoading] = useState(true);
  const timeRef = useRef<number>(0);
  const [errMsg, setErrMsg] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const renderFlowchart = useCallback(
    async (PrimitiveCode: string) => {
      setSvgCode(null);
      setIsLoading(true);

      try {
        if (typeof window !== 'undefined' && mermaidAPI) {
          const svgGraph = await mermaidAPI.render('flowchart', PrimitiveCode);
          const base64Svg: any = await svgToBase64(cleanUpSvgCode(svgGraph.svg));
          setSvgCode(base64Svg);
          setIsLoading(false);
        }
      } catch (error) {
        if (prevPrimitiveCode === props.PrimitiveCode) {
          setIsLoading(false);
          setErrMsg((error as Error).message);
        }
      }
    },
    [props.PrimitiveCode],
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'neutral',
        look,
        flowchart: {
          htmlLabels: true,
          useMaxWidth: true,
        },
      } as any);

      renderFlowchart(props.PrimitiveCode);
    }
  }, [look]);

  useEffect(() => {
    if (timeRef.current) window.clearTimeout(timeRef.current);

    timeRef.current = window.setTimeout(() => {
      renderFlowchart(props.PrimitiveCode);
    }, 300);
  }, [props.PrimitiveCode]);

  return (
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    <div ref={ref}>
      <div className="msh-segmented msh-segmented-sm css-23bs09 css-var-r1">
        <div className="msh-segmented-group">
          <label className="msh-segmented-item m-2 flex w-[200px] items-center space-x-1">
            <div
              key="classic"
              className={cn(
                'system-sm-medium border-components-option-card-option-border bg-components-option-card-option-bg text-text-secondary mb-4 flex h-8 w-[calc((100%-8px)/2)] cursor-pointer items-center justify-center rounded-lg border',
                look === 'classic' &&
                  'border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg text-text-primary border-[1.5px]',
              )}
              onClick={() => setLook('classic')}
            >
              <div className="msh-segmented-item-label">{'Classic'}</div>
            </div>
            <div
              key="handDrawn"
              className={cn(
                'system-sm-medium border-components-option-card-option-border bg-components-option-card-option-bg text-text-secondary mb-4 flex h-8 w-[calc((100%-8px)/2)] cursor-pointer items-center justify-center rounded-lg border',
                look === 'handDrawn' &&
                  'border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg text-text-primary border-[1.5px]',
              )}
              onClick={() => setLook('handDrawn')}
            >
              <div className="msh-segmented-item-label">{'Hand Drawn'}</div>
            </div>
          </label>
        </div>
      </div>
      {svgCode && (
        <div
          className="mermaid object-fit: cover h-auto w-full cursor-pointer"
          onClick={() => setImagePreviewUrl(svgCode)}
        >
          {svgCode && <img src={svgCode} alt="mermaid_chart" />}
        </div>
      )}
      {isLoading && (
        <div className="px-[26px] py-4">
          <LoadingAnim type="text" />
        </div>
      )}
      {errMsg && (
        <div className="px-[26px] py-4">
          <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
          &nbsp;
          {errMsg}
        </div>
      )}
      {imagePreviewUrl && (
        <ImagePreview title="mermaid_chart" url={imagePreviewUrl} onCancel={() => setImagePreviewUrl('')} />
      )}
    </div>
  );
};

Flowchart.displayName = 'Flowchart';

export default Flowchart;
