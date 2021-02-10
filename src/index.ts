
import express from 'express' 
const app = express()
app.use(express.json())

let productos : any [] = []

class NuevoProducto {
    id : number
    titulo : string
    precio : number

    constructor(id:number, titulo:string, precio:number){
        this.id = id
        this.titulo = titulo
        this.precio = precio
    
}

}



//traigo productos

app.get('/api/productos', (req,res) =>{
    productos.length < 0 ? res.sendStatus(404) : res.send(productos)
})

//busco producto por id

app.get('/api/productos/:id', (req,res) =>{
    const id = req.params.id
    const producto = productos.find(producto => producto.id == id)
    producto ? res.json(producto) : res.sendStatus(404)
})


//agrego un producto nuevo
app.post('/api/productos', (req: any,res: any)=>{

    const {id,titulo, precio} = req.body
    const producto = new NuevoProducto(id,titulo,precio)
    producto.id = productos.length+1
    productos.push(producto)
    res.sendStatus(201)

})



app.listen(3000,() => {
    console.log('Server listo');
    
})