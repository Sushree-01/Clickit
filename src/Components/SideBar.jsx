import { type } from '@testing-library/user-event/dist/type'
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
        <div style={{border:'1px solid white',boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", marginTop:'10px',textAlign:'justify',padding:'70px',justifyContent:'center'}}>
            <div >
                <h4>Filter By Brand</h4>
                <br />
                <input type="checkbox" name='Pantaloons Junior' value={"Pantaloons Junior"}
                    onChange={handleBrand} defaultChecked={brand.includes("Pantaloons Junior")} />
                   
                <label style={{marginLeft:'5px'}}>Pantaloons Junior</label>
                <br />
                <input type="checkbox" name='HERE&NOW' value={"HERE&NOW"} onChange={handleBrand} defaultChecked={brand.includes("HERE&NOW")} />
                
                <label style={{marginLeft:'5px'}}>HERE&NOW</label>
                <br />
                <input type="checkbox" name='A.T.U.N.' value={"A.T.U.N."} onChange={handleBrand} defaultChecked={brand.includes("A.T.U.N.")} />
                <label style={{marginLeft:'5px'}}>A.T.U.N.</label>

                <br />
                <input type="checkbox" name='taffykids.' value={"taffykids."} onChange={handleBrand} defaultChecked={brand.includes("taffykids.")} />
                <label style={{marginLeft:'5px'}}>taffykids</label>

                <br />
                <input type="checkbox" name='CrayonFlakes' value={"CrayonFlakes"} onChange={handleBrand} defaultChecked={brand.includes("CrayonFlakes")} />
                <label style={{marginLeft:'5px'}}>CrayonFlakes</label>

                
                <br />
                <input type="checkbox" name='Pantaloons Junior' value={"Pantaloons Junior"} onChange={handleBrand} defaultChecked={brand.includes("Pantaloons Junior")} />
                <label style={{marginLeft:'5px'}}>Pantaloons Junior</label>

                
                <br />
                <input type="checkbox" name='CAVIO' value={"CAVIO"} onChange={handleBrand} defaultChecked={brand.includes("CAVIO")} />
                <label style={{marginLeft:'5px'}}>CAVIO</label>

                <br />
                <input type="checkbox" name='Roadster' value={"Roadster"} onChange={handleBrand} defaultChecked={brand.includes("Roadster")} />
                <label style={{marginLeft:'5px'}}>Roadster</label>
               
                <br />
                <input type="checkbox" name='Urbano Fashion' value={"Urbano Fashion"} onChange={handleBrand} defaultChecked={brand.includes("Urbano Fashion")} />
                <label style={{marginLeft:'5px'}}>Urbano Fashion</label>
            </div>
            <br />
            <div>
                <h4>Filter By Gender</h4>
                <br />
                <input type="checkbox" name="male" value="male" defaultChecked={gender.includes("male")} onChange={handleGender} />
                <label style={{marginLeft:'5px'}}>Men👨‍🔬</label>
                <br />
                <input type="checkbox" name="female" value="female" defaultChecked={gender.includes("female")} onChange={handleGender} />
                <label style={{marginLeft:'5px'}}>Women👩‍⚕️</label>
                <br />
                <input type="checkbox" name="kids" value="kids" defaultChecked={gender.includes("kids")} onChange={handleGender} />
                <label style={{marginLeft:'5px'}}>Kid👶</label>
            </div>
            <br />
            <br />
            <div>
                <h4>Sort By Price</h4>
                <br />
                <div onChange={handleSort}>
                <input type="radio" name="order" value={"asc"}  />
                <label style={{marginLeft:'5px'}}>ASC</label>
                <br />
                <input type="radio" name="order" value={"desc"}/>
                <label style={{marginLeft:'5px'}}>DESC</label>
                
                </div>
            </div>
            <br />
            <div className="fltrating" style={{ display: rate }}>
                <h4>Filter By Rating</h4>
                <br />
                <p>
            <label htmlFor="">Rating⭐</label>
            <input
              type="checkbox"
              onChange={handleRating}
              value={"1.1"}
              name='rate'
              checked={rate.includes("1.1")}
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
              value={3}
              checked={rate.includes(3)}
              style={{ position: "relative", right: " -8px" }}
            />
          </p>
        
         
          <p>
            <label htmlFor="">Rating⭐⭐⭐⭐</label>
            <input onChange={handleRating} type="checkbox" value={"4"}
            defaultChecked={rate.includes('4')} />
          </p>
        </div>

        </div>
    )
}