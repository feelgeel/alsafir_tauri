import { useSelector } from 'react-redux';

export const useDebug = (componentName) => {
  const { isEnabled, activeComponents, logLevel } = useSelector(state => state.debug);
  
  const shouldLog = isEnabled && (
    activeComponents.length === 0 || 
    activeComponents.includes(componentName)
  );

  const debug = {
    log: (message, ...args) => {
      if (shouldLog && (logLevel === 'all' || logLevel === 'info')) {
        console.log(`🔍 [${componentName}] ${message}`, ...args);
      }
    },
    
    warn: (message, ...args) => {
      if (shouldLog && (logLevel === 'all' || logLevel === 'warn')) {
        console.warn(`⚠️ [${componentName}] ${message}`, ...args);
      }
    },
    
    error: (message, ...args) => {
      if (shouldLog && (logLevel === 'all' || logLevel === 'error')) {
        console.error(`❌ [${componentName}] ${message}`, ...args);
      }
    },
    
    group: (title, callback) => {
      if (shouldLog) {
        console.group(`📁 [${componentName}] ${title}`);
        callback();
        console.groupEnd();
      }
    },
    
    table: (data, label = 'Data') => {
      if (shouldLog) {
        console.log(`📊 [${componentName}] ${label}:`);
        console.table(data);
      }
    },
    
    time: (label) => {
      if (shouldLog) {
        console.time(`⏱️ [${componentName}] ${label}`);
      }
    },
    
    timeEnd: (label) => {
      if (shouldLog) {
        console.timeEnd(`⏱️ [${componentName}] ${label}`);
      }
    }
  };

  return debug;
};