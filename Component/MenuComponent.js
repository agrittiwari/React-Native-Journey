import React from 'react'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

function Menu(props)
{

    keyExtractor = (item, index) => index.toString()
    const renderMenuItem = ({ item, index }) =>
    {
        return (
            <ListItem key={index}>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                    <ListItem.Chevron />
                </ListItem.Content>
            </ListItem>
                
                
        )
    }


    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor= {keyExtractor}
        />
    )
}

export default Menu;