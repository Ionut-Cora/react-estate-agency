const saleItems = [
    {
        id: 1,
        title: "1 bed flat for sale",
        address: "Street Name, Isleworth, London IS30",
        price: 600000,
        shortDescription: "This Apartment Benefits From...",
        longDescription: "This Apartment Benefits From A Huge Modern Open Plan Kitchen With A Reception, Two Bathrooms / One Of Which Is Ensuite With The Master Bedroom.",
        images: [
            {
                original: "https://images.unsplash.com/photo-1543053927-0f3795a46e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1543053927-0f3795a46e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1574118139440-94aef80059b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1574118139440-94aef80059b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
            ],
        image1: "https://images.unsplash.com/photo-1543053927-0f3795a46e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image2: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image3: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image4: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
        image5: "https://images.unsplash.com/photo-1574118139440-94aef80059b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        bedrooms: 1,
        bathrooms: 1,
        livingrooms: 1
    },
    {
        id: 2,
        title: "2 bed property for sale",
        address: "Street Rd, Kingsbury, London LO1",
        price: 350000,
        shortDescription: "Immaculate Two Double Bedroom...",
        longDescription: "Immaculate Two Double Bedroom Ground Floor Maisonette Situated Within Easy Access Of Kingsbury High Street & Excellent Transportation Links.",
        images: [
            {
                original: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1582913130063-8318329a94a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1582913130063-8318329a94a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1585128954430-22fe5b6acbea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1585128954430-22fe5b6acbea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
            ],
        image1: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image2: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image3: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image4: "https://images.unsplash.com/photo-1582913130063-8318329a94a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image5: "https://images.unsplash.com/photo-1585128954430-22fe5b6acbea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        bedrooms: 2,
        bathrooms: 1,
        livingrooms: 1
    },
    {
        id: 3,
        title: "3 bed property for sale",
        address: "King Street, Watford, London WD12",
        price: 440000,
        shortDescription: "Three Bedroom End Of Terraced...",
        longDescription: "Three Bedroom End Of Terraced Family Home In Fuller Road, North Watford. This Property Benefits From A Reception With A Dining Area, Separate Modern Fitted Kitchen.",
        images: [
            {
                original: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1613849925594-415a32298f54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1613849925594-415a32298f54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
            ],
        image1: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image2: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image3: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
        image4: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image5: "https://images.unsplash.com/photo-1613849925594-415a32298f54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        bedrooms: 3,
        bathrooms: 1,
        livingrooms: 1
    },
    {
        id: 4,
        title: "3 bed flat for sale",
        address: "Queen Road, Isleworth, London IS4",
        price: 650000,
        shortDescription: "Stunning Immaculate Three Bedroom...",
        longDescription: "Stunning Immaculate Three Bedroom Top Floor Apartment. This Property Benefits From A Modern Sleek Open Plan Kitchen With A Reception, Two Modern Bathrooms.",
        images: [
            {
                original: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1570544820842-e73cd90df808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1570544820842-e73cd90df808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
            ],
        image1: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image2: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image3: "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image4: "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image5: "https://images.unsplash.com/photo-1570544820842-e73cd90df808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        bedrooms: 3,
        bathrooms: 2,
        livingrooms: 1
    }
];

export default saleItems;