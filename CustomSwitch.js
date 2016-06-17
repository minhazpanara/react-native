
// Creatd by Minhaz Panara on 15 June 2016.
// CustomSwitch with labels

'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableHighlight,
} = ReactNative;

var CustomSwitch = React.createClass({

  getDefaultProps() {
    return {
      toggleState: false,
      styles: {},
      activeBackgroundColor: 'rgba(255,255,255,.5)',
      inactiveBackgroundColor: 'rgba(0,0,0,.5)',
      buttonRadius: 15,
      switchWidth: 100,
      switchHeight: 40,
      switchLeft:0,
      switchBottom:0,
      enableSlide: true,
      leftText:'',
      rightText:'',
      onToggle: function() {},
    };
  },

  getInitialState() {
    console.log('CustomSwitch : initial state');
    var state = this.props.toggleState;
    var x1 = 0;
    if (state == true) {
      x1 = (this.props.switchWidth - this.props.switchHeight);
    }
    return (
      this.state = {
        move: new Animated.ValueXY(
          {
            x : x1,
            y : 0,
          }
        ),
        toggleState: state,
        leftText: this.props.leftText,
        rightText: this.props.rightText,
      }
    )
  },

  onToggleInSwitch() {
    if (this.props.enableSlide) {

      var xPos = 0;
      this.setState({
          toggleState: !this.state.toggleState,
      });
      if (this.state.toggleState == false) {
         xPos = this.props.switchWidth - this.props.switchHeight;
      } else {
         xPos = 0;
      }
      Animated.sequence([
        Animated.timing(
          this.state.move,
          {
            duration: 100,
            toValue: {x: xPos, y: 0},
          },
        ).start(this.onToggleComplete),
      ]);
    } else {
      console.warn('Warning: "enableSlide" is false');
    }
  },

  onToggleComplete(){
    if (this.state.toggleState == true) {
       this.props.onToggle(this.state.toggleState, this.state.leftText);
    } else {
       this.props.onToggle(this.state.toggleState, this.state.rightText)
    }
  },

  render() {
    return(
        <View
        style={{
          backgroundColor: this.state.state ? this.props.activeBackgroundColor : this.props.inactiveBackgroundColor,
          height: this.props.switchHeight,
          width: this.props.switchWidth,
          borderRadius: this.props.switchHeight/2,
          position: 'absolute',
          left: this.props.switchLeft,
          bottom: this.props.switchBottom,
          overflow: 'hidden',
        }}
        >
        <TouchableHighlight
        style={{
          backgroundColor: '#E8BC2C',
          height: this.props.switchHeight,
          width: this.props.switchWidth,
          borderRadius: this.props.switchHeight/2,
          position: 'absolute',
          left: 0,
          bottom: 0,
        }}
        underlayColor='#E8BC2C'
        onPress={this.onToggleInSwitch}
        >
          <View style = {{
            flexDirection: 'row',
          }}>

              <Animated.View style={{
                  width: this.props.switchHeight,
                  height: this.props.switchHeight,
                  position: 'absolute',
                  left:0,
                  top:0,
                  borderRadius: this.props.switchHeight/2,
                  backgroundColor: 'white',
                  shadowColor: "#000000",
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 0
                  },
                  transform: [
                    {
                        translateX: this.state.move.x
                    },
                    {
                        translateY: this.state.move.y
                    }
                  ],
                  justifyContent: 'center',
              }}>
                  <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    color: 'white',
                    width: this.props.switchHeight,
                    height: 25,
                    backgroundColor:'transparent',
                    textAlign:'center',
                    justifyContent:'center',
                    position: 'absolute',
                    top: (this.props.switchHeight - 25)/2,
                    left: -50,
                  }}
                  > {this.props.leftText} </Text>

                  <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    color: 'white',
                    width: this.props.switchHeight,
                    height: 25,
                    backgroundColor:'transparent',
                    textAlign:'center',
                    justifyContent:'center',
                    position: 'absolute',
                    right: -50,
                    top: (this.props.switchHeight - 25)/2,
                  }}
                  > {this.props.rightText} </Text>
              </Animated.View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  leftText:{

  },
});

module.exports = CustomSwitch;
