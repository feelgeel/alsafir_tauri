import React, { useEffect } from 'react';
import { useDebug } from '../hooks/useDebug';

// Example of how to use the debug hook in your components
const ManageQuantity = () => {
  const debug = useDebug('ManageQuantity');

  useEffect(() => {
    debug.log('Component mounted');
    return () => debug.log('Component unmounted');
  }, []);

  const handleSave = () => {
    debug.time('Save operation');
    debug.log('Save button clicked');
    
    // Your save logic here
    const saveData = { id: 1, quantity: 10 };
    debug.table(saveData, 'Save Data');
    
    try {
      // Simulate save operation
      debug.log('Saving data...', saveData);
      // ... save logic
      debug.log('Save successful');
    } catch (error) {
      debug.error('Save failed:', error);
    } finally {
      debug.timeEnd('Save operation');
    }
  };

  const handleFormSubmit = (formData) => {
    debug.group('Form Submission', () => {
      debug.log('Form data received:', formData);
      debug.log('Validating form...');
      debug.log('Form validation passed');
    });
  };

  return (
    <div>
      <h2>Manage Quantity</h2>
      <button onClick={handleSave}>Save</button>
      {/* Your component JSX */}
    </div>
  );
};

export default ManageQuantity;