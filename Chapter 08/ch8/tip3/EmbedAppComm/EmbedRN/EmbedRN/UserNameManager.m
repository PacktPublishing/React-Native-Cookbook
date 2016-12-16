//
//  UserNameManager.m
//  EmbedRN
//
//  Created by Stanislav Bershadskiy on 9/8/16.
//  Copyright © 2016 Stanislav Bershadskiy. All rights reserved.
//

#import "UserNameManager.h"
#import "AppDelegate.h"
#import "ViewController.h"

@implementation UserNameManager
RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(setUserName: (NSString *)userName) {
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    ViewController *controller = (ViewController *)delegate.window.rootViewController;
    
    [controller updateUserNameField:userName];
}
@end
