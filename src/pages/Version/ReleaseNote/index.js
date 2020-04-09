import React from 'react';

const ReleaseNote = () => {
  return (
    <>
      <p><strong>PMS 1.1.0</strong></p>
      <br />
      <div className='content'>
        <dl>
          <dt>New dashboard functionality</dt>
          <dd>- User can now choose either carton (default) or kg for orders unit</dd>
          <dd>- Helper text is displayed when add new orders based on production batches run and customer detail</dd>
          <dd>- Newly add to view detail in dashboard entry</dd>
        </dl>

        <dl>
          <dt>New packaging material</dt>
          <dd>- Add new packaging material option for product: Gift box</dd>
        </dl>

        <dl>
          <dt>Search functionality</dt>
          <dd>- Search functionality is now fully working for quickly search through the long list</dd>
          <dd>- Customer entries can be searched by name</dd>
          <dd>- Product entries can be searched by name</dd>
        </dl>

        <dl>
          <dt>Sort functionality</dt>
          <dd>- Add new sort functionality to organize long list</dd>
          <dd>- Customer entries can now be sorted by name, both ascending and descending</dd>
          <dd>- Customer's product entries can now be sorted by name, weight per package and package per carton, both ascending and descending</dd>
          <dd>- Product entries can now be sorted by name, packaging material, packaging method and weight per batch, both ascending and descending</dd>
        </dl>

        <dl>
          <dt>Item entries info</dt>
          <dd>- Display the number of items in the customer, customer's product and product entries</dd>
          <dd>- Work with search functionality as well</dd>
        </dl>

        <dl>
          <dt>Interface improvement</dt>
          <dd>- Restrict batches input in Dashboard to be only number for keyboard interactivity</dd>
          <dd>- Implement autofocus for certain input fields for better user experience</dd>
          <dd>- All options in select input is now alphabetically sorted by ascending order</dd>
        </dl>

        <dl>
          <dt>Mobile responsiveness</dt>
          <dd>- Replace responsive top navigation with sidebar</dd>
          <dd>- Table is now responsive with scroll bar whenever contents overflow</dd>
          <dd>- Fix styling for alert message</dd>
        </dl>
      </div>
    </>
  );
};

export default ReleaseNote;
