// import React from 'react';

// const HistoryBar = () => {
//     return (
//         <div className='bg-gray-200 h-screen p-4 w-72'>
//             {/* Left sidebar for history */}
//             <div className="mx-auto">
//                 <h2 className="text-xl font-bold mb-4">History</h2>
//                 {/* Implement history items here */}
//                 {/* Example: */}
//                 <div className="mb-2">
//                     <p className="text-sm font-semibold">Today</p>
//                     <p className="text-gray-600">Conversation history for Today</p>
//                 </div>
//                 <div className="mb-2">
//                     <p className="text-sm font-semibold">Yesterday</p>
//                     <p className="text-gray-600">Conversation history for yesterday</p>
//                 </div>
//                 <div className="mb-2">
//                     <p className="text-sm font-semibold">Previous 7 days</p>
//                     <p className="text-gray-600">Conversation history for the last 7 days</p>
//                 </div>
//                 {/* Add more history items as needed */}
//             </div>
//         </div>
//     );
// }

// export default HistoryBar;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

const HistoryBar = () => {
    const [translations, setTranslations] = useState([]);

    useEffect(() => {
        fetchTranslations();
    }, []);

    const fetchTranslations = async () => {
        try {
            const response = await axios.get('http://localhost:3001/translations');
            setTranslations(response.data);
        } catch (error) {
            console.error('Error fetching translations:', error);
        }
    };

    const deleteTranslation = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/translations/${id}`);
            fetchTranslations(); // Refresh translations after deletion
        } catch (error) {
            console.error('Error deleting translation:', error);
        }
    };

    return (
        <div className='bg-gray-200 h-screen p-4 w-72'>
            <div className="mx-auto">
                <h2 className="text-xl font-bold mb-4">History</h2>
                {translations.map((translation) => (
                    <div key={translation._id} className="mb-2 flex bg-[#FFAF45] rounded-xl px-4">
                        <div>
                        <p className="text-sm font-semibold" onClick={() => console.log(translation.translatedText)}>{`${translation.title}...`}</p>
                        <p className="text-gray-600">{translation.translatedText}</p>
                        </div>
                        <button onClick={() => deleteTranslation(translation._id)} className=' flex justify-end items-end'><DeleteForeverTwoToneIcon/></button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HistoryBar;
