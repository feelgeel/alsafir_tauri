import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleDebug,
  addComponentToDebug,
  removeComponentFromDebug,
  clearActiveComponents,
  setLogLevel
} from '../redux/reduxSlice/debug';

const DebugToggle = () => {
  const dispatch = useDispatch();
  const { isEnabled, activeComponents, logLevel } = useSelector(state => state.debug);
  const [isExpanded, setIsExpanded] = useState(false);
  const [newComponent, setNewComponent] = useState('');

  // Common component names for quick selection
  const commonComponents = [
    'ManageQuantity',
    'FormQuant',
    'ProdComponent',
    'ManageStock',
    'Sales',
    'Purchases',
    'Returns'
  ];

  const handleToggleDebug = () => {
    dispatch(toggleDebug());
  };

  const handleAddComponent = () => {
    if (newComponent.trim()) {
      dispatch(addComponentToDebug(newComponent.trim()));
      setNewComponent('');
    }
  };

  const handleRemoveComponent = (component) => {
    dispatch(removeComponentFromDebug(component));
  };

  const handleQuickAdd = (component) => {
    dispatch(addComponentToDebug(component));
  };

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 9999,
      background: 'white',
      border: '2px solid #333',
      borderRadius: '8px',
      padding: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      minWidth: isExpanded ? '300px' : 'auto'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          onClick={handleToggleDebug}
          style={{
            background: isEnabled ? '#4CAF50' : '#f44336',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          🐛 DEBUG {isEnabled ? 'ON' : 'OFF'}
        </button>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: '#2196F3',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      {isExpanded && (
        <div style={{ marginTop: '10px' }}>
          {/* Log Level Selector */}
          <div style={{ marginBottom: '10px' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Log Level:</label>
            <select
              value={logLevel}
              onChange={(e) => dispatch(setLogLevel(e.target.value))}
              style={{
                marginLeft: '5px',
                padding: '4px',
                fontSize: '12px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            >
              <option value="all">All</option>
              <option value="info">Info</option>
              <option value="warn">Warnings</option>
              <option value="error">Errors</option>
            </select>
          </div>

          {/* Active Components */}
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>
              Active Components:
              {activeComponents.length === 0 && (
                <span style={{ color: '#666', fontWeight: 'normal' }}> (All)</span>
              )}
            </div>
            
            {activeComponents.map(component => (
              <div key={component} style={{
                display: 'inline-block',
                background: '#e3f2fd',
                padding: '2px 6px',
                margin: '2px',
                borderRadius: '12px',
                fontSize: '11px',
                border: '1px solid #2196F3'
              }}>
                {component}
                <button
                  onClick={() => handleRemoveComponent(component)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#f44336',
                    marginLeft: '4px',
                    cursor: 'pointer',
                    fontSize: '10px'
                  }}
                >
                  ×
                </button>
              </div>
            ))}
            
            {activeComponents.length > 0 && (
              <button
                onClick={() => dispatch(clearActiveComponents())}
                style={{
                  background: '#ff9800',
                  color: 'white',
                  border: 'none',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '10px',
                  cursor: 'pointer',
                  marginLeft: '5px'
                }}
              >
                Clear All
              </button>
            )}
          </div>

          {/* Add Component */}
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={newComponent}
              onChange={(e) => setNewComponent(e.target.value)}
              placeholder="Component name..."
              style={{
                padding: '4px',
                fontSize: '12px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '150px'
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleAddComponent()}
            />
            <button
              onClick={handleAddComponent}
              style={{
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
                marginLeft: '5px'
              }}
            >
              Add
            </button>
          </div>

          {/* Quick Add Buttons */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>
              Quick Add:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {commonComponents.map(component => (
                <button
                  key={component}
                  onClick={() => handleQuickAdd(component)}
                  disabled={activeComponents.includes(component)}
                  style={{
                    background: activeComponents.includes(component) ? '#ccc' : '#2196F3',
                    color: 'white',
                    border: 'none',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '10px',
                    cursor: activeComponents.includes(component) ? 'not-allowed' : 'pointer'
                  }}
                >
                  {component}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugToggle;