import { useState } from 'react'
import debounce from './debounce';
import PRODUCTS from './PRODUCTS.json';

function FilterableProductTable({products}) {
    const [filterText, setfilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
        <SearchBar 
            inStockOnly={inStockOnly} 
            onFilterTextChange={debounce(setfilterText, 200)} 
            onInStockOnlyChange={setInStockOnly} />
        <ProductTable products={products} 
            filterText={filterText} 
            inStockOnly={inStockOnly} />
        </div>
    )
}

function ProductCategoryRow({category}) {
    return (
        <tr>
            <th colSpan="2" >
            {category}
            </th>
        </tr>
    )
}

function ProductRow({product}){
    const name = product.stocked? product.name : 
        <span style={{color: 'red'}}>{product.name}</span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

function ProductTable({ products, filterText, inStockOnly}){
    const rows = [];
    let lastCategory = null;

    products.forEach( (product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return;
        }
        if(inStockOnly && !product.stocked) return;
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow category={product.category} key={product.category} />
            )
        }
        rows.push(
            <ProductRow product={product} key={product.name}/> 
        )
        lastCategory = product.category
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function SearchBar({inStockOnly, onInStockOnlyChange, onFilterTextChange}) {
    function handleChange(e) {
        onFilterTextChange(e.target.value)
    }
    return (
        <form>
        <input type="text" placeholder="Search..."
        onChange={handleChange}/> <br></br>
        <label>
        <input type="checkbox" checked={inStockOnly} 
        onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
        {' '}
        Only show products in stock
        </label>
        </form>
    )
}

export default function App(){
    return <FilterableProductTable products={PRODUCTS} />;
}





