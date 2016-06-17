# react-native

CustomSwitch with labels

# Usage
<CustomSwitch
  style= //your style
  switchWidth= //mendatory
  switchHeight= //mendatory
  switchLeft= //left
  switchBottom= //bottom
  activeBackgroundColor= 
  inactiveBackgroundColor= 
  leftText= 'kg'
  rightText=  'lbs'
  onToggle = //your toggle function to get call back
  enableSlide= // scroll enable
  toggleState= // toggle state on/off
  >
  </CustomSwitch>



# Call-back
_onToggleEvent(state, text){
      console.log('on toggle event with state: '+state + ' with text : '+text);
    },
    
    
