'use client';

import { useState } from 'react';
import Image from 'next/image';
import useSearchModal, {SearchQuery} from '../hooks/useSearchModal';

const Categories = () => {
    const searchModal = useSearchModal();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query);

    }

    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div 
                onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/mansions.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>All</span>
            </div>
            
            <div 
                onClick={() => _setCategory('beach')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'beach' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/category_beach.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>Beach</span>
            </div>

            <div 
                onClick={() => _setCategory('lakefront')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'lakefront' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/category_lakefront.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>Lakefront</span>
            </div>

            <div 
                onClick={() => _setCategory('cabins')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'cabins' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/category_cabins.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>Cabins</span>
            </div>

            <div
                onClick={() => _setCategory('pools')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'pools' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/category_pools.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />

                <span className='text-xs'>Pools</span>
            </div>
        </div>
    )
}

export default Categories;