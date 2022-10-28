import adminRoute from "./admin.route.js";
import productRoute from "./product.route.js";
import inventoryRoute from "./inventory.route.js"; "./product.route.js";
// import redisRoute from './redis.route.js'
import cartRoute from './cart.route.js'
import orderRoute from './order.route.js'
import categoryRoute from './category.route.js'


function route(app){
    app.use('/admin',adminRoute)
    app.use('/products',productRoute)
    app.use('/categories',categoryRoute)
    app.use('/inventories',inventoryRoute)
    // app.use('/redis',redisRoute)
    app.use('/carts',cartRoute)
    app.use('/orders',orderRoute)

}
export default route