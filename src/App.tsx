import { useState } from "react"
import ShopItems from "./components/Shopitem"

const shop_items = [
  {name: "Grand-mère", prix: 100, cps:1, "image": "https://resize.elle.fr/article/var/plain_site/storage/images/societe/news/une-grand-mere-atteinte-d-un-cancer-devient-la-star-d-instagram-2689254/46790536-1-fre-FR/Une-grand-mere-atteinte-d-un-cancer-devient-la-star-d-Instagram.jpg"}, 
  {name: "ferme", prix: 1000, cps:10, "image": "https://medias.reussir.fr/chevre/2024-05/_rch382_doss_espinasse_niv1_5option.jpg"}, 
  {name: "Usine", prix: 10000, cps:100, "image": "https://images.ladepeche.fr/api/v1/images/view/5c24a43b8fe56f43841aba05/large/image.jpg"},
  {name: "Banque", prix: 1500, cps:250 , "image": "http://classe.bilingue.free.fr/fr/TDM-theatre/Doc/images/avare-cassette.jpg "},
] 


const App = () => {

  const [cookies, setCookies] = useState(0)


  return (
    <div className="w-screen h-screen flex">
      <div className="flex-1 flex flex-col justify-center items-center">
        <p>Total cookies : {cookies}</p>
        <img 
          onClick={() => { setCookies(cookies + 1)}} 
          className="h-40" 
          src="https://cdn-icons-png.flaticon.com/512/216/216341.png" 
          alt="cookie" />
      </div>
      <div className="flex-1 bg-red-100">items</div>
      <div className="flex-1 bg-blue-100 flex flex-col p-2 gap-3 ">
        {shop_items.map(item => {
          return <ShopItems item={item}/> 


        })}
      </div>
    </div>
  )
}

export default App
