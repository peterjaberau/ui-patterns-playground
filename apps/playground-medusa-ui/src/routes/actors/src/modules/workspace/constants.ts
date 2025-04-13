export const tasks = [
  'HTTP',
  'BRIDGE',
  'JSONPARSE',
  'CBORPARSE',
  'ETHCALL',
  'ETHTX',
  'SUM',
  'DIVIDE',
  'MULTIPLY',
  'ANY',
  'MODE',
  'MEAN',
  'MEDIAN',
  'ETHABIENCODE',
  'ETHABIDECODE',
  'ETHABIDECODELOG',
  'LESSTHAN',
  'LENGTH',
  'LOOKUP',
] as const;

export const JOB_TYPES = ['cron', 'directrequest', 'fluxmonitor', 'keeper', 'offchainreporting', 'webhook'] as const;

export const dataTypes = ['string', 'bytes', 'bytes32', 'int', 'float', 'decimal', 'bool', 'address', 'null'];
