import React from 'react';
import InnerHtml from '../InnerHtml';

const ReactNode = (props: any) => {
  const { schema, data, addons } = props;

  if (!schema) {
    return null;
  }

  // When data is a string, return directly
  if (typeof schema === 'string') {
    // Return directly
    if (!schema.includes('method:')) {
      return <InnerHtml data={schema} />;
    }

    // If the string contains render:, call the render method for rendering
    const [_, funcName] = schema.split('method:');
    const renderFunc = addons.getMethod(funcName);
    return renderFunc(data);
  }

  // When data is an object, call the FRender component for rendering
  return addons.renderer({ schema, data, addons });
};

export default ReactNode;
