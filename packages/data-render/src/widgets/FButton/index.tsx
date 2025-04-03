import React from 'react';
import { Button, Modal, message, Popconfirm } from 'antd';
import type { ButtonProps, ModalProps, PopconfirmProps } from 'antd';
import createIconFont from '../utils/createIconFont';
import { combineClass, isThenable } from '../utils/common';
import { debounce as debounceFunc } from 'lodash-es';
import 'src/widgets/FButton/index.css';
const OriginModal: any = Modal;

interface FButtonProps extends ButtonProps {
  data: any;
  content: any;
  addons: Record<string, (...params: any) => any>;
  /** Event type */
  eventType: string;
  /** Incoming method configuration*/
  method?:
    | string
    | {
        [key: string]: any;
        name: string;
      };
  /** Pop-up window configuration*/
  modal?: ModalProps & { type?: string; request?: any };
  /** Request configuration */
  request?: any;
  /** Icon configuration */
  iconSetting?: ButtonProps['icon'] & {
    type?: any;
    style?: React.CSSProperties;
  };
  /** Whether to enable automatic loading of asynchronous methods */
  autoLoading?: boolean;
  /** Loading text*/
  loadingText?: string;
  /** Bubble confirmation box*/
  popConfirm?: Omit<PopconfirmProps, 'onConfirm'>;
  /** Anti-shake configuration*/
  debounce?: {
    /** The number of milliseconds to delay */
    wait?: number;
    /**Specify to be called before the delay starts*/
    leading?: boolean;
    /** Set the maximum value that the function is allowed to be delayed */
    maxWait?: number;
    /**Specify to call after the delay ends*/
    trailing?: boolean;
  };
  autoLoding: boolean;
}

const FButton: React.FC<FButtonProps> = (props) => {
  const {
    data,
    addons,
    className,
    eventType,
    content,
    method,
    modal,
    href,
    request,
    type = 'link',
    target = '_blank',
    iconSetting,
    debounce,
    popConfirm,
    autoLoading,
    loadingText,
    ...otherProps
  } = props;

  const [loading, setLoading] = React.useState(false);

  // Send the request
  const sendRequest = async (req: any) => {
    const { api, name, params: condition, config } = req;
    const params = {
      ...addons.getRequestParams(condition, { insideData: data }),
    };
    const requestFunc = addons.getMethod(name || 'request');
    const requestConfig = addons.getRequestConfig();

    const res = (await requestFunc(api, params, config, request)) || {};
    return res[requestConfig.dataKey];
  };

  // Open the popup window
  const openModal = (modalData?: any) => {
    const { type = 'info', children, width = '640px', centered = true, okText = 'Close', ...modalProps } = modal || {};
    let contentWidth = width;
    if (width === '100%') {
      contentWidth = (document.documentElement.clientWidth || document.body.clientWidth || 675) - 80;
    }

    OriginModal[type]({
      icon: null,
      width: contentWidth,
      centered,
      okText,
      className: 'dr-button-modal',
      ...modalProps,
      content: addons.renderer({ schema: children, data: modalData, addons }),
    });
  };

  // Open the iframe
  const openIframe = () => {
    const windowW = (document.documentElement.clientWidth || document.body.clientWidth || 675) - 80;
    const windowH = (document.documentElement.clientHeight || document.body.clientHeight || 715) * 0.8;
    Modal.info({
      icon: null,
      width: windowW,
      centered: true,
      okText: 'Close',
      content: <iframe width="100%" height={windowH} src={props.href} frameBorder="0" />,
    });
  };

  const apply = async (func: (...params: any) => any | ((...params: any) => Promise<any>), ...arg: any) => {
    // popConfirm automatically handles the Promise method, so you don't have to handle it yourself
    if (popConfirm) {
      return await func(...arg);
    }

    // Promise method automatically loads
    const returnValue = func(...arg);
    if (isThenable(returnValue) && autoLoading) {
      setLoading(true);
      return returnValue.then((res: any) => {
        setLoading(false);
        return res;
      });
    } else {
      return returnValue;
    }
  };

  const handleClick = async (ev: any) => {
    // Pass the external method to implement the button click event
    if (eventType === 'method') {
      const funcName = typeof method === 'string' ? method : method?.name;
      const func = addons.getMethod(funcName);
      await apply(func, data, method);
      return;
    }

    // Implement button click events by configuring the API request protocol
    if (eventType === 'request') {
      await apply(sendRequest, request);
      return;
    }

    // Open the popup window
    if (eventType === 'modal') {
      const { request } = modal || {};
      if (request) {
        const result = await apply(sendRequest, request);

        if (!result) {
          return message.error('Data abnormality!');
        }

        openModal(result);
      } else {
        openModal(addons.getParentData());
      }
      return;
    }

    // Open the Iframe
    if (eventType === 'iframe') {
      openIframe();
      return;
    }
  };

  const Icon = createIconFont(addons.getConfig().iconFontUrl);
  const iconContent = <Icon type={iconSetting?.type} style={iconSetting?.style} />;
  const debounceClick = React.useCallback(debounceFunc(handleClick, debounce?.wait, debounce), [
    method,
    addons,
    request,
    eventType,
    modal,
    href,
    debounce,
  ]);

  const onClick = debounce ? debounceClick : handleClick;
  const text = content || data;

  const buttonProps: ButtonProps = {
    className: combineClass('dr-button', className),
    type,
    target,
    href: eventType === 'iframe' ? undefined : href,
    ...otherProps,
    icon: iconSetting && iconContent,
    loading,
    onClick,
  };

  if (popConfirm) {
    delete buttonProps.onClick;
  }

  const button = <Button {...buttonProps}>{loading && !!loadingText ? loadingText : text}</Button>;

  if (popConfirm) {
    return (
      <Popconfirm {...popConfirm} onConfirm={onClick}>
        {button}
      </Popconfirm>
    );
  }

  return button;
};

export default FButton;
