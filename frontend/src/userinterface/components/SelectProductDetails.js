
export default function SelectProductDetails() {
    var details = [
        {
            id: '1', heading: 'Key Features', details: 'Tide Plus Double Power has STAIN MAGNETS which remove the toughest of stains to give you stainless whites The improved formulation and enzyme system is specially designed to beat tough kitchen stains and give outstanding whiteness Tide Plus Double Power is available in a range of amazing, iconic fragrances - Jasmine & Rose and Lemon & Mint Tide Plus Double Power is suitable for both whites and coloured clothes.Tide Plus Double Power is suitable for handwash and semi - auto washing machines'
        },
        {
            id: '2', heading: 'Ingredients', details: 'Detergent'
        },
        {
            id: '3', heading: 'Unit', details: '1 Kg'
        },
        {
            id: '4', heading: 'Packing Type', details: 'Packet'
        },
        {
            id: '5', heading: 'Manufacturer Details', details: 'Procter & Gamble. Katha, Himachal Pradesh 173205'
        },
        {
            id: '6', heading: 'Marketed By', details: 'Procter & Gamble Plaza, Cardinal Gracious Road, Chakala, Andheri East, Mumbai, Maharashtra 400099'
        },
        {
            id: '7', heading: 'Country Of Origin', details: 'India'
        },
        {
            id: '8', heading: 'Customer Care Details', details: 'Email: info@quickshopee.com, Customer Care Number: +91-8982309405'
        },
        {
            id: '9', heading: 'Expiry Date', details: 'Please refer to the packaging of the product for expiry date'
        },
        {
            id: '10', heading: 'Seller', details: 'TAMS GLOBAL PRIVATE LIMITED'
        },
        {
            id: '11', heading: 'Description', details: 'New Tide Plus Double Power detergent powder has Stain Magnets, which can remove the toughest of stains to give you STAINLESS WHITES. Tide Plus improved formulation and enzyme system has been specially designed to beat tough kitchen stains and give you outstanding whiteness. We often get food stains while cooking, when kids eat, while spending time with family. Tide Plus Double Power has easy dissolution in water and great foaming properties which removes stains easily. It is available in a range of amazing iconic fragrances - Jasmine&Rose and Lemon&Mint. The product works on both white and coloured clothes. Tides Double Power refers to the superior formulation vs.Tide Naturals. Tide, a unit of Procter and Gamble, is the World’s Oldest and Most Trusted Detergent brand and is the Market Leader in 23 Countries around the world.'
        },
        {
            id: '12', heading: 'Disclaimer', details: 'Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. The color of the product displayed in the image may differ from that received in the order. It is recommended not to solely rely on the details presented.'
        },
    ]

    const fillDetails = () => {
        return details.map((item) => {
            return (
                <div>
                    <div style={{ width: '85%', padding: 5, marginTop: '2%', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 15 }} >
                        {item.heading}
                    </div>

                    <div style={{ width: '85%', padding: 5, fontFamily: 'Poppins', fontSize: 15 }} >
                        {item.details}
                    </div>

                </div>
            )
        })
    }
    return (
        <div >
            <div style={{ width: '98%', padding: 5, marginTop: '5%', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 25 }}>
                Product Details
            </div>

            <div>
                {fillDetails()}
            </div>
        </div>
    )
}