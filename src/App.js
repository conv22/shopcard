import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Menu from './Menu'
import Card from './Card'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    const [addedItems,setAddedItems] = useState([])
    const addToCard = (name) => {
        const quantity = addedItems.map((item) => item.name).includes(name.name)
        if (quantity) {
            changeQuantity(name, 1)
        } else {
                name.quantity = 1;
                setAddedItems([...addedItems, name])
            }
        }
        function changeQuantity (name, x) {
            setAddedItems(addedItems.map(item => {
                if (item.name === name.name) {
                    if (item.quantity === 1 && x === -1){
                        return item
                    }
                    return item = {...item, quantity: item.quantity + x}
                }
                else {
                    return item
                }

            }
            ))
        }

        const deleteItem = (name) => {
            const filteredArray = addedItems.filter(item => item.name !== name.name)
            setAddedItems(filteredArray)
        }
        useEffect(() => {
            let items = localStorage.getItem('addedItems') || []
            setAddedItems(JSON.parse(items))

        }, [])
        useEffect(() => {
            localStorage.setItem('addedItems', JSON.stringify(addedItems))

        }, [addedItems])

        const countItems = addedItems.reduce((acc, currentValue) => acc + currentValue.quantity, 0)

        const totalCost = addedItems
        .map(item => item.price * item.quantity)
        .reduce((acc, currentValue) => acc + currentValue, 0)

    return (
        <Router>
        <div id='App'>
            <Navbar countItems={countItems} />
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Menu' render={(props) => (
              <Menu {...props} addToCard={addToCard} />)} />
            <Route path='/Card' render={(props) => (
              <Card {...props} addedItems={addedItems} deleteItem={deleteItem} totalCost={totalCost} changeQuantity={changeQuantity} />
            )} />
            </Switch>


            
        </div>
        </Router>
    )
}



export default App
