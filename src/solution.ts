function formatValue(value:string|number|boolean):string |number|boolean{
    if(typeof value==='string'){
        return value.toLocaleUpperCase();
    } else if(typeof value ==='number'){
        return value * 10;
    }
    else if(typeof value==='boolean'){
        return !value;
    };
    return value;
};









function getLength (value:string |any[]):number{
    if(typeof value === 'string'){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
    return 0;
};





class Person {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, age: ${this.age}`;
    };
} ;







interface  Item{
    title:string;
    rating:number;
}
function filterByRating(items:Item[]):Item[]{
    return items.filter(item=>item.rating >= 4);
}

const books:Item[]=[
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
 ];





interface User {
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}
function filterActiveUsers(users:User[]):User[]{
    if(!Array.isArray(users)){
        console.error("Input must be an array of User object.");
        return [];
    }
    return users.filter((user:User)=>user.isActive);
}

const users:User[]=[
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Rumi', email: 'rumi@example.com', isActive: true },
]







interface Book {
    title:string;
    author:string;
    publishedYear:number;
     isAvailable:boolean;
}

function printBookDetails(book:Book):void{
    const availabilityStatus = book.isAvailable?'Yes':'No';
    console.log(`title:${book.title},author:${book.author},publishedYear:${book.publishedYear},isavailable:${availabilityStatus}`);
}

const myBook:Book={
     title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};







function getUniqueValues(array1:(string|number)[],array2:(string|number)[]){
     const uniqueValues: (string | number)[] = [];

     for(let i =0; i<array1.length; i++){
        if(!uniqueValues.includes(array1[i])){
            uniqueValues.push(array1[i]);
        }
     }
     for(let i =0; i<array2.length; i++){
        if(!uniqueValues.includes(array2[i])){
            uniqueValues.push(array2[i]);
        }
     }
     return uniqueValues;
        
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];







interface Product {
    name:string;
    price:number;
   quantity:number;
    discount:number;
}

function calculateTotalPrice(products:Product[]):number{
    if(products.length===0){
        return 0;
    }

    const total = products.reduce((accumulator,product)=>{
        let productPrice = product.price * product.quantity;
        if(product.discount!==undefined){
            const discountAmount = productPrice *(product.discount /100);
            productPrice -= discountAmount;
        }
        return accumulator + productPrice;
    },0);
    return total;
};
const products=[
      { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
