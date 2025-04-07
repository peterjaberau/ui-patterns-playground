const nodeDefault = {
  defaultValue: {
    variables: [],
  },
  getAvailablePrevNodes() {
    return [];
  },
  getAvailableNextNodes(isChatMode: boolean) {
    return [
      'end',
      'llm',
      'knowledge-retrieval',
      'question-classifier',
      'if-else',
      'code',
      'template-transform',
      'http-request',
      'variable-assigner',
      'variable-aggregator',
      'tool',
      'parameter-extractor',
      'iteration',
      'document-extractor',
      'list-operator',
      'iteration-start',
      'assigner',
      'agent',
      'loop',
      'loop-start',
      'loop-end',
    ];
  },
  checkValid() {
    return {
      isValid: true,
    };
  },
};

export default nodeDefault;
