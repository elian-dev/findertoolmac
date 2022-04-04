new Vue({
  data(){
    return{
      piel: '',
      acabado: '',
      color: '',
      lists: [
 {
   "sku": 447665000000,
   "title": "Cosmo",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602051731_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035921"
 },
 {
   "sku": 447665000000,
   "title": "Cosmo",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602051731_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035921"
 },
 {
   "sku": 447665000000,
   "title": "Cosmo",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602051731_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035921"
 },
 {
   "sku": 447666000000,
   "title": "Craving",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602051762_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035908"
 },
 {
   "sku": 447666000000,
   "title": "Craving",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602051762_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035908"
 },
 {
   "sku": 447666000000,
   "title": "Craving",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602051762_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035908"
 },
 {
   "sku": 447667000000,
   "title": "Dark Side",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602051816_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035986"
 },
 {
   "sku": 447667000000,
   "title": "Dark Side",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602051816_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035986"
 },
 {
   "sku": 447667000000,
   "title": "Dark Side",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602051816_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035986"
 },
 {
   "sku": 447667000000,
   "title": "Dubonnet",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602051823_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035915"
 },
 {
   "sku": 447667000000,
   "title": "Dubonnet",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602051823_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035915"
 },
 {
   "sku": 447667000000,
   "title": "Dubonnet",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602051823_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035915"
 },
 {
   "sku": 447708000000,
   "title": "Morange",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602059102_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035884"
 },
 {
   "sku": 447708000000,
   "title": "Morange",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602059102_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035884"
 },
 {
   "sku": 447708000000,
   "title": "Morange",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602059102_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035884"
 },
 {
   "sku": 447669000000,
   "title": "Fast Play",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602063512_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035912"
 },
 {
   "sku": 447669000000,
   "title": "Fast Play",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602063512_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035912"
 },
 {
   "sku": 447669000000,
   "title": "Fast Play",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602063512_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035912"
 },
 {
   "sku": 447661000000,
   "title": "Blankety",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602063543_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035988"
 },
 {
   "sku": 447661000000,
   "title": "Blankety",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602063543_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035988"
 },
 {
   "sku": 447661000000,
   "title": "Blankety",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602063543_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035988"
 },
 {
   "sku": 447663000000,
   "title": "Brick-O-La",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602063550_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035885"
 },
 {
   "sku": 447663000000,
   "title": "Brick-O-La",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602063550_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035885"
 },
 {
   "sku": 447663000000,
   "title": "Brick-O-La",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602063550_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035885"
 },
 {
   "sku": 447712000000,
   "title": "Vegas Volt",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602063574_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035839"
 },
 {
   "sku": 447712000000,
   "title": "Vegas Volt",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602063574_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035839"
 },
 {
   "sku": 447712000000,
   "title": "Vegas Volt",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602063574_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035839"
 },
 {
   "sku": 453345000000,
   "title": "Crème d’Nude",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602164165_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043098"
 },
 {
   "sku": 453345000000,
   "title": "Crème d’Nude",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602164165_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043098"
 },
 {
   "sku": 453345000000,
   "title": "Crème d’Nude",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602164165_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043098"
 },
 {
   "sku": 453345000000,
   "title": "Modesty",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602164189_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043086"
 },
 {
   "sku": 453345000000,
   "title": "Modesty",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602164189_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043086"
 },
 {
   "sku": 453345000000,
   "title": "Modesty",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602164189_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043086"
 },
 {
   "sku": 453344000000,
   "title": "Fanfare",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602164226_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043102"
 },
 {
   "sku": 453344000000,
   "title": "Fanfare",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602164226_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043102"
 },
 {
   "sku": 453344000000,
   "title": "Fanfare",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602164226_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043102"
 },
 {
   "sku": 100158032,
   "title": "Nippon",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602373277_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100158032,
   "title": "Nippon",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602373277_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100158032,
   "title": "Nippon",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602373277_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100158036,
   "title": "Pretty Boy",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602373314_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100158036,
   "title": "Pretty Boy",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602373314_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100158036,
   "title": "Pretty Boy",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602373314_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 453347000000,
   "title": "Crosswires",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602164257_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043103"
 },
 {
   "sku": 453347000000,
   "title": "Crosswires",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602164257_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043103"
 },
 {
   "sku": 453347000000,
   "title": "Crosswires",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602164257_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043103"
 },
 {
   "sku": 453342000000,
   "title": "Party Line",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602164271_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043106"
 },
 {
   "sku": 453342000000,
   "title": "Party Line",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602164271_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043106"
 },
 {
   "sku": 453342000000,
   "title": "Party Line",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602164271_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043106"
 },
 {
   "sku": 453346000000,
   "title": "On Hold",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602166527_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043096"
 },
 {
   "sku": 453346000000,
   "title": "On Hold",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602166527_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043096"
 },
 {
   "sku": 453346000000,
   "title": "On Hold",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602166527_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043096"
 },
 {
   "sku": 453346000000,
   "title": "Brave Red",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602166534_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043093"
 },
 {
   "sku": 453346000000,
   "title": "Brave Red",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602166534_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043093"
 },
 {
   "sku": 453346000000,
   "title": "Brave Red",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602166534_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043093"
 },
 {
   "sku": 453342000000,
   "title": "Dare You",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602166541_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043104"
 },
 {
   "sku": 453342000000,
   "title": "Dare You",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602166541_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043104"
 },
 {
   "sku": 453342000000,
   "title": "Dare You",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602166541_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2043104"
 },
 {
   "sku": 460334000000,
   "title": "Crème Cup",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602174034_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2049581"
 },
 {
   "sku": 460334000000,
   "title": "Crème Cup",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602174034_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2049581"
 },
 {
   "sku": 460334000000,
   "title": "Crème Cup",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602174034_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2049581"
 },
 {
   "sku": 100157953,
   "title": "Dozen Carnations",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602373321_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100157953,
   "title": "Dozen Carnations",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602373321_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100157953,
   "title": "Dozen Carnations",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602373321_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100157923,
   "title": "Sweet Sakura",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602373338_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100157923,
   "title": "Sweet Sakura",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602373338_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100157923,
   "title": "Sweet Sakura",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602373338_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 460335000000,
   "title": "Crème In Your Coffee",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602174058_a1.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2049615"
 },
 {
   "sku": 460335000000,
   "title": "Crème In Your Coffee",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602174058_a2.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2049615"
 },
 {
   "sku": 460335000000,
   "title": "Crème In Your Coffee",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602174058_a3.jpg",
   "url": "https://ni.siman.com/l-labial-crem-modesty-3g-0-1-us-oz-533451/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2049615"
 },
 {
   "sku": 100876539,
   "title": "Oh Baby",
   "piel": "Light",
   "color": "Brown",
   "acabado": "Shine",
   "img": "assets/img/773602411436_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448965"
 },
 {
   "sku": 100876539,
   "title": "Oh Baby",
   "piel": "Medium",
   "color": "Brown",
   "acabado": "Shine",
   "img": "assets/img/773602411436_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448965"
 },
 {
   "sku": 100876539,
   "title": "Oh Baby",
   "piel": "Dark",
   "color": "Brown",
   "acabado": "Shine",
   "img": "assets/img/773602411436_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448965"
 },
 {
   "sku": 100876545,
   "title": "Nymphette",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411450_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448973"
 },
 {
   "sku": 100876545,
   "title": "Nymphette",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411450_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448973"
 },
 {
   "sku": 100876545,
   "title": "Nymphette",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411450_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448973"
 },
 {
   "sku": 100876548,
   "title": "Oyster Girl",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411474_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448978"
 },
 {
   "sku": 100876548,
   "title": "Oyster Girl",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411474_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448978"
 },
 {
   "sku": 100876548,
   "title": "Oyster Girl",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411474_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448978"
 },
 {
   "sku": 100876551,
   "title": "Cultured",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411498_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448983"
 },
 {
   "sku": 100876551,
   "title": "Cultured",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411498_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448983"
 },
 {
   "sku": 100876551,
   "title": "Cultured",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411498_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448983"
 },
 {
   "sku": 100876555,
   "title": "Lust",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602411511_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448988"
 },
 {
   "sku": 100876555,
   "title": "Lust",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602411511_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448988"
 },
 {
   "sku": 100876555,
   "title": "Lust",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602411511_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4448988"
 },
 {
   "sku": 100876571,
   "title": "Love Child",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602411542_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449007"
 },
 {
   "sku": 100876571,
   "title": "Love Child",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602411542_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449007"
 },
 {
   "sku": 100876571,
   "title": "Love Child",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602411542_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449007"
 },
 {
   "sku": 100876585,
   "title": "Spice",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602411573_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449023"
 },
 {
   "sku": 100876585,
   "title": "Spice",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602411573_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449023"
 },
 {
   "sku": 100876585,
   "title": "Spice",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602411573_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449023"
 },
 {
   "sku": 100876658,
   "title": "Spite",
   "piel": "Light",
   "color": "Brown",
   "acabado": "Shine",
   "img": "assets/img/773602411627_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449099"
 },
 {
   "sku": 100876658,
   "title": "Spite",
   "piel": "Medium",
   "color": "Brown",
   "acabado": "Shine",
   "img": "assets/img/773602411627_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449099"
 },
 {
   "sku": 100876658,
   "title": "Spite",
   "piel": "Dark",
   "color": "Brown",
   "acabado": "Shine",
   "img": "assets/img/773602411627_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449099"
 },
 {
   "sku": 100877541,
   "title": "Dreamy",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411641_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449984"
 },
 {
   "sku": 100877541,
   "title": "Dreamy",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411641_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449984"
 },
 {
   "sku": 100877541,
   "title": "Dreamy",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602411641_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4449984"
 },
 {
   "sku": 100877663,
   "title": "Candy Box",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602414970_a1.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4450117"
 },
 {
   "sku": 100877663,
   "title": "Candy Box",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602414970_a2.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4450117"
 },
 {
   "sku": 100877663,
   "title": "Candy Box",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602414970_a3.jpg",
   "url": "https://ni.siman.com/lipglass-snob-100876541/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4450117"
 },
 {
   "sku": 102308512,
   "title": "Daddy's Girl",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541447_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633834"
 },
 {
   "sku": 102308512,
   "title": "Daddy's Girl",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541447_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633834"
 },
 {
   "sku": 102308512,
   "title": "Daddy's Girl",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541447_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633834"
 },
 {
   "sku": 102308508,
   "title": "Laissez-Faire",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541454_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633830"
 },
 {
   "sku": 102308508,
   "title": "Laissez-Faire",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541454_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633830"
 },
 {
   "sku": 102308508,
   "title": "Laissez-Faire",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541454_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633830"
 },
 {
   "sku": 102308395,
   "title": "Under The Covers",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541461_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633753"
 },
 {
   "sku": 102308395,
   "title": "Under The Covers",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541461_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633753"
 },
 {
   "sku": 102308395,
   "title": "Under The Covers",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541461_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633753"
 },
 {
   "sku": 102308328,
   "title": "As If I Care",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541478_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633648"
 },
 {
   "sku": 102308328,
   "title": "As If I Care",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541478_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633648"
 },
 {
   "sku": 102308328,
   "title": "As If I Care",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541478_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633648"
 },
 {
   "sku": 102308306,
   "title": "Give Me Fever",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602541584_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633620"
 },
 {
   "sku": 102308306,
   "title": "Give Me Fever",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602541584_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633620"
 },
 {
   "sku": 102308306,
   "title": "Give Me Fever",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602541584_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633620"
 },
 {
   "sku": 102308305,
   "title": "E For Effortless",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602541591_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633618"
 },
 {
   "sku": 102308305,
   "title": "E For Effortless",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602541591_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633618"
 },
 {
   "sku": 102308305,
   "title": "E For Effortless",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602541591_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633618"
 },
 {
   "sku": 102308303,
   "title": "Tres Blasé",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541621_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633614"
 },
 {
   "sku": 102308303,
   "title": "Tres Blasé",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541621_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633614"
 },
 {
   "sku": 102308303,
   "title": "Tres Blasé",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541621_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633614"
 },
 {
   "sku": 102308302,
   "title": "Hey, Frenchie!",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541638_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633613"
 },
 {
   "sku": 102308302,
   "title": "Hey, Frenchie!",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541638_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633613"
 },
 {
   "sku": 102308302,
   "title": "Hey, Frenchie!",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541638_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633613"
 },
 {
   "sku": 102308301,
   "title": "Killing Me Softly",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602541645_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633611"
 },
 {
   "sku": 102308301,
   "title": "Killing Me Softly",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602541645_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633611"
 },
 {
   "sku": 102308301,
   "title": "Killing Me Softly",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602541645_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633611"
 },
 {
   "sku": 102308299,
   "title": "Mon Coeur",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541669_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633607"
 },
 {
   "sku": 102308299,
   "title": "Mon Coeur",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541669_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633607"
 },
 {
   "sku": 102308299,
   "title": "Mon Coeur",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602541669_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633607"
 },
 {
   "sku": 102308298,
   "title": "Bated Breath",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541676_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633605"
 },
 {
   "sku": 102308298,
   "title": "Bated Breath",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541676_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633605"
 },
 {
   "sku": 102308298,
   "title": "Bated Breath",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541676_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633605"
 },
 {
   "sku": 102308297,
   "title": "Coffee & Cigs",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541683_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633603"
 },
 {
   "sku": 102308297,
   "title": "Coffee & Cigs",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541683_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633603"
 },
 {
   "sku": 102308297,
   "title": "Coffee & Cigs",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602541683_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633603"
 },
 {
   "sku": 102308296,
   "title": "La Femme",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602541690_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633601"
 },
 {
   "sku": 102308296,
   "title": "La Femme",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602541690_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633601"
 },
 {
   "sku": 102308296,
   "title": "La Femme",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602541690_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633601"
 },
 {
   "sku": 102308295,
   "title": "Maison Rouge",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602541706_a1.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633593"
 },
 {
   "sku": 102308295,
   "title": "Maison Rouge",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602541706_a2.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633593"
 },
 {
   "sku": 102308295,
   "title": "Maison Rouge",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602541706_a3.jpg",
   "url": "https://ni.siman.com/love-me-lipstick-laissez-faire-3-g-0-1-us-oz-102308508/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5633593"
 },
 {
   "sku": 447710000000,
   "title": "Plumful",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602033522_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035822"
 },
 {
   "sku": 447710000000,
   "title": "Plumful",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602033522_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035822"
 },
 {
   "sku": 447710000000,
   "title": "Plumful",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602033522_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035822"
 },
 {
   "sku": 447700000000,
   "title": "Lovelorn",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602033539_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035981"
 },
 {
   "sku": 447700000000,
   "title": "Lovelorn",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602033539_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035981"
 },
 {
   "sku": 447700000000,
   "title": "Lovelorn",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602033539_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035981"
 },
 {
   "sku": 447712000000,
   "title": "Syrup",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602033546_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035835"
 },
 {
   "sku": 447712000000,
   "title": "Syrup",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602033546_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035835"
 },
 {
   "sku": 447712000000,
   "title": "Syrup",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602033546_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035835"
 },
 {
   "sku": 447685000000,
   "title": "Hug Me",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602033799_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035828"
 },
 {
   "sku": 447685000000,
   "title": "Hug Me",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602033799_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035828"
 },
 {
   "sku": 447685000000,
   "title": "Hug Me",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602033799_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035828"
 },
 {
   "sku": 447686000000,
   "title": "Lady Bug",
   "piel": "Light",
   "color": "Red",
   "acabado": "Shine",
   "img": "assets/img/773602033805_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035826"
 },
 {
   "sku": 447686000000,
   "title": "Lady Bug",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Shine",
   "img": "assets/img/773602033805_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035826"
 },
 {
   "sku": 447686000000,
   "title": "Lady Bug",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Shine",
   "img": "assets/img/773602033805_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035826"
 },
 {
   "sku": 447711000000,
   "title": "See Sheer",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602033829_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035836"
 },
 {
   "sku": 447711000000,
   "title": "See Sheer",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602033829_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035836"
 },
 {
   "sku": 447711000000,
   "title": "See Sheer",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602033829_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035836"
 },
 {
   "sku": 447712000000,
   "title": "Touch",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602033881_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035906"
 },
 {
   "sku": 447712000000,
   "title": "Touch",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602033881_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035906"
 },
 {
   "sku": 447712000000,
   "title": "Touch",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602033881_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035906"
 },
 {
   "sku": 447663000000,
   "title": "Capricious",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602033898_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035928"
 },
 {
   "sku": 447663000000,
   "title": "Capricious",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602033898_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035928"
 },
 {
   "sku": 447663000000,
   "title": "Capricious",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602033898_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035928"
 },
 {
   "sku": 447710000000,
   "title": "Pretty Please",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602054275_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035881"
 },
 {
   "sku": 447710000000,
   "title": "Pretty Please",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602054275_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035881"
 },
 {
   "sku": 447710000000,
   "title": "Pretty Please",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602054275_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035881"
 },
 {
   "sku": 447702000000,
   "title": "Midimauve",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602063468_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035907"
 },
 {
   "sku": 447702000000,
   "title": "Midimauve",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602063468_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035907"
 },
 {
   "sku": 447702000000,
   "title": "Midimauve",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602063468_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-lustering-3g-477006/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035907"
 },
 {
   "sku": 488242000000,
   "title": "Chili",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602048663_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2649406"
 },
 {
   "sku": 488242000000,
   "title": "Chili",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602048663_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2649406"
 },
 {
   "sku": 488242000000,
   "title": "Chili",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602048663_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2649406"
 },
 {
   "sku": 488242000000,
   "title": "Diva",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602048670_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2649328"
 },
 {
   "sku": 488242000000,
   "title": "Diva",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602048670_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2649328"
 },
 {
   "sku": 488242000000,
   "title": "Diva",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Cream",
   "img": "assets/img/773602048670_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2649328"
 },
 {
   "sku": 447710000000,
   "title": "Russian Red",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602048717_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035920"
 },
 {
   "sku": 447710000000,
   "title": "Russian Red",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602048717_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035920"
 },
 {
   "sku": 447710000000,
   "title": "Russian Red",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602048717_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035920"
 },
 {
   "sku": 447712000000,
   "title": "Taupe",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602048748_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035888"
 },
 {
   "sku": 447712000000,
   "title": "Taupe",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602048748_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035888"
 },
 {
   "sku": 447712000000,
   "title": "Taupe",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602048748_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035888"
 },
 {
   "sku": 100633207,
   "title": "Mangrove",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602356003_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4186973"
 },
 {
   "sku": 100633207,
   "title": "Mangrove",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602356003_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4186973"
 },
 {
   "sku": 100633207,
   "title": "Mangrove",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602356003_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4186973"
 },
 {
   "sku": 484938000000,
   "title": "Lady Danger",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602048809_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2602351"
 },
 {
   "sku": 484938000000,
   "title": "Lady Danger",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602048809_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2602351"
 },
 {
   "sku": 484938000000,
   "title": "Lady Danger",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602048809_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2602351"
 },
 {
   "sku": 447709000000,
   "title": "Please Me",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602077496_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035817"
 },
 {
   "sku": 447709000000,
   "title": "Please Me",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602077496_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035817"
 },
 {
   "sku": 447709000000,
   "title": "Please Me",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602077496_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035817"
 },
 {
   "sku": 447683000000,
   "title": "Honeylove",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602077526_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035883"
 },
 {
   "sku": 447683000000,
   "title": "Honeylove",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602077526_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035883"
 },
 {
   "sku": 447683000000,
   "title": "Honeylove",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602077526_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035883"
 },
 {
   "sku": 100041890,
   "title": "Kinda Sexy",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602077533_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100041890,
   "title": "Kinda Sexy",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602077533_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 100041890,
   "title": "Kinda Sexy",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602077533_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 447713000000,
   "title": "Velvet Teddy",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602077540_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035925"
 },
 {
   "sku": 447713000000,
   "title": "Velvet Teddy",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602077540_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035925"
 },
 {
   "sku": 447713000000,
   "title": "Velvet Teddy",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602077540_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035925"
 },
 {
   "sku": 100200787,
   "title": "Antique Velvet",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602388035_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748649"
 },
 {
   "sku": 100200787,
   "title": "Antique Velvet",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602388035_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748649"
 },
 {
   "sku": 100200787,
   "title": "Antique Velvet",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602388035_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748649"
 },
 {
   "sku": 100200769,
   "title": "Tropic Tonic",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602388042_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748629"
 },
 {
   "sku": 100200769,
   "title": "Tropic Tonic",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602388042_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748629"
 },
 {
   "sku": 100200769,
   "title": "Tropic Tonic",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Cream",
   "img": "assets/img/773602388042_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748629"
 },
 {
   "sku": 100200466,
   "title": "D for Danger",
   "piel": "Light",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602388080_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748315"
 },
 {
   "sku": 100200466,
   "title": "D for Danger",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602388080_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748315"
 },
 {
   "sku": 100200466,
   "title": "D for Danger",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Cream",
   "img": "assets/img/773602388080_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748315"
 },
 {
   "sku": 100200481,
   "title": "Whirl",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602388103_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748337"
 },
 {
   "sku": 100200481,
   "title": "Whirl",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602388103_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748337"
 },
 {
   "sku": 100200481,
   "title": "Whirl",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602388103_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748337"
 },
 {
   "sku": 100313113,
   "title": "Mehr",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602284580_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3864677"
 },
 {
   "sku": 100313113,
   "title": "Mehr",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602284580_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3864677"
 },
 {
   "sku": 100313113,
   "title": "Mehr",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Cream",
   "img": "assets/img/773602284580_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3864677"
 },
 {
   "sku": 100676317,
   "title": "Yash",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602284597_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4233194"
 },
 {
   "sku": 100676317,
   "title": "Yash",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602284597_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4233194"
 },
 {
   "sku": 100676317,
   "title": "Yash",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Cream",
   "img": "assets/img/773602284597_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4233194"
 },
 {
   "sku": 482662000000,
   "title": "Candy Yum-Yum",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602297375_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2569795"
 },
 {
   "sku": 482662000000,
   "title": "Candy Yum-Yum",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602297375_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2569795"
 },
 {
   "sku": 482662000000,
   "title": "Candy Yum-Yum",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602297375_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2569795"
 },
 {
   "sku": 498492000000,
   "title": "Heroine",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602339891_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3043826"
 },
 {
   "sku": 498492000000,
   "title": "Heroine",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602339891_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3043826"
 },
 {
   "sku": 498492000000,
   "title": "Heroine",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602339891_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3043826"
 },
 {
   "sku": 430752000000,
   "title": "Sin",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602341368_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3264932"
 },
 {
   "sku": 430752000000,
   "title": "Sin",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602341368_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3264932"
 },
 {
   "sku": 430752000000,
   "title": "Sin",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602341368_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3264932"
 },
 {
   "sku": 100269899,
   "title": "Smoked Purple",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602341375_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3820453"
 },
 {
   "sku": 100269899,
   "title": "Smoked Purple",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602341375_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3820453"
 },
 {
   "sku": 100269899,
   "title": "Smoked Purple",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602341375_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-chili-3g-0-1-us-oz-882419/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3820453"
 },
 {
   "sku": 101772866,
   "title": "A Little Tamed",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602426768_a1.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273464"
 },
 {
   "sku": 101772866,
   "title": "A Little Tamed",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602426768_a2.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273464"
 },
 {
   "sku": 101772866,
   "title": "A Little Tamed",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602426768_a3.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273464"
 },
 {
   "sku": 101772864,
   "title": "Style Shocked!",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602426805_a1.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273462"
 },
 {
   "sku": 101772864,
   "title": "Style Shocked!",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602426805_a2.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273462"
 },
 {
   "sku": 101772864,
   "title": "Style Shocked!",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602426805_a3.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273462"
 },
 {
   "sku": 101772868,
   "title": "Burning Love",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602431304_a1.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273466"
 },
 {
   "sku": 101772868,
   "title": "Burning Love",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602431304_a2.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273466"
 },
 {
   "sku": 101772868,
   "title": "Burning Love",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602431304_a3.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273466"
 },
 {
   "sku": 101772862,
   "title": "Shocking Revelation",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602431342_a1.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273461"
 },
 {
   "sku": 101772862,
   "title": "Shocking Revelation",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602431342_a2.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273461"
 },
 {
   "sku": 101772862,
   "title": "Shocking Revelation",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602431342_a3.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273461"
 },
 {
   "sku": 101772861,
   "title": "Fall In Love",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602434367_a1.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101772861,
   "title": "Fall In Love",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602434367_a2.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101772861,
   "title": "Fall In Love",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602434367_a3.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101772860,
   "title": "Mandarin O",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602434374_a1.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273471"
 },
 {
   "sku": 101772860,
   "title": "Mandarin O",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602434374_a2.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273471"
 },
 {
   "sku": 101772860,
   "title": "Mandarin O",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602434374_a3.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273471"
 },
 {
   "sku": 101772867,
   "title": "Mull It Over",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602522057_a1.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273465"
 },
 {
   "sku": 101772867,
   "title": "Mull It Over",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602522057_a2.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273465"
 },
 {
   "sku": 101772867,
   "title": "Mull It Over",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602522057_a3.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273465"
 },
 {
   "sku": 101772854,
   "title": "Lasting Passion",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602522064_a1.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273460"
 },
 {
   "sku": 101772854,
   "title": "Lasting Passion",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602522064_a2.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273460"
 },
 {
   "sku": 101772854,
   "title": "Lasting Passion",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602522064_a3.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273460"
 },
 {
   "sku": 101772869,
   "title": "Devoted To Chili",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602522071_a1.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273467"
 },
 {
   "sku": 101772869,
   "title": "Devoted To Chili",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602522071_a2.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273467"
 },
 {
   "sku": 101772869,
   "title": "Devoted To Chili",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602522071_a3.jpg",
   "url": "https://ni.siman.com/power-kiss-lipstick-burning-love-101772868/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=5273467"
 },
 {
   "sku": 447710000000,
   "title": "Ruby Woo",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602040605_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2036002"
 },
 {
   "sku": 447710000000,
   "title": "Ruby Woo",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602040605_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2036002"
 },
 {
   "sku": 447710000000,
   "title": "Ruby Woo",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602040605_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2036002"
 },
 {
   "sku": 429516000000,
   "title": "Runway Hit",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602314737_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798570"
 },
 {
   "sku": 429516000000,
   "title": "Runway Hit",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602314737_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798570"
 },
 {
   "sku": 429516000000,
   "title": "Runway Hit",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602314737_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798570"
 },
 {
   "sku": 429517000000,
   "title": "Relentlessly Red",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602314751_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798606"
 },
 {
   "sku": 429517000000,
   "title": "Relentlessly Red",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602314751_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798606"
 },
 {
   "sku": 429517000000,
   "title": "Relentlessly Red",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602314751_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798606"
 },
 {
   "sku": 429517000000,
   "title": "All Fired Up",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602314775_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798462"
 },
 {
   "sku": 429517000000,
   "title": "All Fired Up",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602314775_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798462"
 },
 {
   "sku": 429517000000,
   "title": "All Fired Up",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602314775_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798462"
 },
 {
   "sku": 429517000000,
   "title": "Flat Out Fabulous",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602314782_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798593"
 },
 {
   "sku": 429517000000,
   "title": "Flat Out Fabulous",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602314782_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798593"
 },
 {
   "sku": 429517000000,
   "title": "Flat Out Fabulous",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602314782_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2798593"
 },
 {
   "sku": 100200844,
   "title": "Dangerous",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602388493_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748708"
 },
 {
   "sku": 100200844,
   "title": "Dangerous",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602388493_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748708"
 },
 {
   "sku": 100200844,
   "title": "Dangerous",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602388493_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-lipstick-rouge-a-levres-mat-retro-flat-ruby-woo-3g-477103/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3748708"
 },
 {
   "sku": 100387198,
   "title": "Fashion Legacy",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602376094_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929330"
 },
 {
   "sku": 100387198,
   "title": "Fashion Legacy",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602376094_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929330"
 },
 {
   "sku": 100387198,
   "title": "Fashion Legacy",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602376094_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929330"
 },
 {
   "sku": 100387207,
   "title": "Feels So Grand",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602376100_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929340"
 },
 {
   "sku": 100387207,
   "title": "Feels So Grand",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602376100_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929340"
 },
 {
   "sku": 100387207,
   "title": "Feels So Grand",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602376100_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929340"
 },
 {
   "sku": 100387215,
   "title": "High Drama",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602376117_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929357"
 },
 {
   "sku": 100387215,
   "title": "High Drama",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602376117_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929357"
 },
 {
   "sku": 100387215,
   "title": "High Drama",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602376117_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929357"
 },
 {
   "sku": 100387228,
   "title": "Dance with Me",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602376124_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929370"
 },
 {
   "sku": 100387228,
   "title": "Dance with Me",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602376124_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929370"
 },
 {
   "sku": 100387228,
   "title": "Dance with Me",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602376124_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929370"
 },
 {
   "sku": 100387232,
   "title": "Lady Be Good",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602376131_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929375"
 },
 {
   "sku": 100387232,
   "title": "Lady Be Good",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602376131_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929375"
 },
 {
   "sku": 100387232,
   "title": "Lady Be Good",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602376131_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929375"
 },
 {
   "sku": 100387261,
   "title": "Quite the Standout",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602376179_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929398"
 },
 {
   "sku": 100387261,
   "title": "Quite the Standout",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602376179_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929398"
 },
 {
   "sku": 100387261,
   "title": "Quite the Standout",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602376179_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3929398"
 },
 {
   "sku": 100772840,
   "title": "Carnivorous",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602445165_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4334352"
 },
 {
   "sku": 100772840,
   "title": "Carnivorous",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602445165_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4334352"
 },
 {
   "sku": 100772840,
   "title": "Carnivorous",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602445165_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4334352"
 },
 {
   "sku": 100772917,
   "title": "Burnt Spice",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602445233_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4334469"
 },
 {
   "sku": 100772917,
   "title": "Burnt Spice",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602445233_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4334469"
 },
 {
   "sku": 100772917,
   "title": "Burnt Spice",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602445233_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4334469"
 },
 {
   "sku": 100772832,
   "title": "Topped With Brandy",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602445257_a1.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4334322"
 },
 {
   "sku": 100772832,
   "title": "Topped With Brandy",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602445257_a2.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4334322"
 },
 {
   "sku": 100772832,
   "title": "Topped With Brandy",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602445257_a3.jpg",
   "url": "https://ni.siman.com/retro-matte-liquid-lipcolour-tailored-to-tease-100387246/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=4334322"
 },
 {
   "sku": 101378029,
   "title": "Softly Rockin'",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602494668_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378029,
   "title": "Softly Rockin'",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602494668_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378029,
   "title": "Softly Rockin'",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602494668_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378026,
   "title": "Foiled",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602494705_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378026,
   "title": "Foiled",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602494705_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378026,
   "title": "Foiled",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Shine",
   "img": "assets/img/773602494705_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378021,
   "title": "Love Weapon",
   "piel": "Light",
   "color": "Red",
   "acabado": "Shine",
   "img": "assets/img/773602494750_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378021,
   "title": "Love Weapon",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Shine",
   "img": "assets/img/773602494750_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378021,
   "title": "Love Weapon",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Shine",
   "img": "assets/img/773602494750_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378020,
   "title": "Atomized",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602494767_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378020,
   "title": "Atomized",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602494767_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378020,
   "title": "Atomized",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Shine",
   "img": "assets/img/773602494767_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378016,
   "title": "Gemz & Roses",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602494804_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378016,
   "title": "Gemz & Roses",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602494804_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378016,
   "title": "Gemz & Roses",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602494804_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378015,
   "title": "Metallic Rose",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602494811_a1.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378015,
   "title": "Metallic Rose",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602494811_a2.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 101378015,
   "title": "Metallic Rose",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Shine",
   "img": "assets/img/773602494811_a3.jpg",
   "url": "https://ni.siman.com/amplified-creme-lipstick-rouge-a-levres-dubonnet-3g-476673/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId="
 },
 {
   "sku": 447565000000,
   "title": "Amorous",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602047277_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035675"
 },
 {
   "sku": 447565000000,
   "title": "Amorous",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602047277_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035675"
 },
 {
   "sku": 447565000000,
   "title": "Amorous",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602047277_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035675"
 },
 {
   "sku": 447662000000,
   "title": "Brave",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602048298_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035991"
 },
 {
   "sku": 447662000000,
   "title": "Brave",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602048298_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035991"
 },
 {
   "sku": 447662000000,
   "title": "Brave",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602048298_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035991"
 },
 {
   "sku": 447663000000,
   "title": "Captive",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602048304_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035894"
 },
 {
   "sku": 447663000000,
   "title": "Captive",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602048304_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035894"
 },
 {
   "sku": 447663000000,
   "title": "Captive",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602048304_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035894"
 },
 {
   "sku": 440708000000,
   "title": "Sushi Kiss",
   "piel": "Light",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602345427_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3285397"
 },
 {
   "sku": 440708000000,
   "title": "Sushi Kiss",
   "piel": "Medium",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602345427_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3285397"
 },
 {
   "sku": 440708000000,
   "title": "Sushi Kiss",
   "piel": "Dark",
   "color": "Orange",
   "acabado": "Matte",
   "img": "assets/img/773602345427_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=3285397"
 },
 {
   "sku": 447669000000,
   "title": "Faux",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602048366_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2036000"
 },
 {
   "sku": 447669000000,
   "title": "Faux",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602048366_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2036000"
 },
 {
   "sku": 447669000000,
   "title": "Faux",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602048366_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2036000"
 },
 {
   "sku": 447702000000,
   "title": "Mocha",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602048496_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035927"
 },
 {
   "sku": 447702000000,
   "title": "Mocha",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602048496_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035927"
 },
 {
   "sku": 447702000000,
   "title": "Mocha",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602048496_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035927"
 },
 {
   "sku": 447710000000,
   "title": "Rebel",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602048540_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035917"
 },
 {
   "sku": 447710000000,
   "title": "Rebel",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602048540_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035917"
 },
 {
   "sku": 447710000000,
   "title": "Rebel",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602048540_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035917"
 },
 {
   "sku": 447710000000,
   "title": "Retro",
   "piel": "Light",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602048557_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035830"
 },
 {
   "sku": 447710000000,
   "title": "Retro",
   "piel": "Medium",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602048557_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035830"
 },
 {
   "sku": 447710000000,
   "title": "Retro",
   "piel": "Dark",
   "color": "Berry",
   "acabado": "Matte",
   "img": "assets/img/773602048557_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035830"
 },
 {
   "sku": 447711000000,
   "title": "Spirit",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602048564_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035891"
 },
 {
   "sku": 447711000000,
   "title": "Spirit",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602048564_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035891"
 },
 {
   "sku": 447711000000,
   "title": "Spirit",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602048564_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035891"
 },
 {
   "sku": 447712000000,
   "title": "Twig",
   "piel": "Light",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602048588_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035934"
 },
 {
   "sku": 447712000000,
   "title": "Twig",
   "piel": "Medium",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602048588_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035934"
 },
 {
   "sku": 447712000000,
   "title": "Twig",
   "piel": "Dark",
   "color": "Nude",
   "acabado": "Matte",
   "img": "assets/img/773602048588_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035934"
 },
 {
   "sku": 447701000000,
   "title": "MAC Red",
   "piel": "Light",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602049158_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035819"
 },
 {
   "sku": 447701000000,
   "title": "MAC Red",
   "piel": "Medium",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602049158_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035819"
 },
 {
   "sku": 447701000000,
   "title": "MAC Red",
   "piel": "Dark",
   "color": "Red",
   "acabado": "Matte",
   "img": "assets/img/773602049158_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035819"
 },
 {
   "sku": 447711000000,
   "title": "Snob",
   "piel": "Light",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602049240_a1.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035932"
 },
 {
   "sku": 447711000000,
   "title": "Snob",
   "piel": "Medium",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602049240_a2.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035932"
 },
 {
   "sku": 447711000000,
   "title": "Snob",
   "piel": "Dark",
   "color": "Pink",
   "acabado": "Matte",
   "img": "assets/img/773602049240_a3.jpg",
   "url": "https://ni.siman.com/l-lipstick-cherish-3g-476644/p?utm_source=mac&utm_medium=findertool&utm_campaign=mac-encuentra-tu-tono-ideal&skuId=2035932"
 }
]
      
    }
  }, 
  computed:{
    filterList(){
      var vm = this, lists = vm.lists 
      return _.filter(lists, function(query){
        var piel = vm.piel ? (query.piel == vm.piel) : true,
            color = vm.color ? (query.color == vm.color) : true,
            acabado = vm.acabado ? (query.acabado == vm.acabado) : true;
        
        return piel && color && acabado
      })
    }
  },
  mounted(){
    var vm = this,
        lists= vm.lists
  }
}).$mount('#app')
