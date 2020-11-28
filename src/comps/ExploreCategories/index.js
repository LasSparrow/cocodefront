import React , {useEffect , useState} from 'react'
import ExploreCategory from '../ExploreCategory'
import getCategories from '../../api/category/getCategories'

export default function ExploreCategories(props){
    const [categories , setCategories] = useState([])

    useEffect(() => {
        async function fetch(){
            const data = await getCategories()
            setCategories(data)
        }
        fetch()
    },[])

    return (
       <>
        {
            categories.map(item => <ExploreCategory key={item.id} text={item.text} image={item.photo}/>)
        }
       </>
    )
}

        //  ExploreCategory text="html" tutors="12" students="34" image={'/WebDevImage.png'}
        // <ExploreCategory text="JavaScript" tutors="8" students="13" image={'/JavaScriptImage.png'} />
        // <ExploreCategory text="CSS" tutors="17" students="41" image={'/CSSImage.png'} /> 
        // <ExploreCategory  text="Python" tutors="4" students="2" image={'/PythonImage.jpg'} />