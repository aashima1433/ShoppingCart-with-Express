function fetchProducts(done){
    $.get('/api/products',function(data){
        done(data)
    })
}

function addProduct(name, manuf, price, done)
{
    $.post('/api/products',{
        name: name,
        manufacterer: manuf,
        price: price
    }, function(data){
        done(data)
    })
}

function createProductCard(product){
    return $(`<div class="col-4 card mx-2 p-4">
    <h4 class="product-nname">${product.name}</h4>
    <div class="manufacterer-name">${product.manufacterer}</div>
    <div class="row">
        <div class="col-4 m-3 p-3">
            <b>Rs. ${product.price}</b>
        </div>
        <button class="col btn btn-primary m-3">Buy</button>
    </div>
   </div>`)
}
