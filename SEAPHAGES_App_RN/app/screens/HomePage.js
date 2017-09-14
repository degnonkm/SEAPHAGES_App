//importing different pages
import React, {Component} from 'react';
import { View, Image, TouchableHighlight} from 'react-native';
import { Button, Header, Title, Body, Content, Card, CardItem, Container, Icon, Right, Text } from 'native-base';
import styles from '../config/styles';
import colors from '../config/colors';

class HomePage extends Component {
    handleAcknowledgementPress = () => {
        this.props.navigation.navigate('acknowledgementCall');
    }

    render () {
        return (
            <Container>
                <Header style = {styles.header}>
                    <Body>
                    <Title style = {styles.headerTitle}>Home</Title>
                    </Body>
                </Header>
                <Content >
                <View>
                  <Image
                    style={{height: 100}}
                    source={{uri: 'https://seaphages.org/static/images/logos/SEAPHAGES_Logo_270x80.png'}}
                  />
                </View>
                    <Text style = {{fontSize: 20, paddingTop: 40, paddingBottom: 40, color: colors.textDark, textAlign: 'center'}}>
                        A mobile tool for in-the-field collection of soil sample data.
                    </Text>

                    <Button
                    block
                    iconLeft
                    style={styles.buttonBlock}
                    onPress={() =>  this.handleAcknowledgementPress()}>
                      <Icon name='people' />
                        <Text>Meet the team behind the app</Text>
                      </Button>
                </Content>

            </Container>
        );
    }
}

export default HomePage;
