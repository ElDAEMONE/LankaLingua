// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { Table, Tag } from 'antd';

// const Work = () => {
//   const [translationHistory, setTranslationHistory] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchTranslations();
//   }, []);

//   const fetchTranslations = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get('http://localhost:3001/translations', {
//         params: { category: '663e9f8ac7ca2c3835b2ce55' } // Send category as an ObjectId
//       });
//       setTranslationHistory(response.data);
//     } catch (error) {
//       console.error('Error fetching translations:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const columns = [
//     {
//       title: 'Title',
//       dataIndex: 'title',
//       key: 'title',
//     },
//     {
//       title: 'Translated Text',
//       dataIndex: 'translatedText',
//       key: 'translatedText',
//     },
//     {
//       title: 'Created Date',
//       dataIndex: 'createdAt',
//       key: 'createdAt',
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (text, record) => (
//         <span>
//           <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
//           <Button type="danger" onClick={() => handleDelete(record)}>Delete</Button>
//         </span>
//       ),
//     },

//   ];

//   return (
//     <div className="mx-auto my-auto text-center">
//       <h1 className="text-3xl font-bold mb-5">WORKS</h1>
//       <Table
//         dataSource={translationHistory}
//         columns={columns}
//         loading={loading}
//         pagination={{ pageSize: 10 }}
//       />
//     </div>
//   );
// };

// export default Work;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table, Tag, Button } from 'antd';

const Work = () => {
  const [translationHistory, setTranslationHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTranslations();
  }, []);

  const fetchTranslations = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/translations', {
        params: { category: '663e9f8ac7ca2c3835b2ce55' } // Send category as an ObjectId
      });
      setTranslationHistory(response.data);
    } catch (error) {
      console.error('Error fetching translations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (record) => {
    // Implement edit functionality here
    console.log('Editing translation:', record);
  };

  const handleDelete = async (record) => {
    try {
      // Implement delete functionality here
      await axios.delete(`http://localhost:3001/translations/${record._id}`);
      // After deletion, fetch translations again to update the table
      fetchTranslations();
    } catch (error) {
      console.error('Error deleting translation:', error);
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Translated Text',
      dataIndex: 'translatedText',
      key: 'translatedText',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span className="space-x-2">
          <Button type="primary" className="bg-black" onClick={() => handleEdit(record)}>Edit</Button>
          <Button type="danger" className="bg-red-600 text-white" onClick={() => handleDelete(record)}>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <div className="mx-auto my-auto text-center">
      <h1 className="text-3xl font-bold mb-5">WORKS</h1>
      <Table
        dataSource={translationHistory}
        columns={columns}
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Work;