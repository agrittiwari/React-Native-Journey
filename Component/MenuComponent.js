import React from 'react'
import { View, FlatList } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

function Menu(props)
{

    const keyExtractor = (item) => item.id.toString()
    const renderMenuItem = ({ item, index }) =>
    {
        return (
            <ListItem key={index}>
                <Avatar source={require('./images/uthappizza.png')} />
                onPress={() => props.onPress(item.id)}
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle style={{ color: 'blue' }}>{item.description}</ListItem.Subtitle>
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