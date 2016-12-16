//
//  Button.h
//  NativeUIComponent
//
//  Created by Stanislav Bershadskiy on 7/4/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RCTComponent.h"

@interface Button : UIView

@property (nonatomic, copy) RCTBubblingEventBlock onTap;

@end
