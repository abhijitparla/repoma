import React from 'react'
import Header from '../common/Header'
import AddPropertyForm from './AddPropertyForm'

const page = () => {
  return (
    <div>
        <AddPropertyForm/>
        
        {
            //Form to add property
            //1. Property name (nickname) - string
            //2. type of property - villa, land, flat - drop down
            //2.0 Photos of property - image upload
            //2.1 Propert address - google map api with a field to add the door no or flat no
            //2.3 area in sqft - number
            //2.4 loan or cash - radio
            //2.5 loan details - {}
            //2.6 upload sale deed - pdf upload 
            //3. Date of purchase - date picker - cate object
            //4. Purchase price - number 
            //5. is rented? - boolean
            //  5.1 rent amount - number
            //  5.2 tenant details - object {}
            //6. property tax - yearly - number
            //7. maintanace - object - {maintance society, repairs on property}

        }
    </div>
  )
}

export default page
