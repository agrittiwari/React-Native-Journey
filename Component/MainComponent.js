import React, { Component } from 'react'
import Menu from './MenuComponent'
import { DISHES } from '../Shared/dishes'
import { View } from 'react-native'

class Main extends Component {
    constructor(props)
    {
        super()
        this.state = {
            dishes: DISHES
        }
       
}

    render(){
        return (
            <View>
             <Menu dishes={this.state.dishes} />
            </View>
            
        )
        
    }

}

export default Main;