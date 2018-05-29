import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {

  onRowPress() {
    Actions.employeeCreate({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee.item;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
      >
        <View>
          <CardSection>
            <Text style={styles.textStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;


/*
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
class ListItem extends Component {
onRowPress() {
  Actions.employeeCreate({ employee: this.props.employee.item });
}
render() {
  const { name } = this.props.employee.item;
  // console.log(this.props.employee);
  return (
    <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>
            {name}
          </Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
}
}
const styles = {
titleStyle: {
  fontSize: 18,
  paddingLeft: 15
}
}
export default ListItem;

*/
