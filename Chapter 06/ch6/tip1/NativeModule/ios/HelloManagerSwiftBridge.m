//
//  HelloManagerSwiftBridge.m
//  NativeModule
//
//  Created by Stanislav Bershadskiy on 6/26/16.
//
//

#import <Foundation/Foundation.h>

#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(HelloManagerSwift, NSObject)

RCT_EXTERN_METHOD(greetUser: (NSString *)name isAdmin:(BOOL *)isAdmin callback:(RCTResponseSenderBlock)callback);

RCT_EXTERN_METHOD(greetUserWithPromises: (NSString *)name isAdmin:(BOOL *)isAdmin resolver:(RCTPromiseResolveBlock)resolver rejecter:(RCTPromiseRejectBlock)rejecter);

RCT_EXTERN_METHOD(greetUserWithEvent: (NSString *)name isAdmin:(BOOL *)isAdmin);
@end
