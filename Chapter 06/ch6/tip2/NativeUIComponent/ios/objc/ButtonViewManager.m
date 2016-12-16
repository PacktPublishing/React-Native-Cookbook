//
//  ButtonViewManager.m
//  NativeUIComponent
//
//  Created by Stanislav Bershadskiy on 7/1/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "ButtonViewManager.h"
#import "Button.h"
#import "UIView+React.h"

@implementation ButtonViewManager 
RCT_EXPORT_MODULE()

- (UIView *)view {
  Button *button = [[Button alloc] init];
  return button;
}

RCT_EXPORT_VIEW_PROPERTY(buttonText, NSString);
RCT_EXPORT_VIEW_PROPERTY(onTap, RCTBubblingEventBlock);

@end
