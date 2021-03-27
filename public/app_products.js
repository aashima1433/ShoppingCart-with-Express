$(function(){
    let productName = $('#productName')
    let productManufacterer = $('#productManufacterer')
    let productPrice = $('#productPrice')
    $('#btnProductAdd').click(function()
    {
       addProduct(
           productName.val(),
           productManufacterer.val(),
           productPrice.val(),
           function (addedProduct){
               window.alert("Added" + addedProduct.name + " to database")
           }

       )
    })
})