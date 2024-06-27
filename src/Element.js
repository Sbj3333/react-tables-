import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Element() {

  const tableStyle = {
    backgroundColor: '#20242c', 
    // overflow-x: Hidden
    // Add any other desired styles for the table
  };
  const photoNames=[
    require('./1.jpg'),
    require('./2.jpg'),
    require('./3.jpg'),
    require('./4.jpg'),
    require('./5.jpg'),
    require('./6.jpg'),
    require('./7.jpg'),
    require('./8.jpg'),
    require('./9.jpg'),
    require('./10.jpg'),
    require('./11.jpg')
    
  ]


  const data = [
    { name: 'Skanda S Bharadhwaj', srn: 'PES1UG21CS919', Fingerprint_id: '35465528', address: 'Bangalore', photo: require('./1.jpg') },
    // Add more data objects for additional rows
  ];

  // Generate 50 Indian names
  const indianNames = [
    'Aarav', 'Advait', 'Akhil', 'Arjun', 'Ayush', 'Dev', 'Dhruv', 'Gaurav', 'Harsh', 'Ishaan',
    'Karthik', 'Kunal', 'Manish', 'Mayank', 'Nikhil', 'Pranav', 'Rahul', 'Rishi', 'Rohan', 'Rajesh',
    'Sahil', 'Sameer', 'Shubham', 'Siddharth', 'Sumeet', 'Tarun', 'Utkarsh', 'Varun', 'Vikas', 'Vishal',
    'Yash', 'Karthik', 'Kunal', 'Manish', 'Mayank', 'Nikhil', 'Pranav', 'Rahul', 'Rishi', 'Rohan', 'Rajesh',
    'Sahil', 'Sameer', 'Shubham', 'Siddharth', 'Sumeet', 'Tarun', 'Ayush', 'Dev', 'Dhruv', 'Gaurav'
  ];

  // Generate 50 data entries
  for (let i = 0; i < 50; i++) {
    const randomIndex = Math.floor(Math.random() * indianNames.length);
    const randomName = indianNames[randomIndex];
    const randomSRN = `PES1UG21${['CS', 'ME', 'BT', 'EE'][Math.floor(Math.random() * 4)]}${Math.floor(Math.random() * 1000)}`;
    const randomAddress = ['Bangalore', 'Mysore', 'Hubli', 'Belgaum', 'Mangalore'][Math.floor(Math.random() * 5)];
    const randomPhoto = photoNames[i % photoNames.length];
    data.push({
      name: randomName,
      srn: randomSRN,
      Fingerprint_id: Math.floor(Math.random() * 100000000),
      address: randomAddress,
      photo: randomPhoto // Replace with actual photo filenames or URLs later
    });
  }

  return (
    <div className='data'>
      <TableContainer component={Paper} style={tableStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>SRN</TableCell>
              <TableCell>Fingerprint ID</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img src={item.photo} alt={item.name} style={{ width: '20px', height: '20px' }} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.srn}</TableCell>
                <TableCell>{item.Fingerprint_id}</TableCell>
                <TableCell>{item.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Element
