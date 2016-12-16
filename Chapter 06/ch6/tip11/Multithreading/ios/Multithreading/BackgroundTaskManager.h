//
//  BackgroundTaskManager.h
//  Multithreading
//
//  Created by Stanislav Bershadskiy on 7/28/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <dispatch/dispatch.h>
#import "RCTBridgeModule.h"

@interface BackgroundTaskManager : NSObject <RCTBridgeModule> {
  dispatch_queue_t backgroundQueue;
}

@end
