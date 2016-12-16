import React, { Component, PropTypes } from 'react';
import {
  Clipboard,
  Text,
  View
} from 'react-native';

import ToolTip from 'react-native-tooltip';

export default class ClipboardText extends Component { 
  propTypes : {
    useTooltip : PropTypes.bool
  }

  onClipboardCopy = () => {
    const sourceText = this.refs.sourceText.props.children;

    Clipboard.setString(sourceText);        
  }

  render() {
    const toolTipActions = [
      {
        text : 'Copy',
        onPress : this.onClipboardCopy
      }
    ];
    
    if(this.props.useTooltip) {
      return (
        <View>
          <ToolTip
            actions={toolTipActions}
            underlayColor='transparent'
            longPress={true}
            arrowDirection='down'>
              <Text ref="sourceText" {...this.props}/>
          </ToolTip>
        </View>
      );  
    }
  
    return (
      <Text ref="sourceText" onLongPress={this.onClipboardCopy} {...this.props}/>
    )
  }
}

