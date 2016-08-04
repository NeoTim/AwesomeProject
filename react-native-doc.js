import React , {Component } from 'react';
import {AppRegistry, Image} from 'react-native';

class Bananas extends Component {
	render(){
		let pic = {uri : 'image-url'}\
		return <Image source={pic} style={{width:193, height:110}} />
	}
}

AppRegistry.registerComponent('Bananas', ()=> Bananas);


//props
import React ,{Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Greeting';
    }
    render() {
        return (
        	<Text>Hello {this.props.name}</Text>
        );
    }
}

class LotsOfGreetings extends React.Component {
	render(){
		return (
			<View style={{alignItems:'center'}}>
				<Greeting name="Rexx" />
				<Greeting name="Ja" />
				<Greeting name="RJLxx" />
			</View>
		);
	}
}

AppRegistry.registerComponent('LotsOfGreetings', ()=> LotsOfGreetings);


//state
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blink extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	showText: true, 
	  };

	  setInterval(()=>{
		this.setState({showText:!this.state.showText});
	  },1000);
	}

	render(){
		let display = this.state.showText ? this.props.text : '';
		return (
			<Text>{display}</Text>
		);
	}
}

class BlinkApp extends Component {
	render(){
		return (
			<View >
				<Blink text=""/>
				<Blink text=""/>
				<Blink text=""/>
				<Blink text=""/>
			</View>
		);
	}
}

AppRegistry.registerComponent('BlinkApp', ()=> BlinkApp);


//style
import React ,{ Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class LotsOfStyles extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'LotsOfStyles';
    }
    render() {
        return (
        	<View>
        		<Text style={styles.red}>just red</Text>
		        <Text style={styles.bigblue}>just bigblue</Text>
		        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
		        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        	</View>
        );
    }
}

const styles = StyleSheet.create({
	bigblue:{
		color:'bule',
		fontWeight:'bold',
		fontSize:30
	},
	red:{
		color:'red'
	},

});


AppRegistry.registerComponent('LotsOfStyles', ()=> LotsOfStyles);


//height and width

import React ,{Component} from 'react';
import {AppRegistry, View} from 'react-native';

class FixedDimensionsBasics extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'FixedDimensionsBasics';
    }
    render() {
        return (
        	<View>
        		<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
		        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
		        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        	</View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);


//flex 自动适应宽度
/*
A component can only expand to fill available space if its parent has dimensions greater than 0. 
If a parent does not have either a fixed width and height or flex, 
the parent will have dimensions of 0 and the flex children will not be visible.
*/

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);

//flex direction
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);


//justify content
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);



//align items
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class AlignItemsBasics {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);



//https://facebook.github.io/react-native/docs/layout-props.html

//textInput
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{flex: 1,alignItems:'center'}}>
        <TextInput
          style={{height: 40,width:200}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator);

//scrollView
import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:26}}>Scroll me plz</Text>
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:26}}>If you like</Text>
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:36}}>Scrolling down</Text>
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:36}}>What`s the best</Text>
        </ScrollView>
    );
  }
}


AppRegistry.registerComponent(
  'IScrolledDownAndWhatHappenedNextShockedMe',
  () => IScrolledDownAndWhatHappenedNextShockedMe);


//listview
import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

class ListViewBasics extends Component {
	constructor(props) {
	  super(props);
	  const ds = new ListView.DataScource({
	  	rowHasChanged:(row1,row2) => row1 != row2
	  });
	  const data = ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'];
	  this.state = {
	  	dataSource:ds.cloneWithRows()
	  };
	  this.renderRow = this.renderRow.bind(this);
	}

	render(){
		return (
			<View>
				<ListView 
					dataSource={this.state.dataSource} 
					renderRow={this.renderRow} 
				/>
			</View>
		);
	}
	renderRow(rowData){
		return (
			<Text>{rowData}</Text>
		);
	}
}

AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);

//fetch
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})


//xml http request
var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');
  }
};

request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();


//navigator









