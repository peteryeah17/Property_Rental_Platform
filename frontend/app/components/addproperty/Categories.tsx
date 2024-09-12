import Image from 'next/image';

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div 
                    onClick={() => setCategory('beach')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'beach' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/category_beach.jpg"
                        alt="Category - beach"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Beach</span>
                </div>

                <div 
                    onClick={() => setCategory('Cabins')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/category_cabins.jpg"
                        alt="Category - Cabins"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Cabins</span>
                </div>

                <div 
                    onClick={() => setCategory('lakefront')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'lakefront' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/category_lakefront.jpg"
                        alt="Category - lakefront"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Lakefront</span>
                </div>

                <div 
                    onClick={() => setCategory('pool')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'pool' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/category_pools.jpg"
                        alt="Category - pool"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Pools</span>
                </div>
            </div>
        </>
    )
}

export default Categories;