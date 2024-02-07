export function calculateTotal (items, tax) {
  if (tax < 0) {
    tax = Math.abs(tax)
  }
  let total = 0.0

  for(let item of items){
    
      if(item.taxable == true && tax > 0) {
        let tax_amount = item.price*tax
        total += (item.price) + tax_amount
   
       } else {
         total += item.price
       }
    
  }
  return total
}

const items = [
  {
    price: 100,
    taxable: false
  },
  {
    price: 50,
    taxable: false
  },
  {
    price: 250,
    taxable: true
  }
]

console.log(calculateTotal(items,.0975))