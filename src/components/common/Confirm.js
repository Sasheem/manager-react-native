import React from 'react';
import { Modal, View, Text } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

// functional component, not classed based`
const Confirm = ({ children, visible, onAccept, onDecline }) => {

  const { cardSectionStyle, textStyle, containerStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => { console.log('for android') }}   // passing empty fn b/c android requires it
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          // passing reference to onAccept function by passing it w/o ()
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export { Confirm };
