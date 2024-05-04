export const reducer = (state, action) => {
    switch (action?.type) {
        case 'recommended':
            return [...action?.payload?.filter(product => product?.idealFor?.toLowerCase() == 'unisex')]
        case 'newest-first':
            return [...action?.payload?.sort((product1, product2) => new Date(product2?.addedOn) - new Date(product1?.addedOn))]
        case 'popular':
            return [...action?.payload?.filter(product => product?.suitableFor?.includes('Parties'))]
        case 'pricehightolow':
            return [...action?.payload?.sort((product1, product2) => product2?.price - product1?.price)]
        case 'pricelowtohigh':
            return [...action?.payload?.sort((product1, product2) => product1?.price - product2?.price)]
        default: return action?.payload;
    }
}