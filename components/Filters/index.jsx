import { IDEAL_FOR, OCCASIONS, SEGMENT, RAW_MATERIALS, WORK, FABRIC, PATTERNS, SUITABLE_FOR } from "@/utils/constants"
import { useData } from "@/contexts/DataContext"

export const Filters = () => {
    const { filterList, setFilterList } = useData();

    const handleFilterList = (filter) => {
        if (filterList?.includes(filter)) {
            setFilterList(filterList?.filter(item => item !== filter));
        }
        else {
            setFilterList([...filterList, filter])
        }

    }

    const handleAllFilters = (filters, action) => {
        let updatedFilters = filterList

        for (let i = 0; i < filters?.length; i++) {
            if (action === 'ADD') {
                if (!updatedFilters?.includes(filters[i])) {
                    updatedFilters = [...updatedFilters, filters[i]];
                }
            }
            else if (action === 'REMOVE') {
                if (updatedFilters?.includes(filters[i])) {
                    updatedFilters = updatedFilters?.filter(item => item !== filters[i]);
                }
            }
        }
        setFilterList(updatedFilters)
    }

    return (
        <aside className="flex-col row-gap-16">
            <p className="font-semibold text-md"><input type="checkbox" checked={filterList?.length > 0} onChange={(e) => filterList?.length > 0 ? setFilterList([]) : null} />CUSTOMIZABLE</p>
            <div className="flex-col row-gap-10">
                <h3 className="font-semibold text-md">IDEAL FOR</h3>
                <p onClick={() => handleAllFilters(['men', 'women', 'unisex'], 'ADD')} className="cursor-pointer">All</p>
                <div className="flex-col row-gap-10">
                    <p onClick={() => handleAllFilters(['men', 'women', 'unisex'], 'REMOVE')} className="unselect">Unselect all</p>
                    {
                        IDEAL_FOR?.map(item => {
                            return (
                                <label htmlFor={item?.value} key={item?.id}>
                                    <input type="checkbox" name="" id={item?.value} checked={filterList?.includes(item?.value)} onChange={(e) => handleFilterList(item?.value)} />{item?.label}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex-col row-gap-10">
                <h3 className="font-semibold text-md">OCCASION</h3>
                <p onClick={() => handleAllFilters(['formal', 'winter', 'casual', 'nightwear'], 'ADD')} className="cursor-pointer">All</p>
                <div className="flex-col row-gap-10">
                    <p onClick={() => handleAllFilters(['formal', 'winter', 'casual', 'nightwear'], 'REMOVE')} className="unselect">Unselect all</p>
                    {
                        OCCASIONS?.map(item => {
                            return (
                                <label htmlFor={item?.value} key={item?.id}>
                                    <input type="checkbox" name="" id={item?.value} checked={filterList?.includes(item?.value)} onChange={(e) => handleFilterList(item?.value)} />{item?.label}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex-col row-gap-10">
                <h3 className="font-semibold text-md">WORK</h3>
                <p onClick={() => handleAllFilters(['plain', 'embroidered', 'stitched', 'printed'], 'ADD')} className="cursor-pointer">All</p>
                <div className="flex-col row-gap-10">
                    <p onClick={() => handleAllFilters(['plain', 'embroidered', 'stitched', 'printed'], 'REMOVE')} className="unselect">Unselect all</p>
                    {
                        WORK?.map(item => {
                            return (
                                <label htmlFor={item?.value} key={item?.id}>
                                    <input type="checkbox" name="" id={item?.value} checked={filterList?.includes(item?.value)} onChange={(e) => handleFilterList(item?.value)} />{item?.label}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex-col row-gap-10">
                <h3 className="font-semibold text-md">FABRIC</h3>
                <p onClick={() => handleAllFilters(['lace', 'cashmere', 'satin', 'cotton', 'velvet', 'chiffon', 'leather', 'wool', 'linen', 'denim', 'silk'], 'ADD')} className="cursor-pointer">All</p>
                <div className="flex-col row-gap-10">
                    <p onClick={() => handleAllFilters(['lace', 'cashmere', 'satin', 'cotton', 'velvet', 'chiffon', 'leather', 'wool', 'linen', 'denim', 'silk'], 'REMOVE')} className="unselect">Unselect all</p>
                    {
                        FABRIC?.map(item => {
                            return (
                                <label htmlFor={item?.value} key={item?.id}>
                                    <input type="checkbox" name="" id={item?.value} checked={filterList?.includes(item?.value)} onChange={(e) => handleFilterList(item?.value)} />{item?.label}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex-col row-gap-10">
                <h3 className="font-semibold text-md">SEGMENT</h3>
                <p onClick={() => handleAllFilters(['mens-clothing', 'womens-clothing', 'unisex-clothing'], 'ADD')} className="cursor-pointer">All</p>
                <div className="flex-col row-gap-10">
                    <p onClick={() => handleAllFilters(['mens-clothing', 'womens-clothing', 'unisex-clothing'], 'REMOVE')} className="unselect">Unselect all</p>
                    {
                        SEGMENT?.map(item => {
                            return (
                                <label htmlFor={item?.value} key={item?.id}>
                                    <input type="checkbox" name="" id={item?.value} checked={filterList?.includes(item?.value)} onChange={(e) => handleFilterList(item?.value)} />{item?.label}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex-col row-gap-10">
                <h3 className="font-semibold text-md">SUITABLE FOR</h3>
                <p onClick={() => handleAllFilters(['daily-wear', 'casual', 'parties', 'weddings', 'cold-weather', 'formal', 'biking', 'outings'], 'ADD')} className="cursor-pointer">All</p>
                <div className="flex-col row-gap-10">
                    <p onClick={() => handleAllFilters(['daily-wear', 'casual', 'parties', 'weddings', 'cold-weather', 'formal', 'biking', 'outings'], 'REMOVE')} className="unselect">Unselect all</p>
                    {
                        SUITABLE_FOR?.map(item => {
                            return (
                                <label htmlFor={item?.value} key={item?.id}>
                                    <input type="checkbox" name="" id={item?.value} checked={filterList?.includes(item?.value)} onChange={(e) => handleFilterList(item?.value)} />{item?.label}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex-col row-gap-10">
                <h3 className="font-semibold text-md">RAW MATERIALS</h3>
                <p onClick={() => handleAllFilters(['lace', 'cashmere', 'satin', 'cotton', 'velvet', 'chiffon', 'leather', 'wool', 'linen', 'denim', 'silk', 'cottom'], 'ADD')} className="cursor-pointer">All</p>
                <div className="flex-col row-gap-10">
                    <p onClick={() => handleAllFilters(['lace', 'cashmere', 'satin', 'cotton', 'velvet', 'chiffon', 'leather', 'wool', 'linen', 'denim', 'silk', 'cottom'], 'REMOVE')} className="unselect">Unselect all</p>
                    {
                        RAW_MATERIALS?.map(item => {
                            return (
                                <label htmlFor={item?.value} key={item?.id}>
                                    <input type="checkbox" name="" id={item?.value} checked={filterList?.includes(item?.value)} onChange={(e) => handleFilterList(item?.value)} />{item?.label}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex-col row-gap-10">
                <h3 className="font-semibold text-md">PATTERN</h3>
                <p onClick={() => handleAllFilters(['floral', 'plain', 'solid', 'printed', 'knitted', 'striped'], 'ADD')} className="cursor-pointer">All</p>
                <div className="flex-col row-gap-10">
                    <p onClick={() => handleAllFilters(['floral', 'plain', 'solid', 'printed', 'knitted', 'striped'], 'REMOVE')} className="unselect">Unselect all</p>
                    {
                        PATTERNS?.map(item => {
                            return (
                                <label htmlFor={item?.value} key={item?.id}>
                                    <input type="checkbox" name="" id={item?.value} checked={filterList?.includes(item?.value)} onChange={(e) => handleFilterList(item?.value)} />{item?.label}
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        </aside>
    )
}