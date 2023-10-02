import TimerIcon from '@mui/icons-material/Timer';
import { Button,Divider } from '@mui/material';
import SelectProductUnit from './SelectProductUnit';
export default function SelectProductName({product,refreshPage}) {
    var productDetails = [
        { id: 1, category: 'Home', subcategory: 'Detergent Powder & Bars', product: 'Tide Double Power Jasmine & Rose Detergent Powder', company: 'Tide', delivery: '10 MINS', weight: '1 Kg', rate: '128' }
    ]

    const ShowProductName = () => {
        
            return (
                <div>
                    <div style={{ width: '98%' }}>
                        <div style={{ display: 'flex', width: '98%', padding: 5, marginLeft: '6%', marginTop: '10%', fontFamily: 'Poppins', }}>
                            <div style={{ fontWeight: 'bold', fontSize: 13 }}>
                                {'xxxx'} / {'xxxxxx'} /
                            </div>

                            <div style={{ fontSize: 13 }}>
                                {product.productlistname}
                            </div>
                        </div>

                        <div style={{ width: '98%', padding: 5, marginLeft: '6%', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 25 }}>
                            {product.productlistname}
                        </div>

                        <div style={{ display: 'flex', width: '12%', marginLeft: '7%', background: '#dfe6e9' }}>
                            <div>
                                <TimerIcon style={{ fontSize: 'medium' }} />
                            </div>

                            <div style={{ fontSize: 12, fontWeight: 'bold' }}>
                                {'10 Min'}
                            </div>
                        </div>

                        <div style={{ fontSize: 18, fontWeight: 'bold', color: 'green', fontFamily: 'Poppins', padding: 5, marginLeft: '6%', }}>
                            View all by {'Tide'}
                        </div>

                        <Divider style={{ width: "95%", paddingTop: '5%', marginLeft: '6%' }} />
                        <SelectProductUnit product={product} refreshPage={refreshPage} />
                        
                    </div>
                </div>
            )
 
    }

    return (
        <div>
            {ShowProductName()}
        </div>

    )
}