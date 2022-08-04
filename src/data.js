import item1 from './images/item-1.jpg';
import item2 from './images/item-2.jpg';
import item3 from './images/item-3.jpg';
import item4 from './images/item-4.jpg';
import item5 from './images/item-5.jpg';
import item6 from './images/item-6.jpg';
import item7 from './images/item-7.jpg';
import item8 from './images/item-8.jpg';
import item9 from './images/item-9.jpg';
import item10 from './images/item-10.jpg';
import item11 from './images/item-11.jpg';
import item12 from './images/item-12.jpg';
import item13 from './images/item-13.jpg';
import item14 from './images/item-14.jpg';
import item15 from './images/item-15.jpg';
import item16 from './images/item-16.jpg';
import { Link } from "react-router-dom";


export const data=[
    {
        "id":"0",
        "Image":item1,
        "Name": "Authentic & Original Only From WearAll",
        "Price":"28.99",
        "Department": "Women's",
        "Type": "dress",
        "Description":"Comfort material, lightweight, breathable, comfortable, wearable. Package Includes: 1* Dress, 1 * Removable Belt."
    },
    {
        "id":"1",
        "Image":item2,
        "Name": "Vintage Swing Dress",
        "Price":"13.08",
        "Department": "Women's",
        "Type": "dress",
        "Description":"Women's vintage 1950s cocktail dress sleeveless polka dot floral print retro swing party dress a line halter neck knee length pleated skirt prom dance ball gown."
    },
    {
        "id":"2",
        "Image":item3,
        "Name": "V-Neck Sleeveless A-Line Party Swing Dress",
        "Price":"25.99",
        "Department": "Women's",
        "Type": "dress",
        "Description":"Ladies 50s Vintage A-line Fancy Party Dress Sleeveless V-Neck Ruffled A-line Flared High Tea Cocktail Dress."
    },
    {
        "id":"3",
        "Image":item4,
        "Name": "Women Summer Loose Casual Shorts",
        "Price":"13.99",
        "Department": "Women's",
        "Type": "shorts",
        "Description":" High waisted, casual loose fit, solid color, two big pockets on side, cute culottes shorts for summer."
    },
    {
        "id":"4",
        "Image":item5,
        "Name": "Women's Denim Knee Shorts",
        "Price":"23.95",
        "Department": "Women's",
        "Type": "shorts",
        "Description":"Soft Stretch Denim Shorts, Button & Zip Fastening, 95% Cotton, 5% Elastane"
    },
    {
        "id":"5",
        "Image":item6,
        "Name": "Ladies Denim Shorts",
        "Price":"10.99",
        "Department": "Women's",
        "Type": "shorts",
        "Description":"Ladies Denim Shorts Stretchy Belted Hot Pants"
    },
    {
        "id":"6",
        "Image":item7,
        "Name": "Fish Nilly Organic Cotton Vest",
        "Price":"22.00",
        "Department": "Women's",
        "Type": "vests",
        "Description":"Pleats at the neckline, Sleeveless vest top"
    },
    {
        "id":"7",
        "Image":item8,
        "Name": "Lace Top Noos Cami Shirt",
        "Price":"21.99",
        "Department": "Women's",
        "Type": "vests",
        "Description":"Normal fit, Lace Top"
    },
    {
        "id":"8",
        "Image":item9,
        "Name": "Ladies Sleeveless Plain Illuminous Neon Swing Vest",
        "Price":"11.95",
        "Department": "Women's",
        "Type": "vests",
        "Description":"Sleeveless plain illuminous neon swing vest strappy top."
    },
    {
        "id":"9",
        "Image":item10,
        "Name": "Womens I Love The 80s T Shirt",
        "Price":"9.99",
        "Department": "Women's",
        "Type": "t-shirts",
        "Description":"The Perfect Women's Off-the-shoulder T-shirt Is Here For You As 80s Clothes For Women."
    },
    {
        "id":"10",
        "Image":item11,
        "Name": "Regatta Filandra Vi T-Shirt",
        "Price":"21.00",
        "Department": "Women's",
        "Type": "t-shirts",
        "Description":"160gsm Coolweave 100% sustainable cotton jersey fabric."
    },
    {
        "id":"11",
        "Image":item12,
        "Name": "Butterfly Print Short Sleeve T-Shirt",
        "Price":"6.99",
        "Department": "Women's",
        "Type": "t-shirts",
        "Description":"Authentic & Original Only From WearAll."
    },
    {
        "id":"12",
        "Image":item13,
        "Name": "Long Sleeve Business Regular Fit Shirt",
        "Price":"25.99",
        "Department": "Men's",
        "Type": "shirts",
        "Description":"The long sleeve shirt is made of stretch fabric,makes you move body easier;soft and comfortable with good breathability."
    },
    {
        "id":"13",
        "Image":item14,
        "Name": "Men's Casual Shirt",
        "Price":"23.99",
        "Department": "Men's",
        "Type": "shirts",
        "Description":"Neckline and cuffs are unique contrast color designed. The fabric is breathable and skin friendly. Please kindly note the solid color shirts are flex fabric."
    },
    {
        "id":"14",
        "Image":item15,
        "Name": "Shirt with Classic Button Down",
        "Price":"26.95",
        "Department": "Men's",
        "Type": "shirts",
        "Description":"This casual long sleeve shirt is finished with our patented chequered design fabric. Double layered collar , button line piping and inside of the cuffs gives this classic look shirt a modern but elegant twist."
    },
    {
        "id":"15",
        "Image":item16,
        "Name": "Jack & Jones Men's Jeans",
        "Price":"35.00",
        "Department": "Men's",
        "Type": "jeans",
        "Description":"Slim Fit, Slim Thigh, Slim Knee, Tight Leg opening, Button Fly Closure, Stretchable, 5 Pocket Design"
    },
]

export const renderItems=data.map(
    (element)=>{
        return( 
        <div className='item' key={element.id}>
            <img src={element.Image} alt="Item"/>
            <p className='name'>{element.Name}</p>
            <p className='price'>${element.Price}</p>
            <p><strong>Department:</strong> {element.Department}</p>
            <p><strong>Description:</strong> {element.Description}</p>
            <Link to={`/catalog/${element.id}`} className='item-button'>View Details</Link>
        </div>
            
        )
    }
)