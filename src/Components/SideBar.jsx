import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const SideBar = () => {
  const [searchparams, setSearchparams] = useSearchParams();
  const initialBrand = searchparams.getAll('brand');
  const initialGender = searchparams.getAll('gender');
  const initialOrder = searchparams.get('order');
  const initialRate = searchparams.getAll('rate');

  const [rate, setRate] = useState(initialRate || []);
  const [brand, setBrand] = useState(initialBrand || []);
  const [gender, setGender] = useState(initialGender || []);
  const [order, setOrder] = useState(initialOrder || '');

  useEffect(() => {
    let params = {
      brand,
      gender,
      rate,
    };
    order && (params.order = order);
    setSearchparams(params);
  }, [brand, gender, order, rate]);


    const handleBrand = (e) => {
        const { value } = e.target
        let newBrand = [...brand]
        if (newBrand.includes(value)) {
            newBrand = newBrand.filter((el) => el != value)
        } else {
            newBrand.push(value)
        }
        setBrand(newBrand)
    }
    const handleRating = (e) => {
      const { value } = e.target;
      let newRate = [...rate];
    
      if (newRate.includes(value)) {
        newRate = newRate.filter((el) => el !== value);
      } else {
        newRate.push(value);
      }
    
      setRate(newRate);
    };
    

    const handleGender = (e) => {
        const { value } = e.target
        let newGender = [...gender]
        if (newGender.includes(value)) {
            newGender = newGender.filter((el) => el != value)
        } else {
            newGender.push(value)
        }
        setGender(newGender)
    }

    const handleSort=(e)=>{
        const {value}=e.target
setOrder(value)
    }
    return (
        <div>
            <div>
                <h4>Filter By Brand</h4>
                <input type="checkbox" name='Pantaloons Junior' value={"Pantaloons Junior"}
                    onChange={handleBrand} defaultChecked={brand.includes("Pantaloons Junior")} />
                <label>Pantaloons Junior</label>
                <input type="checkbox" name='HERE&NOW' value={"HERE&NOW"} onChange={handleBrand} defaultChecked={brand.includes("HERE&NOW")} />
                <label>HERE&NOW</label>
                <input type="checkbox" name='A.T.U.N.' value={"A.T.U.N."} onChange={handleBrand} defaultChecked={brand.includes("A.T.U.N.")} />
                <label>A.T.U.N.</label>
            </div>
            <br />
            <div>
                <h4>Filter By Gender</h4>
                <input type="checkbox" name="male" value="male" defaultChecked={gender.includes("male")} onChange={handleGender} />
                <label>Men👨‍🔬</label>
                <input type="checkbox" name="female" value="female" defaultChecked={gender.includes("female")} onChange={handleGender} />
                <label>Women👩‍⚕️</label>
                <input type="checkbox" name="kids" value="kids" defaultChecked={gender.includes("kids")} onChange={handleGender} />
                <label>Kid👶</label>
            </div>
            <br />
            <br />
            <div>
                <h4>Sort By Price</h4>
                <div onChange={handleSort}>
                <input type="radio" name="order" value={"asc"}  />
                <label>ASC</label>
                <input type="radio" name="order" value={"desc"}/>
                <label>DESC</label>
                </div>
            </div>
            <div className="fltrating" style={{ display: rate }}>
                <h4>Filter By Rating</h4>
                <p>
            <label htmlFor="">Rating⭐</label>
            <input
              type="checkbox"
              onChange={handleRating}
              value={"1.1"}
              style={{ position: "relative", right: " -8px" }}
            />
          </p>
          <p>
            <label htmlFor="">Rating⭐⭐</label>
            <input
              type="checkbox"
              onChange={handleRating}
              value={"2.7"}
              style={{ position: "relative", right: "-20px" }}
            />
          </p>
          <p>
            <label htmlFor="">Rating⭐⭐⭐</label>
            <input
              type="checkbox"
              onChange={handleRating}
              value={"3.3"}
              style={{ position: "relative", right: " -8px" }}
            />
          </p>
        
         
          <p>
            <label htmlFor="">Rating⭐⭐⭐⭐</label>
            <input onChange={handleRating} type="checkbox" value={"4.2"} />
          </p>
        </div>

        </div>
    )
}