//
//  HelloManager.m
//  NativeModule
//
//  Created by Stanislav Bershadskiy on 6/24/16.
//

#import "HelloManager.h"

#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation HelloManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(greetUser:(NSString *)name isAdmin:(BOOL *)isAdmin callback:(RCTResponseSenderBlock) callback) {
  NSLog(@"User Name: %@ , Administrator: %@", name, isAdmin ? @"Yes" : @"No");
  
  NSString *greeting = [NSString stringWithFormat:@"Welcome %@, you %@ an administrator",
                        name, isAdmin ? @"are" : @"are not"];

  
  callback(@[greeting]);
}


RCT_EXPORT_METHOD(greetUserWithPromises:(NSString *)name
                  isAdmin:(BOOL *)isAdmin
                  resolver: (RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  
  NSLog(@"User Name: %@ , Administrator: %@", name, isAdmin ? @"Yes" : @"No");
  
  NSString *greeting = [NSString stringWithFormat:@"Welcome %@, you %@ an administrator",
                        name, isAdmin ? @"are" : @"are not"];
  
  
  resolve(@[greeting]);
  
}

RCT_EXPORT_METHOD(greetUserWithEvent:(NSString *)name isAdmin:(BOOL *)isAdmin) {
  NSLog(@"User Name: %@ , Administrator: %@", name, isAdmin ? @"Yes" : @"No");
  
  NSString *greeting = [NSString stringWithFormat:@"Welcome %@, you %@ an administrator",
                        name, isAdmin ? @"are" : @"are not"];

  [self.bridge.eventDispatcher sendAppEventWithName:@"GreetingResponse" body:@{@"greeting":greeting}];
}

@end
