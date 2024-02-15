import React, { useState, useEffect } from 'react';
import { Card, Divider, Page, Link } from '@shopify/polaris';

const MyCard = () => {
  const [storeUrl, setStoreUrl] = useState('');
  const [storeName, setStoreName] = useState('');
  const [isPageSaved, setIsPageSaved] = useState(false); // State to track if page is saved

  useEffect(() => {
    // Get current page URL
    const currentUrl = window.location.href;
    setStoreUrl(currentUrl);

    // Extract store name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const shopName = urlParams.get('shop');
    setStoreName(shopName);
  }, []);

  // Function to handle save action
  const handleSave = () => {
    // Perform actions to save the page
    // For example, make an API call to save data
    // After saving, set isPageSaved to true
    setIsPageSaved(true);
  };

  return (
    <Page>
      <Card title="Sample Card" sectioned>
        <div>
          <b>Follow-up email notification</b>
          <p>
            Scheduled to be sent immediately after form submission.
            <div style={{marginLeft:'95%'}}>
              <Link url="https://example.com">Edit</Link>
            </div>
          </p>
        </div>
        <Divider />
        <div>
          <b>Follow-up email notification reminder</b>
          <p>
            Scheduled to be sent 48 hours after form submission.
            <div style={{marginLeft:'95%'}}>
              <Link url="https://example.com">Edit</Link>
            </div>
          </p>
        </div>
      </Card>
      <button onClick={handleSave}>Save</button>
      {/* <div id="storeUrl">Store URL = {storeUrl}</div> Display store URL */}
      <div id="storeName">Store Name = {storeName}</div> {/* Display store name */}
      {isPageSaved && <div>Page has been saved!</div>} {/* Conditional rendering based on isPageSaved */}
    </Page>
  );
};

export default MyCard;