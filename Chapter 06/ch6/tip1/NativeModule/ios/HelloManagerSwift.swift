//
//  HelloManagerSwift.swift
//  NativeModule
//
//  Created by Stanislav Bershadskiy on 6/26/16.
//
//

import Foundation

@objc(HelloManagerSwift)
class HelloManagerSwift : NSObject {
  
  var bridge: RCTBridge!
  
  @objc func greetUser(name: String, isAdmin: Bool, callback: RCTResponseSenderBlock) -> Void {
    
    NSLog("User Name: %@ , Administrator: %@", name, isAdmin ? "Yes" : "No");
    let greeting = "Welcome \(name), you \(isAdmin ? "are" : "are not") an administrator"
    callback([greeting]);
  }

  @objc func greetUserWithPromises(
    name: String,
    isAdmin: Bool,
    resolver: RCTPromiseResolveBlock,
    rejecter: RCTPromiseRejectBlock) -> Void {

      NSLog("User Name: %@ , Administrator: %@", name, isAdmin ? "Yes" : "No");
      let greeting = "Welcome \(name), you \(isAdmin ? "are" : "are not") an administrator"
      resolver([greeting]);
  }
  
  @objc func greetUserWithEvent(name: String, isAdmin: Bool) {
    NSLog("User Name: %@ , Administrator: %@", name, isAdmin ? "Yes" : "No");
    let greeting = "Welcome \(name), you \(isAdmin ? "are" : "are not") an administrator"
    
    self.bridge.eventDispatcher().sendAppEventWithName("GreetingResponse", body: ["greeting":greeting])
  }
}